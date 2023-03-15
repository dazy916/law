<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './index.vue'
import { ref } from 'vue'

</script>

<template>
  <router-view ></router-view>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* padding-bottom: 2rem; */
}
body {
  height: 100vh;
  background-image: linear-gradient(to bottom right, #013e3d, #002623);
}
.nav {
  background-image: linear-gradient(#013e3d, #002623);
}

.line{
  position: fixed;
  bottom: var(--van-tabbar-height);
  width: 100vw;
  height: 2px;
  background-color: #eac699;
}
.house{
  position: fixed;
  right: 12%;
  bottom: var(--van-tabbar-height);
  width: 70px;
  height: 25px;
  background-image: url('./assets/image/house.png');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
