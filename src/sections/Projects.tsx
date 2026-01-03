import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import easytrip from "@/assets/images/Easytrip-new.png";
import niuhome from "@/assets/images/NiuHome-new.png";
import comfie from "@/assets/images/Comfie-new.png";
import gegeshop from "@/assets/images/GegeShop.png";
import klikmart from "@/assets/images/KlikMart.png";
import revoubank from "@/assets/images/RevoU_Bank.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

interface ProjectDetail {
  overview: string;
  features: string[];
  role: {
    title: string;
    responsibilities: string[];
  };
  technologies: string[];
  codeSnippets?: {
    title: string;
    description: string;
    language: string;
    code: string;
  }[];
  testArtifacts?: {
    title: string;
    description: string;
    type: "test-case" | "bug-report" | "test-plan";
    content: string;
  }[];
}

export interface Project {
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  link: string;
  image: any;
  projectDetail?: ProjectDetail;
}

export const portfolioProjects: Project[] = [
  {
    company: "RevoU (Bootcamp Project)",
    year: "2024",
    title: "EasyTrip",
    results: [
      { title: "A responsive travel website" },
      { title: "Frontend" },
      { title: "HTML and CSS" },
    ],
    link: "https://easytrip-ten.vercel.app/",
    image: easytrip,
    projectDetail: {
      overview:
        "EasyTrip is a frontend web project developed as part of the RevoU Bootcamp curriculum. The website serves as a clean and user-friendly guide for travelers interested in exploring Indonesia. Its primary goal is to provide essential information in a visually appealing format, focusing on two key aspects of travel: visiting iconic cities and discovering their most popular local foods.",
      features: [
        "Fully Responsive Design: Built with a mobile-first approach, ensuring seamless experience across all devices",
        "Engaging Homepage: Captivating hero section showcasing Indonesia's natural beauty",
        "City Exploration Page: Curated list of notable Indonesian cities in clean card layout",
        "Detailed City & Culinary Guides: Dedicated pages with city introductions and must-try foods",
        "Intuitive Navigation: Simple and clean navigation bar for easy access to all sections",
      ],
      role: {
        title: "My Role & Responsibilities",
        responsibilities: [
          "Web Design (UI): Designed the visual layout, color scheme, and typography",
          "Frontend Development: Wrote semantic HTML5 and implemented CSS3 styling",
          "Content Implementation: Structured and presented information about Indonesian cities and cuisine",
        ],
      },
      technologies: [
        "HTML5",
        "CSS3",
        "Flexbox",
        "Grid",
        "Media Queries",
        "Vercel",
      ],
    },
  },
  {
    company: "RevoU (Bootcamp Project)",
    year: "2024",
    title: "NiuHome",
    results: [
      { title: "A responsive real-estate website" },
      { title: "Frontend" },
      { title: "HTML, Tailwind CSS, and JavaScript" },
    ],
    link: "https://niuhome.site/",
    image: niuhome,
    projectDetail: {
      overview:
        "NiuHome is a dynamic frontend project created as part of the RevoU Bootcamp. It functions as a demonstration of a clean, modern, and user-friendly real-estate website. The platform is designed for prospective buyers, offering a curated showcase of properties tailored to various needs and lifestyles. By combining a minimalist design with intuitive functionality, NiuHome aims to provide an elegant and efficient Browse experience, making it easier for users to discover and explore their future dream homes.",
      features: [
        "Modern & Responsive UI: Built with Tailwind CSS, delivering flawless experience across all devices",
        "Dynamic Property Showcase: Well-organized grid of property listings with crucial information",
        "Interactive Testimonial Slider: JavaScript-powered testimonial section for smooth customer review browsing",
        "Clear Call-to-Actions: Strategically placed buttons for intuitive user journey",
        "Clean & Professional Aesthetics: Sophisticated color palette and modern typography for high-end feel",
      ],
      role: {
        title: "My Role & Responsibilities",
        responsibilities: [
          "UI Development: Translated design concept into functional website using HTML and Tailwind CSS",
          "Component-Based Structure: Built reusable UI components for consistency and maintainability",
          "Frontend Interactivity: Implemented dynamic features with JavaScript",
          "Responsive Implementation: Used Tailwind CSS utility classes for perfect adaptation to all screens",
        ],
      },
      technologies: [
        "HTML5",
        "Tailwind CSS",
        "JavaScript (ES6)",
        "Flexbox",
        "Grid",
        "DOM Manipulation",
        "Netlify",
      ],
    },
  },
  {
    company: "RevoU (Bootcamp Project)",
    year: "2024",
    title: "Comfie",
    results: [
      { title: "A responsive design interiors website" },
      { title: "Frontend" },
      { title: "HTML, Tailwind CSS, and JavaScript" },
    ],
    link: "https://comfie.site/",
    image: comfie,
    projectDetail: {
      overview:
        "Comfie is a frontend website developed as a RevoU Bootcamp project. It serves as the online portfolio for a high-end interior design studio, presented as a specialized brand under the 'NiuHome' umbrella. The project's core purpose is to attract and inform potential clients by showcasing a strong brand identity, a portfolio of work, and a clear design philosophy. The website employs a clean, modern aesthetic with a distinctive color palette and elegant typography to create a sense of style and comfort, directly reflecting the services offered.",
      features: [
        "Striking Visual Layout: Sophisticated, asymmetrical layout in hero section and masonry-style project gallery",
        "Masonry Project Gallery: Visually impressive portfolio display with perfect-fit image layout",
        "Brand Storytelling Sections: Clear sections for brand values and modern minimalist approach",
        "Fully Responsive Design: Meticulously crafted layouts that adapt perfectly to all devices",
        "Integrated Contact Form: Seamless contact section for potential client inquiries",
      ],
      role: {
        title: "My Role & Responsibilities",
        responsibilities: [
          "UI Development: Translated visual concept and brand identity using HTML and Tailwind CSS",
          "Complex Layout Implementation: Built advanced responsive layouts including masonry grid",
          "Styling and Theming: Applied distinct color scheme and typography for professional interface",
          "Frontend Interactivity: Implemented JavaScript for mobile navigation and interactive elements",
        ],
      },
      technologies: [
        "HTML5",
        "Tailwind CSS",
        "JavaScript (ES6)",
        "Grid",
        "Masonry Layout",
        "DOM Manipulation",
        "Netlify",
      ],
    },
  },
  // {
  //   company: "RevoU (Bootcamp Project)",
  //   year: "2025",
  //   title: "GegeShop",
  //   results: [
  //     {title: "A responsive E-Commerce website"},
  //     { title: "Frontend" },
  //     { title: "Next.js, Tailwind CSS, and TypeScript" },
  //   ],
  //   link: "https://gegeshop.vercel.app/",
  //   image: gegeshop,
  // },
  {
    company: "RevoU (Bootcamp Project)",
    year: "2025",
    title: "KlikMart",
    results: [
      { title: "A responsive E-Commerce website" },
      { title: "Frontend" },
      { title: "Next.js, Tailwind CSS, and TypeScript" },
    ],
    link: "https://group-project-dlhpe1m6f-rafli-triatmas-projects.vercel.app/",
    image: klikmart,
    projectDetail: {
      overview:
        "KlikMart is a responsive e-commerce website built as part of the REVOU Bootcamp 2025. It's a comprehensive online shopping platform that provides users with a seamless shopping experience from product discovery to checkout and order tracking. The project focuses on creating a modern, user-friendly interface with all essential e-commerce functionalities.",
      features: [
        "Product Catalog: Responsive product grid with filtering, sorting, and pagination",
        "Product Categories: Browse products by categories with intuitive navigation",
        "Product Search: Search functionality with filters for price range and categories",
        "Product Details: Comprehensive product pages with images, descriptions, specifications, and reviews",
        "Authentication: Secure login and signup functionality",
        "User Profiles: Personal information management with editable fields",
        "Order History: View past orders with status tracking",
        "Address Management: Save and manage multiple shipping addresses",
        "Payment Methods: Save and manage payment information",
        "Shopping Cart: Add, remove, and update quantities of products",
        "Wishlist: Save products for future purchase",
        "Checkout Process: Streamlined checkout with address and payment selection",
        "Order Tracking: Visual timeline showing order status from placement to delivery",
        "Order Confirmation: Detailed order summary after successful purchase",
        "Responsive Design: Optimized for all device sizes (mobile, tablet, desktop)",
        "Promotional Elements: Support for discounts, sales tags, and promotional banners",
        "Live Chat Integration: Tawk.to chat integration for customer support",
      ],
      role: {
        title: "My Role & Responsibilities",
        responsibilities: [
          "Designed and implemented responsive UI components using React and Tailwind CSS",
          "Created reusable components for product cards, forms, and UI elements",
          // "Implemented state management using React Context API for cart, wishlist, and authentication",
          "Developed dynamic routing for product pages, category pages, and user account sections",
          "Built the product listing page with sorting, filtering, and pagination functionality",
          "Implemented the product detail page with image gallery, specifications, and add-to-cart functionality",
          "Created the shopping cart with real-time updates and quantity management",
          "Developed the wishlist feature with persistent storage and synchronization with the cart",
          "Built the user profile management system with editable sections for personal information, addresses, and payment methods",
          "Implemented the order tracking system with visual timeline representation",
          "Connected frontend components to opensource API endpoints using Axios",
          "Implemented authentication token management for secure API requests",
          "Created data fetching hooks with SWR for efficient caching and revalidation",
          // "Handled API error states with appropriate user feedback",
          // "Wrote unit tests for critical components and hooks",
          "Optimized performance with lazy loading and pagination",
          "Implemented skeleton loaders for improved perceived performance",
          "Ensured cross-browser compatibility and responsive design",
        ],
      },
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "CSS Modules",
        "React Context API",
        "SWR",
        "Axios",
        "REST API",
        "ESLint",
        "Prettier",
        "Git",
        "Vercel",
      ],
    },
  },
  {
    company: "RevoU (Bootcamp Project)",
    year: "2025",
    title: "RevoU Bank",
    results: [
      { title: "Restful API for banking application" },
      { title: "Backend" },
      { title: "Python, Flask, PostgreSQL, and Postman" },
    ],
    link: "https://github.com/aizarfarhan25/revou-bank",
    image: revoubank,
    projectDetail: {
      overview:
        "RevoU Bank is a comprehensive banking system application developed as part of the RevoU Full-Stack Software Engineering program. This application provides a secure and efficient platform for managing banking operations including user authentication, account management, and various transaction types (deposits, withdrawals, and transfers).",
      features: [
        "User Management: Secure user registration and authentication",
        "Password hashing with bcrypt",
        "JWT-based authentication system",
        "User profile management",
        "Account Management: Multiple account types support",
        "Unique account number generation",
        "Balance tracking and management",
        "Account details viewing",
        "Transaction Processing: Deposits, withdrawals, and transfers",
        "Transaction history and reporting",
        "Security: Secure password storage with bcrypt",
        "API authentication middleware",
        "Request ID tracking for all API requests",
        "Database transaction integrity",
      ],
      role: {
        title: "My Role & Responsibilities",
        responsibilities: [
          "Designing and implementing the database schema",
          "Developing RESTful API endpoints for all banking operations",
          "Implementing secure authentication and authorization mechanisms",
          "Creating data models and repositories for business logic",
          "Setting up transaction processing with proper error handling",
          "Ensuring data integrity and security throughout the application",
          "Implementing unit and integration tests",
          "Documenting the application architecture and API endpoints",
        ],
      },
      technologies: [
        "Python 3.11+",
        "Flask",
        "SQLAlchemy",
        "PostgreSQL",
        "Pydantic",
        "Bcrypt",
        "JWT",
        "Pytest",
        "Taskipy",
      ],
      codeSnippets: [
        {
          title: "Secure Account Transfer Transaction",
          description:
            "Atomic transaction handling for fund transfers ensuring data integrity and race condition prevention.",
          language: "python",
          code: `@db.transaction()
def transfer_funds(sender_id: int, receiver_id: int, amount: Decimal) -> Transfer:
    sender = AccountRepository.get_by_id_for_update(sender_id)
    receiver = AccountRepository.get_by_id_for_update(receiver_id)

    if sender.balance < amount:
        raise InsufficientFundsError("Sender has insufficient balance")

    sender.balance -= amount
    receiver.balance += amount
    
    transfer_record = TransferRepository.create(
        sender_id=sender_id,
        receiver_id=receiver_id, 
        amount=amount,
        status=TransactionStatus.COMPLETED
    )
    
    return transfer_record`,
        },
        {
          title: "JWT Authentication Middleware",
          description:
            "Custom decorator for protecting routes and validating user sessions.",
          language: "python",
          code: `def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split(" ")[1]
        
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
            
        try:
            data = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user = User.query.filter_by(public_id=data['public_id']).first()
        except:
             return jsonify({'message': 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)
    return decorated`,
        },
      ],
      testArtifacts: [
        {
          title: "Test Strategy: Transaction Concurrency",
          description:
            "Comprehensive strategy for validating system behavior under high load and concurrent requests.",
          type: "test-plan",
          content: `## 1. Objective
To ensure the banking ledger maintains 100% data integrity when processing simultaneous transactions from multiple sources.

## 2. In Scope
- **Concurrent Fund Transfers**: Simulating 50+ users transferring funds to the same account simultaneously.
- **Race Condition Handling**: Verifying database locking mechanisms (SELECT FOR UPDATE).
- **Deadlock Prevention**: Ensuring the system gracefully handles circular dependencies (A->B, B->A).

## 3. Test Tools & Environment
- **Load Generation**: Apache JMeter (50 threads, ramp-up 10s).
- **Monitoring**: Grafana dashboard watching DB lock waits and transaction rollbacks.
- **Environment**: Staging Kubernetes Cluster (3 Pods).

## 4. Execution Strategy
We will execute the "Circular Transfer Pattern" script.
1. Create 50 test accounts with $1000 balance each.
2. Trigger random transfers between all accounts for 5 minutes.
3. **Success Criteria**: Sum of all balances must be exactly $50,000 at the end. Any deviation indicates a leak.`,
        },
        {
          title: "Critical Bug: Floating Point Precision Loss",
          description:
            "High-severity issue discovered during boundary value analysis of currency calculations.",
          type: "bug-report",
          content: `### 🔴 Incident Report: PREC-2024-001

**Status**: Resolved
**Severity**: Critical (P0)
**Component**: Core Ledger Service

### 🐛 Description
We observed a "penny leaking" issue where the sum of balances was decreasing by fractions of a cent after processing over 1,000 micro-transactions. This is likely due to standard floating-point binary representation errors.

### 🔍 Root Cause Analysis
The \`amount\` field in the \`Transaction\` model was defined as \`Float\`. Python's \`float\` uses IEEE 754 double precision, which cannot accurately represent decimal fractions like 0.1 or 0.01.

### 🛠️ Developer's Resolution
**Why this happened**:
Using \`Float\` for financial data is a common pitfall. While performant, it sacrifices precision for range. In a banking context, $0.0000001 errors accumulate into significant discrepancies over time.

**The Fix**:
1. **Database Migration**: Altered PostgreSQL columns from \`DOUBLE PRECISION\` to \`DECIMAL(18, 4)\` to store exact values.
2. **Backend Update**: Refactored Pydantic models to strictly use Python's \`Decimal\` class, ensuring arithmetic operations maintain fixed precision.
3. **Validation**: Added a regression test suite \`test_currency_integrity.py\` simulating 1 million micro-transfers.

**Outcome**:
Zero precision loss related incidents since deployment. System now passes all financial compliance verification checks.`,
        },
      ],
    },
  },
  // {
  //   company: "Quantum Dynamics",
  //   year: "2023",
  //   title: "AI Startup Landing Page",
  //   results: [
  //     { title: "Enhanced user experience by 40%" },
  //     { title: "Improved site speed by 50%" },
  //     { title: "Increased mobile traffic by 35%" },
  //   ],
  //   link: "https://youtu.be/Z7I5uSRHMHg",
  //   image: aiStartupLandingPage,
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="projects gallery"
          title="Featured Projects"
          description="Here are all the projects I worked on during my participation in the
          RevoU Fullstack Software Engineering Bootcamp."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
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
                        className="flex items-center gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="w-6 h-6 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
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
        </div>
      </div>
    </section>
  );
};
