<!--
 * @Author: li2022 liqing@linkon.me
 * @Date: 2023-03-15 19:14:26
 * @LastEditors: li2022 liqing@linkon.me
 * @LastEditTime: 2023-03-16 21:38:52
 * @FilePath: \law\src\house.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import image1 from './assets/image/1.jpg'
import image2 from './assets/image/2.jpg'
// import image3 from './assets/image/3.jpg'
// import image4 from './assets/image/4.jpg'
// import image5 from './assets/image/5.jpg'
// import image6 from './assets/image/6.jpg'
// import image7 from './assets/image/7.jpg'
// import image8 from './assets/image/8.jpg'
const route = useRoute()
const router = useRouter()
const dataVal = reactive({
    list: [],
    list1: [
        {
            title: '贵州省贵阳市云岩区盐务街街道永安社区',
            address: '贵州省贵阳市云岩区盐务街街道永安社区',
            image: image1,
            url: 'https://www.720yun.com/vr/e8b20u86ylv'
        },
        {
            title: '贵州省贵阳市白云区云城街道白金社区',
            address: '贵州省贵阳市白云区云城街道白金社区',
            image: image2,
            url: 'https://www.720yun.com/vr/8e125u86y1a'
        },
        {
            title: '贵州省贵阳市花溪区石板镇镇山村',
            address: '贵州省贵阳市花溪区石板镇镇山村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/3202furfaca'
        },
        {
            title: '贵州省修文县六屯镇大木村',
            address: '贵州省修文县六屯镇大木村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/a8422u86yns'
        }],
    list2: [
        {
            title: '贵州省遵义市汇川区上海路街道航宇社区',
            address: '贵州省遵义市汇川区上海路街道航宇社区',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/fb5jOrskku3'
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
        },
        {
            title: '贵州省赤水市葫市镇小关子村',
            address: '贵州省赤水市葫市镇小关子村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/8bd2auikxbv'
        },
        {
            title: '贵州省仁怀市五马镇龙里村',
            address: '贵州省仁怀市五马镇龙里村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/977jOrmOvf6'
        }],
    list3: [
        {
            title: '水城区新街彝族苗族布依族乡大元村',
            address: '水城区新街彝族苗族布依族乡大元村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/690jOruvuw2'
        },
        {
            title: '贵州省盘州市盘关镇海坝村',
            address: '贵州省盘州市盘关镇海坝村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/100jOrskOn9'
        },
        {
            title: '贵州省六盘水市六枝特区落别布依族彝族乡牛角村',
            address: '贵州省六盘水市六枝特区落别布依族彝族乡牛角村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/e1bjOrskOw5'
        }],
    list4: [
        {
            title: '贵州省安顺市西秀区马槽社区服务中心新天地社区',
            address: '贵州省安顺市西秀区马槽社区服务中心新天地社区',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/f38jOrskOO1'
        },
        {
            title: '贵州省安顺市平坝区乐平镇大屯村',
            address: '贵州省安顺市平坝区乐平镇大屯村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/537jOrskOO2'
        },
        {
            title: '贵州省普定县白岩镇韭黄村',
            address: '贵州省普定县白岩镇韭黄村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/518jOrskOw7'
        },
        {
            title: '贵州省关岭布依族苗族自治县顶云街道石板井村',
            address: '贵州省关岭布依族苗族自治县顶云街道石板井村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/394jOrskOw2'
        }],
    list5: [
        {
            title: '贵州省织金县惠民街道惠泽社区',
            address: '贵州省织金县惠民街道惠泽社区',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/60djOdtfvf7'
        },
        {
            title: '贵州省纳雍县骔岭镇小屯社区',
            address: '贵州省纳雍县骔岭镇小屯社区',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/eb9jOruvun5'
        },
        {
            title: '贵州省威宁彝族回族苗族自治县新发布依族乡啊嘎村',
            address: '贵州省威宁彝族回族苗族自治县新发布依族乡啊嘎村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/2aajOruvuw4'
        },
        {
            title: '贵州省毕节市七星关区朱昌镇双堰社区',
            address: '贵州省毕节市七星关区朱昌镇双堰社区',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/ae8jOruvuw9'
        },
        {
            title: '贵州省大方县凤山彝族蒙古族乡店子村',
            address: '贵州省大方县凤山彝族蒙古族乡店子村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/600jOruvuO6'
        }],
    list6: [
        {
            title: '贵州省德江县堰塘土家族乡高家湾社区',
            address: '贵州省德江县堰塘土家族乡高家湾社区',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/e7cjOrekrk7'
        },
        {
            title: '贵州省沿河土家族自治县沙子街道黄金村',
            address: '贵州省沿河土家族自治县沙子街道黄金村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/bfdjOrekrk2'
        },
        {
            title: '贵州省铜仁市万山区高楼坪侗族乡青年湖村',
            address: '贵州省铜仁市万山区高楼坪侗族乡青年湖村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/b74jOrekrv8'
        },
        {
            title: '贵州省铜仁市碧江区云场坪镇路腊村',
            address: '贵州省铜仁市碧江区云场坪镇路腊村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/752jOrekra5'
        }],
    list7: [
        {
            title: '贵州省台江县排羊乡九摆村',
            address: '贵州省台江县排羊乡九摆村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/8b0jOrekrv2'
        },
        {
            title: '贵州省麻江县金竹街道官井湖社区',
            address: '贵州省麻江县金竹街道官井湖社区',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/12ajOrekuO6'
        },
        {
            title: '贵州省榕江县定威水族乡定旦村',
            address: '贵州省榕江县定威水族乡定旦村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/4ffjOrwkra9'
        },
        {
            title: '贵州省镇远县羊场镇金盆村',
            address: '贵州省镇远县羊场镇金盆村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/8bdjOrekrv4'
        }],
    list8: [
        {
            title: '贵州省独山县百泉镇百泉湖村',
            address: '贵州省德江县堰塘土家族乡高家湾社区',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/f7bjOrwkra6'
        },
        {
            title: '贵州省荔波县佳荣镇大土村',
            address: '贵州省荔波县佳荣镇大土村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/50ejOrwkrk3'
        },
        {
            title: '贵州省罗甸县红水河镇云里村',
            address: '贵州省罗甸县红水河镇云里村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/c03jOrwfsy3'
        },
        {
            title: '贵州省长顺县广顺镇核子村',
            address: '贵州省长顺县广顺镇核子村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/8a3jOrskOO5'
        },
        {
            title: '贵州省龙里县醒狮镇大岩村',
            address: '贵州省龙里县醒狮镇大岩村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/97ejOrskOO6'
        }],
    list9: [
        {
            title: '贵州省望谟县新屯街道新屯村',
            address: '贵州省望谟县新屯街道新屯村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/2b1jOrwfsy9'
        },
        {
            title: '贵州省贞丰县双峰街道茶林社区',
            address: '贵州省贞丰县双峰街道茶林社区',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/737jOrwfsm4'
        },
        {
            title: '贵州省安龙县笃山镇梨树村',
            address: '贵州省安龙县笃山镇梨树村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/bf1jOrwfsm5'
        },
        {
            title: '贵州省兴义市则戎镇冷洞村',
            address: '贵州省兴义市则戎镇冷洞村',
            image: 'http://vr.yun.bafang720.com/926/works/3b937f9dd55ced7e/thumb.jpg',
            url: 'https://www.720yun.com/vr/612jOrwfsn1'
        }],

});
const go = item => {
    window.open(item, "_blank")
}
onMounted(() => {
    switch (route.query.idx) {
        case '0':
            dataVal.list = dataVal.list1
            break;
        case '1':
            dataVal.list = dataVal.list2
            break;
        case '2':
            dataVal.list = dataVal.list3
            break;
        case '3':
            dataVal.list = dataVal.list4
            break;
        case '4':
            dataVal.list = dataVal.list5
            break;
        case '5':
            dataVal.list = dataVal.list6
            break;
        case '6':
            dataVal.list = dataVal.list7
            break;
        case '7':
            dataVal.list = dataVal.list8
            break;
        case '8':
            dataVal.list = dataVal.list9
            break;
    }
})
</script>
<template>
    <div class="d-flex align-items-center top">
        <van-icon name="arrow-left" size="22" @click="router.go(-1)" />
        <div class="justify-content-center size-18 flex-1">{{ route.query.name }}</div>
    </div>
    <div class="contentbox">
        <div class="d-flex showbox" v-for="item in dataVal.list" @click="go(item.url)">
            <van-image width="160px" height="100px" class="border_10 hidden" fit="cover" :src="item.image"></van-image>
            <div class="d-flex direction-column rightbox">
                <b>{{ item.title }}</b>
                <span class="tips">地址：{{ item.address }}</span>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.contentbox{    
    height: 80%;
    overflow: hidden;
    overflow-y: auto;
}
.top {
    height: 46px;
    background-color: rgba(rgb(255, 253, 253), 1);
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