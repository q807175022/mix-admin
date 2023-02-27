<template>
  <div @click="num++">
    {{ num }}
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const num = ref(1)

</script>
