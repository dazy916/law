<!--
 * @Author: li2022 liqing@linkon.me
 * @Date: 2023-03-15 19:14:26
 * @LastEditors: li2022 liqing@linkon.me
 * @LastEditTime: 2023-03-16 21:00:15
 * @FilePath: \law\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import left from './assets/image/zhu.png'
import right from './assets/image/leo.png'
import { reactive } from 'vue'
const dataVal = reactive({
  left,
  right
});
</script>

<template>
  <router-view></router-view>
  <div class="bottombox"></div>
  <div class="left"></div>
  <div  class="right"></div>
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
  background-size: 100% 140px;
  background-position: bottom center;
  background-repeat: no-repeat;

}

body {
  height: 100vh;
  background-image: linear-gradient(to bottom, #ff0001, #920202);
}

.bottombox {
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 20%;
}

.left {
  position: absolute !important;
  left: 0;
  bottom: 0;
  width: 8rem;
  height: 8.8rem;
  background-image: url('assets/image/zhu.png');
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
}

.right {
  position: absolute !important;
  right: 0;
  bottom: 0;
  width: 8rem;
  height: 8rem;
  background-image: url('assets/image/leo.png');
  background-size: contain;
  background-position:right top;
  background-repeat: no-repeat;
}
</style>
