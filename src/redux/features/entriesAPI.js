import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const entriesApi = createApi({
  reducerPath: "entriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://scrapaste-api.herokuapp.com/api/" }),
  endpoints: (builder) => ({
    getEntryCount: builder.query({
      query: () => "entry/count",
    }),
    getEntryCountToday: builder.query({
      query: () => "/stats/today_count",
    }),
    getTopicDetails: builder.query({
      query: () => "/stats/topic_count",
    }),
    getEntriesByHour: builder.query({
      query: () => "/stats/hourly",
    }),
    getLastEntries: builder.query({
      query: (quantity = 10) => `entry/${quantity}`,
    }),
    getEntriesBySearch: builder.query({
      query: (input = "") => `entry/search/${input}`,
    }),
  }),
});

export const {
  useGetEntriesByHourQuery,
  useGetTopicDetailsQuery,
  useGetEntryCountQuery,
  useGetEntryCountTodayQuery,
  useGetLastEntriesQuery,
  useGetEntriesBySearchQuery,
} = entriesApi;
