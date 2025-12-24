<script setup>
import NavBar from './components/NavBar.vue'
import Background from './components/background.vue'
import GlobalLoader from './components/GlobalLoader.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; // 1. 引入路由钩子

const isAppLoading = ref(true);
const router = useRouter();

// 2. 监听路由跳转
// 每当跳转开始时，显示加载动画
router.beforeEach((to, from, next) => {
  isAppLoading.value = true;
  next();
});

// 每当跳转结束时，隐藏加载动画
router.afterEach(() => {
  // 给予 500ms 左右的延迟，确保新组件渲染和视觉体验
  setTimeout(() => {
    isAppLoading.value = false;
  }, 600);
});

onMounted(() => {
  // 初始进入页面的逻辑
  window.onload = () => {
    setTimeout(() => {
      isAppLoading.value = false;
    }, 800);
  };

  // 保底逻辑
  setTimeout(() => {
    isAppLoading.value = false;
  }, 10000);
});
</script>

<template>
  <GlobalLoader :visible="isAppLoading" />

  <div v-show="!isAppLoading">
    <Background />
    <header class="app-header">
      <NavBar />
    </header>

    <main class="main-layout">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
/* 你的原有样式 */
.app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: #0d1117; 
    display: flex;
    justify-content: flex-start; 
    padding: 0;
}
</style>