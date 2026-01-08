// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/home/HeroSection";
import QuickInfoPanel from "./components/home/QuickInfoPanel.js";
import AboutSnapshot from "./components/home/AboutSnapshot.js";
import NewsAnnouncements from "./components/home/NewsAnnouncements";
import CampusHighlights from "./components/home/CampusHighlights.js";
import EventsCalendar from "./components/home/EventsCalendar.js";
import EventsGallery from "./components/home/EventsGallery";
import ReviewsSection from "./components/home/ReviewsSection";
// import AcademicPrograms from "./components/home/AcademicPrograms";
import EventsGalleryPage from "./components/events/EventsGalleryPage";
import Footer from "./components/Footer.js";
import SupportersPartners from "./components/SupportersPartners";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HeroSection />
              <QuickInfoPanel />
              <AboutSnapshot />
              <CampusHighlights />
              {/* <AcademicPrograms /> */}
              <NewsAnnouncements />
              <ReviewsSection />
              <EventsCalendar />
              <EventsGallery />
              <SupportersPartners />
            </main>
          }
        />
        <Route path="/events" element={<EventsGalleryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
