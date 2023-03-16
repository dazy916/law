<!--
 * @Author: li2022 liqing@linkon.me
 * @Date: 2023-03-15 19:14:26
 * @LastEditors: li2022 liqing@linkon.me
 * @LastEditTime: 2023-03-16 21:19:38
 * @FilePath: \law\src\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { reactive } from 'vue'
const router = useRouter()
const dataVal = reactive({ list: ['贵阳市', '遵义市', '六盘水市', '安顺市', '毕节市', '铜仁市', '黔东南州', '黔南州', '黔西南州' ] });
const goDetail = (item,idx) => {
    router.push('house?name=' + item+'&idx='+idx)
} 
</script>
<template>
    <div class="topbox size-14">
        <!-- <b class=" mb-4"> 第九批贵州省“全国民主法治示范村（社区）”</b>
            VR全景展播 -->
        <div class="d-flex space-around flex-wrap">
            <div class="box" v-for="(item,idx) in dataVal.list" @click="goDetail(item,idx)">{{ item }}
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.topbox {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // color: #fff;
    // padding: 20px 0 40px 0;
    // height: 300px;
    background-image: url('assets/image/topbg.png');
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    padding-top: 46%;
}

.box {
    min-width: 120px;
    padding: 6px 20px;
    box-sizing: border-box;
    margin: 20px;
    background-image: linear-gradient(to bottom right, #ffe6c8, #fcca6e);
    color: #bd0000;
    font-size: 16px;
    font-weight: bold;
    border-radius: 16px;
    border: 1px solid #ff5050;

    &:hover {
        font-weight: bold;
        color: darkslategrey;
        background-color: rgba(234, 198, 153);
    }

    // &:last-child:nth-child(2n+2 ){
    //     margin-right: calc((100% - 140px) / 2 );
    // }
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