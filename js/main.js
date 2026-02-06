// JavaScript交互逻辑

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initThemeToggle();
    initCategoryFilter();
    initSearchFunctionality();
    initNavbarScroll();
    initArticleCards();
    initPagination();
    initSubscribeForm();
});

// 主题切换功能
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // 从localStorage加载保存的主题
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    // 绑定主题切换事件
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // 更新主题属性
        body.setAttribute('data-theme', newTheme);
        // 保存主题到localStorage
        localStorage.setItem('theme', newTheme);
        // 更新主题图标
        updateThemeIcon(newTheme);
    });

    // 更新主题图标
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}

// 分类筛选功能
function initCategoryFilter() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const articleCards = document.querySelectorAll('.article-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的active类
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前按钮的active类
            this.classList.add('active');

            const selectedCategory = this.getAttribute('data-category');

            // 筛选文章卡片
            articleCards.forEach(card => {
                if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
                    card.style.display = 'block';
                    // 添加淡入动画
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    // 添加淡出动画
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// 搜索功能
function initSearchFunctionality() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const articleCards = document.querySelectorAll('.article-card');

    // 搜索函数
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        articleCards.forEach(card => {
            const title = card.querySelector('.article-title').textContent.toLowerCase();
            const excerpt = card.querySelector('.article-excerpt').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.article-tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
            const category = card.querySelector('.article-category').textContent.toLowerCase();

            // 检查搜索词是否存在于标题、摘要、标签或分类中
            const isMatch = title.includes(searchTerm) || 
                           excerpt.includes(searchTerm) || 
                           tags.includes(searchTerm) || 
                           category.includes(searchTerm);

            if (isMatch || searchTerm === '') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // 绑定搜索按钮点击事件
    searchButton.addEventListener('click', performSearch);

    // 绑定输入框回车事件
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // 绑定输入框输入事件（实时搜索）
    searchInput.addEventListener('input', function() {
        // 使用防抖函数优化实时搜索
        debounce(performSearch, 300)();
    });
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

// 导航栏滚动效果
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '8px 0';
        } else {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            navbar.style.padding = '16px 0';
        }
    });
}

// 文章卡片交互
function initArticleCards() {
    const articleCards = document.querySelectorAll('.article-card');

    articleCards.forEach(card => {
        // 添加悬停效果
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        // 添加点击效果
        card.addEventListener('click', function(e) {
            // 阻止点击标签时的默认行为
            if (e.target.closest('.article-tag')) {
                return;
            }

            // 模拟文章点击效果
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 100);

            // 这里可以添加跳转到文章详情页的逻辑
            const articleTitle = this.querySelector('.article-title a').textContent;
            console.log('点击了文章：', articleTitle);
            // 示例：window.location.href = 'article-detail.html?id=1';
        });
    });
}

// 分页功能
function initPagination() {
    const paginationLinks = document.querySelectorAll('.pagination-link:not(.disabled)');

    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // 移除所有链接的active类
            document.querySelectorAll('.pagination-link').forEach(lnk => lnk.classList.remove('active'));
            // 添加当前链接的active类
            this.classList.add('active');

            // 模拟分页加载
            const pageNumber = this.textContent.trim();
            console.log('跳转到第', pageNumber, '页');

            // 这里可以添加实际的分页加载逻辑
            // 示例：loadPage(pageNumber);
        });
    });
}

// 订阅表单功能
function initSubscribeForm() {
    const subscribeForm = document.querySelector('.subscribe-form');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('.subscribe-input');
            const email = emailInput.value.trim();

            // 简单的邮箱验证
            if (!validateEmail(email)) {
                alert('请输入有效的邮箱地址');
                return;
            }

            // 模拟订阅成功
            console.log('订阅邮箱：', email);

            // 显示成功消息
            alert('订阅成功！感谢您的关注。');

            // 清空输入框
            emailInput.value = '';
        });
    }

    // 邮箱验证函数
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

// 平滑滚动
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 加载页面函数（示例）
function loadPage(pageNumber) {
    // 这里可以添加实际的页面加载逻辑
    // 例如：通过AJAX请求获取指定页面的文章
    console.log('加载第', pageNumber, '页的内容');

    // 模拟加载中状态
    const articlesContainer = document.querySelector('.articles-container');
    articlesContainer.innerHTML = '<div class="loading-container"><div class="loading"></div><p>加载中...</p></div>';

    // 模拟加载完成
    setTimeout(() => {
        // 恢复原始内容
        // 实际应用中，这里应该是从服务器获取的新内容
        location.reload();
    }, 1000);
}

// 响应式导航栏
function initResponsiveNavbar() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
}

// 图片懒加载
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // 回退方案
        lazyImages.forEach(image => {
            image.src = image.dataset.src;
            image.classList.remove('lazy');
        });
    }
}

// 错误处理
function handleError(error) {
    console.error('发生错误：', error);
    // 这里可以添加错误处理逻辑，例如显示错误消息给用户
}

// 性能监控
function initPerformanceMonitoring() {
    if ('performance' in window && 'measure' in window.performance) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const metrics = {
                    loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
                    domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart
                };
                console.log('页面性能指标：', metrics);
            }, 0);
        });
    }
}

// 初始化性能监控
initPerformanceMonitoring();

// 导出公共函数（如果需要）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initThemeToggle,
        initCategoryFilter,
        initSearchFunctionality,
        initNavbarScroll,
        initArticleCards,
        initPagination,
        initSubscribeForm,
        smoothScroll,
        initResponsiveNavbar,
        initLazyLoading,
        handleError,
        initPerformanceMonitoring
    };
}
