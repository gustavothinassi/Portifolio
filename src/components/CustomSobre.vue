<template>
  <section id="sobre" class="flex flex-col md:items-center items-center px-5 bg-brand-secondblue">
    <h2 class="mt-24 text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-white">Sobre Mim</h2>
    <div class="flex absolute left-0 max-[768px]:invisible z-4">
          <img class="w-48 h-full" src="../assets/images/puntos4.png" alt="pontos">
    </div>
    <div class="max-w-6xl grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 lg:gap-16 w-full mb-20">
    <div class="w-full h-full z-10 p-8 md:p-16 max-[768px]:order-last">
       <img src="../assets/images/sobre.png" alt="sobre">
    </div>
    <div class="flex flex-col md:mt-10">
      <div class="flex justify-center md:justify-start mg:mt-0 mt-4">
        <h2 class="text-2xl md:text-3xl font-bold text-white">Gustavo Thinassi</h2>
      </div>
        <p class="md:break-normal font-base text-white md:text-xl mt-6 text-justify">
          Sou formado em Ciência da Computação e focado em programação web.
        </p>
        <p class="md:break-normal font-base text-white md:text-xl text-justify">
          Estou sempre dedicando meu tempo em aprender novas tecnologias e novos conhecimentos na minha vida profissional.
        </p>
        <p class="md:break-normal font-base text-white md:text-xl mt-6text-justify">
          Atualmente estou trabalhando como freelancere e procurando oportunidades de trabalho na area.
        </p>
        <p class="md:break-normal font-base text-white md:text-xl text-justify">
          Minhas linguagens de programação favoritas são VueJS, TailwindCSS e JavaScript
        </p>

    </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
