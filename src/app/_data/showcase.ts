import { ShowcaseItem } from "@interfaces/showcase-item";

export const SHOWCASE: ShowcaseItem[] = [
	{
		title: "Semester Project 2",
		description: "Intuition is a fictional e-commerce website that sells high end mens clothing. The website is coded in vanilla HTML/CSS/JS and uses a separate API for its product data. It also features an administrator login, and allows authenticated users to add new products to the database.",
		image: "showcase/semester-project-2.jpg",
		github: "https://github.com/mikkelworld/semester-project-2",
		tools: ["html", "css", "js", "sass"]
	},
	{
		title: "JavaScript Frameworks CA",
		description: "An example e-commerce website created with Next.js. Products are pulled from a third party API and the website uses admin authentication through a WordPress API with JWT tokens. The site also has a contact form with form validation.",
		image: "showcase/js-frameworks-ca.jpg",
		github: "https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-mikkelworld",
		tools: ["nextjs", "sass", "html", "css", "js"]
	},
	{
		title: "Project Exam 2",
		description: "Holidaze is a fictional hotel database for people visiting Bergen, Norway. The website is built with Next.js and uses a Strapi API for storing hotels and for authentication. Users can submit messages to the site admins through a contact form, and inquiries to the hotel owners through a separate contact form on each individual hotel page.",
		image: "showcase/project-exam-2.jpg",
		github: "https://github.com/Noroff-FEU-Assignments/project-exam-2-mikkelworld",
		tools: ["nextjs", "sass", "html", "css", "js"]
	}
];