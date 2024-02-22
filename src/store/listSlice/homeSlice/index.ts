import { createSlice } from '@reduxjs/toolkit';
import { adapterCardCreate } from '../../../features/CreateNewDeck/utils';

export interface IDetailsCards {
	title: object;
	response: string;
}

interface ICardAction {
	cardDetails: IDetailsCards;
	titleCardSelected: string;
	cardsStore: any; // cualquier array
}

interface IintialStateCardsState {
	cards: IDetailsCards[];
	cardSelectedTitle: string;
}

interface IActionListCard {
	payload: ICardAction;
}
interface IActionSetTitleCard {
	payload: string;
}

const initialState: IintialStateCardsState = {
	cards: [],
	cardSelectedTitle: '',
};

export const homeSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		listCards: (state: IintialStateCardsState, action: IActionListCard) => {
			const listCardsAdapter = adapterCardCreate(action.payload);
			console.log('listCardsAdapter', listCardsAdapter);

			state.cards = [listCardsAdapter];
		},
		setTitleCardSelected: (
			state: IintialStateCardsState,
			action: IActionSetTitleCard,
		) => {
			state.cardSelectedTitle = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { listCards, setTitleCardSelected } = homeSlice.actions;

export default homeSlice.reducer;
