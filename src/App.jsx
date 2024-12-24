import { useEffect, useLayoutEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MoreProjects from "./pages/MoreProjects";
import ParticleBackground from "./ParticleBackground";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === "/projects") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  return children;
};

function App() {
  const [isAllProjectNotShowing, setIsAllProjectNotShowing] = useState(true);
  const [projectCategory, setProjectCategory] = useState("");

  function handleProjectShowing(category) {
    setIsAllProjectNotShowing(false);
    setProjectCategory(category);
  }
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
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
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
