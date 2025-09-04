import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50 my-16 lg:my-24">
      <div className="sticky top-10 z-40">
        <div className="w-[100px] h-[100px] bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-40"></div>
        <div className="flex items-center justify-start relative">
          <span className="modern-card absolute left-0 w-fit text-white px-6 py-4 text-xl font-semibold tracking-wide">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-gradient-to-r from-[#1a1443] via-violet-500/50 to-transparent ml-32"></span>
        </div>
      </div>
      
      <div className="text-center mb-12 pt-16">
        <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of my recent work and personal projects
        </p>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;