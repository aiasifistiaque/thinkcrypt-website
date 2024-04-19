import { createSlice } from '@reduxjs/toolkit';

const initialState = { size: '32px', invert: '0%', contrast: '100%', hue: '0' };

const cursorSlice = createSlice({
	name: 'cursor',
	initialState,
	reducers: {
		onHover(state) {
			state.size = '32px';
			state.invert = '100%';
			state.contrast = '150%';
			state.hue = '180deg';
		},
		unHover(state) {
			state.size = '24px';
			state.invert = '0%';
			state.contrast = '100%';
			state.hue = '0';
		},
	},
});

export const { onHover, unHover } = cursorSlice.actions;
export default cursorSlice.reducer;
