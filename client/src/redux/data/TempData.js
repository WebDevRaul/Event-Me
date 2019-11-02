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
        user_id: '1a',
        first_name: 'Cristina',
        photo: photo
      },
      {
        user_id: '2a',
        first_name: 'Marius',
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
        user_id: '3a',
        first_name: 'Vasilica',
        photo: photo
      },
      {
        user_id: '4a',
        first_name: 'Gheorghita',
        photo: photo
      }
    ]
  },
]

export default data;
