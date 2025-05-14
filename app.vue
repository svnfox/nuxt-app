<template>
  <!-- <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
onMounted(() => {
  // 页面刷新后滚动条回到顶部
  window.scrollTo(0, 0)
})
</script>
