import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import cursorSlice from './slice/cursorSlice';
import mainApi from './services/mainApi';

export const store = configureStore({
	reducer: {
		cursor: cursorSlice,
		[mainApi.reducerPath]: mainApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat().concat(mainApi.middleware),
	devTools: true,
});

store.subscribe(() => {});

setupListeners(store.dispatch);

export * from './services/commonService';
