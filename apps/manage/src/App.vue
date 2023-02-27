<script setup lang="ts">
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
  <div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
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
