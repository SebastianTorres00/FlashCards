import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../store/listSlice/homeSlice';

export const store = configureStore({
	reducer: {
		listCard: homeSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
