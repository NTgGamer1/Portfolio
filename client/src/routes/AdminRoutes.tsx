import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/admin/DashboardPage";
import HeroPage from "../pages/admin/HeroPage";
import ProjectsPage from "../pages/admin/ProjectsPage";
import SkillsPage from "../pages/admin/SkillsPage";
import CertificationsPage from "../pages/admin/CertificationsPage";
import EducationPage from "../pages/admin/EducationPage";
import ExperiencePage from "../pages/admin/ExperiencePage";
import ContactPage from "../pages/admin/ContactPage";
import SeoPage from "../pages/admin/SeoPage";
import SettingsPage from "../pages/admin/SettingsPage";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/hero" element={<HeroPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/seo" element={<SeoPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default AdminRoutes;
