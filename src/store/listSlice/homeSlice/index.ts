import { createSlice } from '@reduxjs/toolkit';

interface IDetailsCards {
	title: object;
	response: string;
}

export interface CardsState {
	cards: IDetailsCards[];
}

interface IActionListCard {
	payload: IDetailsCards;
}

const initialState: CardsState = {
	cards: [],
};

/*

	cards :[
		ingles: [
			{
				title: {0: "title"},
				response: "details response"
			}
		]
	]

*/

export const homeSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		listCards: (state: CardsState, action: IActionListCard) => {
			console.log('listCards :::: state', state);
			console.log('listCards :::: action', action);
			state.cards.push(action?.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { listCards } = homeSlice.actions;

export default homeSlice.reducer;
