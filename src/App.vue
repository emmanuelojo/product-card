<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import ProductImage1 from './assets/images/image-product-1.jpg'
import ProductImage2 from './assets/images/image-product-2.jpg'
import ProductImage3 from './assets/images/image-product-3.jpg'
import ProductImage4 from './assets/images/image-product-4.jpg'

const activeImage = ref(ProductImage1)
const activeImageIndex = ref(0)
const productImages = [ProductImage1, ProductImage2, ProductImage3, ProductImage4]
const amount = ref(125)
const count = ref(0)

const openModal = ref(false)

const emit = defineEmits(['count'])

const prevImage = () => {
 if(activeImageIndex.value === 0) {
    activeImageIndex.value = productImages.length -1
  }else{
    activeImageIndex.value--
  }

  console.log()
}

const nextImage = () => {
  if(activeImageIndex.value < productImages.length) activeImageIndex.value++
  if(activeImageIndex.value === 4) activeImageIndex.value = 0
  if (activeImageIndex.value > productImages.length - 1)  activeImageIndex.value = 0
}

const increaseQuantity = () => {
  count.value++;
  emit('count')
};

const decreaseQuantity = () => {
  if (count.value > 0) count.value--;
  emit('count')
};
</script>

<template>
  <div class="pt-4 md:pt-20 grid gap-5 w-[90%] lg:w-4/5 mx-auto relative">    
    <Navbar  :product-count="count"/>

    <div class="md:mt-16 flex flex-col sm:flex-row justify-center items-center sm:gap-8 md:gap-10 lg:gap-20">
      <div class="order-1">
        <div class="relative">
          <div @click="prevImage" class="prev cursor-pointer bg-white absolute -mt-[10px] top-1/2 left-2 w-10 h-10 flex justify-center items-center md:hidden rounded-full ">
            <img src="./assets/images/icon-previous.svg" alt="prev">
          </div>
          <img @click="openModal = true" :src="productImages[activeImageIndex]" alt="image" class="w-80 h-[350px] md:rounded-lg object-cover cursor-pointer">
          <div @click="nextImage" class="next cursor-pointer bg-white absolute -mt-[10px] top-1/2 right-2 w-10 h-10 flex justify-center items-center md:hidden rounded-full ">
            <img src="./assets/images/icon-next.svg" alt="next">
          </div>
        </div>

        <div  class="mt-6 hidden md:flex gap-5">
          <img v-for="(image, idx) in productImages"  :key="idx"  @click="activeImageIndex = idx" :src="image" alt="image" class="w-16 h-16 rounded-md object-cover cursor-pointer hover:opacity-40" :class="activeImageIndex === idx ? 'border-2 border-orange-500 opacity-60' : ''">
        </div>

      </div>

      <div class="order-2 mt-6 sm:mt-0 flex flex-col gap-4">
        <p class="text-orange-500 uppercase font-semibold text-xs">sneaker company</p>
        <div>
          <h3 class="font-bold text-3xl capitalize"> fall limited edition</h3>
          <h3 class="font-bold text-3xl capitalize">sneakers</h3>
        </div>

        <p class="my-2 w-full sm:w-60 lg:w-96 text-sm grid">
          These low-profile sneakers are your perfect casual wear
          companion. Featuring a durable rubber outer sole, they'll  
           withstand everything the weather can offer.           
        </p>

        <div class="flex flex-row md:grid justify-between md:justify-start items-center s md:gap-2">
          <div class="flex items-center gap-3">
            <p class="text-xl font-bold">${{amount}}.00</p>
            <div class="bg-[hsl(25,100%,94%)]  p-1 rounded-md">            
              <p class="text-orange-500 text-xs font-semibold">50%</p>
            </div>
          </div>
          
          <p class="text-xs text-gray-400 line-through">$250.00</p>
        </div>

        <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 md:gap-4">
          <div class="w-full sm:w-fit rounded-md py-2 px-2 flex justify-between items-center gap-4 bg-[hsl(223,64%,98%)]">
            <img @click="decreaseQuantity" src="./assets/images/icon-minus.svg" alt="minus" class="cursor-pointer">
            <p> {{ count }}</p>
            <img @click="increaseQuantity" src="./assets/images/icon-plus.svg" alt="plus" class="cursor-pointer">
          </div>

          <div class="w-full sm:w-fit bg-orange-500 rounded-md py-[10px] px-9 flex justify-center items-center gap-2 cursor-pointer hover:scale-105">
            <img  src="./assets/images/icon-cart.svg" alt="cart" class="text-white h-4">
            <p class="text-sm font-semibold text-white">Add to cart</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="openModal" id="modal" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4 sm:h-screen sm:overflow-y-auto sm:py-14 md:py-0"
      style="z-index: 888">      
      <div class="relative bg-transparent m-auto p-0 w-[90%] sm:w-[350px]">
        <span class="text-white hover:text-orange-500 absolute -top-12 right-0 text-4xl font-bold hover:text-[#99999] cursor-pointer" @click="openModal = false">&times;</span>
        <div class="relative">
          <div @click="prevImage" class="prev cursor-pointer bg-white absolute -mt-[10px] top-1/2 -left-5 w-10 h-10 flex justify-center items-center rounded-full ">
            <i class="fa fa-chevron-left text-black hover:text-orange-500"></i>
          </div>
          
          <img :src="productImages[activeImageIndex]" alt="image" class="w-[350px] rounded-2xl object-cover">
          
          <div @click="nextImage" class="next cursor-pointer bg-white absolute -mt-[10px] top-1/2 -right-5 w-10 h-10 flex justify-center items-center rounded-full ">
            <i class="fa fa-chevron-right text-black hover:text-orange-500"></i>
          </div>
        </div>

        <div  class="mt-6 flex justify-center gap-5">
          <img v-for="(image, idx) in productImages"  :key="idx"  @click="activeImageIndex = idx" :src="image" alt="image" class="w-16 h-16 rounded-md object-cover cursor-pointer hover:opacity-40" :class="activeImageIndex === idx ? 'border-2 border-orange-500 opacity-60' : ''">
        </div>
      </div>

    </div>

    <div class="mt-60 mb-4 flex justify-center items-center text-xs attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="ml-1"> Frontend Mentor</a>. 
    Coded by <a href="https://jekon-dev.netlify.app/" class="ml-1">Jekon</a>.
  </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

#app {
  font-family: 'Kumbh Sans';
}
*,body{
  margin: 0;
  padding: 0;
}

/* .prev, .next{
  top: 50%;
  margin-top: -10px;
} */
</style>
