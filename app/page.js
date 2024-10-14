'use client'

import { useEffect, useState, useRef } from 'react';
import data from './data.json';

export default function Home() {
  const [randomQuote, setRandomQuote] = useState({ quote: '', reference: '' });
  const [activeTab, setActiveTab] = useState('career');
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

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

  return (
    <div className="min-h-screen text-[#a0a0a0] font-sans flex flex-col">
      <main className="max-w-5xl mx-auto flex-grow p-6 md:p-8">
        <h1 className="text-2xl md:text-5xl font-bold mt-8 md:mt-80 mb-8 md:mb-20 opacity-0 text-[#e5e5e5] animate-fadeIn">Calin Cartis</h1>

        <p className="mb-2 opacity-0 animate-fadeIn delay-1 flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>Oradea, Romania</p>
        <p className="mb-2 opacity-0 animate-fadeIn delay-2 flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 12h.01"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M22 13a18.15 18.15 0 0 1-20 0"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>Fullstack Developer @ TechStackApps</p>
        <p className="mb-8 opacity-0 animate-fadeIn delay-3 flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="M22 6l-10 7L2 6"></path></svg>calin_cartis@yahoo.com</p>

        <p className="mb-8 opacity-0 animate-fadeIn delay-4">
          I&apos;m a 23 y/o programmer who loves building awesome things from scratch. Whether it&apos;s backend or frontend development, I enjoy creating awesome projects that push my skills. When I&apos;m not coding, you&apos;ll probably find me outdoors, sweating somewhere in the woods.
        </p>

        <div className="opacity-0 animate-fadeIn delay-5">
          <div className="flex justify-center space-x-8 mb-8 text-lg">
            <span
              className={`cursor-pointer underline-offset-8 hover:text-[#e5e5e5] transition duration-300 ${activeTab === 'career' ? 'text-[#e5e5e5] underline' : ''}`}
              onClick={() => setActiveTab('career')}
            >
              Career
            </span>
            <span
              className={`cursor-pointer underline-offset-8 hover:text-[#e5e5e5] transition duration-300 ${activeTab === 'projects' ? 'text-[#e5e5e5] underline' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </span>
          </div>

          <div
            className="transition-all duration-300 ease-in-out overflow-hidden mb-8"
            style={{ height: `${contentHeight}px` }}
          >
            <div ref={contentRef}>
              {activeTab === 'career' && (
                <div className="opacity-0 animate-fadeIn">
                  {data.career.map((exp, index) => (
                    <div className="mb-8" key={index}>
                      <h3 className="font-medium text-[#e5e5e5]">{exp.title}</h3>
                      <p className="mb-2">{exp.date}</p>
                      <p>{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'projects' && (
                <div className="opacity-0 animate-fadeIn">
                  {data.projects.map((proj, index) => (
                    <div className="mb-8" key={index}>
                      <h3 className="font-medium text-[#e5e5e5] mb-2">{proj.title}</h3>
                      <p className="mb-2 px-5">{proj.description}</p>
                      <p className="text-sm px-5 text-[#e5e5e5]">Technologies: {proj.technologies}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4 opacity-0 animate-fadeIn delay-6">Links</h2>
        <div className="flex gap-4">
          <a href="mailto:calin_cartis@yahoo.com" className="text-[#e5e5e5] opacity-0 animate-fadeIn delay-7 flex gap-2 items-center">Mail<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 18L18 6M18 6H9M18 6V15" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></a>
          <a href="https://www.linkedin.com/in/calin-cartis-13a947207/" target="_blank" className="text-[#e5e5e5] opacity-0 animate-fadeIn delay-8 flex gap-2 items-center">Linkedin<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 18L18 6M18 6H9M18 6V15" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></a>
        </div>
      </main>

      <footer className="w-full text-[#707070] text-sm border-t border-[#2e2e2e] min-h-[53px] opacity-0 animate-fadeIn delay-9">
        <div className="max-w-5xl px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between md:items-center my-4 space-y-2 md:space-y-0">
          <p>{randomQuote.quote}</p>
          <p>{randomQuote.reference}</p>
        </div>
      </footer>
    </div>
  );
}
