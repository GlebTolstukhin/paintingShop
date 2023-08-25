import {createApi, fetchBaseQuery   } from "@reduxjs/toolkit/query/react"

export const itemsApi = createApi({
    reducerPath: "itemsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001"}),
    endpoints: (build) => ({
        getItems: build.query({
            query: () => '/items',
        }),
        toBasket: build.mutation({
            query: ({id, body}) => ({
                url: `items/${id}`,
                method: "PATCH",
                body: {status: body}
            })
        }),
        addPainting: build.mutation({
            query: (body) => ({
                url: "/items",
                method: "POST",
                body: body
            })
        })
        
    })
})

export const {useGetItemsQuery, useToBasketMutation, useAddPaintingMutation} = itemsApi;