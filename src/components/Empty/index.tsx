import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/Button'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <Image
      src="/img/empty.svg"
      width={380}
      height={285}
      alt="A gamer in a couch playing videogame"
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back home</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
