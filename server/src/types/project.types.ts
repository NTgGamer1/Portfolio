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
