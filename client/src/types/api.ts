export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: AuthUser;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
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

export interface ApiError {
  message: string;
  details?: string[];
}
