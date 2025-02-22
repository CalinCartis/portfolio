'use client'

import { useEffect, useState, useRef } from 'react';
import data from './data.json';

export default function Home() {
  const [randomQuote, setRandomQuote] = useState({ quote: '', reference: '' });
  const [activeTab, setActiveTab] = useState('career');
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [theme, setTheme] = useState('dark');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.quotes.length);
    return data.quotes[randomIndex];
  };

  useEffect(() => {
    setRandomQuote(getRandomQuote());
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      const newHeight = contentRef.current.scrollHeight;
      setContentHeight(newHeight);
    }
  }, [activeTab]);

  useEffect(() => {
    if (localStorage.theme === 'light') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="min-h-screen text-slate-600 dark:text-[#a0a0a0] bg-white dark:bg-black font-sans flex flex-col theme-transition">
      <header className="w-full lg:max-w-5xl mx-auto flex-grow p-6 md:p-8" >
        <h1 className="text-2xl md:text-5xl font-bold mt-8 md:mt-80 mb-8 md:mb-20 opacity-0 text-slate-800 dark:text-[#e5e5e5] animate-fadeIn" role="heading" aria-level="1">Calin Cartis</h1>

        <p className="mb-2 opacity-0 animate-fadeIn delay-1 flex gap-2 items-center" aria-label="Location"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>Oradea, Romania</p>
        <p className="mb-2 opacity-0 animate-fadeIn delay-2 flex gap-2 items-center" aria-label="Position"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 12h.01"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M22 13a18.15 18.15 0 0 1-20 0"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>Software Engineer</p>
        <p className="mb-8 opacity-0 animate-fadeIn delay-3 flex gap-2 items-center" aria-label="Email"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="M22 6l-10 7L2 6"></path></svg>calin_cartis@yahoo.com</p>

        <button
          onClick={toggleTheme}
          className="mb-8 opacity-0 animate-fadeIn delay-4 flex items-center gap-2"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          <div className="relative inline-flex items-center cursor-pointer">
            <div className={`w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-[#2e2e2e] transition-colors duration-200`}>
              <div
                className={`absolute top-[2px] left-[2px] bg-white dark:bg-[#e5e5e5] w-5 h-5 rounded-full transition-transform duration-200 ${
                  theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
                } shadow-sm flex items-center justify-center`}
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#2e2e2e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </button>

        <p className="opacity-0 animate-fadeIn delay-4">
          I&apos;m a 23 y/o programmer who loves building awesome things from scratch. Whether it&apos;s backend or frontend development, I enjoy creating awesome projects that push my skills. When I&apos;m not coding, you&apos;ll probably find me outdoors, sweating somewhere in the woods.
        </p>
      </header>

      <main className="w-full lg:max-w-5xl mx-auto flex-grow p-6 md:p-8">
        <div className="opacity-0 animate-fadeIn delay-5">
          <div className="flex justify-center space-x-8 mb-8 text-lg" role="tablist" aria-label="Profile sections">
            <button
              role="tab"
              aria-selected={activeTab === 'career'}
              aria-controls="career-tab"
              id="career-tab-button"
              className={`cursor-pointer underline-offset-8 hover:text-slate-800 dark:hover:text-[#e5e5e5] transition duration-300 ${activeTab === 'career' ? 'text-slate-800 dark:text-[#e5e5e5] underline' : ''}`}
              onClick={() => setActiveTab('career')}
            >
              Career
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'technologies'}
              aria-controls="technologies-tab"
              id="technologies-tab-button"
              className={`cursor-pointer underline-offset-8 hover:text-slate-800 dark:hover:text-[#e5e5e5] transition duration-300 ${activeTab === 'technologies' ? 'text-slate-800 dark:text-[#e5e5e5] underline' : ''}`}
              onClick={() => setActiveTab('technologies')}
            >
              Technologies
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'projects'}
              aria-controls="projects-tab"
              id="projects-tab-button"
              className={`cursor-pointer underline-offset-8 hover:text-slate-800 dark:hover:text-[#e5e5e5] transition duration-300 ${activeTab === 'projects' ? 'text-slate-800 dark:text-[#e5e5e5] underline' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
          </div>

          <div
            className="transition-all duration-300 ease-in-out overflow-hidden mb-12 md:mb-16"
            style={{ height: `${contentHeight}px` }}
          >
            <div ref={contentRef}>
              <div
                id="career-tab"
                role="tabpanel"
                aria-labelledby="career-tab-button"
                hidden={activeTab !== 'career'}
                className="opacity-0 animate-fadeIn"
              >
                {data.career.map((exp, index) => (
                  <div className="mb-8" key={index}>
                    <h3 className="font-medium text-slate-800 dark:text-[#e5e5e5]">{exp.title}</h3>
                    <p className="mb-2">{exp.date}</p>
                    <p>{exp.description}</p>
                  </div>
                ))}
              </div>
              <div
                id="projects-tab"
                role="tabpanel"
                aria-labelledby="projects-tab-button"
                hidden={activeTab !== 'projects'}
                className="opacity-0 animate-fadeIn"
              >
                {data.projects.map((proj, index) => (
                  <div className="mb-8" key={index}>
                    <h3 className="font-medium text-slate-800 dark:text-[#e5e5e5] mb-2">{proj.title}</h3>
                    <p className="mb-2 px-5">{proj.description}</p>
                  </div>
                ))}
              </div>
              <div
                id="technologies-tab"
                role="tabpanel"
                aria-labelledby="technologies-tab-button"
                hidden={activeTab !== 'technologies'}
                className="opacity-0 animate-fadeIn"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-slate-800 dark:text-[#e5e5e5] font-medium mb-2">Languages & Frameworks</h3>
                    <ul className="list-disc list-outside ml-4 space-y-1">
                      {data.technologies.languages.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-slate-800 dark:text-[#e5e5e5] font-medium mb-2">Databases & Storage</h3>
                    <ul className="list-disc list-outside ml-4 space-y-1">
                      {data.technologies.databases_storage.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-slate-800 dark:text-[#e5e5e5] font-medium mb-2">Cloud & DevOps</h3>
                    <ul className="list-disc list-outside ml-4 space-y-1">
                      {data.technologies.cloud_devops.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-slate-800 dark:text-[#e5e5e5] font-medium mb-2">Integrations & Monitoring</h3>
                    <ul className="list-disc list-outside ml-4 space-y-1">
                      {data.technologies.integrations_monitoring.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section aria-labelledby="links-heading">
          <h2 className="text-xl font-semibold mb-4 opacity-0 animate-fadeIn delay-6">Links</h2>
          <div className="flex gap-4">
            <a href="mailto:calin_cartis@yahoo.com" 
               className="text-slate-800 dark:text-[#e5e5e5] opacity-0 animate-fadeIn delay-7 flex gap-2 items-center" 
               aria-label="Send an email to Calin Cartis"
            >
              Mail
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M6 18L18 6M18 6H9M18 6V15" className="stroke-slate-800 dark:stroke-[#ffffff]"></path>
                </g>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/calin-cartis-13a947207/" 
               target="_blank" 
               className="text-slate-800 dark:text-[#e5e5e5] opacity-0 animate-fadeIn delay-8 flex gap-2 items-center" 
               aria-label="Visit Calin Cartis's LinkedIn profile"
            >
              Linkedin
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M6 18L18 6M18 6H9M18 6V15" className="stroke-slate-800 dark:stroke-[#ffffff]"></path>
                </g>
              </svg>
            </a>
          </div>
        </section>
      </main>

      <footer className="w-full text-slate-400 dark:text-[#707070] text-sm border-t border-slate-200 dark:border-[#2e2e2e] min-h-[53px] opacity-0 animate-fadeIn delay-9">
        <div className="w-full lg:max-w-5xl px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between md:items-center my-4 space-y-2 md:space-y-0">
          <p>{randomQuote.quote}</p>
          <p>{randomQuote.reference}</p>
        </div>
      </footer>
    </div>
  );
}
