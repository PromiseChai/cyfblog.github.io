<template>
  <div class="articles-container">
    <ArticleCard 
      v-for="article in articles" 
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script setup>
import ArticleCard from './ArticleCard.vue'

const props = defineProps({
  articles: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
/* ArticlesContainer组件特定样式 */
</style>