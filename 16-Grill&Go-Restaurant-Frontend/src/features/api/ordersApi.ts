import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiDomain } from '../../proxxy/proxxy';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiDomain }),
  refetchOnReconnect:true,
  refetchOnMountOrArgChange:true,
  
  tagTypes: ['orders', 'order'],
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (createOrderPayload) => ({
        url: 'orders',
        method: 'POST',
        body: createOrderPayload,
      }),
      invalidatesTags: ["orders"]
    }),
    updateOrder: builder.mutation({
      query: ({orderId,...orderUpdatePayload}) => ({
        url: `orders/${orderId}`,
        method: 'PUT',
        body: orderUpdatePayload,
      }),
       invalidatesTags:['orders']
    }),
    getAllOrders: builder.query({
      query: () => 'orders',
      providesTags: ["orders"]
    }),
    getAllOrderById: builder.query({
      query: (orderId) => `orders/${orderId}`,
    }),
    getAllOrderForOneUserById: builder.query({
      query: (userId) => `orders/user?userId=${userId}`,
      providesTags: ["orders"]
    }),
    deleteOrder: builder.mutation({
      query: (orderId) => ({
        url: `orders/${orderId}`,
        method: 'DELETE',
      }),
      invalidatesTags:['orders']
    }),
  }),
});
