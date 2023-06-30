<template>
  <div>
    <h1>{{ csrf }}</h1>
  </div>
</template>
<script setup>
const { csrf } = useCsrf()
</script>
