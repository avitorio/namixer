export default [
  {
    title: 'Mix',
    titleAter: '',
    name: 'type',
    type: 'radio',
    fields: [
      {
        label: 'Popular Words',
        name: 'topWords'
      },
      {
        label: 'Alphabet',
        name: 'alphabet'
      },
      {
        label: 'Dictionary',
        name: 'dictionary'
      }
    ]
  },
  {
    title: 'Add a',
    titleAter: '',
    name: 'order',
    type: 'radio',
    fields: [
      {
        label: 'Prefix',
        name: 'prefix'
      },
      {
        label: 'Suffix',
        name: 'suffix'
      }
    ]
  },
  {
    title: 'with:',
    titleAfter: 'characters.',
    name: 'size',
    type: 'select',
    fields: {
      alphabet: [
        {
          label: '1',
          name: '1',
          selected: true
        },
        {
          label: '2',
          name: '2'
        }
      ],
      dictionary: [
        {
          label: '2',
          name: '2',
          selected: true
        },
        {
          label: '3',
          name: '3'
        },
        {
          label: '4',
          name: '4'
        },
        {
          label: '5',
          name: '5'
        }
      ]
    }
  }
]
