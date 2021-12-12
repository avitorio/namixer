import HomeTemplate, { HomeTemplateProps } from 'templates/Home'
import searchOptions from 'components/DomainSearch/searchOptions'

export default function HomePage(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      searchOptions
    }
  }
}
