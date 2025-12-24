<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="main-title animate-in-1">
        Guidance Idea
      </h1>
      <div class="divider"></div>
      
      <h2 class="principles-list animate-in-2">
        GEO principles—Global, Equality, and Open Resources.
      </h2>

      <p class="mission-statement animate-in-3">
        In 2024, our team established the Biosyn Bridge Education Initiative, guided by these principles. Its founding mission was to bridge educational gaps worldwide. This year, we have enriched its substance and broadened its scope, endowing the Initiative with new relevance and timely significance.
      </p>

      <p class="ecosystem-description animate-in-4">
        Nowadays, it has grown beyond a single program and matured into a dynamic educational ecosystem that integrates diverse values and innovative practices.
        Within this ecosystem, our team has established a virtuous cycle consisting of three interconnected phases: <strong>Eco-Awakening, Edu-Empowering, and Equ-Globalizing</strong>.
      </p>

     
    </div>

    <div class="card-container">
      <cyberCard v-for="card in cardsData" :key="card.id" class="card-item">
        <template #card-image>
          <img :src="card.image" alt="card.title" class="card-image">
        </template> 

        <template #prompt>
          <p class="prompt">{{ card.prompt }}</p>
        </template>

        <template #subtitle>
          <span class="subtitle">{{ card.subtitles }}</span>
        </template>
        
      </cyberCard>
    </div>

     <router-link to="BiosynBridgeCycle" class="cta-button">discover more</router-link>

    <div class="hero-image-placeholder">
      
    </div>
  </section>
</template>

<script setup>
import cyberCard from '../cyberCard.vue';
import figure7 from '@/assets/overview/Figure 7.jpg';
import figure8 from '@/assets/overview/Figure 8 .png';
import PlusCycle from '@/assets/overview/PlusCycle.png';

const cardsData = [
  {
    id : 1,
    image : figure7,
    prompt : 'Figure 7',
    title : 'Biosyn bridge',
    subtitles : 'Biosyn Bridge',
  },
  {
    id : 2,
    image : figure8,
    prompt : 'Figure 8',
    title : 'GEO',
    subtitles : 'GEO Principles',
  },
  {
    id : 3,
    image : PlusCycle,
    prompt : 'Plus Cycle Photo',
    title : 'Three Phases',
    subtitles : 'three phases',
  }
]
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes subtleShimmer {
    0% {
        box-shadow: 0 0 50px rgba(47, 129, 247, 0.4);
    }
    50% {
        box-shadow: 0 0 70px rgba(47, 129, 247, 0.6), 0 0 80px rgba(76, 150, 255, 0.3);
    }
    100% {
        box-shadow: 0 0 50px rgba(47, 129, 247, 0.4);
    }
}

@keyframes neonGlow {
    0%, 100% {
        text-shadow: 0 0 2px #fff, 0 0 4px #fff, 0 0 8px #2f81f7, 0 0 16px #2f81f7, 0 0 20px #2f81f7;
    }
    50% {
        text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 4px #2f81f7, 0 0 10px #2f81f7, 0 0 15px #2f81f7;
    }
}

.divider {
  width: 150px;
  height: 4px;
  background: #2f81f7;
  margin: 20px auto 0;
  box-shadow: 0 0 15px #2f81f7;
}

.hero-section {
    position: relative;
    min-height: 95vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    padding: 100px 40px;
    overflow: hidden;
    animation: subtleShimmer 8s ease-in-out infinite; 
}


.hero-content {
    z-index: 10;
    max-width: 1000px;
    position: relative;

    transform-style: preserve-3d; 
}

.animate-in-1 {
    animation: fadeIn 1s ease-out 0.5s forwards;
    opacity: 0;
}
.animate-in-2 {
    animation: fadeIn 1s ease-out 0.8s forwards;
    opacity: 0;
}
.animate-in-3 {
    animation: fadeIn 1s ease-out 1.1s forwards;
    opacity: 0;
}
.animate-in-4 {
    animation: fadeIn 1s ease-out 1.4s forwards;
    opacity: 0;
}



.main-title {
    font-size: 5rem; 
    font-weight: 200;
    margin-bottom: 0.5rem;
    color: #c9d1d9;
    letter-spacing: 5px;
}


.principles-list {
    font-size: 2.2rem;
    font-weight: 700; 
    margin-bottom: 4rem;
    color: #fff; 
    animation: neonGlow 4s ease-in-out infinite alternate; 
}


.mission-statement,
.ecosystem-description {
    font-size: 1.15rem; 
    margin-bottom: 1.8rem;
    line-height: 1.7;
    color: #c9d1d9;
    padding: 0 40px;
}


.cta-button {
    display: inline-block;
    padding: 18px 40px;
    margin-top: 30px;
    background-color: #2f81f7;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    letter-spacing: 1.5px;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); 
    box-shadow: 0 3px 10px rgba(47, 129, 247, 0.5);
    border: 1px solid #2f81f7;
}

.cta-button:hover {
    background-color: #4c96ff;
    transform: translateY(-4px) scale(1.02); 
    box-shadow: 0 8px 20px rgba(47, 129, 247, 0.8);
    border-color: #fff;
}


.hero-image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1; 
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #fff;
    pointer-events: none; 
    background: radial-gradient(circle, rgba(47, 129, 247, 0.05) 0%, rgba(13, 17, 23, 0) 60%);
}
.card-container img.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.card-item :deep(.prompt) {
    font-size: 25px ;
    font-weight: 800;
    text-transform: uppercase;
    margin-top: 20px;
}

.card-container {
    display: flex;
    gap: 40px;
    justify-content: center;
    margin-top: 50px;
    z-index: 10;
}
.subtitle {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
    font-size: 32px;
    letter-spacing: 2px;
    transform: translateY(30px);
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
}
</style>