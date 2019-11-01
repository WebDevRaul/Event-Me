import photo from '../../assets/images/questionMark.jpg';

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
    user_id: '5a',
    hostPhoto: photo,
    members: [
      {
        id: '1a',
        name: 'Cristina',
        photo: photo
      },
      {
        id: '2a',
        name: 'Marius',
        photo: photo
      }
    ]
  },
  {    
    id: '2',
    title: 'Trip to Hincesti',
    date: '2019-12-31',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt.',
    city: 'Hincesti, MLD',
    location: "Hanul lui Manuc",
    hostedBy: 'Town Hall',
    user_id: '6a',
    hostPhoto: photo,
    members: [
      {
        id: '3a',
        name: 'Vasilica',
        photo: photo
      },
      {
        id: '4a',
        name: 'Gheorghita',
        photo: photo
      }
    ]
  },
]

export default data;
