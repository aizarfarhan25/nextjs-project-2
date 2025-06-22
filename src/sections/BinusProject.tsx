import dietio from "@/assets/images/dietio.png";
import plantpedia from "@/assets/images/plantpedia.png";
import watchesdealer from "@/assets/images/watchesdealer.png";
import laporaja from "@/assets/images/laporaja.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { type Project } from "./Projects";
import { ProjectDialog } from "@/components/ui/ProjectDialog";

export const binusProjects: Project[] = [
  {
    company: "BINUS University",
    year: "2022",
    title: "Dietio",
    results: [{ title: "UI/UX Design" }, { title: "Mobile App Design" }],
    link: "https://www.figma.com/design/HwF2bGhMLWMI7WCcgfDwAF/UAP-UI_EX?node-id=0-1&t=PXx7HNy8IFzPMPW3-1",
    image: dietio,
    projectDetail: {
      overview: "Dietio is a user-friendly health and wellness mobile application designed to help users track their nutrition, monitor progress, and connect with a supportive community. Recognizing that managing a diet can be complex and often isolating, Dietio provides an all-in-one platform to empower users. The app's core mission is to make healthy living accessible and encouraging by combining practical tools with community support, helping users to not only track their goals but also stay motivated along the way.",
      features: [
        "Intuitive Calorie & Nutrition Tracking: Users can easily log their daily meals by searching from a food database. The app automatically calculates total calorie intake and provides a clear breakdown of macronutrients (carbohydrates, protein, etc.) to help users understand their eating habits.",
        "Personalized Meal Catering: A standout feature that offers tailored meal plans from a catering service. The menu is personalized based on the user's unique dietary profile, preferences, and health goals, taking the guesswork out of eating right.",
        "Visual Progress Monitoring: Users can track their body weight and other metrics over time. The data is presented in easy-to-read charts and graphs, allowing users to visually see their progress and make informed adjustments.",
        "Community Support Threads: A built-in social feed where users can share tips, post their diet successes, ask questions, and find motivation from others. This feature fosters a sense of community and shared experience."
      ],
      role: {
        title: "UI/UX Designer",
        responsibilities: [
          "User Flow & Wireframing: Defining the app's structure and mapping out core user journeys (like the food logging process). I then created low-fidelity wireframes to establish the screen layouts and information architecture.",
          "High-Fidelity UI Design: Designing all screens of the application with a focus on creating a clean aesthetic, intuitive navigation, and a consistent visual language that matched the app's theme.",
          "Component-Based System: Creating a system of reusable components within Figma (such as buttons, input fields, and cards) to ensure design consistency across the application.",
          "Interactive Prototyping: Building a clickable, high-fidelity prototype to simulate the final user experience and demonstrate the app's core functionalities."
        ]
      },
      technologies: ["Figma", "Component-Based Design", "User Flow Diagramming", "Prototyping", "UI/UX Design"]
    }
  },
  {
    company: "BINUS University",
    year: "2022",
    title: "PlantPedia",
    results: [{ title: "UI/UX Design" }, { title: "Mobile App Design" }],
    link: "https://www.figma.com/design/fOSHgoEUwROZaGEnskjW4r/Final-Project-UI-UX?node-id=0-1&t=7Gx9WZc8R15JkE3v-1",
    image: plantpedia,
    projectDetail: {
      overview: "PlantPedia is a mobile app concept designed as an essential companion for all plant enthusiasts, from beginners to seasoned experts. The goal is to nurture curiosity and deepen knowledge by providing powerful tools to identify, learn about, and engage with the world of plants. The app transforms plant care from a hobby into a fun, interactive, and educational experience.",
      features: [
        "AI-Powered Plant Identification: A smart 'Scan' feature allows users to identify an unknown plant simply by taking a photo. The app analyzes the image and provides detailed information about the species.",
        "Extensive Plant Database: A searchable encyclopedia of plants, neatly organized by category. Each plant has a detailed page covering its origin, characteristics, and care instructions.",
        "Gamified Learning Quizzes: An interactive quiz feature with a competitive leaderboard helps users test their botanical knowledge in a fun and engaging way, encouraging learning through gamification.",
        "In-Depth Articles & Community Discussion: A dedicated section for articles on various topics like plant care tips and gardening trends, complete with a comment section for community discussion."
      ],
      role: {
        title: "UI/UX Designer",
        responsibilities: [
          "User Flow & Wireframing: Defining the app's structure and mapping out core user journeys (like the plant scanning flow). I then created low-fidelity wireframes to establish the screen layouts and information architecture.",
          "High-Fidelity UI Design: Designing all screens of the application with a focus on creating a clean aesthetic, intuitive navigation, and a consistent visual language that matched the app's theme.",
          "Component-Based System: Creating a system of reusable components within Figma (such as buttons, input fields, and cards) to ensure design consistency across the application.",
          "Interactive Prototyping: Building a clickable, high-fidelity prototype to simulate the final user experience and demonstrate the app's core functionalities."
        ]
      },
      technologies: ["Figma", "Component-Based Design", "User Flow Diagramming", "Prototyping", "UI/UX Design"]
    }
  },
  // {
  //   company: "BINUS University",
  //   year: "2023",
  //   title: "Watches Dealer",
  //   results: [{ title: "Java Application" }, { title: "Database Management" }],
  //   link: "https://binusianorg-my.sharepoint.com/personal/andi_farhan_binus_ac_id/_layouts/15/onedrive.aspx?id=/personal/andi_farhan_binus_ac_id/Documents/-%20FILE%20PROJECT%20%20(PORTFOLIO)%20-/BAD%20PROJECT&ga=1",
  //   image: watchesdealer,
  // },
  {
    company: "BINUS University",
    year: "2023",
    title: "LaporAja",
    results: [{ title: "UI/UX Design" }, { title: "Mobile App Design" }],
    link: "https://www.figma.com/design/FIUgohVL7E5eeFp9V2X5cV/ABAD-PROJECT?node-id=0-1&t=2vQHwG4mWsbfJfYK-1",
    image: laporaja,
    projectDetail: {
      overview: "LaporAja is a mobile app concept designed to help people easily report incidents to local authorities, making our communities safer. It acts as a simple and trustworthy bridge between citizens and local government services. The main goal was to create an app so easy to use that anyone, regardless of their technical skills, could feel confident making a report and trust that it would be handled properly.",
      features: [
        "Easy Reporting Process: Quickly file a report with just a few taps. Users can choose the type of incident, add a description, and even attach photos as proof directly from their phone.",
        "Track Your Report's Status: No more wondering what happened to your report. A 'History' page lets you see the status of every report you've made, from 'Received' to 'Completed', so you're always in the loop.",
        "Find Help Nearby: The app includes a helpful map showing the closest police stations, hospitals, and fire departments, with their contact details ready when you need them most.",
        "Emergency Call Button: For truly urgent matters, a large, easy-to-press emergency button is always accessible within the app to connect you to help instantly.",
        "Stay Informed with Local News: A 'News' section provides verified updates and safety announcements directly from local authorities, helping everyone in the community stay safe and informed."
      ],
      role: {
        title: "UI/UX Designer",
        responsibilities: [
          "Mapping the User's Journey: I mapped out every step a user would take inside the app—from signing up to successfully submitting a report—to ensure everything felt logical and straightforward.",
          "Creating the Visual Design (UI): I designed the look and feel of every screen, choosing colors, fonts, and icons that made the app appear professional and trustworthy, yet friendly to use.",
          "Building an Interactive Prototype: I connected all the screen designs into a clickable prototype. This helped simulate how the app would actually work and was useful for testing and presentations."
        ]
      },
      technologies: ["Figma", "Component-Based Design", "User Flow Mapping", "Prototyping", "UI/UX Design"]
    }
  },
];

export const BinusProject = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="university projects gallery"
          title="University Projects"
          description="In this section, you will find an overview of my projects during my time at Bina Nusantara University."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {binusProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-yellow-300 to-amber-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-beni font-semibold text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50 "
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                        <span>Visit Documentation</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                    {project.projectDetail && (
                      <ProjectDialog title={project.title} projectDetail={project.projectDetail} />
                    )}
                  </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 rounded-tl-xl rounded-tr-xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
