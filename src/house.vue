<!--
 * @Author: li2022 liqing@linkon.me
 * @Date: 2023-03-15 19:14:26
 * @LastEditors: li2022 liqing@linkon.me
 * @LastEditTime: 2023-03-16 21:02:26
 * @FilePath: \law\src\house.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const dataVal = reactive({
    list: [
        {
            title: '贵州省遵义市汇川区上海路街道航宇社区',
            address: '贵州省遵义市汇川区上海路街道航宇社区',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url:'https://www.720yun.com/vr/fb5jOrskku3'
        },
        {
            title: '贵州省绥阳县枧坝镇黄鱼村',
            address: '贵州省绥阳县枧坝镇黄鱼村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/1c0jOrekrf4'
        },
        {
            title: '贵州省正安县瑞濠街道新龙孔社区',
            address: '贵州省正安县瑞濠街道新龙孔社区',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/177jOrekrf1'
        }]
});
const go=item=>{
    window.open(item, "_blank")
}

</script>
<template>
    <div class="d-flex align-items-center top">
        <van-icon name="arrow-left" size="22" @click="router.go(-1)"/>
       <div class="justify-content-center size-18 flex-1">{{ route.query.name }}</div> 
    </div>
    <div class="d-flex showbox" v-for="item in dataVal.list" @click="go(item.url)">
        <van-image width="160px" height="100px" class="border_10 hidden" fit="cover" :src="item.image"></van-image>
        <div class="d-flex direction-column rightbox">
            <b>{{ item.title }}</b>
            <span class="tips">地址：{{ item.address }}</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
.top{
    height: 46px;
    background-color:rgba(rgb(255, 253, 253), 1);
}
.showbox {
    background-color: rgba(rgb(30, 29, 29), .7);
    width: 90%;
    margin: 20px auto;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    color: rgb(234, 198, 153);

    .rightbox {
        width: 70%;
        margin-left: 20px;
        text-align: left;
        .tips {
            margin-top: 20px;
            color: rgb(139, 126, 110);
        }
    }
}
</style>