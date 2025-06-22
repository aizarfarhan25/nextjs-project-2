"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'role' | 'tech'>('overview');
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full min-w-[180px] relative overflow-hidden group">
          <span className="relative z-10">Open Detail</span>
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ mixBlendMode: 'overlay' }}></span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[800px] max-h-[80vh] overflow-y-auto bg-[#0a0a0a] border border-yellow-500/20">
        <DialogHeader>
          <DialogTitle className="text-3xl font-beni bg-gradient-to-r from-yellow-300 to-amber-400 text-transparent bg-clip-text">{title}</DialogTitle>
        </DialogHeader>
        
        {projectDetail ? (
          <>
            <div className="flex overflow-x-auto scrollbar-hide gap-2 mt-6 pb-2">
              <TabButton 
                active={activeTab === 'overview'} 
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </TabButton>
              <TabButton 
                active={activeTab === 'features'} 
                onClick={() => setActiveTab('features')}
              >
                Features
              </TabButton>
              <TabButton 
                active={activeTab === 'role'} 
                onClick={() => setActiveTab('role')}
              >
                My Role
              </TabButton>
              <TabButton 
                active={activeTab === 'tech'} 
                onClick={() => setActiveTab('tech')}
              >
                Tech Stack
              </TabButton>
            </div>
            
            <div className="mt-6 relative min-h-[300px]">
              <TabContent isActive={activeTab === 'overview'}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Project Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{projectDetail.overview}</p>
                </motion.div>
              </TabContent>
              
              <TabContent isActive={activeTab === 'features'}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {projectDetail.features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-2 text-gray-300 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50"
                      >
                        <span className="text-yellow-400 text-xl">•</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </TabContent>
              
              <TabContent isActive={activeTab === 'role'}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">{projectDetail.role.title}</h3>
                  <ul className="space-y-3">
                    {projectDetail.role.responsibilities.map((responsibility, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <div className="min-w-5 h-5 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 flex items-center justify-center text-xs text-black font-bold">{index + 1}</div>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </TabContent>
              
              <TabContent isActive={activeTab === 'tech'}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectDetail.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 text-sm border border-gray-600/30 hover:border-yellow-500/30 transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </TabContent>
            </div>
          </>
        ) : (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-300 text-center py-10"
          >
            Project details are not available yet.
          </motion.p>
        )}
      </DialogContent>
    </Dialog>
  )
}

interface TabButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

function TabButton({ children, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active ? 'text-gray-950' : 'text-gray-400 hover:text-gray-200'}`}
    >
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

interface TabContentProps {
  children: React.ReactNode;
  isActive: boolean;
}

function TabContent({ children, isActive }: TabContentProps) {
  return isActive ? (
    <div className="absolute top-0 left-0 w-full">
      {children}
    </div>
  ) : null;
}
