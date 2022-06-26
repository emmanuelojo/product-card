<script setup lang="ts">
import { ref } from 'vue';

const navLink = [
    'Collections', 'Men', "Women", "About", "Contact"
]

const showCart = ref(false)

const toggleMenu = ref(false)
</script>


<template>
   <div class="relative" style="z-index: 888">
     <nav class="flex justify-between items-center md:pb-8 md:border-b">
        
        <transition name="slide-right" mode="out-in" appear>
            <div v-if="toggleMenu" class="w-4/5 flex flex-col gap-10 absolute -top-4 -left-4  bg-white  h-screen" style="z-index=8888">
                <img @click="toggleMenu = false" src="../assets/images/icon-close.svg" alt="close" class="w-4 h-4 ml-5 mt-5 cursor-pointer">
                <ul class="flex flex-col items-center gap-6">
                    <li v-for="link in navLink" :key="link" class="text-sm"> {{ link }}</li>
                </ul>
            </div>
        </transition>
        
        <div class="flex items-center md:gap-5 lg:gap-14">
            <div class="flex items-center gap-2">
                <img @click="toggleMenu = true" src="../assets/images/icon-menu.svg" alt="menubar" class="md:hidden">
                <p class="font-semibold text-3xl">sneakers</p>
            </div>

            <ul class="hidden md:flex items-center gap-6">
                <li v-for="link in navLink" :key="link" class="text-sm"> {{ link }}</li>
            </ul>
        </div>

        <div class="flex items-center gap-4 lg:gap-10 relative">
            <img src="../assets/images/icon-cart.svg" alt="cart" class="cursor-pointer">

            <div class="cart-container">
                <img @click="showCart = true" src="../assets/images/image-avatar.png" alt="avatar" class="h-8 md:h-10 lg:h-14 cursor-pointer rounded-full hover:border-2 hover:border-orange-500">
            
                <div class="cart w-60 bg-white shadow rounded-md absolute top-10 md:top-[60px] right-0" style="z-index: 888">
                    <p class="font-semibold text-sm p-2">Cart</p>

                    <hr>

                    <div class=" h-44 flex justify-center items-center">
                        <p class="font-medium text-sm text-center">Your cart is empty</p>
                    </div>
                </div>
            </div>
        </div>        
    </nav>
   </div>
</template>

<style>
.slide-right-enter-from, .slide-right-leave-to{
    opacity: 0;
    transform: translateX(-100%);
}

.slide-right-enter-to, .slide-right-leave-from{
    opacity: 1;
    transform: translateX(0);
}

.slide-right-enter-active, .slide-right-leave-active{
    transition: 0.5s ease-in-out;
}

.cart-container:hover .cart{
    display: block;
}

.cart{
    display: none;
}
</style>