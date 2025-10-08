"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, Calendar, Award, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "projects" | "licenses" | "experience";
  year: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
}

const PortfolioSection = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<"projects" | "licenses" | "experience">("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const portfolioItems: Project[] = [
    // Projects
    {
      id: "refun",
      title: "ReFun - Recycle is Fun",
      description: "ReFun is an Android application that promotes plastic bottle recycling through a point-based system, where users can scan QR codes to collect points and redeem them for rewards.",
      image: "/assets/refun1.jpg",
      category: "projects",
      year: "2025",
      technologies: ["Android", "Firebase", "Java", "Kotlin"],
      githubUrl: "https://github.com/alvinjonathann/refun",
      fullDescription:
        "ReFun is a mobile application built to encourage eco-friendly behavior by making recycling more engaging and rewarding. Users can scan QR codes from collection partners when exchanging plastic bottles, earning points that can later be redeemed for items from in-app reward catalog. The app also provides redemption history, notifications when points are sufficient, and real-time data synchronization with Firebase. With its simple interface and gamified approach, ReFun modernizes recycling and makes it practical for everyday users.",
      features: ["QR-based point collection system", "Reward catalog with redemption functionality", "Real-time synchronization with Firestore", "User-friendly and gamified experience"],
      techStack: ["Android", "Kotlin", "Java", "Firebase Firestore", "Firebase Authentication", "QR Code Integration"],
    },
    {
      id: "refun-owner",
      title: "ReFun Owner App",
      description: "ReFun Owner is the companion app for recycling partners, replacing costly vending machines by validating plastic bottles via barcode scanning and generating QR codes for users.",
      image: "/assets/ro1.jpg",
      category: "projects",
      year: "2025",
      technologies: ["Android", "Firebase", "ML Kit", "QR Code"],
      githubUrl: "https://github.com/alvinjonathann/refun_owner",
      fullDescription:
        "ReFun Owner is designed for collection partners and store owners to manage the plastic bottle exchange process. Instead of using expensive recycling vending machines, ReFun Owner provides a cost-efficient digital solution with a barcode scanner powered by ML Kit to validate bottles against a central database. Once validated, the app generates a QR code that can be scanned by ReFun to credit user points. Integration with Firebase Firestore ensures transparent data tracking, while the app simplifies operations for partners by automating bottle validation and point distribution.",
      features: [
        "Barcode scanning for plastic bottle validation",
        "QR code generation for REFUN users",
        "Real-time transaction and point management",
        "Low-cost alternative to recycling vending machines",
        "Firestore integration for transparent record keeping",
      ],
      techStack: ["Android", "Kotlin", "Java", "Firebase Firestore", "ML Kit Barcode Scanner", "QR Code Generator"],
    },
    {
      id: "gas-leak",
      title: "Gas Leak and Fire Mitigation System",
      description: "An Arduino-based embedded system that detects gas leaks and fire hazards, activating alarms and an exhaust fan for mitigation while ensuring safe operation.",
      image: "/assets/gaski.jpg",
      category: "projects",
      year: "2025",
      technologies: ["Arduino", "Sensors", "C++"],
      githubUrl: "https://github.com/alvinjonathann/Gas-Leak-and-Flame-Detection-System-with-Auto-Fan-Control-and-Real-Time-Display",
      liveUrl: "https://drive.google.com/file/d/1MyYCWkp4B9IRuQCxV5_H_aRNcAMMgCEs/view?usp=sharing",
      fullDescription:
      "This project is an embedded safety system developed with Arduino Uno to detect and mitigate risks from gas leaks and fire. Using MQ-series gas sensors and flame sensors, the system monitors environmental conditions in real time. When gas is detected, it triggers alarms and activates the exhaust fan to disperse hazardous fumes. However, if both gas and fire are detected simultaneously, the system disables the fan to avoid spreading flames, ensuring safe operation. An LCD display provides status updates, while a buzzer serves as an immediate alert mechanism. Designed as a cost-efficient solution, this system can be deployed in residential and industrial environments to enhance safety.",
      features: [
        "Real-time gas and fire detection",
        "Automatic alarm and exhaust fan activation",
        "Smart fan control for safe operation in fire scenarios",
        "LCD status display for user awareness",
        "Low-cost and deployable safety solution",
      ],
      techStack: ["Arduino", "Sensors", "C++"],
    },
    {
      id: "sport-sense",
      title: "Sport Sense - AI Sports Classification",
      description: "Sport Sense is an NLP-based system that classifies sports news headlines into categories like football, basketball, etc using various machine learning model and achieved 91% accuracy with DistilBERT.",
      image: "/assets/sport-classification.png",
      category: "projects",
      year: "2024",
      technologies: ["Python", "PyTorch", "NLP", "Flask"],
      githubUrl: "https://github.com/alvinjonathann/AI-Sports-Classification",
      fullDescription:
        "Sport Sense is an AI-powered project that leverages Natural Language Processing (NLP) and transformer-based models to automatically classify sports news headlines. The system was trained and fine-tuned with a Kaggle dataset, achieving an average accuracy of 91% using DistilBERT. A keyword-based adjustment layer was also added to improve predictions for specific contexts. To make it practical, a Flask-based web application was built to allow users to input sports headlines and receive instant classifications in under one second. This solution provides a scalable and efficient approach for digital media platforms to automate news categorization.",
      features: ["Automatic classification of sports headlines", "DistilBERT-based NLP model with fine-tuning", "91% classification accuracy", "Keyword-based prediction adjustment", "Real-time classification through Flask web app"],
      techStack: ["Python", "PyTorch", "NLP", "Flask"],
    },
    // Licenses & Certifications
    {
      id: "icp-web3",
      title: "ICP Builder Day 2024",
      description: "Smart Contract Deployment at ICP Builder Day, Binus University",
      image: "/assets/icp-certif.jpg",
      category: "licenses",
      year: "2024",
      technologies: ["Blockchain", "Web3", "Smart Contract"],
      fullDescription: "Successfully deployed a smart contract at the ICP Builder Day held at Binus University. This certificate recognizes creativity, technical skills, and dedication in exploring Web3 technology during the event.",
      features: ["Smart Contract Deployment", "Web3 Exploration", "Blockchain Development"],
      techStack: ["Blockchain", "Web3", "Smart Contract"],
    },
    {
      id: "inc-2024",
      title: "ICPC Indonesia National Contest 2024",
      description: "International Collegiate Programming Contest 2024 - Indonesia National Contest",
      image: "/assets/inc-certif.png",
      category: "licenses",
      year: "2024",
      technologies: ["Algorithms", "Critical Thinking", "Problem Solving"],
      fullDescription:
        "Participated in the 2024 ICPC Asia Jakarta - Indonesia National Contest representing Binus University. Achieved 185th place, demonstrating persistence, teamwork, and advanced problem-solving skills in competitive programming.",
      features: ["Algorithm Design", "Data Structures", "Team Collaboration", "Problem Solving"],
      techStack: ["C++", "Python", "Competitive Programming", "Algorithms", "Critical Thinking", "Problem Solving"],
    },
    // Experience
    {
      id: "blossom",
      title: "Web Developer Intern",
      description: "Contributed to web development projects using React, Tailwind, and Motion. Built websites and implemented API calling for dynamic data updates while collaborating with the team through Bitbucket.",
      image: "/assets/blossom-logo.jpg",
      category: "experience",
      year: "2025",
      technologies: ["React", "Typescript", "Tailwind CSS", "Vite", "Vercel"],
      fullDescription: `During my internship at Blossombiz, I worked as a Web Developer focusing on building company profile websites and implementing responsive interface design. My main responsibilities included developing websites and implementing API calling to ensure real-time data updates. I utilized modern front-end technologies such as React, Tailwind CSS, Motion, and Reactbits to create responsive, interactive, and visually appealing interfaces.
      
      I collaborated with the team through Bitbucket for version control and task management, ensuring smooth workflow and code integration. Throughout the internship, I consistently delivered tasks on time, improved my understanding of API integration and Front-End layouting through practices, and gained valuable experience working in a remote, collaborative environment.`,
      features: ["Web Development", "API Integration", "Team Collaboration", "Time Management"],
      techStack: ["React", "Typescript", "Tailwind CSS", "Vite", "Vercel", "Git", "Bitbucket"],
    },
  ];

  const filters = [
    { key: "projects" as const, label: "Projects", icon: Briefcase },
    { key: "licenses" as const, label: "Licenses", icon: Award },
    { key: "experience" as const, label: "Experience", icon: Calendar },
  ];

  const filteredItems = portfolioItems.filter((item) => item.category === activeFilter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex justify-center mb-12">
          <div className="glass rounded-full p-2 flex space-x-2">
            {filters.map(({ key, label, icon: Icon }) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === key ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="glass rounded-2xl overflow-hidden hover-lift">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="relative w-full h-48">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <span className="text-white text-sm font-medium">{item.year}</span>
                        <div className="flex space-x-2">
                          {item.githubUrl && (
                            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                              <Github className="w-4 h-4 text-white" />
                            </div>
                          )}
                          {item.liveUrl && (
                            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                              <ExternalLink className="w-4 h-4 text-white" />
                            </div>
                          )}
                          <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                            <Eye className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 text-xs rounded-full ${tech.startsWith("+") ? "bg-gray-700 text-gray-300" : "bg-purple-600/20 text-purple-300 border border-purple-600/30"}`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(item);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <div className="text-gray-400 text-lg">No items found in this category yet.</div>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={closeModal} />
    </section>
  );
};

export default PortfolioSection;
