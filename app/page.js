export default function Home() {
  const email = process.env.PUBLIC_EMAIL;
  const linkedin = process.env.PUBLIC_LINKEDIN;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <h1
          className="text-4xl sm:text-5xl font-bold opacity-0 animate-fadeInUp text-[#2e8b57]"
          style={{ animationDelay: "0.3s" }}
        >
          Coming Soon!
        </h1>
        <p
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="text-[#2e8b57]">calincartis.com</span> is under construction. Stay tuned for something amazing!
        </p>

        <div
          className="flex gap-4 items-center flex-col sm:flex-row opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.9s" }}
        >
          <a
            className="rounded-full border border-solid border-[#2e8b57] transition duration-300 ease-in-out flex items-center justify-center bg-[#2e8b57] text-white gap-2 hover:bg-[#2f4f4f] dark:hover:bg-[#2e8b57] hover:scale-105 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 transform"
            href={`mailto:${email}`}
          >
            Contact Me
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition duration-300 ease-in-out flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent hover:scale-105 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 transform cursor-pointer text-[#2e8b57]"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </main>

      <footer
        className="row-start-3 text-center text-[#2e8b57] text-sm opacity-0 animate-fadeInUp"
        style={{ animationDelay: "1.2s" }}
      >
        © {new Date().getFullYear()} Călin Cartiș. All rights reserved.
      </footer>
    </div>
  );
}
