<template>
  <article class="article-card" :data-category="article.category">
    <div class="article-image">
      <img :src="article.image" :alt="article.title" class="article-img">
    </div>
    <div class="article-content">
      <div class="article-header">
        <div class="article-category">{{ article.categoryName }}</div>
        <div class="article-date">
          <i class="far fa-calendar-alt"></i> {{ article.date }}
        </div>
      </div>
      <h2 class="article-title">
        <a href="#">{{ article.title }}</a>
      </h2>
      <p class="article-excerpt">{{ article.excerpt }}</p>
      <div class="article-meta">
        <div class="article-tags">
          <a 
            v-for="tag in article.tags" 
            :key="tag"
            href="#" 
            class="article-tag"
            @click="handleTagClick(tag)"
          >
            {{ tag }}
          </a>
        </div>
        <div class="article-stats">
          <span class="article-stat">
            <i class="far fa-eye"></i> {{ article.stats.views }}
          </span>
          <span class="article-stat">
            <i class="far fa-comment"></i> {{ article.stats.comments }}
          </span>
          <span class="article-stat">
            <i class="far fa-heart"></i> {{ article.stats.likes }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const handleTagClick = (tag) => {
  // 触发标签点击事件，通知父组件打开模态窗口
  window.dispatchEvent(new CustomEvent('tagClick', { detail: { tag } }))
}
</script>

<style scoped>
/* ArticleCard组件特定样式 */
</style>