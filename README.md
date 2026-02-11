# 生日祝福网站

一个精美的生日祝福网站，包含信封拆封动画和音乐播放功能。

## 功能特性

- ✉️ 信封拆封交互动画
- 🎵 小型唱片机音乐播放器
- 📱 响应式设计，支持移动端
- 🎨 精美的视觉设计

## 项目结构

```
happy-birthday-website/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── main.js        # JavaScript逻辑
├── images/
│   ├── envelope.png   # 信封图片
│   └── wax-seal.png   # 火漆印图片
├── audio/
│   └── bgMusic.mp3    # 背景音乐
└── README.md          # 项目说明
```

## 快速部署

### 方法一：GitHub Pages（推荐）

1. 在GitHub上创建新仓库
2. 将项目文件推送到仓库
3. 在仓库设置中启用GitHub Pages
4. 访问 `https://你的用户名.github.io/仓库名`

### 方法二：传统服务器部署

1. 将整个项目文件夹上传到Web服务器
2. 确保服务器支持静态文件服务
3. 配置正确的MIME类型（特别是音频文件）
4. 访问您的域名

## 本地开发

1. 克隆或下载项目文件
2. 使用任何现代浏览器打开 `index.html`
3. 无需构建过程，直接运行

## 自定义配置

### 修改祝福内容
编辑 `index.html` 文件中的以下部分：

```html
<h2>致我亲爱的朋友：<span style="color: #ff1493;">刘婧娴</span></h2>
<p>今天是你的20岁生日，祝贺你成为二旬老人！</p>
```

### 更换背景音乐
将新的音频文件放入 `audio/` 目录，并更新 `index.html` 中的音频路径：

```html
<source src="audio/你的音乐文件.mp3" type="audio/mpeg">
```

### 更换图片
将新的图片文件放入 `images/` 目录，并更新 `css/style.css` 中的图片路径：

```css
background-image: url('../images/你的图片.png');
```

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- 移动端浏览器

## 技术栈

- HTML5
- CSS3（包含动画和渐变）
- 原生JavaScript
- 响应式设计

## 性能优化

- 图片已优化压缩
- CSS和JavaScript文件分离
- 音频文件使用高效格式
- 响应式设计减少资源加载

## 安全考虑

- 使用相对路径引用资源
- 避免内联脚本和样式
- 支持HTTPS部署
- 文件权限设置合理

## 维护和更新

### 版本控制
建议使用Git进行版本控制：

```bash
git init
git add .
git commit -m "Initial deployment"
git push origin main
```

### 内容更新
1. 修改HTML文件中的文本内容
2. 更新CSS文件调整样式
3. 替换图片和音频文件
4. 测试功能完整性

## 故障排除

### 音乐无法播放
- 检查音频文件路径是否正确
- 确认浏览器支持音频格式
- 检查浏览器自动播放策略

### 图片不显示
- 检查图片文件路径
- 确认文件权限设置
- 验证图片格式支持

### 动画不工作
- 检查JavaScript控制台错误
- 确认CSS动画语法正确
- 验证浏览器兼容性

## 许可证

本项目仅供个人使用，请勿用于商业用途。

---

如有问题，请查看代码注释或联系开发者。