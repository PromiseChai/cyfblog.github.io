<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <ul class="nav-links">
          <li><a href="#" class="nav-link active">首页</a></li>
          <li class="nav-dropdown">
            <a href="#" class="nav-link dropdown-toggle">前端知识 <i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">HTML/CSS</a></li>
              <li><a href="#" class="dropdown-item">JavaScript</a></li>
              <li><a href="#" class="dropdown-item">前端框架</a></li>
              <li><a href="#" class="dropdown-item">响应式设计</a></li>
            </ul>
          </li>
          <li class="nav-dropdown">
            <a href="#" class="nav-link dropdown-toggle">后端知识 <i class="fas fa-chevron-down"></i></a>
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Node.js</a></li>
              <li><a href="#" class="dropdown-item">数据库</a></li>
              <li><a href="#" class="dropdown-item">API开发</a></li>
              <li><a href="#" class="dropdown-item">服务器配置</a></li>
            </ul>
          </li>
          <li><a href="#" class="nav-link">实战项目</a></li>
          <li><a href="#" class="nav-link">学习资源</a></li>
          <li><a href="#" class="nav-link">关于我</a></li>
        </ul>
        
        <div class="nav-actions">
          <div class="search-container">
            <input type="text" class="search-input" placeholder="搜索文章...">
            <button class="search-button">
              <i class="fas fa-search"></i>
            </button>
          </div>
          
          <button class="theme-toggle" aria-label="切换主题" @click="toggleTheme">
            <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
  document.body.parentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDarkMode.value = savedTheme === 'dark'
  document.body.parentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light')
})
</script>

<style scoped>
/* Navbar组件特定样式 */
</style>