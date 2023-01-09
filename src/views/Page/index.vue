<template>
   <custom-header />
   <custom-home />
   <custom-sobre />
   <custom-habilidades />
   <custom-formacao />
   <custom-projeto />
   <custom-footer />

   </template>
   
   <script>
   import CustomHeader from '../../components/CustomHeader.vue'
   import CustomHome from '../../components/CustomHome.vue'
   import CustomSobre from '../../components/CustomSobre.vue'
   import CustomHabilidades from '../../components/CustomHabilidade.vue'
   import CustomFormacao from '../../components/CustomFormacao.vue'
   import CustomProjeto from '../../components/CustomProjeto.vue'
   import CustomFooter from '../../components/CustomFooter.vue'

 
  
   export default {
     components: {
      CustomHeader,
       CustomHome,
       CustomSobre,
       CustomHabilidades,
       CustomFormacao,
       CustomProjeto,
       CustomFooter
     }
   
   }
   </script>
   