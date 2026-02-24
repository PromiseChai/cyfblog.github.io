<template>
  <div class="app" :data-theme="isDarkMode ? 'dark' : 'light'">
    <!-- 头部 -->
    <Header />
    
    <!-- 导航栏 -->
    <Navbar />
    
    <!-- 主要内容区域 -->
    <main class="main-content">
      <div class="container">
        <!-- 分类导航 -->
        <CategoryNav 
          :activeCategory="activeCategory"
          @categoryChange="handleCategoryChange"
        />

        <!-- 文章列表 -->
        <ArticlesContainer 
          :articles="filteredArticles"
        />

        <!-- 分页 -->
        <Pagination />
      </div>
    </main>

    <!-- 页脚 -->
    <Footer />

    <!-- 标签模态窗口 -->
    <TagModal />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import CategoryNav from './components/CategoryNav.vue'
import ArticlesContainer from './components/ArticlesContainer.vue'
import Pagination from './components/Pagination.vue'
import Footer from './components/Footer.vue'
import TagModal from './components/TagModal.vue'

// 状态管理
const isDarkMode = ref(false)
const activeCategory = ref('all')

// 文章数据
const articles = ref([
  {
    id: 1,
    title: '深入理解CSS Grid布局',
    excerpt: 'CSS Grid是一种强大的二维布局系统，允许我们同时控制行和列，实现复杂的网格结构。本文将详细介绍Grid的核心概念和实际应用技巧。',
    category: 'frontend',
    categoryName: '前端知识',
    date: '2026-02-01',
    tags: ['CSS', 'Grid布局', '响应式设计'],
    stats: {
      views: 245,
      comments: 12,
      likes: 36
    },
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CSS%20Grid%20layout%20tutorial%2C%20modern%20web%20design%2C%20code%20snippets%2C%20clean%20minimal%20style&image_size=square'
  },
  {
    id: 2,
    title: 'Node.js异步编程最佳实践',
    excerpt: '异步编程是Node.js的核心特性，本文将介绍Promise、async/await等异步编程模式的使用技巧，以及如何避免常见的异步编程陷阱。',
    category: 'backend',
    categoryName: '后端知识',
    date: '2026-01-28',
    tags: ['Node.js', '异步编程', 'JavaScript'],
    stats: {
      views: 189,
      comments: 8,
      likes: 29
    },
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Node.js%20async%20programming%2C%20JavaScript%20code%2C%20Promise%20and%20async%2Fawait%2C%20modern%20backend%20development&image_size=square'
  },
  {
    id: 3,
    title: '从零构建个人博客系统',
    excerpt: '本文将详细介绍如何使用现代前端技术和后端框架构建一个完整的个人博客系统，包括前端界面、后端API和数据库设计。',
    category: 'project',
    categoryName: '实战项目',
    date: '2026-01-25',
    tags: ['全栈开发', '博客系统', '实战项目'],
    stats: {
      views: 320,
      comments: 15,
      likes: 48
    },
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Personal%20blog%20system%20development%2C%20full%20stack%20project%2C%20modern%20web%20application%2C%20clean%20interface&image_size=square'
  },
  {
    id: 4,
    title: 'JavaScript模块化开发详解',
    excerpt: '模块化是现代JavaScript开发的重要组成部分，本文将介绍CommonJS、ES Modules等模块化规范的使用方法和最佳实践。',
    category: 'frontend',
    categoryName: '前端知识',
    date: '2026-01-20',
    tags: ['JavaScript', '模块化', '前端开发'],
    stats: {
      views: 210,
      comments: 10,
      likes: 32
    },
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=JavaScript%20modular%20development%2C%20ES%20Modules%2C%20CommonJS%2C%20code%20organization%2C%20modern%20frontend&image_size=square'
  },
  {
    id: 5,
    title: 'MongoDB数据库性能优化技巧',
    excerpt: 'MongoDB是一种流行的NoSQL数据库，本文将分享一些实用的性能优化技巧，包括索引设计、查询优化和服务器配置等方面。',
    category: 'backend',
    categoryName: '后端知识',
    date: '2026-01-15',
    tags: ['MongoDB', '数据库', '性能优化'],
    stats: {
      views: 175,
      comments: 7,
      likes: 25
    },
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MongoDB%20database%20performance%20optimization%2C%20NoSQL%20database%2C%20index%20design%2C%20query%20optimization&image_size=square'
  },
  {
    id: 6,
    title: '2026年前端开发者必备学习资源',
    excerpt: '本文整理了2026年前端开发者必备的学习资源，包括在线教程、文档、社区和工具等，帮助你快速提升前端开发技能。',
    category: 'resource',
    categoryName: '学习资源',
    date: '2026-01-10',
    tags: ['学习资源', '前端开发', '技术趋势'],
    stats: {
      views: 280,
      comments: 12,
      likes: 42
    },
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Frontend%20developer%20learning%20resources%2C%20online%20tutorials%2C%20documentation%2C%20modern%20web%20development%20tools&image_size=square'
  }
])

// 计算过滤后的文章
const filteredArticles = computed(() => {
  if (activeCategory.value === 'all') {
    return articles.value
  }
  return articles.value.filter(article => article.category === activeCategory.value)
})

// 处理分类变化
const handleCategoryChange = (category) => {
  activeCategory.value = category
}

// 主题切换
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

// 初始化主题
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDarkMode.value = savedTheme === 'dark'
})
</script>

<style scoped>
/* 组件特定样式 */
</style>