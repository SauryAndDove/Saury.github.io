import { createRouter, createWebHistory } from 'vue-router';
// 路径已修改为指向 components/Home 目录
import Overview from '../components/Overview/Overview.vue';
import BiosynBridgeCycle from '../components/Overview/BiosynBridgeCycle.vue';
import EducationWorkFlow from '../components/Overview/EducationWorkFlow.vue';
import Implementation from '../components/Overview/Implementation.vue';
import page1 from '../components/Eco-Awakening/page1.vue';
import page2 from '../components/Eco-Awakening/page2.vue';
import Stage1 from '../components/Eco-Empowering/Stage1.vue';
import Stage2 from '../components/Eco-Empowering/Stage2.vue';
import Stage3 from '../components/Eco-Empowering/Stage3.vue';
import part1 from '../components/Equ-Globalizing/part1.vue';
import part2 from '../components/Equ-Globalizing/part2.vue';
import part3 from '../components/Equ-Globalizing/part3.vue';



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview,
    },
    {
      path: '/BiosynBridgeCycle',
      name: 'BiosynBridgeCycle',
      component: BiosynBridgeCycle,
    },
    {
      path: '/EducationWorkFlow',
      name: 'EducationWorkFlow',
      component: EducationWorkFlow,
    },
    {
      path: '/Implementation',
      name: 'Implementation',
      component: Implementation,
    },
    {
      path: '/Eco-Awakening/page1',
      name: 'Eco-Awakening-page1',
      component: page1,
    },
    {
      path: '/Eco-Awakening/page2',
      name: 'Eco-Awakening-page2',
      component: page2,
    },
    {
      path: '/Eco-Empowering/Stage1',
      name: 'Eco-Empowering-Stage1',
      component: Stage1,
    },
    {
      path: '/Eco-Empowering/Stage2',
      name: 'Eco-Empowering-Stage2',
      component: Stage2,
    },
    {
      path: '/Eco-Empowering/Stage3',
      name: 'Eco-Empowering-Stage3',
      component: Stage3,
    },
    {
      path: '/Equ-Globalizing/part1',
      name: 'Equ-Globalizing-part1',
      component: part1,
    },
    {
      path: '/Equ-Globalizing/part2',
      name: 'Equ-Globalizing-part2',
      component: part2,
    },
    {
      path: '/Equ-Globalizing/part3',
      name: 'Equ-Globalizing-part3',
      component: part3,
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        // 顶部固定导航栏的高度补偿
        top: 80,
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;