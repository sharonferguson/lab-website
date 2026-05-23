// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A broad overview of the SHARE Lab areas of research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Current and past members and collaborators of SHARE Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "news-in-collaboration-with-dr-alison-olechowski-and-dr-sirisha-rambhatla-sharon-was-awarded-the-microsoft-ai-amp-amp-the-new-future-of-work-grant-for-a-project-titled-a-novel-ai-powered-system-for-building-shared-understanding-in-teams",
          title: 'In collaboration with Dr. Alison Olechowski and Dr. Sirisha Rambhatla, Sharon was awarded...',
          description: "",
          section: "News",},{id: "news-sharon-started-a-visiting-studentship-in-mechanical-engineering-massachusetts-institute-of-technology-under-the-supervision-of-dr-david-wallace-and-dr-james-magarian",
          title: 'Sharon started a visiting studentship in Mechanical Engineering, Massachusetts Institute of Technology under...',
          description: "",
          section: "News",},{id: "news-sharon-successfully-defended-her-phd-in-mechanical-and-industrial-engineering-title-the-future-of-engineering-work-exploring-innovation-influences-on-enterprise-communication-platforms-at-the-university-of-toronto",
          title: 'Sharon successfully defended her PhD in Mechanical and Industrial Engineering (title: The Future...',
          description: "",
          section: "News",},{id: "news-sharon-officially-started-as-an-assistant-professor-in-management-science-and-engineering-at-the-university-of-waterloo",
          title: 'Sharon officially started as an Assistant Professor in Management Science and Engineering at...',
          description: "",
          section: "News",},{id: "news-our-paper-matter-of-perspective-s-contrasting-human-and-llm-argumentation-in-subjective-decision-making-on-subtle-sexism-was-published-at-chi-2025-and-presented-in-yokohama-japan-by-paula-akemi-aoyagui",
          title: 'Our paper, “Matter of Perspective(s): Contrasting Human and LLM Argumentation in Subjective Decision-Making...',
          description: "",
          section: "News",},{id: "news-in-collaboration-with-dr-anastasia-kuzminykh-and-paula-akemi-aoyagui-sharon-led-a-workshop-entitled-the-role-of-ai-empowered-machine-subjectivity-in-hci-tasks-at-the-2025-graphics-interface-conference-in-kelowna-bc",
          title: 'In collaboration with Dr. Anastasia Kuzminykh and Paula Akemi Aoyagui, Sharon led a...',
          description: "",
          section: "News",},{id: "news-sharon-received-a-learning-innovation-and-teaching-enhancement-lite-seed-grant-from-the-university-of-waterloo-to-continue-investigating-student-persistence-in-artificial-intelligence",
          title: 'Sharon received a Learning Innovation and Teaching Enhancement (LITE) Seed Grant from the...',
          description: "",
          section: "News",},{id: "news-sharon-will-be-at-cscw-2025-in-bergen-norway-supporting-the-presentation-of-marjan-s-work-two-sides-to-every-story-exploring-hybrid-design-teams-perceptions-of-psychological-safety-on-slack",
          title: 'Sharon will be at CSCW 2025 in Bergen, Norway supporting the presentation of...',
          description: "",
          section: "News",},{id: "news-sharon-was-invited-to-speak-on-a-women-in-academia-panel-at-the-2026-international-women-s-day-gala-at-the-university-of-toronto",
          title: 'Sharon was invited to speak on a Women in Academia panel at the...',
          description: "",
          section: "News",},{id: "news-sharon-received-a-graham-seed-fund-award-for-the-project-entitled-a-socio-technical-readiness-framework-for-ai-driven-data-capture-and-workflow-analysis-in-procedural-community-care-settings-the-case-of-afib-ablation-in-collaboration-with-dr-ada-hurst-dr-houra-mahmoudzadeh-dr-william-chan-and-the-waterloo-regional-health-network",
          title: 'Sharon received a Graham Seed Fund award for the project entitled A socio-technical...',
          description: "",
          section: "News",},{id: "news-sharon-received-funding-through-the-university-of-waterloo-global-futures-fund-and-the-future-of-work-insitute-for-projects-relating-to-ai-use-and-team-cohesion-in-collaboration-with-dr-sharlene-he-and-dr-kim-de-laat-ai-use-and-team-creativity-in-collaboration-with-dr-sharlene-he-and-dr-ramona-bobocel-ai-enabled-policing-technologies-and-discretion-in-collaboration-with-dr-ada-hurst-and-dr-holly-campeau-ai-supported-reflection-grading-in-collaboration-with-dr-sharlene-he-dr-andrea-prier-and-robin-andrade-and-building-social-fitness-when-returning-from-remote-and-hybrid-work-in-collaboration-with-dr-troy-glover-dr-edith-law-dr-ramona-bobocel-and-dr-katie-plaisance",
          title: 'Sharon received funding through the University of Waterloo Global Futures Fund and the...',
          description: "",
          section: "News",},{id: "news-devon-s-and-ryan-s-co-first-authored-paper-informing-group-informatics-system-design-balancing-the-benefits-and-concerns-of-data-driven-collaboration-feedback-has-been-accepted-at-chiwork-2026-sharon-will-be-in-linz-austria-to-present-in-june-2026-and-in-her-role-as-the-accessibility-diversity-co-chair",
          title: 'Devon’s and Ryan’s co-first-authored paper “Informing Group Informatics System Design: Balancing the Benefits...',
          description: "",
          section: "News",},{id: "news-masc-student-sofiia-was-accepted-to-the-prestigous-global-connect-fellowship-at-ntu-singapore",
          title: 'MASc student Sofiia was accepted to the prestigous Global Connect Fellowship at NTU...',
          description: "",
          section: "News",},{id: "news-kate-presented-her-work-on-defining-conceptions-of-ai-careers-at-the-2026-university-of-waterloo-teaching-and-learning-conference",
          title: 'Kate presented her work on defining conceptions of AI careers at the 2026...',
          description: "",
          section: "News",},{id: "news-our-lab-doubled-in-size-in-may-keenan-ung-and-kate-percy-robb-are-joining-zayn-and-sofiia-as-masc-students",
          title: 'Our lab doubled in size in May! Keenan Ung and Kate Percy-Robb are...',
          description: "",
          section: "News",},{id: "news-three-new-research-students-will-be-joining-us-for-the-summer-welcome-jewel-drishti-and-arnav",
          title: 'Three new research students will be joining us for the summer! Welcome: Jewel,...',
          description: "",
          section: "News",},{id: "projects-developing-ai-enabled-teamwork-support",
          title: 'Developing AI-Enabled Teamwork Support',
          description: "AI-enabled support for human-human teamwork",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-flexible-working-configuration",
          title: 'Flexible Working Configuration',
          description: "Studying how collaboration norms change in the modern workplace",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-human-ai-collaboration-in-subjective-contexts",
          title: 'Human-AI Collaboration in Subjective Contexts',
          description: "Uncovering the benefits and dangers of AI-supported subjective decision-making",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-promoting-student-persistence-in-ai",
          title: 'Promoting Student Persistence in AI',
          description: "Studying the factors that influence student pathways in AI careers",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%61%72%6F%6E.%66%65%72%67%75%73%6F%6E@%75%77%61%74%65%72%6C%6F%6F.%63%61", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=TXXTPIkAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
