export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  year: number;
  featured: boolean;
  stack: string[];
  /** Public repository. Omitted for private projects. */
  repo?: string;
  /** Several repositories (e.g. frontend + backend), used instead of `repo`. */
  repos?: ProjectLink[];
  live?: string;
  /** Imported screenshot URL. */
  image?: string;
  /** Private repository: show a "Private repo" label instead of a Code link. */
  private?: boolean;
}
