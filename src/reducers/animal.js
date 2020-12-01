let initialState = {
	animal: {},
	animals: [],
	filtered: [],
};

const getClearName = function (name, tenerEnhe = false) {
	let clearName = name.toUpperCase();
	for (let i = 0; i < clearName.length; i++) {
		if (clearName[i] !== "Ñ" || tenerEnhe) {
			clearName =
				clearName.substring(0, i) +
				clearName[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "") +
				clearName.substring(i + 1, clearName.length);
		}
	}
	return clearName;
};

const animalReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_ANIMALS":
			console.log( action.payload.animals )
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
		case "FILTER_ANIMALS":
			let text = action.payload.name.toUpperCase().trim();
			console.log(  )
			if (text === "") {
				return {
					...state,
					filtered: state.animals,
				};
			}
			else {
				text = getClearName(text)
				let res = state.animals.filter((animal) =>
					getClearName(animal.name).includes(text)
				);
				return {
					...state,
					filtered: res,
				};
			}
		default:
			return state;
	}
};

export default animalReducer;