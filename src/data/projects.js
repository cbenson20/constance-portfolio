// ─────────────────────────────────────────────
// FEATURED PROJECTS
// To add a screenshot: set image: '/screenshots/filename.png'
// and place the file in public/screenshots/
// ─────────────────────────────────────────────

export const featuredProjects = [
  {
    id: "thrive-wellness",
    title: "Thrive Wellness Mobile App",
    problem:
      "Users needed a practical mobile wellness tool to build routines, track habits, and reflect on their progress.",
    role: "Contributed to user flow planning, app screen structure, backend and API planning, and database design as part of a real client-based project.",
    description:
      "Built a mobile wellness app experience focused on routines, habit tracking, reflection, and user onboarding. Delivered as a team capstone for a real client.",
    tech: [
      "React Native",
      "Expo",
      "Express",
      "Supabase",
      "Prisma",
      "PostgreSQL",
      "REST API",
    ],
    focus:
      "Mobile app structure · Onboarding flow · Backend/API planning · Database design · Client-based teamwork",
    image: null,
    privateProject: true,
    primaryAction: "caseStudy",
    links: {},
    hasCaseStudy: true,
    caseStudy: {
      overview:
        "A wellness application built for a real client as part of a team capstone project. The app supports users in building routines, tracking wellness habits, and reflecting on their progress over time.",
      problem:
        "The client needed a practical digital wellness tool that could help users build consistency around their health routines. Existing tools were either too complex or did not support the specific habits the client wanted to address.",
      role: "I contributed to user flow design, onboarding structure, backend planning, API endpoint design, database schema design, and client presentation materials. I worked collaboratively with my team throughout the planning and development phases.",
      tools: [
        "React Native",
        "Expo",
        "Express",
        "Supabase",
        "Prisma",
        "PostgreSQL",
        "REST API",
        "Git",
        "GitHub",
      ],
      keyFeatures: [
        "User onboarding flow with routine setup",
        "Habit tracking with structured database storage",
        "Progress reflection and review features",
        "REST API design supporting the application data layer",
        "Database schema for users, habits, and progress records",
      ],
      technicalFocus:
        "The technical work focused on designing a clean database schema using PostgreSQL via Supabase and Prisma ORM, structuring REST API endpoints to support the frontend, and contributing to the Express backend. I also supported the planning of the onboarding flow and user experience.",
      learned:
        "Working on a real client project reinforced the importance of communication, iteration, and aligning technical decisions with user needs. I strengthened my understanding of backend planning, database design, and collaborative development workflows.",
    },
  },
  {
    id: "wedding-website",
    title: "Full-Stack Wedding Website",
    problem:
      "A couple needed a mobile-friendly wedding website to share event details, collect RSVPs, display guest messages, manage photos, support gift claims, and provide an admin dashboard.",
    role: "Built the full-stack site from scratch, public pages, RSVP system, guestbook, gallery, gift claim flow, admin dashboard, database, authentication, storage, and Vercel deployment.",
    description:
      "A live, deployed full-stack wedding website used by real guests. Features RSVP submission, guestbook messages, photo gallery, guest photo uploads, gift claiming, bilingual support, animated pages, and a protected admin dashboard.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Supabase Storage",
      "Vercel",
    ],
    focus:
      "Full-stack development · Database design · Supabase integration · Authentication · File storage · Admin dashboard · Real-world deployment",
    image: '/screenshots/wedding-hero.png',
    primaryAction: "caseStudy",
    links: {
      project: "https://goodness-and-larry.vercel.app",
      github: "https://github.com/cbenson20/nigerian-wedding",
    },
    hasCaseStudy: true,
    caseStudy: {
      overview:
        "A full-stack wedding website built and deployed for a real couple. The site is live, used by actual guests, and includes interactive features such as RSVP submission, a guestbook, photo gallery, guest uploads, a gift wishlist, bilingual content, and a protected admin dashboard for managing all wedding data.",
      problem:
        "The couple needed more than a basic event page. They needed a complete digital experience where guests could RSVP, leave messages, view and upload photos, and claim gifts — all with an admin system to manage everything in one place.",
      role: "I designed and built the entire application from scratch, including all public-facing pages, the RSVP and guestbook systems, the photo gallery and upload flow, the gift claim feature, bilingual English/Igbo support, page animations, the protected admin dashboard, database structure, Supabase authentication, file storage integration, and deployment to Vercel.",
      tools: [
        "Next.js 14",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Supabase",
        "PostgreSQL",
        "Supabase Auth",
        "Supabase Storage",
        "Vercel",
        "Git",
        "GitHub",
      ],
      keyFeatures: [
        "Live deployed site used by real guests",
        "RSVP form with Supabase database storage",
        "Guestbook with stored messages",
        "Photo gallery with admin-managed content",
        "Guest photo upload with Supabase Storage",
        "Gift wishlist and claim flow",
        "Protected admin dashboard",
        "English and Igbo bilingual support",
        "Countdown timer and animated wedding pages",
        "Responsive mobile-first design",
      ],
      technicalFocus:
        "The project used Next.js 14 with TypeScript for a structured, type-safe codebase. Supabase handled the PostgreSQL database, authentication, and file storage. Tailwind CSS provided responsive styling and Framer Motion handled page and component animations. RSVPs, guestbook messages, photo uploads, and gift claims all connect to Supabase and are manageable through the admin dashboard.",
      additionalSections: [
        {
          heading: "Main Pages Built",
          content: [
            "Home — animated landing with wedding details and countdown",
            "Our Story — couple background and relationship timeline",
            "Events — ceremony and reception information",
            "RSVP — form connected to database",
            "Guestbook — message submission and display",
            "Gallery — photo display with upload support",
            "Gifts — wishlist with claim functionality",
            "Admin Dashboard — protected management interface",
          ],
        },
        {
          heading: "Database & Storage",
          content:
            "PostgreSQL via Supabase stores RSVPs, guestbook messages, gift claims, and photo metadata. Supabase Storage handles guest photo uploads. Row-level security policies were applied to protect data access.",
        },
        {
          heading: "Admin Dashboard",
          content:
            "A protected dashboard accessible only to authorized users allows management of RSVPs, guestbook entries, gallery photos, and gift claims. Authentication is handled through Supabase Auth. Admin routes are secured and not accessible to general visitors.",
        },
        {
          heading: "Privacy & Security",
          content:
            "Guest RSVP and personal data are stored securely in Supabase with access restricted to the admin. The admin dashboard is protected by authentication. No sensitive guest data or private admin credentials are exposed publicly.",
        },
      ],
      learned:
        "This project strengthened my full-stack development skills across a production deployment. I gained hands-on experience with Next.js 14, Supabase Auth, Supabase Storage, row-level security, and real-world deployment on Vercel. Building for actual users reinforced the importance of reliability, clear UX, and protecting user data.",
      screenshots: [
        { src: '/screenshots/wedding-hero.png', alt: 'Home page — animated wedding landing' },
        { src: '/screenshots/wedding-RSVP.png', alt: 'RSVP page — form connected to Supabase' },
        { src: '/screenshots/wedding-guestbook.png', alt: 'Guestbook page — stored guest messages' },
        { src: '/screenshots/wedding-admin-demo.png', alt: 'Admin dashboard — protected overview with live wedding data' },
      ],
    },
  },
  {
    id: "ecommerce-website",
    title: "E-commerce Website",
    problem:
      "A building materials business needed a structured e-commerce website to display products, organize categories, and support product details.",
    role: "Developed the Ruby on Rails application structure, including routes, views, controllers, database-backed product content, and user-facing pages.",
    description:
      "Developed a Ruby on Rails e-commerce website for a building materials business. The application was designed to display products, organize categories, support product details, and create a simple shopping experience for customers.",
    tech: [
      "Ruby on Rails",
      "Ruby",
      "MVC",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "E-commerce",
    ],
    focus:
      "MVC structure · Database-backed content · Routing · Product organization · Web application development",
    image: null, // Add: '/screenshots/ecommerce.png'
    primaryAction: "project",
    links: {
      project: "#", // Replace with live project URL
    },
    hasCaseStudy: true,
    caseStudy: {
      overview:
        "A Ruby on Rails e-commerce application built for a building materials business. The application provides a structured product catalogue, category organization, and product detail pages to support the business's online presence.",
      problem:
        "The business needed a structured digital platform to display their product range, organize items by category, and give customers access to product details. A reliable, organized, database-backed system was needed to manage content efficiently.",
      role: "I developed the full Ruby on Rails application structure including routes, controllers, views, and database-backed product content. I designed the data models, implemented category and product organization, and built the user-facing pages.",
      tools: [
        "Ruby on Rails",
        "Ruby",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL Database",
        "MVC Architecture",
        "Git",
      ],
      keyFeatures: [
        "Product catalogue with category organization",
        "Product detail pages with structured content",
        "MVC architecture with clean RESTful routing",
        "Database-backed product and category management",
        "Responsive user-facing pages",
      ],
      technicalFocus:
        "The project focused on applying the MVC pattern using Ruby on Rails: designing models and database migrations for products and categories, building RESTful routes and controllers, and creating clean views to present product information. Database relationships were used to connect categories and products efficiently.",
      learned:
        "This project deepened my understanding of MVC architecture, Rails conventions, database-backed content management, and the process of structuring a web application for a real business use case. I also improved my ability to organize routes and controllers for a readable, maintainable codebase.",
    },
  },
  {
    id: "api-dashboard",
    title: "API Integration Dashboard",
    problem:
      "A dashboard needed to connect to external APIs and display data in a clean, reliable, and usable interface.",
    role: "Built the dashboard interface, handled API integration, supported data flow, and organized reusable UI structure.",
    description:
      "Built a responsive dashboard that integrates REST and GraphQL APIs to display data in a clean and usable interface. The project focused on API integration, data handling, reusable UI structure, and improving the reliability of displayed information.",
    tech: ["React", "TypeScript", "REST API", "GraphQL"],
    focus:
      "API integration · Data handling · Dashboard UI · Reusable components",
    image: null, // Add: '/screenshots/api-dashboard.png'
    primaryAction: "project",
    links: {
      project: "#", // Replace with live project URL
      github: "#", // Replace with your GitHub repo URL
    },
    hasCaseStudy: false,
  },
];

// ─────────────────────────────────────────────
// MORE PROJECTS
// ─────────────────────────────────────────────

export const moreProjects = [
  {
    id: "erp-web-app",
    title: "Full-Stack ERP Web Application",
    problem:
      "A business needed a centralized system to manage products, inventory, orders, users, and internal operations with role-based access and a clear dashboard interface.",
    role: "Built the full-stack application including REST APIs, database schemas, authentication flow, and dashboard interfaces for business operations.",
    description:
      "Built a full-stack ERP-style web application to manage products, inventory, orders, users, and internal business workflows. Focused on backend structure, REST API design, database organization, authentication, and dashboard usability.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "REST API",
      "PostgreSQL",
      "Authentication",
    ],
    focus:
      "Full-stack development · Backend APIs · Database schema · Authentication · Dashboard UI",
    image: null,
    privateProject: true,
    privateLabel: "Private Internal Project",
    privateNote:
      "Preview withheld for confidentiality. Project summary available on request.",
    links: {},
    hasCaseStudy: false,
  },
  {
    id: "ai-chat-assistant",
    title: "AI Chat Assistant",
    problem:
      "An internal team needed a conversational assistant to support day-to-day operations and improve workflow communication.",
    role: "Built the backend chatbot flow using Python, Flask, and the OpenAI API, with integration support for Microsoft Teams.",
    description:
      "Built an internal AI chat assistant using Python, Flask, and the OpenAI API, with integration support for Microsoft Teams. Focused on conversational support, API handling, backend routing, and workflow communication.",
    tech: ["Python", "Flask", "OpenAI API", "Microsoft Teams Integration"],
    focus:
      "AI API integration · Backend development · Chatbot flow · Workflow support",
    image: null,
    links: {
      github: "#",
    },
    hasCaseStudy: false,
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    problem:
      "I needed a professional online presence to showcase my projects, skills, resume, experience, and contact information.",
    role: "Designed and built the React portfolio structure, reusable components, project sections, responsive layout, and contact flow.",
    description:
      "Built a responsive React portfolio website to showcase my projects, technical skills, resume, experience, and contact information. The project focuses on clean layout, accessibility, responsive design, reusable components, and professional presentation.",
    tech: ["React", "Vite", "JavaScript", "CSS", "Responsive Design"],
    focus:
      "React components · Responsive layout · Accessibility · Professional presentation",
    image: '/screenshots/portfolio-hero.png',
    links: {
      project: "https://constance-portfolio.vercel.app/",
      github: "https://github.com/cbenson20/constance-portfolio",
    },
    hasCaseStudy: false,
  },
];
