import React from "react";
import { createRoot } from "react-dom/client";
import {
  BookOpen,
  CalendarDays,
  ChevronRight,
  Compass,
  ExternalLink,
  Gamepad2,
  Github,
  Home,
  MapPin,
  MessageCircle,
  Music2,
  Palette,
  PlayCircle,
  Sparkles,
  UsersRound,
  Wrench,
} from "lucide-react";
import { homeContent } from "./home-content";
import "./styles.css";

const iconMap = {
  BookOpen,
  CalendarDays,
  Gamepad2,
  Music2,
  Palette,
  PlayCircle,
  Sparkles,
  UsersRound,
  Wrench,
};

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
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="主导航">
      <a className="brand" href="#top" aria-label={homeContent.brand.ariaLabel}>
        <span className="brand-mark">{homeContent.brand.mark}</span>
        <span>{homeContent.brand.name}</span>
      </a>
      <nav>
        <a href="#top" aria-label="返回首页">
          <Home size={18} />
        </a>
        {homeContent.navItems.map((item) => (
          <a key={item} href={`#${item}`}>
            {item}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={homeContent.links.joinGroup} target="_blank" rel="noreferrer">
        加入社团
      </a>
    </header>
  );
}

function Hero() {
  const statsIcons = [Sparkles, UsersRound, CalendarDays];

  return (
    <section className="hero" id="top" style={{ "--hero-bg": `url("${homeContent.hero.backgroundImage}")` }}>
      <Header />
      <div className="hero-art" aria-hidden="true">
        <img src={homeContent.hero.featureImage} alt="" />
      </div>
      <a className="mascot-corner" href={homeContent.links.oc} target="_blank" rel="noreferrer">
        <img src={homeContent.mascotAssets.younger} alt="" />
        <span>{homeContent.hero.mascotLabel}</span>
      </a>
      <div className="hero-content">
        <p className="since">{homeContent.hero.since}</p>
        <h1>{homeContent.hero.title}</h1>
        <p className="affiliation-badge">
          <MapPin size={17} />
          {homeContent.hero.affiliation}
        </p>
        <p className="hero-copy">{homeContent.hero.copy}</p>
        <div className="hero-actions">
          <a className="primary-button" href={homeContent.links.joinGroup} target="_blank" rel="noreferrer">
            {homeContent.hero.primaryAction} <ChevronRight size={18} />
          </a>
          <a className="secondary-button" href="#ACGN导视">
            {homeContent.hero.secondaryAction}
          </a>
        </div>
        <div className="hero-stats" aria-label="社团概况">
          {homeContent.hero.stats.map((stat, index) => {
            const Icon = statsIcons[index] ?? Sparkles;
            return (
              <div key={stat.label}>
                <Icon size={20} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            );
          })}
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
          <span>{homeContent.guide.eyebrow}</span>
          <h2>{homeContent.guide.title}</h2>
        </div>
        <p>{homeContent.guide.desc}</p>
        <a href="#作品展示">
          {homeContent.guide.actionLabel} <ChevronRight size={16} />
        </a>
      </div>
      <div className="guide-cards">
        {homeContent.guide.groups.map((group) => {
          const Icon = iconMap[group.icon] ?? Compass;
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
          <span>{homeContent.tools.eyebrow}</span>
          <h2>{homeContent.tools.title}</h2>
        </div>
        <p>{homeContent.tools.desc}</p>
      </div>
      <div className="tool-grid">
        {homeContent.tools.items.map((tool) => {
          const Icon = iconMap[tool.icon] ?? ExternalLink;
          const href = homeContent.links[tool.hrefKey];
          const image = homeContent.mascotAssets[tool.imageKey];
          return (
            <a className={`tool-card tool-${tool.tone}`} href={href} target="_blank" rel="noreferrer" key={href}>
              <div className="tool-copy">
                <span>{tool.label}</span>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
                <strong>
                  {homeContent.tools.enterLabel} <ExternalLink size={16} />
                </strong>
                <small>{tool.footerNote}</small>
              </div>
              <div className="tool-visual" aria-hidden="true">
                <Icon size={28} />
                <img src={image} alt="" loading="lazy" />
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
        <span>{homeContent.intro.eyebrow}</span>
        <h2>{homeContent.intro.title}</h2>
      </div>
      <p>{homeContent.intro.desc}</p>
      <div className="intro-stats" aria-label="社团概况">
        {homeContent.intro.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Activities() {
  return (
    <section className="activity-band section" id="活动日历">
      <div className="section-heading">
        <span>{homeContent.activities.eyebrow}</span>
        <h2>{homeContent.activities.title}</h2>
      </div>
      <div className="timeline">
        {homeContent.activities.items.map((item) => (
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
        <span>{homeContent.showcase.eyebrow}</span>
        <h2>{homeContent.showcase.title}</h2>
      </div>
      <div className="work-grid">
        {homeContent.showcase.works.map((work, index) => (
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
          <span>{homeContent.join.eyebrow}</span>
          <h2>{homeContent.join.title}</h2>
        </div>
        <p>{homeContent.join.desc}</p>
      </div>
      <a className="mail-button" href={homeContent.links.joinGroup} target="_blank" rel="noreferrer">
        <MessageCircle size={19} />
        {homeContent.join.actionLabel}
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-notices">
        {homeContent.footer.notices.map((notice) => (
          <span key={notice}>{notice}</span>
        ))}
      </div>
      <a href={homeContent.links.github} target="_blank" rel="noreferrer">
        <Github size={18} />
        {homeContent.footer.githubLabel}
      </a>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
