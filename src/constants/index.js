import { Cpu, CloudLightning, BrainCircuit, Bot, ShieldCheck, Database } from 'lucide-react';


export const NAV_LINKS = [
  { id: "origins", title: "Origins" }, // NEW: About Us
  { id: "about", title: "Mission" }, // The existing Features section
  { id: "squads", title: "The Squads" },
  { id: "gallery", title: "Gallery" }, // NEW: Gallery
];


export const SQUADS = [
  {
    id: "code-titan",
    title: "Code Titan",
    persona: "Iron Man Theme",
    focus: "AI agents, tool building, hardware + software.",
    quote: "Engineering tomorrow, one model at a time.",
    color: "#FFD700", // Gold
    secondaryColor: "#FFD700", 
    icon: Cpu,
  },
  {
    id: "thunder-stack",
    title: "Thunder Stack",
    persona: "Thor Theme",
    focus: "Cloud deployment, backend systems, scalability.",
    quote: "Bringing the thunder to your stack.",
    color: "#00BFFF", // Electric Blue
    secondaryColor: "#00BFFF", // 
    icon: CloudLightning,
  },
  {
    id: "syntax-sage",
    title: "Syntax Sage",
    persona: "Doctor Strange Theme",
    focus: "BERT, GPT, RAG, LLM fine-tuning.",
    quote: "Master of the Multiverse... and multi-modal models.",
    color: "#9D00FF", // Purple
    secondaryColor: "#9D00FF", // 
    icon: BrainCircuit,
  },
  {
    id: "byte-weaver",
    title: "Byte Weaver",
    persona: "Spider-Man Theme",
    focus: "GenAI-powered web apps, UI/UX, chatbots.",
    quote: "With great prompts comes great interactivity.",
    color: "#FF0000", // Red
    secondaryColor: "#FF0000", // 
    icon: Bot,
  },
  {
    id: "ethos-core",
    title: "Ethos Core",
    persona: "Vision Theme",
    focus: "AI safety, ethical systems, AGI theories.",
    quote: "Seeing beyond the code into conscience.",
    color: "#00FF7F", // Spring Green
    secondaryColor: "#00FF7F", // 
    icon: ShieldCheck,
  },
  {
    id: "kernel-smash",
    title: "Kernel Smash",
    persona: "Hulk Theme",
    focus: "Python, data pipelines, heavy-lifting tasks.",
    quote: "Smashing bugs. Crushing compute.",
    color: "#39FF14", // Gamma Green
    secondaryColor: "#39FF14", // 
    icon: Database,
  },
];

export const STATS = [
  { label: "Active Heroes", value: "1,200+" },
  { label: "Hackathons", value: "15+" },
  { label: "Colleges Reached", value: "20+" },
  { label: "Projects Shipped", value: "85+" },
];

export const HERO_CONTENT = {
  headline: "Assemble. Innovate. Conquer.",
  subtext: "The premier AI community based in your neighbour. We define the future through high-octane competitions and valuable seminars.",
};

export const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2340&auto=format&fit=crop",
    caption: "Hackathon 2024: Greater Noida Phase",
    category: "Competition"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2340&auto=format&fit=crop",
    caption: "Cyber Security Workshop",
    category: "Seminar"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2340&auto=format&fit=crop",
    caption: "Community Meetup: Knowledge Park II",
    category: "Community"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop",
    caption: "AI Model Training Session",
    category: "Tech"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=871&auto=format&fit=crop",
    caption: "Ideathon Winners Circle",
    category: "Victory"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2340&auto=format&fit=crop",
    caption: "Hardware Integration Lab",
    category: "R&D"
  },
];