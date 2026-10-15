import PixelHero from "@/components/PixelHero";
import ProfileSection from "@/components/sections/ProfileSection";
import EducationSection from "@/components/sections/EducationSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import SkillsSection from "@/components/sections/SkillsSection";
import JuniorsSection from "@/components/sections/JuniorsSection";
import InspirationSection from "@/components/sections/InspirationSection";

export default function Home() {
  return (
    <>
      <PixelHero />
      <ProfileSection />
      <EducationSection />
      <ResearchSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <LeadershipSection />
      <SkillsSection />
      <JuniorsSection />
      <InspirationSection />
    </>
  );
}
