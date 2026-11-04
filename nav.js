/*!
 * yuese 跨站导航 · 共享组件
 *
 * 用法（每个站点只需加这一行，以后改本文件即可全站生效）：
 *   <script src="https://yanwaiyue-name.github.io/yuese-nav/nav.js"
 *           data-site="xiaobai-to-dalao" data-theme="dark" data-max="1180" defer></script>
 *
 * data-site  当前站点 id，用于高亮；不写则按路径自动识别
 * data-theme dark / light / auto，默认 auto
 * data-max   导航最大宽度（px），按站点内容宽度填，默认 1120
 */
(function () {
  'use strict';

  if (window.__YUESE_NAV_LOADED__) return;
  window.__YUESE_NAV_LOADED__ = true;

  var PROFILE = 'https://github.com/yanwaiyue-name';

  var PROJECTS = [
    {
      id: 'xiaobai-to-dalao',
      name: '小白成为计算机大佬',
      short: '小白入门',
      tag: '教程',
      desc: '从科学上网到环境部署，每一步都教你怎么验证装好了。',
      footDesc: '从科学上网到环境部署',
      url: 'https://yanwaiyue-name.github.io/xiaobai-to-dalao/'
    },
    {
      id: 'ai-starter-kit-zh',
      name: '中文 AI 玩家 0→1',
      short: '0→1 套件',
      tag: '路线',
      desc: '六步把环境、网络、工具、Agent 和副业串成一条路径。',
      footDesc: '六步路线串起全部',
      url: 'https://yanwaiyue-name.github.io/ai-starter-kit-zh/'
    },
    {
      id: 'agent-download',
      name: 'AI 客户端下载中心',
      short: 'AI 工具',
      tag: '工具',
      desc: '47 款 AI 工具的官方地址，按架构选版本并校验哈希。',
      footDesc: '47 款 AI 工具官方地址',
      url: 'https://yanwaiyue-name.github.io/agent-download/'
    },
    {
      id: 'ai-agent-hub-zh',
      name: 'AI Agent 工坊',
      short: 'Agent 资源',
      tag: '索引',
      desc: '编码代理、Skills 与相关资源的中文索引，每周体检。',
      footDesc: 'Agent 与 Skills 中文索引',
      url: 'https://yanwaiyue-name.github.io/ai-agent-hub-zh/'
    },
    {
      id: 'ai-sidehustle-zh',
      name: '中文 AI 副业实战导航',
      short: '副业',
      tag: '指南',
      desc: '20 条可执行路径，成本、收益和证据等级逐条写明。',
      footDesc: '20 条可执行的副业路径',
      url: 'https://yanwaiyue-name.github.io/ai-sidehustle-zh/'
    },
    {
      id: 'students-howtolivebetter',
      name: '学生版人生指南',
      short: '学生指南',
      tag: '指南',
      desc: '18–25 岁的成本收益账本，106 条，标证据等级。',
      footDesc: '18–25 岁的决策账本',
      url: 'https://yanwaiyue-name.github.io/students-howtolivebetter/'
    },
    {
      id: 'airport-nav',
      name: '机场导航',
      short: '机场导航',
      tag: '索引',
      desc: '低价机场入口与客户端速查，每周自动体检。',
      footDesc: '机场入口每周体检',
      url: 'https://yanwaiyue-name.github.io/airport-nav/'
    }
  ];

  var PRIMARY = ['xiaobai-to-dalao', 'agent-download', 'ai-agent-hub-zh', 'ai-sidehustle-zh', 'students-howtolivebetter'];

  var scriptEl = document.currentScript || document.querySelector('script[src*="yuese-nav/nav.js"]');
  var site = (scriptEl && scriptEl.getAttribute('data-site')) || detectSite();
  var theme = (scriptEl && scriptEl.getAttribute('data-theme')) || 'auto';
  var maxWidth = (scriptEl && scriptEl.getAttribute('data-max')) || '1120';
  if (/^\d+$/.test(maxWidth)) maxWidth += 'px';

  function detectSite() {
    var path = location.pathname;
    for (var i = 0; i < PROJECTS.length; i++) {
      if (path.indexOf('/' + PROJECTS[i].id + '/') !== -1) return PROJECTS[i].id;
    }
    return '';
  }

  var MOON = '<svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.7 14.6A9 9 0 0 1 9.4 3.3a9 9 0 1 0 11.3 11.3Z" fill="currentColor"/></svg>';

  var GRID_ICON = '<svg class="grid-ico" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor"><rect x="1" y="1" width="6" height="6" rx="1.2"/><rect x="9" y="1" width="6" height="6" rx="1.2"/><rect x="1" y="9" width="6" height="6" rx="1.2"/><rect x="9" y="9" width="6" height="6" rx="1.2"/></svg>';

  var CHEV = '<svg class="chev" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l5 5 5-5"/></svg>';

  var GITHUB = '<svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>';

  var CSS = `
    :host {
      --yn-bg: #0e1422;
      --yn-panel: #121a2b;
      --yn-text: #e9e6dd;
      --yn-muted: #9aa3b5;
      --yn-accent: #e6c88a;
      --yn-line: rgba(230, 200, 138, .18);
      --yn-soft: rgba(255, 255, 255, .055);
      --yn-shadow: 0 12px 36px rgba(0, 0, 0, .28);
      display: block;
      width: 100%;
      color-scheme: dark;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
      font-size: 14px;
      line-height: 1.5;
      color: var(--yn-text);
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }
    :host([theme="light"]) {
      --yn-bg: #fffdf8;
      --yn-panel: #fffaf0;
      --yn-text: #1d2433;
      --yn-muted: #646b7a;
      --yn-accent: #7c5f2c;
      --yn-line: rgba(29, 36, 51, .13);
      --yn-soft: rgba(29, 36, 51, .05);
      --yn-shadow: 0 12px 30px rgba(70, 58, 32, .10);
      color-scheme: light;
    }
    @media (prefers-color-scheme: light) {
      :host([theme="auto"]) {
        --yn-bg: #fffdf8;
        --yn-panel: #fffaf0;
        --yn-text: #1d2433;
        --yn-muted: #646b7a;
        --yn-accent: #7c5f2c;
        --yn-line: rgba(29, 36, 51, .13);
        --yn-soft: rgba(29, 36, 51, .05);
        --yn-shadow: 0 12px 30px rgba(70, 58, 32, .10);
        color-scheme: light;
      }
    }
    *, *::before, *::after { box-sizing: border-box; }
    a { color: inherit; }
    .bar-wrap {
      width: 100%;
      max-width: calc(var(--yn-max, 1120px) + 32px);
      margin: 14px auto 0;
      padding: 0 16px;
    }
    .bar {
      background: var(--yn-bg);
      border: 1px solid var(--yn-line);
      border-radius: 14px;
      box-shadow: var(--yn-shadow);
      padding: 0 8px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 4px;
      min-height: 52px;
    }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      flex: none;
      padding: 6px 8px 6px 4px;
      border-radius: 8px;
      text-decoration: none;
      color: var(--yn-text);
    }
    .brand:hover { background: var(--yn-soft); }
    .moon { width: 17px; height: 17px; flex: none; color: var(--yn-accent); }
    .wordmark {
      font-family: Georgia, "Times New Roman", "Songti SC", "STSong", serif;
      font-size: 17px;
      font-weight: 600;
      letter-spacing: .01em;
      line-height: 1;
    }
    .tagline {
      padding-left: 9px;
      margin-left: 2px;
      border-left: 1px solid var(--yn-line);
      color: var(--yn-muted);
      font-size: 11.5px;
      white-space: nowrap;
    }
    .links { display: flex; align-items: center; gap: 1px; margin-left: auto; }
    .links a {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 7px 9px;
      border-radius: 7px;
      color: var(--yn-muted);
      font-size: 13px;
      text-decoration: none;
      white-space: nowrap;
    }
    .links a:hover { color: var(--yn-text); background: var(--yn-soft); }
    .links a[aria-current="page"] { color: var(--yn-accent); }
    .links a[aria-current="page"]::before {
      content: "";
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: currentColor;
    }
    .more-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-left: 6px;
      padding: 7px 10px;
      border: 1px solid var(--yn-line);
      border-radius: 8px;
      background: transparent;
      color: var(--yn-text);
      font-family: inherit;
      font-size: 12.5px;
      line-height: 1.2;
      cursor: pointer;
      white-space: nowrap;
    }
    .more-btn:hover { border-color: var(--yn-accent); color: var(--yn-accent); }
    .grid-ico { width: 14px; height: 14px; }
    .chev { width: 13px; height: 13px; transition: transform .2s ease; }
    .bar.open .chev { transform: rotate(180deg); }
    .gh {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      margin-left: 2px;
      border-radius: 8px;
      color: var(--yn-muted);
      text-decoration: none;
    }
    .gh:hover { color: var(--yn-text); background: var(--yn-soft); }
    .gh svg { width: 17px; height: 17px; }
    .panel { display: block; }
    .panel[hidden] { display: none; }
    .panel-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 2px;
      padding: 10px 2px 6px;
      border-top: 1px solid var(--yn-line);
    }
    .panel-item {
      display: block;
      min-width: 0;
      padding: 10px 11px;
      border-radius: 9px;
      color: var(--yn-text);
      text-decoration: none;
    }
    .panel-item:hover { background: var(--yn-soft); }
    .panel-item .top { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
    .panel-item .name { font-size: 13.5px; font-weight: 600; }
    .panel-item .tag,
    .panel-item .here {
      padding: 1px 6px;
      border: 1px solid var(--yn-line);
      border-radius: 999px;
      font-size: 10.5px;
      font-weight: 500;
    }
    .panel-item .tag { color: var(--yn-muted); }
    .panel-item .here { color: var(--yn-accent); }
    .panel-item .desc {
      display: block;
      margin-top: 4px;
      color: var(--yn-muted);
      font-size: 12px;
      line-height: 1.55;
    }
    .panel-foot {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      padding: 8px 4px 12px;
      color: var(--yn-muted);
      font-size: 12px;
    }
    .panel-foot a { color: var(--yn-accent); text-decoration: none; }
    .panel-foot a:hover { text-decoration: underline; }
    .foot-wrap {
      width: 100%;
      max-width: calc(var(--yn-max, 1120px) + 32px);
      margin: 44px auto 28px;
      padding: 0 16px;
    }
    .foot {
      padding-top: 24px;
      border-top: 1px solid var(--yn-line);
      color: var(--yn-muted);
    }
    .foot-brand {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--yn-text);
      text-decoration: none;
    }
    .foot-brand:hover .wordmark { color: var(--yn-accent); }
    .foot-brand .wordmark { font-size: 16px; }
    .foot-say {
      max-width: 560px;
      margin: 8px 0 0;
      font-size: 13px;
      line-height: 1.7;
    }
    .foot-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 2px 16px;
      margin: 20px 0 22px;
    }
    .foot-item {
      display: block;
      padding: 8px 0;
      color: var(--yn-muted);
      font-size: 12.5px;
      line-height: 1.5;
      text-decoration: none;
    }
    .foot-item b {
      display: block;
      margin-bottom: 2px;
      color: var(--yn-text);
      font-size: 13px;
      font-weight: 600;
    }
    .foot-item:hover { color: var(--yn-text); }
    .foot-item:hover b { color: var(--yn-accent); }
    .foot-base {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      padding-top: 14px;
      border-top: 1px solid var(--yn-line);
      font-size: 12px;
    }
    .foot-base a, .to-top {
      color: var(--yn-muted);
      text-decoration: none;
    }
    .foot-base a:hover, .to-top:hover { color: var(--yn-accent); }
    .to-top {
      padding: 0;
      border: 0;
      background: none;
      font: inherit;
      cursor: pointer;
    }
    :where(a, button):focus-visible {
      outline: 2px solid var(--yn-accent);
      outline-offset: 2px;
    }
    @media (max-width: 1080px) {
      .tagline { display: none; }
    }
    @media (max-width: 760px) {
      .bar-wrap { margin-top: 8px; padding: 0 10px; }
      .row { min-height: 48px; }
      .links { display: none; }
      .more-btn { margin-left: auto; }
      .more-btn .long { display: none; }
      .panel-grid { grid-template-columns: 1fr; gap: 0; padding-top: 8px; }
      .panel-item { padding: 9px 10px; }
      .panel-item .desc { display: none; }
      .foot-wrap { margin-top: 34px; padding: 0 10px; }
      .foot-grid { grid-template-columns: 1fr 1fr; gap: 0 14px; }
    }
    @media (min-width: 761px) {
      .more-btn .short { display: none; }
    }
    @media (prefers-reduced-motion: reduce) {
      .chev { transition: none !important; }
    }
    @media print {
      :host { display: none !important; }
    }
  `;

  function topHtml() {
    var ids = PRIMARY.slice();
    if (site && ids.indexOf(site) === -1 && PROJECTS.some(function (p) { return p.id === site; })) {
      ids.push(site);
    }
    var primary = PROJECTS.filter(function (p) { return ids.indexOf(p.id) !== -1; });
    return '<style>' + CSS + '</style>' +
      '<div class="bar-wrap">' +
        '<nav class="bar" aria-label="yuese 项目导航">' +
          '<div class="row">' +
            '<a class="brand" href="' + PROFILE + '" target="_blank" rel="noopener">' +
              MOON +
              '<span class="wordmark">yuese</span>' +
              '<span class="tagline">中文 AI 入门与工具</span>' +
            '</a>' +
            '<div class="links">' +
              primary.map(function (p) {
                return '<a href="' + p.url + '"' + (p.id === site ? ' aria-current="page"' : '') + '>' + p.short + '</a>';
              }).join('') +
            '</div>' +
            '<button class="more-btn" type="button" aria-expanded="false" aria-controls="yuese-panel">' +
              GRID_ICON +
              '<span class="long">全部项目</span><span class="short">项目</span>' +
              CHEV +
            '</button>' +
            '<a class="gh" href="' + PROFILE + '" target="_blank" rel="noopener" aria-label="GitHub：yanwaiyue-name">' + GITHUB + '</a>' +
          '</div>' +
          '<div class="panel" id="yuese-panel" hidden>' +
            '<div class="panel-inner">' +
              '<div class="panel-grid">' +
                PROJECTS.map(function (p) {
                  return '<a class="panel-item" href="' + p.url + '">' +
                    '<span class="top">' +
                      '<span class="name">' + p.name + '</span>' +
                      '<span class="tag">' + p.tag + '</span>' +
                      (p.id === site ? '<span class="here">当前</span>' : '') +
                    '</span>' +
                    '<span class="desc">' + p.desc + '</span>' +
                  '</a>';
                }).join('') +
              '</div>' +
              '<div class="panel-foot"><span>' + PROJECTS.length + ' 个开源项目</span><a href="' + PROFILE + '" target="_blank" rel="noopener">GitHub · yanwaiyue-name</a></div>' +
            '</div>' +
          '</div>' +
        '</nav>' +
      '</div>';
  }

  function footHtml() {
    return '<style>' + CSS + '</style>' +
      '<div class="foot-wrap">' +
        '<footer class="foot">' +
          '<a class="foot-brand" href="' + PROFILE + '" target="_blank" rel="noopener">' +
            MOON +
            '<span class="wordmark">yuese</span>' +
          '</a>' +
          '<p class="foot-say">把复杂的东西讲简单，把散落的信息整理干净，把能自动化的部分自动化。</p>' +
          '<div class="foot-grid">' +
            PROJECTS.map(function (p) {
              return '<a class="foot-item" href="' + p.url + '"><b>' + p.name + '</b>' + p.footDesc + '</a>';
            }).join('') +
          '</div>' +
          '<div class="foot-base">' +
            '<span>© ' + new Date().getFullYear() + ' yuese</span>' +
            '<span><a href="' + PROFILE + '" target="_blank" rel="noopener">GitHub</a>　<button class="to-top" type="button">回到顶部</button></span>' +
          '</div>' +
        '</footer>' +
      '</div>';
  }

  class YueseNav extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      var root = this.attachShadow({ mode: 'open' });
      root.innerHTML = topHtml();

      var bar = root.querySelector('.bar');
      var btn = root.querySelector('.more-btn');
      var panel = root.querySelector('.panel');

      function setOpen(open) {
        bar.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open) panel.removeAttribute('hidden');
        else panel.setAttribute('hidden', '');
      }

      btn.addEventListener('click', function () {
        setOpen(!bar.classList.contains('open'));
      });

      root.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && bar.classList.contains('open')) {
          setOpen(false);
          btn.focus();
        }
      });

      document.addEventListener('click', function (e) {
        if (!bar.classList.contains('open')) return;
        if (e.composedPath().indexOf(this) === -1) setOpen(false);
      }.bind(this));
    }
  }

  class YueseFooter extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      var root = this.attachShadow({ mode: 'open' });
      root.innerHTML = footHtml();
      var btn = root.querySelector('.to-top');
      if (btn) {
        btn.addEventListener('click', function () {
          var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
        });
      }
    }
  }

  if (!customElements.get('yuese-nav')) customElements.define('yuese-nav', YueseNav);
  if (!customElements.get('yuese-footer')) customElements.define('yuese-footer', YueseFooter);

  function mount() {
    if (!document.body) return;
    if (document.querySelector('yuese-nav[data-yuese]')) return;

    var top = document.createElement('yuese-nav');
    top.setAttribute('data-yuese', '');
    top.setAttribute('theme', theme);
    top.style.setProperty('--yn-max', maxWidth);

    var foot = document.createElement('yuese-footer');
    foot.setAttribute('data-yuese', '');
    foot.setAttribute('theme', theme);
    foot.style.setProperty('--yn-max', maxWidth);

    document.body.insertBefore(top, document.body.firstChild);
    document.body.appendChild(foot);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }

  window.YueseNav = {
    projects: PROJECTS,
    setTheme: function (t) {
      document.querySelectorAll('yuese-nav[data-yuese], yuese-footer[data-yuese]').forEach(function (el) {
        el.setAttribute('theme', t);
      });
    }
  };
})();
