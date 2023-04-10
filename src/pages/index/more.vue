<template>
    <div class="text-3xl text-center font-bold text-gray-600 mt-68">
       2,000종이 넘는 
    </div>
    <div class="leading-normal text-3xl text-center font-bold text-gray-600">
        다채로운 전통주로 시작해 보세요. 
    </div>
    <br>
    <br>
    <div class="leading-normal text-sm text-center">
        우리나라 술 <span class="font-bold text-yellow-400">2,030</span>종
    </div>
    <div class="leading-normal text-sm text-center mb-40">
        전국 각지 양조장 <span class="font-bold text-yellow-400">1,234</span>곳
    </div>
    <div>
        <div id="chartset">
            <div id="chart1"></div>
            <div id="chart2"></div>
            <div id="chart3"></div>
        </div>
        <div id="chartbarset">
            <div id="chartbar"><span class="text-xs text-center font-bold text-gray-600">1,037개<br>전통주</span></div>
            <div id="chartbar2"><span class="text-xs text-center font-bold" style="color: rgb(209, 209, 209);">160개<br>수제 맥주</span></div>
            <div id="chartbar2"><span class="text-xs text-center font-bold" style="color: rgb(209, 209, 209);">20개<br>소주&맥주</span></div>
        </div>
        <div class="mb-36"></div>
    </div>
    <div class="text-center"><span class="text-xs">2019년 기준 주종별 등록 면허수</span></div>
</template>

<script setup>
// https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>
<style scoped>
#chart1{
    height: 157px;
    width: 36px;
    background-color: rgb(255, 186, 0);
    border-radius: 10px 10px 0px 0px;
}
#chart2{
    width: 36px;
    height: 45px;
    background: rgb(209, 209, 209);
    border-radius: 10px 10px 0px 0px;
}
#chart3{
    width: 36px;
    height: 25px;
    background: rgb(209, 209, 209);
    border-radius: 10px 10px 0px 0px;
}
#chartbar{
    background-color: rgb(255, 186, 0);
    width: 46px;
    height: 2px;
}
#chartbar2{
    background-color: rgb(209, 209, 209);
    width: 46px;
    height: 2px;
}
#chartset{
    width: 300px;
    display: flex;
    justify-content:space-between;
    align-items: flex-end;
    margin: auto;
}
#chartbarset{
    width: 310px;
    display: flex;
    justify-content:space-between;
    align-items: flex-end;
    margin: auto;
}
</style>