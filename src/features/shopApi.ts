import {
  createApi
} from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../app/CustomFetchBase";
import IProduct from "src/models/IProduct";
import IProducts from "src/models/IProducts";


export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({

    getDiscount: builder.query<IProduct[], string | undefined>({
      query() {
        return {
          url: `shop/discount`,
        }
      },
    }),

    getCollection: builder.query<IProducts, string | undefined>({
      query() {
        return {
          url: `shop/collection`,
        }
      },

    }),

    getProduct: builder.query<IProduct, string | undefined>({
      query(id: string | undefined) {
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



