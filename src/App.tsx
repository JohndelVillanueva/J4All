import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "../components/Content"; // Ensure the file exists at 'src/components/Content.tsx' or adjust the path accordingly
import PwdPage from "../pages/PwdPage"; // Ensure the file exists at 'src/components/PwdPage.tsx' or adjust the path accordingly
import IndiPeoplePage from "../pages/IndiPeoplePage"; // Ensure the file exists at 'src/components/IndigenousPeoplePage.tsx' or adjust the path accordingly
import Layout from "../components/Layout"; // Ensure the file exists at 'src/components/Layout.tsx' or adjust the path accordingly
export default function App() {
  return (
    <div className="App">
      {/* Main content area */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/pwd" element={<PwdPage />} />
            <Route path="/indigenous-people" element={<IndiPeoplePage />} />
          </Routes>
        </Layout>
        {/* Footer */}
      </Router>
    </div>
  );
}
