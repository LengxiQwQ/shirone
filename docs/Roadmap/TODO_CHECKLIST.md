# LengxiQwQ 个人网站内容替换与待办追踪清单

> 本文档用于跟踪网站从模板到个人化迁移的各项待办。
> 每完成一项打勾 `[x]`，待定或待用户决策项会有特别标注。

---

## 📌 当前待定 / 待用户后续决策（On Hold / Pending User Decision）

- [ ] **个人简介 Bio 最终文案**（目前暂用临时过渡文案：`你好呀，我是冷汐 (´• ω •\`)`）
- [ ] **首页 Banner 打字机文案二次精修**（目前已配置第一版 5 句，后续用户根据实际喜好再改）
- [ ] **邮箱独立展示与“点击复制”交互**：在页面底部/页脚专门完整展示 `lengxi@lengxiqwq.com`，实现点击复制到剪贴板，而不是直接调用本地客户端打开 mailto 协议。
- [ ] **全站留言板功能**：集成独立留言板页面或评论系统（如复用旧站的 Twikoo 环境或 Waline/Giscus），方便访客互动留言。
- [ ] **技能清单核对上线** (`data/skills.ts`)：后续按实际熟练度精修后，重新在导航与主站展示。
- [ ] **游戏人生清单整理** (`data/games.ts`)：后续挑选常玩/通关游戏并填入评分后上线。
- [ ] **追番列表配置** (`data/anime.ts`)：后续挑选动漫或接入 B 站/Bangumi 追番同步后上线。

---

## 🚀 路线图推进阶段清单

### R1 —— 身份信息与头像（优先级：最高）
- [x] 替换头像为用户指定的博士头像并转为 WebP (`assets/images/avatar.webp`)
- [x] 清除 `demo-avatar.webp` 引用
- [x] 更新 `config/profile.yaml`：确认名称为 `LengxiQwQ`
- [ ] 个人简介 Bio 定稿（待定中，已设临时文案）
- [x] 社交链接全量公开配置（GitHub、B站、Steam、YouTube、Pixiv；已移除默认 mailto 按钮）

---

### R2 —— 首页核心文案与站点基础信息（优先级：最高）
- [x] 更新 `config/site.yaml` 站点副标题为 `冷汐的次元小窝`
- [x] 清理 `site.yaml` 中的 `TODO`
- [x] 覆盖默认 Banner 主标题为 `LengxiQwQ`
- [x] 配置 Banner 打字机文案（5 句初版）
- [ ] Banner 图片与背景风格确认（按路线图安排在 R8）

---

### R3 —— 导航、公告、页脚、社交入口（优先级：很高）
- [x] **导航栏精简与重组** (`config/nav-bar.yaml`)
  - [x] 确定极简 5 大主干：首页、项目、文章(下拉)、生活(下拉)、社交(下拉)、更多(下拉，含关于我与关于本站)
  - [x] 移除顶栏右侧冗余 GitHub 按钮
- [x] **全站公告设置** (`config/announcement.yaml`)
  - [x] 覆盖关闭默认模板英文公告条（零 DOM 占用）
- [x] **页脚个性化设置** (`config/footer.yaml` / `footer.html`)
  - [x] 确认版权名自动绑定 LengxiQwQ，无模板多余冗余

---

### R4 —— About、Projects、Timeline（优先级：高）
- [x] **关于页润色** (`content/spec/about.md`)
  - [x] 结合 GitHub 最新资料（冷汐OωO、英迪国际大学 IT 专业、马来西亚森美兰、开发与游戏探索）充实自我介绍
  - [x] 嵌入 Live Photo Box、PlaylistOut、CapsLock IME Switcher、Car Rental 等 GitHub 卡片
  - [x] 建立 `#about-this-site` 关于本站锚点与联系方式
- [x] **项目页核对与补充** (`data/projects.ts` & `config/projects.yaml`)
  - [x] Live Photo Box（校正真实技术栈为 C# / WinUI 3 / Windows App SDK，2026年）
  - [x] PlaylistOut（技术栈 TS / React / Cloudflare Workers，2025年）
  - [x] 加入 CapsLock IME Switcher（AutoHotkey / Windows，2025年）
  - [x] 加入大学课题 Car Rental Management System（Java / OOP，2025年）
  - [x] 配置项目分类 Chips（独立应用、实用工具、大学课题）
- [x] **时间线整理** (`data/timeline.ts`)
  - [x] 严格根据各仓库最早一次 commit 时间精准排列里程碑（2022.01 GitHub 起步 -> 2025.10 PlaylistOut -> 2025.11 Car Rental -> 2025.11 CapsLock -> 2026.03 Live Photo Box -> 2026.09 双仓站点上线）

---

### R5 —— 个人数据页定制（优先级：中）
- [x] **设备清单录入** (`data/devices.ts` & `config/devices.yaml`)：录入天选4、iPhone 16 Pro Max、iPad Pro、一加Ace、G903、黑爵AK980V2、Bose QC45、Fender Stratocaster、Yamaha THR10II 真实装备与专业文案。
- [x] **暂时隐藏未整理页面**：技能 (Skills)、游戏 (Games)、番剧 (Anime) 已安全从导航菜单隐藏，杜绝假数据展示，具体内容已存入置顶待办清单。

---

### R6 —— 内容与互动（优先级：中）
- [ ] **Moments / 碎碎念**：清理模板说说，添加第一条个人动态
- [ ] **博客文章与专栏构思**：后续有灵感时正式撰写第一篇博客长文，目前演示文章暂存。
- [x] **友链页假数据清理与邮件申请指引** (`data/friends.ts` & `config/friends.yaml`)：清空模板演示友链，顶部配置邮件申请指引（`lengxi@lengxiqwq.com`），博主收到邮件直接由 AI 录入上架。
- [ ] **罗盘 / 常用导航** (`data/compass.ts`)：自定义常用效率与开发工具网址

---

### R7 —— 模板演示资源彻底清理（优先级：中）
- [ ] 清理未使用的模板测试图片、示例 Markdown、测试音乐等

---

### R8 —— 视觉盛宴（优先级：最后）
- [x] **网站 Logo 与全套 Favicon**：已将博士头像精准裁切为圆形，并生成从 32px 到 512px 全套透明图标与 Logo。
- [ ] 桌面端 / 移动端 Banner 精选壁纸与遮罩调优（目前保留默认动漫壁纸）
- [ ] 相册照片上架与封面配置（已暂存待办）
- [ ] 主题色微调与动态质感体验确认
