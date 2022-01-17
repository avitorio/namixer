import * as S from './styles'

import Base from 'templates/Base'
import { Container } from 'components/Container'

export type BlogTemplateProps = {
  title: string
  subtitle?: string
  children: React.ReactNode
}

const Blog = ({ title, subtitle, children }: BlogTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.MainTitle>{title}</S.MainTitle>
          <S.Paragraph>{subtitle}</S.Paragraph>
        </S.Wrapper>
      </Container>
      <S.ContentWrapper>
        <Container>
          <S.Content>{children}</S.Content>
        </Container>
      </S.ContentWrapper>
    </Base>
  )
}

export default Blog
