let initialState = {
	animal: {},
	animals: []
};

const animalReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_ANIMALS":
			return {
				...state,
				animals: action.payload.animals,
			};
		case "SET_ANIMAL":
			return {
				...state,
				animal: action.payload.animal,
			};
		case "SET_ANIMAL_BY_ID":
			for (let i = 0; i < state.animals.length; i++) {
				if (state.animals[i].id === action.payload.id) {
					return {
						...state,
						animal: state.animals[i],
					};
				}
			}
			return {
				...state,
				animal: {},
			};
		
		default:
			return state;
	}
};

export default animalReducer;
