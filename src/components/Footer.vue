<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-section-title">关于博客</h3>
          <p class="footer-section-text">
            个人技术博客，记录前端、后端等技术领域的学习与实践，分享技术心得和项目经验。
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" class="social-link" aria-label="掘金">
              <i class="fas fa-code"></i>
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-section-title">分类导航</h3>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">前端知识</a></li>
            <li><a href="#" class="footer-link">后端知识</a></li>
            <li><a href="#" class="footer-link">实战项目</a></li>
            <li><a href="#" class="footer-link">学习资源</a></li>
            <li><a href="#" class="footer-link">关于我</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-section-title">热门标签</h3>
          <div class="tag-cloud">
            <a 
              v-for="tag in hotTags" 
              :key="tag"
              href="#" 
              class="tag-item"
              @click="handleTagClick(tag)"
            >
              {{ tag }}
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-section-title">订阅更新</h3>
          <p class="footer-section-text">
            订阅我的技术周刊，获取最新技术动态和学习资源
          </p>
          <form class="subscribe-form">
            <input type="email" class="subscribe-input" placeholder="输入您的邮箱" required>
            <button type="submit" class="subscribe-button">订阅</button>
          </form>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="footer-copyright">
          &copy; 2026 个人技术博客. All rights reserved.
        </p>
        <div class="footer-bottom-links">
          <a href="#" class="footer-bottom-link">隐私政策</a>
          <a href="#" class="footer-bottom-link">使用条款</a>
          <a href="#" class="footer-bottom-link">联系我</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const hotTags = [
  'JavaScript', 'Node.js', '前端开发', 'React', 'Vue', '数据库', 'API开发', '性能优化'
]

const handleTagClick = (tag) => {
  // 触发标签点击事件，通知父组件打开模态窗口
  window.dispatchEvent(new CustomEvent('tagClick', { detail: { tag } }))
}
</script>

<style scoped>
/* Footer组件特定样式 */
</style>