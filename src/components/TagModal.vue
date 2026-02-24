<template>
  <div 
    id="tagModal" 
    class="modal"
    :class="{ active: isModalActive }"
  >
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">{{ modalTitle }}</h2>
        <button class="modal-close" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body" v-html="modalContent"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

// 状态管理
const isModalActive = ref(false)
const modalTitle = ref('标签详情')
const modalContent = ref('')

// 标签详情数据
const tagDetails = {
  'CSS': {
    title: 'CSS',
    content: `
      <h3>CSS (Cascading Style Sheets)</h3>
      <p>CSS是一种用于描述HTML文档样式的语言，它负责网页的布局、颜色、字体等视觉效果。</p>
      <h3>核心概念</h3>
      <ul>
        <li>选择器：用于选择要样式化的HTML元素</li>
        <li>属性：要设置的样式属性</li>
        <li>值：属性的具体值</li>
        <li>盒模型：控制元素的大小和间距</li>
        <li>浮动：控制元素的布局方式</li>
        <li>定位：控制元素的精确位置</li>
        <li>Flexbox：一维布局系统</li>
        <li>Grid：二维布局系统</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.box {
    width: 200px;
    height: 200px;
    background-color: #4a90e2;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
}

.box:hover {
    transform: translateY(-5px);
}</code></pre>
    `
  },
  'Grid布局': {
    title: 'Grid布局',
    content: `
      <h3>CSS Grid布局</h3>
      <p>CSS Grid是一种强大的二维布局系统，允许我们同时控制行和列，实现复杂的网格结构。</p>
      <h3>核心概念</h3>
      <ul>
        <li>网格容器：应用display: grid的父元素</li>
        <li>网格项：网格容器的直接子元素</li>
        <li>网格线：分隔网格行和列的线</li>
        <li>网格轨道：两条相邻网格线之间的空间</li>
        <li>网格单元格：网格中最小的单位</li>
        <li>网格区域：由一个或多个网格单元格组成的矩形区域</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
}

.grid-item {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}</code></pre>
    `
  },
  '响应式设计': {
    title: '响应式设计',
    content: `
      <h3>响应式设计</h3>
      <p>响应式设计是一种设计方法，使网站能够根据不同设备的屏幕尺寸和方向自动调整布局和内容。</p>
      <h3>核心技术</h3>
      <ul>
        <li>媒体查询：根据屏幕尺寸应用不同的CSS规则</li>
        <li>流式布局：使用百分比而非固定像素值</li>
        <li>灵活的图像：确保图像能够适应容器大小</li>
        <li>相对单位：使用rem、em、vw等相对单位</li>
        <li>断点：定义布局变化的屏幕尺寸</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>/* 基础样式 */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 媒体查询 */
@media (max-width: 992px) {
    .nav-links {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 768px) {
    .articles-container {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 576px) {
    .header-title {
        font-size: 1.75rem;
    }
}</code></pre>
    `
  },
  'Node.js': {
    title: 'Node.js',
    content: `
      <h3>Node.js</h3>
      <p>Node.js是一个基于Chrome V8引擎的JavaScript运行时，允许在服务器端运行JavaScript代码。</p>
      <h3>核心特性</h3>
      <ul>
        <li>非阻塞I/O：提高应用性能和吞吐量</li>
        <li>事件驱动：基于事件循环处理请求</li>
        <li>单线程：避免了多线程编程的复杂性</li>
        <li>丰富的模块系统：通过npm管理依赖</li>
        <li>跨平台：可在Windows、macOS和Linux上运行</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // 处理请求
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello Node.js!</h1>');
    } else if (req.url === '/api/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello from API!' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});</code></pre>
    `
  },
  '异步编程': {
    title: '异步编程',
    content: `
      <h3>异步编程</h3>
      <p>异步编程是一种编程范式，允许程序在等待某些操作完成时继续执行其他任务，而不是阻塞等待。</p>
      <h3>核心概念</h3>
      <ul>
        <li>回调函数：异步操作完成后执行的函数</li>
        <li>Promise：表示异步操作的最终完成或失败</li>
        <li>async/await：基于Promise的语法糖，使异步代码更易读</li>
        <li>事件循环：Node.js处理异步操作的机制</li>
        <li>非阻塞I/O：允许程序在I/O操作时继续执行</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// 使用回调函数
function fetchData(callback) {
    setTimeout(() => {
        callback(null, { data: 'Hello World' });
    }, 1000);
}

// 使用Promise
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: 'Hello World' });
        }, 1000);
    });
}

// 使用async/await
async function fetchDataWithAsync() {
    try {
        const result = await fetchDataWithPromise();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// 调用示例
fetchData((error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});

fetchDataWithPromise()
    .then(data => console.log(data))
    .catch(error => console.error(error));

fetchDataWithAsync();</code></pre>
    `
  },
  'JavaScript': {
    title: 'JavaScript',
    content: `
      <h3>JavaScript</h3>
      <p>JavaScript是一种高级、解释型的编程语言，主要用于网页交互，但也可用于服务器端编程（如Node.js）。</p>
      <h3>核心概念</h3>
      <ul>
        <li>变量和数据类型</li>
        <li>函数和作用域</li>
        <li>对象和数组</li>
        <li>条件语句和循环</li>
        <li>异步编程</li>
        <li>DOM操作</li>
        <li>ES6+特性</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// 变量声明
let name = 'John';
const age = 30;
var city = 'New York';

// 函数定义
function greet(person) {
    return "Hello, " + person + "!";
}

// 箭头函数
const greetArrow = (person) => "Hello, " + person + "!";

// 对象
const user = {
    name: 'John',
    age: 30,
    greet: function() {
        return "Hello, my name is " + this.name + "!";
    }
};

// 数组
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

// 异步编程
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// 调用函数
console.log(greet('Alice'));
console.log(user.greet());
console.log(doubled);
fetchData();</code></pre>
    `
  },
  '全栈开发': {
    title: '全栈开发',
    content: `
      <h3>全栈开发</h3>
      <p>全栈开发是指能够同时处理前端和后端开发的开发人员，他们熟悉从数据库到用户界面的整个应用栈。</p>
      <h3>核心技能</h3>
      <ul>
        <li>前端技术：HTML, CSS, JavaScript, 前端框架</li>
        <li>后端技术：服务器端语言, 数据库, API开发</li>
        <li>DevOps：版本控制, 部署, 服务器配置</li>
        <li>系统设计：架构设计, 性能优化</li>
        <li>问题解决：调试, 故障排除</li>
      </ul>
      <h3>示例技术栈</h3>
      <ul>
        <li>MERN栈：MongoDB, Express, React, Node.js</li>
        <li>MEAN栈：MongoDB, Express, Angular, Node.js</li>
        <li>LAMP栈：Linux, Apache, MySQL, PHP</li>
        <li>JAMstack：JavaScript, APIs, Markup</li>
      </ul>
    `
  },
  '博客系统': {
    title: '博客系统',
    content: `
      <h3>博客系统</h3>
      <p>博客系统是一种允许用户发布、管理和分享内容的 web 应用程序，通常用于个人或企业的内容营销。</p>
      <h3>核心功能</h3>
      <ul>
        <li>内容管理：发布、编辑、删除文章</li>
        <li>用户管理：注册、登录、权限控制</li>
        <li>分类和标签：内容组织</li>
        <li>评论系统：用户互动</li>
        <li>搜索功能：内容检索</li>
        <li>响应式设计：多设备适配</li>
      </ul>
      <h3>技术实现</h3>
      <p>博客系统可以使用多种技术栈实现，例如：</p>
      <ul>
        <li>前端：HTML, CSS, JavaScript, 前端框架</li>
        <li>后端：Node.js, Python, PHP等</li>
        <li>数据库：MySQL, MongoDB等</li>
        <li>部署：GitHub Pages, Vercel, Netlify等</li>
      </ul>
    `
  },
  '实战项目': {
    title: '实战项目',
    content: `
      <h3>实战项目</h3>
      <p>实战项目是指通过实际开发一个完整的应用程序来学习和应用编程技能的项目，它能够帮助开发者将理论知识转化为实际经验。</p>
      <h3>项目类型</h3>
      <ul>
        <li>个人网站/博客</li>
        <li>电子商务网站</li>
        <li>社交媒体应用</li>
        <li>任务管理系统</li>
        <li>内容管理系统</li>
        <li>API服务</li>
      </ul>
      <h3>项目开发流程</h3>
      <ol>
        <li>需求分析：明确项目目标和功能</li>
        <li>系统设计：架构设计、数据库设计</li>
        <li>前端开发：用户界面实现</li>
        <li>后端开发：服务器端逻辑实现</li>
        <li>测试：功能测试、性能测试</li>
        <li>部署：上线发布</li>
        <li>维护：bug修复、功能更新</li>
      </ol>
    `
  },
  '模块化': {
    title: '模块化',
    content: `
      <h3>模块化</h3>
      <p>模块化是一种将代码分解为独立、可重用单元的编程方法，它有助于提高代码的可维护性、可测试性和可扩展性。</p>
      <h3>核心概念</h3>
      <ul>
        <li>模块：独立的代码单元，具有明确的接口</li>
        <li>导入/导出：模块间的依赖管理</li>
        <li>命名空间：避免命名冲突</li>
        <li>封装：隐藏模块内部实现细节</li>
        <li>代码组织：逻辑上的代码分组</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// CommonJS模块
// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};

// 使用模块
const math = require('./math');
console.log(math.add(1, 2)); // 3

// ES模块
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// 使用模块
import { add, subtract } from './math.js';
console.log(add(1, 2)); // 3</code></pre>
    `
  },
  '前端开发': {
    title: '前端开发',
    content: `
      <h3>前端开发</h3>
      <p>前端开发是创建网站或应用程序用户界面的过程，主要关注用户直接交互的部分。</p>
      <h3>核心技术</h3>
      <ul>
        <li>HTML：网页的结构</li>
        <li>CSS：网页的样式</li>
        <li>JavaScript：网页的交互</li>
        <li>前端框架：React, Vue, Angular等</li>
        <li>响应式设计：多设备适配</li>
        <li>性能优化：提高网页加载速度和运行效率</li>
      </ul>
      <h3>开发工具</h3>
      <ul>
        <li>代码编辑器：VS Code, Sublime Text等</li>
        <li>浏览器开发者工具：调试和性能分析</li>
        <li>包管理器：npm, yarn等</li>
        <li>构建工具：Webpack, Vite等</li>
        <li>版本控制：Git</li>
      </ul>
    `
  },
  'MongoDB': {
    title: 'MongoDB',
    content: `
      <h3>MongoDB</h3>
      <p>MongoDB是一种开源的NoSQL数据库，它使用文档模型存储数据，而不是传统的表格结构。</p>
      <h3>核心特性</h3>
      <ul>
        <li>文档模型：使用BSON（二进制JSON）格式存储数据</li>
        <li>灵活的模式：不需要预定义表结构</li>
        <li>水平可扩展性：支持分片</li>
        <li>强大的查询语言：支持丰富的查询操作</li>
        <li>索引支持：提高查询性能</li>
        <li>复制：提供高可用性</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// 连接到MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 定义模式
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// 创建模型
const User = mongoose.model('User', userSchema);

// 创建文档
const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
});

// 保存文档
newUser.save()
    .then(user => console.log('User saved:', user))
    .catch(error => console.error('Error saving user:', error));

// 查询文档
User.find({ age: { $gt: 25 } })
    .then(users => console.log('Users over 25:', users))
    .catch(error => console.error('Error finding users:', error));</code></pre>
    `
  },
  '数据库': {
    title: '数据库',
    content: `
      <h3>数据库</h3>
      <p>数据库是按照一定的数据结构组织、存储和管理数据的仓库，它是应用程序的重要组成部分。</p>
      <h3>数据库类型</h3>
      <ul>
        <li>关系型数据库：MySQL, PostgreSQL, Oracle等</li>
        <li>NoSQL数据库：MongoDB, Redis, Cassandra等</li>
        <li>内存数据库：Redis, Memcached等</li>
        <li>图形数据库：Neo4j等</li>
      </ul>
      <h3>核心概念</h3>
      <ul>
        <li>表/集合：数据的组织结构</li>
        <li>行/文档：数据的记录</li>
        <li>列/字段：数据的属性</li>
        <li>索引：提高查询性能</li>
        <li>事务：确保数据一致性</li>
        <li>查询：检索数据的操作</li>
      </ul>
      <h3>示例SQL查询</h3>
      <pre><code>-- 创建表
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 插入数据
INSERT INTO users (name, email, age) VALUES ('John Doe', 'john@example.com', 30);

-- 查询数据
SELECT * FROM users WHERE age > 25;

-- 更新数据
UPDATE users SET age = 31 WHERE id = 1;

-- 删除数据
DELETE FROM users WHERE id = 1;</code></pre>
    `
  },
  '性能优化': {
    title: '性能优化',
    content: `
      <h3>性能优化</h3>
      <p>性能优化是指通过各种技术和方法，提高应用程序的运行速度、响应时间和资源利用率。</p>
      <h3>前端性能优化</h3>
      <ul>
        <li>资源压缩：压缩HTML, CSS, JavaScript文件</li>
        <li>资源缓存：利用浏览器缓存</li>
        <li>图片优化：压缩图片, 使用适当的格式</li>
        <li>代码分割：按需加载代码</li>
        <li>减少HTTP请求：合并文件, 使用CSS Sprites</li>
        <li>使用CDN：内容分发网络</li>
      </ul>
      <h3>后端性能优化</h3>
      <ul>
        <li>数据库优化：索引, 查询优化, 缓存</li>
        <li>服务器优化：负载均衡, 集群</li>
        <li>代码优化：算法, 数据结构</li>
        <li>缓存策略：Redis, Memcached</li>
        <li>异步处理：消息队列, 非阻塞I/O</li>
      </ul>
      <h3>性能监控</h3>
      <ul>
        <li>前端监控：页面加载时间, 交互时间</li>
        <li>后端监控：响应时间, 错误率, 资源使用率</li>
        <li>工具：Google PageSpeed Insights, Lighthouse, New Relic等</li>
      </ul>
    `
  },
  '学习资源': {
    title: '学习资源',
    content: `
      <h3>学习资源</h3>
      <p>学习资源是指有助于开发者学习和提升技能的各种材料，包括教程、文档、书籍、视频等。</p>
      <h3>推荐资源</h3>
      <ul>
        <li>在线教程：MDN Web Docs, W3Schools, freeCodeCamp</li>
        <li>文档：官方文档是最权威的学习资源</li>
        <li>书籍：《JavaScript高级程序设计》, 《深入理解计算机系统》等</li>
        <li>视频课程：Udemy, Coursera, edX</li>
        <li>博客：CSS-Tricks, Smashing Magazine, Medium</li>
        <li>社区：Stack Overflow, GitHub, Reddit</li>
        <li>工具：CodePen, JSFiddle, Replit</li>
      </ul>
      <h3>学习方法</h3>
      <ul>
        <li>实践：通过项目学习是最有效的方法</li>
        <li>阅读：学习他人的代码和经验</li>
        <li>分享：教授他人有助于巩固知识</li>
        <li>持续学习：技术不断发展，需要保持学习的习惯</li>
        <li>解决问题：通过解决实际问题提升技能</li>
      </ul>
    `
  },
  '技术趋势': {
    title: '技术趋势',
    content: `
      <h3>技术趋势</h3>
      <p>技术趋势是指当前和未来一段时间内技术发展的方向和热点，了解技术趋势有助于开发者保持竞争力。</p>
      <h3>前端趋势</h3>
      <ul>
        <li>WebAssembly：高性能Web应用</li>
        <li>Progressive Web Apps (PWAs)：类原生应用体验</li>
        <li>Server-Side Rendering (SSR)：改善首屏加载性能</li>
        <li>Jamstack：静态站点生成和API集成</li>
        <li>Web Components：原生组件化</li>
      </ul>
      <h3>后端趋势</h3>
      <ul>
        <li>Serverless：无服务器架构</li>
        <li>容器化：Docker, Kubernetes</li>
        <li>微服务：服务拆分和独立部署</li>
        <li>GraphQL：灵活的API查询语言</li>
        <li>边缘计算：将计算移近用户</li>
      </ul>
      <h3>其他趋势</h3>
      <ul>
        <li>人工智能：机器学习, 自然语言处理</li>
        <li>区块链：去中心化应用</li>
        <li>物联网：设备互联</li>
        <li>5G：高速网络带来的新可能</li>
        <li>低代码/无代码：简化开发流程</li>
      </ul>
    `
  },
  'React': {
    title: 'React',
    content: `
      <h3>React</h3>
      <p>React是Facebook开发的一个用于构建用户界面的JavaScript库，它采用组件化的开发方式，使构建复杂的用户界面变得更加简单。</p>
      <h3>核心概念</h3>
      <ul>
        <li>组件：UI的独立、可重用部分</li>
        <li>Props：组件间传递数据的方式</li>
        <li>State：组件内部的可变数据</li>
        <li>JSX：JavaScript的语法扩展，用于描述UI</li>
        <li>生命周期方法：组件不同阶段的钩子函数</li>
        <li>Hooks：React 16.8+引入的函数式组件状态管理</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// 类组件
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        );
    }
}

// 函数组件 + Hooks
function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

// 渲染组件
ReactDOM.render(<Counter />, document.getElementById('root'));</code></pre>
    `
  },
  'Vue': {
    title: 'Vue',
    content: `
      <h3>Vue</h3>
      <p>Vue是一个渐进式的JavaScript框架，用于构建用户界面，它的核心库只关注视图层，易于集成到现有项目中。</p>
      <h3>核心概念</h3>
      <ul>
        <li>组件：可重用的Vue实例</li>
        <li>Props：父组件向子组件传递数据</li>
        <li>Data：组件的响应式数据</li>
        <li>Computed：计算属性，基于其他数据派生</li>
        <li>Watch：监听数据变化</li>
        <li>指令：带有v-前缀的特殊属性</li>
        <li>生命周期钩子：组件不同阶段的回调函数</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// 基本示例
&lt;div id="app"&gt;
    &lt;h1&gt;{{ message }}&lt;/h1&gt;
    &lt;button @click="increment"&gt;Increment&lt;/button&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
&lt;/div&gt;

// Vue实例
new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        count: 0
    },
    methods: {
        increment() {
            this.count++;
        }
    }
});

// 组件示例
Vue.component('counter', {
    template: '&lt;div&gt;&lt;h2&gt;Counter Component&lt;/h2&gt;&lt;p&gt;Count: {{ count }}&lt;/p&gt;&lt;button @click="increment"&gt;Increment&lt;/button&gt;&lt;/div&gt;',
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        }
    }
});</code></pre>
    `
  },
  'API开发': {
    title: 'API开发',
    content: `
      <h3>API开发</h3>
      <p>API（Application Programming Interface）开发是指创建和维护应用程序之间通信的接口，它允许不同的系统交换数据和功能。</p>
      <h3>API类型</h3>
      <ul>
        <li>RESTful API：基于HTTP协议的API设计风格</li>
        <li>GraphQL：Facebook开发的API查询语言</li>
        <li>WebSocket：实时双向通信</li>
        <li>gRPC：Google开发的高性能RPC框架</li>
      </ul>
      <h3>RESTful API设计原则</h3>
      <ul>
        <li>使用HTTP方法：GET, POST, PUT, DELETE等</li>
        <li>使用资源路径：/users, /products等</li>
        <li>使用状态码：200 OK, 404 Not Found等</li>
        <li>使用JSON格式：数据交换格式</li>
        <li>无状态：服务器不存储客户端状态</li>
      </ul>
      <h3>示例代码</h3>
      <pre><code>// Express.js API示例
const express = require('express');
const app = express();
const port = 3000;

// 中间件
app.use(express.json());

// 模拟数据
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET请求
app.get('/api/users', (req, res) => {
    res.json(users);
});

// POST请求
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT请求
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});

// DELETE请求
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).json({ message: 'User not found' });
    
    users.splice(userIndex, 1);
    res.json({ message: 'User deleted' });
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});</code></pre>
    `
  }
}

// 打开模态窗口
const openModal = (tag) => {
  if (tagDetails[tag]) {
    modalTitle.value = tagDetails[tag].title;
    modalContent.value = tagDetails[tag].content;
  } else {
    modalTitle.value = tag;
    modalContent.value = '<p>暂无' + tag + '的详细信息。</p><p>正在努力完善中，敬请期待！</p>';
  }
  isModalActive.value = true;
  document.body.style.overflow = 'hidden'; // 防止背景滚动
};

// 关闭模态窗口
const closeModal = () => {
  isModalActive.value = false;
  document.body.style.overflow = ''; // 恢复背景滚动
  
  // 清空模态窗口内容
  setTimeout(() => {
    modalTitle.value = '标签详情';
    modalContent.value = '';
  }, 300); // 等待动画完成
};

// 处理标签点击事件
const handleTagClick = (event) => {
  const tag = event.detail.tag;
  openModal(tag);
};

// 处理点击模态窗口外部
const handleModalClick = (event) => {
  if (event.target.id === 'tagModal') {
    closeModal();
  }
};

// 处理按ESC键关闭模态窗口
const handleKeyPress = (event) => {
  if (event.key === 'Escape' && isModalActive.value) {
    closeModal();
  }
};

// 生命周期钩子
onMounted(() => {
  // 添加事件监听器
  window.addEventListener('tagClick', handleTagClick);
  document.addEventListener('click', handleModalClick);
  document.addEventListener('keydown', handleKeyPress);
});

onUnmounted(() => {
  // 移除事件监听器
  window.removeEventListener('tagClick', handleTagClick);
  document.removeEventListener('click', handleModalClick);
  document.removeEventListener('keydown', handleKeyPress);
});

// 监听模态窗口状态变化
watch(isModalActive, (newValue) => {
  if (newValue) {
    // 模态窗口打开时的逻辑
  } else {
    // 模态窗口关闭时的逻辑
  }
});
</script>

<style scoped>
/* TagModal组件特定样式 */
</style>