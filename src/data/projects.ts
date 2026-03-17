export type Category =
  | "Production Design"
  | "Visual Development"
  | "Fine Art"
  | "3D & Rendering"
  | "Photography"
  | "Graphic Design";

export interface Project {
  slug: string;
  title: string;
  category: Category;
  description: string;
  thumbnail: string;
  color: string;
  year?: string;
  tools?: string[];
  images?: string[];
  details?: string;
}

export const categories: Category[] = [
  "Production Design",
  "Visual Development",
  "Fine Art",
  "3D & Rendering",
  "Photography",
  "Graphic Design",
];

export const categoryColors: Record<Category, string> = {
  "Production Design": "#4A7CE8",
  "Visual Development": "#A8B8D8",
  "Fine Art": "#F2B8C6",
  "3D & Rendering": "#4CB963",
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
    heroImage: "/images/projects/the-bonsai/dungeon-1.jpg",
  },
  {
    slug: "visual-development",
    name: "Visual Development",
    tagline: "World-building, character design, and visual storytelling.",
    heroImage: "/images/projects/lost-city-of-zeloria/zeloria-1.jpg",
  },
  {
    slug: "fine-art",
    name: "Fine Art",
    tagline: "Oil paintings, drawings, and explorations in color and form.",
    heroImage: "/images/projects/fine-art/painting-1.jpeg",
  },
  {
    slug: "3d-rendering",
    name: "3D & Rendering",
    tagline: "Custom 3D models and photorealistic renders in Rhino and Enscape.",
    heroImage: "/images/projects/interior-renderings/bathroom.jpg",
  },
  {
    slug: "photography",
    name: "Photography",
    tagline: "Capturing moments, textures, and stories through a thoughtful lens.",
    heroImage: "/images/projects/photography/photo-1.jpeg",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    tagline: "Album art, packaging, promotional materials, and brand collateral.",
    heroImage: "/images/projects/graphic-design/growth-cover.jpg",
  },
];

// Private projects (password-protected)
export const privateProjects: Project[] = [
  {
    slug: "wake-up-dead-man",
    title: "Wake Up Dead Man: A Knives Out Mystery",
    category: "Production Design",
    description:
      "Premiere event production design for Netflix's Knives Out sequel. Designed an immersive gothic cathedral-inspired set with custom stained glass graphics, step-and-repeat walls, and specialty drink menus.",
    thumbnail: "/images/projects/wake-up-dead-man/thumb.jpg",
    color: "#2D2D2D",
    year: "2025",
    tools: ["Rhino", "Enscape", "Photoshop", "Illustrator"],
    images: [
      "/images/projects/wake-up-dead-man/set-front.jpg",
      "/images/projects/wake-up-dead-man/set-angle.jpg",
      "/images/projects/wake-up-dead-man/altar-detail.jpg",
      "/images/projects/wake-up-dead-man/carpet-crowd.jpg",
      "/images/projects/wake-up-dead-man/talent-on-set.jpg",
      "/images/projects/wake-up-dead-man/render-front.jpg",
      "/images/projects/wake-up-dead-man/render-corner.jpg",
      "/images/projects/wake-up-dead-man/render-crews.jpg",
      "/images/projects/wake-up-dead-man/drink-menu.png",
    ],
    details:
      "Production design for the Netflix premiere event of Wake Up Dead Man: A Knives Out Mystery. The immersive set featured a gothic cathedral aesthetic with custom stained glass window graphics, a stone altar centerpiece with candelabras, branded step-and-repeat walls, and a specialty cocktail menu. Work spanned from initial 3D renders in Rhino/Enscape through final on-site installation.",
  },
  {
    slug: "happy-gilmore-2",
    title: "Happy Gilmore 2",
    category: "Production Design",
    description:
      "Premiere event production design for Netflix's Happy Gilmore 2. Created a golf clubhouse locker room set with branded elements, judges desk, and immersive fan experience.",
    thumbnail: "/images/projects/happy-gilmore/thumb.jpg",
    color: "#2E5A1C",
    year: "2025",
    tools: ["Rhino", "Enscape", "Photoshop", "Illustrator"],
    images: [
      "/images/projects/happy-gilmore/locker-wide.jpg",
      "/images/projects/happy-gilmore/locker-detail.jpg",
      "/images/projects/happy-gilmore/judges-desk.jpg",
      "/images/projects/happy-gilmore/render.jpg",
    ],
    details:
      "Production design for the Netflix premiere event of Happy Gilmore 2. Designed and executed a golf clubhouse locker room environment featuring branded cubbies with golf bags, trophies, and wardrobe elements. Also designed a commentator judges desk and large-format LED backdrop. 3D renders were created in Rhino and Enscape to visualize the space before build.",
  },
  {
    slug: "frankenstein",
    title: "Frankenstein",
    category: "Production Design",
    description:
      "Premiere event production design for Netflix's Frankenstein. Designed a laboratory-inspired set with industrial props, branded step-and-repeat, and a custom Hollywood landmarks map graphic.",
    thumbnail: "/images/projects/frankenstein/thumb.jpg",
    color: "#8B4513",
    year: "2025",
    tools: ["Rhino", "Enscape", "Photoshop", "Illustrator"],
    images: [
      "/images/projects/frankenstein/set-overview.jpg",
      "/images/projects/frankenstein/step-repeat.jpg",
      "/images/projects/frankenstein/hollywood-map.jpg",
    ],
    details:
      "Production design for the Netflix premiere event of Frankenstein. Created an immersive laboratory environment featuring industrial machinery props, branded tile walls, and a custom illustrated Hollywood landmarks map. The design drew from the film's gothic science-fiction aesthetic while maintaining Netflix's premiere event standards.",
  },
];

export const projects: Project[] = [
  // Production Design
  {
    slug: "the-bonsai",
    title: "The Bonsai",
    category: "Production Design",
    description:
      "Production design for a short film about an agoraphobic woman confronting her past. Designed three distinct sets: a dungeon, hoarder house, and magical forest.",
    thumbnail: "/images/projects/the-bonsai/dungeon-1.jpg",
    color: "#4A7CE8",
    year: "2024",
    tools: ["SketchUp", "Photoshop", "Hand-built sets"],
    images: [
      "/images/projects/the-bonsai/dungeon-1.jpg",
      "/images/projects/the-bonsai/dungeon-2.jpg",
      "/images/projects/the-bonsai/dungeon-3.jpg",
      "/images/projects/the-bonsai/hoarder-1.jpg",
      "/images/projects/the-bonsai/hoarder-2.jpg",
      "/images/projects/the-bonsai/forest-1.jpg",
      "/images/projects/the-bonsai/forest-2.jpg",
      "/images/projects/the-bonsai/bts.jpeg",
      "/images/projects/the-bonsai/plans.jpg",
      "/images/projects/the-bonsai/layout.jpg",
    ],
    details:
      "When a desperately needed box is delivered across the street from an agoraphobic woman, she must confront her verbally-abusive mother in order to leave the prison she's created for herself. Designed and built sets including hand-carved foam dungeon, detailed hoarder house interior, and magical forest environment.",
  },
  {
    slug: "kissinger-takes-paris",
    title: "Kissinger Takes Paris",
    category: "Production Design",
    description: "Proof of concept production design for a period piece set in 1968 Paris.",
    thumbnail: "/images/projects/kissinger-takes-paris/kissinger-1.jpg",
    color: "#C4533C",
    year: "2023",
    tools: ["SketchUp", "Photoshop", "Research"],
    images: [
      "/images/projects/kissinger-takes-paris/kissinger-1.jpg",
      "/images/projects/kissinger-takes-paris/kissinger-2.jpg",
      "/images/projects/kissinger-takes-paris/kissinger-3.jpg",
      "/images/projects/kissinger-takes-paris/kissinger-4.jpg",
      "/images/projects/kissinger-takes-paris/kissinger-5.jpg",
      "/images/projects/kissinger-takes-paris/newspaper.jpg",
    ],
  },

  // Visual Development
  {
    slug: "lost-city-of-zeloria",
    title: "The Lost City of Zeloria",
    category: "Visual Development",
    description:
      "World-building and visual development for a fantastical lost civilization.",
    thumbnail: "/images/projects/lost-city-of-zeloria/zeloria-1.jpg",
    color: "#7A9CC6",
    tools: ["Procreate", "Photoshop"],
    images: [
      "/images/projects/lost-city-of-zeloria/zeloria-1.jpg",
      "/images/projects/lost-city-of-zeloria/zeloria-2.jpg",
      "/images/projects/lost-city-of-zeloria/zeloria-3.jpg",
      "/images/projects/lost-city-of-zeloria/zeloria-4.jpg",
      "/images/projects/lost-city-of-zeloria/zeloria-5.jpg",
      "/images/projects/lost-city-of-zeloria/zeloria-6.jpg",
    ],
  },
  {
    slug: "sketchbook-illustrations",
    title: "Sketchbook & Illustrations",
    category: "Visual Development",
    description:
      "Personal illustration work and sketchbook explorations.",
    thumbnail: "/images/projects/sketchbook/sketch-1.jpg",
    color: "#B8C8E0",
    tools: ["Procreate", "Pencil", "Pen"],
    images: [
      "/images/projects/sketchbook/sketch-1.jpg",
      "/images/projects/sketchbook/sketch-2.jpeg",
      "/images/projects/sketchbook/sketch-3.jpg",
      "/images/projects/sketchbook/sketch-4.jpeg",
      "/images/projects/sketchbook/sketch-5.jpg",
      "/images/projects/sketchbook/sketch-6.jpg",
      "/images/projects/sketchbook/mexico.jpg",
    ],
  },

  // Fine Art
  {
    slug: "oil-paintings",
    title: "Oil Paintings",
    category: "Fine Art",
    description: "Collection of oil paintings exploring color, light, and form.",
    thumbnail: "/images/projects/fine-art/painting-1.jpeg",
    color: "#F2B8C6",
    tools: ["Oil on canvas"],
    images: [
      "/images/projects/fine-art/painting-1.jpeg",
      "/images/projects/fine-art/painting-2.jpg",
      "/images/projects/fine-art/painting-3.jpeg",
      "/images/projects/fine-art/painting-4.jpeg",
      "/images/projects/fine-art/painting-5.jpeg",
      "/images/projects/fine-art/painting-6.jpg",
      "/images/projects/fine-art/painting-7.jpeg",
      "/images/projects/fine-art/painting-8.jpeg",
    ],
  },
  {
    slug: "sketches-drawings",
    title: "Sketches & Drawings",
    category: "Fine Art",
    description: "Graphite and charcoal drawings, figure studies, and observational sketches.",
    thumbnail: "/images/projects/sketchbook/sketch-3.jpg",
    color: "#E0A0B4",
    tools: ["Graphite", "Charcoal", "Pen"],
    images: [
      "/images/projects/sketchbook/sketch-3.jpg",
      "/images/projects/sketchbook/sketch-4.jpeg",
      "/images/projects/sketchbook/sketch-5.jpg",
      "/images/projects/sketchbook/sketch-6.jpg",
    ],
  },

  // 3D & Rendering
  {
    slug: "3d-modeling",
    title: "3D Modeling",
    category: "3D & Rendering",
    description: "3D models and digital environments built in Rhino and SketchUp with custom textures.",
    thumbnail: "/images/projects/interior-renderings/theater.jpg",
    color: "#4CB963",
    tools: ["Rhino", "SketchUp", "Enscape"],
    images: [
      "/images/projects/interior-renderings/theater.jpg",
      "/images/projects/interior-renderings/night-render.jpg",
    ],
  },
  {
    slug: "interior-renderings",
    title: "Interior Design Renderings",
    category: "3D & Rendering",
    description:
      "Photorealistic renderings for interior design and event spaces, built in Rhino and rendered in Enscape.",
    thumbnail: "/images/projects/interior-renderings/bathroom.jpg",
    color: "#3DA854",
    tools: ["Rhino", "Enscape", "Photoshop"],
    images: [
      "/images/projects/interior-renderings/bathroom.jpg",
      "/images/projects/interior-renderings/bedroom-1.jpg",
      "/images/projects/interior-renderings/bedroom-2.jpg",
    ],
  },

  // Photography
  {
    slug: "photography",
    title: "Photography",
    category: "Photography",
    description:
      "Collection of photography work spanning portraits, events, and documentary.",
    thumbnail: "/images/projects/photography/photo-1.jpeg",
    color: "#F5C842",
    tools: ["Canon", "Lightroom"],
    images: [
      "/images/projects/photography/photo-1.jpeg",
      "/images/projects/photography/photo-2.jpeg",
      "/images/projects/photography/photo-3.jpeg",
      "/images/projects/photography/photo-4.jpeg",
      "/images/projects/photography/photo-5.jpeg",
      "/images/projects/photography/photo-6.jpeg",
      "/images/projects/photography/photo-7.jpeg",
      "/images/projects/photography/photo-8.jpeg",
    ],
  },

  // Graphic Design
  {
    slug: "album-artwork",
    title: "Album Artwork",
    category: "Graphic Design",
    description:
      "Album covers and single artwork for musician Lizzy Hilliard: growth vol. 1 & 2, cheer, and more.",
    thumbnail: "/images/projects/graphic-design/growth-cover.jpg",
    color: "#C5D5B0",
    tools: ["Photoshop", "Procreate", "Lightroom"],
    images: [
      "/images/projects/graphic-design/growth-cover.jpg",
      "/images/projects/graphic-design/album-1.jpg",
      "/images/projects/graphic-design/album-2.jpg",
      "/images/projects/graphic-design/sophie.jpg",
    ],
  },
  {
    slug: "packaging-props",
    title: "Packaging & Props Design",
    category: "Graphic Design",
    description:
      "Packaging design including grow light box for The Bonsai short film.",
    thumbnail: "/images/projects/graphic-design/led-light.jpg",
    color: "#B0C5A0",
    tools: ["Canva", "Photoshop"],
    images: [
      "/images/projects/graphic-design/led-light.jpg",
      "/images/projects/graphic-design/bonsai-photo.jpg",
      "/images/projects/graphic-design/jukebox.png",
    ],
  },
  {
    slug: "promotional-design",
    title: "Promotional & Flyer Design",
    category: "Graphic Design",
    description:
      "Theater flyers, promotional materials, and marketing collateral.",
    thumbnail: "/images/projects/graphic-design/flight-school.png",
    color: "#A5BA95",
    tools: ["Canva", "Procreate"],
    images: [
      "/images/projects/graphic-design/flight-school.png",
    ],
  },
];
