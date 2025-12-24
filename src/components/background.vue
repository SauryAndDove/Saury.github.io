<template>
  <div class="galaxy-background">
    <div id='stars-tiny'></div>
    <div id='stars-medium'></div>
    <div id='stars-large'></div>
    
    <div class="nebula-overlay"></div>
  </div>
</template>

<script setup>
// 保持 <script setup> 标签，但内容为空
</script>

<style scoped>
/* ===============================
   纯 CSS 星空背景实现 (无 SCSS)
   =============================== */

.galaxy-background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    /* 使用深色渐变作为基底 */
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    overflow: hidden; 
    z-index: -1; 
}

/* --- 星星层 --- */

/* 核心：通过 box-shadow 列表来定义星星的位置和数量。
   为了保证代码简洁性，我们只提供部分星星坐标，你可以自行添加更多坐标（x y color, ...）。 */

/* 第一层：最密集的小星星 (1x1px) */
#stars-tiny {
    width: 1px;
    height: 1px;
    background: transparent;
    position: absolute;
    top: -2000px; 
    left: -2000px;
    
    box-shadow: 
        100px 30px #FFF, 150px 150px #FFF, 250px 50px #FFF, 350px 200px #FFF,
        450px 10px #FFF, 500px 300px #FFF, 600px 120px #FFF, 750px 400px #FFF,
        800px 50px #FFF, 900px 250px #FFF, 1000px 100px #FFF, 1200px 350px #FFF,
        1400px 70px #FFF, 1600px 220px #FFF, 1800px 180px #FFF, 2000px 320px #FFF,
        2100px 80px #FFF, 2300px 420px #FFF, 2500px 150px #FFF; /* 增加一些坐标 */
    
    animation: animateStar 150s linear infinite;
    transform: scale(0.6);
}

/* 第二层：中等大小的星星 (2x2px) */
#stars-medium {
    width: 2px;
    height: 2px;
    background: transparent;
    position: absolute;
    top: -2000px; 
    left: -2000px;
    
    box-shadow: 
        10px 400px #FFF, 300px 500px #FFF, 700px 10px #FFF, 1100px 450px #FFF,
        1500px 200px #FFF, 1800px 50px #FFF, 2200px 300px #FFF, 2400px 100px #FFF;
        
    animation: animateStar 100s linear infinite;
    transform: scale(0.8);
}

/* 第三层：大且稀疏的星星 (3x3px) */
#stars-large {
    width: 3px;
    height: 3px;
    background: transparent;
    position: absolute;
    top: -2000px; 
    left: -2000px;
    
    box-shadow: 
        500px 50px #FFF, 1000px 400px #FFF, 150px 800px #FFF, 2800px 200px #FFF;
        
    animation: animateStar 50s linear infinite;
    transform: scale(1.0);
}

/* 星星移动动画，制造缓慢移动的错觉 */
@keyframes animateStar {
    0% { transform: translate(0, 0); }
    100% { transform: translate(-4000px, -2000px); } 
}

/* --- 星云叠加层 --- */
.nebula-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    /* 增加柔和的蓝色和紫色光晕 */
    background: 
        radial-gradient(circle at 15% 50%, rgba(70, 0, 100, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 85% 80%, rgba(0, 50, 150, 0.2) 0%, transparent 50%),
        linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 50%);
}
</style>