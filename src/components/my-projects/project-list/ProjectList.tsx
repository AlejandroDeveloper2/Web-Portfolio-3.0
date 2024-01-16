import usePortfolioStore from "@zustands/usePortfolioStore";

import { ProjectCard } from "@components/index";

import { ProductListContainer } from "./ProjectList.style";

const ProjectList = (): JSX.Element => {
  const { projects } = usePortfolioStore();
  return (
    <ProductListContainer>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </ProductListContainer>
  );
};

export default ProjectList;
