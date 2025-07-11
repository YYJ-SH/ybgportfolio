'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Shield, Terminal, Award, FileText, BookOpen, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const SecurityPortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { profile, projects, learningActivities, awards, certificates, externalActivities, skills, blogPosts } = portfolioData;

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Cybersecurity Grid Background */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${darkMode ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.05)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.05)'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}/>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Security Portfolio
          </div>
          <div className="flex items-center space-x-8">
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
            <a href="#learning" className="hover:text-green-400 transition-colors">Learning</a>
            <a href="#achievements" className="hover:text-green-400 transition-colors">Achievements</a>
            <a href="#skills" className="hover:text-green-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-green-400 hover:bg-green-400 hover:text-black transition-all"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1 mb-6">
              <div className={`w-full h-full rounded-full flex items-center justify-center text-8xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                🛡️
              </div>
            </div>
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            {profile.name}
          </h1>
          <p className="text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            {profile.tagline}
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href={profile.contact.github} className="p-3 rounded-full bg-green-500/20 hover:bg-green-500/30 transition-all">
              <Github className="w-8 h-8 text-green-400" />
            </a>
            <a href={profile.contact.linkedin} className="p-3 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-all">
              <Linkedin className="w-8 h-8 text-blue-400" />
            </a>
            <a href={`mailto:${profile.contact.email}`} className="p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-all">
              <Mail className="w-8 h-8 text-purple-400" />
            </a>
            <a href={profile.contact.blog} className="p-3 rounded-full bg-orange-500/20 hover:bg-orange-500/30 transition-all">
              <FileText className="w-8 h-8 text-orange-400" />
            </a>
          </div>
        </div>
        
        {/* Animated Security Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-32 w-6 h-6 bg-blue-500 rounded-full animate-bounce" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
        
        <ChevronDown className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-8 h-8 animate-bounce text-green-400" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-2xl hover:shadow-green-500/20 transition-all duration-300`}>
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-6">
              {profile.introduction.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed opacity-90 text-center">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            <Shield className="inline-block w-10 h-10 mr-4" />
            Projects
          </h2>
          <div className="grid gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`p-8 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-2xl hover:shadow-green-500/20 transition-all duration-300 group`}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="opacity-80 mb-6">{project.overview}</p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-green-400">주요 기여:</h4>
                      <ul className="space-y-2">
                        {project.contribution.map((item, i) => (
                          <li key={i} className="opacity-80">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {project.links.map((link, i) => (
                        <a key={i} href={link.url} className="flex items-center space-x-2 hover:text-green-400 transition-colors">
                          <ExternalLink className="w-5 h-5" />
                          <span>{link.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                      <Terminal className="w-24 h-24 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Activities Section */}
      <section id="learning" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            <BookOpen className="inline-block w-10 h-10 mr-4" />
            Learning & Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningActivities.map((activity) => (
              <div 
                key={activity.id}
                className={`p-6 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 group`}
              >
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {activity.title}
                </h3>
                <p className="opacity-80 mb-4 text-sm">{activity.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-blue-400">적용 사례:</h4>
                  <p className="opacity-80 text-sm">{activity.application}</p>
                </div>
                {activity.fileUrl && (
                  <a href={activity.fileUrl} className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">강의 자료 보기</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            <Award className="inline-block w-10 h-10 mr-4" />
            Achievements
          </h2>
          
          {/* Awards */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400">수상 기록</h3>
            <div className="grid gap-6">
              {awards.map((award) => (
                <div 
                  key={award.id}
                  className={`p-6 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-xl hover:shadow-green-500/20 transition-all duration-300`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold mb-2">{award.title}</h4>
                      <p className="text-green-400 mb-2">{award.organizer}</p>
                      <p className="opacity-80 mb-4">{award.description}</p>
                    </div>
                    <span className="text-sm opacity-60">{award.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">자격증 및 수료증</h3>
            <div className="grid gap-6">
              {certificates.map((cert) => (
                <div 
                  key={cert.id}
                  className={`p-6 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-xl hover:shadow-blue-500/20 transition-all duration-300`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                      <p className="text-blue-400 mb-2">{cert.organizer}</p>
                    </div>
                    <span className="text-sm opacity-60">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* External Activities */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-purple-400">외부 활동</h3>
            <div className="grid gap-6">
              {externalActivities.map((activity) => (
                <div 
                  key={activity.id}
                  className={`p-6 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-xl hover:shadow-purple-500/20 transition-all duration-300`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-bold mb-2">{activity.name}</h4>
                      <p className="text-purple-400 mb-2">{activity.role}</p>
                      <p className="opacity-80">{activity.description}</p>
                    </div>
                    <span className="text-sm opacity-60">{activity.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const colors = ['green', 'blue', 'purple'];
              const color = colors[index];
              return (
                <div 
                  key={category}
                  className={`p-6 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-2xl hover:shadow-${color}-500/20 transition-all duration-300 group`}
                >
                  <h3 className={`text-xl font-bold mb-6 text-${color}-400`}>{category}</h3>
                  <div className="space-y-4">
                    {skillList.map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="font-semibold">{skill.name}</h4>
                        <p className="text-sm opacity-80">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Recent Blog Posts
          </h2>
          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className={`p-6 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-xl hover:shadow-orange-500/20 transition-all duration-300 group`}
              >
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  {post.title}
                </h3>
                <p className="opacity-80 mb-4">{post.description}</p>
                <a href={post.url} className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  <span>글 읽어보기</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-xl mb-8 opacity-80">
            보안 분야에서의 새로운 도전이나 협업 기회에 관심이 있으시다면 언제든 연락주세요!
          </p>
          <div className="flex justify-center space-x-6">
            <a href={`mailto:${profile.contact.email}`} className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a href={profile.contact.github} className="flex items-center space-x-2 px-6 py-3 border border-green-400 rounded-full hover:bg-green-400 hover:text-black transition-all">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href={profile.contact.blog} className="flex items-center space-x-2 px-6 py-3 border border-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-all">
              <FileText className="w-5 h-5" />
              <span>Blog</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPortfolio;