import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, MapPin, Calendar, Compass, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    name: "The Obsidian Penthouse",
    category: "Apartment",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1000",
    desc: "A bold, dark-themed penthouse balancing charcoal gray marble with gold-inlay profile lines and rich velvet textures.",
    location: "Mumbai",
    designer: "Vansh",
    area: "4,200 Sq. Ft.",
    year: "2025"
  },
  {
    id: 2,
    name: "Villa Lumina",
    category: "Villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
    desc: "An expansive minimalist villa using double-height glass facades, natural stone walls, and ambient cove lighting.",
    location: "Alibaug",
    designer: "Vansh",
    area: "7,500 Sq. Ft.",
    year: "2024"
  },
  {
    id: 3,
    name: "Synergy Corporate HQ",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
    desc: "A premium corporate office featuring green partition walls, biophilic integrations, and customizable acoustic ceilings.",
    location: "Bangalore",
    designer: "Vansh",
    area: "12,000 Sq. Ft.",
    year: "2025"
  },
  {
    id: 4,
    name: "The Culinary Hearth",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000",
    desc: "A sleek German-engineered kitchen matching high-gloss handleless cabinets, built-in cooktops, and a marble island.",
    location: "Delhi NCR",
    designer: "Vansh",
    area: "650 Sq. Ft.",
    year: "2025"
  },
  {
    id: 5,
    name: "Sanctuary Master Bedroom",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000",
    desc: "A warm, neutral master bedroom featuring a fluted wood accent wall, gold light sconces, and an integrated dressing room.",
    location: "Pune",
    designer: "Vansh",
    area: "800 Sq. Ft.",
    year: "2024"
  },
  {
    id: 6,
    name: "The Marble Lounge",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1000",
    desc: "A luxury social living space centered around a backlit bookmatched Italian marble wall and custom modular sofas.",
    location: "Hyderabad",
    designer: "Vansh",
    area: "1,200 Sq. Ft.",
    year: "2025"
  },
  {
    id: 7,
    name: "Minimalist Loft Studio",
    category: "Apartment",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1000",
    desc: "An open-plan urban loft utilizing smart partition shelves, polished micro-concrete floors, and custom light tracks.",
    location: "Mumbai",
    designer: "Vansh",
    area: "1,500 Sq. Ft.",
    year: "2024"
  },
  {
    id: 8,
    name: "The Chandelier Estate",
    category: "Villa",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
    desc: "A grand dining and formal living hall dominated by a double-ring custom gold chandelier and tall arched windows.",
    location: "Chennai",
    designer: "Vansh",
    area: "8,200 Sq. Ft.",
    year: "2025"
  }
];

const CATEGORIES = ["All", "Apartment", "Villa", "Office", "Kitchen", "Bedroom", "Living Room"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  const handleInquireClick = () => {
    setSelectedProject(null);
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-bold divider-gold">
            Our Works
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mt-4 font-plus-jakarta">
            Masterpieces of Living Art
          </h2>
          <p className="text-gray-500 font-light mt-4 max-w-xl mx-auto text-sm md:text-base">
            Explore a curated selection of our award-winning interior architecture and turnkey design projects.
          </p>
        </div>

        {/* Categories Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-gold-gradient text-primary shadow-md font-bold"
                  : "bg-secondary text-gray-500 hover:bg-gray-200 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative h-[350px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <img
                  src={`${project.image.split("?")[0]}?auto=format&fit=crop&w=600&q=40`}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Shading Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-90 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-[10px] uppercase font-bold tracking-widest mb-2 backdrop-blur-md">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white font-plus-jakarta tracking-tight mb-4">
                      {project.name}
                    </h3>
                  </div>

                  {/* View Details Reveal Button */}
                  <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-300 flex items-center">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider">
                      <span>View Details</span>
                      <Search className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-primary border border-white/10 rounded-3xl overflow-hidden max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-accent transition-colors border border-white/10 cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column - Large Image (7 Cols) */}
              <div className="lg:col-span-7 h-[250px] sm:h-[350px] lg:h-[500px]">
                <img
                  src={`${selectedProject.image.split("?")[0]}?auto=format&fit=crop&w=1200&q=60`}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column - Project Stats/Desc (5 Cols) */}
              <div className="lg:col-span-5 p-8 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent text-[10px] uppercase font-bold tracking-widest">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white font-plus-jakarta mb-4">
                    {selectedProject.name}
                  </h3>
                  <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
                    {selectedProject.desc}
                  </p>

                  {/* Project Details Grid */}
                  <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-accent">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Location</p>
                        <p className="text-white text-xs font-medium">{selectedProject.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-accent">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Designer</p>
                        <p className="text-white text-xs font-medium">{selectedProject.designer}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-accent">
                        <Search className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Area</p>
                        <p className="text-white text-xs font-medium">{selectedProject.area}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-accent">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Year</p>
                        <p className="text-white text-xs font-medium">{selectedProject.year}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={handleInquireClick}
                    className="w-full py-4 rounded-xl bg-gold-gradient text-primary font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 shadow-md hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <span>Inquire About Similar Design</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
