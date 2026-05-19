// Homepage content source of truth.
// Edit this file when club copy, links, activities, tool pages, or footer notes change.

export const homeContent = {
  navItems: ["社团介绍", "活动日历", "ACGN导视", "工具页", "作品展示", "加入我们"],
  brand: {
    name: "火占术动漫社",
    mark: "火",
    ariaLabel: "火占术动漫社首页",
  },
  links: {
    joinGroup: "mqqapi://card/show_pslcard?src_type=internal&version=1&uin=624931693&card_type=group&source=qrcode",
    oc: "https://oc.neuq-ani.me/",
    laser: "https://laser.neuq-ani.me/",
    github: "https://github.com/YiniRuohong/neuq-animate",
  },
  qqGroup: {
    number: "624931693",
    display: "QQ群：624931693",
  },
  mascotAssets: {
    younger: "https://oc.neuq-ani.me/characters/chibi-she-niang-1.png",
    older: "https://oc.neuq-ani.me/characters/chibi-she-niang-2.png",
  },
  hero: {
    backgroundImage: "https://rimg.zhuqiy.top/api/random?type=pc",
    featureImage: "https://rimg.zhuqiy.top/images/pc/124.webp",
    mascotLabel: "社娘出没",
    since: "创立于 2004 年的校园动漫社团",
    title: "火占术动漫社",
    affiliation: "东北大学秦皇岛分校动漫社",
    copy:
      "以热爱为名，连接同好，分享感动。在这里，我们一起看番、聊 ACGN、做作品、办活动，让青春与热爱同频共振。",
    primaryAction: "加入 QQ 群",
    secondaryAction: "浏览导视",
    stats: [
      { value: "2004", label: "社团成立" },
      { value: "300+", label: "成员数量" },
      { value: "20+", label: "每年活动" },
    ],
  },
  guide: {
    eyebrow: "ACGN Index",
    title: "ACGN 导视",
    desc: "精选优质资源索引，同好必备导航站。",
    actionLabel: "查看全部导视",
    groups: [
      {
        key: "anime",
        label: "动画",
        icon: "PlayCircle",
        tone: "red",
        image: "https://rimg.zhuqiy.top/images/pc/12.webp",
        links: [
          ["新番时间表", "https://bgm.tv/calendar"],
          ["番剧索引", "https://bgm.tv/anime"],
          ["进度记录", "https://anilist.co/"],
          ["字幕组 & 热门", "https://myanimelist.net/"],
        ],
      },
      {
        key: "comic",
        label: "漫画",
        icon: "BookOpen",
        tone: "blue",
        image: "https://rimg.zhuqiy.top/images/pc/84.webp",
        links: [
          ["漫画索引", "https://mangadex.org/"],
          ["中文在线", "https://zh.moegirl.org.cn/"],
          ["汉化组", "https://natalie.mu/comic"],
          ["漫画下载", "https://mangadex.org/"],
        ],
      },
      {
        key: "game",
        label: "游戏",
        icon: "Gamepad2",
        tone: "red",
        image: "https://rimg.zhuqiy.top/images/pc/36.webp",
        links: [
          ["游戏索引", "https://store.steampowered.com/"],
          ["攻略合集", "https://vndb.org/"],
          ["工具推荐", "https://itch.io/"],
          ["同人游戏", "https://itch.io/games/tag-anime"],
        ],
      },
      {
        key: "music",
        label: "音乐",
        icon: "Music2",
        tone: "blue",
        image: "https://rimg.zhuqiy.top/images/pc/48.webp",
        links: [
          ["音乐索引", "https://vgmdb.net/"],
          ["歌单推荐", "https://open.spotify.com/genre/anime-page"],
          ["专辑收录", "https://www.lantis.jp/"],
          ["音乐下载", "https://vgmdb.net/"],
        ],
      },
      {
        key: "art",
        label: "插画",
        icon: "Palette",
        tone: "red",
        image: "https://rimg.zhuqiy.top/images/pc/60.webp",
        links: [
          ["画师索引", "https://www.pixiv.net/"],
          ["作品集", "https://www.artstation.com/"],
          ["教程分享", "https://tips.clip-studio.com/"],
          ["图集下载", "https://www.pixiv.net/"],
        ],
      },
      {
        key: "tools",
        label: "工具",
        icon: "Wrench",
        tone: "blue",
        image: "https://rimg.zhuqiy.top/images/pc/72.webp",
        links: [
          ["实用工具", "https://mikanani.me/"],
          ["素材资源", "https://www.dafont.com/"],
          ["网站推荐", "https://aegisub.org/"],
          ["效率提升", "https://tips.clip-studio.com/"],
        ],
      },
    ],
  },
  tools: {
    eyebrow: "Club Tools",
    title: "社团工具页",
    desc: "把社娘展示与活动工具放在同一处，方便成员和访客快速进入。",
    enterLabel: "进入页面",
    items: [
      {
        title: "社娘展示馆",
        label: "OC Archive",
        hrefKey: "oc",
        desc: "查看小岛汐与小岛凛的角色档案、设定图和社娘展示页。",
        icon: "Sparkles",
        imageKey: "older",
        tone: "pink",
      },
      {
        title: "激光雕刻排单",
        label: "Laser Queue",
        hrefKey: "laser",
        desc: "提交图片、查看公开队列，用于社团周边和活动物料制作。",
        icon: "Wrench",
        imageKey: "younger",
        tone: "blue",
      },
    ],
  },
  intro: {
    eyebrow: "About",
    title: "漫迷们的校园据点",
    desc:
      "火占术动漫社是东北大学秦皇岛分校的动漫社团，成立于 2004 年，在学校组织的各种书画大赛中大显身手，屡次获奖。社团不定期举行漫画展，组织观赏漫画，进行 COSPLAY 等大型活动，并持续探索更有创造力的社团文化表达。",
    stats: [
      { value: "20+", label: "年社团积累" },
      { value: "ACGN", label: "兴趣方向覆盖" },
      { value: "开放", label: "欢迎所有动漫爱好者" },
    ],
  },
  activities: {
    eyebrow: "Events",
    title: "近期活动",
    items: [
      {
        date: "04.12",
        title: "春季漫画展",
        desc: "原创插画、同人本、角色设定稿与手作摊位集中展示。",
      },
      {
        date: "05.25",
        title: "放映讨论夜",
        desc: "社员共同观赏动画作品，从分镜、音乐与角色塑造展开交流。",
      },
      {
        date: "06.08",
        title: "Cosplay 舞台",
        desc: "服装、妆造、摄影与舞台走位协作完成的社团大型活动。",
      },
    ],
  },
  showcase: {
    eyebrow: "Gallery",
    title: "作品与技能方向",
    works: [
      "原创角色设定",
      "漫画分镜练习",
      "短片剪辑与配音",
      "校园活动海报",
      "Cosplay 摄影",
      "ACGN 资料整理",
    ],
  },
  join: {
    eyebrow: "Join",
    title: "欢迎广大动漫爱好者加入",
    desc:
      "无论你擅长绘画、剪辑、配音、摄影、写作、资料整理，还是只是想找到一起看番和交流作品的同好，这里都可以成为你的起点。QQ群：624931693。",
    actionLabel: "加入 QQ 群",
  },
  footer: {
    githubLabel: "GitHub 仓库目录",
  },
};
