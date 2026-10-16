import type { ImageMetadata } from 'astro';

import officialAlumni1 from '../../assets/img/portfolio/OA/1.jpg';
import officialAlumni2 from '../../assets/img/portfolio/OA/2.jpg';
import officialAlumni3 from '../../assets/img/portfolio/OA/3.jpg';
import dcsc1 from '../../assets/img/portfolio/DCSC/1.jpg';
import dcsc2 from '../../assets/img/portfolio/DCSC/2.jpg';
import dcsc3 from '../../assets/img/portfolio/DCSC/3.jpg';
import roadr1 from '../../assets/img/portfolio/Creativeinterlace/2.jpg';
import roadr2 from '../../assets/img/portfolio/Creativeinterlace/1.jpg';
import roadr3 from '../../assets/img/portfolio/Creativeinterlace/3.jpg';
import teamProspect1 from '../../assets/img/portfolio/Creativeinterlace/4.jpg';
import teamProspect2 from '../../assets/img/portfolio/Creativeinterlace/5.jpg';
import teamProspect3 from '../../assets/img/portfolio/Creativeinterlace/6.jpg';
import stPauls1 from '../../assets/img/portfolio/WebFocus/3.jpg';
import stPauls2 from '../../assets/img/portfolio/WebFocus/4.jpg';
import cms1 from '../../assets/img/portfolio/WebFocus/1.jpg';
import cms2 from '../../assets/img/portfolio/WebFocus/2.jpg';
import doreming1 from '../../assets/img/portfolio/Anydecide/3.jpg';
import doreming2 from '../../assets/img/portfolio/Anydecide/4.jpg';
import commerce1 from '../../assets/img/portfolio/Anydecide/1.jpg';
import commerce2 from '../../assets/img/portfolio/Anydecide/2.jpg';
import campNova1 from '../../assets/img/portfolio/CampNova/1.jpg';
import campNova2 from '../../assets/img/portfolio/CampNova/2.jpg';
import campNova3 from '../../assets/img/portfolio/CampNova/3.jpg';
import baljuna1 from '../../assets/img/portfolio/Baljuna/1.jpg';
import baljuna2 from '../../assets/img/portfolio/Baljuna/2.jpg';
import baljuna3 from '../../assets/img/portfolio/Baljuna/3.jpg';

export type Project = {
  slug: string;
  title: string;
  category: 'Web platform' | 'Mobile application' | 'E-commerce' | 'Content platform';
  role: string;
  client: string;
  summary: string;
  overview: string;
  contribution: string[];
  technologies: string[];
  cover: ImageMetadata;
  gallery: ImageMetadata[];
  url?: string;
  linkLabel?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'official-alumni',
    title: 'Official Alumni',
    category: 'Web platform',
    role: 'Back-End Developer',
    client: 'Japanese company',
    summary: 'A social platform connecting alumni communities through a reliable Laravel back end and AWS-based delivery pipeline.',
    overview: 'The product combines community features with a web and mobile experience. My work focused on the server-side systems that support product modules, data flows, quality checks, and cloud deployment.',
    contribution: [
      'Designed and developed back-end features and supporting database changes.',
      'Added PHPUnit coverage and resolved defects to improve reliability.',
      'Supported AWS deployments across EC2, Elastic Beanstalk, CodePipeline, and S3.',
      'Reviewed code and collaborated with the product team through retrospectives.',
    ],
    technologies: ['Laravel', 'PHPUnit', 'MySQL', 'Docker', 'AWS', 'Postman'],
    cover: officialAlumni1,
    gallery: [officialAlumni1, officialAlumni2, officialAlumni3],
    url: 'https://official-alumni.com/',
    linkLabel: 'Visit Official Alumni',
    featured: true,
  },
  {
    slug: 'dcsc-malolos',
    title: 'DCSC Malolos',
    category: 'Web platform',
    role: 'Full-Stack Developer',
    client: 'Freelance client',
    summary: 'A portal and event-management system that gives a community one place to publish, organize, and manage activities.',
    overview: 'This freelance engagement covered the full delivery cycle: clarifying requirements, shaping the interface, building the application, preparing hosting, and supporting the live system.',
    contribution: [
      'Built the portal and event-management workflows with Laravel.',
      'Created a responsive interface using Tailwind CSS and Alpine.js.',
      'Configured the database, cPanel hosting, and production deployment.',
      'Managed planning, client communication, delivery, and ongoing support.',
    ],
    technologies: ['Laravel', 'Tailwind CSS', 'Alpine.js', 'MySQL', 'cPanel', 'Git'],
    cover: dcsc1,
    gallery: [dcsc1, dcsc2, dcsc3],
    url: 'https://dcscmalolos.org/',
    linkLabel: 'Visit DCSC Malolos',
    featured: true,
  },
  {
    slug: 'roadr',
    title: 'Roadr',
    category: 'Mobile application',
    role: 'Full-Stack Developer',
    client: 'US company',
    summary: 'A roadside-assistance mobile application using location services to help drivers request and coordinate support.',
    overview: 'The application required a dependable mobile interface, location-aware workflows, back-end services, and cloud infrastructure working together as one product.',
    contribution: [
      'Developed mobile and server-side features across the MERN stack.',
      'Integrated geolocation, place autocomplete, and directions services.',
      'Supported AWS services including S3, EC2, Lambda, API Gateway, and Elastic Beanstalk.',
      'Translated supplied mobile designs into responsive React Native components.',
    ],
    technologies: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Google Maps APIs', 'AWS'],
    cover: roadr1,
    gallery: [roadr1, roadr2, roadr3],
    url: 'https://play.google.com/store/apps/details?id=com.roadr',
    linkLabel: 'View Roadr on Google Play',
    featured: true,
  },
  {
    slug: 'st-pauls-online',
    title: 'St. Pauls Online',
    category: 'E-commerce',
    role: 'Back-End Developer',
    client: 'Philippine company',
    summary: 'An e-commerce and content-management experience with catalog, editorial, and payment workflows.',
    overview: 'The project paired a public storefront with an internal content system. My role centered on Laravel development, content tooling, payment integration, testing, and deployment support.',
    contribution: [
      'Built Laravel features for commerce and content-management workflows.',
      'Integrated CKEditor, file-management tools, and the Ubiz payment gateway.',
      'Worked with MySQL data and supported testing with Selenium.',
      'Coordinated implementation with developers, QA, and client stakeholders.',
    ],
    technologies: ['Laravel', 'MySQL', 'jQuery', 'Bootstrap', 'Ubiz', 'Selenium'],
    cover: stPauls1,
    gallery: [stPauls1, stPauls2],
    url: 'https://www.stpauls.ph/',
    linkLabel: 'Visit St. Pauls Online',
    featured: true,
  },
  {
    slug: 'team-prospect',
    title: 'Team Prospect',
    category: 'Mobile application',
    role: 'Full-Stack Developer',
    client: 'US company',
    summary: 'A membership-platform application delivered with React Native, Node.js, MongoDB, and AWS services.',
    overview: 'This product brought member-facing mobile experiences and cloud-hosted services together in a single application. The work covered interface implementation, APIs, data, and release support.',
    contribution: [
      'Developed React Native screens and Node.js service functionality.',
      'Worked with MongoDB, Express, and location-aware features.',
      'Supported AWS infrastructure using S3, EC2, Lambda, API Gateway, and Elastic Beanstalk.',
      'Prepared and tested builds using Android Studio and Xcode.',
    ],
    technologies: ['React Native', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Geolocation'],
    cover: teamProspect1,
    gallery: [teamProspect1, teamProspect2, teamProspect3],
    url: 'https://play.google.com/store/apps/details?id=com.teamprospect',
    linkLabel: 'View Team Prospect on Google Play',
  },
  {
    slug: 'camp-nova',
    title: 'Camp Nova',
    category: 'E-commerce',
    role: 'Full-Stack Developer',
    client: 'Freelance client',
    summary: 'A responsive commerce experience built with React, Meteor, and Material UI.',
    overview: 'The project combined a modern storefront interface with full-stack functionality. I worked independently across planning, development, delivery, and client communication.',
    contribution: [
      'Built reusable React interfaces with Material UI.',
      'Developed application functionality using Meteor.',
      'Optimized components and plugins for a smoother user experience.',
      'Managed the engagement from planning through deployment and support.',
    ],
    technologies: ['React', 'Meteor', 'Material UI', 'JavaScript', 'Git'],
    cover: campNova1,
    gallery: [campNova1, campNova2, campNova3],
  },
  {
    slug: 'baljuna',
    title: 'Baljuna',
    category: 'Web platform',
    role: 'Front-End Developer',
    client: 'Freelance client',
    summary: 'A responsive front-end implementation translated from product designs into React and Material UI.',
    overview: 'The focus was a faithful, reusable interface implementation that could scale across screen sizes and remain straightforward for the wider team to maintain.',
    contribution: [
      'Converted supplied designs into reusable React components.',
      'Created responsive layouts and interface states with Material UI.',
      'Organized front-end code for clear iteration and handoff.',
      'Deployed the finished interface to Vercel.',
    ],
    technologies: ['React', 'Material UI', 'JavaScript', 'Vercel', 'Git'],
    cover: baljuna1,
    gallery: [baljuna1, baljuna2, baljuna3],
    url: 'https://baljuna.vercel.app/',
    linkLabel: 'Visit Baljuna',
  },
  {
    slug: 'enterprise-content-platform',
    title: 'Enterprise Content Platform',
    category: 'Content platform',
    role: 'Back-End Developer',
    client: 'Philippine company',
    summary: 'A private content-management platform built to give internal teams control over structured website content.',
    overview: 'The work centered on dependable publishing workflows, media handling, and a maintainable Laravel foundation for an internal content team.',
    contribution: [
      'Developed Laravel modules for content and media management.',
      'Integrated CKEditor and Laravel file-management tooling.',
      'Worked with MySQL, jQuery, and Bootstrap across the application.',
      'Supported QA, debugging, deployment, and ongoing maintenance.',
    ],
    technologies: ['Laravel', 'MySQL', 'CKEditor', 'jQuery', 'Bootstrap', 'Selenium'],
    cover: cms1,
    gallery: [cms1, cms2],
  },
  {
    slug: 'doreming-help-center',
    title: 'Doreming Help Center',
    category: 'Content platform',
    role: 'Back-End Developer',
    client: 'Japanese company',
    summary: 'A multilingual help center backed by a Laravel content-management workflow.',
    overview: 'The platform supports a structured library of support material. My contribution focused on content tooling, database work, and the back-end implementation behind the public help experience.',
    contribution: [
      'Developed content-management features with Laravel.',
      'Integrated CKEditor and file-management functionality.',
      'Worked with PostgreSQL, jQuery, and Bootstrap.',
      'Debugged and maintained the application through delivery.',
    ],
    technologies: ['Laravel', 'PostgreSQL', 'CKEditor', 'jQuery', 'Bootstrap', 'Git'],
    cover: doreming1,
    gallery: [doreming1, doreming2],
    url: 'https://help.doreming.com/en_in',
    linkLabel: 'Visit the Doreming Help Center',
  },
  {
    slug: 'private-commerce-platform',
    title: 'Private Commerce Platform',
    category: 'E-commerce',
    role: 'Back-End Developer',
    client: 'Japanese company',
    summary: 'A private e-commerce implementation built with CodeIgniter, MySQL, and a responsive Bootstrap interface.',
    overview: 'The engagement involved extending commerce functionality, working with existing application patterns, and supporting the product through debugging and delivery.',
    contribution: [
      'Developed server-side commerce functionality with CodeIgniter.',
      'Worked with MySQL data and REST API integrations.',
      'Supported the responsive interface built with jQuery and Bootstrap.',
      'Resolved defects and improved existing application code.',
    ],
    technologies: ['CodeIgniter', 'PHP', 'MySQL', 'jQuery', 'Bootstrap', 'REST APIs'],
    cover: commerce1,
    gallery: [commerce1, commerce2],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const experience = [
  {
    period: 'Jan 2026 — Present',
    role: 'Back-End Developer',
    company: 'H2 Software Consulting Services Inc. · Deployed to Bank of Commerce, Inc.',
    summary: 'Building and supporting secure back-end capabilities for online and mobile banking in a regulated production environment.',
    highlights: [
      'Develop and maintain back-end features, APIs, database workflows, and Redis-backed application functionality.',
      'Investigate application defects, database issues, and system reliability concerns across production banking services.',
      'Apply secure coding practices across authentication, authorization, validation, APIs, and sensitive data access.',
      'Implement database changes and unit tests, review code, mentor developers, and support controlled releases through Azure DevOps.',
    ],
  },
  {
    period: 'Dec 2023 — Dec 2025',
    role: 'Back-End Developer',
    company: 'Hackazouk, Inc. (PH)',
    summary: 'Built and maintained Laravel services and APIs, data models, tests, and AWS-hosted production workflows.',
    highlights: [
      'Developed Laravel, MySQL, and Docker-based services and REST APIs for web and mobile product features.',
      'Implemented Eloquent models, relationships, migrations, validation, and secure data-access patterns.',
      'Supported deployments across AWS EC2, RDS, S3, CodePipeline, and Elastic Beanstalk.',
      'Wrote PHPUnit tests, reviewed code, optimized database workflows, and collaborated through Agile delivery.',
    ],
  },
  {
    period: 'Apr 2023 — Jun 2025',
    role: 'Full-Stack Developer',
    company: 'Independent freelance work',
    summary: 'Owning responsive web projects from client discovery and planning through implementation, deployment, and support.',
    highlights: [
      'Built React and Laravel solutions using reusable interfaces, REST integrations, and Eloquent ORM.',
      'Managed requirements, technical planning, client communication, implementation, launch, and post-release support.',
      'Deployed and maintained client applications through Vercel, cPanel, and GoDaddy.',
    ],
  },
  {
    period: 'Mar 2021 — Mar 2023',
    role: 'Full-Stack Developer',
    company: 'Creative Interlace Technologies OPC',
    summary: 'Delivered React Native products and MERN services supported by AWS infrastructure and Google APIs.',
    highlights: [
      'Built social and navigation mobile applications with React Native, Node.js, Express, and MongoDB.',
      'Integrated APIs, location-aware workflows, and real-time messaging through API Gateway WebSocket APIs.',
      'Implemented cloud-supported features using AWS S3, EC2, Lambda, API Gateway, and Elastic Beanstalk.',
    ],
  },
  {
    period: 'Jun 2019 — Mar 2021',
    role: 'Mid Web Developer',
    company: 'WebFocus Solutions, Inc.',
    summary: 'Built CMS and commerce platforms, integrated payment gateways, and collaborated across development, QA, and client teams.',
    highlights: [
      'Developed Laravel-based content-management and e-commerce platforms using MySQL, Bootstrap, and jQuery.',
      'Integrated Paynamics, Ubiz, and PSE payment services and supported production deployments.',
      'Diagnosed defects and improved application performance, interface behavior, and production reliability.',
    ],
  },
  {
    period: 'Apr 2016 — May 2019',
    role: 'Web Developer',
    company: 'Anydecide Holdings Corp.',
    summary: 'Developed PHP websites, converted visual designs into responsive pages, integrated APIs, and improved existing systems.',
    highlights: [
      'Built content-management and e-commerce applications with PHP, CodeIgniter, Laravel, and MySQL.',
      'Developed REST integrations and data-driven features for public and internal web applications.',
      'Automated web data collection using Python and Selenium and collaborated directly with clients on delivery decisions.',
    ],
  },
];

export const communityLeadership = {
  role: 'Head, Commission on Social Communications',
  organization: 'St. James the Apostle Parish · Plaridel, Bulacan',
  period: 'Current community leadership role',
  summary:
    'Leading and mentoring the parish communications ministry with a focus on clear coordination, responsible communication, collaborative service, and dependable execution.',
  strengths: [
    'Team leadership and volunteer mentoring',
    'Stakeholder communication and coordination',
    'Planning and delivery of communications initiatives',
    'Service-minded leadership under real community needs',
  ],
};

export const workingPrinciples = [
  {
    label: 'Own the outcome',
    summary: 'Take work from requirements and design through implementation, release, troubleshooting, and support.',
  },
  {
    label: 'Build securely',
    summary: 'Treat validation, access control, sensitive data, testing, and maintainability as part of the feature itself.',
  },
  {
    label: 'Raise the team',
    summary: 'Use code reviews, mentoring, documentation, and clear conversations to improve shared engineering quality.',
  },
  {
    label: 'Keep improving',
    summary: 'Use practical automation and AI-assisted tools responsibly while independently validating every result.',
  },
];

export const capabilityGroups = [
  {
    label: 'Back end & APIs',
    summary: 'Secure application logic, integrations, data access, banking workflows, content systems, and payment services.',
    skills: ['PHP', 'Laravel', 'Node.js', 'Express', 'REST APIs', 'WebSockets', 'Eloquent ORM'],
  },
  {
    label: 'Front end & mobile',
    summary: 'Responsive interfaces for browsers and native mobile experiences built from real product designs.',
    skills: ['React', 'React Native', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Material UI'],
  },
  {
    label: 'Data & cloud',
    summary: 'Practical data design, production hosting, and cloud services that support dependable product delivery.',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Azure DevOps', 'Docker', 'Linux'],
  },
  {
    label: 'Delivery & quality',
    summary: 'End-to-end ownership from discovery and code review through secure testing, deployment, mentoring, and support.',
    skills: ['PHPUnit', 'Unit testing', 'Secure coding', 'GitHub', 'CI/CD', 'Agile', 'Code review', 'Mentoring'],
  },
];
