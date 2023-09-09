import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import ContentSection from "./Components/ContentSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <button className="loading">Loading...</button>;
  }

  return (
    <>
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <ContentSection />
      </div>
    </>
  );
}

export default App;
