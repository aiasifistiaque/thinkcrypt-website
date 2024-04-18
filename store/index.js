import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import cursorSlice from './slice/cursorSlice';

export const store = configureStore({
	reducer: {
		cursor: cursorSlice,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
	devTools: true,
});

store.subscribe(() => {});

setupListeners(store.dispatch);
