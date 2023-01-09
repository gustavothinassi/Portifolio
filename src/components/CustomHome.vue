<template>
  <section id="home" class="grid place-items-center overflow-hidden bg-brand-main">
    <div class="max-w-6xl space-x-2 grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full px-5 mt-10 sm:p-10">
      <div class="text-5xl md:text-6xl text-white w-full order-2 lg:order-1 md:py-10 mt-6">
        <div class="flex justify-center md:justify-start gap-3">
          <span class="text-2xl font-base">Olá, eu sou</span>
        </div>
        <div class="flex justify-center md:justify-start">
          <h2 class="text-3xl md:text-5xl">Gustavo Thinassi</h2>
        </div>
        <div class="flex mt-6 h-7 w-full justify-center md:justify-start">
            <h6 class="text-base md:text-xl font-base uppercase text-animation" v-html="state.paper"></h6>
        </div>
        <div class="md:text-base hidden md:block">
          <p class="text-base mt-6 font-base md:text-base">Sou um desenvolvedor dedicado, focado em resolver problemas. Domino novas tecnologias com facilidade; sempre disposto a aprender coisas novas.</p>
        </div>
       <div class="flex mt-4 space-x-2 justify-init mb-8 justify-center md:justify-start">
            <a class="inline-block px-9 py-2 border-2 border-brand-secondblue text-white font-medium text-sm leading-tight uppercase hover:opacity-80 focus:outline-none focus:ring-0 rounded-full bg-brand-secondblue" href="https://drive.google.com/file/d/1ACM7F8NoZEkTpCS8JIUYna9RyvidtdTp/view?usp=sharing">Download CV</a>
        </div>
      </div>
      <div class="md:w-full md:h-full order-1 lg:order-2 py-3 p-4 mt-10">
        <img src="../assets/images/home.png" alt="home">
      </div>
    </div>
    <div class="grid place-items-center gap-2 text-white font-medium mb-20">
      <svg class="w-5 md:w-6" viewBox="0 0 26 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="24" height="47" rx="12" stroke="white" stroke-width="2"/>
        <circle cx="13" cy="11" r="5" fill="#6c63ff"/>
        </svg>
        <span class="text-md font-base">Scroll</span>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive, watchEffect } from 'vue'
export default {
  setup () {
    const state = reactive({
      titleText: 'Desenvolvedor front-end  ',
      typeText: [],
      paper: '',
      timer: null
    })
    onMounted(() => {
      printer()
    })
    function printer () {
      stoper()
      let i = -1
      state.timer = setInterval(() => {
        i++
        const x = i % state.titleText.length
        // console.log(x)
        state.paper += state.titleText[x]
      }, 200 - (Math.random() * 20))
    }

    function stoper () {
      clearInterval(state.timer)
      state.paper = ''
    }

    watchEffect(() => {
      if (state.paper.length === state.titleText.length) {
        state.paper = ''
      }
    })
    return {
      state
    }
  }
}
</script>
<style>
</style>

