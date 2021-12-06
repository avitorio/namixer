import readline from 'readline'
import fs from 'fs'
import { vowels, alphabet, consonants } from './lists/characters'
import { popPrefixTxt, popSuffixTxt, wordsTxt } from './lists/lists'

const pageLimit = 30

function checkEdgeVowel(number, startsWithWord, word) {
  return startsWithWord
    ? vowels.includes(word[word.length - number])
    : vowels.includes(word[number - 1])
}

const addCharacter = (
  array = [],
  tld = '.com',
  word,
  startsWithWord = true,
  size = 1,
  iteration = 0
) => {
  size = size > 2 ? 2 : size
  let lettersArray

  // Check if last or first word is a vowel
  const hasEdgeVowel = checkEdgeVowel(1, startsWithWord, word)

  // Check if second or second last word is vowel

  const hasNextEdgeVowel = checkEdgeVowel(2, startsWithWord, word)

  // If the client wants to add just one letter after their word
  // Use entire alphabet, else check last word to use either vowel
  // or alphabet to try creating a pronounceable domain
  if (iteration === 0 && size <= 1) {
    lettersArray = alphabet
  } else if (hasEdgeVowel && hasNextEdgeVowel) {
    lettersArray = consonants
  } else {
    lettersArray = hasEdgeVowel ? alphabet : vowels
  }

  const list = lettersArray.map((letter) => {
    const newWord = startsWithWord ? `${word + letter}` : `${letter + word}`
    if (size && size > 1) {
      addCharacter(array, tld, newWord, startsWithWord, size - 1, iteration + 1)
    }
    if (iteration === 0) {
      array.push(newWord + tld)
    } else if (
      checkEdgeVowel(1, startsWithWord, newWord) ||
      checkEdgeVowel(2, startsWithWord, newWord)
    ) {
      // Only check domains that have at least 1 vowel in its last 2 characters
      array.push(newWord + tld)
    }
  })

  return list
}

async function topWordsMixer(
  array = [],
  word,
  tld = '.com',
  order,
  lineStart = 0
) {
  let lineCount = 0
  const file = order === 'prefix' ? popPrefixTxt : popSuffixTxt
  const rl = readline.createInterface({
    input: fs.createReadStream(file)
  })

  for await (const line of rl) {
    if (lineCount < lineStart) {
      lineCount += 1
    } else if (lineCount >= lineStart && lineCount < lineStart + pageLimit) {
      const newWord = line.replace('+', word)
      array.push(newWord + tld)
      lineCount += 1
    } else {
      rl.close()
      break
    }
  }

  return array
}

async function dictionary(
  array = [],
  word,
  tld = '.com',
  startsWithWord = true,
  lineStart = 0,
  size = false
) {
  let lineCount = 0

  const rl = readline.createInterface({
    input: fs.createReadStream(wordsTxt)
  })

  for await (const line of rl) {
    // Get current line count and see if it's over the line-count limit
    if (size && line.length < size) {
      lineStart += 1
      lineCount += 1
    } else if (lineCount < lineStart) {
      lineCount += 1
      if (size && line.length > size) {
        rl.close()
        break
      }
    } else if (lineCount >= lineStart && lineCount < lineStart + pageLimit) {
      const newWord = startsWithWord ? `${word + line}` : `${line + word}`
      array.push(newWord + tld)
      lineCount += 1
    } else {
      rl.close()
      break
    }
  }
}

async function handler(req, res) {
  const list = []
  const tld = '.com'
  const { type, word, order, line, size } = req.query
  const split = word.split(' ')
  const newSplit = split.map((splitWord) => {
    return splitWord.charAt(0).toUpperCase() + splitWord.slice(1).toLowerCase()
  })

  const escapedWord = newSplit.join('')
  if (type === 'alphabet') {
    addCharacter(list, tld, escapedWord, order === 'suffix', size)
  } else if (type === 'topWords') {
    await topWordsMixer(list, escapedWord, tld, order, parseInt(line))
  } else if (type === 'dictionary') {
    await dictionary(
      list,
      escapedWord,
      tld,
      order === 'suffix',
      parseInt(line),
      size
    )
  }
  res.status(200).json({ list })
}

export default handler
