import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tagTypes = ['clients', 'projects', 'setvices'];

const mainApi = createApi({
	reducerPath: 'mainApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${process.env.NEXT_PUBLIC_BACKEND}/`,
		prepareHeaders: (headers, { getState }) => {
			const token = process.env.NEXT_PUBLIC_TOKEN;
			if (token) {
				headers.set('authorization', token);
			}
		},
	}),
	tagTypes: tagTypes,
	endpoints: builder => ({}),
});

export default mainApi;
