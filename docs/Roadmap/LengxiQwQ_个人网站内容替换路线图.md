# LengxiQwQ 个人网站内容替换路线图

> 适用仓库：
>
> - 代码仓：`LengxiQwQ/lengxiqwq-site`
> - 内容仓：`LengxiQwQ/lengxiqwq-site-content`
>
> 当前阶段：网站已经能够正常构建、部署和访问。  
> 本路线图的目标不是重构 Shirone，也不是重新设计网站，而是把模板中的默认内容、演示内容和占位内容逐步替换为 LengxiQwQ 自己的内容。
>
> 核心原则：
>
> **先把“这个网站是谁的”改对，再改“这个网站里面有什么”。**
>
> 头像、昵称、网站名称、个人简介、首页文案、联系方式、导航、页脚等身份信息优先级最高。  
> 大量背景图、相册图、番剧封面、游戏封面等视觉资源放到后面处理，头像除外。

---

# 0. 本轮 AI 的身份与边界

你现在不是在开发一个新网站，也不是在重新设计 Shirone。

你的身份是：

**LengxiQwQ 个人网站内容迁移与个性化执行员**

你的任务是按照本路线图，一阶段一阶段把模板内容替换成站长自己的内容。

## 0.1 两个仓库的职责必须严格区分

### 公开代码仓

仓库：

`LengxiQwQ/lengxiqwq-site`

主要负责：

- Shirone 主题代码
- 页面布局
- Astro 页面
- UI 组件
- 默认配置
- 构建脚本
- GitHub Actions
- 部署
- 内容同步系统

其中：

`src/config/*.ts`

是主题的**默认配置 / 出厂设置**。

如果私有内容仓没有覆盖某个字段，就会自动使用这些默认值。

### 私有内容仓

仓库：

`LengxiQwQ/lengxiqwq-site-content`

主要负责：

- 站长个人信息
- 网站个性化配置
- 文章
- Moments / 说说
- 项目数据
- 技能
- 设备
- 游戏
- 番剧
- 友链
- 罗盘
- 时间线
- 音乐
- 用户图片
- 相册
- 其他私人内容

正常情况下，本路线图的绝大多数改动都应该发生在：

`lengxiqwq-site-content`

而不是公开代码仓。

---

# 1. 最高优先级规则

在执行过程中必须遵守以下规则。

## 1.1 不要为了换内容修改主题代码

如果只是修改：

- 姓名
- 标题
- 副标题
- 头像
- 简介
- 链接
- 首页文字
- 导航
- 公告
- 项目
- 技能
- 设备
- 游戏
- 番剧
- 友链
- 文章
- 时间线

优先从内容仓解决。

不要直接去修改：

- `src/pages/`
- `src/components/`
- `src/layouts/`
- `src/styles/`
- 默认 `src/config/*.ts`

除非确认现有内容覆盖系统无法实现需求。

---

## 1.2 不要复制整份默认配置

内容仓配置采用：

**默认配置 + 用户覆盖配置**

模式。

例如：

`src/config/siteConfig.ts`

是默认值。

`lengxiqwq-site-content/config/site.yaml`

只需要写 LengxiQwQ 真正想覆盖的字段。

原则：

> 只覆盖需要修改的内容，不要为了“完整”而把默认配置整份复制过去。

这样未来 Shirone 升级时，未覆盖的配置仍然可以自动跟进上游默认值。

---

## 1.3 对象递归覆盖，数组整体替换

修改 YAML 时必须牢记：

- 对象：可以只覆盖其中一部分
- 数组：一旦覆盖，就是整组替换

因此在修改：

- 导航
- 社交链接
- Banner 文案数组
- 分类
- 其他列表

之前，要先确认完整目标内容。

---

# 2. 与用户沟通的规则

本项目不允许 AI 自己编造 LengxiQwQ 的个人资料。

如果缺少信息，需要询问用户。

但不要变成：

> 问一个字段 → 等回答 → 再问一个字段 → 再等回答

应当使用**批量问答**。

---

## 2.1 可以一次性批量询问的内容

例如第一轮可以一次询问：

1. 网站副标题
2. 个人简介
3. 首页 Banner 主标题
4. Banner 打字机文案
5. 是否展示邮箱
6. 是否展示 GitHub
7. 是否展示其他社交平台
8. 页脚想显示什么

用户一次回答后，再一起修改。

---

## 2.2 不应该批量混在一起的问题

以下属于不同决策，应分阶段：

- 是否保留“番剧页”
- 是否保留“设备页”
- 是否保留“游戏页”
- 是否保留“友链页”
- 是否保留“相册页”
- 网站背景图片选择
- 网站整体视觉改版

这些不是“小字段”，不要和个人简介之类的问题混成几十项一起问。

---

## 2.3 已经明确的信息不要重复问

如果仓库、现有内容或用户之前已经明确：

- 名称：LengxiQwQ
- 主域名：`https://lengxiqwq.com/`
- GitHub：`https://github.com/LengxiQwQ`
- Live Photo Box
- PlaylistOut

则不要再次要求用户重复提供。

只在需要确认“文案如何表达”时询问。

---

# 3. 总体执行顺序

整个内容替换分为 8 个阶段。

| 阶段 | 内容 | 优先级 |
|---|---|---|
| R1 | 身份信息与头像 | 最高 |
| R2 | 首页核心文案与站点基础信息 | 最高 |
| R3 | 导航、公告、页脚、社交链接 | 很高 |
| R4 | About、Projects、Timeline | 高 |
| R5 | Skills、Devices、Games、Anime 等个人数据页 | 中 |
| R6 | 文章、系列、Moments、Friend、Compass | 中 |
| R7 | 模板演示资源清理 | 中 |
| R8 | Banner、背景、相册、封面等视觉资源 | 最后 |

必须按这个顺序推进。

不要一开始就花大量时间替换背景图和几十张相册图。

---

# R1 —— 身份信息与头像

## 目标

第一步让访客一打开网站，就不会再觉得这是 Shirone 模板演示站。

必须先解决：

- 头像
- 名字
- Bio
- 网站标题
- 网站副标题
- GitHub 等个人链接

---

## R1.1 检查并修改 `config/profile.yaml`

当前重点文件：

`lengxiqwq-site-content/config/profile.yaml`

当前已有类似：

```yaml
avatar: assets/images/demo-avatar.webp
name: LengxiQwQ
bio: TODO
links:
  - name: GitHub
    icon: fa6-brands:github
    url: https://github.com/LengxiQwQ
```

需要处理：

### avatar

`demo-avatar.webp`

必须替换。

不要继续使用 `demo-avatar` 这种命名。

建议改成：

```text
assets/images/avatar.webp
```

或者其他清晰的个人命名。

头像是本路线图唯一需要在早期立刻处理的图片。

### name

如果当前 `LengxiQwQ` 正确，则保留。

### bio

当前 `TODO` 必须删除并替换。

如果用户暂时没有最终文案，可以让用户一次给出：

- 中文版
- 中英混合版
- 简短版

然后选择一版。

### links

确认需要展示哪些：

- GitHub
- Email
- 个人项目
- Bilibili
- Discord
- 其他社交账号

不要擅自加入用户未确认的平台。

---

## R1.2 第一轮批量询问用户

如果信息不足，一次问完：

```text
第一轮先定你的身份信息，我会一次性改掉：

1. 你的头像文件使用哪一张？
2. 个人简介 Bio 想写什么？如果你还没想好，我可以根据你的项目和身份给你 5 个短版本选。
3. Profile 区除了 GitHub，还需要显示哪些链接？
4. 邮箱是否公开显示？
5. 名称继续使用 LengxiQwQ，对吗？
```

如果头像已经在本地仓库中，AI 应优先扫描并告诉用户候选文件，而不是要求重新提供。

---

## R1 验收标准

完成后：

- 页面不再出现 `demo-avatar`
- 页面不再出现 `TODO`
- Profile 显示 LengxiQwQ
- GitHub 链接正确
- 用户确认的联系方式正确
- 本地构建通过
- 不修改 Shirone 默认主题代码

---

# R2 —— 首页核心文案与站点基础信息

## 目标

让首页第一屏完全属于 LengxiQwQ。

---

## R2.1 修改 `config/site.yaml`

当前文件：

`lengxiqwq-site-content/config/site.yaml`

已有：

```yaml
site: https://lengxiqwq.com/
base: /
title: LengxiQwQ
subtitle: TODO
lang: zh_CN
```

必须先处理：

### site

保持：

```yaml
site: https://lengxiqwq.com/
```

### title

保持：

```yaml
title: LengxiQwQ
```

### subtitle

当前：

```yaml
subtitle: TODO
```

必须替换。

这是浏览器 SEO、页面元信息以及部分站点展示中非常重要的身份信息。

---

## R2.2 覆盖默认 Banner 文案

当前如果内容仓没有覆盖，则会继承：

`src/config/siteConfig.ts`

中的 Shirone 默认 Banner：

- 标题 `Shirone`
- 默认日文句子
- 模板打字机文案

必须在内容仓 `config/site.yaml` 覆盖。

建议结构类似：

```yaml
banner:
  homeText:
    enable: true
    title: LengxiQwQ
    subtitle:
      - ...
      - ...
      - ...
```

具体文案由用户决定。

不要直接修改公开仓的 `siteConfig.ts`。

---

## R2.3 暂时不要动 Banner 图片

本阶段只修改：

- Banner 标题
- Banner 副标题
- 打字机文字

暂时保留：

- desktop Banner 图片
- mobile Banner 图片
- 背景风格

除非模板图片存在明显不适合公开展示的问题。

视觉图片统一放到 R8。

---

## R2.4 第二轮批量询问

一次问：

```text
现在定首页文字：

1. 网站 subtitle 想表达什么？
2. 首页 Banner 主标题继续使用 LengxiQwQ，还是使用中文名/其他名称？
3. 打字机文案想要几句？建议 3～6 句。
4. 文案风格偏：
   A. 二次元 / 日常
   B. 开发者
   C. 轻松生活
   D. 混合
5. 是否要中英文混合？
```

如果用户没有想法，可以提供候选，但不能直接代替用户决定并提交。

---

## R2 验收标准

- 网站 `subtitle` 不再是 TODO
- 首页 Banner 不再显示 `Shirone`
- 首页不再出现原模板日文默认句子，除非用户明确要求保留其中某些
- 域名仍然正确
- 中文语言配置保持正常
- 不处理背景图片

---

# R3 —— 导航、公告、页脚、社交入口

这是第二个非常重要的“去模板味”阶段。

---

# R3.1 导航栏

当前没有用户自己的 `config/nav-bar.yaml` 时，会使用：

`src/config/navBarConfig.ts`

默认导航。

默认结构中包含：

- Home
- Archive
- Friends
- Moments
- Anime
- Compass
- Albums
- Timeline
- Projects
- Devices
- Games
- Skills
- About
- GitHub

而默认 GitHub 预设可能仍然指向 Shirone 上游仓库。

因此必须建立 LengxiQwQ 自己的导航覆盖。

建议创建：

`lengxiqwq-site-content/config/nav-bar.yaml`

---

## 导航设计原则

第一轮不要追求功能最多。

优先保留真正有内容的页面。

例如：

- 首页
- 文章 / 归档
- 项目
- Moments
- About

其他页面可以放到“更多”。

如果某个页面仍全部是模板数据，则：

**宁可暂时隐藏，也不要让模板假数据挂在正式导航里。**

---

## R3.2 导航批量确认

向用户一次询问：

```text
导航现在可以一起定。

目前主题可提供：

Home / Archive / Friends / Moments / Anime / Compass / Albums /
Timeline / Projects / Devices / Games / Skills / About

请告诉我：
1. 哪些直接放顶栏？
2. 哪些放“更多”？
3. 哪些暂时隐藏？
4. GitHub 是否作为单独入口？
```

AI 可以根据当前内容成熟度先给一个建议版本，让用户直接确认或修改。

---

# R3.3 公告

当前模板默认公告来自：

`src/config/announcementConfig.ts`

默认内容类似：

```text
The only way to do great work is to love what you do
```

以及默认 GitHub 链接。

应创建：

`config/announcement.yaml`

可选择：

- 改成 LengxiQwQ 自己的欢迎语
- 改成项目通知
- 改成“网站施工中”
- 直接关闭公告

不要保留模板默认引用。

---

# R3.4 页脚

当前：

`config/footer.html`

基本为空。

默认：

`footerConfig.enable = false`

这一阶段需要决定页脚是否增加：

- LengxiQwQ
- Copyright
- Built with Shirone
- GitHub
- 网站仓库
- 联系方式
- 备案信息（如未来需要）

如果启用自定义 footer，应建立：

`config/footer.yaml`

并设置：

```yaml
enable: true
```

页脚文案需要简洁。

不要把 About 页内容复制一遍塞进 Footer。

---

# R3.5 社交链接

Profile Links 与 Footer Links 应避免重复堆砌。

建议：

Profile：

- GitHub
- Email
- 主要社交账号

Footer：

- Copyright
- Theme / Powered by
- 网站仓库等辅助信息

---

## R3 验收标准

- 导航不再出现明显模板作者链接
- GitHub 指向 LengxiQwQ
- 模板公告已删除、覆盖或关闭
- Footer 不再是默认模板状态（若用户选择保留默认 Footer，则需确认）
- 暂未完成内容的页面可以从导航暂时隐藏
- 没有死链

---

# R4 —— About、Projects、Timeline

完成前三轮以后，网站已经“看起来是你的”。

接下来开始补核心内容。

---

# R4.1 About

文件：

`content/spec/about.md`

当前已经部分改成 LengxiQwQ 内容。

不要推翻重写。

建议完善结构：

```text
About LengxiQwQ

简单自我介绍

What I Do
- 开发
- 学习
- 兴趣

Projects
- Live Photo Box
- PlaylistOut
- 其他项目

Interests
- 音乐
- 吉他
- 编程
- 游戏
- ACG 等

About This Site
- Shirone
- 双仓结构
- GitHub Pages
- Cloudflare

Contact
```

只放用户愿意公开的信息。

---

# R4.2 Projects

文件：

`data/projects.ts`

当前已经存在：

- Live Photo Box
- PlaylistOut

这些不是模板数据，应保留。

但需要逐项审核：

- summary
- category
- phase
- technologies
- icon
- repository
- website
- year
- featured

尤其要检查：

**technologies 是否真实。**

不要因为模板之前写了 TypeScript 就继续保留错误技术栈。

---

## Projects 批量询问方式

可以一次问：

```text
项目页我已经识别出 Live Photo Box 和 PlaylistOut。

我会一次把两项整理完，请你确认：
1. 每个项目的一句话介绍
2. 当前状态：开发中 / 已发布 / 维护中
3. 技术栈
4. 是否有官网
5. 是否 Featured
6. 是否还有其他项目要加入
```

---

# R4.3 Timeline

文件：

`data/timeline.ts`

当前已有：

- 个人网站上线
- Live Photo Box
- PlaylistOut

逐条确认：

- 日期
- 标题
- 描述
- tags
- category
- link

不要把 Git commit 日期当项目真正发布时间。

Timeline 应记录真正值得展示的里程碑。

---

## R4 验收标准

- About 不再像模板 README
- Projects 数据真实
- Timeline 日期真实
- 不存在明显错误技术栈
- 所有链接有效
- 用户不希望公开的信息没有写入网站

---

# R5 —— Skills、Devices、Games、Anime

这些页面可以一起进入“个人资料清理阶段”，但不要一次把几十个字段全部问用户。

应该一个页面一个页面做。

---

# R5.1 Skills

文件：

`data/skills.ts`

当前仍有大量明显模板数据，例如：

- JavaScript
- TypeScript
- Astro
- Svelte
- React
- Vue
- Tailwind
- Sass
- Node.js
- Python
- Java
- Go
- Rust
- C++
- C
- Kotlin
- Swift
- Ruby
- PHP
- PostgreSQL
- Playwright

不能默认这些全部代表 LengxiQwQ 的真实技能等级。

需要重新建立真实技能表。

先问用户：

```text
技能页你希望：
A. 严格只写真正会的
B. 学过 / 正在学也可以写
C. 技术 + 工具一起展示

然后我根据你的项目实际使用情况先列候选，你确认熟练度。
```

AI 可以根据仓库代码识别使用过的技术，但：

> 使用过 ≠ 熟练。

等级必须让用户确认。

---

# R5.2 Devices

文件：

`data/devices.ts`

当前含明显模板设备，例如：

- MacBook Pro M3 Max
- Sony WH-1000XM5
- Custom 75% Keyboard

这些必须清掉或替换。

设备页适合填写用户愿意公开的真实设备。

不需要一次收集全部设备。

可以先填主要设备，再以后添加。

---

# R5.3 Games

文件：

`data/games.ts`

当前数据包含模板 / 示例。

让用户确认：

- 是否想保留游戏页
- 如果保留，先放 3～6 个真正玩的游戏
- rating 是否要启用
- hours 是否想公开

不建议为了填满页面捏造游玩时间。

---

# R5.4 Anime

文件：

`data/anime.ts`

当前为模板番剧数据。

先决定：

A. 手动维护

B. Bangumi 快照

C. Bilibili 快照

D. 暂时隐藏 Anime 页面

不要在这一阶段急着替换所有封面图片。

先把：

- 数据源
- 番剧名单
- 状态
- 评分

定下来。

图片后续统一处理。

---

## R5 验收标准

- Skills 不存在虚假的 expert / advanced
- Devices 不再展示模板设备
- Games 不再展示模板假数据
- Anime 不再展示模板追番列表
- 暂时不想维护的页面可以关闭

---

# R6 —— Posts、Series、Moments、Friends、Compass

这一阶段开始清理“内容型模板数据”。

---

# R6.1 Posts

目录：

`content/posts/`

目前大部分文章是 Shirone Markdown / MDX 功能演示，例如：

- admonitions
- expressive-code
- markdown
- markdown-mermaid
- spoilers
- steps
- video
- mdx-showcase
- image-grid-demo
- 等

正式站点不应该把这些全部当用户文章公开。

建议：

### 保留一份开发参考

可以选一篇或建立专门：

```text
content/_reference/
```

或者保留 Draft，不发布。

目的：

以后忘记 Shirone Markdown 扩展语法时方便参考。

### 对外文章列表

只展示真正属于 LengxiQwQ 的文章。

如果暂时没有文章：

**空着比展示模板演示文章更好。**

---

# R6.2 Series

当前：

`content/series/`

仍有 Markdown 等模板系列。

如果没有自己的文章系列：

先清空 / 隐藏 Series。

以后文章多了再启用。

---

# R6.3 Moments

目录：

`content/moments/`

目前存在模板生活动态。

必须全部确认来源。

模板 Moments 应移除。

可以先创建一条真实的：

> 欢迎来到我的个人网站

作为第一条。

---

# R6.4 Friends

文件：

`data/friends.ts`

当前：

- Mizuki
- Astro
- Material 3

这更像模板推荐，不是真正意义上的 Friends。

让用户决定：

A. 真正友链页

B. 推荐网站页

如果是 Friends，则只放真正交换友链的网站。

如果用户还没有友链，可以先关闭。

---

# R6.5 Compass

文件：

`data/compass.ts`

当前含：

- GitHub
- MDN
- Stack Overflow
- Iconify
- Material Symbols
- Excalidraw
- Regex101
- Hacker News
- V2EX
- 等

这类内容并不一定有问题。

Compass 本来就可以作为：

**LengxiQwQ 常用网站收藏。**

因此不要全部删除。

让用户确认：

- 哪些确实常用
- 哪些只是模板
- 想增加哪些

可以批量整理。

---

## R6 验收标准

- 首页 / Archive 不再出现模板功能演示文章
- Moments 全部来自用户真实内容
- Series 不展示无意义模板系列
- Friends 定位明确
- Compass 只保留用户真正愿意推荐 / 常用的站点

---

# R7 —— 模板资源清理

这一阶段处理“网站里已经不再引用，但仓库里还残留”的模板资产。

目标：

降低仓库体积、避免未来误用、保持内容仓干净。

---

## R7.1 相册示例资源

重点检查：

`public/images/albums/`

当前存在：

- `AcgExample`
- `EncryptedExample`
- `ExternalExample`
- `HiddenExample`

如果确定不需要模板示例：

删除。

但是删除前必须搜索引用。

不能因为名字叫 Example 就直接删。

---

## R7.2 Moments 示例图片

检查：

`public/images/moments/`

例如：

- girls-roll
- girls-trio
- night
- scenery

如果对应 Moments 已经删除，并且其他地方没有引用：

删除。

---

## R7.3 Anime 模板封面

检查：

`public/assets/anime/`

等 Anime 数据确认后再清理。

---

## R7.4 Music 模板资源

检查：

`public/assets/music/`

和：

`assets/images/music/`

当前存在模板 MP3 与封面。

如果用户改用远程歌单，可以删除不再引用的本地文件。

如果继续使用本地播放，则换成自己的。

---

## R7.5 清理原则

删除任何文件前：

1. 全仓搜索文件名
2. 确认没有配置引用
3. 确认没有 Markdown 引用
4. 确认没有测试依赖
5. 再删除

---

## R7 验收标准

- 无悬空引用
- 无 404 静态资源
- 构建通过
- 模板演示资源显著减少
- 代码仓与内容仓职责仍然清晰

---

# R8 —— 最后处理视觉资源

这是最后阶段。

用户已经明确：

> 除头像外，背景图片和各种其他图片暂时不着急。

因此以下内容必须放到最后。

---

# R8.1 Banner

当前：

```text
assets/images/banner/desktop/1.webp
assets/images/banner/mobile/1.webp
```

此时再选择：

- PC Banner
- Mobile Banner
- 是否多图轮播
- position
- dim
- carousel
- animation

先定图片，再调参数。

---

# R8.2 网站 Logo / Favicon

当前代码仓存在：

```text
public/logo/
public/favicon/
```

这一阶段应决定是否：

- 换成 LengxiQwQ 自己的图标
- 将用户资产迁到内容仓进行管理
- 保留 light / dark favicon
- 生成 32 / 128 / 180 / 192 等版本

这是视觉品牌工作，不需要卡住前面的内容替换。

---

# R8.3 项目封面

Live Photo Box / PlaylistOut 可以增加：

- Logo
- Screenshot
- Banner

但这是增强项。

项目文字信息先正确，图片后补。

---

# R8.4 Anime / Games / Albums 图片

统一最后做。

不要在数据还没定时提前整理几十张图片。

---

# 4. 推荐的实际施工节奏

建议本地 AI 每次只执行一个“小批次”。

---

## Batch A —— 身份信息

一次处理：

- Avatar
- Name
- Bio
- Profile Links
- Site Title
- Site Subtitle

完成后测试。

---

## Batch B —— 首页

一次处理：

- Banner Title
- Banner Text
- Announcement

不换背景图。

完成后测试。

---

## Batch C —— 导航和 Footer

一次处理：

- Nav
- 页面显示 / 隐藏
- GitHub Link
- Footer

完成后测试。

---

## Batch D —— 核心个人页面

一次处理：

- About
- Projects
- Timeline

完成后测试。

---

## Batch E —— 扩展个人页

逐页面：

- Skills
- Devices
- Games
- Anime

不要四页一起问几十个字段。

---

## Batch F —— 内容清理

一次处理：

- Posts
- Series
- Moments
- Friends
- Compass

可以按功能分两轮完成。

---

## Batch G —— Asset Cleanup

统一清理未引用模板资源。

---

## Batch H —— Visual Polish

最后处理：

- Banner
- Logo
- Favicon
- Cover
- Album
- Other Images

---

# 5. 每一个 Batch 的标准执行流程

每一轮都必须遵守：

### Step 1 —— 读取当前实际文件

不能根据路线图猜。

先读取远程 / 本地最新代码。

---

### Step 2 —— 判断哪些已有真实内容

不要覆盖掉已经属于 LengxiQwQ 的内容。

例如：

- Live Photo Box
- PlaylistOut
- LengxiQwQ
- lengxiqwq.com

这些内容应先判断是否需要优化，而不是直接删除。

---

### Step 3 —— 找到模板内容和缺失内容

分类为：

- KEEP：已经正确
- EDIT：需要修改
- REMOVE：模板内容
- ASK：需要用户决定

---

### Step 4 —— 将 ASK 合并成一次提问

同一类问题批量问。

最多建议：

5～10 个紧密相关问题一组。

不要 30 个完全不同的问题一次扔给用户。

---

### Step 5 —— 修改

优先改：

`lengxiqwq-site-content`

只有现有覆盖系统无法实现时才考虑代码仓。

---

### Step 6 —— 内容同步

本地双仓环境按当前项目约定运行：

```powershell
$env:CONTENT_DIR = "<lengxiqwq-site-content 本地路径>"
pnpm content:sync
```

---

### Step 7 —— 构建测试

至少运行项目现有：

```text
pnpm build
```

如项目已有：

- lint
- typecheck
- tests

也按仓库规范执行。

---

### Step 8 —— 页面检查

重点确认：

- 首页
- 导航
- About
- 修改过的目标页面
- Mobile 基础布局
- 无 404
- 无错误资源

---

### Step 9 —— 报告

每个 Batch 完成后输出：

```text
Batch:
修改文件：
删除文件：
新增文件：
用户确认内容：
继续继承的 Shirone 默认值：
构建结果：
需要下一轮确认的问题：
```

---

# 6. Commit 建议

不要把整个个人网站内容替换塞进一个超级 Commit。

建议按阶段提交。

例如：

```text
content: personalize profile and site identity

content: customize homepage copy and announcement

content: configure navigation and footer

content: update about projects and timeline

content: replace skills and devices data

content: clean demo posts and moments

content: remove unused demo assets

content: update personal visual assets
```

这样如果某一阶段出现问题，可以单独回退。

---

# 7. 禁止事项

本路线图执行期间禁止：

### 禁止 1

为了修改一个标题，直接改 `src/pages/*.astro`。

### 禁止 2

把 `src/config/*.ts` 整份复制到私有仓。

### 禁止 3

擅自编造用户：

- 学历
- 经历
- 技能熟练度
- 设备
- 游戏时长
- 番剧评分
- 社交账号

### 禁止 4

看到模板资源就无脑批量删除。

必须先查引用。

### 禁止 5

在用户没确定页面是否保留之前，先花大量时间找封面图。

### 禁止 6

大规模重新设计 UI。

当前任务是内容替换，不是 Shirone UI 重构。

### 禁止 7

为了“看起来完整”保留假数据。

空页面 / 暂时隐藏，比虚假内容更好。

---

# 8. 第一阶段立即执行指令

本地 AI 拿到本路线图后，第一步不要直接修改。

先完成以下审查：

```text
1. 拉取两个仓库 main 最新版本。
2. 确认两个仓库工作区是否干净。
3. 读取：
   - config/site.yaml
   - config/profile.yaml
   - config/footer.html
   - 当前头像资源
   - src/config/siteConfig.ts
   - src/config/profileConfig.ts
4. 列出 R1 + R2 中：
   KEEP / EDIT / ASK
5. 将所有 ASK 合并成第一轮问题，一次发给用户。
6. 等用户回答后，只执行 R1 + R2。
7. content:sync。
8. build。
9. 给出变更报告。
10. 不要提前进入 R3。
```

---

# 9. 第一轮建议直接问用户的问题

如果当前仓库没有足够信息，可以直接把下面这一组发给用户：

```text
我们先只处理网站最重要的“身份信息 + 首页文字”，图片暂时只换头像。

我已经知道：
- 名称：LengxiQwQ
- 域名：https://lengxiqwq.com/
- GitHub：https://github.com/LengxiQwQ

现在请你一次确认下面这些：

1. 头像：
   - 你准备使用哪个本地图片文件？
   - 如果仓库里已经有候选，我可以先列出来给你选。

2. Profile Bio：
   - 想用中文、英文还是中英混合？
   - 如果没有现成文案，我可以给你几种风格候选。

3. 网站 Subtitle：
   - 浏览器 / SEO 等地方使用的一句话介绍想写什么？

4. 首页 Banner 主标题：
   - 继续使用 `LengxiQwQ` 吗？

5. 首页打字机文案：
   - 想偏“开发 / 二次元 / 音乐 / 日常 / 混合”哪种？
   - 建议先定 3～6 句。

6. Profile 社交链接：
   - GitHub 保留。
   - 还想显示哪些？例如 Email / Bilibili / Discord / 其他。

7. 邮箱：
   - 是否愿意公开显示在个人网站？

这批确认后，我只修改 R1 + R2，不碰背景图、不碰其他页面。
```

---

# 10. 路线图最终完成标准

只有达到以下状态，才算“模板内容替换阶段”基本完成：

- [ ] 网站身份全部是 LengxiQwQ
- [ ] 头像是自己的
- [ ] 无关键位置 `TODO`
- [ ] 首页无 Shirone 默认标题
- [ ] 首页无不需要的模板默认日文文案
- [ ] 导航由 LengxiQwQ 自己控制
- [ ] 无模板作者 GitHub 错链
- [ ] 公告属于自己的内容或已关闭
- [ ] Footer 已确认
- [ ] About 属于 LengxiQwQ
- [ ] Projects 信息真实
- [ ] Timeline 信息真实
- [ ] Skills 无虚假等级
- [ ] Devices 无模板设备
- [ ] Games 无模板假数据
- [ ] Anime 无模板追番数据
- [ ] Archive 不再公开模板演示文章
- [ ] Moments 无模板动态
- [ ] Friends / Compass 定位明确
- [ ] 未使用模板 Assets 已安全清理
- [ ] 最后完成 Banner / Logo / Favicon / Cover 等视觉资源
- [ ] `pnpm content:sync` 正常
- [ ] Production Build 正常
- [ ] GitHub Pages 部署正常
- [ ] `https://lengxiqwq.com/` 正常访问

---

# 11. 最重要的一句话

整个施工过程始终按照：

> **身份 → 文案 → 导航 → 核心资料 → 扩展资料 → 内容 → 清理 → 图片**

而不是：

> **先换几十张图片 → 再慢慢想自己是谁。**

当前第一目标不是让网站“最漂亮”。

而是先让任何人打开网站时，都能明确知道：

**这是 LengxiQwQ 的个人网站，而不是 Shirone Demo。**
