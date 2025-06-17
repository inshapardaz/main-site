import { createApi } from "@reduxjs/toolkit/query/react";

// local Imports
import axiosBaseQuery from "@/utils/axiosBaseQuery";
import { parseResponse } from "@/utils/parseResponse";

// ----------------------------------------------
export const librariesApi = createApi({
    reducerPath: "libraries",
    baseQuery: axiosBaseQuery(),
    tagTypes: ["Libraries", "Library"],
    endpoints: (builder) => ({
        getLibraries: builder.query({
            query: ({
                query = null,
                pageNumber = 1,
                pageSize = 12,
                sortBy = null,
                sortDirection = null,
            }) => {
                let queryVal = query ? `&query=${query}` : "";
                if (sortBy) {
                    queryVal += `&sortBy=${sortBy}`;
                }
                if (sortDirection) {
                    queryVal += `&sortDirection=${sortDirection}`;
                }
                return {
                    url: `/libraries?pageNumber=${pageNumber}&pageSize=${pageSize}${queryVal}`,
                    method: "get",
                };
            },
            transformResponse: (response) => parseResponse(response),
            providesTags: ["Libraries"],
        }),
        getLibrary: builder.query({
            query: ({ libraryId }) => ({
                url: `/libraries/${libraryId}`,
                method: "get",
            }),
            transformResponse: (response) => parseResponse(response),
            providesTags: ["Libraries"],
        }),
    }),
});

export const {
    useGetLibrariesQuery,
    useGetLibraryQuery,
} = librariesApi;
