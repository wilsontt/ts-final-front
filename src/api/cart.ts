import type {
  AddCartItemResponse,
  DeleteCartItemResponse,
  GetCartResponse,
  UpdateCartItemResponse,
} from '@/types/cart'
import type { AxiosResponse } from 'axios'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_PATH = import.meta.env.VITE_API_PATH

const cartApi = axios.create({
  baseURL: BASE_URL,
})

cartApi.interceptors.request.use(
  (request) => {
    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)

cartApi.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    return Promise.reject(error.response.data)
  },
)

export const apiGetCart = (): Promise<AxiosResponse<GetCartResponse>> =>
  cartApi.get(`/v2/api/${API_PATH}/cart`)

export const apiAddCartItem = (params: {
  product_id: string
  qty: number
}): Promise<AxiosResponse<AddCartItemResponse>> =>
  cartApi.post(`/v2/api/${API_PATH}/cart`, { data: params })

export const apiUpdateCartItem = (params: {
  id: string
  product_id: string
  qty: number
}): Promise<AxiosResponse<UpdateCartItemResponse>> => {
  const { id: cartId, ...data } = params

  return cartApi.put(`/v2/api/${API_PATH}/cart/${cartId}`, {
    data,
  })
}

export const apiDeleteCartItem = (cartId: string): Promise<AxiosResponse<DeleteCartItemResponse>> =>
  cartApi.delete(`/v2/api/${API_PATH}/cart/${cartId}`)
