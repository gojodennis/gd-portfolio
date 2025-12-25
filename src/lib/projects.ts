export interface Project {
    slug: string;
    title: string;
    description: string;
    problemStatement: string;
    tags: string[];
    links: {
        demo?: string;
        github?: string;
    };
    image: string;
    featured?: boolean;
}

export const PROJECTS: Project[] = [
    {
        slug: "openkombai",
        title: "OpenKombai",
        description: "Local-first alternative to Kombai. AI-powered UI generation without data leaks.",
        problemStatement: "Designers and developers often struggle with the 'handoff' gap—converting Figma designs into clean, usable code is time-consuming and error-prone. Existing AI tools often require sending proprietary designs to the cloud, raising security and privacy concerns. OpenKombai solves this by providing a local-first, privacy-focused engine that generates high-quality React/Tailwind code directly on your machine, ensuring your IP never leaves your device while speeding up the development workflow.",
        tags: ["Open Source", "AI", "Tooling"],
        links: { demo: "https://openkombai.vercel.app/", github: "https://github.com/gojodennis/OpenKombai" },
        image: "/images/projects/openkombai.png",
        featured: true
    },
    {
        slug: "digigarden",
        title: "DigiGarden",
        description: "DigiGarden lets users virtually adopt, nurture real trees via your phone.",
        problemStatement: "Environmental action often feels abstract or disconnected from daily life. People want to contribute to reforestation but lack transparency and engagement in the process. DigiGarden bridges this gap by gamifying tree planting—users adopt virtual trees that correspond to real-world saplings. By nurturing their digital garden, they fund and track actual reforestation efforts, creating a tangible, rewarding loop between digital habits and physical environmental impact.",
        tags: ["React", "Supabase", "Fullstack"],
        links: { demo: "https://d1gigarden.vercel.app", github: "https://github.com/gojodennis/digitalgarden" },
        image: "/images/projects/digigarden.png",
        featured: true
    }
];
