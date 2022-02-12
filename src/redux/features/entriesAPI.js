import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const entriesApi = createApi({
  reducerPath: "entriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/entry/" }),
  endpoints: (builder) => ({
    getEntryCount: builder.query({
      query: () => "count",
    }),
    getLastEntries: builder.query({
      query: (quantity = 10) => `${quantity}`,
    }),
  }),
});

export const { useGetEntryCountQuery, useGetLastEntriesQuery } = entriesApi;
