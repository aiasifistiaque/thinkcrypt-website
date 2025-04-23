import mainApi from './mainApi';

const BASE_LIMIT = 16;

export const commonApi = mainApi.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		getFilters: builder.query({
			query: path => `${path}/get/filters`,
			providesTags: ['filters'],
		}),

		getSchema: builder.query({
			query: path => `${path}/get/schema`,
			providesTags: ['schema'],
		}),

		getCount: builder.query({
			query: ({ path, filters = {} }) => ({
				url: `${path}/get/count`,
				params: { ...filters },
			}),
			providesTags: (result, error, { path }) => [path],
		}),
		getSum: builder.query({
			query: ({ path, field, filters = {} }) => ({
				url: `${path}/get/sum/${field}`,
				params: { ...filters },
			}),
			providesTags: (result, error, { path }) => [path],
		}),
		getAll: builder.query({
			query: ({
				sort = '-createdAt',
				page = 1,
				limit = BASE_LIMIT,
				search = '',
				isActive,
				filters = {},
				path,
			}) => ({
				url: path,
				params: { sort, page, limit, search, isActive, ...filters },
			}),
			providesTags: (result, error, { path }) => [path],
		}),

		getSelectData: builder.query({
			query: id => `${id}?limit=1000&sort=name`,
			providesTags: ['filters', 'products', 'brands', 'categories', 'coupons', 'collections'],
		}),
		getById: builder.query({
			query: ({ path, id, invalidate = [] }) => `${path}/${id}`,
			providesTags: (result, error, { path, invalidate = [] }) => [path, ...invalidate],
		}),

		get: builder.query({
			query: ({ path, invalidate = [] }) => `${path}`,
			providesTags: (result, error, { path, invalidate = [] }) => [path, ...invalidate],
		}),

		getOne: builder.query({
			query: ({ path, invalidate = [] }) => `${path}/get/one`,
			providesTags: (result, error, { path, invalidate = [] }) => [path, ...invalidate],
		}),

		getByIdToEdit: builder.query({
			query: ({ path, id, invalidate }) => `${path}/edit/${id}`,
			providesTags: (result, error, { path, invalidate = [] }) => [path, ...invalidate],
		}),
		post: builder.mutation({
			query: ({ path, body, invalidate }) => ({
				url: path,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: (result, error, { path, invalidate = [] }) => [
				'filters',
				path,
				...invalidate,
			],
		}),
		export: builder.mutation({
			query: ({ path, body, invalidate, type = 'csv' }) => ({
				url: `${path}/export/${type}`,
				method: 'POST',
				body: { fields: body },
				responseHandler: response => response.blob(),
			}),
			onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
				try {
					const result = await queryFulfilled;

					const url = window.URL.createObjectURL(result.data);
					const link = document.createElement('a');
					link.href = url;
					const date = new Date();
					const fileExtension = arg.type == 'pdf' ? 'pdf' : 'csv';

					const timestamp = date.toISOString().replace(/[:.]/g, '-');
					const name = arg?.path.toUpperCase().replace('/', '_');
					link.setAttribute('download', `${name}_${timestamp}.${fileExtension}`);

					document.body.appendChild(link);
					link.click();
					link.remove();
				} catch (e) {
					//throw new Error(e.message);
				}
			},
		}),

		exportMany: builder.mutation({
			query: ({ path, body, invalidate, type = 'csv' }) => ({
				url: `${path}/export/${type}`,
				method: 'POST',
				body: { fields: body?.fields, ids: body?.ids },
				responseHandler: response => response.blob(),
			}),
			onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
				try {
					const result = await queryFulfilled;

					const url = window.URL.createObjectURL(result.data);
					const link = document.createElement('a');
					link.href = url;
					const date = new Date();
					const timestamp = date.toISOString().replace(/[:.]/g, '-');
					link.setAttribute('download', `data_${timestamp}.csv`);

					document.body.appendChild(link);
					link.click();
					link.remove();
				} catch (e) {
					//throw new Error(e.message);
				}
			},
		}),
		updateById: builder.mutation({
			query: ({ path, id, body, invalidate }) => ({
				url: `${path}/${id}`,
				method: 'PUT',
				body: body,
			}),
			invalidatesTags: (result, error, { path, id, invalidate = [] }) => [path, ...invalidate],
		}),
		deleteById: builder.mutation({
			query: ({ path, id, invalidate }) => ({
				url: `${path}/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, { path, id, invalidate = [] }) => [path, ...invalidate],
		}),
		updateMany: builder.mutation({
			query: ({ path, body }) => ({
				url: `${path}/update/many`,
				method: 'PUT',
				body: body,
			}),
			invalidatesTags: (result, error, { path, invalidate = '' }) => [path, invalidate],
		}),
		copyItem: builder.mutation({
			query: ({ path, body, invalidate }) => ({
				url: `${path}/copy/${body.id}`,
				method: 'PUT',
				body: body,
			}),
			invalidatesTags: (result, error, { path, invalidate = [] }) => [path, ...invalidate],
		}),
		deleteProductlistByKeyId: builder.mutation({
			query: ({ path, id, key, invalidate }) => ({
				url: `${path}/${id}?key=${key}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, { path, id, invalidate }) => [path, ...invalidate],
		}),
	}),
});

export const {
	useGetFiltersQuery,
	useGetSelectDataQuery,
	useGetByIdQuery,
	useUpdateByIdMutation,
	useGetAllQuery,
	useDeleteByIdMutation,
	usePostMutation,
	useGetCountQuery,
	useExportMutation,
	useUpdateManyMutation,
	useCopyItemMutation,
	useGetByIdToEditQuery,
	useLazyGetByIdToEditQuery,
	useExportManyMutation,
	useGetSumQuery,
	useGetOneQuery,
	useLazyGetAllQuery,
	useLazyGetByIdQuery,
	useLazyGetQuery,
	useGetQuery,
	useDeleteProductlistByKeyIdMutation,
	useGetSchemaQuery,
} = commonApi;
