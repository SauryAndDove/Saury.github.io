<template>
  <section class="outreachEventsSection">
    <div class="headerContent animateIn">
      <h1 class="mainTitle">International Educational Efforts</h1>
      <div class="accentLine"></div>
    </div>

    <div class="eventsContainer">
      <article class="eventBlock animateIn">
        <div class="eventLayout">
          
          <div class="textContent">
            <div class="titleGroup">
              <span class="serialNumber">01</span>
              <h3 class="eventTitle">El Salvador</h3>
            </div>
            
            <p>
              Our educational efforts are guided by the “GEO” principle of the Biosyn Bridge program. While emphasizing educational equality and inclusivity, we are equally committed to making knowledge more global and accessible to a wider audience.
            </p>
            
            <p>
              Since last year, we have been carrying out the Biosyn Bridge education program in El Salvador. As the BUCT-iGEM 2025 team, we have continuously expanded and refined our practices in this region, aiming to deliver cutting-edge knowledge of synthetic biology to more people. Through diverse educational activities, we also call on more individuals to join us in protecting the ocean and the environment.
            </p>

            <p>
              Looking ahead, we envision our educational work in El Salvador becoming a starting point for advancing educational development across Latin America, ultimately fostering education that is both globalized and equitable.
            </p>

            <h4 class="subLabel">In CENTRO ESCOLAR COLONIA LAS BRISAS</h4>
            <p>
              Through the Biosyn Bridge platform, we have maintained close collaboration with Ms. Klara, the Biosyn Bridge Latin America Ambassador.
            </p>

            <p>
              With her support, our team introduced our self-designed Snakes and Ladders game, Activity Book, and Comic Book to Centro Escolar Colonia Las Brisas in El Salvador.
            </p>

            <div class="sessionLinks">
              <div class="sessionItem">
                <h5 class="sessionTitle">Session 1：Activity Book</h5>
                <router-link class="sessionLink" to="/Eco-Awakening/page1">Click here to read more about the Activity Book in section Eco-Awakening</router-link>
              </div>

              <div class="sessionItem">
                <h5 class="sessionTitle">Session 2：Comic Book</h5>
                <router-link class="sessionLink" to="/Eco-Awakening/page1">Click here to read more about the Activity Book in section Eco-Awakening</router-link>
              </div>

              <div class="sessionItem">
                <h5 class="sessionTitle">Session 3: Snakes and Ladders game</h5>
                <router-link class="sessionLink" to="/Eco-Awakening/page1">Click here to read more about the Snakes and Ladders game in section Eco-Awakening</router-link>
              </div>
            </div>

            <div class="acknowledgementSection">
              <h4 class="subLabel reflectionLabel">Acknowledgement</h4>
              <p class="reflectionText">
                This film screening provided an engaging and vivid platform to raise public awareness of marine plastic pollution. By showcasing the severity of ocean plastic pollution, it helped students gain a deeper understanding of the environmental crisis. Our collaboration with the BUCT Foreign Language Association facilitated cross-cultural communication, enabling students from diverse backgrounds to appreciate international perspectives. Through discussion and reflection, the activity fostered a sense of environmental responsibility and encouraged collective efforts to protect the oceans and the natural environment.
              </p>
            </div>
          </div>

          <div class="imageSidebar">
            <div class="imageStack">
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 86.png" alt="fig86" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 87.jpg" alt="fig87" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 88.jpg" alt="fig88" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 89.jpg" alt="fig89" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 90.jpg" alt="fig90" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 91.jpg" alt="fig91" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 92.jpg" alt="fig92" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 93.jpg" alt="fig93" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 95.jpg" alt="fig95" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 96.jpg" alt="fig96" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 97.jpg" alt="fig97" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 98.jpg" alt="fig98" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 99.jpg" alt="fig99" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 100.jpg" alt="fig100" class="eventImage"></div>
              <span class="figCaption">The class and articles from children</span>
            </div>

            <div class="imageStack" style="margin-top: 20px;">
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 101.jpg" alt="fig101" class="eventImage"></div>
              <span class="figCaption">Ms. Klara</span>
            </div>

            <div class="imageStack" style="margin-top: 20px;">
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 102.jpg" alt="fig102" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 103.jpg" alt="fig103" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 104.jpg" alt="fig104" class="eventImage"></div>
              <span class="figCaption">The journals</span>
            </div>
          </div>

          

        </div>
      </article>
    </div>
    <PageNavigation />
  </section>
</template>

<script setup>
import PageNavigation from '../PageNavigation.vue';
import { ref } from 'vue';
import Document1 from '@/assets/Equ-Globalizing/Document1.pdf';
import Document2 from '@/assets/Equ-Globalizing/Document2.pdf';

const toggle1 = ref(false);
const toggle2 = ref(false); 
</script>

<style scoped>
.outreachEventsSection {
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  padding: 100px 40px 100px;
  color: #c9d1d9;
  min-height: 100vh;
}

.eventsContainer {
  max-width: 1550px;
  margin: 0 auto;
}

.eventBlock {
  background: rgba(255, 255, 255, 0.02);
  border-left: 2px solid rgba(47, 129, 247, 0.3);
  padding: 50px;
  margin-bottom: 80px;
  border-radius: 0 12px 12px 0;
  transition: all 0.3s ease;
}

.eventBlock:hover {
  background: rgba(255, 255, 255, 0.04);
  border-left-color: #2f81f7;
}

.eventLayout {
  display: flex;
  gap: 60px;
  align-items: flex-start; /* 必须为 flex-start 才能使 sticky 生效 */
}

/* 布局比例控制 */
.textContent {
  flex: 2;
}

.imageSidebar {
  flex: 0.8;
  max-width: 450px;
  position: sticky;
  top: 40px; /* 距离视口顶部的距离 */
}

/* 链接部分样式优化 */
.sessionLinks {
  margin: 40px 0;
}

.sessionItem {
  margin-bottom: 25px;
}

.sessionTitle {
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 8px;
  font-weight: 500;
}

.sessionLink {
  color: #2f81f7;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: 0.3s;
}

.sessionLink:hover {
  color: #fff;
  text-decoration: underline;
}

/* 图片网格样式 */
.imageStack {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.imageWrapper {
  background: rgba(255, 255, 255, 0.03);
  padding: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  transition: transform 0.3s ease;
}

.imageWrapper:hover {
  transform: scale(1.05);
  border-color: #2f81f7;
}

.eventImage {
  width: 100%;
  height: 110px; /* 稍微增加了高度 */
  display: block;
  border-radius: 4px;
  object-fit: cover;
}

.figCaption {
  grid-column: span 2;
  margin-top: 15px;
  font-size: 0.85rem;
  color: #2f81f7;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  opacity: 0.8;
}

/* 基础文本样式 */
.headerContent { text-align: center; margin-bottom: 80px; }
.mainTitle { font-size: 3.5rem; font-weight: 200; color: #fff; margin: 0; letter-spacing: 2px; }
.accentLine { width: 100px; height: 4px; background: #2f81f7; margin: 30px auto; }

.titleGroup { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
.serialNumber { font-size: 1.8rem; font-weight: 800; color: #2f81f7; font-family: serif; }
.eventTitle { font-size: 2.2rem; color: #fff; font-weight: 400; margin: 0; }

.subLabel { 
  color: #2f81f7; 
  text-transform: uppercase; 
  letter-spacing: 2px; 
  font-size: 0.9rem; 
  margin: 40px 0 15px; 
  display: block; 
  font-weight: 600; 
}

p { font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px; text-align: justify; color: #b1bac4; }

.reflectionText {
  padding: 25px;
  background: rgba(47, 129, 247, 0.05);
  border-left: 4px solid #2f81f7;
  font-style: italic;
  margin-top: 15px;
  border-radius: 0 8px 8px 0;
  line-height: 1.8;
}

/* 响应式处理 */
@media (max-width: 1200px) {
  .eventLayout { flex-direction: column; }
  .imageSidebar { 
    width: 100%; 
    max-width: none; 
    position: static; /* 移动端取消粘滞 */
    margin-top: 40px;
  }
  .imageStack { grid-template-columns: repeat(4, 1fr); }
  .eventImage { height: 150px; }
}

@media (max-width: 768px) {
  .mainTitle { font-size: 2.5rem; }
  .imageStack { grid-template-columns: 1fr 1fr; }
  .eventImage { height: 120px; }
  .eventBlock { padding: 30px 20px; }
}

.animateIn { animation: fadeIn 1.2s ease-out forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
</style>