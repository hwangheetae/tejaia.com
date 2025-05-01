import IconGithub from "@/components/icon/Github";
import IconBlog from "@/components/icon/Blog";

export const RESUME_DATA = {
  name: "황희태",
  initials: "Heetae Hwang",
  location: "대한민국 고양시",
  locationLink: "https://www.google.com/maps/place/goyang",
  about: "Frontend Developer",
  summary: (
    <>
      주니어 프론트엔드 개발자입니다. <br /> <br />
      문제를 끊임없이 고민하고 어떻게든 해결하는 것이 저의 장점이라고
      생각합니다.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/hwangheetae",
  personalWebsiteUrl: "https://www.tejaia.com",
  contact: {
    email: "tejaia98@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/hwangheetae",
        icon: IconGithub,
      },
      {
        name: "Velog",
        url: "https://velog.io/@tejaia/posts",
        icon: IconBlog,
      },
    ],
  },
  education: [
    {
      school: "전북대학교",
      degree: "IT정보공학 학사",
      start: "2018.03",
      end: "2024.08",
    },
  ],
  work: [
    {
      company: "빅트론텍",
      link: "https://www.victrontech.com/",
      badges: ["React", "TypeScript", "Node.js", "MariaDB"],
      title: "서버 개발 인턴",
      start: "2024.09",
      end: "2024.11",
      description: (
        <>
          디지털 트윈 통합 관제 시스템 개발 (풀스택)
          <ul className="list-inside list-disc">
            <li>
              MQTT 데이터 파싱 및 WebSocket을 이용한 실시간 데이터 전송 로직
              구현
            </li>
            <li>plotly.js를 활용한 2D/3D 실시간 데이터 차트 개발</li>
            <li>
              Redux, Context API, Cutom Hook을 활용한 WebSocket 및 서버 데이터
              관리 리팩토링
            </li>
            <li>실시간 알림 관리 및 검색/조회 기능 구현 </li>
            <li>임계치 초과 시 실시간 알림 기능 구현 </li>
            <li>
              JWT 인증을 활용하여 사용자 로그인 구현 및 대시보드 접근 제어
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: ["React", "TypeScript", "Redux", "Zustand", "React Query", "Node.js"],
  projects: [
    {
      title: "깊은산골짜기",
      techStack: ["React", "TypeScript", "Zustand", "React Query", "AWS"],
      description:
        "계곡의 위치, 정보, 검색, 리뷰를작성할 수 있는 커뮤니티 서비스",
      link: {
        label: "깊은산골짜기 데모영상",
        href: "https://www.youtube.com/watch?v=ytGhuJbyHyY",
      },
    },
    {
      title: "tejaia.com",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      description: "개인 블로그",
      link: {
        label: "tejaia.com",
        href: "https://www.tejaia.com/",
      },
    },
  ],
} as const;
