<template>
  <div class="implementationContainer">
    <div class="bgGlow"></div>

    <header class="pageHeader animateIn1">
      <h1 class="mainTitle">Implementation</h1>
      <div class="divider"></div>
    </header>

    <main class="contentGrid">
      
      <section class="policySection animateIn2">
        <div class="glassPanel monitoringPanel">
          <h2 class="subTitle">Long-Term Monitoring Policy</h2>
          <p class="highlightText">
            In the Biosyn Bridge ecosystem, monitoring goes far beyond simply gathering feedback after an educational event.
          </p>
        
          <div class="innerDivider"></div>
          <div class="paragraphGroup">
            <p class="bodyText">
              To set up a <strong>sustainable monitoring system</strong>, we have introduced a network of educational workshops. These workshops serve not only to deliver regular educational activities but also to collect feedback for continuous improvement. 
            </p>
            <p class="bodyText">
              Over time, we are allowed to evaluate whether our initiatives are truly reaching and effectively serving local communities across different regions.
            </p>
          </div>
          <div class="cornerDecoration"></div>
        </div>
      </section>

      <section class="networkSection animateIn3">
        
        <div class="implementationCard">
          <div class="cardHeader">
            <span class="indexNum">01</span>
            <h3 class="stepTitle">BUCT Workshop</h3>
          </div>
          <p class="cardBody">
            Established in <strong>BUCT, China</strong>, this workshop is led by our iGEM team. It serves as the <strong>central hub</strong>, coordinating resources and defining the standard monitoring methodologies for the entire network.
          </p>
        </div>

        <div class="implementationCard">
          <div class="cardHeader">
            <span class="indexNum">02</span>
            <h3 class="stepTitle">El Salvador Workshop</h3>
          </div>
          <p class="cardBody">
            Through the <strong>Biosyn Bridge Ambassador Program</strong>, we built a parallel workshop in partnership with local ambassadors. It delivers tailored activities while maintaining a continuous exchange of resource sharing and feedback with the BUCT hub.
          </p>
        </div>

        <div class="implementationCard missionCard">
          <div class="cardHeader">
            <span class="indexNum">03</span>
            <h3 class="stepTitle">The Microcosm Cycle</h3>
          </div>
          <p class="cardBody">
            Each workshop reflects the same progression: <strong>Eco-Awakening</strong>, <strong>Edu-Empowering</strong>, and <strong>Equ-Globalizing</strong>. They embody our vision of a self-sustaining ecosystem where ideas evolve with every new engagement.
          </p>
        </div>
        
      </section>
    </main>
  </div>
  <PageNavigation />
</template>

<script setup>
  import PageNavigation from '../PageNavigation.vue';
</script>

<style scoped>
/* 动画 */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.implementationContainer {
  position: relative;
  min-height: 100vh;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  color: #c9d1d9;
  padding: 100px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bgGlow {
  position: absolute;
  top: 15%; left: 5%;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(47, 129, 247, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

/* Header */
.pageHeader { text-align: center; margin-bottom: 80px; }
.mainTitle { font-size: 5rem; font-weight: 200; color: #fff; letter-spacing: 6px; }
.divider { width: 150px; height: 4px; background: #2f81f7; margin: 25px auto 0; box-shadow: 0 0 15px rgba(47, 129, 247, 0.5); }

/* Grid */
.contentGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1400px;
  width: 100%;
  z-index: 10;
}

/* --- 左侧面板：更厚重的玻璃质感 --- */
.glassPanel {
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 60px 50px;
  border-radius: 8px;
  position: relative;
  backdrop-filter: blur(15px);
  border-top: 2px solid rgba(47, 129, 247, 0.3); /* 顶部蓝色亮条 */
}

.subTitle { font-size: 2.8rem; font-weight: 700; color: #fff; margin-bottom: 30px; line-height: 1.1; }

.highlightText {
  font-size: 1.3rem;
  color: #2f81f7;
  font-weight: 600;
  margin-bottom: 25px;
  line-height: 1.5;
}

.innerDivider {
  height: 1px;
  background: linear-gradient(90deg, #2f81f7, transparent);
  margin: 30px 0;
  width: 60%;
}

.bodyText { font-size: 1.1rem; line-height: 1.8; color: #c9d1d9; margin-bottom: 15px; text-align: justify; }

.cornerDecoration {
  position: absolute; bottom: 0; left: 0;
  width: 25px; height: 25px;
  border-bottom: 3px solid #2f81f7; border-left: 3px solid #2f81f7;
}

/* --- 右侧卡片：强调连接感 --- */
.networkSection { display: flex; flex-direction: column; gap: 25px; }

.implementationCard {
  background: rgba(255, 255, 255, 0.03);
  border-left: 2px solid rgba(255, 255, 255, 0.1);
  padding: 30px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.implementationCard:hover {
  background: rgba(47, 129, 247, 0.05);
  border-left-color: #2f81f7;
  transform: translateX(10px);
}

.cardHeader { display: flex; align-items: center; gap: 20px; margin-bottom: 15px; }
.indexNum { font-size: 1.5rem; font-weight: 900; color: rgba(47, 129, 247, 0.5); font-family: 'Courier New', Courier, monospace; }
.stepTitle { font-size: 1.8rem; color: #fff; font-weight: 700; margin: 0; }
.cardBody { font-size: 1.05rem; line-height: 1.7; color: #c9d1d9; margin: 0; }

.missionCard {
  background: linear-gradient(135deg, rgba(47, 129, 247, 0.1) 0%, transparent 100%);
  border: 1px solid rgba(47, 129, 247, 0.2);
}

/* 进场动画 */
.animateIn1 { animation: fadeIn 1s ease-out 0.2s forwards; opacity: 0; }
.animateIn2 { animation: fadeIn 1s ease-out 0.5s forwards; opacity: 0; }
.animateIn3 { animation: fadeIn 1s ease-out 0.8s forwards; opacity: 0; }

@media (max-width: 1100px) {
  .contentGrid { grid-template-columns: 1fr; gap: 40px; }
  .mainTitle { font-size: 3.5rem; }
}
</style>