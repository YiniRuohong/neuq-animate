import React from "react";
import { createRoot } from "react-dom/client";
import {
  BookOpen,
  CalendarDays,
  ChevronRight,
  Compass,
  ExternalLink,
  Gamepad2,
  Home,
  Mail,
  Music2,
  Palette,
  PlayCircle,
  Sparkles,
  UsersRound,
  Wrench,
} from "lucide-react";
import "./styles.css";

const navItems = ["社团介绍", "活动日历", "ACGN导视", "工具页", "作品展示", "加入我们"];

const mascotAssets = {
  younger: "https://oc.neuq-ani.me/characters/chibi-she-niang-1.png",
  older: "https://oc.neuq-ani.me/characters/chibi-she-niang-2.png",
};

const activities = [
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
];

const works = [
  "原创角色设定",
  "漫画分镜练习",
  "短片剪辑与配音",
  "校园活动海报",
  "Cosplay 摄影",
  "ACGN 资料整理",
];

const guideGroups = [
  {
    key: "anime",
    label: "动画",
    icon: PlayCircle,
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
    icon: BookOpen,
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
    icon: Gamepad2,
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
    icon: Music2,
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
    icon: Palette,
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
    icon: Wrench,
    tone: "blue",
    image: "https://rimg.zhuqiy.top/images/pc/72.webp",
    links: [
      ["实用工具", "https://mikanani.me/"],
      ["素材资源", "https://www.dafont.com/"],
      ["网站推荐", "https://aegisub.org/"],
      ["效率提升", "https://tips.clip-studio.com/"],
    ],
  },
];

const clubTools = [
  {
    title: "社娘展示馆",
    label: "OC Archive",
    href: "https://oc.neuq-ani.me/",
    desc: "查看小岛汐与小岛凛的角色档案、设定图和社娘展示页。",
    icon: Sparkles,
    image: mascotAssets.older,
    tone: "pink",
  },
  {
    title: "激光雕刻排单",
    label: "Laser Queue",
    href: "https://laser.neuq-ani.me/",
    desc: "提交图片、查看公开队列，用于社团周边和活动物料制作。",
    icon: Wrench,
    image: mascotAssets.younger,
    tone: "blue",
  },
];

function App() {
  return (
    <main>
      <Hero />
      <Guide />
      <ToolPortal />
      <Intro />
      <Activities />
      <Showcase />
      <Join />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="主导航">
      <a className="brand" href="#top" aria-label="火占术动漫社首页">
        <span className="brand-mark">火</span>
        <span>火占术动漫社</span>
      </a>
      <nav>
        <a href="#top" aria-label="返回首页">
          <Home size={18} />
        </a>
        {navItems.map((item) => (
          <a key={item} href={`#${item}`}>
            {item}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#加入我们">
        加入社团
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <Header />
      <div className="hero-art" aria-hidden="true">
        <img src="https://rimg.zhuqiy.top/images/pc/124.webp" alt="" />
      </div>
      <a className="mascot-corner" href="https://oc.neuq-ani.me/" target="_blank" rel="noreferrer">
        <img src={mascotAssets.younger} alt="" />
        <span>社娘出没</span>
      </a>
      <div className="hero-content">
        <p className="since">创立于 2004 年的校园动漫社团</p>
        <h1>火占术动漫社</h1>
        <p className="hero-copy">
          以热爱为名，连接同好，分享感动。在这里，我们一起看番、聊 ACGN、做作品、办活动，让青春与热爱同频共振。
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#加入我们">
            加入社团 <ChevronRight size={18} />
          </a>
          <a className="secondary-button" href="#ACGN导视">
            浏览导视
          </a>
        </div>
        <div className="hero-stats" aria-label="社团概况">
          <div>
            <Sparkles size={20} />
            <strong>2004</strong>
            <span>社团成立</span>
          </div>
          <div>
            <UsersRound size={20} />
            <strong>300+</strong>
            <span>成员数量</span>
          </div>
          <div>
            <CalendarDays size={20} />
            <strong>20+</strong>
            <span>每年活动</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guide() {
  return (
    <section className="guide" id="ACGN导视">
      <div className="guide-intro">
        <div className="section-heading">
          <span>ACGN Index</span>
          <h2>ACGN 导视</h2>
        </div>
        <p>精选优质资源索引，同好必备导航站。</p>
        <a href="#作品展示">
          查看全部导视 <ChevronRight size={16} />
        </a>
      </div>
      <div className="guide-cards">
        {guideGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article className={`guide-card guide-${group.tone}`} key={group.key}>
              <div className="guide-card-title">
                <Icon size={25} />
                <h3>{group.label}</h3>
              </div>
              <img src={group.image} alt="" loading="lazy" />
              <ul>
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a className="explore-link" href={group.links[0][1]} target="_blank" rel="noreferrer">
                探索更多 <ChevronRight size={15} />
              </a>
            </article>
          );
        })}
      </div>
      <div className="guide-watermark" aria-hidden="true">
        <Compass size={220} />
      </div>
      <div className="guide-spark guide-spark-a" aria-hidden="true" />
      <div className="guide-spark guide-spark-b" aria-hidden="true" />
    </section>
  );
}

function ToolPortal() {
  return (
    <section className="tool-portal" id="工具页">
      <div className="tool-heading">
        <div className="section-heading">
          <span>Club Tools</span>
          <h2>社团工具页</h2>
        </div>
        <p>把社娘展示与活动工具放在同一处，方便成员和访客快速进入。</p>
      </div>
      <div className="tool-grid">
        {clubTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <a className={`tool-card tool-${tool.tone}`} href={tool.href} target="_blank" rel="noreferrer" key={tool.href}>
              <div className="tool-copy">
                <span>{tool.label}</span>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
                <strong>
                  进入页面 <ExternalLink size={16} />
                </strong>
              </div>
              <div className="tool-visual" aria-hidden="true">
                <Icon size={28} />
                <img src={tool.image} alt="" loading="lazy" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro section" id="社团介绍">
      <div className="section-heading">
        <span>About</span>
        <h2>漫迷们的校园据点</h2>
      </div>
      <p>
        火占术动漫社成立于 2004 年，在学校组织的各种书画大赛中大显身手，屡次获奖。社团不定期举行漫画展，组织观赏漫画，进行 COSPLAY
        等大型活动，并持续探索更有创造力的社团文化表达。
      </p>
      <div className="intro-stats" aria-label="社团概况">
        <div>
          <strong>20+</strong>
          <span>年社团积累</span>
        </div>
        <div>
          <strong>ACGN</strong>
          <span>兴趣方向覆盖</span>
        </div>
        <div>
          <strong>开放</strong>
          <span>欢迎所有动漫爱好者</span>
        </div>
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section className="activity-band section" id="活动日历">
      <div className="section-heading">
        <span>Events</span>
        <h2>近期活动</h2>
      </div>
      <div className="timeline">
        {activities.map((item) => (
          <article key={item.title} className="activity-card">
            <time>{item.date}</time>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="showcase section" id="作品展示">
      <div className="section-heading">
        <span>Gallery</span>
        <h2>作品与技能方向</h2>
      </div>
      <div className="work-grid">
        {works.map((work, index) => (
          <article key={work} className="work-card">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{work}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function Join() {
  return (
    <section className="join section" id="加入我们">
      <div>
        <div className="section-heading">
          <span>Join</span>
          <h2>欢迎广大动漫爱好者加入</h2>
        </div>
        <p>
          无论你擅长绘画、剪辑、配音、摄影、写作、资料整理，还是只是想找到一起看番和交流作品的同好，这里都可以成为你的起点。
        </p>
      </div>
      <a className="mail-button" href="mailto:club@example.edu">
        <Mail size={19} />
        联系社团
      </a>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);
