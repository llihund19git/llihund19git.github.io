from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)


OUTPUT = Path("output/pdf/Dunhill_Dimaapi_Senior_Backend_Developer_Public_CV.pdf")
PUBLISHED_OUTPUT = Path("Dunhill_Dimaapi_Senior_Backend_Developer_CV.pdf")
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

PAGE_WIDTH, _ = LETTER
NAVY = colors.HexColor("#16324F")
TEAL = colors.HexColor("#007C83")
TEXT = colors.HexColor("#1F2933")
MUTED = colors.HexColor("#53606D")
RULE = colors.HexColor("#D8E2E8")


class CVDocument(BaseDocTemplate):
    def __init__(self, filename: str):
        super().__init__(
            filename,
            pagesize=LETTER,
            leftMargin=0.58 * inch,
            rightMargin=0.58 * inch,
            topMargin=0.42 * inch,
            bottomMargin=0.42 * inch,
            title="Dunhill Dimaapi Senior Backend Developer CV",
            author="Dunhill Dimaapi",
            subject="Public portfolio CV for senior backend and full-stack developer roles",
            creator="Dunhill Dimaapi",
        )
        frame = Frame(
            self.leftMargin,
            self.bottomMargin,
            self.width,
            self.height,
            id="content",
            leftPadding=0,
            rightPadding=0,
            topPadding=0,
            bottomPadding=0,
        )
        self.addPageTemplates(PageTemplate(id="main", frames=[frame], onPage=self._footer))

    def _footer(self, canvas, document):
        canvas.saveState()
        canvas.setStrokeColor(RULE)
        canvas.setLineWidth(0.5)
        canvas.line(self.leftMargin, 0.29 * inch, PAGE_WIDTH - self.rightMargin, 0.29 * inch)
        canvas.setFont("Helvetica", 7.4)
        canvas.setFillColor(MUTED)
        canvas.drawString(self.leftMargin, 0.15 * inch, "Dunhill Dimaapi | Senior Backend Developer")
        canvas.drawRightString(PAGE_WIDTH - self.rightMargin, 0.15 * inch, f"Page {document.page}")
        canvas.restoreState()


styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=20,
    leading=22,
    textColor=NAVY,
    alignment=TA_CENTER,
    spaceAfter=2,
)

headline_style = ParagraphStyle(
    "Headline",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10.8,
    leading=13,
    textColor=TEAL,
    alignment=TA_CENTER,
    spaceAfter=3,
)

contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=10.8,
    textColor=MUTED,
    alignment=TA_CENTER,
    spaceAfter=1,
)

availability_style = ParagraphStyle(
    "Availability",
    parent=contact_style,
    fontSize=8.1,
    leading=10.2,
    spaceAfter=5,
)

section_style = ParagraphStyle(
    "Section",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10.5,
    leading=12.5,
    textColor=TEAL,
    spaceBefore=4,
    spaceAfter=3,
)

body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.8,
    leading=11.2,
    textColor=TEXT,
    spaceAfter=1.5,
)

job_style = ParagraphStyle(
    "Job",
    parent=body_style,
    fontName="Helvetica-Bold",
    fontSize=9.2,
    leading=11.4,
    spaceBefore=3,
    spaceAfter=0.5,
)

meta_style = ParagraphStyle(
    "Meta",
    parent=body_style,
    fontName="Helvetica-Oblique",
    fontSize=8.2,
    leading=10.3,
    textColor=MUTED,
    spaceAfter=1.5,
)

bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=10,
    firstLineIndent=-6,
    bulletIndent=0,
    spaceAfter=1,
)

skills_style = ParagraphStyle(
    "Skills",
    parent=body_style,
    fontSize=8.45,
    leading=10.8,
    spaceAfter=1.2,
)

project_style = ParagraphStyle(
    "Project",
    parent=body_style,
    fontSize=8.55,
    leading=10.9,
    leftIndent=0,
    spaceAfter=1.4,
)


def section(title: str):
    return [Paragraph(title.upper(), section_style)]


def bullets(items: list[str]):
    return [Paragraph(item, bullet_style, bulletText="-") for item in items]


def job(role: str, dates: str, company: str, items: list[str]):
    return KeepTogether(
        [
            Paragraph(f"{role} | {dates}", job_style),
            Paragraph(company, meta_style),
            *bullets(items),
        ]
    )


story = [
    Paragraph("Dunhill Dimaapi", name_style),
    Paragraph("Senior Backend Developer | Senior Full-Stack Developer", headline_style),
    Paragraph(
        'Plaridel, Bulacan, Philippines | '
        '<link href="mailto:dunhilldimaapi@gmail.com" color="#53606D">dunhilldimaapi@gmail.com</link>',
        contact_style,
    ),
    Paragraph(
        '<link href="https://www.linkedin.com/in/llihund19/" color="#53606D">linkedin.com/in/llihund19</link> | '
        '<link href="https://github.com/llihund19git" color="#53606D">github.com/llihund19git</link> | '
        '<link href="https://llihund19git.github.io" color="#53606D">llihund19git.github.io</link>',
        contact_style,
    ),
    Paragraph(
        "Targeting on-site day-shift roles in Makati, Ortigas, Quezon City, or BGC | Available January 12, 2027",
        availability_style,
    ),
    *section("Professional Summary"),
    Paragraph(
        "Senior backend developer with 10+ years of commercial software-development experience across banking, web platforms, mobile "
        "applications, commerce, and content systems. Strong background in PHP, Laravel, JavaScript, Node.js, Express, REST APIs, and "
        "relational databases. Currently developing Node.js, Express, PostgreSQL, and Redis capabilities for a new online and mobile "
        "banking platform in development, QA, and UAT. Experienced in full-stack delivery, AWS-supported systems, automated testing, "
        "code review, mentoring, and direct stakeholder communication.",
        body_style,
    ),
    *section("Technical Skills"),
    Paragraph("<b>Backend:</b> PHP, Laravel, Node.js, Express, REST APIs, Axios, CodeIgniter, authentication, authorization, validation", skills_style),
    Paragraph("<b>Frontend and mobile:</b> JavaScript, React, React Native, TypeScript, HTML, CSS, Tailwind CSS, Material UI, Bootstrap, Alpine.js", skills_style),
    Paragraph("<b>Data:</b> MySQL, PostgreSQL, PL/pgSQL, MongoDB, Redis, Eloquent ORM, data modeling, migrations, query and workflow optimization", skills_style),
    Paragraph("<b>Cloud and delivery:</b> AWS EC2, RDS, S3, Lambda, API Gateway, Elastic Beanstalk, CodePipeline, Docker, Azure DevOps, Git, Linux, cPanel, Vercel", skills_style),
    Paragraph("<b>Quality and collaboration:</b> PHPUnit, Selenium, Jest, Postman, unit testing, code review, Jira, Agile, technical design, mentoring", skills_style),
    *section("Professional Experience"),
    job(
        "Software Developer",
        "January 2026 - Present",
        "H2 Software Consulting Services, Inc. | Deployed to Bank of Commerce, Inc.",
        [
            "Develop Node.js and Express REST APIs with PostgreSQL and PL/pgSQL changes for a new customer-facing online and mobile banking platform, including authentication, account information, transaction history, and bills payment.",
            "Translate Jira user stories into API designs and database adjustments, present the proposed approach for approval, and implement approximately 40-50 combined APIs, features, stories, database functions, fixes, and related work items.",
            "Integrate internally provided services through Axios, normalize and validate data from multiple sources, and use Redis through Docker to cache appropriate reference or database-derived data.",
            "Verify APIs with Postman, resolve defects across QA and UAT, maintain delivery status and estimates, and collaborate through Git and Azure DevOps workflows.",
            "Review code and mentor an Associate Application Engineer within a six-person team of three back-end and three front-end developers.",
        ],
    ),
    job(
        "Back-End Developer",
        "December 2023 - December 2025",
        "Hackazouk, Inc. (PH)",
        [
            "Built and maintained Laravel services, web and mobile APIs, data models, relationships, migrations, validation, and secure data-access workflows for products serving Japanese organizations.",
            "Delivered approximately 10 product features and completed additional refactoring, defect-resolution, database-workflow, and PHPUnit testing work.",
            "Supported Docker-based development and AWS delivery using EC2, RDS, S3, CodePipeline, and Elastic Beanstalk.",
            "Reviewed code, participated in Agile retrospectives, and guided developers when needed.",
        ],
    ),
    job(
        "Full-Stack Developer",
        "April 2023 - June 2025",
        "Independent Freelance Work | Concurrent engagement",
        [
            "Owned client work from discovery and requirements through implementation, deployment, support, and direct stakeholder communication.",
            "Delivered the DCSC Malolos website, membership portal, and event-management system using Laravel, Tailwind CSS, Alpine.js, MySQL, and cPanel; the system remains operational for approximately 2,000 members, including more than 1,000 active members.",
            "Built additional React and Laravel solutions and deployed applications through Vercel, cPanel, and GoDaddy.",
        ],
    ),
    PageBreak(),
    *section("Professional Experience Continued"),
    job(
        "Full-Stack Developer",
        "March 2021 - March 2023",
        "Creative Interlace Technologies OPC",
        [
            "Built React Native applications and Node.js and Express services using MongoDB, REST APIs, Google Maps services, geolocation, and real-time functionality.",
            "Supported AWS services including S3, EC2, Lambda, API Gateway, WebSocket APIs, and Elastic Beanstalk; prepared test builds through Google Play testing and Apple TestFlight.",
            "Translated supplied designs into reusable mobile interfaces and received the Most Improved Employee award in December 2022.",
        ],
    ),
    job(
        "Mid Web Developer",
        "June 2019 - March 2021",
        "WebFocus Solutions, Inc.",
        [
            "Created Laravel-based content-management systems that could be customized and extended with e-commerce capabilities using PHP, MySQL, JavaScript, jQuery, Bootstrap, and CKEditor.",
            "Integrated Paynamics, Ubiz, and PSE-related payment workflows and collaborated with developers, QA, and client stakeholders on defects, performance, and delivery support.",
        ],
    ),
    job(
        "Web Developer",
        "April 2016 - May 2019",
        "Anydecide Holdings Corp.",
        [
            "Built e-commerce, CMS, and data-driven web applications with PHP, CodeIgniter, Laravel, MySQL, responsive interfaces, and REST integrations.",
            "Maintained existing systems, communicated directly with clients, and used Python and Selenium for selected web-data automation work.",
        ],
    ),
    *section("Selected Projects"),
    Paragraph("<b>Official Alumni | Back-End Developer</b> - Developed Laravel features and database changes, added PHPUnit coverage, resolved defects, and supported Docker and AWS delivery for an alumni community platform.", project_style),
    Paragraph("<b>Roadr and Team Prospect | Full-Stack Developer</b> - Built React Native interfaces and Node.js and Express services with MongoDB, location services, real-time functionality, and AWS-supported infrastructure for US mobile products.", project_style),
    Paragraph("<b>St. Pauls Online | Back-End Developer</b> - Built Laravel commerce and content-management features, integrated CKEditor, media tools, and the Ubiz payment gateway, and supported testing and delivery.", project_style),
    *section("Community Leadership"),
    Paragraph("<b>Head, Commission on Social Communications | April 2022 - June 2025; November 2025 - Present</b>", job_style),
    Paragraph("St. James the Apostle Parish | Volunteer leadership", meta_style),
    *bullets(
        [
            "Lead a commission of five officers and 30 members across planning, standards, delegation, training, public communications, and coordination with parish stakeholders.",
            "Develop department heads and volunteers through mentoring, meetings, seminars, and guided responsibility; led the commission's Flores de Mayo 2026 initiative involving people, resources, fundraising, and shared delivery.",
        ]
    ),
    *section("Education and Professional Development"),
    Paragraph("<b>Bachelor of Science in Information Technology</b> | Bulacan State University, Malolos, Bulacan | 2012 - 2016", body_style),
    Paragraph("Candidate for Best Capstone Project for a Java-based Examination and Monitoring System", body_style),
    Paragraph("<b>Leadership training:</b> The Art of Coaching and Giving Feedback; Managing the Gen Y and Z Workforce | March 2026", body_style),
    Paragraph("<b>Languages:</b> English and Filipino", body_style),
    Spacer(1, 2),
]


document = CVDocument(str(OUTPUT))
document.build(story)
PUBLISHED_OUTPUT.write_bytes(OUTPUT.read_bytes())
print(f"Created {OUTPUT}")
print(f"Updated {PUBLISHED_OUTPUT}")
