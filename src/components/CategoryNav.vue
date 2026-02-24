<template>
  <div class="category-nav">
    <button 
      v-for="category in categories" 
      :key="category.value"
      class="category-btn"
      :class="{ active: activeCategory === category.value }"
      :data-category="category.value"
      @click="handleCategoryClick(category.value)"
    >
      {{ category.label }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  activeCategory: {
    type: String,
    default: 'all'
  }
})

defineEmits(['categoryChange'])

const categories = [
  { value: 'all', label: '全部' },
  { value: 'frontend', label: '前端知识' },
  { value: 'backend', label: '后端知识' },
  { value: 'project', label: '实战项目' },
  { value: 'resource', label: '学习资源' }
]

const handleCategoryClick = (category) => {
  emit('categoryChange', category)
}
</script>

<style scoped>
/* CategoryNav组件特定样式 */
</style>