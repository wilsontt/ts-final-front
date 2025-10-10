import axios, { type AxiosResponse } from 'axios'

import type {
  ApplyCouponResponse,
  CreateOrderResponse,
  ProcessPaymentResponse,
} from '@/types/order'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_PATH = import.meta.env.VITE_API_PATH

const orderApi = axios.create({
  baseURL: BASE_URL,
})

orderApi.interceptors.request.use(
  (request) => {
    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)

orderApi.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    return Promise.reject(error.response.data)
  },
)
export const apiCreateOrder = (data: {
  user: {
    name: string
    email: string
    tel: string
    address: string
  }
  message?: string
}): Promise<AxiosResponse<CreateOrderResponse>> =>
  orderApi.post(`/v2/api/${API_PATH}/order`, { data })

export const apiProcessPayment = (
  orderId: string,
): Promise<AxiosResponse<ProcessPaymentResponse>> =>
  orderApi.post(`/v2/api/${API_PATH}/pay/${orderId}`)

export const apiApplyCoupon = (couponCode: string): Promise<AxiosResponse<ApplyCouponResponse>> =>
  orderApi.post(`/v2/api/${API_PATH}/coupon`, {
    data: { code: couponCode },
  })
