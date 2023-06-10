import {
  createApi
} from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../app/CustomFetchBase";

export interface AddHotelRequest {
  title: string;
  description: string;
}


export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({

    getDiscount: builder.query({
      query() {
        return {
          url: `shop/discount`,
        }
      },
    }),

    getCollection: builder.query({
      query() {
        return {
          url: `shop/collection`,
        }
      },
    }),

    getProduct: builder.query({
      query(id) {
        return {
          url: `shop/product/${id}`,
        }
      },
    }),

  }),
});


export const {
  useGetDiscountQuery,
  useGetCollectionQuery,
  useGetProductQuery,
} = shopApi;



