<template>
  <div class="workflowContainer">
    <div class="bgGlow"></div>

    <header class="pageHeader animateIn1">
      <h1 class="mainTitle">Educational Work Flow</h1>
      <div class="divider"></div>
    </header>

    <main class="mainGrid">
      
      <section class="panelLeft animateIn2">
        <div class="glassPanel stakeholderPanel">
          <div class="panelHeader">
            <h2 class="subTitle">Stakeholders Identification</h2>
          </div>
          
          <div class="textContent">
            <p class="introText">
              Identifying stakeholders is the <strong>core step</strong> of our work. It clarifies our purpose and defines the groups we serve.
            </p>
            <p class="bodyText">
              Beginning with the activities themselves, we reach out to every group influenced by our programs. By actively building partnerships and sharing resources, we ensure our education extends to broader, more diverse audiences, securing long-term sustainability.
            </p>
          </div>
          <div class="cornerDecoration"></div>
        </div>
      </section>

      <section class="panelRight animateIn3">
        <div class="cycleCard">
          <div class="numberBg">01</div>
          <div class="cardContent">
            <h3 class="stepTitle">Execution</h3>
            <p class="stepDesc">
              Within our educational framework, the cycle of “Execution—Information Collection—Refinement” forms a dynamic ecosystem of continuous improvement.
            </p>
          </div>
        </div>

        <div class="cycleCard">
          <div class="numberBg">02</div>
          <div class="cardContent">
            <h3 class="stepTitle">Information Collection</h3>
            <p class="stepDesc">
              We use a blend of quantitative and qualitative approaches, like surveys, interviews, and on-site observations, to move beyond surface-level participation data and uncover deeper insights into learners’ understanding, emotional engagement, and underlying needs.
            </p>
          </div>
        </div>

        <div class="cycleCard">
          <div class="numberBg">03</div>
          <div class="cardContent">
            <h3 class="stepTitle">Refinement</h3>
            <p class="stepDesc">
              stage builds directly on this feedback, allowing us to identify strengths, address weaknesses, and enhance both content and delivery.
            </p>
          </div>
        </div>
        
      </section>
    </main>
  </div>
  <PageComponent />
</template>

<script setup>
  import PageComponent from '../PageNavigation.vue';
</script>

<style scoped>
/* 动画复用 */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.workflowContainer {
  position: relative;
  min-height: 95vh;
  /* 保持与 GuidanceIdea 一致的背景 */
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  color: #c9d1d9;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 局部蓝色氛围光，增加层次 */
.bgGlow {
  position: absolute;
  top: 10%;
  right: 10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(47, 129, 247, 0.1) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.pageHeader {
  text-align: center;
  margin-bottom: 80px;
  z-index: 10;
}

/* 严格参考要求的 Title 格式 */
.mainTitle {
    font-size: 5rem; 
    font-weight: 200;
    margin-bottom: 0.5rem;
    color: #c9d1d9;
    letter-spacing: 5px;
}

.divider {
  width: 150px;
  height: 4px;
  background: #2f81f7;
  margin: 20px auto 0;
  box-shadow: 0 0 15px #2f81f7;
}

.mainGrid {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1.2fr; /* 左侧稍窄，右侧稍宽 */
  gap: 60px;
  max-width: 1500px;
  width: 100%;
}

/* --- 左侧面板 --- */
.glassPanel {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 50px;
  height: 100%;
  border-radius: 4px;
  position: relative;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
}

.glassPanel:hover {
  border-color: #2f81f7;
  box-shadow: 0 0 30px rgba(47, 129, 247, 0.15);
}

.subTitle {
  font-size: 3rem; /* 增大字体 */
  font-weight: 700;
  color: #fff;
  margin-bottom: 40px;
  line-height: 1.2;
}

.introText {
  font-size: 1.5rem; /* 增大介绍性文字 */
  line-height: 1.6;
  color: #fff;
  margin-bottom: 30px;
  border-left: 4px solid #2f81f7;
  padding-left: 20px;
}

.bodyText {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #c9d1d9;
}

.cornerDecoration {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-bottom: 2px solid #2f81f7;
  border-right: 2px solid #2f81f7;
}

/* --- 右侧面板 --- */
.panelRight {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cycleCard {
  position: relative;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
  border-left: 4px solid rgba(255, 255, 255, 0.1);
  padding: 35px 40px;
  display: flex;
  align-items: flex-start;
  gap: 30px;
  transition: all 0.3s ease;
}

.cycleCard:hover {
  background: linear-gradient(90deg, rgba(47, 129, 247, 0.1) 0%, transparent 100%);
  border-left-color: #2f81f7;
  padding-left: 50px; /* 悬浮时的位移动画 */
}

.numberBg {
  font-size: 3.5rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.05);
  font-family: monospace;
  line-height: 0.8;
}

.cycleCard:hover .numberBg {
  color: rgba(47, 129, 247, 0.4);
}

.stepTitle {
  font-size: 2rem; /* 增大标题 */
  color: #fff;
  margin: 0 0 15px 0;
  font-weight: 700;
}

.stepDesc {
  font-size: 1.15rem;
  color: #c9d1d9;
  line-height: 1.7;
  margin: 0;
}

.stepDesc strong {
  color: #fff;
  font-weight: 600;
}

/* 进场动画类 */
.animateIn1 { animation: fadeIn 1s ease-out 0.2s forwards; opacity: 0; }
.animateIn2 { animation: fadeIn 1s ease-out 0.5s forwards; opacity: 0; }
.animateIn3 { animation: fadeIn 1s ease-out 0.8s forwards; opacity: 0; }

@media (max-width: 1200px) {
  .mainGrid { grid-template-columns: 1fr; gap: 40px; }
  .mainTitle { font-size: 3.5rem; }
}
</style>