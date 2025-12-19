import { apiAddCartItem, apiDeleteCartItem, apiGetCart, apiUpdateCartItem } from '@/api/cart'
import { apiApplyCoupon } from '@/api/order'
import type { CartInfo } from '@/types/cart'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartInfo>({
    carts: [],
    total: 0,
    final_total: 0,
  })

  const isUpdating = ref<boolean>(false)
  const isDeleting = ref<boolean>(false)

  const getCart = async () => {
    try {
      const res = await apiGetCart()
      cart.value = res.data.data
    } catch (error) {
      alert('取得購物車失敗')
    }
  }

  const addCartItem = async (params: { product_id: string; qty: number }) => {
    try {
      await apiAddCartItem({
        product_id: params.product_id,
        qty: params.qty,
      })
      await getCart()
    } catch (error) {
      alert('加入購物車失敗')
    }
  }

  const updataCartItem = async (params: { product_id: string; qty: number; id: string }) => {
    try {
      isUpdating.value = true

      await apiUpdateCartItem({
        id: params.id,
        product_id: params.product_id,
        qty: params.qty,
      })
      await getCart()
    } catch (error) {
      alert('更新購物車失敗')
    } finally {
      isUpdating.value = false
    }
  }

  const deleteCartItem = async (cartId: string) => {
    try {
      isDeleting.value = true

      await apiDeleteCartItem(cartId)
      await getCart()
    } catch (error) {
      alert('刪除購物車項目失敗')
    } finally {
      isDeleting.value = false
    }
  }

  const applyCoupon = async (couponCode: string) => {
    try {
      await apiApplyCoupon(couponCode)
      await getCart()
    } catch (error) {
      alert('套用優惠券失敗，優惠券已過期或不存在')
    }
  }

  return {
    cart,
    isUpdating,
    isDeleting,
    getCart,
    addCartItem,
    updataCartItem,
    deleteCartItem,
    applyCoupon,
  }
})
