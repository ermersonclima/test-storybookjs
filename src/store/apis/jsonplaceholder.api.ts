import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface GetUserByIdResults  {
    id: number
    name: string
    username: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: string
        lng: string
      }
    },
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
}

interface GetPostByIdResults {
    userId: number
    id: number
    title: string
    body: string
}

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholder',
  keepUnusedDataFor: 60,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getUserById: builder.query<GetUserByIdResults, string>({
      query: (id) => `users/${id}`,
    }),
    getPostById: builder.query<GetPostByIdResults, string>({
        query: (id) => `posts/${id}`,
      })
  }),
})

export const { useGetUserByIdQuery, useGetPostByIdQuery } = jsonPlaceholderApi