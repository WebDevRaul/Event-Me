import photo from '../../../assets/images/questionMark.jpg';

const data = [
  {
    id: '1',
    title: 'Trip to Chisinau',
    date: '2019-11-15',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus.',
    city: 'Chisinau, MLD',
    location: "Mol Dova, Nr.1",
    hostedBy: 'Joana',
    hostPhoto: photo,
    members: [
      {
        id: '1a',
        name: 'Cristina',
        photo: photo
      },
      {
        id: '1b',
        name: 'Marius',
        photo: photo
      }
    ]
  },
  {    
    id: '1',
    title: 'Trip to Hincesti',
    date: '2019-12-31',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt.',
    city: 'Hincesti, MLD',
    location: "Hanul lui Manuc",
    hostedBy: 'Town Hall',
    hostPhoto: photo,
    members: [
      {
        id: '1a',
        name: 'Vasilica',
        photo: photo
      },
      {
        id: '1b',
        name: 'Gheorghita',
        photo: photo
      }
    ]
  },
]

export default data;
