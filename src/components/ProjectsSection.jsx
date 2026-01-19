import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";

const ProjectImage = ({
  image,
  images,
  title,
  intervalDuration = 2100,
  isHovered = false,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = images && images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;

    if (!isHovered) {
      setCurrentImageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [hasMultipleImages, images, intervalDuration, isHovered]);

  if (!hasMultipleImages) {
    return (
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    );
  }

  return (
    <div className="relative w-full h-full">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${title} - ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 ${
            index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Pixel Color Editor",
    description:
      "An interactive pixel art editor with relational colour transformation.",
    image: "projects/project1/1.png",
    images: ["projects/project1/1.png", "projects/project1/2.png", "projects/project1/3.png"],
    intervalDuration: 1500,
    tags: ["HTML/CSS", "React", "TypeScript"],
    demoUrl: "https://ruowen6.github.io/pixel-color-editor/",
    githubUrl: "https://github.com/ruowen6/pixel-color-editor",
  },
  {
    id: 2,
    title: "Octopus König misses you",
    description:
      "A text-based mini love game with COD (Call of Duty): König, but why is he an octopus?",
    image: "projects/project2/1.png",
    images: ["projects/project2/1.png", "projects/project2/2.png"],
    intervalDuration: 1800,
    tags: ["HTML/CSS", "React", "TypeScript"],
    demoUrl: "https://ruowen6.github.io/konig-octopus/",
    githubUrl: "https://github.com/ruowen6/konig-octopus",
  },
  {
    id: 3,
    title: "Audio Wave Painter",
    description: "A real-time audio-wave painting tool.",
    image: "projects/project3/1.png",
    images: ["projects/project3/1.png", "projects/project3/2.png", "projects/project3/3.png"],
    intervalDuration: 1500,
    tags: ["HTML/CSS", "JavaScript"],
    demoUrl: "https://ruowen6.github.io/audio-wave-painter/",
    githubUrl: "https://github.com/ruowen6/audio-wave-painter",
  },
];

export const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-48 overflow-hidden relative">
                <ProjectImage
                  image={project.image}
                  images={project.images}
                  title={project.title}
                  intervalDuration={project.intervalDuration}
                  isHovered={hoveredIndex === index}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ruowen6"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
