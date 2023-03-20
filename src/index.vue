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
import { reactive,watch,onMounted } from 'vue'
const router = useRouter()
const dataVal = reactive({ list: ['贵阳市', '遵义市', '六盘水市', '安顺市', '毕节市', '铜仁市', '黔东南州', '黔南州', '黔西南州'],flag:[] });
const goDetail = (item, idx) => {
    router.push('house?name=' + item + '&idx=' + idx)
} 

onMounted(() => {
    dataVal.flag= navigator.userAgent.match(/(phone|pad|iphone|ipad|Android|ios)/i)
   console.info(dataVal.flag)
})
</script>
<template>
    <div class="topbox size-14">
        <div class="toptext mb-4"> 第九批贵州省<template v-if="dataVal.flag"><br/></template>“全国民主法治示范村（社区）”
            <template v-if="dataVal.flag"><br/></template>
            VR全景展播</div>
        <div class="d-flex contentbox">
            <div class="box" v-for="(item, idx) in dataVal.list" @click="goDetail(item, idx)">{{ item }}
            </div>
        </div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
    </div>
</template>
<style lang="less" scoped>
.topbox {
    background-image: url('assets/image/topbg.png');
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    padding-top: 10%;

    .toptext {
        width: 90%;
        margin: 30px auto 0 auto;
        display: flex;
        flex-direction: column;
        font-size: 20px;
        color: #fcca6e;
        font-weight: bold;
        line-height: 40px;
    }
}

.contentbox {
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-around;

    i {
        width: 120px;
        padding: 6px 20px;
        box-sizing: border-box;
        margin: 20px;
    }
}

@media only screen and (min-width: 1600px) {
    .topbox{
        padding-top: 200px;
    }
    .contentbox {
        justify-content: space-around;
    }
}
@media only screen and (max-width: 1599px) {
    .contentbox {
        justify-content: flex-start;
    }
}
// @media only screen and (min-width: 480px) {
//     .contentbox {
//         justify-content: space-between;
//     }
// }

.box {
    width: 120px;
    padding: 6px 20px;
    box-sizing: border-box;
    margin:10px 20px;
    background-image: linear-gradient(to bottom right, #ffe6c8, #fcca6e);
    color: #bd0000;
    font-size: 16px;
    font-weight: bold;
    border-radius: 16px;
    border: 1px solid #ff5050;
    cursor: pointer;

    &:hover {
        font-weight: bold;
        color: #fcca6e;
        // background-color: rgb(243, 16, 0);
        background-image: linear-gradient(to bottom right, #ff2600, #a70b00);
    }

    // &:last-child:nth-child(4n-1 ){
    //     margin-right: calc((100% - ((4n-1) * 120px))/3);
    // }
    // &:last-child:nth-child(2n-1 ){
    //     margin-right: calc((100% - 310px));
    // }
    // &:last-child:nth-child(1 ){
    //     margin-right: calc(120px + 70px);
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