import antiRacism from "@/assets/images/CB-1.jpg";
import wayang from "@/assets/images/CB-2.jpg";
import agama from "@/assets/images/CB-3.jpg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { type Project } from "./Projects";

export const organizationsProjects: Project[] = [
  {
    company: "TFI (BINUS University)",
    year: "2022",
    title: "Anti-Racism Campaign",
    results: [{ title: "Social Activity" }, { title: "Volunteer" }],
    link: "https://youtu.be/yCTYdQJyemw",
    image: antiRacism,
    projectDetail: {
      overview: "The Anti-Racism Campaign was an educational initiative organized by TFI (BINUS University) aimed at increasing public awareness about the high rates of racism that still frequently occur in Indonesia. The project focused on educating participants about the dangers of racism and promoting tolerance and respect among different racial and ethnic groups in Indonesian society.",
      features: [
        "Educational workshops on racial and ethnic diversity",
        "Interactive discussions on the definition and background of racism",
        "Analysis of racism causes including family doctrines and historical stereotypes",
        "Exploration of policies that appear to favor certain races",
        "Discussion on the consequences of racism including discrimination and conflicts"
      ],
      role: {
        title: "Event Volunteer and Contributor",
        responsibilities: [
          "Participated in the preparation of educational materials about racism awareness",
          "Contributed to discussions on how to prevent racism through accepting differences",
          "Helped develop intellectual community capacity to process information correctly",
          "Assisted in creating materials about choosing good and accurate information",
          "Supported documentation and reporting of the campaign activities"
        ]
      },
      technologies: [
        "Microsoft PowerPoint",
        "Google Docs",
        "Video Editing Tools",
        "Social Media Platforms"
      ]
    }
  },
  {
    company: "TFI (BINUS University)",
    year: "2023",
    title: "Wayang Cultural Socialization",
    results: [{ title: "Social Activity" }, { title: "Volunteer" }],
    link: "https://drive.google.com/file/d/1PS0GoM5vb5TXaBQKtrmZn7-649F04e8k/view?usp=sharing",
    image: wayang,
    projectDetail: {
      overview: "The Wayang Cultural Socialization was an educational initiative organized by TFI (BINUS University) aimed at preserving and promoting traditional Indonesian wayang (puppet) culture. The project focused on educating participants about the history, types, elements, values, and challenges in preserving wayang art in modern Indonesian society.",
      features: [
        "Educational presentations on the history and origins of wayang",
        "Detailed explanations of different wayang types and their characteristics",
        "Analysis of elements in wayang performances and their cultural significance",
        "Discussion of values embedded in wayang stories and their relevance to modern life",
        "Exploration of challenges in preserving wayang art in contemporary society",
        "Interactive Q&A sessions and quiz about wayang knowledge"
      ],
      role: {
        title: "Event Volunteer and Contributor",
        responsibilities: [
          "Prepared the event by determining audience, time, venue, and necessary equipment",
          "Developed educational materials including PowerPoint presentations about wayang history and types",
          "Prepared videos showcasing the diminishing popularity of wayang culture in Indonesia",
          "Delivered presentations explaining wayang concepts, types, elements, and cultural significance",
          "Facilitated interactive discussions and quiz sessions with the audience",
          "Created a 4-5 minute video report and written documentation of the socialization activity"
        ]
      },
      technologies: [
        "Microsoft PowerPoint",
        "Google Docs",
        "Video Editing Tools",
        "Quizizz"
      ]
    }
  },
  {
    company: "TFI (BINUS University)",
    year: "2024",
    title: "Socialization of Religious Moderation",
    results: [{ title: "Social Activity" }, { title: "Volunteer" }],
    link: "https://docs.google.com/document/d/1e09XcDP7n2JQE4iwijbX8Hhyqsei1a1a/edit?usp=sharing&ouid=117791301637141992106&rtpof=true&sd=true",
    image: agama,
    projectDetail: {
      overview: "The Socialization of Religious Moderation was an educational initiative organized by TFI (BINUS University) aimed at promoting understanding, tolerance, and respect among different religious communities. The project focused on educating participants about the importance of moderate religious views and practices in a diverse society.",
      features: [
        "Educational workshops on religious diversity and tolerance",
        "Interactive discussions on religious moderation principles",
        "Engaging games and activities to promote interfaith understanding",
        "Documentation of the event for future reference and improvement",
        "Comprehensive report compilation to assess the impact and outcomes"
      ],
      role: {
        title: "Event Volunteer and Contributor",
        responsibilities: [
          "Participated in the preparation of educational materials and content for the socialization event",
          "Actively contributed to the execution of the event, including material delivery and facilitating interactive games",
          "Handled documentation responsibilities to capture key moments and participant engagement",
          "Collaborated in the compilation and writing of the post-event report, analyzing outcomes and impact"
        ]
      },
      technologies: [
        "Microsoft PowerPoint",
        "Google Docs",
        "Quizizz",
      ]
    }
  },
];

export const OrganizationsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="organizations gallery"
          title="Organizations Experience"
          description="In this section, you will find an overview of my organizational experiences during my time at Bina Nusantara University. These experiences played a significant role in enhancing my skills, fostering collaboration, and contributing to the social community as well as the campus environment."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {organizationsProjects.map((project, projectIndex) => (
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
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Documentation</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
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
          <div className="h-32 md:h-48" />
        </div>
      </div>
    </section>
  );
};
