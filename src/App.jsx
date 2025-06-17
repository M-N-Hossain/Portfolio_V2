import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import BackToTopButton from "./components/BackToTopButton";
import Layout from "./components/Layout";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Home from "./pages/Home";
import MoreProjects from "./pages/MoreProjects";
import ParticleBackground from "./ParticleBackground";

const Wrapper = ({ children }) => {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useLayoutEffect(() => {
    setIsNavigating(true);

    // Smooth scroll to top with a slight delay for better UX
    const scrollToTop = () => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: location.pathname === "/" ? "smooth" : "instant",
        });
        // Reset navigation state after scroll
        setTimeout(() => setIsNavigating(false), 300);
      });
    };

    scrollToTop();

    // Save current path for potential restoration
    sessionStorage.setItem("lastVisitedPath", location.pathname);
  }, [location.pathname]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setIsNavigating(true);
      setTimeout(() => setIsNavigating(false), 500);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(5px)",
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <>
      <ScrollProgressBar />
      <BackToTopButton />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

function App() {
  const [isAllProjectNotShowing, setIsAllProjectNotShowing] = useState(true);
  const [projectCategory, setProjectCategory] = useState("");

  function handleProjectShowing(category) {
    setIsAllProjectNotShowing(false);
    setProjectCategory(category);
  }

  return (
    <div className="App">
      <ParticleBackground />
      <Router>
        <Wrapper>
          <Routes>
            <Route
              path="/"
              element={
                <Layout isAllProjectNotShowing={isAllProjectNotShowing}>
                  <Home handleProjectShowing={handleProjectShowing} />
                </Layout>
              }
            />
            <Route
              path="/projects"
              element={
                <Layout isAllProjectNotShowing={isAllProjectNotShowing}>
                  <MoreProjects projectCategory={projectCategory} />
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <div className="flex items-center justify-center min-h-screen">
                    <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
                  </div>
                </Layout>
              }
            />
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
