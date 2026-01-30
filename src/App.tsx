// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/home/HeroSection";
import QuickInfoPanel from "./components/home/QuickInfoPanel.js";
import AboutSnapshot from "./components/home/AboutSnapshot.js";
import NewsAnnouncements from "./components/home/NewsAnnouncements";
import CampusHighlights from "./components/home/CampusHighlights.js";
import PlacementPartnersGrid from "./components/home/PlacementPartnersGrid";
import AchievementsGrid from "./components/home/AchievementsGrid";
import SuccessStoriesGrid from "./components/home/SuccessStoriesGrid";
import RecognitionGrid from "./components/home/RecognitionGrid";
import CampusFacilitiesPage from "./components/campus/CampusFacilitiesPage";
import FacilityDetailPage from "./components/campus/FacilityDetailPage";
import EventsCalendar from "./components/home/EventsCalendar.js";
import EventsGallery from "./components/home/EventsGallery";
import ReviewsSection from "./components/home/ReviewsSection";
// import AcademicPrograms from "./components/home/AcademicPrograms";
import EventsGalleryPage from "./components/events/EventsGalleryPage";
import FacultiesPage from "./components/faculties/FacultiesPage";
import SchoolOfLawPage from "./components/SchoolOfLawPage";
import AboutCOEPage from "./components/AboutCOEPage";
import GujaratUniversityPage from "./components/GujaratUniversityPage";
import AdministrationPage from "./components/AdministrationPage";
import CoordinatorDeskPage from "./components/CoordinatorDeskPage";
import PrivacyPolicy from "./components/policies/PrivacyPolicy";
import RefundPolicy from "./components/policies/RefundPolicy";
import TermsConditions from "./components/policies/TermsConditions";
import Disclaimer from "./components/policies/Disclaimer";
import GrievanceRedressal from "./components/policies/GrievanceRedressal";
import Footer from "./components/Footer.js";
import SupportersPartners from "./components/SupportersPartners";
import MouSection from "./components/home/MouSection";
import Clubs from "./components/students/Clubs";
import CommitteeList from "./components/students/CommitteeList";
import CommitteeDetails from "./components/students/CommitteeDetails";
import StudentActivities from "./components/students/StudentActivities";
import Awards from "./components/students/Awards";
import StudentSupportServices from "./components/students/StudentSupportServices";
import BComLLBPage from "./components/academics/BComLLBPage";
import AnnouncementsPage from "./components/AnnouncementsPage";
import AnnouncementDetailPage from "./components/AnnouncementDetailPage";
import CircularsPage from "./components/CircularsPage";
import PlacementPartnersPage from "./components/PlacementPartnersPage";
import AchievementsPage from "./components/AchievementsPage";
import SuccessStoriesPage from "./components/SuccessStoriesPage";
import EventsActivityPage from "./components/EventsActivityPage";
import StudentActivityPage from "./components/StudentActivityPage";
import TestimonialsPage from "./components/TestimonialsPage";
import MouListingPage from "./components/MouListingPage";
import RecognitionPage from "./components/RecognitionPage";

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
              <PlacementPartnersGrid />
              <AchievementsGrid />
              <SuccessStoriesGrid />
              <RecognitionGrid />
              <EventsGallery />
              <MouSection />
              <SupportersPartners />
            </main>
          }
        />
        <Route path="/events" element={<EventsGalleryPage />} />
        <Route path="/faculties" element={<FacultiesPage />} />
        <Route path="/school-of-law" element={<SchoolOfLawPage />} />
        <Route path="/about-coe" element={<AboutCOEPage />} />
        <Route path="/gujarat-university" element={<GujaratUniversityPage />} />
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/coordinator-desk" element={<CoordinatorDeskPage />} />
        <Route path="/students/clubs" element={<Clubs />} />
        <Route path="/students/committees" element={<CommitteeList />} />
        <Route path="/students/committees/:id" element={<CommitteeDetails />} />
        <Route path="/students/activities" element={<StudentActivities />} />
        <Route path="/students/awards" element={<Awards />} />
        <Route
          path="/students/support-services"
          element={<StudentSupportServices />}
        />
        <Route path="/academics/bcom-llb" element={<BComLLBPage />} />
        <Route path="/announcements" element={<AnnouncementsPage />} />
        <Route path="/announcements/:id" element={<AnnouncementDetailPage />} />
        <Route path="/circulars" element={<CircularsPage />} />
        <Route path="/placement-partners" element={<PlacementPartnersPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/events-activities" element={<EventsActivityPage />} />
        <Route path="/student-activities" element={<StudentActivityPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/mou-agreements" element={<MouListingPage />} />
        <Route path="/recognitions" element={<RecognitionPage />} />
        <Route path="/campus/facilities" element={<CampusFacilitiesPage />} />
        <Route path="/campus/facilities/:id" element={<FacilityDetailPage />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
