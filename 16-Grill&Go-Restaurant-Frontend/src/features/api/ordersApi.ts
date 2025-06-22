import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  refetchOnReconnect:true,
  refetchOnMountOrArgChange:true,
  
  tagTypes: ['orders', 'order'],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (createMealPayload) => ({
        url: 'meals',
        method: 'POST',
        body: createMealPayload,
      }),
      invalidatesTags: ["orders"]
    }),
    updateOrder: builder.mutation({
      query: (mealUpdatePayload) => ({
        url: 'meals',
        method: 'PUT',
        body: mealUpdatePayload,
      }),
    }),
    getAllOrders: builder.query({
      query: () => 'meals',
      providesTags: ["orders"]
    }),
    getAllOrderById: builder.query({
      query: (mealId) => `meals/${mealId}`,
    }),
    deleteOrder: builder.mutation({
      query: (mealId) => ({
        url: `meals/${mealId}`,
        method: 'DELETE',
      }),
      invalidatesTags:['orders']
    }),
  }),
});
