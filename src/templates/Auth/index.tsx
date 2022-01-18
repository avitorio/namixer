import Link from 'next/link'
import Image from 'next/image'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const currentYear = new Date().getFullYear()

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Image
        src="/img/auth-bg.jpg"
        alt="Namixer Auth Page"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">
            Amazing, unique and catchy domain names.
          </Heading>
          <S.Subtitle>
            <strong>Namixer</strong> makes you memorable.
          </S.Subtitle>
        </div>

        <S.Footer>Namixer {currentYear} © All rights reserved.</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
