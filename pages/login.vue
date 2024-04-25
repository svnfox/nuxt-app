<template>
    <div class="login">
        <input type="text">请输入账号</input>
        <button class="text" @click="handleLogin">点击登录</button>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'empty'
})

const btnColor = ref('red')

function handleLogin() {
    btnColor.value = 'blue'
}
</script>

<style>
.text {
  color: v-bind(btnColor);
}
</style>