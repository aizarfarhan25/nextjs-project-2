import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ProjectDetail {
  overview: string;
  features: string[];
  role: {
    title: string;
    responsibilities: string[];
  };
  technologies: string[];
}

interface ProjectDialogProps {
  title: string;
  projectDetail?: ProjectDetail;
}

export function ProjectDialog({ title, projectDetail }: ProjectDialogProps) {
  return (
    <Dialog>      <DialogTrigger asChild>
        <Button variant="outline" className="w-full min-w-[180px]">Open Detail</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[800px] max-h-[80vh] overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-950">
        <DialogHeader>
          <DialogTitle className="text-2xl font-beni">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-6">
          {projectDetail ? (
            <>
              <section>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed">{projectDetail.overview}</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {projectDetail.features.map((feature, index) => (
                    <li key={index} className="text-gray-300">{feature}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">{projectDetail.role.title}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {projectDetail.role.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-gray-300">{responsibility}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {projectDetail.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <p className="text-gray-300 text-center">Project details are not available yet.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
