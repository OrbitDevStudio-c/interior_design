import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Search, MapPin, Calendar, BedDouble,
  CalendarRange, CalendarCheck2, ArrowRight,
  ChevronLeft, ChevronRight, PlayCircle,
} from "lucide-react";
import MagneticButton from "./MagneticButton";

const GALLERY = {
  obsidian:   "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1400",
  villa:      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400",
  office:     "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400",
  kitchen:    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1400",
  bedroom:    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400",
  lounge:     "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1400",
  loft:       "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1400",
  chandelier: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400",
};

const PROJECTS = [
  {
    id: 1,
    num: "01",
    name: "THE OBSIDIAN PENTHOUSE",
    category: "Apartment",
    images: [GALLERY.obsidian, GALLERY.loft, GALLERY.bedroom, GALLERY.lounge],
    video: "/obsidian-penthouse.mp4",
    desc: "A bold, dark-themed penthouse balancing charcoal gray marble with gold-inlay profile lines and rich velvet textures.",
    location: "Mumbai, MH",
    bhk: "4 BHK Penthouse",
    area: "4,200 Sq. Ft.",
    year: "2025",
    startDate: "Jan 2025",
    endDate: "Jun 2025",
  },
  {
    id: 2,
    num: "02",
    name: "VILLA LUMINA",
    category: "Villa",
    images: [GALLERY.villa, GALLERY.chandelier, GALLERY.lounge, GALLERY.bedroom],
    video: "/obsidian-penthouse.mp4",
    desc: "An expansive minimalist villa utilizing double-height glass facades, monolithic natural stone walls, and ambient cove lighting.",
    location: "Alibaug, MH",
    bhk: "5 BHK Luxury Villa",
    area: "7,500 Sq. Ft.",
    year: "2024",
    startDate: "Mar 2024",
    endDate: "Nov 2024",
  },
  {
    id: 3,
    num: "03",
    name: "SYNERGY CORPORATE HQ",
    category: "Office",
    images: [GALLERY.office, GALLERY.loft, GALLERY.obsidian, GALLERY.kitchen],
    video: "/obsidian-penthouse.mp4",
    desc: "A premium corporate headquarters featuring biophilic partition walls, executive private suites, and customizable acoustic ceilings.",
    location: "Bangalore, KA",
    bhk: "Open Floor Plan",
    area: "12,000 Sq. Ft.",
    year: "2025",
    startDate: "Feb 2025",
    endDate: "Aug 2025",
  },
  {
    id: 4,
    num: "04",
    name: "THE CULINARY HEARTH",
    category: "Kitchen",
    images: [GALLERY.kitchen, GALLERY.lounge, GALLERY.villa, GALLERY.bedroom],
    video: "/obsidian-penthouse.mp4",
    desc: "A sleek German-engineered kitchen matching handleless matte black cabinetry, built-in cooktops, and a monolithic marble island.",
    location: "Delhi NCR",
    bhk: "Modular Kitchen",
    area: "650 Sq. Ft.",
    year: "2025",
    startDate: "Apr 2025",
    endDate: "Jun 2025",
  },
  {
    id: 5,
    num: "05",
    name: "SANCTUARY MASTER BEDROOM",
    category: "Bedroom",
    images: [GALLERY.bedroom, GALLERY.obsidian, GALLERY.loft, GALLERY.chandelier],
    video: "/obsidian-penthouse.mp4",
    desc: "A tranquil master suite featuring fluted oak panels, warm brushed brass sconces, and an integrated private dressing lounge.",
    location: "Pune, MH",
    bhk: "Master Suite",
    area: "800 Sq. Ft.",
    year: "2024",
    startDate: "Jun 2024",
    endDate: "Sep 2024",
  },
  {
    id: 6,
    num: "06",
    name: "THE MARBLE LOUNGE",
    category: "Living Room",
    images: [GALLERY.lounge, GALLERY.villa, GALLERY.chandelier, GALLERY.office],
    video: "/obsidian-penthouse.mp4",
    desc: "A formal entertaining salon centered around a backlit bookmatched Italian marble wall and bespoke modular seating.",
    location: "Hyderabad, TS",
    bhk: "Grand Living",
    area: "1,200 Sq. Ft.",
    year: "2025",
    startDate: "Jan 2025",
    endDate: "May 2025",
  },
  {
    id: 7,
    num: "07",
    name: "MINIMALIST LOFT STUDIO",
    category: "Apartment",
    images: [GALLERY.loft, GALLERY.kitchen, GALLERY.obsidian, GALLERY.lounge],
    video: "/obsidian-penthouse.mp4",
    desc: "An open-plan urban loft utilizing smart partition shelves, polished micro-concrete floors, and custom track lighting.",
    location: "Mumbai, MH",
    bhk: "2 BHK Urban Loft",
    area: "1,500 Sq. Ft.",
    year: "2024",
    startDate: "Feb 2024",
    endDate: "May 2024",
  },
  {
    id: 8,
    num: "08",
    name: "THE CHANDELIER ESTATE",
    category: "Villa",
    images: [GALLERY.chandelier, GALLERY.villa, GALLERY.bedroom, GALLERY.office],
    video: "/obsidian-penthouse.mp4",
    desc: "A grand formal living hall dominated by a double-ring custom brass chandelier, arched floor-to-ceiling windows, and silk wallcoverings.",
    location: "Chennai, TN",
    bhk: "6 BHK Manor",
    area: "8,200 Sq. Ft.",
    year: "2025",
    startDate: "Mar 2025",
    endDate: "Dec 2025",
  },
];

const CATEGORIES = ["ALL", "APARTMENT", "VILLA", "OFFICE", "KITCHEN", "BEDROOM", "LIVING ROOM"];

const optimized = (url, width, quality = 65) =>
  `${url.split("?")[0]}?auto=format&fit=crop&w=${width}&q=${quality}`;

export default function Portfolio({ onOpenContact }) {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return PROJECTS;
    return PROJECTS.filter(
      (p) => p.category.toUpperCase() === activeFilter.toUpperCase()
    );
  }, [activeFilter]);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeProject = () => setSelectedProject(null);

  const showNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    const handleKey = (e) => {
      if (e.key === "Escape") closeProject();
      if (!selectedProject) return;
      if (e.key === "ArrowRight") {
        setActiveImageIndex((p) => (p + 1) % selectedProject.images.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIndex((p) => (p - 1 + selectedProject.images.length) % selectedProject.images.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 sm:py-36 bg-[#0b0b0b] relative overflow-hidden hairline-b">
      
      {/* Background Giant Ghost Chapter Typography */}
      <div className="absolute top-10 right-4 chapter-number-ghost text-[14vw]">
        02
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Chapter Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="chapter-tag">
            CHAPTER II &bull; 02 / INTERIOR
          </span>
          <span className="w-12 h-[1px] bg-[#c49678]/40" />
          <span className="text-[10px] tracking-[0.2em] text-[#777] uppercase">
            SELECTED ARCHITECTURAL WORKS
          </span>
        </div>

        {/* Display Title */}
        <div className="mb-12 sm:mb-16">
          <h2 className="display-title text-3xl sm:text-5xl md:text-7xl lg:text-[5rem] text-white">
            SPACES THAT{" "}
            <span className="text-copper-gradient font-light italic">
              TELL YOUR STORY.
            </span>
          </h2>
          <p className="text-xs sm:text-sm tracking-[0.2em] text-[#888] uppercase mt-3">
            A CURATED SELECTION OF PRIVATE RESIDENCES AND COMMERCIAL SANCTUARIES
          </p>
        </div>

        {/* Nabil Issa Minimalist Filter Tabs (Horizontal scroll on mobile) */}
        <div className="flex items-center gap-2 sm:gap-4 mb-12 sm:mb-16 hairline-b pb-4 overflow-x-auto no-scrollbar whitespace-nowrap">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[11px] tracking-[0.2em] uppercase py-2 px-3 transition-all duration-300 cursor-pointer bg-transparent border-none shrink-0 ${
                  isActive
                    ? "text-[#c49678] font-bold border-b-2 border-[#c49678]"
                    : "text-[#666] font-normal hover:text-[#bbb]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid: Edge-to-edge luxury architectural framing */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                onClick={() => openProject(project)}
                data-cursor-text="VIEW"
                className="group relative bg-[#121212] hairline-all overflow-hidden cursor-pointer flex flex-col justify-between hover:border-[#c49678]/50 transition-colors luxury-card-shine"
              >
                {/* Project Image Box */}
                <div className="relative h-[300px] sm:h-[340px] overflow-hidden bg-black">
                  <img
                    src={optimized(project.images[0], 800, 60)}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108 group-hover:filter group-hover:brightness-105"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Fine corner index */}
                  <div className="absolute top-4 left-4 px-2 py-1 bg-black/70 backdrop-blur-md text-[10px] font-mono tracking-widest text-[#c49678] border border-white/10">
                    {project.num}
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/70 opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                    <Search size={14} className="text-[#c49678]" />
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between text-[10px] tracking-widest uppercase text-[#777]">
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                  </div>
                  
                  <h3 className="display-title text-lg sm:text-xl text-white group-hover:text-[#c49678] transition-colors">
                    {project.name}
                  </h3>

                  <div className="flex items-center justify-between text-[11px] text-[#555] pt-2 hairline-t">
                    <span>{project.bhk}</span>
                    <span className="text-[#c49678] font-mono">{project.area}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Lightbox & Walkthrough Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 overflow-y-auto"
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 28 }}
              className="min-h-screen max-w-[1280px] mx-auto bg-[#101010] hairline-all my-0 sm:my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Modal Bar */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-10 py-5 bg-[#101010]/95 backdrop-blur-md hairline-b">
                <div>
                  <span className="chapter-tag text-[9px] block">
                    {selectedProject.category} &bull; {selectedProject.num}
                  </span>
                  <h2 className="display-title text-xl sm:text-2xl text-white">
                    {selectedProject.name}
                  </h2>
                </div>

                <MagneticButton
                  onClick={closeProject}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#c49678] hover:text-[#c49678] transition-colors cursor-pointer bg-transparent"
                  aria-label="Close project modal"
                >
                  <X size={16} />
                </MagneticButton>
              </div>

              {/* Main Gallery Image Viewport */}
              <div className="relative h-[320px] sm:h-[500px] lg:h-[620px] bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={optimized(selectedProject.images[activeImageIndex], 1400, 75)}
                    alt={`${selectedProject.name} visual ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    decoding="async"
                  />
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <MagneticButton
                      onClick={showPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 hover:border-[#c49678] hover:text-[#c49678] transition-colors cursor-pointer"
                      aria-label="Previous view"
                    >
                      <ChevronLeft size={18} />
                    </MagneticButton>
                    <MagneticButton
                      onClick={showNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 text-white flex items-center justify-center border border-white/20 hover:border-[#c49678] hover:text-[#c49678] transition-colors cursor-pointer"
                      aria-label="Next view"
                    >
                      <ChevronRight size={18} />
                    </MagneticButton>
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-md text-xs font-mono text-[#c49678] border border-white/10">
                      0{activeImageIndex + 1} / 0{selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-3 p-4 bg-[#0a0a0a] overflow-x-auto hairline-b">
                  {selectedProject.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`shrink-0 w-24 h-16 border transition-all cursor-pointer p-0 bg-transparent ${
                        i === activeImageIndex
                          ? "border-[#c49678] opacity-100 scale-105"
                          : "border-transparent opacity-40 hover:opacity-80"
                      }`}
                      aria-label={`View angle ${i + 1}`}
                    >
                      <img
                        src={optimized(img, 240, 40)}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Metadata & Walkthrough Video */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-6 sm:p-10">
                
                {/* Left: Narrative & Specs */}
                <div className="lg:col-span-7 space-y-6">
                  <span className="chapter-tag block">PROJECT ARCHITECTURAL RECORD</span>
                  <p className="text-sm sm:text-base text-[#bbb] font-light leading-relaxed">
                    {selectedProject.desc}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 hairline-t pt-6">
                    {[
                      { label: "LOCATION", val: selectedProject.location, icon: MapPin },
                      { label: "CONFIGURATION", val: selectedProject.bhk, icon: BedDouble },
                      { label: "BUILT-UP AREA", val: selectedProject.area, icon: Search },
                      { label: "YEAR DELIVERED", val: selectedProject.year, icon: Calendar },
                      { label: "COMMENCEMENT", val: selectedProject.startDate, icon: CalendarRange },
                      { label: "HANDOVER DATE", val: selectedProject.endDate, icon: CalendarCheck2 },
                    ].map(({ label, val, icon: Icon }) => (
                      <div key={label} className="p-3 bg-[#161616] hairline-all">
                        <div className="flex items-center gap-1.5 text-[9px] tracking-widest uppercase text-[#777] mb-1">
                          <Icon size={11} className="text-[#c49678]" />
                          <span>{label}</span>
                        </div>
                        <p className="text-xs font-medium text-white tracking-wide">
                          {val}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Walkthrough Video */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <PlayCircle size={14} className="text-[#c49678]" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#777] font-medium">
                      WALKTHROUGH RECORDING
                    </span>
                  </div>
                  <div className="aspect-video bg-black hairline-all overflow-hidden">
                    <video
                      key={selectedProject.id}
                      controls
                      preload="none"
                      poster={optimized(selectedProject.images[0], 800, 50)}
                      className="w-full h-full object-cover"
                    >
                      <source src={selectedProject.video} type="video/mp4" />
                    </video>
                  </div>
                </div>

              </div>

              {/* Bottom Inquiry Action */}
              <div className="p-6 sm:p-10 hairline-t bg-[#0a0a0a]">
                <MagneticButton
                  onClick={() => {
                    closeProject();
                    onOpenContact();
                  }}
                  className="pill-btn-copper w-full py-4 text-xs"
                >
                  <span>INQUIRE ABOUT CREATING A SIMILAR ARCHITECTURAL SPACE</span>
                  <ArrowRight size={14} />
                </MagneticButton>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}