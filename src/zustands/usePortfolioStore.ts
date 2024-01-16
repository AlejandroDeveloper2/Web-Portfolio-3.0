import { create } from "zustand";

import { StoreDataModel } from "@models/ContextModels";
import { getAllProjects } from "@services/projects.service";
import { LanguageLabel, ServerResponseError } from "@models/DataModels";

const usePortfolioStore = create<StoreDataModel>((set, get) => ({
  projects: [],
  projectTap: "design",
  allProjects: [],
  isLoading: false,
  getAllProjects: async (lang: LanguageLabel) => {
    set({ isLoading: true });
    try {
      const projects = await getAllProjects();
      const filteredAllProjects = projects.filter(
        (project) => project.language === lang
      );
      const filteredProjects = projects.filter(
        (project) =>
          project.language === lang && project.category === get().projectTap
      );
      set({
        projects: filteredProjects,
        allProjects: filteredAllProjects,
      });
    } catch (error: unknown) {
      const parsedError = error as ServerResponseError;
      console.log(parsedError.message);
    } finally {
      set({ isLoading: false });
    }
  },
  toggleProjectTap: () => {
    set({
      projectTap: get().projectTap === "design" ? "development" : "design",
    });
  },
}));

export default usePortfolioStore;
