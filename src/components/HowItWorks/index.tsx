import { Container } from 'components/Container'
import Heading from 'components/Heading'
import * as S from './styles'

const HowItWorks = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <Heading color="black" size="large" lineBottom lineColor="primary">
          About Namixer
        </Heading>
        <p>
          Every business needs a name. Unfortunately it seems like all good
          domain names are taken. It is frustrating to come up with a clever
          name just to find out someone has snatched it before you did.
        </p>
        <p>
          After countless manual tries, I have decided to automate the process
          of finding good available domains. That&apos;s why I created Namixer.
        </p>
      </S.Content>
      <S.Content id="how-it-works">
        <Heading color="black" size="large" lineBottom lineColor="primary">
          How does Namixer work?
        </Heading>
        <p>
          Namixer takes one word input and mixes it with other words, then
          checks to see if the domain name for that combination of words is
          available. That&apos;s basically it.
        </p>
      </S.Content>
      <S.Content>
        <Heading color="black" size="large" lineBottom lineColor="primary">
          What are Mixers?
        </Heading>
        <p>
          Mixers are the types of combinations that are used to create the
          domain. There are currently 3 mixers: Popular, Alphabet and
          Dictionary.
        </p>
        <ul>
          <li>
            <strong>Popular</strong>: A dictionary of the most popular words
            used in domain names. This mixer will help you create domain names
            like: You
            <strong>Tube</strong>.com, Face<strong>Book</strong>.com, Git
            <strong>Hub</strong>.com, etc...
          </li>
          <li>
            <strong>Alphabet</strong>: All 26 letters of the alphabet, with the
            option to have up to 2 characters. This mixer will create
            combinations of letters that are still pronounceable and it will
            help you create domains like: Flick<strong>r</strong>.com, Img
            <strong>Ur</strong>.com, Spoti
            <strong>fy</strong>.com, etc...
          </li>
          <li>
            <strong>Dictionary</strong>: A regular dictionary of popular english
            words. It works similarly to the Popular mixer, but it uses a
            broader dictionary. Example of possible combinations: Blog
            <strong>Spot</strong>.com, Micro
            <strong>Soft</strong>.com, Drop
            <strong>Box</strong>.com, etc...
          </li>
        </ul>
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default HowItWorks
