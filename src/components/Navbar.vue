<script setup lang="ts">
import { ref } from "vue";

const navLink = [
  { link: "Collections", isHovered: false },
  { link: "Men", isHovered: false },
  { link: "Women", isHovered: false },
  { link: "About", isHovered: false },
  { link: "Contact", isHovered: false },
];

const showCart = ref(false);

const toggleMenu = ref(false);

const props = defineProps({
  productCount: Number,
});
</script>

<template>
  <div class="relative" style="z-index: 888">
    <nav
      class="fixed w-full lg:sticky lg:top-0 h-14 md:h-fit bg-white flex justify-between items-center md:pb-[18px] md:border-b px-2 md:pt-2 lg:px-0"
    >
      <transition name="slide-right" mode="out-in" appear>
        <div
          v-if="toggleMenu"
          class="w-4/5 flex flex-col gap-10 absolute -top-4 -left-4 bg-white h-screen"
          style="z-index=8888"
        >
          <img
            @click="toggleMenu = false"
            src="../assets/images/icon-close.svg"
            alt="close"
            class="w-4 h-4 ml-10 mt-10 cursor-pointer"
          />
          <ul class="flex flex-col items-center gap-6">
            <li v-for="(link, idx) in navLink" :key="idx" class="text-sm">
              {{ link.link }}
            </li>
          </ul>
        </div>
      </transition>

      <div class="flex items-center md:gap-5 lg:gap-14">
        <div class="flex items-center gap-2">
          <img
            @click="toggleMenu = true"
            src="../assets/images/icon-menu.svg"
            alt="menubar"
            class="md:hidden w-6 h-5"
          />
          <p class="font-semibold text-3xl">sneakers</p>
        </div>

        <ul class="hidden md:flex items-center gap-6">
          <li
            @mouseover="link.isHovered = true"
            @mouseout="link.isHovered = false"
            v-for="(link, idx) in navLink"
            :key="idx"
            class="text-sm cursor-pointer hover:text-orange-500 relative"
          >
            <span> {{ link.link }} </span>
            <div
              class="slider absolute -bottom-7 w-full h-1 bg-orange-500"
            ></div>
            <!-- 
              :class="link.isHovered ? 'visible' : 'invisible'" -->
          </li>
        </ul>
      </div>

      <div class="flex items-center gap-4 lg:gap-10 relative">
        <div class="cart-container relative cursor-pointer">
          <img
            src="../assets/images/icon-cart.svg"
            alt="cart"
            class="cursor-pointer"
          />
          <div
            v-if="productCount"
            class="absolute -top-3 -right-2 flex justify-center items-center bg-orange-500 text-white w-[18px] h-[18px] px-1 rounded-full"
          >
            <p class="text-[9px] text-center pt-[1px]">{{ productCount }}</p>
          </div>

          <div
            class="cart w-60 bg-white shadow rounded-md absolute top-10 md:top-[20px] right-0"
            style="z-index: 888"
          >
            <p class="font-semibold text-sm p-2">Cart</p>

            <hr />

            <div
              v-if="productCount && productCount > 0"
              class="px-2 py-5 flex flex-col gap-4"
            >
              <div class="flex justify-between items-center">
                <div class="flex gap-2">
                  <img
                    src="../assets/images/image-product-1.jpg"
                    alt="product"
                    class="h-10 rounded-md"
                  />

                  <div class="flex flex-col gap-1 text-xs text-gray-500">
                    <p class="">Autumn Limited Edition...</p>
                    <p class="flex items-center">
                      $125.00 x {{ productCount }}
                      <span class="ml-1 font-bold text-black">
                        ${{ 125 * productCount }}</span
                      >
                    </p>
                  </div>
                </div>

                <div class="cursor-pointer">
                  <img src="../assets/images/icon-delete.svg" alt="delete" />
                </div>
              </div>

              <div
                class="font-bold text-sm text-white bg-orange-500 cursor-pointer rounded-md px-1 py-2 w-full flex justify-center items-center"
              >
                <p>Checkout</p>
              </div>
            </div>

            <div v-else class="h-44 flex justify-center items-center">
              <p class="font-medium text-sm text-center">Your cart is empty</p>
            </div>
          </div>
        </div>

        <div>
          <img
            @click="showCart = true"
            src="../assets/images/image-avatar.png"
            alt="avatar"
            class="h-8 md:h-10 lg:h-14 cursor-pointer rounded-full hover:border-2 hover:border-orange-500"
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-enter-to,
.slide-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: 0.5s ease-in-out;
}

.cart-container:hover > .cart {
  display: block;
}

.cart {
  display: none;
}
</style>
