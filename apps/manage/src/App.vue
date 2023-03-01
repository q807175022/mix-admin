<script setup lang="ts">
const height = computed(() => {
  const windowHeight =
    document.documentElement.clientHeight || document.body.clientHeight;

  return windowHeight - 92;
});
</script>

<template>
  <header>
    <div>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
    </div>
  </header>

  <div class="flex px-2 mt-4" :style="{ height: height + 'px' }">
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss">
header {
  height: 60px;

  > div {
    background-color: #fff;
    box-shadow: 0 0 6px #cccccc;
    position: fixed;
    left: 0;
    top: 0;
    height: 60px;
    width: 100vw;
  }
}

.logo {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0;
}
</style>
