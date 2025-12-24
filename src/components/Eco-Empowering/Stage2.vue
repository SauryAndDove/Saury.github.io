<template>
  <section class="outreachEventsSection">
    <div class="headerContent animateIn">
      <h1 class="mainTitle">Stage II: Grasping and Exploring the Frontiers of Knowledge</h1>
      <div class="accentLine"></div>
    </div>

    <div class="eventsContainer">
      
      <article class="eventBlock animateIn">
        <div class="eventLayout">
          <div class="textContent">
            <div class="titleGroup">
              <span class="serialNumber">01</span>
              <h3 class="eventTitle">Hanzhuang Middle School</h3>
            </div>
            <h4 class="subLabel">Description</h4>
            <p>Our team delivered an online lecture titled “The Secrets of DNA and Genes” for students at Hanzhuang Middle School. Through this activity, they gained essential knowledge about DNA and genes, developed an appreciation for the mysteries of biology, and were introduced to the fundamentals of synthetic biology.</p>
            <h4 class="subLabel">Implementation:</h4>
            <p>During the session, we firstly introduced the concept of DNA and genes, using clear illustrations and simple analogies. To make the lesson more engaging, we presented several segments of genes with their base-pairing sequences and invited the students to identify any incorrect pairings. We also introduced the students to one of the key components of synthetic biology—the basic concept of gene editing. We aimed to help them fully understand the principle of complementary base pairing in genetic sequences and made them visualize how genetic sequences can vary infinitely as well as how small changes can lead to big differences in traits.</p>
            <h4 class="subLabel">Reflection</h4>
            <p>After the lecture, we invited students to complete a questionnaire. Many remarked that the activity gave them a clearer understanding of DNA and genes, while the interactive process was especially helpful in reinforcing their learning. Overall, the lecture successfully sparked curiosity, deepened interest in genetics, and encouraged them to continue exploring the field.</p>
            <div class="readMoreWrapper">
              <button @click="toggle1 = !toggle1" class="readMoreBtn">
                {{ toggle1 ? 'Show Less' : 'Click to read more:' }}
              </button>
              <transition name="fadeExpand">
                <div v-if="toggle1" class="expandedContent">
                  <p>
                    The majority of students demonstrated a certain level of comprehension of the fundamental ideas of DNA and genes, per the findings of the post-activity survey. Although a small percentage of students still struggled, the lecture effectively communicated the essential information, as about 80% of the students said they "basically understood" or "fully understood" these concepts. After the session, approximately 88% of the students said they were interested in genetics or very interested in it, indicating that the activity successfully piqued their curiosity. About 76% of students said that the practical exercise of creating DNA sequences was "helpful" or "very helpful," demonstrating that interactive practice improved their understanding of complementary base pairing concepts. Additionally, about 84% of students indicated that they were interested or very interested in learning more about genetics outside of the classroom, indicating that the lecture served as both an educational opportunity and an opportunity for students to learn on their own.
                  </p>
                  <p>
                    Overall, the results show that the online lecture was successful in increasing knowledge, stimulating interest, and inspiring more research. It also offered suggestions for future enhancements to interactive design and instructional guidelines.
                  </p>
                </div>
              </transition>
            </div>
          </div>
          
          <div class="imageSidebar">
            <div class="imageStack">
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/figure 77.png" alt="fig77" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/figure 78.png" alt="fig78" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/figure 79.png" alt="fig79" class="eventImage"></div>
              <div class="imageWrapper"><img src="@/assets/Eco-Empowering/figure 80.png" alt="fig80" class="eventImage"></div>
              <span class="figCaption">Meaningful survey data from students</span>
            </div>
          </div>
        </div>
      </article>

      <article class="eventBlock animateIn">
        <div class="eventLayout">
          <div class="textContent">
            <div class="titleGroup">
              <span class="serialNumber">02</span>
              <h3 class="eventTitle">High school education</h3>
            </div>
            <h4 class="subLabel">Description</h4>
            <p>
              In August 2025, our team conducted an online educational session for high school students at Beijing Middle School.
            </p>
            <p>
              To ensure our program was tailored to their level of understanding, we carefully reviewed the textbooks they use in class. We found that their curriculum already included an extended introduction to how does synthetic biology precisely empower healthcare, which is closely related to one of its most powerful applications.
            </p>
            <p>
              Building on this foundation, we designed content that went beyond the standard high school syllabus, introducing students to the specific researches which are related to the medical treatment using synthetic biology.
            </p>
            <p>
              At the end of the telling, some students posed several interesting questions, discussing with our members. At the same time, we saw some students who have a great passion for biology, and they have read professional books about it. Furthermore, they asked some points, which are the contents in the college. We discussed it deeply with them and sincerely hope that the students can devote themselves to this field and have the chance to lead it to a new era.
            </p>
        
          </div>
          <div class="imageSidebar">
            <div class="imageStack">
               <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 81.jpg" alt="fig81" class="eventImage" style="display: flex; justify-content: center;"></div>
              <span class="figCaption">Online participation – The record of the activity</span>
            </div>

          </div>
        </div>
      </article>

      <article class="eventBlock animateIn">
        <div class="eventLayout">
          <div class="textContent">
            <div class="titleGroup">
              <span class="serialNumber">03</span>
              <h3 class="eventTitle">The Brochure for Crushing the Myths of Synthetic Biology</h3>
            </div>
            <p>
              In order to help dispel public misconceptions about synthetic biology, our team worked with the CJUH-JLU-China team to produce the “Smashing Synthetic Biology Rumors” science brochure. As a co-creating team, we provided editorial support and wrote an independent chapter that highlighted the special features of our own project.
            </p>
        
          </div>
          <div class="imageSidebar">
            <div class="imageStack">
               <div class="imageWrapper"><img src="@/assets/Eco-Empowering/Figure 166.jpg" alt="fig166" class="eventImage" ></div>
              <span class="figCaption">The page of our team</span>
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