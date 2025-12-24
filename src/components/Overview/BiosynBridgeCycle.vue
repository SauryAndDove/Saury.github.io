<template>
  <section class="biosynCycleSection" id="cycleDiagram">
    <div class="headerContent animateFade">
      <h1 class="mainTitle animateIn1">Biosyn Bridge Cycle</h1>
      <div class="divider"></div>
    </div>

    <div class="cycleContainer">
      <div 
        v-for="(item, index) in cycleData" 
        :key="index" 
        class="phaseCard"
        :class="'phase' + (index + 1)"
      >
        <div class="cardGlow"></div>
        <div class="phaseNumber">0{{ index + 1 }}</div>
        <h3 class="phaseTitle">{{ item.title }}</h3>
        <p class="phaseDescription">{{ item.content }}</p>
      </div>

      <div class="cycleSummary animateFade">
        <div class="summaryInner">
          <p>{{ summaryText }}</p>
          <div class="loopIcon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604M21 2V6H17" stroke="#00ffaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  <PageNavigation />
</template>

<script setup>
import PageNavigation from '../PageNavigation.vue';

const cycleData = [
  {
    title: 'Eco-Awakening',
    tag: 'Foundation',
    content: 'Rooted in our original commitment to ocean conservation, we have systematically advanced public education initiatives that foster a nature-positive and environmentally conscious mindset. These efforts are designed to sow the seeds of sustainability across society, encouraging green awareness and sustainable lifestyles.'
  },
  {
    title: 'Edu-Empowering',
    tag: 'Innovation',
    content: 'Building on this foundation, we empower individuals with scientific knowledge. By introducing emerging fields such as synthetic biology, we create pathways for learners to explore future scientific frontiers, sparking curiosity while cultivating innovative thinking and practical skills.'
  },
  {
    title: 'Equ-Globalizing',
    tag: 'Impact',
    content: 'To ensure this impact reaches beyond individual growth and local contexts, we are committed to shaping an inclusive and collaborative global educational ecosystem. We are devoted to fostering an equitable and sustainable platform for international exchange and transforming education into a dynamic bridge that connects cultures and accelerates shared development.'
  }
];

const summaryText = "Ultimately, our international collaborations flow back into society, driving broad public engagement and sparking a renewed wave of Eco-Awakening—closing the loop from worldwide practice to grassroots inspiration.";
</script>

<style scoped>
/* 动画复用 */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes subtleShimmer {
    0% { box-shadow: 0 0 50px rgba(47, 129, 247, 0.1); }
    50% { box-shadow: 0 0 70px rgba(47, 129, 247, 0.2); }
    100% { box-shadow: 0 0 50px rgba(47, 129, 247, 0.1); }
}

.biosynCycleSection {
  position: relative;
  padding: 80px 40px;
  /* 保持与 GuidanceIdea 一致的背景 */
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  color: #c9d1d9;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.headerContent {
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

.animateIn1 {
    animation: fadeIn 1s ease-out 0.5s forwards;
    opacity: 0;
}

.divider {
  width: 120px;
  height: 4px;
  background: #2f81f7;
  margin: 20px auto 0;
  border-radius: 2px;
  box-shadow: 0 0 15px #2f81f7;
}

.cycleContainer {
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  position: relative;
  z-index: 10;
}

.phaseCard {
  position: relative;
  padding: 50px 40px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
}

.phaseCard:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.05);
  border-color: #2f81f7;
  box-shadow: 0 10px 40px rgba(47, 129, 247, 0.15);
}

.cardGlow {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at top right, rgba(47, 129, 247, 0.1), transparent);
  pointer-events: none;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.4s;
}

.phaseCard:hover .cardGlow {
  opacity: 1;
}

.phaseNumber {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(47, 129, 247, 0.3); /* 使用主题蓝 */
  margin-bottom: 20px;
  font-family: monospace;
}

.phaseTitle {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: #fff;
  letter-spacing: 1px;
}

.phaseDescription {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #c9d1d9;
}

.cycleSummary {
  grid-column: 1 / -1;
  margin-top: 60px;
  padding: 40px;
  background: rgba(47, 129, 247, 0.05);
  border-radius: 4px;
  border: 1px dashed rgba(47, 129, 247, 0.3);
  text-align: center;
}

.summaryInner {
  max-width: 900px;
  margin: 0 auto;
}

.summaryInner p {
  font-size: 1.3rem;
  font-style: italic;
  line-height: 1.6;
  color: #c9d1d9;
}

.loopIcon {
  margin-top: 25px;
  width: 50px;
  height: 50px;
  display: inline-block;
  animation: rotate 6s linear infinite;
}

.animateFade {
  animation: fadeIn 1s ease-out forwards;
}

@media (max-width: 1024px) {
  .mainTitle { font-size: 3.5rem; }
  .cycleContainer { grid-template-columns: 1fr; }
}
</style>