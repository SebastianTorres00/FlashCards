import { createSlice } from '@reduxjs/toolkit';

export interface CardsState {
	cards: any[];
}

const initialState: CardsState = {
	cards: [],
};

export const homeSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		listCards: (state) => {
			state.cards;
		},
	},
});

// Action creators are generated for each case reducer function
export const { listCards } = homeSlice.actions;

export default homeSlice.reducer;
