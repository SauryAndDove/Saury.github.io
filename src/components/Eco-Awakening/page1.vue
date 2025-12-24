<template>
  <section class="scienceOutreachSection">
    <div class="headerContent animateIn">
      <h1 class="mainTitle">Introductory Science Outreach Materials</h1>
      <div class="accentLine"></div>
    </div>

    <div class="contentContainer">
      
      <article class="materialBlock animateIn">
        <div class="titleGroup">
          <span class="serialNumber">01</span>
          <h3 class="sectionTitle">Synbio and Ocean Plastic Pollution Series Handbooks</h3>
        </div>
        
        <div class="textWrapper">
          <h4 class="subLabel">Description & Implementation</h4>
          <p>In order to inform the public about marine plastic pollution and the useful applications of synthetic biology, our team produced a number of handbooks and outreach materials. To demonstrate how synthetic biology can offer practical solutions, the materials provide information on ocean pollution, describe the durability of polyester plastics, and provide an overview of our project's experimental design.</p>
          
          <p>Our team distributed pamphlets and outreach materials at multiple educational events to introduce our synthetic biology project and raise public awareness of marine plastic pollution. For the children with limited reading ability, we worked closely with their parents and teachers to explain the key points of the handbooks, outlining the environmental issues and the solutions proposed by our team.</p>
          
          <div class="inclusiveHighlight">
            <p>Concurrently, we designed the Braille version of handbooks and the podcasts to make sure that the minorities have equal access to the scientific knowledge.</p>
            <a :href="Document1" target="_blank" class="textLink">Document 1(1)</a>
            <a :href="Document2" target="_blank" class="textLink">Document 1(2)</a>
            <a :href="Document3" target="_blank" class="textLink">Document 1(3)</a>
            <a :href="Document4" target="_blank" class="textLink">Document 1(4)</a>
          </div>
          
        </div>
      </article>

      <article class="materialBlock animateIn">
        <div class="titleGroup">
          <span class="serialNumber">02</span>
          <h3 class="sectionTitle">Activity Book</h3>
        </div>
        
        <div class="textWrapper">
          <h4 class="subLabel">Description & Implementation</h4>
          <p>To better raise children’s awareness of ocean conservation, our team created an activity book titled “Ocean Wonders: Protect and Explore.” This interactive book is designed for children aged 6-12, aiming to introduce them to marine biology and ocean protection through engaging activities and clear, easy-to-follow explanations.</p>
          
          <p>In addition to small experiments, children can create DIY models such as simple ocean ecosystems and craft recycled-material artworks that encourage critical thinking. Each chapter helps children connect scientific knowledge to actual issues.</p>
          
          <div class="footerLinks">
            <a :href="Document6" target="_blank" class="textLink">Document 6</a>
          </div>
        </div>
      </article>

      <article class="materialBlock animateIn">
        <div class="titleGroup">
          <span class="serialNumber">03</span>
          <h3 class="sectionTitle">Comic Book</h3>
        </div>
        
        <div class="textWrapper">
          <h4 class="subLabel">Description & Implementation</h4>
          <blockquote class="storyQuote">
            “I am teaching. Storytelling is teaching,” said Frank McCourt, who is a renowned Irish-American writer and educator. This quote invites us to reflect on the crucial role of storytelling in education. Stories make learning engaging and dynamic, allowing audiences to absorb the ideas and knowledge we aim to convey as they follow the narrative’s progress.
          </blockquote>
          
          <p>Inspired by this concept, our team created a comic book with the Comic artist Ms. Katherine Milena Ancheta Vásquez. We collaborated with Katherine to discuss our design concepts and intentions, co-created the initial drafts, and finally entrusted her with refining the details and adding color.</p>
          
          <p>In the comic book, we turned the highly efficient plastic-degrading enzyme into a superhero named Polygone. She possesses the power to break down and eliminate large amounts of plastic. However, Polygone soon realizes that solving the global plastic pollution crisis cannot be achieved by her efforts alone. She calls on the public to take action and forms an alliance with scientists, environmentalists, and local communities to advocate for stricter plastic production and recycling policies.</p>
          
          <p>Through this visually engaging comic book, we hope to inspire more people worldwide to take collective action and contribute to solving the problem of ocean plastic pollution. At the same time, we aim to encourage children who read the comic to recognize the importance of environmental protection from the youth and actively participate in meaningful actions.</p>
          
          <div class="footerLinks">
             <a :href="Document4" target="_blank" class="textLink">Document 7</a>
          </div>
        </div>
      </article>

      <article class="materialBlock animateIn">
  <div class="titleGroup">
    <span class="serialNumber">04</span>
    <h3 class="sectionTitle">Snakes and Ladders game</h3>
  </div>
  
  <div class="textWrapper imageContentLayout">
    <div class="textContent">
      <h4 class="subLabel">Description & Implementation</h4>
      <p>Our team expects to make education more relatable and integrated into daily life, subtly influencing children’s attitudes and behaviors. To achieve this, we made a Snakes and Ladders game, which is themed on “Save the ocean,” which features various ocean protection-related tasks, and players roll dice to move their pieces forward.</p>
      
      <p>As they progress across the board, they will encounter different scenes related to marine conservation. Completing positive environmental actions allows them to move ahead, while harmful actions send them backward. This game is not limited to children, but it is suitable for people of all ages, making ocean education involving and touchable for everyone.</p>
      
      <div class="footerLinks">
        <a :href="Document4" target="_blank" class="textLink">Document 8 (PDF) →</a>
      </div>
    </div>

    <div class="imageContainer">
      <img src="@/assets/Eco-Awakening/plus6.png" alt="Snakes and Ladders Game" class="outreachImage">
      <div class="imageCaption">Group 14-“plus6”- Communicating with the Comic artist</div>
    </div>
  </div>
</article>
    </div>

    <PageNavigation />
  </section>
</template>

<script setup>
import PageNavigation from '../PageNavigation.vue';
import Document1 from '../../assets/Eco-Awakening/Document 1(1).pdf';
import Document2 from '../../assets/Eco-Awakening/Document 1(2).pdf';
import Document3 from '../../assets/Eco-Awakening/Document 1(3).pdf';
import Document4 from '../../assets/Eco-Awakening/Document 1(4).pdf';
import Document6 from '../../assets/Eco-Awakening/Document 6.pdf';
</script>

<style scoped>
.scienceOutreachSection {
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  padding: 100px 40px 0;
  color: #c9d1d9;
}

.headerContent { text-align: center; margin-bottom: 80px; }
.mainTitle { font-size: 5rem; font-weight: 200; color: #fff; margin: 0; }
.subTitle { font-size: 2.2rem; font-weight: 700; color: #2f81f7; margin-top: 10px; }
.accentLine { width: 100px; height: 4px; background: #2f81f7; margin: 30px auto; }

.contentContainer { max-width: 1100px; margin: 0 auto; }

.materialBlock {
  background: rgba(255, 255, 255, 0.02);
  border-left: 1px solid rgba(47, 129, 247, 0.3);
  padding: 60px;
  margin-bottom: 80px;
  transition: background 0.3s ease;
}

.materialBlock:hover {
  background: rgba(255, 255, 255, 0.04);
}

.titleGroup { display: flex; align-items: center; gap: 20px; margin-bottom: 40px; }
.serialNumber { font-size: 1.5rem; font-weight: 800; color: #2f81f7; }
.sectionTitle { font-size: 2rem; color: #fff; font-weight: 300; letter-spacing: 1px; }

.subLabel { color: #2f81f7; text-transform: uppercase; letter-spacing: 2px; font-size: 0.85rem; margin-bottom: 25px; display: block; }

.textWrapper { max-width: 900px; }

p { font-size: 1.15rem; line-height: 1.8; margin-bottom: 25px; text-align: justify; }

.inclusiveHighlight {
  background: rgba(47, 129, 247, 0.08);
  padding: 30px;
  border-radius: 4px;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
}

.textLink {
  color: #2f81f7;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 10px;
}
.textLink:hover { text-decoration: underline; color: #fff; }

.docTag, .docTagLine { font-size: 0.85rem; color: #666; margin-top: 30px; font-family: 'Courier New', Courier, monospace; }

.storyQuote {
  font-size: 1.25rem;
  line-height: 1.6;
  font-style: italic;
  color: #2f81f7;
  border-left: 2px solid rgba(47, 129, 247, 0.5);
  padding: 10px 0 10px 30px;
  margin: 40px 0;
  background: rgba(255, 255, 255, 0.01);
}

.footerLinks { margin-top: 50px; padding-top: 30px; border-top: 1px solid rgba(255, 255, 255, 0.05); }

/* Animation */
.animateIn { animation: fadeIn 1s ease-out forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 768px) {
  .mainTitle { font-size: 3rem; }
  .materialBlock { padding: 30px; }
}

/* 新增：图文并排布局 */
.imageContentLayout {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  max-width: 1100px !important; /* 稍微放大容器以容纳图片 */
}

.textContent {
  flex: 1.5; /* 文字占较多空间 */
}

.imageContainer {
  flex: 1; /* 图片占较少空间 */
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  padding: 10px;
  border: 1px solid rgba(47, 129, 247, 0.2);
  border-radius: 4px;
}

.outreachImage {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 2px;
  transition: transform 0.5s ease;
}

.outreachImage:hover {
  transform: scale(1.05); /* 悬浮微扩效果 */
}

.imageCaption {
  margin-top: 12px;
  font-size: 0.8rem;
  color: #2f81f7;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
}

/* 适配移动端：改为上下堆叠 */
@media (max-width: 900px) {
  .imageContentLayout {
    flex-direction: column;
  }
  .imageContainer {
    width: 100%;
    margin-top: 20px;
  }
}
</style>