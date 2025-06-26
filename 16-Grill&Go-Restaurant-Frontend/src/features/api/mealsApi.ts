import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiDomain } from '../../proxxy/proxxy';

export const mealApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiDomain }),
  refetchOnReconnect:true,
  refetchOnMountOrArgChange:true,  
  tagTypes: ['meals', 'meal'],
  endpoints: (builder) => ({
    createMeal: builder.mutation({
      query: (createMealPayload) => ({
        url: 'meals',
        method: 'POST',
        body: createMealPayload,
      }),
      invalidatesTags: ["meals"]
    }),
    updateMeal: builder.mutation({
      query: (mealUpdatePayload) => ({
        url: 'meals',
        method: 'PUT',
        body: mealUpdatePayload,
      }),
    }),
    getAllMeals: builder.query({
      query: () => 'meals',
      providesTags: ["meals"]
    }),
    getAllMealById: builder.query({
      query: (mealId) => `meals/${mealId}`,
    }),
    deleteMeal: builder.mutation({
      query: (mealId) => ({
        url: `meals/${mealId}`,
        method: 'DELETE',
      }),
      invalidatesTags:['meals']
    }),
  }),
});
