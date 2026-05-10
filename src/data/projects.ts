export type Category =
  | "Production Design"
  | "Visual Development"
  | "Fine Art"
  | "3D Visualization"
  | "Photography"
  | "Graphic Design";

export interface ComparePair {
  before: string;     // typically the rendering
  after: string;      // typically the photo of the built result
  caption?: string;   // optional caption (e.g. "Theater" or "Game Room")
  beforeLabel?: string; // override default "Rendering" label
  afterLabel?: string;  // override default "Built" label
}

export interface ImageSection {
  label: string;
  images?: string[];
  compares?: ComparePair[];
}

export interface Project {
  slug: string;
  title: string;
  category: Category;
  description: string;
  thumbnail: string;
  color: string;
  year?: string;
  type?: string;            // e.g. "Short Film", "Premiere Event", "Conceptual Study"
  studio?: string;          // e.g. "Benarroch Productions", "Studio Connelly"
  tools?: string[];
  images?: string[];        // Flat list. Used when sections is undefined.
  sections?: ImageSection[]; // When present, supersedes images for the gallery layout.
  details?: string;
}

export const categories: Category[] = [
  "Production Design",
  "Visual Development",
  "Fine Art",
  "3D Visualization",
  "Photography",
  "Graphic Design",
];

export const categoryColors: Record<Category, string> = {
  "Production Design": "#4A7CE8",
  "Visual Development": "#A8B8D8",
  "Fine Art": "#F2B8C6",
  "3D Visualization": "#4CB963",
  Photography: "#F5C842",
  "Graphic Design": "#C5D5B0",
};

export interface CategoryMeta {
  slug: string;
  name: Category;
  tagline: string;
  heroImage: string;
}

export const categoryMeta: CategoryMeta[] = [
  {
    slug: "production-design",
    name: "Production Design",
    tagline: "From concept to set. Feature films, shorts, and live events.",
    heroImage: "/images/projects/the-bonsai/stills/the-bonsai-stills-01.jpg",
  },
  {
    slug: "visual-development",
    name: "Visual Development",
    tagline: "World-building, character design, and visual storytelling.",
    heroImage: "/images/projects/lost-city-of-zeloria/lost-city-of-zeloria-01.jpg",
  },
  {
    slug: "fine-art",
    name: "Fine Art",
    tagline: "Oil paintings, drawings, and explorations in color and form.",
    heroImage: "/images/projects/oil-paintings/oil-paintings-01.jpg",
  },
  {
    slug: "3d-visualization",
    name: "3D Visualization",
    tagline: "Custom 3D models and photorealistic renders in Rhino and Enscape.",
    heroImage: "/images/projects/luxury-add-on/luxury-add-on-01.jpg",
  },
  {
    slug: "photography",
    name: "Photography",
    tagline: "Capturing moments, textures, and stories through a thoughtful lens.",
    heroImage: "/images/projects/people-portrait/people-portrait-01.jpg",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    tagline: "Album art, packaging, promotional materials, and brand collateral.",
    heroImage: "/images/projects/album-artwork/album-artwork-01.jpg",
  },
];

// Note: previously a separate `privateProjects` array was rendered behind a
// password gate at /private. Sarah lifted the restriction — these are now
// public projects (the four 2025 Netflix premiere events at the top of the
// projects array below).

export const projects: Project[] = [
  // ─── NETFLIX PREMIERE EVENTS (2025) ───
  {
    slug: "wake-up-dead-man",
    title: "Wake Up Dead Man: A Knives Out Mystery",
    category: "Production Design",
    description:
      "Designed an immersive gothic cathedral set with custom stained glass graphics, a candelabra altar centerpiece, branded step-and-repeat walls, and a specialty cocktail menu for Netflix's Knives Out sequel premiere.",
    thumbnail: "/images/projects/wake-up-dead-man/wake-up-dead-man-11.jpg",
    color: "#2D2D2D",
    year: "2025",
    type: "Premiere Event",
    studio: "Benarroch Productions",
    tools: ["Rhino", "Enscape", "Photoshop", "Illustrator"],
    sections: [
      {
        label: "Event Photos",
        images: [
          "/images/projects/wake-up-dead-man/wake-up-dead-man-11.jpg",
          "/images/projects/wake-up-dead-man/wake-up-dead-man-12.jpg",
          "/images/projects/wake-up-dead-man/wake-up-dead-man-13.jpg",
          "/images/projects/wake-up-dead-man/wake-up-dead-man-01.jpg",
        ],
      },
      {
        label: "Renderings",
        images: [
          "/images/projects/wake-up-dead-man/wake-up-dead-man-05.jpg",
          "/images/projects/wake-up-dead-man/wake-up-dead-man-06.jpg",
          "/images/projects/wake-up-dead-man/wake-up-dead-man-07.jpg",
        ],
      },
      {
        label: "Graphics",
        images: [
          "/images/projects/wake-up-dead-man/wake-up-dead-man-02.jpg",
        ],
      },
      {
        label: "Plans & Construction",
        images: [
          "/images/projects/wake-up-dead-man/wake-up-dead-man-03.jpg",
          "/images/projects/wake-up-dead-man/wake-up-dead-man-04.jpg",
          "/images/projects/wake-up-dead-man/wake-up-dead-man-08.jpg",
          "/images/projects/wake-up-dead-man/wake-up-dead-man-09.jpg",
          "/images/projects/wake-up-dead-man/wake-up-dead-man-10.jpg",
        ],
      },
    ],
    details:
      "Production design for the Netflix premiere event of Wake Up Dead Man: A Knives Out Mystery. The immersive set featured a gothic cathedral aesthetic with custom stained glass window graphics, a stone altar centerpiece with candelabras, branded step-and-repeat walls, and a specialty cocktail menu. Work spanned from initial 3D renders in Rhino/Enscape through final on-site installation.",
  },
  {
    slug: "frankenstein",
    title: "Frankenstein",
    category: "Production Design",
    description:
      "Designed a laboratory-inspired set with industrial machinery, branded tile walls, and a custom illustrated Hollywood landmarks map graphic for Netflix's Frankenstein premiere. Includes a separate Halloween Event activation.",
    thumbnail: "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-02.jpg",
    color: "#8B4513",
    year: "2025",
    type: "Premiere Event",
    studio: "Benarroch Productions",
    tools: ["Rhino", "Enscape", "Photoshop", "Illustrator"],
    sections: [
      {
        label: "Event Photos",
        images: [
          "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-01.jpg",
          "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-02.jpg",
          "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-03.jpg",
        ],
      },
      {
        label: "Graphics",
        images: [
          "/images/projects/frankenstein/graphics/frankenstein-graphics-01.jpg",
        ],
      },
      {
        label: "Plans & Construction",
        images: [
          "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-04.jpg",
          "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-05.jpg",
          "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-06.jpg",
          "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-07.jpg",
          "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-08.jpg",
          "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-09.jpg",
          "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-10.jpg",
          "/images/projects/frankenstein/premiere-event/frankenstein-premiere-event-11.jpg",
        ],
      },
      {
        label: "Halloween Event",
        images: [
          "/images/projects/frankenstein/halloween-event/frankenstein-halloween-event-01.jpg",
        ],
      },
    ],
    details:
      "Production design for the Netflix premiere event of Frankenstein, including a separate Halloween Event activation. Created an immersive laboratory environment featuring industrial machinery props, branded tile walls, and a custom illustrated Hollywood landmarks map. The design drew from the film's gothic science-fiction aesthetic while maintaining Netflix's premiere event standards.",
  },
  {
    slug: "happy-gilmore-2",
    title: "Happy Gilmore 2",
    category: "Production Design",
    description:
      "Designed a golf clubhouse locker room with branded cubbies, judges desk, beer pong table mockup, custom paddles + caddy bibs, and a large-format LED backdrop for Netflix's Happy Gilmore 2 premiere.",
    thumbnail: "/images/projects/happy-gilmore-2/happy-gilmore-2-01.jpg",
    color: "#2E5A1C",
    year: "2025",
    type: "Premiere Event",
    studio: "Benarroch Productions",
    tools: ["Rhino", "Enscape", "Photoshop", "Illustrator"],
    sections: [
      {
        label: "Event Photos",
        images: [
          "/images/projects/happy-gilmore-2/happy-gilmore-2-01.jpg",
          "/images/projects/happy-gilmore-2/happy-gilmore-2-02.jpg",
          "/images/projects/happy-gilmore-2/happy-gilmore-2-03.jpg",
          "/images/projects/happy-gilmore-2/happy-gilmore-2-04.jpg",
          "/images/projects/happy-gilmore-2/happy-gilmore-2-06.jpg",
        ],
      },
      {
        label: "Renderings",
        images: [
          "/images/projects/happy-gilmore-2/happy-gilmore-2-07.jpg",
        ],
      },
      {
        label: "Graphics",
        images: [
          "/images/projects/happy-gilmore-2/happy-gilmore-2-05.jpg",
          "/images/projects/happy-gilmore-2/happy-gilmore-2-08.jpg",
          "/images/projects/happy-gilmore-2/happy-gilmore-2-09.jpg",
          "/images/projects/happy-gilmore-2/happy-gilmore-2-10.jpg",
          "/images/projects/happy-gilmore-2/happy-gilmore-2-11.jpg",
        ],
      },
    ],
    details:
      "Production design for the Netflix premiere event of Happy Gilmore 2. Designed and executed a golf clubhouse locker room environment featuring branded cubbies with golf bags, trophies, and wardrobe elements. Also designed a commentator judges desk and large-format LED backdrop. 3D renders were created in Rhino and Enscape to visualize the space before build.",
  },
  // ─── PRODUCTION DESIGN — FILMS ───
  {
    slug: "the-bonsai",
    title: "The Bonsai",
    category: "Production Design",
    description:
      "Designed and built three sets — a hand-carved foam dungeon, a hoarder house interior, and a magical forest — for a short film about an agoraphobic woman confronting her past.",
    thumbnail: "/images/projects/the-bonsai/stills/the-bonsai-stills-01.jpg",
    color: "#4A7CE8",
    year: "2024",
    type: "Short Film",
    tools: ["SketchUp", "Photoshop", "Hand-built sets"],
    sections: [
      {
        label: "Stills",
        images: [
          "/images/projects/the-bonsai/stills/the-bonsai-stills-01.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-02.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-03.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-04.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-05.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-06.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-07.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-08.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-09.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-10.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-11.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-12.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-13.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-14.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-15.jpg",
          "/images/projects/the-bonsai/stills/the-bonsai-stills-16.jpg",
        ],
      },
      {
        label: "Set & Location Photos",
        images: [
          "/images/projects/the-bonsai/set-photos/the-bonsai-set-photos-01.jpg",
          "/images/projects/the-bonsai/set-photos/the-bonsai-set-photos-02.jpg",
          "/images/projects/the-bonsai/set-photos/the-bonsai-set-photos-03.jpg",
          "/images/projects/the-bonsai/set-photos/the-bonsai-set-photos-04.jpg",
        ],
      },
      {
        label: "Graphics",
        images: [
          "/images/projects/the-bonsai/graphics/the-bonsai-graphics-01.jpg",
          "/images/projects/the-bonsai/graphics/the-bonsai-graphics-02.jpg",
          "/images/projects/the-bonsai/graphics/the-bonsai-graphics-03.jpg",
          "/images/projects/the-bonsai/graphics/the-bonsai-graphics-04.jpg",
          "/images/projects/the-bonsai/graphics/the-bonsai-graphics-05.jpg",
        ],
      },
      {
        label: "Process & Plans",
        images: [
          "/images/projects/the-bonsai/process/the-bonsai-process-01.jpg",
          "/images/projects/the-bonsai/process/the-bonsai-process-02.jpg",
          "/images/projects/the-bonsai/process/the-bonsai-process-03.jpg",
          "/images/projects/the-bonsai/process/the-bonsai-process-04.jpg",
          "/images/projects/the-bonsai/process/the-bonsai-process-05.jpg",
          "/images/projects/the-bonsai/process/the-bonsai-process-06.jpg",
          "/images/projects/the-bonsai/process/the-bonsai-process-07.jpg",
          "/images/projects/the-bonsai/process/the-bonsai-process-08.jpg",
          "/images/projects/the-bonsai/process/the-bonsai-process-09.jpg",
          "/images/projects/the-bonsai/process/the-bonsai-process-10.jpg",
          "/images/projects/the-bonsai/process/the-bonsai-process-11.jpg",
        ],
      },
    ],
    details:
      "When a desperately needed box is delivered across the street from an agoraphobic woman, she must confront her verbally-abusive mother in order to leave the prison she's created for herself. Designed and built sets including a hand-carved foam dungeon, a detailed hoarder house interior, and a magical forest environment.",
  },
  {
    slug: "back-to-me",
    title: "Back to Me",
    category: "Production Design",
    description:
      "Production design across a tiki bar set, a brunch scene, and a living room interior. Color graded in tandem with the design palette to maintain visual continuity.",
    thumbnail: "/images/projects/back-to-me/set-photos/back-to-me-set-photos-01.jpg",
    color: "#C4533C",
    year: "2022",
    type: "Short Film",
    tools: ["SketchUp", "Photoshop"],
    sections: [
      {
        label: "Trailer",
        images: ["/images/projects/back-to-me/trailer/back-to-me-trailer-01.mp4"],
      },
      {
        label: "Stills",
        images: [
          "/images/projects/back-to-me/stills/back-to-me-stills-01.jpg",
          "/images/projects/back-to-me/stills/back-to-me-stills-02.jpg",
          "/images/projects/back-to-me/stills/back-to-me-stills-03.jpg",
          "/images/projects/back-to-me/stills/back-to-me-stills-04.jpg",
          "/images/projects/back-to-me/stills/back-to-me-stills-05.jpg",
          "/images/projects/back-to-me/stills/back-to-me-stills-06.jpg",
          "/images/projects/back-to-me/stills/back-to-me-stills-07.jpg",
          "/images/projects/back-to-me/stills/back-to-me-stills-08.jpg",
        ],
      },
      {
        label: "Set Photos",
        images: [
          "/images/projects/back-to-me/set-photos/back-to-me-set-photos-01.jpg",
          "/images/projects/back-to-me/set-photos/back-to-me-set-photos-02.jpg",
          "/images/projects/back-to-me/set-photos/back-to-me-set-photos-03.jpg",
          "/images/projects/back-to-me/set-photos/back-to-me-set-photos-04.jpg",
          "/images/projects/back-to-me/set-photos/back-to-me-set-photos-05.jpg",
          "/images/projects/back-to-me/set-photos/back-to-me-set-photos-06.jpg",
        ],
      },
      {
        label: "Process & Mood",
        images: [
          "/images/projects/back-to-me/process/back-to-me-process-01.jpg",
          "/images/projects/back-to-me/process/back-to-me-process-02.jpg",
        ],
      },
    ],
    details:
      "Production design for Back to Me. The set design spanned a tiki bar interior, a brunch scene with custom dressing, and a living room environment. Color grading was done in tandem with the design palette to maintain visual continuity.",
  },
  {
    slug: "coop",
    title: "Coop",
    category: "Production Design",
    description:
      "Set design, in-world graphics (Legacy Darts trophy certificate, marketing collateral), and on-set dressing for a short film.",
    thumbnail: "/images/projects/coop/stills/coop-stills-01.jpg",
    color: "#5C7A8B",
    year: "2023",
    type: "Short Film",
    tools: ["SketchUp", "Photoshop"],
    sections: [
      {
        label: "Stills",
        images: [
          "/images/projects/coop/stills/coop-stills-01.jpg",
          "/images/projects/coop/stills/coop-stills-02.jpg",
          "/images/projects/coop/stills/coop-stills-03.jpg",
          "/images/projects/coop/stills/coop-stills-04.jpg",
        ],
      },
      {
        label: "Set Photos",
        images: [
          "/images/projects/coop/set-photos/coop-set-photos-01.jpg",
          "/images/projects/coop/set-photos/coop-set-photos-02.jpg",
          "/images/projects/coop/set-photos/coop-set-photos-03.jpg",
          "/images/projects/coop/set-photos/coop-set-photos-04.jpg",
        ],
      },
      {
        label: "Graphics",
        images: [
          "/images/projects/coop/graphics/coop-graphics-01.jpg",
          "/images/projects/coop/graphics/coop-graphics-02.jpg",
          "/images/projects/coop/graphics/coop-graphics-03.jpg",
          "/images/projects/coop/graphics/coop-graphics-04.jpg",
          "/images/projects/coop/graphics/coop-graphics-05.jpg",
          "/images/projects/coop/graphics/coop-graphics-06.jpg",
          "/images/projects/coop/graphics/coop-graphics-07.jpg",
          "/images/projects/coop/graphics/coop-graphics-08.jpg",
        ],
      },
    ],
  },
  {
    slug: "double-time",
    title: "Double Time",
    category: "Production Design",
    description:
      "Set design and in-world graphic assets for a short film. Diner-set sequence with custom signage and dressing.",
    thumbnail: "/images/projects/double-time/stills/double-time-stills-01.jpg",
    color: "#3A8B5C",
    year: "2024",
    type: "Short Film",
    tools: ["SketchUp", "Photoshop"],
    sections: [
      {
        label: "Stills",
        images: [
          "/images/projects/double-time/stills/double-time-stills-01.jpg",
          "/images/projects/double-time/stills/double-time-stills-02.jpg",
          "/images/projects/double-time/stills/double-time-stills-03.jpg",
          "/images/projects/double-time/stills/double-time-stills-04.jpg",
          "/images/projects/double-time/stills/double-time-stills-05.jpg",
          "/images/projects/double-time/stills/double-time-stills-06.jpg",
          "/images/projects/double-time/stills/double-time-stills-07.jpg",
          "/images/projects/double-time/stills/double-time-stills-08.jpg",
        ],
      },
      {
        label: "Graphics",
        images: [
          "/images/projects/double-time/graphics/double-time-graphics-01.jpg",
          "/images/projects/double-time/graphics/double-time-graphics-02.jpg",
          "/images/projects/double-time/graphics/double-time-graphics-03.jpg",
          "/images/projects/double-time/graphics/double-time-graphics-04.jpg",
          "/images/projects/double-time/graphics/double-time-graphics-05.jpg",
          "/images/projects/double-time/graphics/double-time-graphics-06.jpg",
          "/images/projects/double-time/graphics/double-time-graphics-07.jpg",
          "/images/projects/double-time/graphics/double-time-graphics-08.jpg",
        ],
      },
    ],
  },
  {
    slug: "kissinger-takes-paris",
    title: "Kissinger Takes Paris",
    category: "Production Design",
    description:
      "Research-driven proof of concept for a period piece set in 1968 Paris. Environment design, dressing, and visual treatment.",
    thumbnail: "/images/projects/kissinger-takes-paris/kissinger-takes-paris-02.jpg",
    color: "#C4533C",
    year: "2023",
    type: "Proof of Concept",
    tools: ["SketchUp", "Photoshop", "Research"],
    images: [
      "/images/projects/kissinger-takes-paris/kissinger-takes-paris-01.jpg",
      "/images/projects/kissinger-takes-paris/kissinger-takes-paris-02.jpg",
      "/images/projects/kissinger-takes-paris/kissinger-takes-paris-03.jpg",
      "/images/projects/kissinger-takes-paris/kissinger-takes-paris-04.jpg",
      "/images/projects/kissinger-takes-paris/kissinger-takes-paris-05.jpg",
      "/images/projects/kissinger-takes-paris/kissinger-takes-paris-06.jpg",
    ],
  },

  // ─── PRODUCTION DESIGN — CONCEPTUAL ───
  {
    slug: "inside-out",
    title: "Inside Out",
    category: "Production Design",
    description:
      "Conceptual production design for Inside Out — Disgust's set environment, palette, materials, plans, and key art.",
    thumbnail: "/images/projects/inside-out/inside-out-01.jpg",
    color: "#7A9B4C",
    type: "Conceptual Study",
    tools: ["SketchUp", "Photoshop", "Procreate"],
    images: [
      "/images/projects/inside-out/inside-out-01.jpg",
      "/images/projects/inside-out/inside-out-02.jpg",
      "/images/projects/inside-out/inside-out-03.jpg",
      "/images/projects/inside-out/inside-out-04.jpg",
      "/images/projects/inside-out/inside-out-05.jpg",
      "/images/projects/inside-out/inside-out-06.jpg",
      "/images/projects/inside-out/inside-out-07.jpg",
      "/images/projects/inside-out/inside-out-08.jpg",
      "/images/projects/inside-out/inside-out-09.jpg",
      "/images/projects/inside-out/inside-out-10.jpg",
    ],
    details:
      "A conceptual production design study for Inside Out. The set treatment focused on Disgust's environment — palette, materials, and plan layouts. Includes director plans, mood references, and key visual treatments.",
  },
  {
    slug: "fam",
    title: "FAM",
    category: "Production Design",
    description:
      "Three interior environments — bedroom, kitchen, living room — for a short film concept. Director plans, render models, and dressing concepts.",
    thumbnail: "/images/projects/fam/fam-04.jpg",
    color: "#4A7CE8",
    type: "Conceptual Study",
    tools: ["SketchUp", "Enscape", "Photoshop"],
    images: [
      "/images/projects/fam/fam-01.jpg",
      "/images/projects/fam/fam-02.jpg",
      "/images/projects/fam/fam-03.jpg",
      "/images/projects/fam/fam-04.jpg",
      "/images/projects/fam/fam-05.jpg",
      "/images/projects/fam/fam-06.jpg",
      "/images/projects/fam/fam-07.jpg",
      "/images/projects/fam/fam-08.jpg",
      "/images/projects/fam/fam-09.jpg",
    ],
    details:
      "Production design study for FAM. Designed three interior environments for the central characters Clem and Jay: bedroom, kitchen, and living room. Includes director plans, render models, and dressing concepts.",
  },
  {
    slug: "taylor-swift-show",
    title: "The Taylor Swift Show",
    category: "Production Design",
    description:
      "Live concert production design study. Stage layouts, stylized renders, and visual treatment.",
    thumbnail: "/images/projects/taylor-swift-show/taylor-swift-show-02.jpg",
    color: "#C53D8B",
    type: "Conceptual Study",
    tools: ["Rhino", "Enscape", "Photoshop"],
    images: [
      "/images/projects/taylor-swift-show/taylor-swift-show-01.jpg",
      "/images/projects/taylor-swift-show/taylor-swift-show-02.jpg",
      "/images/projects/taylor-swift-show/taylor-swift-show-03.jpg",
      "/images/projects/taylor-swift-show/taylor-swift-show-04.jpg",
      "/images/projects/taylor-swift-show/taylor-swift-show-05.jpg",
      "/images/projects/taylor-swift-show/taylor-swift-show-06.jpg",
      "/images/projects/taylor-swift-show/taylor-swift-show-07.jpg",
      "/images/projects/taylor-swift-show/taylor-swift-show-08.jpg",
    ],
  },
  {
    slug: "all-summer-in-a-day",
    title: "All Summer in a Day",
    category: "Production Design",
    description:
      "Production design concept based on the Ray Bradbury short story. Mood, environment, and visual treatment.",
    thumbnail: "/images/projects/all-summer-in-a-day/all-summer-in-a-day-01.jpg",
    color: "#5C7A8B",
    type: "Conceptual Study",
    tools: ["SketchUp", "Photoshop", "Procreate"],
    images: [
      "/images/projects/all-summer-in-a-day/all-summer-in-a-day-01.jpg",
      "/images/projects/all-summer-in-a-day/all-summer-in-a-day-02.jpg",
      "/images/projects/all-summer-in-a-day/all-summer-in-a-day-03.jpg",
      "/images/projects/all-summer-in-a-day/all-summer-in-a-day-04.jpg",
      "/images/projects/all-summer-in-a-day/all-summer-in-a-day-05.jpg",
    ],
  },
  {
    slug: "dc-apartment",
    title: "DC Apartment",
    category: "Production Design",
    description:
      "A contemporary DC apartment environment built from research and reference.",
    thumbnail: "/images/projects/dc-apartment/dc-apartment-01.jpg",
    color: "#8B7355",
    year: "2023",
    type: "Conceptual Study",
    tools: ["SketchUp", "Photoshop"],
    images: [
      "/images/projects/dc-apartment/dc-apartment-01.jpg",
      "/images/projects/dc-apartment/dc-apartment-02.jpg",
      "/images/projects/dc-apartment/dc-apartment-03.jpg",
      "/images/projects/dc-apartment/dc-apartment-04.jpg",
      "/images/projects/dc-apartment/dc-apartment-05.jpg",
    ],
  },

  // ─── PRODUCTION DESIGN — INDUSTRY (TV / Events) ───
  {
    slug: "industry-set-design",
    title: "Industry Set Design",
    category: "Production Design",
    description:
      "Set decoration and event design as an independent contractor — Real Housewives of Beverly Hills, iHeart × The Lumineers, America's Most Wanted, and TMZ.",
    thumbnail: "/images/projects/industry-set-design/industry-set-design-03.jpg",
    color: "#A85C2C",
    year: "2025",
    type: "TV / Event Set Design",
    studio: "Studio Connelly",
    tools: ["SketchUp", "Photoshop", "Set decoration"],
    images: [
      "/images/projects/industry-set-design/industry-set-design-01.jpg",
      "/images/projects/industry-set-design/industry-set-design-02.png",
      "/images/projects/industry-set-design/industry-set-design-03.jpg",
      "/images/projects/industry-set-design/industry-set-design-04.jpg",
      "/images/projects/industry-set-design/industry-set-design-05.jpg",
      "/images/projects/industry-set-design/industry-set-design-06.jpg",
    ],
    details:
      "Independent contractor work spanning TV broadcast and live events. Deliverables include desk and lamp design comps for AMW, table layouts for TMZ, set treatment for iHeart × The Lumineers, furniture studies for Real Housewives of Beverly Hills, and original mood boards.",
  },

  // ─── VISUAL DEVELOPMENT ───
  {
    slug: "victorian-house",
    title: "Victorian House",
    category: "Visual Development",
    description: "Visual development project for a San Francisco Victorian — color study, environment design, and an animatic.",
    thumbnail: "/images/projects/victorian-house/studies/victorian-house-studies-01.jpg",
    color: "#7A9CC6",
    tools: ["Procreate", "Photoshop", "Animation"],
    sections: [
      {
        label: "Animatic",
        images: ["/images/projects/victorian-house/animatic/victorian-house-animatic-01.mp4"],
      },
      {
        label: "Studies",
        images: [
          "/images/projects/victorian-house/studies/victorian-house-studies-01.jpg",
          "/images/projects/victorian-house/studies/victorian-house-studies-02.jpg",
          "/images/projects/victorian-house/studies/victorian-house-studies-03.jpg",
          "/images/projects/victorian-house/studies/victorian-house-studies-04.jpg",
        ],
      },
    ],
    details:
      "A visual development study based on a San Francisco Victorian. Includes color value studies, environment design, and a short animatic. The project explores how light, weather, and time of day transform the same architectural subject.",
  },
  {
    slug: "lost-city-of-zeloria",
    title: "The Lost City of Zeloria",
    category: "Visual Development",
    description: "World-building and visual development for a fantastical lost civilization.",
    thumbnail: "/images/projects/lost-city-of-zeloria/lost-city-of-zeloria-01.jpg",
    color: "#7A9CC6",
    tools: ["Procreate", "Photoshop"],
    images: [
      "/images/projects/lost-city-of-zeloria/lost-city-of-zeloria-01.jpg",
      "/images/projects/lost-city-of-zeloria/lost-city-of-zeloria-02.jpg",
      "/images/projects/lost-city-of-zeloria/lost-city-of-zeloria-03.jpg",
      "/images/projects/lost-city-of-zeloria/lost-city-of-zeloria-04.jpg",
      "/images/projects/lost-city-of-zeloria/lost-city-of-zeloria-05.jpg",
    ],
  },
  {
    slug: "character-design",
    title: "Character Design",
    category: "Visual Development",
    description: "Character explorations and turnarounds across multiple style registers.",
    thumbnail: "/images/projects/character-design/character-design-01.jpg",
    color: "#A8B8D8",
    tools: ["Procreate", "Photoshop"],
    images: [
      "/images/projects/character-design/character-design-01.jpg",
      "/images/projects/character-design/character-design-02.jpg",
      "/images/projects/character-design/character-design-03.jpg",
      "/images/projects/character-design/character-design-04.jpg",
      "/images/projects/character-design/character-design-05.jpg",
      "/images/projects/character-design/character-design-06.jpg",
      "/images/projects/character-design/character-design-07.jpg",
      "/images/projects/character-design/character-design-08.jpg",
    ],
  },
  {
    slug: "environments",
    title: "Environments",
    category: "Visual Development",
    description: "Environment design and key frames — interiors, exteriors, atmospheres.",
    thumbnail: "/images/projects/environments/environments-02.jpg",
    color: "#9BAFCB",
    tools: ["Procreate", "Photoshop"],
    images: [
      "/images/projects/environments/environments-01.jpg",
      "/images/projects/environments/environments-02.jpg",
      "/images/projects/environments/environments-03.jpg",
      "/images/projects/environments/environments-04.jpg",
      "/images/projects/environments/environments-05.jpg",
      "/images/projects/environments/environments-06.jpg",
      "/images/projects/environments/environments-07.jpg",
      "/images/projects/environments/environments-08.jpg",
      "/images/projects/environments/environments-09.jpg",
    ],
  },
  {
    slug: "props",
    title: "Props",
    category: "Visual Development",
    description: "Prop design studies and details.",
    thumbnail: "/images/projects/props/props-01.jpg",
    color: "#B5C2D8",
    tools: ["Procreate", "Photoshop"],
    images: [
      "/images/projects/props/props-01.jpg",
      "/images/projects/props/props-02.jpg",
      "/images/projects/props/props-03.jpg",
    ],
  },
  // ─── FINE ART ───
  {
    slug: "oil-paintings",
    title: "Oil Paintings",
    category: "Fine Art",
    description: "Oil paintings on canvas — color, light, and figurative studies.",
    thumbnail: "/images/projects/oil-paintings/oil-paintings-01.jpg",
    color: "#F2B8C6",
    tools: ["Oil on canvas"],
    images: [
      "/images/projects/oil-paintings/oil-paintings-01.jpg",
      "/images/projects/oil-paintings/oil-paintings-02.jpg",
      "/images/projects/oil-paintings/oil-paintings-03.jpg",
      "/images/projects/oil-paintings/oil-paintings-04.jpg",
      "/images/projects/oil-paintings/oil-paintings-05.jpg",
      "/images/projects/oil-paintings/oil-paintings-06.jpg",
      "/images/projects/oil-paintings/oil-paintings-07.jpg",
      "/images/projects/oil-paintings/oil-paintings-08.jpg",
      "/images/projects/oil-paintings/oil-paintings-09.jpg",
      "/images/projects/oil-paintings/oil-paintings-10.jpg",
      "/images/projects/oil-paintings/oil-paintings-11.jpg",
      "/images/projects/oil-paintings/oil-paintings-12.jpg",
      "/images/projects/oil-paintings/oil-paintings-13.jpg",
      "/images/projects/oil-paintings/oil-paintings-14.jpg",
      "/images/projects/oil-paintings/oil-paintings-15.jpg",
      "/images/projects/oil-paintings/oil-paintings-16.jpg",
      "/images/projects/oil-paintings/oil-paintings-17.jpg",
    ],
  },
  {
    slug: "acrylic-paintings",
    title: "Acrylic Paintings",
    category: "Fine Art",
    description: "Acrylic on canvas — bolder palettes and faster studies than the oils.",
    thumbnail: "/images/projects/acrylic-paintings/acrylic-paintings-01.jpg",
    color: "#E8A8B4",
    tools: ["Acrylic on canvas"],
    images: [
      "/images/projects/acrylic-paintings/acrylic-paintings-01.jpg",
      "/images/projects/acrylic-paintings/acrylic-paintings-02.jpg",
      "/images/projects/acrylic-paintings/acrylic-paintings-03.jpg",
      "/images/projects/acrylic-paintings/acrylic-paintings-04.jpg",
      "/images/projects/acrylic-paintings/acrylic-paintings-05.jpg",
      "/images/projects/acrylic-paintings/acrylic-paintings-06.jpg",
      "/images/projects/acrylic-paintings/acrylic-paintings-07.jpg",
    ],
  },
  {
    slug: "graphite-charcoal",
    title: "Graphite & Charcoal",
    category: "Fine Art",
    description: "Drawings in graphite and charcoal — figure studies and observation.",
    thumbnail: "/images/projects/graphite-charcoal/graphite-charcoal-01.jpg",
    color: "#8A8580",
    tools: ["Graphite", "Charcoal"],
    images: [
      "/images/projects/graphite-charcoal/graphite-charcoal-01.jpg",
      "/images/projects/graphite-charcoal/graphite-charcoal-02.jpg",
      "/images/projects/graphite-charcoal/graphite-charcoal-03.jpg",
      "/images/projects/graphite-charcoal/graphite-charcoal-04.jpg",
      "/images/projects/graphite-charcoal/graphite-charcoal-05.jpg",
      "/images/projects/graphite-charcoal/graphite-charcoal-06.jpg",
      "/images/projects/graphite-charcoal/graphite-charcoal-07.jpg",
    ],
  },
  {
    slug: "oil-pastels",
    title: "Oil Pastels",
    category: "Fine Art",
    description: "Oil pastel studies — texture, layering, and color blocking.",
    thumbnail: "/images/projects/oil-pastels/oil-pastels-01.jpg",
    color: "#E8B85C",
    tools: ["Oil pastel"],
    images: [
      "/images/projects/oil-pastels/oil-pastels-01.jpg",
      "/images/projects/oil-pastels/oil-pastels-02.jpg",
      "/images/projects/oil-pastels/oil-pastels-03.jpg",
      "/images/projects/oil-pastels/oil-pastels-04.jpg",
    ],
  },
  {
    slug: "sketchbook-process",
    title: "Sketchbook & Process",
    category: "Fine Art",
    description:
      "A landing area for raw work in progress. Sketchbook pages — visual diary of travel, portraits, and ideas — alongside digital studies, experiments, and personal pieces.",
    thumbnail: "/images/projects/sketchbook/sketchbook-01.jpg",
    color: "#B8C8E0",
    type: "Process & WIP",
    tools: ["Procreate", "Photoshop", "Pencil", "Pen"],
    sections: [
      {
        label: "Sketchbook",
        images: [
          "/images/projects/sketchbook/sketchbook-01.jpg",
          "/images/projects/sketchbook/sketchbook-02.jpg",
          "/images/projects/sketchbook/sketchbook-03.jpg",
          "/images/projects/sketchbook/sketchbook-04.jpg",
          "/images/projects/sketchbook/sketchbook-05.jpg",
          "/images/projects/sketchbook/sketchbook-06.jpg",
          "/images/projects/sketchbook/sketchbook-07.jpg",
          "/images/projects/sketchbook/sketchbook-08.jpg",
          "/images/projects/sketchbook/sketchbook-09.jpg",
          "/images/projects/sketchbook/sketchbook-10.jpg",
          "/images/projects/sketchbook/sketchbook-11.jpg",
          "/images/projects/sketchbook/sketchbook-12.jpg",
          "/images/projects/sketchbook/sketchbook-13.jpg",
          "/images/projects/sketchbook/sketchbook-14.jpg",
        ],
      },
      {
        label: "Digital Studies",
        images: [
          "/images/projects/misc-digital-art/misc-digital-art-01.jpg",
          "/images/projects/misc-digital-art/misc-digital-art-02.jpg",
          "/images/projects/misc-digital-art/misc-digital-art-03.jpg",
        ],
      },
    ],
  },
  {
    slug: "quieting-the-noise",
    title: "Quieting the Noise: Tactility Through Feeling",
    category: "Fine Art",
    description:
      "A thematic body of work exploring tactility, dissociation, and material. Oil paintings, drawings, and exploration sketches.",
    thumbnail: "/images/projects/quieting-the-noise/final-pieces/quieting-the-noise-final-pieces-01.jpg",
    color: "#C58A6E",
    year: "2021",
    type: "Mixed Media Series",
    tools: ["Mixed media", "Oil on canvas", "Drawing"],
    sections: [
      {
        label: "Final Pieces",
        images: [
          "/images/projects/quieting-the-noise/final-pieces/quieting-the-noise-final-pieces-01.jpg",
          "/images/projects/quieting-the-noise/final-pieces/quieting-the-noise-final-pieces-02.jpg",
          "/images/projects/quieting-the-noise/final-pieces/quieting-the-noise-final-pieces-03.jpg",
          "/images/projects/quieting-the-noise/final-pieces/quieting-the-noise-final-pieces-04.jpg",
          "/images/projects/quieting-the-noise/final-pieces/quieting-the-noise-final-pieces-05.jpg",
          "/images/projects/quieting-the-noise/final-pieces/quieting-the-noise-final-pieces-06.jpg",
          "/images/projects/quieting-the-noise/final-pieces/quieting-the-noise-final-pieces-07.jpg",
          "/images/projects/quieting-the-noise/final-pieces/quieting-the-noise-final-pieces-08.jpg",
          "/images/projects/quieting-the-noise/final-pieces/quieting-the-noise-final-pieces-09.jpg",
        ],
      },
      {
        label: "Exploration",
        images: [
          "/images/projects/quieting-the-noise/exploration/quieting-the-noise-exploration-01.jpg",
          "/images/projects/quieting-the-noise/exploration/quieting-the-noise-exploration-02.jpg",
          "/images/projects/quieting-the-noise/exploration/quieting-the-noise-exploration-03.jpg",
          "/images/projects/quieting-the-noise/exploration/quieting-the-noise-exploration-04.jpg",
          "/images/projects/quieting-the-noise/exploration/quieting-the-noise-exploration-05.jpg",
        ],
      },
    ],
    details:
      "Quieting the Noise: Tactility Through Feeling. A thematic body of work from 2021 exploring tactility, dissociation, and material. Includes oil paintings, drawings, and exploration sketches.",
  },

  // ─── 3D & RENDERING ───
  {
    slug: "luxury-add-on",
    title: "Luxury Add-On",
    category: "3D Visualization",
    description: "Photorealistic interior renderings for a luxury residential add-on. Designed in Rhino, rendered in Enscape, and then built. Drag the slider on each pair to compare the rendering with the finished space.",
    thumbnail: "/images/projects/luxury-add-on/luxury-add-on-06.jpg",
    color: "#4CB963",
    tools: ["Rhino", "Enscape", "Photoshop"],
    sections: [
      {
        label: "Rendering vs Built",
        compares: [
          {
            before: "/images/projects/luxury-add-on/luxury-add-on-11.jpg",
            after: "/images/projects/luxury-add-on/luxury-add-on-06.jpg",
            caption: "Media Room",
          },
          {
            before: "/images/projects/luxury-add-on/luxury-add-on-10.jpg",
            after: "/images/projects/luxury-add-on/luxury-add-on-14.jpg",
            caption: "Game Room",
          },
          {
            before: "/images/projects/luxury-add-on/luxury-add-on-07.jpg",
            after: "/images/projects/luxury-add-on/luxury-add-on-03.jpg",
            caption: "Pool Table Detail",
          },
          {
            before: "/images/projects/luxury-add-on/luxury-add-on-12.jpg",
            after: "/images/projects/luxury-add-on/luxury-add-on-13.jpg",
            caption: "Wet Bar",
          },
        ],
      },
      {
        label: "Additional Renderings",
        images: [
          "/images/projects/luxury-add-on/luxury-add-on-09.jpg",
          "/images/projects/luxury-add-on/luxury-add-on-08.jpg",
          "/images/projects/luxury-add-on/luxury-add-on-01.jpg",
        ],
      },
      {
        label: "Additional Photos",
        images: [
          "/images/projects/luxury-add-on/luxury-add-on-02.jpg",
          "/images/projects/luxury-add-on/luxury-add-on-04.jpg",
          "/images/projects/luxury-add-on/luxury-add-on-05.jpg",
        ],
      },
    ],
  },
  {
    slug: "friends-apartment",
    title: "Friends Apartment",
    category: "3D Visualization",
    description: "3D model and rendering study of an interior apartment scene.",
    thumbnail: "/images/projects/friends-apartment/friends-apartment-01.jpg",
    color: "#3DA854",
    tools: ["Rhino", "SketchUp", "Enscape"],
    images: [
      "/images/projects/friends-apartment/friends-apartment-01.jpg",
      "/images/projects/friends-apartment/friends-apartment-02.jpg",
    ],
  },

  // ─── PHOTOGRAPHY ───
  {
    slug: "people-portrait",
    title: "People & Portrait Photography",
    category: "Photography",
    description: "Portraits and candid people photography — light, expression, presence.",
    thumbnail: "/images/projects/people-portrait/people-portrait-01.jpg",
    color: "#F5C842",
    tools: ["Canon", "Lightroom"],
    images: [
      "/images/projects/people-portrait/people-portrait-01.jpg",
      "/images/projects/people-portrait/people-portrait-02.jpg",
      "/images/projects/people-portrait/people-portrait-03.jpg",
      "/images/projects/people-portrait/people-portrait-04.jpg",
      "/images/projects/people-portrait/people-portrait-05.jpg",
      "/images/projects/people-portrait/people-portrait-06.jpg",
      "/images/projects/people-portrait/people-portrait-07.jpg",
      "/images/projects/people-portrait/people-portrait-08.jpg",
      "/images/projects/people-portrait/people-portrait-09.jpg",
      "/images/projects/people-portrait/people-portrait-10.jpg",
      "/images/projects/people-portrait/people-portrait-11.jpg",
      "/images/projects/people-portrait/people-portrait-12.jpg",
      "/images/projects/people-portrait/people-portrait-13.jpg",
      "/images/projects/people-portrait/people-portrait-14.jpg",
      "/images/projects/people-portrait/people-portrait-15.jpg",
      "/images/projects/people-portrait/people-portrait-16.jpg",
      "/images/projects/people-portrait/people-portrait-17.jpg",
      "/images/projects/people-portrait/people-portrait-18.jpg",
      "/images/projects/people-portrait/people-portrait-19.jpg",
      "/images/projects/people-portrait/people-portrait-20.jpg",
    ],
  },
  {
    slug: "product-photography",
    title: "Product Photography",
    category: "Photography",
    description: "Product and still life photography — texture, color, composition.",
    thumbnail: "/images/projects/product-photography/product-photography-01.jpg",
    color: "#E8B538",
    tools: ["Canon", "Lightroom"],
    images: [
      "/images/projects/product-photography/product-photography-01.jpg",
      "/images/projects/product-photography/product-photography-02.jpg",
      "/images/projects/product-photography/product-photography-03.jpg",
      "/images/projects/product-photography/product-photography-04.jpg",
      "/images/projects/product-photography/product-photography-05.jpg",
      "/images/projects/product-photography/product-photography-06.jpg",
      "/images/projects/product-photography/product-photography-07.jpg",
      "/images/projects/product-photography/product-photography-08.jpg",
      "/images/projects/product-photography/product-photography-09.jpg",
      "/images/projects/product-photography/product-photography-10.jpg",
    ],
  },
  {
    slug: "editorial-photography",
    title: "Editorial Photography",
    category: "Photography",
    description: "Selected editorial and personal photography — events, places, moments.",
    thumbnail: "/images/projects/editorial-photography/editorial-photography-04.jpg",
    color: "#C9A03A",
    tools: ["Canon", "Lightroom", "Photoshop"],
    images: [
      "/images/projects/editorial-photography/editorial-photography-01.jpg",
      "/images/projects/editorial-photography/editorial-photography-02.jpg",
      "/images/projects/editorial-photography/editorial-photography-03.jpg",
      "/images/projects/editorial-photography/editorial-photography-04.jpg",
      "/images/projects/editorial-photography/editorial-photography-05.jpg",
      "/images/projects/editorial-photography/editorial-photography-06.jpg",
      "/images/projects/editorial-photography/editorial-photography-07.jpg",
      "/images/projects/editorial-photography/editorial-photography-08.jpg",
      "/images/projects/editorial-photography/editorial-photography-09.jpg",
      "/images/projects/editorial-photography/editorial-photography-10.jpg",
      "/images/projects/editorial-photography/editorial-photography-11.jpg",
      "/images/projects/editorial-photography/editorial-photography-12.jpg",
      "/images/projects/editorial-photography/editorial-photography-13.jpg",
      "/images/projects/editorial-photography/editorial-photography-14.jpg",
      "/images/projects/editorial-photography/editorial-photography-15.jpg",
      "/images/projects/editorial-photography/editorial-photography-16.jpg",
      "/images/projects/editorial-photography/editorial-photography-17.jpg",
      "/images/projects/editorial-photography/editorial-photography-18.jpg",
    ],
  },

  // ─── GRAPHIC DESIGN ───
  {
    slug: "album-artwork",
    title: "Album Artwork",
    category: "Graphic Design",
    description:
      "Album covers and tracklists for musician Lizzy Hilliard — growth vol. 1, Cheer, and the Abington single release.",
    thumbnail: "/images/projects/album-artwork/album-artwork-01.jpg",
    color: "#C5D5B0",
    type: "Album Artwork",
    tools: ["Photoshop", "Procreate", "Lightroom"],
    images: [
      "/images/projects/album-artwork/album-artwork-01.jpg",
      "/images/projects/album-artwork/album-artwork-02.jpg",
      "/images/projects/album-artwork/album-artwork-03.jpg",
      "/images/projects/album-artwork/album-artwork-04.png",
      "/images/projects/album-artwork/album-artwork-05.jpg",
      "/images/projects/album-artwork/album-artwork-06.jpg",
    ],
  },
  {
    slug: "logos",
    title: "Logos & Brand Marks",
    category: "Graphic Design",
    description:
      "Logos and brand identity work — TCFI, ADC, Drawmylifeout, and other studies.",
    thumbnail: "/images/projects/logos/logos-01.png",
    color: "#B0C5A0",
    type: "Brand Marks",
    tools: ["Illustrator", "Photoshop", "Procreate"],
    images: [
      "/images/projects/logos/logos-01.png",
      "/images/projects/logos/logos-02.png",
      "/images/projects/logos/logos-03.png",
      "/images/projects/logos/logos-04.png",
    ],
  },
];
