<!--
 * @Author: li2022 liqing@linkon.me
 * @Date: 2023-03-15 19:14:26
 * @LastEditors: li2022 liqing@linkon.me
 * @LastEditTime: 2023-03-16 21:00:15
 * @FilePath: \law\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>

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
  height: 100vh;
    background-image: url('assets/image/bottombg.png');
    background-size: contain;
    background-position:bottom center;
    background-repeat: no-repeat;
}
body {
  height: 100vh;
  background-image: linear-gradient(to bottom right, #bc0000, #920202);
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
