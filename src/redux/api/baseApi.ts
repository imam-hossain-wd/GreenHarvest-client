import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tag-types'
import { getBaseUrl } from '../../helpers/config/envConfig'

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl:getBaseUrl()}),
    endpoints: () => ({}),
  tagTypes: tagTypesList
})



