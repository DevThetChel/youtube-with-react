import "../src/css/general.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import ContentSection from "./Components/ContentSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSideBarExpanded, setIsBarExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const toggleSidebar = () => {
    setIsBarExpanded(!isSideBarExpanded);
  };

  if (isLoading) {
    return <button className="loading">Loading...</button>;
  }

  return (
    <>
      <Navbar toggleSideBar={toggleSidebar} />
      <div className="content-container">
        <Sidebar isSideBarExpanded={isSideBarExpanded} />
        <ContentSection isSideBarExpanded={isSideBarExpanded} />
      </div>
    </>
  );
}

export default App;
