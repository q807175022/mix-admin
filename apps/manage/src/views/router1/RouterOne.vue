<template>
  <PageWrapper>
    <router-link to="/two"> 二级页面 </router-link>
    <div>
      测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落测试文章段落
    </div>
    <button @click="visible = !visible">toggle</button>
    <transition>
      <div class="w-10 h-10 bg-black" v-if="visible"></div>
    </transition>
  </PageWrapper>
  <RouterView>
    <template #default="{ Component }">
      <transition>
        <component :is="Component" :key="1"></component>
      </transition>
    </template>
  </RouterView>
</template>

<script setup lang="ts">
const visible = ref(false);
</script>

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
