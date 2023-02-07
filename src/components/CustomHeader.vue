<template>

<header>
<div
  class="text-gray-100 py-1 px-6 md:flex justify-between items-center
  fixed w-full top-0 animated z-20 backdrop-blur-sm
  transition duration-200"
  :class="{ 'scrolled': !state.atTopOfPage }"
  >
        <div class="flex items-center">
          <a class="inline-block md:mr-4 sm:ml-4 py-2 whitespace-nowrap cursor-pointer" href="#home">
             <img src="../assets/images/logo-gustavo.png" class="w-36 h-full" alt="">
          </a>
      
        </div>
    
        <div class="absolute md:hidden right-6 top-3">
            <button
                  class="lg:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
                  @click="toggleNavbar()">
            <div class="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                class="absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out" 
                :class="{ 'rotate-45 delay-200':state.showMenu, '-translate-y-1.5': !state.showMenu}"
                ></span>
                <span
                class="absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out"
                :class="{'w-0 opacity-50': state.showMenu, 'w-5 delay-200 opacity-100': !state.showMenu}"         
                ></span>
                <span
                class="absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out" 
                :class="{'-rotate-45 delay-200': state.showMenu,'translate-y-1.5': !state.showMenu }"
                ></span>
            </div>
            </button>
        </div>

        <ul 
        class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static lg:bg-transparent bg-brand-secondblue absolute md:w-auto w-full top-16 duration-500 ease-in-out"
        :class="{'right-0':state.showMenu, 'right-[-100%]': !state.showMenu}"
        >
          <li class="md:mx-4 md:my-0 my-3">
           <a
           @click="state.showMenu = false"
           class="text-lg hover:text-brand-thirdblue hover:transition duration-700" 
           href="/#home">Home</a>
          </li>
          
          <li class="md:mx-4 md:my-0 my-3">
           <a
           @click="state.showMenu = false"
           class="text-lg hover:text-brand-thirdblue hover:transition duration-700" 
           href="#sobre">Sobre</a>
          </li>
          <li class="md:mx-4 md:my-0 my-3">
           <a
           @click="state.showMenu = false"
           class="text-lg hover:text-brand-thirdblue hover:transition duration-700" 
           href="#habilidades">Habilidades</a>
          </li>
          <li class="md:mx-4 md:my-0 my-3">
            <a  @click="state.showMenu = false" 
            class="text-lg hover:text-brand-thirdblue hover:transition duration-700"
            href="#formacao">Formação</a>
          </li>
          <li class="md:mx-4 md:my-0 my-3">
            <a  @click="state.showMenu = false"
            class="text-lg hover:text-brand-thirdblue hover:transition duration-700"
            href="#projetos">Projetos</a>
          </li>
          <li class="md:mx-4 md:my-0 my-3">
            <button class="flex" @click="handleContato()">
              <svg stroke="currentColor" fill="currentColor"
              stroke-width="0" viewBox="0 0 16 16" color="white" 
              height="25" width="25"
              xmlns="http://www.w3.org/2000/svg"
             
              >
              <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 008 15z"></path></svg>
            </button>
          </li>
          
        </ul>
        
      </div>
</header>
</template>

<script>
import { onBeforeMount, reactive } from 'vue'
import useModal from '../hooks/useModal'

export default {
  setup () {
    const modal = useModal()
    const state = reactive({
      showMenu: false,
      atTopOfPage: true
    })

    function toggleNavbar () {
      state.showMenu = !state.showMenu
    }

   function handleScroll () {

      if (window.pageYOffset > 0) {
        if (state.atTopOfPage) state.atTopOfPage = false
      } else {
        if (!state.atTopOfPage) state.atTopOfPage = true
      }
    }

    function handleContato() {
      modal.open({
        component: 'ModalCreateContato'
      })
    }

   onBeforeMount(() => {
      window.addEventListener('scroll', handleScroll)
    })

    return {
      state,
      toggleNavbar,
      handleContato
    }
  }
}
</script>
