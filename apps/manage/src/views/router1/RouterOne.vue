<script setup lang="ts">
const visible = ref(false)
</script>

<template>
  <PageWrapper>
    <router-link to="/two">
      二级页面
    </router-link>
    <div>test</div>
    <button @click="visible = !visible">
      toggle
    </button>
    <transition>
      <div v-if="visible" class="w-10 h-10 bg-black" />
    </transition>
  </PageWrapper>
  <RouterView>
    <template #default="{ Component }">
      <transition>
        <component :is="Component" :key="1" />
      </transition>
    </template>
  </RouterView>
</template>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 300ms ease;
  width: 40px;
}

.v-enter-from,
.v-leave-to {
  width: 0;
}
</style>
