import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { PROFILE } from "@/data/resume";

export default function Footer() {
  return (
    <footer id="contact" className="bg-grape text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-lg uppercase leading-relaxed sm:text-2xl">Get in touch</h2>
        <p className="max-w-xl text-lg leading-snug">
          Open to research collaborations, internships, and helping juniors get started.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-ink">
          <a href={`mailto:${PROFILE.email}`} className="px-btn bg-sun">
            <FiMail aria-hidden /> Email
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="px-btn bg-paper">
            <FaGithub aria-hidden /> GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="px-btn bg-mint">
            <FaLinkedin aria-hidden /> LinkedIn
          </a>
        </div>
        <p className="font-term text-xl">{PROFILE.email}</p>
      </div>
      <div className="border-t-4 border-ink bg-ink py-3 text-center font-term text-lg text-paper/80">
        © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location}
      </div>
    </footer>
  );
}
