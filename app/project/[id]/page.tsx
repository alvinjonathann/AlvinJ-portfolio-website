"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Check, Calendar, Tag, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import ImageCarousel from "../../../components/ui/ImageCarousel";

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
  images: string[];
  challenges: string[];
  solutions: string[];
  learnings: string[];
  duration: string;
  role: string;
}

const projectsData: Record<string, Project> = {
  refun: {
    id: "refun",
    title: "ReFun - Recycle is Fun",
    description: "ReFun is an Android application that promotes plastic bottle recycling through a point-based system, where users can scan QR codes to collect points and redeem them for rewards.",
    image: "/assets/refun1.jpg",
    category: "projects",
    year: "2025",
    duration: "3 months",
    role: "Full-Stack Mobile Development",
    technologies: ["Android", "Firebase", "Kotlin", "Java"],
    githubUrl: "https://github.com/alvinjonathann/refun",
    fullDescription:
      "ReFun is a mobile application built to encourage eco-friendly behavior by making recycling more engaging and rewarding. Users can scan QR codes from collection partners when exchanging plastic bottles, earning points that can later be redeemed for items from the in-app reward catalog. The app also provides redemption history, notifications when points are sufficient, and real-time data synchronization with Firebase. With its simple interface and gamified approach, ReFun modernizes recycling and makes it practical for everyday users.",
    features: ["QR-based point collection system", "Reward catalog with redemption functionality", "Notifications for point milestones", "Real-time synchronization with Firestore", "User-friendly and gamified experience"],
    techStack: ["Android (Java/Kotlin)", "Firebase Firestore", "Firebase Authentication", "QR Code Integration"],
    images: ["/assets/refun1.jpg", "/assets/refun2.jpg", "/assets/refun3.jpg", "/assets/refun4.jpg", "/assets/refun5.jpg", "/assets/refun6.jpg"],
    challenges: ["Ensuring smooth QR code scanning across devices", "Handling real-time synchronization", "Maintaining consistent reward logic"],
    solutions: ["Integrated robust QR code libraries", "Optimized Firestore structure for real-time sync", "Designed scalable reward system"],
    learnings: ["Mobile app for Android", "Realtime database design", "Firebase integration"],
  },

  "refun-owner": {
    id: "refun-owner",
    title: "ReFun Owner",
    description: "ReFun Owner is the companion app for recycling partners, replacing costly vending machines by validating plastic bottles via barcode scanning and generating QR codes for users.",
    image: "/assets/ro1.jpg",
    category: "projects",
    year: "2025",
    duration: "3 months",
    role: "Full-Stack Mobile Development",
    technologies: ["Android", "Firebase", "ML Kit", "QR Code"],
    githubUrl: "https://github.com/alvinjonathann/refun_owner",
    fullDescription:
      "ReFun Owner is designed for collection partners and store owners to manage the plastic bottle exchange process. Instead of using expensive recycling vending machines, ReFun Owner provides a cost-efficient digital solution with a barcode scanner powered by ML Kit to validate bottles against a central database. Once validated, the app generates a QR code that can be scanned by ReFun to credit user points. Integration with Firebase Firestore ensures transparent data tracking, while the app simplifies operations for partners by automating bottle validation and point distribution.",
    features: [
      "Barcode scanning for plastic bottle validation",
      "QR code generation for ReFun users",
      "Real-time transaction and point management",
      "Low-cost alternative to recycling vending machines",
      "Firestore integration for transparent record keeping",
    ],
    techStack: ["Android (Java/Kotlin)", "Firebase Firestore", "ML Kit Barcode Scanner", "QR Code Generator"],
    images: ["/assets/ro1.jpg", "/assets/ro2.jpg", "/assets/ro3.jpg"],
    challenges: ["Ensuring accuracy in barcode validation", "Managing partner-side transaction records"],
    solutions: ["Implemented ML Kit for reliable scanning", "Optimized Firestore structure for transactions"],
    learnings: ["ML Kit integration", "Mobile app for Android", "Firebase integration"],
  },

  "gas-leak": {
    id: "gas-leak",
    title: "Gas Leak and Fire Mitigation System",
    description: "An Arduino-based embedded system that detects gas leaks and fire hazards, activating alarms and an exhaust fan for mitigation while ensuring safe operation.",
    image: "/assets/gaski.jpg",
    category: "projects",
    year: "2025",
    duration: "2 months",
    role: "Embedded Systems",
    technologies: ["Arduino", "Embedded C", "IoT", "Sensors"],
    githubUrl: "https://github.com/alvinjonathann/Gas-Leak-and-Flame-Detection-System-with-Auto-Fan-Control-and-Real-Time-Display",
    fullDescription:
      "This project is an embedded safety system developed with Arduino Uno to detect and mitigate risks from gas leaks and fire. Using MQ-series gas sensors and flame sensors, the system monitors environmental conditions in real time. When gas is detected, it triggers alarms and activates the exhaust fan to disperse hazardous fumes. However, if both gas and fire are detected simultaneously, the system disables the fan to avoid spreading flames, ensuring safe operation. An LCD display provides status updates, while a buzzer serves as an immediate alert mechanism. Designed as a cost-efficient solution, this system can be deployed in residential and industrial environments to enhance safety.",
    features: ["Real-time gas and fire detection", "Automatic alarm and exhaust fan activation", "Smart fan control for safe operation in fire scenarios", "LCD status display for user awareness", "Low-cost, deployable safety solution"],
    techStack: ["Arduino Uno R3", "MQ2 & MQ6 Gas Sensors", "Flame Sensor", "LCD 16x2", "Buzzer", "Exhaust Fan", "Embedded C"],
    images: ["/assets/gaski.jpg", "/assets/gas3.jpg", "/assets/gas4.jpg", "/assets/gas5.jpg", "/assets/gas6.jpg"],
    challenges: ["Integrating multiple sensor inputs", "Ensuring reliable alarm triggering"],
    solutions: ["Developed smart control algorithms", "Implemented logic for gas and fire scenarios"],
    learnings: ["Embedded systems design", "Sensor integration", "Real-world application"],
  },

  "sport-sense": {
    id: "sport-sense",
    title: "Sport Sense - AI Sports Classification",
    description: "Sport Sense is an NLP-based system that classifies sports news headlines into categories like football, basketball, or tennis using DistilBERT with 91% accuracy.",
    image: "/assets/sport-classification.png",
    category: "projects",
    year: "2024",
    duration: "2 months",
    role: "AI Developer",
    technologies: ["Python", "PyTorch", "NLP", "Flask"],
    githubUrl: "https://github.com/alvinjonathann/AI-Sports-Classification",
    fullDescription:
      "Sport Sense is an AI-powered project that leverages Natural Language Processing (NLP) and transformer-based models to automatically classify sports news headlines. The system was trained and fine-tuned with a Kaggle dataset, achieving an average accuracy of 91% using DistilBERT. A keyword-based adjustment layer was also added to improve predictions for specific contexts. To make it practical, a Flask-based web application was built to allow users to input sports headlines and receive instant classifications in under one second. This solution provides a scalable and efficient approach for digital media platforms to automate news categorization.",
    features: ["Automatic classification of sports headlines", "DistilBERT-based NLP model with fine-tuning", "91% classification accuracy", "Keyword-based prediction adjustment", "Real-time classification through Flask web app"],
    techStack: ["Python", "PyTorch", "Transformers", "BERT", "Scikit-learn", "Pandas", "Flask"],
    images: ["/assets/sport-classification.png"],
    challenges: ["Addressing dataset imbalance", "Deploying the model in a lightweight environment"],
    solutions: ["Applied stratified train-test split", "Deployed the model with Flask and optimized dependencies for lightweight usage"],
    learnings: ["Transformer fine-tuning", "Text preprocessing for NLP", "Web integration with Flask"],
  }
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = projectsData[params.id];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <button onClick={() => router.push("/")} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Header */}
      <div className="sticky top-0 z-40 glass backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => router.push("/")} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </motion.button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center space-x-4 mb-6">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-300 border border-purple-600/30 rounded-full text-sm">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                <span className="text-gray-400">{project.year}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{project.title}</h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">{project.fullDescription}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar className="w-5 h-5" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <User className="w-5 h-5" />
                  <span>{project.role}</span>
                </div>
              </div>

              <div className="flex space-x-4">
                {project.githubUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-contain" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Tech Stack */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.techStack.map((tech, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="glass p-4 rounded-xl text-center hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Tag className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 glass p-4 rounded-xl"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Images */}
          {project.images && project.images.length > 1 && (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-white mb-8">Project Gallery</h2>
              <ImageCarousel images={project.images} />
            </motion.div>
          )}

          {/* Challenges & Solutions */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-white mb-8">Challenges</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="glass p-6 rounded-xl">
                    <p className="text-gray-300 leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-white mb-8">Solutions</h2>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <div key={index} className="glass p-6 rounded-xl">
                    <p className="text-gray-300 leading-relaxed">{solution}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Learnings */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-8">Key Learnings</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.learnings.map((learning, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="glass p-6 rounded-xl text-center hover-lift">
                  <p className="text-gray-300">{learning}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
