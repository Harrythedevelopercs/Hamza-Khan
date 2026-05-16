import {
  ArrowUpRight,
  BookOpen,
  Download,
  GitBranch,
  Link,
  Mail,
  MessageCircle,
  Palette,
  UserRound,
  ScanLine,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import CodeTrail from "./CodeTrail";
import ProjectsPanel from "@/components/ProjectsPanel";
import HighlightedProject from "@/components/HighlightedProject";

type Portfolio = {
  profile: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    email: string;
    phone?: string;
    availability: string;
    github?: string;
    linkedin?: string;
    upwork?: string;
  };
  about?: string;
  current?: { title: string; company: string; period: string };
  contact?: { whatsapp?: string };
  stats: Array<{ label: string; value: string }>;
  skills: string[];
  experience?: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  highlightedProject?: {
    title: string;
    type: string;
    description: string;
    details?: string[];
    impact?: string[];
    accent: string;
  };
  highlightedProjects?: Array<{
    title: string;
    type: string;
    description: string;
    url?: string;
    accent: string;
    details?: string[];
    impact?: string[];
  }>;
  projects: Array<{
    title: string;
    type: string;
    description: string;
    url: string;
    accent: string;
  }>;
  timeline: Array<{ year: string; event: string }>;
};

const fallbackPortfolio: Portfolio = {
  profile: {
    name: "Hamza Khan",
    role: "Full Stack Web Developer",
    tagline: "Experienced Full Stack Developer From Pakistan",
    location: "Jamshad Road, Karachi, Pakistan",
    email: "harrykennedy.cs@gmail.com",
    phone: "+92 316 2400202",
    availability: "Let's Work Together",
    github: "https://github.com/Harrythedevelopercs",
    linkedin: "in/hamza-khan-backend-developer",
    upwork: "https://www.upwork.com/freelancers/~0106d8d20e5883c7d8",
  },
  about:
    "What truly defines me as a professional is my passion for continuous learning and adaptability. I quickly master new technologies, tools, and frameworks, and approach backend logic, frontend interfaces, and API integrations with precision, creativity, and a problem-solving mindset.",
  current: {
    title: "Head Of Development",
    company: "Quenties",
    period: "Nov 2021 - Continue",
  },
  contact: { whatsapp: "+92 316 2400202" },
  stats: [
    { label: "Years Experience", value: "10" },
    { label: "Clients Worldwide", value: "+125" },
    { label: "Total Projects", value: "+210" },
  ],
  skills: [
    "PHP",
    "Laravel",
    "Node Js",
    "JavaScript",
    "Flutter",
    "HTML",
    "Tailwind CSS",
    "CSS",
    "Next.js",
    "WordPress Development",
    "MySQL",
    "MongoDB",
    "AWS",
    "cPanel",
    "Figma",
    "Adobe Photoshop",
  ],
  experience: [
    {
      title: "Head Of Development",
      company: "Quenties",
      period: "Nov 2021 - Continue",
      description:
        "Manage a skilled development team, oversee project execution, and deliver scalable web solutions.",
    },
    {
      title: "WordPress Department Manager",
      company: "Inovio Tech Pvt",
      period: "Jan 2021 - Nov 2021",
      description:
        "Led WordPress project development and management, ensuring quality, performance, and delivery.",
    },
    {
      title: "Web Development Team Lead",
      company: "Axe Corp Inc",
      period: "Jan 2019 - Dec 2019",
      description:
        "Guided the development team, managed project workflows, and delivered efficient web solutions.",
    },
    {
      title: "PHP Web Developer",
      company: "Digimatic",
      period: "May 2018 - Jan 2019",
      description:
        "Developed dynamic web applications, optimized backend performance, and collaborated with designers on responsive websites.",
    },
    {
      title: "PHP Web Developer",
      company: "ID Tech Pakistan",
      period: "May 2016 - March 2017",
      description:
        "Built custom web applications, integrated APIs, and optimized backend systems.",
    },
  ],
  projects: [
    { title: "schoonyssd.com", type: "Education", description: "School portfolio and landing page.", url: "https://schoonyssd.com/", accent: "cyan" },
    { title: "evergreenchristmastree.com", type: "Business", description: "Holiday product showcase site.", url: "https://evergreenchristmastree.com/", accent: "lime" },
    { title: "sendimpactt.com", type: "Business", description: "Digital agency and impact promotion website.", url: "https://sendimpactt.com/", accent: "rose" },
    { title: "tirellabankruptcy.com", type: "Finance", description: "Bankruptcy services website.", url: "https://tirellabankruptcy.com/", accent: "cyan" },
    { title: "freshdentalcarepc.com", type: "Dental", description: "Dental clinic website for patient care.", url: "https://freshdentalcarepc.com/", accent: "lime" },
    { title: "www.luminousdental.ca", type: "Dental", description: "Dental practice website.", url: "https://www.luminousdental.ca/", accent: "rose" },
    { title: "blackrock-recycling.com", type: "Services", description: "Recycling and waste management website.", url: "https://blackrock-recycling.com/", accent: "cyan" },
    { title: "westrefinancial.com", type: "Finance", description: "Financial services and consulting site.", url: "https://westrefinancial.com/", accent: "lime" },
    { title: "accreditedhospicesofamerica.com", type: "Medical", description: "Hospice care and support services website.", url: "https://accreditedhospicesofamerica.com/", accent: "rose" },
    { title: "circadianbrokers.com", type: "Finance", description: "Brokerage and insurance services website.", url: "https://circadianbrokers.com/", accent: "cyan" },
    { title: "greatbasinmobilervrepair.com", type: "Services", description: "Mobile RV repair business website.", url: "https://greatbasinmobilervrepair.com/", accent: "lime" },
    { title: "michaelchambersrealestate.com", type: "Real Estate", description: "Real estate agent and property listing website.", url: "https://michaelchambersrealestate.com/", accent: "rose" },
    { title: "crumbly-corner.com", type: "Business", description: "Small business website.", url: "https://crumbly-corner.com/", accent: "cyan" },
    { title: "harrygiglio.com/managed-login", type: "Login", description: "Managed login experience page.", url: "https://harrygiglio.com/managed-login", accent: "lime" },
    { title: "theintermind.com", type: "Business", description: "Creative agency site.", url: "https://theintermind.com/", accent: "rose" },
    { title: "dandddumpster.com", type: "Services", description: "Dumpster rental and hauling website.", url: "https://dandddumpster.com/", accent: "cyan" },
    { title: "plethorabusinesses.com", type: "Business", description: "Small business portfolio site.", url: "https://plethorabusinesses.com/", accent: "lime" },
    { title: "jackbao.com", type: "Business", description: "Personal business website.", url: "https://jackbao.com/", accent: "rose" },
    { title: "scholarsacademy4thegifted.org", type: "Education", description: "Gifted academy website.", url: "https://scholarsacademy4thegifted.org/", accent: "cyan" },
    { title: "www.chrisbruce.ca", type: "Business", description: "Consultant and portfolio website.", url: "https://www.chrisbruce.ca/", accent: "lime" },
    { title: "evercleantx.com", type: "Services", description: "Cleaning services website.", url: "https://evercleantx.com/", accent: "rose" },
    { title: "juliacontacessi.com", type: "Business", description: "Personal branding website.", url: "https://juliacontacessi.com/", accent: "cyan" },
    { title: "axceldental.com", type: "Dental", description: "Dental services and booking page.", url: "https://axceldental.com/", accent: "lime" },
    { title: "orbitaccountants.ca", type: "Finance", description: "Accounting and tax services website.", url: "https://orbitaccountants.ca/", accent: "rose" },
    { title: "mindful-healingcounseling.com", type: "Medical", description: "Counseling therapist website.", url: "https://mindful-healingcounseling.com/", accent: "cyan" },
    { title: "americantubfactory.com", type: "Industrial", description: "Manufacturing company website.", url: "https://americantubfactory.com/", accent: "lime" },
    { title: "goldenrulesigns.com/simplexlogin", type: "Login", description: "Sign-in page for a signage business.", url: "https://goldenrulesigns.com/simplexlogin/", accent: "rose" },
    { title: "fortresscleaningservices.ca", type: "Services", description: "Commercial cleaning services site.", url: "https://fortresscleaningservices.ca/", accent: "cyan" },
    { title: "www.newviewpsychiatry.com", type: "Medical", description: "Psychiatry clinic website.", url: "http://www.newviewpsychiatry.com/", accent: "lime" },
    { title: "www.windowcoveringgallery.com", type: "Services", description: "Window covering showroom website.", url: "https://www.windowcoveringgallery.com/", accent: "rose" },
    { title: "wilcoxtreeservice.com", type: "Services", description: "Tree service business website.", url: "https://wilcoxtreeservice.com/", accent: "cyan" },
    { title: "vancouverwestyrentals.com", type: "Real Estate", description: "Property rental website.", url: "https://vancouverwestyrentals.com/", accent: "lime" },
    { title: "sendimpactt.com/wp-admin", type: "WordPress", description: "WordPress admin entry page.", url: "https://sendimpactt.com/wp-admin", accent: "rose" },
    { title: "move-central.ca", type: "Business", description: "Moving services website.", url: "https://move-central.ca/", accent: "cyan" },
    { title: "bonawind.com:2083", type: "Hosting", description: "cPanel access page.", url: "https://bonawind.com:2083/", accent: "lime" },
    { title: "lunadellobo.com", type: "Business", description: "Personal portfolio site.", url: "https://lunadellobo.com/", accent: "rose" },
    { title: "bonawind.com", type: "Business", description: "Hosting provider website.", url: "https://bonawind.com/", accent: "cyan" },
    { title: "dysautonomiaexpert.com", type: "Medical", description: "Health specialist website.", url: "https://dysautonomiaexpert.com/", accent: "lime" },
    { title: "yesclient.com", type: "Business", description: "Client management website.", url: "https://yesclient.com/", accent: "rose" },
    { title: "rathinc.com", type: "Business", description: "Corporate website.", url: "https://rathinc.com/", accent: "cyan" },
    { title: "jomsvikingsllc.com/manage", type: "Login", description: "Client management login page.", url: "https://jomsvikingsllc.com/manage", accent: "lime" },
    { title: "smudgepros.com", type: "Services", description: "Detailing and car care website.", url: "https://smudgepros.com/", accent: "rose" },
    { title: "dentistnorthraleigh.com", type: "Dental", description: "Dental practice website.", url: "https://dentistnorthraleigh.com/", accent: "cyan" },
    { title: "yourfamilymedicalclinic.com/dashboard", type: "Login", description: "Medical clinic dashboard.", url: "https://yourfamilymedicalclinic.com/dashboard/", accent: "lime" },
    { title: "carmel-massage.com/wp-login.php", type: "WordPress", description: "WordPress login page for massage clinic.", url: "https://carmel-massage.com/wp-login.php", accent: "rose" },
    { title: "sunrisepsychiatryaz.com", type: "Medical", description: "Psychiatry clinic online presence.", url: "https://sunrisepsychiatryaz.com/", accent: "cyan" },
    { title: "www.bambuspamassage.com", type: "Services", description: "Massage therapy website.", url: "https://www.bambuspamassage.com/", accent: "lime" },
    { title: "affordable-quotes.ca/wps-login", type: "Login", description: "WordPress login experience.", url: "https://affordable-quotes.ca/wps-login", accent: "rose" },
    { title: "wp24.pulse-force.com/seaglassjewelry/wp-admin/", type: "WordPress", description: "WordPress admin page for jewelry store.", url: "https://wp24.pulse-force.com/seaglassjewelry/wp-admin/", accent: "cyan" },
    { title: "lindascunningham.com/wp-admin/", type: "WordPress", description: "WordPress admin page.", url: "https://lindascunningham.com/wp-admin/", accent: "lime" },
    { title: "www.certifiedalarms.ca/wp-admin", type: "WordPress", description: "Security provider admin login.", url: "https://www.certifiedalarms.ca/wp-admin", accent: "rose" },
    { title: "ronaldconstructions.com/wp-admin", type: "WordPress", description: "Construction company admin login.", url: "https://ronaldconstructions.com/wp-admin", accent: "cyan" },
    { title: "maxoffroad.com/wp-admin/", type: "WordPress", description: "Offroad store admin login.", url: "https://maxoffroad.com/wp-admin/", accent: "lime" },
    { title: "canapasky.com/wp-admin/", type: "WordPress", description: "Adventure community admin login.", url: "https://canapasky.com/wp-admin/", accent: "rose" },
    { title: "insuranceagencyintexas.com", type: "Finance", description: "Insurance agency website.", url: "https://insuranceagencyintexas.com/", accent: "cyan" },
    { title: "benichdental.com", type: "Dental", description: "Dental clinic online presence.", url: "https://benichdental.com/", accent: "lime" },
    { title: "realcaliforniaesa.com", type: "Business", description: "Specialty product website.", url: "https://realcaliforniaesa.com/", accent: "rose" },
    { title: "captureppg.com", type: "Business", description: "Professional services website.", url: "https://captureppg.com/", accent: "cyan" },
    { title: "www.septic-pros.com", type: "Services", description: "Septic services website.", url: "https://www.septic-pros.com/", accent: "lime" },
    { title: "dgsconcrete.com/wp-admin/", type: "WordPress", description: "Construction admin login page.", url: "https://dgsconcrete.com/wp-admin/", accent: "rose" },
    { title: "kennethvickauthor.com", type: "Author", description: "Author portfolio and books website.", url: "https://kennethvickauthor.com/", accent: "cyan" },
    { title: "www.anywherespeechandlanguage.com", type: "Medical", description: "Speech therapy provider website.", url: "https://www.anywherespeechandlanguage.com/", accent: "lime" },
    { title: "remodelreachmarketing.com", type: "Marketing", description: "Marketing agency website.", url: "https://remodelreachmarketing.com/", accent: "rose" },
    { title: "sarasdiaries.com/wp-admin/", type: "WordPress", description: "Blog admin login page.", url: "https://sarasdiaries.com/wp-admin/", accent: "cyan" },
    { title: "reachviolenceprevention.org", type: "Education", description: "Nonprofit awareness website.", url: "https://reachviolenceprevention.org/", accent: "lime" },
    { title: "nohoflooring.com/cms/#!/login", type: "Login", description: "Flooring CMS login page.", url: "https://nohoflooring.com/cms/#!/login", accent: "rose" },
    { title: "benadahospitality.com", type: "Hospitality", description: "Hospitality business website.", url: "https://benadahospitality.com/", accent: "cyan" },
    { title: "lakenonahousecleaning.com", type: "Services", description: "House cleaning service website.", url: "https://lakenonahousecleaning.com/", accent: "lime" },
    { title: "www.safariventures.com/wp-admin/", type: "WordPress", description: "Business admin login page.", url: "https://www.safariventures.com/wp-admin/", accent: "rose" },
    { title: "captainmitchs.com", type: "Services", description: "Charter and boat services website.", url: "https://captainmitchs.com/", accent: "cyan" },
    { title: "redheartblueheart.com/wp-admin/", type: "WordPress", description: "Health blog admin login.", url: "https://redheartblueheart.com/wp-admin/", accent: "lime" },
    { title: "allamericacs.com", type: "Services", description: "Air conditioning service website.", url: "https://allamericacs.com/", accent: "rose" },
    { title: "denversteelfabricators.com", type: "Industrial", description: "Steel fabrication website.", url: "https://denversteelfabricators.com/", accent: "cyan" },
    { title: "n4maticstech.com/wp-admin/", type: "WordPress", description: "Technical admin login page.", url: "https://n4maticstech.com/wp-admin/", accent: "lime" },
    { title: "picassobodyshop.com", type: "Services", description: "Auto body shop website.", url: "https://picassobodyshop.com/", accent: "rose" },
    { title: "www.parraid.com", type: "Business", description: "Technology services website.", url: "https://www.parraid.com/", accent: "cyan" },
    { title: "davidbunnellauthor.com/wp-admin", type: "WordPress", description: "Author admin login page.", url: "https://davidbunnellauthor.com/wp-admin", accent: "lime" },
    { title: "www.bierstick.com", type: "Business", description: "E-commerce and product website.", url: "https://www.bierstick.com/", accent: "rose" },
    { title: "vanisleforklift.ca", type: "Industrial", description: "Forklift services website.", url: "https://vanisleforklift.ca/", accent: "cyan" },
    { title: "authordavidbunnell.com", type: "Author", description: "Author site and portfolio.", url: "https://authordavidbunnell.com/", accent: "lime" },
    { title: "tisuzimgoodies.com/wp-admin", type: "WordPress", description: "E-commerce admin login page.", url: "https://tisuzimgoodies.com/wp-admin", accent: "rose" },
    { title: "vifty.com", type: "Business", description: "Startup website.", url: "https://vifty.com/", accent: "cyan" },
    { title: "larrydmadden.com", type: "Business", description: "Personal brand website.", url: "https://larrydmadden.com/", accent: "lime" },
    { title: "authorjackmoore.com", type: "Author", description: "Author portfolio website.", url: "https://authorjackmoore.com/", accent: "rose" },
    { title: "permalinecosmetics.com", type: "Business", description: "Cosmetics brand website.", url: "https://permalinecosmetics.com/", accent: "cyan" },
    { title: "forhisglorysitg.com", type: "Business", description: "Faith-based services website.", url: "https://forhisglorysitg.com/", accent: "lime" },
    { title: "johnindelicato.com", type: "Business", description: "Personal website.", url: "https://johnindelicato.com/", accent: "rose" },
    { title: "anthonydagostinomd.com", type: "Medical", description: "Doctor website.", url: "https://anthonydagostinomd.com/", accent: "cyan" },
    { title: "symptometryscience.com", type: "Medical", description: "Medical research website.", url: "https://symptometryscience.com/", accent: "lime" },
    { title: "politicalpaulwinger.com", type: "Other", description: "Political campaign website.", url: "https://politicalpaulwinger.com/", accent: "rose" },
  ],
  highlightedProjects: [
    {
      title: "Lead Management System (PHP)",
      type: "Featured",
      description: "Centralized lead portal with email parsing, filtering, assignment automation, and Google Sheets reporting for fast follow-up and conversion.",
      details: [
        "Developed a centralized lead management portal that automatically pulls leads from multiple email accounts and integrates them into one organized dashboard.",
        "Implemented email parsing APIs to capture and categorize leads in real time.",
        "Added filters, tags, and lead source tracking for better organization.",
        "Included lead assignment automation so leads reach the right team instantly.",
        "Built performance and conversion analytics for better decision-making.",
      ],
      impact: [
        "Reduced lead response time by over 70%.",
        "Improved visibility across all brands.",
        "Increased conversion rates due to faster follow-up.",
        "Enabled reporting by fetching continuously updated leads from Google Sheets tied to Google Ads.",
      ],
      accent: "lime",
    },
    {
      title: "QA Management System (PHP)",
      type: "Featured",
      description: "Centralized QA dashboard for chat monitoring, fraud detection, invoicing, and call review.",
      details: [
        "Built a comprehensive QA management platform that unifies all quality assurance activities into one dashboard.",
        "Integrated chat logs, invoice tracking, and call recordings through APIs.",
        "Added a fraud detection module with reporting and alerts.",
        "Implemented user roles and permissions for secure access.",
        "Provided real-time reports and audit logs for easy monitoring and performance review.",
        "Added leads and funnel monitoring with automated lead fetching, distribution, and sales assignment.",
      ],
      impact: [
        "Increased QA efficiency by 60%.",
        "Improved accuracy in detecting frauds and billing errors.",
        "Reduced manual workload and tool switching.",
        "Enabled QA teams to monitor lead outcomes and sales funnel performance.",
      ],
      accent: "cyan",
    },
    {
      title: "Cricket Score Management System (PHP)",
      type: "Featured",
      description: "A sports data platform for entering, tracking, and reporting cricket match scores with player stats and match summaries.",
      details: [
        "Designed a cricket score management system to record innings, overs, runs, wickets, and player performance.",
        "Implemented match and tournament management with score entry forms for batting, bowling, and fielding stats.",
        "Created automated scoreboard generation, run-rate calculations, and result summaries.",
        "Added player profiles with career statistics and recent match performance insights.",
        "Built admin tools for match scheduling, team lineups, and score editing.",
      ],
      impact: [
        "Streamlined match scoring and reduced manual scorekeeping errors.",
        "Improved visibility into player and team performance across tournaments.",
        "Enabled fast production of match reports and scorecards.",
      ],
      accent: "rose",
    },
  ],
  timeline: [
    {
      year: "In Progress",
      event:
        "Newports Institute of Communications and Economics - Bachelor of Business Administration (BBA)",
    },
    {
      year: "2012 - 2015",
      event: "Aptech Computer Education - Diploma in Computer Science (BSCS Program)",
    },
  ],
};

async function getPortfolio(): Promise<Portfolio> {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/portfolio";

  try {
    const response = await fetch(apiUrl, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      return fallbackPortfolio;
    }

    return (await response.json()) as Portfolio;
  } catch {
    return fallbackPortfolio;
  }
}

export default async function Home() {
  const portfolio = await getPortfolio();
  const aboutText = portfolio.about ?? fallbackPortfolio.about;
  const current = portfolio.current ?? fallbackPortfolio.current;
  const experienceItems = portfolio.experience?.length
    ? portfolio.experience
    : fallbackPortfolio.experience ?? [];
  const whatsapp =
    portfolio.contact?.whatsapp ??
    portfolio.profile.phone ??
    fallbackPortfolio.contact?.whatsapp;
  const highlightedProjects =
    portfolio.highlightedProjects?.length
      ? portfolio.highlightedProjects
      : portfolio.highlightedProject
      ? [portfolio.highlightedProject]
      : fallbackPortfolio.highlightedProjects ?? [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.profile.name,
    jobTitle: portfolio.profile.role,
    description: portfolio.about ?? portfolio.profile.tagline,
    email: portfolio.profile.email,
    telephone: portfolio.profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
      streetAddress: "Jamshad Road",
    },
    image: "https://hamza-khan.vercel.app/hamza-profile.jpg",
    url: "https://hamza-khan.vercel.app",
    sameAs: [
      portfolio.profile.github,
      "https://www.linkedin.com/in/hamza-khan-backend-developer/",
      portfolio.profile.upwork,
    ].filter(Boolean),
    knowsAbout: portfolio.skills,
    worksFor: portfolio.current
      ? {
          "@type": "Organization",
          name: portfolio.current.company,
        }
      : undefined,
    hasOccupation: {
      "@type": "Occupation",
      name: portfolio.profile.role,
      skills: portfolio.skills.join(", "),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://hamza-khan.vercel.app",
    },
  };

  return (
    <main className="portfolio-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CodeTrail />
      <div className="site-frame">
        <header className="topbar">
          <a className="brand" href="#">
            <span>HK</span>
            <strong>{portfolio.profile.name}</strong>
          </a>
          <a className="topbar-cta" href={`mailto:${portfolio.profile.email}`}>
            <Mail size={17} />
            Contact
          </a>
        </header>

        <section className="bento-grid">
          <article className="glass-card hero-card">
            <div className="portrait-wrap">
              <div className="portrait-glow" />
              <div className="portrait">
                <Image
                  src="/hamza-profile.jpg"
                  alt={portfolio.profile.name}
                  width={360}
                  height={360}
                  priority
                />
              </div>
            </div>
            <div className="hero-copy">
              <p>{portfolio.profile.role}</p>
              <h1>{portfolio.profile.name}</h1>
              <span>{portfolio.profile.tagline}</span>
            </div>
            <a className="corner-link" href="#about" aria-label="Open about">
              <ArrowUpRight size={22} />
            </a>
          </article>

          <article className="glass-card marquee-card" id="projects">
            <div className="project-live-panel">
              <div className="terminal-preview">
                <div className="terminal-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <code>building portfolio_api</code>
                <code>syncing wordpress_plugins</code>
                <code>deploying next_dashboard</code>
              </div>
              <div className="orbit-wrap">
                <span />
                <span />
                <span />
              </div>
            </div>
          </article>

          <article className="glass-card about-card" id="about">
            <div className="icon-stack">
              <Sparkles size={24} />
              <Palette size={24} />
            </div>
            <p>More About Me.</p>
            <h2 className="about-text">{aboutText}</h2>
            <a className="corner-link" href="#resume" aria-label="Open resume">
              <ArrowUpRight size={22} />
            </a>
          </article>

          <article className="glass-card resume-card" id="resume">
            <Download size={32} />
            <div>
              <p>{current?.period ?? "Resume"}</p>
              <h2>
                {current?.title ?? "Experience"} at{" "}
                {current?.company ?? "selected companies"}
              </h2>
            </div>
            <a className="corner-link" href="#experience" aria-label="Open resume">
              <ArrowUpRight size={22} />
            </a>
          </article>

          <article className="glass-card skills-card" id="skills">
            <div className="skills-cloud">
              {portfolio.skills.slice(0, 8).map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <p>Skills.</p>
            <h2>Full stack tools for real client work</h2>
            <a className="corner-link" href="#skills" aria-label="Open skills">
              <ArrowUpRight size={22} />
            </a>
          </article>

          <article className="glass-card social-card">
            <div className="social-row">
              <a href={portfolio.profile.github ?? "#"} aria-label="Github">
                <GitBranch size={26} />
              </a>
              <a href={portfolio.profile.linkedin ?? "#"} aria-label="LinkedIn">
                <Link size={26} />
              </a>
              <a href={`mailto:${portfolio.profile.email}`} aria-label="Email">
                <Mail size={26} />
              </a>
              <a href={portfolio.profile.upwork ?? "#"} aria-label="Upwork">
                <UserRound size={26} />
              </a>
            </div>
            <p>Stay with me</p>
            <h2>Profiles</h2>
            <a className="corner-link" href="#contact" aria-label="Open contact">
              <ArrowUpRight size={22} />
            </a>
          </article>

          <section className="stats-band" aria-label="Portfolio stats">
            {portfolio.stats.map((stat) => (
              <article className="glass-card stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </section>

          <article className="glass-card work-card" id="contact">
            <Sparkles size={34} />
            <h2>
              Let&apos;s <span>Work</span> Together
            </h2>
            <a className="corner-link active" href={`mailto:${portfolio.profile.email}`}>
              <ArrowUpRight size={22} />
            </a>
          </article>

          <article className="glass-card scan-card">
            <div className="qr-box">
              <ScanLine size={54} />
              <div className="qr-grid" />
            </div>
            <p>Scan To Connect</p>
            <h2>{whatsapp}</h2>
            <a className="corner-link" href={`mailto:${portfolio.profile.email}`}>
              <ArrowUpRight size={22} />
            </a>
          </article>

          <article className="glass-card experience-card" id="experience">
            <div className="section-title">
              <Download size={24} />
              <h2>Experience</h2>
            </div>
            <div className="experience-list">
              {experienceItems.slice(0, 5).map((item) => (
                <div className="experience-item" key={`${item.company}-${item.period}`}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{item.period}</span>
                  <small>{item.description}</small>
                </div>
              ))}
            </div>
          </article>

          {highlightedProjects.length > 0 &&
            highlightedProjects.map((project) => (
              <HighlightedProject key={project.title} project={project} />
            ))}

          <ProjectsPanel projects={portfolio.projects} />

          <article className="glass-card education-card" id="education">
            <div className="section-title">
              <BookOpen size={24} />
              <h2>Academic Background</h2>
            </div>
            <div className="education-list">
              {portfolio.timeline.map((item) => {
                const [school, degree] = item.event.split(" - ");

                return (
                  <div className="education-item" key={`${item.year}-${item.event}`}>
                    <h3>{school}</h3>
                    <p>{degree}</p>
                    <span>{item.year}</span>
                    <small>Karachi</small>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        <a className="floating-chat" href={`mailto:${portfolio.profile.email}`}>
          <MessageCircle size={20} />
          Message
        </a>
      </div>
    </main>
  );
}
