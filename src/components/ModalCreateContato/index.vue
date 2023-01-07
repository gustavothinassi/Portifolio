<template>
    <div class="flex justify-between">
        <h1 class="font-black text-xl lg:text-3xl text-white">
        Entre em contato
        </h1>
        <button
        @click="close" class="text-4xl text-white focus:outline-none"
        >
        &times;
        </button>
    </div>

    <div class="flex mt-4">
      <p class="text-sm font-sm text-white">Por hora esse formulário ainda não está funcionando, mas em breve estará!</p>

    </div>

    <div class="mt-4">
    <form @submit.prevent="handleSubmit">
    <label class="block mt-3">
        <span class="text-base font-base text-white">Nome</span>
        <input
        type="text"
        class="block w-full px-2 py-1 mt-1 text-lg bg-white border-2 border-transparent rounded"
        placeholder="Digite seu nome"
        >
    </label>
    <label class="block">
        <span class="text-base font-base text-white">E-mail</span>
        <input
        type="email"
        class="block w-full px-2 py-1 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
        placeholder="Digite seu email"
        >
    </label>

     <label class="block">
        <span class="text-base font-base text-white">Mensagem</span>
        <textarea
						class="w-full px-2 py-1 border rounded-md shadow-sm text-md"
						id="message"
						name="message"
						cols="8"
						rows="3"
						aria-label="Message"
            placeholder="Digite sua mensagem"
					></textarea>
    </label>

    <button
        type="submit"
        class="px-6 py-2 mt-4 text-base font-base text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150 hover:opacity-70"
        >Enviar
    </button>
    </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
import useModal from '../../hooks/useModal'

export default {
  setup () {
    const modal = useModal()


    const state = reactive({
      hasErrors: false,
      isLoading: false
    })

    return {
      state,
      close: modal.close
    }
  }
}
</script>