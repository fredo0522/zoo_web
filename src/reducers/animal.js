let initialState = {
  animal: {},
  animals: [{
    id: 1,
    name: 'León',
    description: 'Descripción del león',
    img: ''
  }, {
    id: 2,
    name: 'Zorro',
    description: 'Descripción del zorro',
    img: ''
  }, {
    id: 3,
    name: 'Tigre',
    description: 'Descripción del tigre',
    img: ''
  }]
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
