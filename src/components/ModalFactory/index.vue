<template>
    <teleport to="body">
        <div
        v-if="state.isActive"
        class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        @click="handleModalToogle({ status: false })"
        >
        <div
        class="fixed mx-10"
        :class="state.width"
        @click.stop
        >
              <div class="flex flex-col overflow-hidden bg-brand-secondblue rounded-lg animate__animated animate__fadeInDown animate__faster">
                <div class="flex flex-col px-9 py-6 bg-brand-secondblue">
                  <component :is="state.component" v-bind="state.props" />
                </div>
              </div>
        </div>
      </div>
    </teleport>
</template>

<script>
import { defineAsyncComponent, onBeforeUnmount, onMounted, reactive } from 'vue'
import useModal from '../../hooks/useModal'

const ModalCreateContato = defineAsyncComponent(() => import('../ModalCreateContato'))


const DEFAULT_WIDTH = 'w-5/6 lg:w-1/3'

export default {
  components: {
    ModalCreateContato
  },
  setup () {
    const modal = useModal()
    const state = reactive({
      isActive: false,
      component: {},
      props: {},
      width: DEFAULT_WIDTH
    })
    onMounted(() => {
      modal.listen(handleModalToogle)
    })

    onBeforeUnmount(() => {
      modal.off(handleModalToogle)
    })

    function handleModalToogle (payload) {
      if (payload.status) {
        state.component = payload.component
        state.props = payload.props
        state.width = payload.width ?? DEFAULT_WIDTH
      } else {
        state.component = {}
        state.props = {}
        state.width = DEFAULT_WIDTH
      }

      state.isActive = payload.status
    }
    return {
      state,
      handleModalToogle
    }
  }
}
</script>