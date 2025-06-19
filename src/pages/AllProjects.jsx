import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewGridIcon from "@mui/icons-material/ViewModule";
import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
import "../styles/projects.css";

export default function AllProjects({ filters, updateFilters }) {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = [...projects];

    // Filter by category (web/mobile)
    if (filters.category !== "all") {
      filtered = filtered.filter(
        (project) => project.type === filters.category
      );
    }

    // Filter by type (frontend/backend/full-stack)
    if (filters.type !== "all") {
      filtered = filtered.filter(
        (project) => project.category === filters.type
      );
    }

    // Search functionality
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.techs.some((tech) =>
            tech.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Sort projects
    switch (sortBy) {
      case "featured":
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case "newest":
        filtered.sort(
          (a, b) => new Date(b.dateCompleted) - new Date(a.dateCompleted)
        );
        break;
      case "oldest":
        filtered.sort(
          (a, b) => new Date(a.dateCompleted) - new Date(b.dateCompleted)
        );
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [filters, searchTerm, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const handleCategoryFilter = (category) => {
    updateFilters({ category });
  };

  const handleTypeFilter = (type) => {
    updateFilters({ type });
  };

  const clearFilters = () => {
    updateFilters({ category: "all", type: "all" });
    setSearchTerm("");
    setSortBy("featured");
  };

  return (
    <>
      <Helmet>
        <title>All Projects - Md Nayeem Hossain | Full-Stack Developer</title>
        <meta
          name="description"
          content="Explore all my web and mobile development projects, featuring React, Node.js, React Native, and more technologies."
        />
      </Helmet>

      <Navbar />

      <div className="all-projects-page">
        <motion.div
          className="projects-hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">All Projects</h1>
          <p className="page-subtitle">
            A comprehensive showcase of my development work across web and
            mobile platforms
          </p>
        </motion.div>

        <motion.div
          className="projects-controls"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Search Bar */}
          <div className="search-container">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              placeholder="Search projects, technologies, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Primary Filters */}
          <div className="primary-filters">
            <div className="filter-group">
              <label className="filter-label">
                <FilterListIcon className="filter-icon" />
                Category:
              </label>
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${
                    filters.category === "all" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryFilter("all")}
                >
                  All Projects ({projects.length})
                </button>
                <button
                  className={`filter-btn ${
                    filters.category === "web" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryFilter("web")}
                >
                  🌐 Web ({projects.filter((p) => p.type === "web").length})
                </button>
                <button
                  className={`filter-btn ${
                    filters.category === "mobile" ? "active" : ""
                  }`}
                  onClick={() => handleCategoryFilter("mobile")}
                >
                  📱 Mobile (
                  {projects.filter((p) => p.type === "mobile").length})
                </button>
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Type:</label>
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${
                    filters.type === "all" ? "active" : ""
                  }`}
                  onClick={() => handleTypeFilter("all")}
                >
                  All Types
                </button>
                <button
                  className={`filter-btn ${
                    filters.type === "frontend" ? "active" : ""
                  }`}
                  onClick={() => handleTypeFilter("frontend")}
                >
                  Frontend
                </button>
                <button
                  className={`filter-btn ${
                    filters.type === "backend" ? "active" : ""
                  }`}
                  onClick={() => handleTypeFilter("backend")}
                >
                  Backend
                </button>
                <button
                  className={`filter-btn ${
                    filters.type === "full-stack" ? "active" : ""
                  }`}
                  onClick={() => handleTypeFilter("full-stack")}
                >
                  Full-Stack
                </button>
              </div>
            </div>
          </div>

          {/* Sort and View Controls */}
          <div className="secondary-controls">
            <div className="sort-controls">
              <label htmlFor="sort-select" className="sort-label">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>

            <div className="view-controls">
              <button
                className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <ViewGridIcon />
              </button>
              <button
                className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <ViewListIcon />
              </button>
            </div>

            <button onClick={clearFilters} className="clear-filters-btn">
              Clear All Filters
            </button>
          </div>
        </motion.div>

        {/* Results Info */}
        <motion.div
          className="results-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>
            Showing {filteredProjects.length} of {projects.length} projects
            {searchTerm && (
              <>
                {" "}
                for "<strong>{searchTerm}</strong>"
              </>
            )}
          </p>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          className={`projects-container ${viewMode}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isHomepage={false}
              />
            ))
          ) : (
            <motion.div
              className="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>No projects found</h3>
              <p>Try adjusting your search terms or filters</p>
              <button onClick={clearFilters} className="reset-btn">
                Reset Filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}
