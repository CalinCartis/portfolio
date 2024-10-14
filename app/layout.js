import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Calin Cartis",
  description: "Showcasing the work and projects of Calin Cartis, a creative web developer focused on building innovative and high-quality web solutions.",
  keywords: [
    "Fullstack Developer",
    "Backend Developer",
    "Web Developer",
    "Software Developer",
    "Backend APIs",
    "API Development",
    "WordPress Plugins",
    "WordPress Themes",
    "Frontend Development",
    "Vue.js",
    "Javascript",
    "TypeScript",
    "MySQL",
    "PHP",
    "Laravel",
    "Docker",
    "CI/CD",
    "Node.js",
    "MongoDB",
    "Balena",
    "RabbitMQ",
    "Filament",
    "Firebase",
    "Minio",
    "Traefik",
    "MQTT",
    "IoT",
    "Christian Developer",
    "Problem-Solving",
    "Innovative Solutions",
    "Scalable Systems",
    "Client Collaboration",
    "High-Performance Web Apps",
    "Agile Development",
    "Cross-Functional Collaboration",
    "Software Engineering",
    "DevOps Practices"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
