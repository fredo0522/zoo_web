let initialState = {
  animal: {},
  animals: [
  {
    id: 1,
    name: 'León',
    description: 'Descripción del león',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/leonh.jpg'
  },
  {
    id: 2,
    name: 'Zorro Cañero',
    description: 'Descripción del Zorro Cañero',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/zorrocaeroh.jpg'
  },
  {
    id: 3,
    name: 'Jaguar',
    description: 'Descripción del Jaguar',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/jaguarh.jpg'
  },
  {
    id: 4,
    name: 'Nutria Gigante',
    description: 'Descripción de la Nutria',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/nutriah.jpg'
  },
  {
    id: 5,
    name: 'Oso Pardo',
    description: 'Descripción del Oso',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/osopardoh.jpg'
  },
  {
    id: 6,
    name: 'Anaconda',
    description: 'Descripción del Anaconda',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/anacondah.jpg'
  },
  {
    id: 7,
    name: 'Puma',
    description: 'Descripción del Puma',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/pumah.jpg'
  },
  {
    id: 8,
    name: 'Aguila Real',
    description: 'Descripción del Aguila Real',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/aguilarealh.jpg'
  },
  {
    id: 9,
    name: 'Venado de cola Blanca',
    description: 'Descripción del Benado',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/venadoh.jpg'
  }
  ]
};

const animalReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_ANIMAL':
      return {
        ...state,
        animal: action.payload.animal
      };

    default:
      return state;
  }
}

export default animalReducer;
