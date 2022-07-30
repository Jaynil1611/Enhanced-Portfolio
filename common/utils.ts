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

export const getTagsFromAllProjects = () => {
  const all = cardsData.projects.all;
  const result = Object.values(all).reduce((tagsObj, { tags }) => {
    tags.forEach((tag: string) => {
      if (tagsObj[tag]) {
        tagsObj[tag] += 1;
      } else {
        tagsObj[tag] = 1;
      }
    });
    return tagsObj;
  }, {} as Record<string, number>);
  return Object.entries(result);
};
