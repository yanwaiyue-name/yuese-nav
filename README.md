# yuese-nav · 跨站共享导航 + 总入口

给 7 个 GitHub Pages 站点提供统一的顶部导航和底部项目页脚。仓库根目录的 `index.html` 是这些项目的总入口页：https://yanwaiyue-name.github.io/yuese-nav/

导航逻辑和样式只维护这一份，站点通过一行 `<script>` 引用；**改 `nav.js` 一处，所有站点同时生效**。

## 接入方式

在每页的 `<body>` 里加一行（放在页面自有脚本之前或之后都可以）：

```html
<script src="https://yanwaiyue-name.github.io/yuese-nav/nav.js"
        data-site="SITE_ID" data-theme="THEME" data-max="WIDTH" defer></script>
```

| 站点 | `data-site` | `data-theme` | `data-max` |
|---|---|---|---|
| 小白成为计算机大佬 | `xiaobai-to-dalao` | `dark` | `1180` |
| 学生版人生指南 | `students-howtolivebetter` | `light` | `760` |
| 机场导航 | `airport-nav` | `dark` | `1120` |
| AI 客户端下载中心 | `agent-download` | `dark` | `1240` |
| AI Agent 工坊 | `ai-agent-hub-zh` | `auto` | `1180` |
| 中文 AI 副业导航 | `ai-sidehustle-zh` | `auto` | `860` |
| AI 玩家 0→1 套件 | `ai-starter-kit-zh` | `auto` | `900` |

- `data-site`：当前站点 id，用于在导航里高亮「当前」。不写会按 URL 路径自动识别。
- `data-theme`：`dark` / `light` / `auto`。固定深色站点填 `dark`，固定浅色站点填 `light`，跟随系统填 `auto`。
- `data-max`：导航最大宽度，和站点正文宽度保持一致。

组件会在 `body` 开头插入顶部导航，在 `body` 末尾追加共享页脚；不需要改站点原有结构。

## 本地预览

```bash
# 在工作区根目录
python -m http.server 4173
# 打开 http://localhost:4173/yuese-nav/demo.html
```

## 部署

1. 在 GitHub 新建仓库 `yanwaiyue-name/yuese-nav`（公开）。
2. 推送本目录的 `nav.js`、`README.md`、`demo.html`、`.nojekyll`。
3. Settings → Pages → Source 选 `Deploy from a branch`，分支 `main`，目录 `/ (root)`。
4. 等 Pages 构建完成，访问 `https://yanwaiyue-name.github.io/yuese-nav/nav.js` 确认返回 JavaScript。

## 更新与缓存

GitHub Pages 对静态文件的缓存通常是 10 分钟。改完 `nav.js` 推送后，各站点最迟约 10 分钟自动用上新版本，不需要重新部署 7 个站点。

## 设计说明

- 使用 Shadow DOM，宿主站点的全局 CSS 不会影响导航，导航也不会污染站点样式。
- 无第三方依赖，单文件约 20 KB。
- 支持键盘操作、`prefers-reduced-motion`、打印时自动隐藏。
- 导航和页脚不进入 PDF：组件自身带 `@media print { display: none }`，学生版指南打印成 PDF 时也不会出现。
- 站点离线打开时（例如下载后的 `清单.html`），导航脚本加载失败不会影响页面本身。
