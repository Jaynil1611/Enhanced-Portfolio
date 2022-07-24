import { CardProps } from "../components/Card/Card";
import { cardsData } from "./data";

export const getFeaturedProjects = () => {
  const featured = cardsData.projects.featured;
  return Object.values(featured);
};

export const getAllProjects = () => {
  const all = cardsData.projects.all;
  return Object.values(all);
};

export const getFilteredProjectsBasedOnTag = (searchTag: string) => {
  const all = cardsData.projects.all;
  return Object.values(all).filter((value) => {
    const project = value as CardProps;
    return project.tags.some((tag: string) => tag === searchTag);
  });
};
