import { timeLineData } from "../common/data";
import { getFeaturedProjects } from "../common/utils";
import {
  Button,
  ProjectCard,
  HeroHeader,
  Layout,
  SectionHeader,
  Timeline,
} from "../components";

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <main>
      <Layout>
        <HeroHeader />
        <SectionHeader
          heading="Featured Projects"
          description="I enjoy to continue learning to improve my knowledge and to gain a completely new experience. You'll see some of the frontend & backend projects I've accomplished."
        />
        <div className="mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button className="rounded-full" href="/projects">
              View All Projects
            </Button>
          </div>
        </div>
        <SectionHeader
          heading="Work Experience"
          description="I have done internships at Credit Suisse (Technology Analyst) and food-tech startup Eatabl (Angular Developer). Check out more details below."
        />
        <Timeline timeline={timeLineData.experience} />
      </Layout>
    </main>
  );
}
