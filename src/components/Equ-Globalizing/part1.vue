<template>
  <section class="outreachEventsSection">
    <div class="headerContent animateIn">
      <h1 class="mainTitle">Education for minorities</h1>
      <div class="accentLine"></div>
    </div>

    <div class="eventsContainer">
      
      <article class="eventBlock animateIn">
        <div class="eventLayout">
          <div class="textContent">
            <div class="titleGroup">
              <span class="serialNumber">01</span>
              <h3 class="eventTitle">Activities for children with special educational needs</h3>
            </div>
            <p>
              When designing our educational project for children with special educational needs, we first reviewed detailed statements from the UN and UNICEF on equality, inclusion, and inclusive education. These documents deepened our understanding that education projects rooted in equality and inclusion are essential to ensuring that marginalized groups have the same rights as everyone else.
            </p>
            
            <div class="DocumentContainer">
              <a :href="Document1" target="_blank" class="textLink">Document 1</a>
              <a :href="Document2" target="_blank" class="textLink">Document 2</a>
            </div>

            <h4 class="subLabel">Description</h4>
            <p>
              For children with special educational needs, our team organized a two-day educational program at Yuelu No. 1 Primary School in Changsha. The program presented the fundamentals of synthetic biology in an accessible and easy-to-understand way. On the first day, the children explored key concepts by drawing their own imagined versions of engineered bacteria, and on the second day, they transformed these drawings into colorful clay models, deepening their understanding through hands-on practice. By tailoring our teaching approach to the children’s visual, auditory, and cognitive needs, every child was able to fully participate and engage creatively with synthetic biology. Beyond addressing the lack of accessible science education for marginalized groups, the program ensured that each child had the opportunity to explore, imagine, and develop an interest in biology and the natural world.  
            </p>
            <h4 class="subLabel">Implementation</h4>
            <p>
              <i>
                Part 1: Introducing Synthetic Biology
              </i>
            </p>
            <p>
              On the first day of the activity, we introduced the concept of synthetic biology to the children using clear and accessible language. Through our own illustrations of glowing engineered bacteria, along with colorful depictions of plants, animals, and microbial cells, the children were able to gain an intuitive understanding of the precision and complexity of cellular structures. However, we quickly realized that the children, due to cognitive, visual, or auditory challenges, require more personalized and specific guidance.
            </p>

            <p>
              To better engage them, our team members interacted with each child individually, using expressive language and gestures to explain the illustrations and connecting scientific concepts to familiar objects and experiences from their daily lives. Afterwards, we provided the children with paper and colored pens, encouraging them to use their imagination to draw their own versions of engineered bacteria. This activity allowed the children to share their ideas and stimulated their creativity.
            </p>

            <p>
              <i>
                Part 2: Hands-on Clay Modeling
              </i>
            </p>
            <p>
              On the second day, the activity focused on a deeper, hands-on experience. Building on the concepts introduced in Part 1 and their previous drawings, the children transformed their two-dimensional sketches into three-dimensional models using colored clay.  
            </p>

            <p>
              Throughout the session, we maintained highly interactive engagement, providing guidance while encouraging the children to experiment and explore freely. Initially, some children struggled to translate their drawings into physical forms, so we suggested combining different colored clay to represent the structures they envisioned. This practical approach allowed the children to engage with synthetic biology on a deeper level, reinforcing their understanding through tactile and artistic exploration.
            </p>

            
            <h4 class="subLabel">Reflection</h4>
            <p>
            This educational program enabled children with special educational needs to engage with concepts in synthetic biology. By combining the children’s creativity with team guidance, the activities sparked their curiosity about the world and encouraged interactive communication. Designed with inclusivity and accessibility in mind, every child was able to participate in a meaningful way. Feedback from teachers and students indicated that the program not only increased opportunities for engagement with and understanding of synthetic biology but also emphasized the importance of respect, empowerment, and support for every student.  
            </p>

            <div class="readMoreWrapper">
              <button @click="toggle1 = !toggle1" class="readMoreBtn">
                {{ toggle1 ? 'Show Less' : 'Click to read more:' }}
              </button>
              <transition name="fadeExpand">
                <div v-if="toggle1" class="expandedContent">
                  <p>
                    Through patient explanation and hands-on guidance, this activity successfully conveyed to the children the structure and potential functions of engineered bacteria and cells. Participants progressed step by step from receiving information to understanding it and finally expressing it creatively, starting with drawings and advancing to three-dimensional clay models.
                  </p>
                  <p>
                    Our team also collected feedback from the teachers who assisted us. They noted that the activity provided children with special educational needs an opportunity to meaningfully engage with scientific concepts. The teachers observed that the children were highly engaged and joyful throughout, while our team consistently maintained patience, attention, and encouragement.
                  </p>
                </div>
              </transition>
            </div>
          </div>
          
          <div class="imageSidebar">
            <div class="imageStack">
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 11.jpg" alt="fig11" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 12.jpg" alt="fig12" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 13.jpg" alt="fig13" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 14.jpg" alt="fig14" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 15.jpg" alt="fig15" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Equ-Globalizing/Figure 16.jpg" alt="fig16" class="eventImage"></div>
              <span class="figCaption">The class and articles from children</span>
            </div>


          </div>
        </div>
      </article>

      <article class="eventBlock animateIn">
        <div class="eventLayout">
          <div class="textContent">
            <div class="titleGroup">
              <span class="serialNumber">02</span>
              <h3 class="eventTitle">Handbooks and podcasts for the visually impaired</h3>
            </div>

            <h4 class="subLabel">Description & Implementation</h4>
            <router-link class="subLabel" to="/Eco-Awakening/page1">Click here to read more about our handbooks in section Eco-Awakening</router-link>
            <p>
              In the Eco-Awakening section, we introduced the Synbio and Ocean Plastic Pollution Series Handbooks. To ensure accessibility across different ages, languages, and regions, we further developed bilingual podcasts in Chinese and English based on the handbooks, along with a Braille edition tailored for individuals with visual impairments. Through these efforts, we aim to bridge gaps in science education and advance the cause of inclusive learning.  
            </p>
            <p>
              Although the reach of our materials is currently limited, these efforts represent a deliberate and carefully implemented step toward inclusive education. Our goal is to provide new resources and information that enable more people to participate in synthetic biology and environmental protection. Through these initiatives, we aim to foster equitable participation in this emerging scientific field, inspire public curiosity about scientific concepts, and promote the development of inclusive and accessible educational activities.
            </p>

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
}
.eventsContainer { max-width: 1550px; margin: 0 auto; }

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
  align-items: flex-start;
}

/* 调整文字与图片的比例：文字占 2 份，图片占 0.8 份 */
.textContent { flex: 2; }
.imageSidebar { 
  flex: 0.8; 
  max-width: 450px; /* 限制图片栏的总宽度 */
  position: sticky;
  top: 20px; /* 如果内容很长，图片可以粘滞跟随 */
}

/* 瀑布流/网格展示 */
.imageStack {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 强制两列平铺 */
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
  height: 100px;  
  display: block;
  border-radius: 4px;
  object-fit: cover;
}

.figCaption {
  grid-column: span 2; /* 文字横跨两列 */
  margin-top: 10px;
  font-size: 0.85rem;
  color: #2f81f7;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  opacity: 0.8;
}

.DocumentContainer {
  display: flex;
  flex-direction: column;
}

/* 文本样式 */
.headerContent { text-align: center; margin-bottom: 80px; }
.mainTitle { font-size: 3.5rem; font-weight: 200; color: #fff; margin: 0; letter-spacing: 2px; }
.accentLine { width: 100px; height: 4px; background: #2f81f7; margin: 30px auto; }
.titleGroup { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
.serialNumber { font-size: 1.8rem; font-weight: 800; color: #2f81f7; font-family: serif; }
.eventTitle { font-size: 2.2rem; color: #fff; font-weight: 400; }
.subLabel { color: #2f81f7; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; margin: 30px 0 15px; display: block; font-weight: 600; }
p { font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px; text-align: justify; color: #b1bac4; }

.reflectionText, .reflectionBox {
  padding: 25px;
  background: rgba(47, 129, 247, 0.05);
  border-left: 4px solid #2f81f7;
  font-style: italic;
  margin-top: 15px;
  border-radius: 0 8px 8px 0;
}

.readMoreWrapper { margin-top: 40px; }
.readMoreBtn {
  background: transparent; border: 1px solid #2f81f7; color: #2f81f7;
  padding: 10px 20px; border-radius: 4px; cursor: pointer;
  font-weight: 600; transition: 0.3s;
}
.readMoreBtn:hover { background: #2f81f7; color: #fff; }

.expandedContent { 
  margin-top: 20px; padding: 20px; 
  background: rgba(255,255,255,0.03); 
  border-radius: 8px; 
  border: 1px dashed rgba(47, 129, 247, 0.3);
}

.textLink {
  color: #2f81f7;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 10px;
}
.textLink:hover { text-decoration: underline; color: #fff; }

@media (max-width: 1200px) {
  .eventLayout { flex-direction: column; }
  .imageSidebar { width: 100%; max-width: none; }
  .imageStack { grid-template-columns: 1fr 1fr 1fr; } /* 平板上展示三列 */
}

@media (max-width: 768px) {
  .mainTitle { font-size: 2.5rem; }
  .imageStack { grid-template-columns: 1fr 1fr; }
}

.animateIn { animation: fadeIn 1.2s ease-out forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
</style>