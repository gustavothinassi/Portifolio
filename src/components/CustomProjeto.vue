<template>
  <section id="projetos" class="flex flex-col items-center bg-brand-main">
    <h2 class="mt-24 text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-white">Projetos</h2>
    <div class="mt-10">
      <div class="flex items-center flex-col">
        <ul class="flex list-none pt-3 pb-4">
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <button @click="toggleTab(1)"
              class="inline-block px-9 py-2 border-2 border-transparent text-white font-medium text-sm leading-tight uppercase hover:opacity-80 focus:outline-none focus:ring-0 rounded bg-brand-secondblue"
              :class="{'bg-gray-200 text-black': state.tab === 1 }"
              href="#">Front-End</button>
          </li>
          <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <button @click="toggleTab(2)"
              :class="{'bg-gray-200 text-black': state.tab === 2 }"
              class="inline-block px-9 py-2 border-2 border-brand-secondblue text-white font-medium text-sm leading-tight uppercase hover:opacity-80 focus:outline-none focus:ring-0 rounded bg-brand-secondblue"
              href="#">Back-End</button>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="state.tab === 1"
      class="p-4 max-w-7xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-20 mt-10">
      <div class="overflow-hidden shadow-xl rounded-xl border-2 border-brand-secondblue bg-brand-secondblue">
        <img class="w-full" src="../assets/images/portifolio.png" alt="home">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">Portifólio</div>
          <p class="text-white text-base md:text-md sm:text-sm">
            Projeto desenvolvido usando a base de conhecimento do treinamento VueJs Brasil
          </p>
        </div>
        <div class="px-6 pt-4 pb-6">
          <a href="portifolio-gustavo.vercel.app"
            class="bg-gray-200 text-sm uppercase rounded-xl mr-4 text-black font-bold py-2 px-4 inline-flex items-center hover:opacity-75">
            <img class="w-5 h-5 mr-2" src="../assets/images/eye.png" />
            <span>Demo</span>
          </a>
          <a href="https://github.com/gustavothinassi/Portifolio"
            class="mr-4 text-sm bg-gray-200 uppercase rounded-xl text-black font-bold py-2 px-4 inline-flex items-center hover:opacity-75">
            <img class="w-5 h-5 mr-2" src="../assets/images/github.png" />
            <span>Repositório</span>
          </a>
        </div>
      </div>
      <div class="overflow-hidden shadow-xl rounded-xl border-2 border-brand-secondblue bg-brand-secondblue">
        <img class="w-full" src="../assets/images/ibelim.jpg" alt="home">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">Ibelim Embalagens</div>
          <p class="text-white text-base md:text-md sm:text-sm">
            Projeto desenvolvido para um cliente, usando Vue 3 e Tailwindcss
          </p>
        </div>
        <div class="px-6 pt-4 pb-6">
          <a href="https://ibelimembalagens.com.br/"
            class="bg-gray-200 text-sm uppercase rounded-xl mr-4 text-black font-bold py-2 px-4 inline-flex items-center hover:opacity-75">
            <img class="w-5 h-5 mr-2" src="../assets/images/eye.png" />
            <span>Demo</span>
          </a>
        </div>
      </div>
      <div class="overflow-hidden shadow-xl rounded-xl border-2 border-brand-secondblue bg-brand-secondblue">
        <img class="w-full" src="../assets/images/promobarato.jpg" alt="home">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">Promobarato</div>
          <p class="text-white text-base md:text-md sm:text-sm">
            Projeto iniciado para um cliente, usando Vue 3, Quasar e Firebase. Projeto esta sendo realizado no momento
          </p>
        </div>
        <div class="px-6 pt-4 pb-6">
          <a href="https://promobarato.vercel.app/"
            class="bg-gray-200 text-sm uppercase rounded-xl mr-4 text-black font-bold py-2 px-4 inline-flex items-center hover:opacity-75">
            <img class="w-5 h-5 mr-2" src="../assets/images/eye.png" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
    <div v-show="state.tab === 2"
      class="p-4 max-w-7xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-20 mt-10">
      <div class="overflow-hidden shadow-xl rounded-xl border-2 border-brand-secondblue bg-brand-secondblue">
        <img class="w-full" src="../assets/images/laravel.jpg" alt="laravel">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">API - Lista de Endereços</div>
          <p class="text-white text-base md:text-md sm:text-sm">
          Desafio de desenvolver uma API para um sistema FrontEnd de busca por CEP’S e utilizar API ViaCep para buscar CEP’S
          </p>
        </div>
        <div class="px-6 pt-4 pb-6">
          <a href="https://github.com/gustavothinassi/Crud-Back-Address"
            class="mr-4 text-sm bg-gray-200 uppercase rounded-xl text-black font-bold py-2 px-4 inline-flex items-center hover:opacity-75">
            <img class="w-5 h-5 mr-2" src="../assets/images/github.png" />
            <span>Repositório</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      tab: 1
    })
    function toggleTab(tabNumber) {
      state.tab = tabNumber
    }
    return {
      state,
      toggleTab
    }
  }
}
</script>
