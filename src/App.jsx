import { useEffect, useLayoutEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout";
import AllProjects from "./pages/AllProjects";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ParticleBackground from "./ParticleBackground";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (
      location.pathname === "/projects" ||
      location.pathname.startsWith("/project/")
    ) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  return children;
};

function App() {
  const [projectFilters, setProjectFilters] = useState({
    category: "all", // all, web, mobile
    type: "all", // all, frontend, backend, full-stack
    search: "",
  });

  const updateFilters = (newFilters) => {
    setProjectFilters((prev) => ({ ...prev, ...newFilters }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        <ParticleBackground />
        <Router>
          <Wrapper>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
              <Route
                path="/projects"
                element={
                  <Layout isHomepage={false}>
                    <AllProjects
                      filters={projectFilters}
                      updateFilters={updateFilters}
                    />
                  </Layout>
                }
              />
              <Route
                path="/project/:projectId"
                element={
                  <Layout>
                    <ProjectDetail />
                  </Layout>
                }
              />
            </Routes>
          </Wrapper>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
