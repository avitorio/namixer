export default [
  {
    title: 'Mix',
    titleAter: '',
    name: 'type',
    type: 'radio',
    fields: [
      {
        label: 'Popular',
        name: 'topWords',
        tooltip: {
          title: 'Popular Mix:',
          description: 'Mix your keyword with a list of popular keywords.',
          keyword: 'Brazil',
          example: '"BrazilTv.com", "BrazilCo.com", "BrazilUp.com"...'
        }
      },
      {
        label: 'Alphabet',
        name: 'alphabet',
        tooltip: {
          title: 'Alphabet Mix:',
          description:
            'Mixes your keyword with letters and combination of letters.',
          keyword: 'Crypto',
          example: '"CryptoA.com", "CryptoB.com", "CryptoC.com"...'
        }
      },
      {
        label: 'Dictionary',
        name: 'dictionary',
        tooltip: {
          title: 'Dictionary Mix:',
          description: 'Mixes your keyword with words from the dictionary.',
          keyword: 'Meta',
          example: '"MetaBall.com", "MetaBill.com", "MetaCall.com"...'
        }
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
