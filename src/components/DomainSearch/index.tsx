import Button from 'components/Button'
import Radio from 'components/Radio'
import SearchField from 'components/SearchField'
import * as S from './styles'

export type ItemProps = {
  title: string
  titleAfter?: string
  type: string
  name: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

export type DomainSearchProps = {
  items: ItemProps[]
}

const DomainSearch = ({ items }: DomainSearchProps) => (
  <S.Wrapper>
    <S.MainSearch>
      <SearchField name="word" placeholder="Type in a word" type="text" />
      <Button size="xlarge">Search Domains</Button>
    </S.MainSearch>
    {items.map((item) => (
      <div key={item.title}>
        <span>{item.title}</span>
        {item.fields.map((field) => (
          <Radio
            key={field.name}
            id={field.name}
            name={item.name}
            label={field.label}
            labelFor={field.name}
            value={field.name}
          />
        ))}
      </div>
    ))}
  </S.Wrapper>
)

export default DomainSearch
