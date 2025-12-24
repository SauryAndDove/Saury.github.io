<template>
  <section class="pageNavigationContainer">
    <div class="navWrapper">
      <router-link 
        v-if="prevPage" 
        :to="prevPage.path" 
        class="navLink prevLink"
      >
        <div class="arrowIconContainer">
          <span class="navArrowIcon">←</span>
        </div>
        <div class="navLabelGroup">
          <span class="navDirectionLabel">PREVIOUS PHASE</span>
          <span class="navPageNameText">{{ prevPage.display }}</span>
        </div>
      </router-link>
      <div v-else class="navPlaceholder"></div>

      <div class="navCentralDivider">
        <div class="dividerCoreDot"></div>
      </div>

      <router-link 
        v-if="nextPage" 
        :to="nextPage.path" 
        class="navLink nextLink"
      >
        <div class="navLabelGroup">
          <span class="navDirectionLabel">NEXT PHASE</span>
          <span class="navPageNameText">{{ nextPage.display }}</span>
        </div>
        <div class="arrowIconContainer">
          <span class="navArrowIcon">→</span>
        </div>
      </router-link>
      <div v-else class="navPlaceholder"></div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

/**
 * 定义导航顺序与显示名称
 * 严格对应您的路由路径
 */
const menuSequence = [
  { path: '/', display: 'Overview' },
  { path: '/BiosynBridgeCycle', display: 'Biosyn Bridge Cycle' },
  { path: '/EducationWorkFlow', display: 'Work Flow' },
  { path: '/Implementation', display: 'Implementation' }
];

// 计算当前页面在序列中的索引
const currentIndex = computed(() => {
  return menuSequence.findIndex(item => item.path === route.path);
});

// 计算上一页数据
const prevPage = computed(() => {
  return currentIndex.value > 0 ? menuSequence[currentIndex.value - 1] : null;
});

// 计算下一页数据
const nextPage = computed(() => {
  return (currentIndex.value !== -1 && currentIndex.value < menuSequence.length - 1) 
    ? menuSequence[currentIndex.value + 1] 
    : null;
});
</script>

<style scoped>
/* 容器：使用您指定的背景渐变 */
.pageNavigationContainer {
  width: 100%;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  display: flex;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  padding: 120px 40px; /* 增加留白提升品牌高级感 */
  overflow: hidden;
}

/* 装饰性光效 */
.pageNavigationContainer::after {
  content: '';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(47, 129, 247, 0.4), transparent);
}

.navWrapper {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 顶部渐变边线 */
  border-top: 1px solid;
  border-image: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.1) 80%, transparent) 1;
  padding-top: 60px;
}

/* 导航链接样式 */
.navLink {
  display: flex;
  align-items: center;
  gap: 25px;
  text-decoration: none;
  flex: 1;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0.7;
}

.navLink:hover {
  opacity: 1;
}

.nextLink {
  justify-content: flex-end;
  text-align: right;
}

/* 箭头外圈装饰 */
.arrowIconContainer {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(47, 129, 247, 0.3);
  background: rgba(47, 129, 247, 0.02);
  transition: all 0.4s ease;
}

.navLink:hover .arrowIconContainer {
  border-color: #2f81f7;
  background: rgba(47, 129, 247, 0.1);
  box-shadow: 0 0 20px rgba(47, 129, 247, 0.2);
}

.navLabelGroup {
  display: flex;
  flex-direction: column;
}

.navDirectionLabel {
  font-size: 0.7rem;
  letter-spacing: 4px;
  color: #2f81f7;
  font-weight: 800;
  margin-bottom: 6px;
  text-transform: uppercase;
}

.navPageNameText {
  font-size: 1.7rem;
  font-weight: 200; /* 保持纤细风格 */
  color: #c9d1d9;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.navArrowIcon {
  font-size: 1.4rem;
  color: #2f81f7;
  transition: transform 0.4s ease;
}

/* 悬浮动效 */
.navLink:hover .navPageNameText {
  color: #ffffff;
  text-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
}

.prevLink:hover .navArrowIcon { transform: translateX(-6px); }
.nextLink:hover .navArrowIcon { transform: translateX(6px); }

/* 中心分割线 */
.navCentralDivider {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), transparent);
  margin: 0 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dividerCoreDot {
  width: 5px;
  height: 5px;
  background: #2f81f7;
  border-radius: 50%;
  box-shadow: 0 0 10px #2f81f7, 0 0 20px rgba(47, 129, 247, 0.5);
}

.navPlaceholder {
  flex: 1;
}

/* 响应式适配 */
@media (max-width: 900px) {
  .navPageNameText { font-size: 1.2rem; }
  .arrowIconContainer { display: none; } /* 移动端简化 */
  .navCentralDivider { margin: 0 25px; }
  .pageNavigationContainer { padding: 80px 20px; }
}
</style>