<!--
 * @Author: li2022 liqing@linkon.me
 * @Date: 2023-03-15 19:14:26
 * @LastEditors: li2022 liqing@linkon.me
 * @LastEditTime: 2023-03-15 19:15:56
 * @FilePath: \law\src\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { reactive } from 'vue'
const router = useRouter()
const dataVal = reactive({ list: ['贵阳市', '遵义市', '六盘水市', '安顺市', '毕节市', '铜仁市', '黔南州', '黔西南州', '黔东南州', '省直'] });
const goDetail = item => {
    router.push('house?name=' + item)
} 
</script>
<template>
    <div class="topbox">
        <span class="size-20 mb-4"> 第一批贵州省法治宣传教育基地展播</span>
        VR全景在线展示
    </div>
    <div class="d-flex space-between flex-wrap">
        <div class="box" v-for="item in dataVal.list" @click="goDetail(item)">{{ item }}
        </div>
    </div>
</template>
<style lang="less" scoped>
.topbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    margin: 20px 0 40px 0;
}

.box {
    min-width: 140px;
    padding: 20px;
    box-sizing: border-box;
    margin: 20px;
    background-color: rgba(rgb(8, 8, 8), .3);
    color: rgb(234, 198, 153);

    &:hover {
        font-weight: bold;
        color: darkslategrey;
        background-color: rgba(234, 198, 153);
    }
    // &:last-child:nth-child(2n+2 ){
    //     margin-right: calc((100% - 140px) / 2 );
    // }
}

.company {
    position: fixed;
    width: 12rem;
    height: 1rem;
    top: 1rem;
    right: 1rem;
    background-image: url('./assets/image/company.png');
    background-size: contain;
    background-repeat: no-repeat;
}

.van-tabbar-item {
    color: #eac699;
}

.van-tabbar-item--active {
    background-color: transparent !important;
    color: #b68363;
}

.van-tabbar-item__icon img {
    height: 26px;
}
</style>