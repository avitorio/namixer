import HomeTemplate, { HomeTemplateProps } from 'templates/Home'
import filterItemsMock from 'components/DomainSearch/mock'

export default function HomePage(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      filterItems: filterItemsMock
    }
  }
}
