<template>
  <section id="projetos" class="flex flex-col items-center bg-brand-main">
    <h2 class="mt-24 text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-white">Projetos</h2>
    <div class="p-8 max-w-7xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-20 mt-6">
    <div class="overflow-hidden shadow-xl rounded-xl border-2 border-brand-secondblue bg-brand-secondblue">
      <img class="w-full" src="../assets/images/portifolio.png" alt="home">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-white">Portifólio</div>
        <p class="text-white text-base md:text-md sm:text-sm">
          Projeto desenvolvido usando a base de conhecimento do treinamento VueJs Brasil e outros materiais de pesquisa
        </p>
      </div>
      <div class="px-6 pt-4 pb-6">
        <a href="portifolio-gustavo.vercel.app" class="bg-gray-200 text-sm uppercase rounded-xl mr-4 text-black font-bold py-2 px-4 inline-flex items-center hover:opacity-75">
            <img class="w-5 h-5 mr-2" src="../assets/images/eye.png"/>
            <span>Demo</span>
        </a>
        <a href="https://github.com/gustavothinassi/Portifolio" class="mr-4 text-sm bg-gray-200 uppercase rounded-xl text-black font-bold py-2 px-4 inline-flex items-center hover:opacity-75">
            <img class="w-5 h-5 mr-2" src="../assets/images/github.png"/>
            <span>Repo</span>
        </a>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {

}
</script>
