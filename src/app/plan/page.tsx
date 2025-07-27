import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Fragment } from 'react';

// Define a type for our project phases
interface Phase {
  id: string;
  title: string;
  executiveSummary: string;
  duration: string;
  essay: string; // Description of the phase's context/purpose
  keyFeatures: string[];
  warnings: string[];
}

// Mock data for the project phases, reflecting the specialized product nature
const projectPhases: Phase[] = [
  {
    id: 'phase0',
    title: 'Phase 0: Project Initiation & Client Alignment (Pre-development)',
    executiveSummary: 'This foundational phase establishes the collaborative framework for the entire project. It focuses on in-depth discussions with the client to confirm the project scope, align on expectations, define clear communication protocols, and present a transparent, itemized cost proposal for mutual agreement. This ensures a shared vision and a strong, well-understood start to the development partnership.',
    duration: 'Pre-development',
    essay: 'This initial stage is critical for any successful partnership. Before any code is written, TresPies ensures a complete understanding of "The Flower Shoppe\'s" unique market position and specialized product offerings. We align on every detail, from the vibrant pink and green branding to the specific needs for compliant digital operations in a regulated industry. This meticulous planning minimizes risks and sets a clear path forward.',
    keyFeatures: [
      'Detailed scope review & vision confirmation',
      'Communication protocol establishment',
      'Itemized cost proposal presentation & agreement',
      'Initial legal compliance discussion (client responsibility)'
    ],
    warnings: []
  },
  {
    id: 'phase1',
    title: 'Phase 1: Pre-release - Buzz & Basic Gallery (1 Month Duration)',
    executiveSummary: 'This initial, rapid phase is designed to generate immediate traction and build momentum for "The Flower Shoppe" even before the full e-commerce site is live. It focuses on creating a minimal online presence with a basic product gallery and a robust social media strategy. This phase\'s development for the social media MVP is offered free of charge to demonstrate value and build initial excitement.',
    duration: '1 Month',
    essay: 'At the outset, "The Flower Shoppe" website is currently non-existent. The goal of this pre-release phase is to transform this blank slate into a buzzing anticipation. We\'re not just building a website; we\'re building a community and a brand presence tailored to a unique market. This phase is about creating a digital storefront that, while not yet transactional, is highly engaging. We will focus on visual appeal and compelling content to capture interest. The social media MVP is crucial here – it\'s the initial handshake with potential customers, inviting them into the world of "The Flower Shoppe" and setting the stage for the full launch. This strategic investment in early buzz is designed to hit the ground running once the full e-commerce capabilities are deployed.',
    keyFeatures: [
      'Basic Product Gallery Page (static)',
      'Social Media MVP & Strategy (FREE Development)',
      'Email List Integration'
    ],
    warnings: [
      'Client must provide all product images, descriptions, and initial social media content/ideas. Timely provision is critical.',
      'Any paid advertising or premium social media tools are the client\'s responsibility. Email marketing services may incur costs beyond free tiers.'
    ]
  },
  {
    id: 'phase2',
    title: 'Phase 2: Alpha - Core E-commerce & Basic Local Services (1 Month Duration)',
    executiveSummary: 'This phase builds the fundamental e-commerce capabilities, transforming the static gallery into a functional online store. It focuses on establishing the product catalog, enabling browsing and cart functionality, and integrating the basic framework for local delivery and pickup options.',
    duration: '1 Month',
    essay: 'Having generated initial buzz, the Alpha phase is where "The Flower Shoppe" transitions into a tangible online business. The site is currently a static presence, and this phase will bring it to life as a transactional platform. We\'ll build the core mechanics of an online store, allowing customers to explore the full range of specialized products, add items to a cart, and begin to interact with the local services. The focus is on functionality and a smooth user flow for browsing and order initiation. This phase lays the groundwork for all future e-commerce operations.',
    keyFeatures: [
      'Full Product Data Model (Firestore)',
      'Comprehensive Product Display (dynamic homepage, shop all, categories, product details)',
      'Basic Cart Functionality (client-side add/delete, display total)',
      'Core Navigation & Layout',
      'Basic Delivery/Pickup Toggle',
      'Placeholder Maps Integration (for delivery zones)',
      'Pickup Location Display'
    ],
    warnings: [
      'Client must provide all product data (names, descriptions, images, categories) and pickup location details. Incomplete data will result in placeholder content.',
      'Firebase Firestore usage will begin to accrue based on data storage and reads/writes. Initial usage is often within free tiers, but scaling will incur costs.'
    ]
  },
  {
    id: 'phase3',
    title: 'Phase 3: Beta - Advanced E-commerce & Enhanced Local Services (1 Month Duration)',
    executiveSummary: 'This phase elevates "The Flower Shoppe" to a fully functional e-commerce platform with secure transactions and enhanced local service capabilities. It integrates user reviews, a secure payment gateway, and introduces an administrative dashboard for basic product and order management.',
    duration: '1 Month',
    essay: 'The Beta phase is about refining "The Flower Shoppe" into a robust, secure, and user-friendly platform ready for a soft launch. The focus shifts to transactional integrity and administrative control. By integrating a payment gateway, the site becomes capable of generating revenue. User reviews add a crucial social proof element, enhancing trust and engagement. The administrative dashboard provides the client with essential tools to manage their online store independently. This phase completes the core feature set needed for a successful initial public offering.',
    keyFeatures: [
      'User Review System',
      'Secure Payment Gateway Integration (Dejavoo HPP for online payments)',
      'Enhanced Preorder Functionality (with payment integration)',
      'Enhanced Product Lookup/Search',
      'Admin Dashboard (protected, with Product Management CRUD, Order/Preorder Viewer, Basic Site Analytics)',
      'Admin User Authentication'
    ],
    warnings: [
      'Payment gateways (like Dejavoo) charge transaction fees. Advanced features like fraud detection may also have associated costs. Mapping APIs for route optimization (if implemented in future phases) will incur substantial recurring costs.',
      'Implementing payment gateways requires adherence to financial regulations (PCI DSS compliance) and privacy laws. Legal consultation is strongly recommended.',
      'Client must provide guidelines for review moderation.',
      'While basic authentication and secure payment processing are implemented, advanced security measures (e.g., multi-factor authentication for admins, detailed access roles, penetration testing) are outside the scope of this Beta.'
    ]
  },
  {
    id: 'phase4',
    title: 'Phase 4: Post-Beta & Future Enhancements (Ongoing)',
    executiveSummary: 'This phase covers the continuous improvement and scaling of "The Flower Shoppe" website beyond the initial Beta launch. It focuses on implementing advanced operational efficiencies and deepening customer engagement through features like real-time inventory, comprehensive delivery management, and sophisticated analytics.',
    duration: 'Ongoing',
    essay: 'Upon successful completion of the Beta phase, "The Flower Shoppe" will have a fully operational and revenue-generating website. This final phase outlines the strategic enhancements that will drive efficiency, deepen customer relationships, and provide critical business insights. The focus shifts from core functionality to operational excellence and data-driven growth. These features are designed to scale with the business, optimizing logistics and providing a competitive edge in the local market.',
    keyFeatures: [
      'Real-time Inventory Management (Korona POS Integration via KORONA.cloud API v3)',
      'Advanced Analytics Dashboard',
      'Full Delivery Management System (Korona POS Integration & Mapping APIs for optimized routing, driver management, real-time tracking, scheduling)',
      'Ongoing Maintenance & Support (Separate Agreement)'
    ],
    warnings: [
      'Extensive use of advanced mapping APIs (e.g., Google Maps Platform APIs for Routing, Geocoding) will incur substantial recurring costs. Premium analytics platforms also have associated fees. Korona POS API access may require specific subscription tiers or fees.',
      'Integrating with existing POS (Point of Sale) systems like Korona POS can be complex and may require additional development time not covered in this proposal, especially for custom workflows or historical data migration.',
      'Implementing full delivery management requires significant operational changes and training for staff.'
    ]
  },
  {
    id: 'phase5',
    title: 'Phase 5: Project Finalization & Handoff',
    executiveSummary: 'The concluding phase ensures a smooth transition of the completed website to the client. It involves final reviews, comprehensive documentation, and knowledge transfer to empower the client with full ownership and operational capability. This phase also covers any final project management overhead and formal project closure.',
    duration: 'Project Conclusion',
    essay: 'This final stage of our partnership is dedicated to ensuring "The Flower Shoppe" is fully equipped to thrive independently. TresPies provides comprehensive documentation and training, empowering the client with complete control over their new digital platform. We conduct thorough user acceptance testing to guarantee all features meet expectations and facilitate a seamless transition, setting the stage for long-term success and growth.',
    keyFeatures: [
      'Final Review & UAT (User Acceptance Testing)',
      'Comprehensive Documentation & Knowledge Transfer',
      'Project Closure & Final Invoice'
    ],
    warnings: [
      'Client engagement in UAT and training is crucial for successful handoff.',
      'Ongoing hosting, domain, and any third-party service fees will be the client\'s responsibility. Regular software updates and security patches may require a separate maintenance agreement.'
    ]
  }
];

// Reusable component for displaying a single phase
function PhaseCard({ phase }: { phase: Phase }) {
  return (
    <div id={phase.id} className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-flower-light-pink">
      <h3 className="text-2xl font-bold text-flower-green mb-3">{phase.title}</h3>
      <p className="text-flower-pink font-semibold mb-2">{phase.duration}</p>
      <p className="text-gray-700 mb-4">{phase.executiveSummary}</p>
      <p className="text-gray-600 italic mb-4">{phase.essay}</p>

      <h4 className="text-xl font-semibold text-flower-green mb-2">Key Features:</h4>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        {phase.keyFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {phase.warnings.length > 0 && (
        <Fragment>
          <h4 className="text-xl font-semibold text-tres-red mb-2">Important Warnings:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {phase.warnings.map((warning, index) => (
              <li key={index} className="text-sm">{warning}</li>
            ))}
          </ul>
        </Fragment>
      )}
    </div>
  );
}


export default function PlanPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-16 px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-flower-green leading-tight">
            The Flower Shoppe: Development Roadmap
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            A strategic, phased approach to building the premier online destination for specialized flower products.
          </p>
        </section>

        {/* Phase Navigation / Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-flower-pink mb-6 text-center">Project Timeline at a Glance</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {projectPhases.map((phase) => (
              <Link key={phase.id} href={`#${phase.id}`} className="px-5 py-2 bg-flower-green text-white rounded-full text-sm font-medium hover:bg-flower-dark-green transition-colors shadow-md">
                {phase.title.split(':')[0]}
              </Link>
            ))}
          </div>
        </section>

        {/* Detailed Phases */}
        <section>
          {projectPhases.map((phase) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </section>

        {/* Legal Disclaimer Reminder */}
        <section className="mt-16 p-6 bg-tres-red bg-opacity-10 border border-tres-red rounded-lg text-tres-red">
            <h2 className="text-2xl font-bold mb-4">Important Legal & Compliance Note</h2>
            <p className="text-lg">
                As "The Flower Shoppe" deals with specialized products, it is **imperative** that the client consults with a qualified attorney specializing in cannabis law and e-commerce. TresPies Design Studio provides web development services only and is not responsible for legal or regulatory compliance. All operations, products, and marketing must adhere to federal, state, and local laws. This is explicitly detailed in **Addendum A** of our Freelance Development Contract.
            </p>
            <p className="mt-4 text-sm">
                This website is a presentation of the development plan and does not constitute legal advice.
            </p>
        </section>

      </main>
      <Footer />
    </div>
  );
}
