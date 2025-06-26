import React from "react";

const tools = [
  { name: "Figma", category: "Design tool", icon: "/figma.svg" },
  { name: "HTML", category: "User Interface", icon: "/icons8-html-5-48.png" },
  { name: "CSS", category: "User Interface", icon: "/css3.svg" },
  { name: "JavaScript", category: "Interaction", icon: "/javascript.svg" },
  { name: "NodeJS", category: "Web Server", icon: "/nodejs.SVG" },
  { name: "ExpressJS", category: "Node Framework", icon: "/expressjs.svg" },
  { name: "MongoDB", category: "Database", icon: "/mongodb.svg" },
  { name: "MySQL", category: "Database", icon: "/icons8-mysql-logo-96.png" },
  { name: "React", category: "Framework", icon: "/react.svg" },
  { name: "TailwindCSS", category: "User Interface", icon: "/tailwindcss.svg" },
];

export default function ToolsSection() {
  return (
    <div className="flex items-center justify-center py-[50px]   text-white px-8 ml-[80px]">
      <div className=" w-full text-center">
        <h2 className="text-4xl flex items-start font-bold">Essential Tools I Use</h2>
        <p className="mt-4   flex items-start text-lg text-gray-400">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {tools.map((tool, index) => (
            <div key={index} className="border-[#575757] p-4 rounded-lg shadow-lg flex items-center gap-4 transition transform hover:scale-105">
              <img src={tool.icon} alt={tool.name} className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-semibold">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}