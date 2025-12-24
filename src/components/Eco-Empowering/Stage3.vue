<template>
  <section class="outreachEventsSection">
    <div class="headerContent animateIn">
      <h1 class="mainTitle">Stage III: Connecting Lab and Industry</h1>
      <div class="accentLine"></div>
    </div>

    <div class="eventsContainer">
      
      <article class="eventBlock animateIn">
        <div class="eventLayout">
          <div class="textContent">
            <div class="titleGroup">
              <span class="serialNumber">01</span>
              <h3 class="eventTitle">Lab-Industry Open Days</h3>
            </div>
            <h4 class="subLabel">Description</h4>
            <p>
              This year, our team organized a Lab-Industry activity series. The program was designed to guide participants through a comprehensive biological learning journey. By integrating theory, hands-on practice, and industrial exposure, it helped students build a clear and approachable understanding of biology, experience the fermentation and purification processes that transform laboratory discoveries into real products, and develop curiosity and problem-solving skills for applying biotechnology to real-world challenges. 
            </p>
            <h4 class="subLabel">Implementation</h4>
            <p>
              <i>
                Phase 1: The First Step into Biology—Entering the Lab
              </i>
            </p>
            <p>
              During the series' first session, our team led participants into the lab to get a firsthand look at the well-known fluorescent bacteria experiment. With the help of our teammates and instructors, participants inserted plasmids containing fluorescent genes into E. coli and watched as the bacteria on the culture plates magically turned green when exposed to ultraviolet light. Participants in this experiment gained a practical understanding of synthetic biology in action by learning important concepts like gene expression and plasmid transformation. As our team supported them during the session, helping with operations and offering clarifications, students were able to fully immerse themselves in the process and not only learn the fundamental experimental procedures but also feel a sense of accomplishment from producing glowing bacteria themselves.
            </p>


            <p>
              <i>
                Phase 2: Fermentation Class—From Cultivation to Purification
              </i>
            </p>
            <p>
              In the second stage, we led participants through a full fermentation experiment in the school lab. While team members served as teaching assistants to assist participants in carrying out fermentation procedures and learning how to perform ultrafiltration and product separation, our instructor gave the main lecture. In order to accomplish preliminary purification, participants used lab equipment and kept a close eye on changes in the fermentation broth. In addition to imparting useful laboratory skills, this immersive, hands-on experience helped them better understand the crucial biomanufacturing processes of "scale-up" and "purification."
            </p>

            <p>
              <i>
                Phase 3: A Day in Biomanufacturing—Touring the Factory
              </i>
            </p>
            <p>
              We arranged a field trip to a fermentation factory for the last stage, which allowed the students to experience an actual industrial environment outside of the classroom. Through tours of fermentation tanks, pipelines, and online monitoring systems, participants learned how exact control of variables like temperature, pH, and dissolved oxygen is necessary to guarantee the best possible microbial productivity. Our team helped students make the connection between the experimental principles they learned in the first two sessions and actual production processes by answering their questions and offering explanations on-site. The journey from "scientific discovery" to "industrial application" was completed in this last session, giving participants a better understanding of how lab research is turned into tangible goods.
            </p>

            
            <h4 class="subLabel">Reflection</h4>
            <p>
              The Lab-Industry Open Days guided participants through the complete process from laboratory research to industrial production. Following the series, we conducted a feedback survey, and most students reported active participation as well as a significant improvement in their understanding of biomanufacturing. These results show that the program not only effectively connected theory with practical application but also sparked sustained interest in biotechnology, encouraging students to further explore this field.
            </p>

            <div class="readMoreWrapper">
              <button @click="toggle1 = !toggle1" class="readMoreBtn">
                {{ toggle1 ? 'Show Less' : 'Click to read more:' }}
              </button>
              <transition name="fadeExpand">
                <div v-if="toggle1" class="expandedContent">
                  <p>
                    According to the survey results, we saw that participants were able to gain a comprehensive understanding of the entire process, from laboratory research to actual biomanufacturing, thanks to the Lab-Industry Open Days series. More than 85% of participants showed consistent commitment to learning and high levels of engagement by attending at least two sessions. The event effectively connected theoretical knowledge with real-world application, as evidenced by the nearly 88% of participants who reported a moderate to significant improvement in their comprehension of the shift from laboratory research to industrial production.
                  </p>
                  <p>
                    Notably, 38.3% of participants rated the second session as the most rewarding. This is probably because it made the biomanufacturing process more tangible and interesting by combining practical experience with observable results. Additionally, more than 84% of participants reported having a greater interest in biotechnology, indicating that the series not only imparted knowledge but also encouraged ongoing curiosity and drove them to learn more about the subject.
                  </p>
                </div>
              </transition>
            </div>
          </div>
          
          <div class="imageSidebar">
            <div class="imageStack">
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 61.jpg" alt="fig61" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 62.jpg" alt="fig62" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 63.jpg" alt="fig63" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 64.jpg" alt="fig64" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 65.jpg" alt="fig65" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 66.jpg" alt="fig66" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 67.jpg" alt="fig67" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 68.jpg" alt="fig68" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 69.jpg" alt="fig69" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 70.jpg" alt="fig70" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 71.jpg" alt="fig71" class="eventImage"></div>
              <span class="figCaption">Records of phase 1-3</span>
            </div>

            <div class="imageStack" style="margin-top: 50px;">
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 72.png" alt="fig72" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 73.png" alt="fig73" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 74.png" alt="fig74" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 75.png" alt="fig75" class="eventImage"></div>
              <span class="figCaption">The valuable feedback from students</span>
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