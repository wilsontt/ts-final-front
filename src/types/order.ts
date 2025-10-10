export type CreateOrderResponse = {
  success: boolean
  message: string
  total: number
  create_at: number
  orderId: string
}

export type ProcessPaymentResponse = {
  success: boolean
  message: string
}

export type ApplyCouponResponse = {
  success: boolean
  message: string
  data: {
    final_total: number
  }
}
