import path from 'path'

const dirRelativeToPublicFolder = 'lists'

const dir = path.resolve('./public', dirRelativeToPublicFolder)

export const popSuffixTxt = path.join(dir, 'popSuffix.txt')
export const popPrefixTxt = path.join(dir, 'popPrefix.txt')
export const wordsTxt = path.join(dir, 'words.txt')
