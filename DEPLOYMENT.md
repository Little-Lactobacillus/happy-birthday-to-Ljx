# 部署指南

## GitHub Pages 部署步骤

### 1. 创建GitHub仓库

1. 访问 [GitHub.com](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 输入仓库名称（如：happy-birthday）
4. 选择 "Public"（公开）
5. 勾选 "Add a README file"
6. 点击 "Create repository"

### 2. 上传代码到GitHub

#### 方法一：使用Git命令行

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial deployment"

# 添加远程仓库
git remote add origin https://github.com/你的用户名/仓库名.git

# 推送代码
git push -u origin main
```

#### 方法二：使用GitHub Desktop

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 登录GitHub账户
3. 选择 "File" → "Add Local Repository"
4. 选择项目文件夹
5. 提交更改并推送到GitHub

#### 方法三：直接上传文件

1. 在GitHub仓库页面点击 "Add file" → "Upload files"
2. 拖拽所有项目文件到上传区域
3. 输入提交信息
4. 点击 "Commit changes"

### 3. 启用GitHub Pages

1. 进入仓库设置页面（Settings）
2. 左侧菜单选择 "Pages"
3. 在 "Source" 部分选择 "Deploy from a branch"
4. 选择 "main" 分支和 "/ (root)" 文件夹
5. 点击 "Save"
6. 等待几分钟，GitHub Pages会自动部署

### 4. 访问网站

部署完成后，访问以下地址：
```
https://你的用户名.github.io/仓库名
```

例如：
```
https://johnsmith.github.io/happy-birthday
```

## 自定义域名（可选）

### 1. 购买域名
- 在域名注册商（如GoDaddy、Namecheap）购买域名
- 建议选择.com、.net或.org后缀

### 2. 配置DNS

在域名管理面板添加CNAME记录：
```
类型: CNAME
名称: www（或留空使用根域名）
值: 你的用户名.github.io
TTL: 3600
```

### 3. 在GitHub配置自定义域名

1. 在仓库设置 → Pages → Custom domain
2. 输入您的域名（如：www.yourdomain.com）
3. 点击 "Save"
4. 等待DNS生效（可能需要几小时）

## 其他部署选项

### Netlify部署

1. 访问 [Netlify.com](https://netlify.com)
2. 使用GitHub账户登录
3. 点击 "New site from Git"
4. 选择GitHub仓库
5. 保持默认设置，点击 "Deploy site"

### Vercel部署

1. 访问 [Vercel.com](https://vercel.com)
2. 使用GitHub账户登录
3. 点击 "Import Project"
4. 选择GitHub仓库
5. 点击 "Deploy"

## 部署后检查清单

- [ ] 网站可以正常访问
- [ ] 信封拆封功能正常
- [ ] 音乐播放器工作正常
- [ ] 移动端显示正常
- [ ] 所有图片正确加载
- [ ] 音频文件可以播放
- [ ] 没有JavaScript错误

## 故障排除

### 常见问题

**问题1：404错误**
- 检查GitHub Pages是否已启用
- 确认仓库名称拼写正确
- 等待部署完成（可能需要几分钟）

**问题2：图片不显示**
- 检查图片文件路径是否正确
- 确认图片文件已上传到GitHub
- 检查文件名大小写（GitHub区分大小写）

**问题3：音乐无法播放**
- 检查音频文件路径
- 确认浏览器支持音频格式
- 检查文件大小（GitHub Pages有文件大小限制）

**问题4：移动端显示问题**
- 测试不同设备的显示效果
- 检查CSS媒体查询是否正确

### 性能优化建议

1. **图片优化**
   - 使用WebP格式替代PNG/JPG
   - 压缩图片文件大小
   - 使用适当的图片尺寸

2. **代码优化**
   - 压缩CSS和JavaScript文件
   - 移除未使用的代码
   - 使用CDN加速

3. **缓存策略**
   - 设置适当的缓存头
   - 使用Service Worker（高级功能）

## 更新网站内容

### 修改文本内容
1. 编辑 `index.html` 文件
2. 提交更改到GitHub
3. GitHub Pages会自动重新部署

### 更换图片
1. 将新图片放入 `images/` 目录
2. 更新CSS文件中的图片路径
3. 提交并推送更改

### 更换音乐
1. 将新音频文件放入 `audio/` 目录
2. 更新HTML中的音频路径
3. 确保音频格式兼容

## 安全考虑

- 使用HTTPS（GitHub Pages默认启用）
- 避免在代码中包含敏感信息
- 定期更新依赖项
- 使用内容安全策略（CSP）

## 监控和分析

### Google Analytics
1. 注册 [Google Analytics](https://analytics.google.com)
2. 获取跟踪代码
3. 将代码添加到 `index.html` 的 `<head>` 部分

### 性能监控
- 使用 [Google PageSpeed Insights](https://pagespeed.web.dev/)
- 使用 [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

如有问题，请参考项目README文件或联系开发者。