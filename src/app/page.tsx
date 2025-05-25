import GlitchText from "@/components/GlitchText";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Github, Briefcase, FileText } from "lucide-react";
import Scene from "@/components/Scene";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-0 m-0 flex flex-col">
      <GlitchText
        text="MALIN GRAFTON"
        subText="Fullstack Developer"
        className="w-full text-[18vw] font-bold text-center tracking-wide leading-[0.7] m-0 p-0 "
        subTextClassName="w-full text-[4vw] font-bold tracking-wide leading-[0.7] ml-1 m-0 p-0 "
      />
      <section className="flex-1 flex justify-center items-center relative">
        <div className="absolute inset-0 z-0">
          <Scene />
        </div>
        <div className="flex gap-6 relative z-10">
          <Link
            className={buttonVariants({
              variant: "ghost",
              size: "lg",
              className:
                "hover:bg-white/10 transition-colors backdrop-blur-sm bg-black/20",
            })}
            href="https://github.com/Malidudle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </Link>
          <Link
            className={buttonVariants({
              variant: "ghost",
              size: "lg",
              className:
                "hover:bg-white/10 transition-colors backdrop-blur-sm bg-black/20",
            })}
            href="/projects"
          >
            <Briefcase className="w-5 h-5" />
            <span>Projects</span>
          </Link>
          <Link
            className={buttonVariants({
              variant: "ghost",
              size: "lg",
              className:
                "hover:bg-white/10 transition-colors backdrop-blur-sm bg-black/20",
            })}
            href="/cv"
          >
            <FileText className="w-5 h-5" />
            <span>CV</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
