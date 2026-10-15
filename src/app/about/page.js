import ProfileSection from "@/components/sections/ProfileSection";
import EducationSection from "@/components/sections/EducationSection";
import ResearchSection from "@/components/sections/ResearchSection";

export const metadata = { title: "About · Bhawish Kumar" };

export default function AboutPage() {
  return (
    <>
      <ProfileSection />
      <EducationSection />
      <ResearchSection />
    </>
  );
}
