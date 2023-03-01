<template>
  <div
    class="bg-white rounded-t-xl rounded-b overflow-hidden h-full overflow-y-auto flex-1 mx-2"
    :key="count"
  >
    <slot></slot>
  </div>

  <!-- <RouterView>
    <template #default="{ Component }">
      <TransitionGroup>
        <component :is="Component" :key="count"></component>
      </TransitionGroup>
    </template>
  </RouterView> -->
</template>

<script setup lang="ts">
const {increment} = useCounterStore()
const count = increment();

</script>

<style lang="scss">
/* 对移动中的元素应用的过渡 */
.v-enter-active,
.v-leave-active {
  transition: all 30000ms ease;
  max-width: 100vw;
}

.v-enter-from,
.v-leave-to {
  max-width: 0vw;
}
</style>
