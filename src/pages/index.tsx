import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import News from "@/components/sections/News";
import Research from "@/components/sections/Research";
import Publications from "@/components/sections/Publications";
import Education from "@/components/sections/Education";
import Gallery from "@/components/sections/Gallery";
import GitHubProfile from "@/components/sections/GitHubProfile";
import Contact from "@/components/sections/Contact";
import {
  personalInfo,
  education,
  publications,
  projects,
  skills,
  news,
  research,
  experience,
  galleryItems,
  cvUrl,
} from "@/data";

export default function Home() {
  return (
    <Layout info={personalInfo} cvUrl={cvUrl}>
      <Hero info={personalInfo} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <News news={news} />
      <Research research={research} />
      <Publications publications={publications} />
      <Education education={education} experience={experience} />
      <Gallery items={galleryItems} />
      <GitHubProfile />
      <Contact info={personalInfo} />
    </Layout>
  );
}
