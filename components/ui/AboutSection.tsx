"use client";

import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import LogoLoop from "./LogoLoop";
import { Code, Database, Globe, Smartphone, Brain, Cpu, Cloud, GitBranch, Terminal, Zap } from "lucide-react";

const AboutSection = () => {
  const techLogos = [
    { node: <Code className="w-8 h-8 text-blue-400" />, title: "React" },
    { node: <Database className="w-8 h-8 text-green-400" />, title: "Node.js" },
    { node: <Globe className="w-8 h-8 text-purple-400" />, title: "TypeScript" },
    { node: <Smartphone className="w-8 h-8 text-cyan-400" />, title: "React Native" },
    { node: <Brain className="w-8 h-8 text-pink-400" />, title: "Python" },
    { node: <Cpu className="w-8 h-8 text-orange-400" />, title: "TensorFlow" },
    { node: <Cloud className="w-8 h-8 text-indigo-400" />, title: "AWS" },
    { node: <GitBranch className="w-8 h-8 text-red-400" />, title: "Git" },
    { node: <Terminal className="w-8 h-8 text-yellow-400" />, title: "Docker" },
    { node: <Zap className="w-8 h-8 text-emerald-400" />, title: "MongoDB" },
  ];

  const handleContactClick = () => {
    const element = document.getElementById("connect");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">Passionate about creating innovative solutions through technology</p> */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Card */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex justify-center">
            <ProfileCard
              avatarUrl="/assets/profile.jpg"
              miniAvatarUrl="/assets/profile.jpg"
              name="Alvin Jonathan"
              title="CS Student"
              handle="Alvin Jonathan"
              status="Available"
              contactText="Contact"
              onContactClick={handleContactClick}
              enableTilt={true}
              enableMobileTilt={true}
            />
          </motion.div>

          {/* About Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
            <div className="glass p-6 sm:p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Hello, World !</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I am an undergraduate Computer Science student at Binus University Bandung with a strong interest in web development, embedded systems, and IoT. I enjoy learning new technologies, building practical projects, and applying problem-solving skills to create impactful solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Beyond academics, I am also eager to continuously learn and adapt to new challenges in the tech industry. I believe that combining creativity with technical skills is the key to building impactful digital solutions. With a growth mindset and curiosity, I am motivated to contribute to meaningful projects while expanding my knowledge and expertise.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Interests</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Web Development</li>
                    <li>• Embedded Systems</li>
                    <li>• IoT Solutions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Focus Areas</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Front-End Development</li>
                    <li>• Mobile Applications</li>
                    <li>• Cloud Computing</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Carousel */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">Technologies I Work With</h3>
          <LogoLoop logos={techLogos} speed={50} direction="left" logoHeight={32} gap={48} pauseOnHover={true} fadeOut={true} scaleOnHover={true} className="py-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
