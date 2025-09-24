<script setup lang="ts">
import 'swiper/css'

import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import { onMounted, ref } from 'vue'

const swiperContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  if (swiperContainer.value) {
    const swiper = new Swiper(swiperContainer.value, {
      modules: [Autoplay],
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 2,
      spaceBetween: 10,
      breakpoints: {
        767: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    })
  }
})
</script>

<template>
  <div class="container">
    <Navbar />
    <div class="mt-3">
      <h3 class="mt-3 mb-4">購物車</h3>
      <div class="row">
        <div class="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="border-0 ps-0">產品名稱</th>
                <th scope="col" class="border-0">產品數量</th>
                <th scope="col" class="border-0">價格</th>
                <th scope="col" class="border-0"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-bottom border-top">
                <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                  <img
                    src="https://images.unsplash.com/photo-1631122750867-6cfee01358b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmlyZCUyMG9mJTIwUGFyYWRpc2V8ZW58MHwwfDB8fHwy"
                    alt=""
                    style="width: 72px; height: 72px; object-fit: cover"
                  />
                  <p class="mb-0 fw-bold ms-3 d-inline-block">天堂鳥蕉</p>
                </th>
                <td class="border-0 align-middle" style="max-width: 160px">
                  <div class="input-group pe-5">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon1"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control border-0 text-center my-auto shadow-none"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      value="1"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon2"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ms-auto">NT$12,000</p>
                </td>
                <td class="border-0 align-middle"><i class="fas fa-times"></i></td>
              </tr>
              <tr class="border-bottom">
                <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                  <img
                    src="https://images.unsplash.com/photo-1680812992886-6231db0dabeb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    style="width: 72px; height: 72px; object-fit: cover"
                  />
                  <p class="mb-0 fw-bold ms-3 d-inline-block">石蓮花</p>
                </th>
                <td class="border-0 align-middle" style="max-width: 160px">
                  <div class="input-group pe-5">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon1"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control border-0 text-center my-auto shadow-none"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      value="1"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon2"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ms-auto">NT$12,000</p>
                </td>
                <td class="border-0 align-middle"><i class="fas fa-times"></i></td>
              </tr>
            </tbody>
          </table>
          <div class="input-group w-50 mb-3">
            <input
              type="text"
              class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none"
              placeholder="折扣碼"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0"
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-4">訂單資訊</h4>
            <table class="table text-muted border-bottom">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">小計</th>
                  <td class="text-end border-0 px-0 pt-4">NT$24,000</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">付款方式</th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總計</p>
              <p class="mb-0 h4 fw-bold">NT$24,000</p>
            </div>
            <RouterLink to="/checkout" class="btn btn-dark w-100 mt-4">前往結帳</RouterLink>
          </div>
        </div>
      </div>
      <div class="my-5">
        <h3 class="fw-bold">你可能會喜歡的植栽</h3>
        <div ref="swiperContainer" class="swiper mt-4 mb-5">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img
                  src="https://images.unsplash.com/photo-1616220797246-f01f49dd805d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="card-img-top object-fit-cover rounded-0"
                  style="height: 280px"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">黃金葛</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img
                  src="https://images.unsplash.com/photo-1616122236015-b37dc314d875?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="card-img-top object-fit-cover rounded-0"
                  style="height: 280px"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">橡膠樹</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img
                  src="https://images.unsplash.com/photo-1611211232932-da3113c5b960?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="card-img-top object-fit-cover rounded-0"
                  style="height: 280px"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">虎尾蘭</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img
                  src="https://images.unsplash.com/photo-1675093583860-c88f96dd6801?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fE1vbnN0ZXJhfGVufDB8MHwwfHx8Mg%3D%3D"
                  class="card-img-top object-fit-cover rounded-0"
                  style="height: 280px"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">龜背芋</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img
                  src="https://images.unsplash.com/photo-1616694547693-b0f829a6cf30?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="card-img-top object-fit-cover rounded-0"
                  style="height: 280px"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">白鶴芋</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped></style>
