<template>
  <section class="outreachEventsSection">
    <div class="headerContent animateIn">
      <h1 class="mainTitle">Stage I: Sparking Curiosity, Shaping Intuition</h1>
      <div class="accentLine"></div>
    </div>

    <div class="eventsContainer">
      
      <article class="eventBlock animateIn">
        <div class="eventLayout">
          <div class="textContent">
            <div class="titleGroup">
              <span class="serialNumber">01</span>
              <h3 class="eventTitle">Designing and Making Engineered Bacteria Models</h3>
            </div>
            <h4 class="subLabel">Description</h4>
            <p>Our team organized an on-campus educational program for children aged 6–12 at Yuelu District No. 1 Primary School in Changsha. The program, themed “Me and My Engineered Bacteria Friend,” introduced the fundamentals of synthetic biology through hands-on activities tailored to different age groups. Younger students worked in small groups to collaboratively design and draw their engineered bacteria, while older students independently created designs based on real-world scenarios. The program aimed to spark curiosity, deepen understanding of scientific concepts, and develop both teamwork and independent problem-solving skills, providing meaningful engagement with synthetic biology.</p>
            <h4 class="subLabel">Implementation:For the 6-9 age group:</h4>
            <p>We continued to use drawing and clay modeling as hands-on activities to help children visualize bacteria in a fun and imaginative way. This time, however, we introduced a collaborative element by encouraging them to form small groups of three to four. Within each group, students brainstormed together, exchanged ideas, and combined their creativity to “engineer” their very own bacterium. After completing their creations, each group presented their work on stage, with every member sharing their individual contributions and explaining the inspiration behind their designs. This interactive process not only strengthened their understanding of synthetic biology but also cultivated teamwork, communication skills, and confidence in public speaking.</p>
            <h4 class="subLabel">Implementation:For the 10-12 age group:</h4>
            <p>We provided a simple, real-world biological scenario to inspire deeper thinking about how engineered bacteria could be applied to solve problems. This scenario acted as a starting point, encouraging students to imagine how synthetic biology could impact everyday life. Each student received drawing materials and was invited to independently create their own design, translating their ideas into a combination of illustrations and short explanations. Afterward, they presented their work on stage, describing not only the functions of their “engineered bacteria” but also the reasoning behind their designs. This approach encouraged individual creativity, logical thinking, and scientific storytelling, allowing students to practice articulating complex concepts in their own words.</p>
            <h4 class="subLabel">Reflection</h4>
            <p>This activity left a strong impression on us. The children’s drawings and clay models reflected both creativity and an understanding of synthetic biology. Their questions touched on the forefront of the field and also challenged our own thinking. Through our interactions, we witnessed their deep engagement, and the activity successfully sparked their interest in synthetic biology while deepening their understanding.</p>

            <div class="readMoreWrapper">
              <button @click="toggle1 = !toggle1" class="readMoreBtn">
                {{ toggle1 ? 'Show Less' : 'Click to read more:' }}
              </button>
              <transition name="fadeExpand">
                <div v-if="toggle1" class="expandedContent">
                  <p>
                    This series of activities left us with many memorable moments. The children’s drawings and clay models were not only creative but also surprisingly detailed; some even included cell structures and “engineered” features that reflected their understanding of synthetic biology.
                  </p>
                  <p>During the session, one particularly insightful student asked whether engineered bacteria could be designed to synthesize metals. Rather than being a simple question, it touched on the frontier of synthetic biology—biomineralization. This moment reminded us that education is most impactful when it goes beyond one-way teaching.</p>
                </div>
              </transition>
            </div>
          </div>
          
          <div class="imageSidebar">
            <div class="imageStack">
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 19.jpg" alt="fig19" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 20.jpg" alt="fig20" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 21.jpg" alt="fig21" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 22.jpg" alt="fig22" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 23.jpg" alt="fig23" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 24.jpg" alt="fig24" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 25.jpg" alt="fig25" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 26.jpg" alt="fig26" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 27 .jpg" alt="fig27" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 28.jpg" alt="fig28" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 29.jpg" alt="fig29" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 30.jpg" alt="fig30" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 31.jpg" alt="fig31" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 32.jpg" alt="fig32" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 33.jpg" alt="fig33" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/plus1.jpg" alt="plus1" class="eventImage"></div>
              <span class="figCaption">Joyful class with colorful paintings and clay models</span>
            </div>
          </div>
        </div>
      </article>

      <article class="eventBlock animateIn">
        <div class="eventLayout">
          <div class="textContent">
            <div class="titleGroup">
              <span class="serialNumber">02</span>
              <h3 class="eventTitle">Exploring Synthetic Biology through Interactive Games</h3>
            </div>
            <h4 class="subLabel">Description</h4>
            <p>On World Environment Day, our team organized an on-campus outreach event at Beijing University of Chemical Technology. We designed interactive activities, including a “Fact or Fiction” card game and DIY paper-based gene module exercises, allowing students to explore synthetic biology in a fun and engaging way. The event concluded with a brief discussion on ethics in the life sciences, and we distributed the designed brochures to inspire students’ interest in biology and raise awareness about marine environmental protection.</p>
            <h4 class="subLabel">Implementation</h4>
            <p>In the first game, participants randomly choose two cards from a deck containing synthetic biology “Fact or Fiction” statements. They were asked to point out whether each statement was true or false, turning the process into a lively game. Then, our team members explained the reasoning behind each answer in detail, connecting the statements to real-world examples and ongoing research. This not only clarified common misconceptions but also shown participants how synthetic biology is already influencing fields like medicine, agriculture, and environmental protection, etc.</p>
            <p>With this foundation in place, we invited participants to engage in a hands-on genetic design activity. Using functional “gene modules,” they could freely arrange and combine elements to create a custom-designed “engineered bacterium,” which is capable of performing the function they imagined.</p>
            <h4 class="subLabel reflectionLabel">Reflection</h4>
            <p>In this educational activity, we used a fun and engaging approach to introduce students to synthetic biology while encouraging them to actively participate in marine and environmental protection. We also invited participants to complete a feedback survey. The responses demonstrated that the activity was highly successful, effectively sparking students’ interest in science and deepening their understanding of environmental conservation.</p>
          
            <div class="readMoreWrapper">
              <button @click="toggle1 = !toggle1" class="readMoreBtn">
                {{ toggle1 ? 'Show Less' : 'Click to read more:' }}
              </button>
              <transition name="fadeExpand">
                <div v-if="toggle1" class="expandedContent">
                  <p>
                    After the educational event, we also interviewed students who participated in all three activities. They expressed that the event was highly educational, providing participants with a thorough understanding of synthetic biology as a rapidly evolving, emerging, and advanced discipline and its significance for human society. For students without a background in biology, it served as an effective introduction to the field. Many students also noted that the brochures we distributed during the event reshaped their awareness of the severity of marine plastic pollution. The pollution data presented in the brochures helped them grasp the urgency and importance of taking action now to protect the oceans and the environment.
                  </p>
                  <p>
                   To evaluate the effectiveness of our educational event, we designed a questionnaire specifically for this activity and conducted a detailed data analysis.
                  </p>
                  <p>
                    Through the results of the questionnaire from 120 participants, we concluded that the event was very successful in reaching its educational objectives. After the event, about 80% of participants said they had a "good understanding" of synthetic biology or could "explain to others" what it is, demonstrating that our outreach was successful in demythologizing this new field. Nearly 88% of participants rated the card game "Fact or Fiction" as moderately or very effective at dispelling myths, demonstrating its widespread popularity. More than 90% of participants agreed or strongly agreed that the gene module design exercise improved their comprehension of genetic engineering concepts, demonstrating its particularly powerful effect. Additionally, the vast majority stated that their awareness of marine plastic pollution had increased moderately to significantly, indicating that our discussion and brochure distribution were successful.
                  </p>
                  <p>
                    The “Fact or Fiction” card game received strong approval, with nearly 88% of participants rating it as moderately or very effective at clarifying misconceptions. The gene module design activity was particularly impactful, with over 90% of participants agreeing or strongly agreeing that it deepened their understanding of genetic engineering principles. Similarly, a large majority reported a moderate to significant increase in their awareness of marine plastic pollution, confirming that our brochure distribution and discussion successfully raised environmental consciousness. Overall, the data reflect a well-balanced event that combined knowledge transfer, interactivity, and social responsibility, leaving a lasting educational impact.
                  </p>
                </div>
              </transition>
            </div>
          </div>
          <div class="imageSidebar">
            <div class="imageStack">
               <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 39.jpg" alt="fig39" class="eventImage"></div>
               <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 40.jpg" alt="fig40" class="eventImage"></div>
               <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 41 .jpg" alt="fig41" class="eventImage"></div>
               <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 42.jpg" alt="fig42" class="eventImage"></div>
               <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 43.jpg" alt="fig43" class="eventImage"></div>
               <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 44.jpg" alt="fig44" class="eventImage"></div>
              <span class="figCaption">The participation of the outreach</span>
            </div>

            <div class="imageStack">
               <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 45.png" alt="fig45" class="eventImage"></div>
               <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 46.png" alt="fig46" class="eventImage"></div>
               <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 47.png" alt="fig47" class="eventImage"></div>
               <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 48.png" alt="fig48" class="eventImage"></div>

              <span class="figCaption">The feedback data</span>
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