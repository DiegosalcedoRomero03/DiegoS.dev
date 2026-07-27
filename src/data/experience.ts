export interface Experience {
    period: string;
    role: string;
    company: string;
    location: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
}

export const experience = [
    {
        period: "Nov 2023 - Jun 2024",
        role: "Software Developer Intern",
        company: "Grupo OET",
        location: "Bógota, Colombia",
        description: "Supported the development and maintenance of a logistics management platform used by transport companies.",
        responsibilities: [
            "Developed and maintained modules using PHP and JavaScript.",
            "Created and optimized SQL quieries in MySQL.",
            "Improved PDF generation and reporting features.",
            "Fixed bugs and implemented new funcionality."
        ],
        technologies: [
            "PHP",
            "JavaScript",
            "MySQL",
            "HTML",
            "CSS",
            "GIT",
        ]
    },
    {
        period: "Jun 2024 - Present",
        role: "Freelance Software Developer",
        company: "Self-Employed",
        location: "Sahagún, Colombia",
        description: "Design and development of custom web applications for inventory management, vehicle inspection, and business process automotion.",
        responsibilities: [
        "Built inventory management systems for motorcycle spare parts workshops.",
        "Developed web applications for vehicle inspection and appraisal process management.",
        "Designed and implemented RESTful APIs for communication between frontend and backend services.",
        "Generated dynamic PDF reports for sales, inventory, settlements, and inspection records.",
        "Integrated payment gateways such as Bold into client websites.",
        "Implemented automated email notifications and reporting workflows.",
        "Designed dashboards and data visualizations using charting libraries.",
        "Collaborated with clients to gather requirements and deliver tailored software solutions."
        ],
        technologies: [
        "Laravel",
        "PHP",
        "MySQL",
        "React",
        "Node.js",
        "JavaScript",
        "Git",
        "REST API",
        "HTML",
        "CSS"
        ]
    },
]