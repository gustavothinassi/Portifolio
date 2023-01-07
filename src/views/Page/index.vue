<template>
   <nav-bar />
   <custom-home />
   <custom-sobre />
   <custom-habilidades />
   <custom-formacao />
   <custom-projeto />
   <custom-footer />

   </template>
   
   <script>
   import NavBar from '../../components/NavBar.vue'
   import CustomHome from '../../components/CustomHome.vue'
   import CustomSobre from '../../components/CustomSobre.vue'
   import CustomHabilidades from '../../components/CustomHabilidade.vue'
   import CustomFormacao from '../../components/CustomFormacao.vue'
   import CustomProjeto from '../../components/CustomProjeto.vue'
   import CustomFooter from '../../components/CustomFooter.vue'

 
  
   export default {
     components: {
       NavBar,
       CustomHome,
       CustomSobre,
       CustomHabilidades,
       CustomFormacao,
       CustomProjeto,
       CustomFooter
     }
   
   }
   </script>
   