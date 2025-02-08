import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "@/components/resume/WorkExperience";
import { Projects } from "@/components/resume/Projects";
import { Education } from "@/components/resume/Education";
import { Summary } from "@/components/resume/Summary";
import { Skills } from "@/components/resume/Skills";
import { Header } from "@/components/resume/Header";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.about,
    type: "website",
    locale: "ko_KR",
    // images: [
    //   {
    //     url: "",
    //     width: 1200,
    //     height: 630,
    //     alt: `${RESUME_DATA.name}'s profile picture`,
    //   },
    // ],
  },
};

export default function ResumePage() {
  return (
    <main className="py-16" id="main-content">
      <div className="sr-only">
        <h1>{RESUME_DATA.name}&apos; 이력서</h1>
      </div>

      <section className=" space-y-8" aria-label="이력서 내용">
        <Header />

        <div className="space-y-8 ">
          <Summary summary={RESUME_DATA.summary} />

          <WorkExperience work={RESUME_DATA.work} />

          <Education education={RESUME_DATA.education} />

          <Skills skills={RESUME_DATA.skills} />

          <Projects projects={RESUME_DATA.projects} />
        </div>
      </section>
    </main>
  );
}
