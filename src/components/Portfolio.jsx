import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Search,
  MapPin,
  Calendar,
  BedDouble,
  CalendarRange,
  CalendarCheck2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
} from "lucide-react";

// Shared pool of real, working stock images so every project can have its
// own multi-image gallery without needing brand-new (unverified) URLs.
// Swap these for your actual project photography whenever it's ready.
const GALLERY = {
  obsidian: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200",
  villa: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
  kitchen: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200",
  bedroom: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
  lounge: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1200",
  loft: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200",
  chandelier: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
};

// A couple of short, freely-licensed sample clips so the "video" section
// is functional out of the box. These are short ~2-3MB ad-style clips —
// NOT full movies — so they load fast. Replace `video` per project with
// your own walkthrough/reel once you have it (mp4 works directly with
// <video>, a YouTube/Vimeo embed URL works too — see the render note below).
const SAMPLE_VIDEO_A =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
const SAMPLE_VIDEO_B =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";

const PROJECTS = [
  {
    id: 1,
    name: "The Obsidian Penthouse",
    category: "Apartment",
    images: [GALLERY.obsidian, GALLERY.loft, GALLERY.bedroom, GALLERY.lounge],
    video: SAMPLE_VIDEO_A,
    desc: "A bold, dark-themed penthouse balancing charcoal gray marble with gold-inlay profile lines and rich velvet textures.",
    location: "Mumbai",
    bhk: "4 BHK",
    area: "4,200 Sq. Ft.",
    year: "2025",
    startDate: "Jan 2025",
    endDate: "Jun 2025",
  },
  {
    id: 2,
    name: "Villa Lumina",
    category: "Villa",
    images: [GALLERY.villa, GALLERY.chandelier, GALLERY.lounge, GALLERY.bedroom],
    video: SAMPLE_VIDEO_B,
    desc: "An expansive minimalist villa using double-height glass facades, natural stone walls, and ambient cove lighting.",
    location: "Alibaug",
    bhk: "5 BHK",
    area: "7,500 Sq. Ft.",
    year: "2024",
    startDate: "Mar 2024",
    endDate: "Nov 2024",
  },
  {
    id: 3,
    name: "Synergy Corporate HQ",
    category: "Office",
    images: [GALLERY.office, GALLERY.loft, GALLERY.obsidian, GALLERY.kitchen],
    video: SAMPLE_VIDEO_A,
    desc: "A premium corporate office featuring green partition walls, biophilic integrations, and customizable acoustic ceilings.",
    location: "Bangalore",
    bhk: "Open Plan",
    area: "12,000 Sq. Ft.",
    year: "2025",
    startDate: "Feb 2025",
    endDate: "Aug 2025",
  },
  {
    id: 4,
    name: "The Culinary Hearth",
    category: "Kitchen",
    images: [GALLERY.kitchen, GALLERY.lounge, GALLERY.villa, GALLERY.bedroom],
    video: SAMPLE_VIDEO_B,
    desc: "A sleek German-engineered kitchen matching high-gloss handleless cabinets, built-in cooktops, and a marble island.",
    location: "Delhi NCR",
    bhk: "Modular Kitchen",
    area: "650 Sq. Ft.",
    year: "2025",
    startDate: "Apr 2025",
    endDate: "Jun 2025",
  },
  {
    id: 5,
    name: "Sanctuary Master Bedroom",
    category: "Bedroom",
    images: [GALLERY.bedroom, GALLERY.obsidian, GALLERY.loft, GALLERY.chandelier],
    video: SAMPLE_VIDEO_A,
    desc: "A warm, neutral master bedroom featuring a fluted wood accent wall, gold light sconces, and an integrated dressing room.",
    location: "Pune",
    bhk: "1 BHK",
    area: "800 Sq. Ft.",
    year: "2024",
    startDate: "Jun 2024",
    endDate: "Sep 2024",
  },
  {
    id: 6,
    name: "The Marble Lounge",
    category: "Living Room",
    images: [GALLERY.lounge, GALLERY.villa, GALLERY.chandelier, GALLERY.office],
    video: SAMPLE_VIDEO_B,
    desc: "A luxury social living space centered around a backlit bookmatched Italian marble wall and custom modular sofas.",
    location: "Hyderabad",
    bhk: "Open Layout",
    area: "1,200 Sq. Ft.",
    year: "2025",
    startDate: "Jan 2025",
    endDate: "May 2025",
  },
  {
    id: 7,
    name: "Minimalist Loft Studio",
    category: "Apartment",
    images: [GALLERY.loft, GALLERY.kitchen, GALLERY.obsidian, GALLERY.lounge],
    video: SAMPLE_VIDEO_A,
    desc: "An open-plan urban loft utilizing smart partition shelves, polished micro-concrete floors, and custom light tracks.",
    location: "Mumbai",
    bhk: "2 BHK",
    area: "1,500 Sq. Ft.",
    year: "2024",
    startDate: "Feb 2024",
    endDate: "May 2024",
  },
  {
    id: 8,
    name: "The Chandelier Estate",
    category: "Villa",
    images: [GALLERY.chandelier, GALLERY.villa, GALLERY.bedroom, GALLERY.office],
    video: SAMPLE_VIDEO_B,
    desc: "A grand dining and formal living hall dominated by a double-ring custom gold chandelier and tall arched windows.",
    location: "Chennai",
    bhk: "6 BHK",
    area: "8,200 Sq. Ft.",
    year: "2025",
    startDate: "Mar 2025",
    endDate: "Dec 2025",
  },
];

const CATEGORIES = ["All", "Apartment", "Villa", "Office", "Kitchen", "Bedroom", "Living Room"];

// Helper to apply Unsplash's image-optimization query params consistently.
const optimized = (url, width, quality = 60) =>
  `${url.split("?")[0]}?auto=format&fit=crop&w=${width}&q=${quality}`;

// Builds a srcSet so phones don't download the same bytes as a desktop monitor.
const srcSetFor = (url, widths, quality = 60) =>
  widths.map((w) => `${optimized(url, w, quality)} ${w}w`).join(", ");

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProjects = useMemo(
    () => (activeFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter)),
    [activeFilter]
  );

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeProject = () => setSelectedProject(null);

  const showNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex(
      (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  const handleInquireClick = () => {
    closeProject();
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

  // Lock background scroll while the detail page is open, and let Esc close it.
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeProject();
      if (!selectedProject) return;
      if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIndex(
          (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

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
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeFilter === cat
                ? "bg-gold-gradient text-primary shadow-md font-bold"
                : "bg-secondary text-gray-500 hover:bg-gray-200 hover:text-primary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                onClick={() => openProject(project)}
              >
                {/* Project Image */}
                <img
                  src={optimized(project.images[0], 600, 40)}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
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

      {/* Full Detail "Page" Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: "spring", damping: 28 }}
              className="min-h-screen w-full max-w-6xl mx-auto bg-primary shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Page Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between gap-4 px-6 md:px-10 py-5 bg-primary/95 backdrop-blur-md border-b border-white/10">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent text-[10px] uppercase font-bold tracking-widest mb-1">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-lg md:text-2xl font-extrabold text-white font-plus-jakarta leading-tight">
                    {selectedProject.name}
                  </h2>
                </div>
                <button
                  onClick={closeProject}
                  className="flex-shrink-0 w-11 h-11 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-accent hover:text-primary transition-colors border border-white/10 cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Gallery Image */}
              <div className="relative h-[280px] sm:h-[420px] lg:h-[560px] bg-black">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    src={optimized(selectedProject.images[activeImageIndex], 1100, 58)}
                    alt={`${selectedProject.name} - view ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    decoding="async"
                  />
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={showPrevImage}
                      className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-accent hover:text-primary transition-colors border border-white/10 cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={showNextImage}
                      className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-accent hover:text-primary transition-colors border border-white/10 cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-semibold tracking-wide">
                      {activeImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-3 px-6 md:px-10 py-4 overflow-x-auto bg-primary/60">
                  {selectedProject.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`flex-shrink-0 w-20 h-16 md:w-24 md:h-20 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${i === activeImageIndex ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img
                        src={optimized(img, 200, 40)}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Description, Details & Video */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-10 py-10">
                {/* Left: Description + Stats */}
                <div>
                  <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">
                    {selectedProject.desc}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6">
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
                        <BedDouble className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Configuration</p>
                        <p className="text-white text-xs font-medium">{selectedProject.bhk}</p>
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

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-accent">
                        <CalendarRange className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Start Date</p>
                        <p className="text-white text-xs font-medium">{selectedProject.startDate}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-accent">
                        <CalendarCheck2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">End Date</p>
                        <p className="text-white text-xs font-medium">{selectedProject.endDate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Video Walkthrough */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <PlayCircle className="w-4 h-4 text-accent" />
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                      Project Walkthrough
                    </p>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-black aspect-video">
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
                  {/*
                    If you'd rather embed a YouTube/Vimeo link instead of a direct
                    .mp4 file, swap the <video> block above for an <iframe>, e.g.:
                    <iframe className="w-full h-full" src={selectedProject.videoEmbedUrl} allowFullScreen />
                  */}
                </div>
              </div>

              {/* CTA */}
              <div className="px-6 md:px-10 pb-10">
                <button
                  onClick={handleInquireClick}
                  className="w-full py-4 rounded-xl bg-gold-gradient text-primary font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 shadow-md hover:scale-[1.01] transition-all cursor-pointer"
                >
                  <span>Inquire About Similar Design</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}