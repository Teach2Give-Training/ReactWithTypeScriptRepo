import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/' }),
    refetchOnFocus: true,
    tagTypes: ['books'],
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => 'books',
            providesTags: ['books']
        }),
        deleteBookById: builder.mutation({
            query: (bookId) => ({
                url: `books/${bookId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['books']
        }),
        addBook: builder.mutation({
            query: (AddBookPayLoad) => ({
                url: 'books',
                method: 'POST',
                body: AddBookPayLoad
            }),
            invalidatesTags: ['books']
        }),
        updateBook: builder.mutation({
            query: ({ bookId, ...updateBookPayload }) => ({
                url: `books/${bookId}`,
                method: 'PUT',
                body: updateBookPayload
            }),
            invalidatesTags: ['books']
        }),
        getBooksByName: builder.query({
            query: ({ search}) => ({ 
                url: `books/search/?search=${search}`
            }),           
        }),
    })
})