/**
 * API Contract Definitions for Project 001 backend.
 *
 * Public API
 * GET /api/public/site => { hero, projects, skills, certifications, education, experience }
 * GET /api/public/projects => ProjectItem[]
 * GET /api/public/projects/:slug => ProjectItem
 * POST /api/public/contact => { message: string }
 *
 * Auth API
 * POST /api/auth/login => { user: AuthUser }
 * POST /api/auth/logout => { message: string }
 * GET /api/auth/me => { user: AuthUser }
 * POST /api/auth/refresh => { user: AuthUser }
 *
 * Admin API (protected)
 * GET /api/admin/dashboard => { metrics: Record<string, number> }
 * GET /api/admin/hero => HeroResponse
 * PUT /api/admin/hero => HeroRequest
 * GET /api/admin/projects => ProjectItem[]
 * POST /api/admin/projects => ProjectCreateRequest
 * GET /api/admin/projects/:id => ProjectItem
 * PUT /api/admin/projects/:id => ProjectUpdateRequest
 * DELETE /api/admin/projects/:id => { message: string }
 * PATCH /api/admin/projects/reorder => { order: string[] }
 * GET /api/admin/skills => SkillItem[]
 * POST /api/admin/skills => SkillCreateRequest
 * PUT /api/admin/skills/:id => SkillUpdateRequest
 * DELETE /api/admin/skills/:id => { message: string }
 * PATCH /api/admin/skills/reorder => { order: string[] }
 * GET /api/admin/certifications => CertificationItem[]
 * POST /api/admin/certifications => CertificationCreateRequest
 * PUT /api/admin/certifications/:id => CertificationUpdateRequest
 * DELETE /api/admin/certifications/:id => { message: string }
 * PATCH /api/admin/certifications/reorder => { order: string[] }
 * GET /api/admin/education => EducationItem[]
 * POST /api/admin/education => EducationCreateRequest
 * PUT /api/admin/education/:id => EducationUpdateRequest
 * DELETE /api/admin/education/:id => { message: string }
 * PATCH /api/admin/education/reorder => { order: string[] }
 * GET /api/admin/experience => ExperienceItem[]
 * POST /api/admin/experience => ExperienceCreateRequest
 * PUT /api/admin/experience/:id => ExperienceUpdateRequest
 * DELETE /api/admin/experience/:id => { message: string }
 * PATCH /api/admin/experience/reorder => { order: string[] }
 * GET /api/admin/contact-messages => ContactMessageItem[]
 * GET /api/admin/contact-messages/:id => ContactMessageItem
 * PATCH /api/admin/contact-messages/:id/read => ContactMessageItem
 * DELETE /api/admin/contact-messages/:id => { message: string }
 * GET /api/admin/seo => SeoSetting
 * PUT /api/admin/seo => SeoSettingUpdateRequest
 * GET /api/admin/settings => SiteSetting
 * PUT /api/admin/settings => SiteSettingUpdateRequest
 */

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface HeroResponse {
  id: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaUrl?: string;
  show: boolean;
}

export interface HeroRequest {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaUrl?: string;
  show: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  imageUrl?: string;
  url?: string;
  repoUrl?: string;
  featured: boolean;
  visible: boolean;
  order: number;
}

export interface ProjectCreateRequest {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  imageUrl?: string;
  url?: string;
  repoUrl?: string;
  featured?: boolean;
  visible?: boolean;
  order?: number;
}

export interface ProjectUpdateRequest extends ProjectCreateRequest {}

export interface SkillItem {
  id: string;
  name: string;
  level?: string;
  category?: string;
  visible: boolean;
  order: number;
}

export interface SkillCreateRequest {
  name: string;
  level?: string;
  category?: string;
  visible?: boolean;
  order?: number;
}

export interface SkillUpdateRequest extends SkillCreateRequest {}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  url?: string;
  visible: boolean;
  order: number;
}

export interface CertificationCreateRequest {
  name: string;
  issuer: string;
  issueDate: string;
  url?: string;
  visible?: boolean;
  order?: number;
}

export interface CertificationUpdateRequest extends CertificationCreateRequest {}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description?: string;
  visible: boolean;
  order: number;
}

export interface EducationCreateRequest {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description?: string;
  visible?: boolean;
  order?: number;
}

export interface EducationUpdateRequest extends EducationCreateRequest {}

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  startDate: string;
  endDate?: string;
  location?: string;
  responsibilities?: string;
  visible: boolean;
  order: number;
}

export interface ExperienceCreateRequest {
  company: string;
  title: string;
  startDate: string;
  endDate?: string;
  location?: string;
  responsibilities?: string;
  visible?: boolean;
  order?: number;
}

export interface ExperienceUpdateRequest extends ExperienceCreateRequest {}

export interface ContactMessageItem {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface SeoSetting {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  keywords: string[];
}

export interface SeoSettingUpdateRequest {
  title: string;
  description: string;
  imageUrl?: string;
  keywords: string[];
}

export interface SiteSetting {
  id: string;
  authors: string[];
  siteUrl: string;
  theme: "DARK" | "LIGHT";
}

export interface SiteSettingUpdateRequest {
  authors: string[];
  siteUrl: string;
  theme: "DARK" | "LIGHT";
}
