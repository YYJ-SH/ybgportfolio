export const portfolioData = {
  profile: {
    name: "이수아",
    imageUrl: "/images/profile.jpg",
    tagline: "코드로 문제를 해결하는 것을 즐기는 보안 학도",
    introduction: [
      "융합보안공학 동아리 활동을 통해 보안의 기초부터 최신 기술까지 배우며 성장하고 있습니다.",
      "시스템 보안 분야에 큰 매력을 느꼈고, 배운 지식을 적용하여 CTF 문제를 출제하는 경험을 통해 이론을 실체화하는 즐거움을 알게 되었습니다."
    ],
    contact: {
      email: "sooa.lee@example.com",
      github: "https://github.com/sooa-lee",
      linkedin: "https://linkedin.com/in/sooa-lee",
      blog: "https://sooa-sec.tistory.com"
    }
  },

  projects: [
    {
      id: "project-ctf-2025",
      title: "융합보안공학 8기 CTF 문제 출제",
      imageUrl: "/images/project_ctf.png",
      overview: "동아리 기술 세미나에서 학습한 지식을 바탕으로 직접 취약점을 설계하고, 다른 부원들이 출제한 다양한 분야의 문제를 해결하며 공격과 방어의 원리를 종합적으로 학습했습니다.",
      contribution: [
        "'Integer Overflow' 취약점을 응용한 시스템 해킹 문제 출제",
        "다른 팀원이 출제한 웹, 암호학 분야 문제 해결 및 Write-up 작성"
      ],
      techStack: ["C", "Python", "GDB", "CTFd"],
      links: [
        { name: "GitHub", url: "https://github.com/sooa-lee/mcp-ctf-pwn" },
        { name: "Docs", url: "https://sooa-sec.tistory.com/10" },
        { name: "Gallery", url: "/images/gallery_ctf_presentation.jpg" }
      ]
    }
  ],
  
  learningActivities: [
    {
      id: "learn-fuzzing",
      title: "시스템 해킹 및 퍼징 (AFL)",
      imageUrl: "/images/learn_fuzzing.png",
      description: "AFL을 활용한 퍼징 기법을 배우고, Damn Vulnerable C Program의 다양한 메모리 취약점을 분석 및 탐지하는 실습을 진행했습니다.",
      application: "이 경험을 바탕으로 CTF에서 'Integer Overflow' 문제를 직접 출제했습니다.",
      fileUrl: "/files/융보공8기7주차.pdf"
    },
    {
      id: "learn-llm",
      title: "LLM 보안과 프롬프트 인젝션",
      imageUrl: "/images/learn_llm.png",
      description: "PortSwigger 실습을 통해 최신 AI 기술의 보안 위협인 Prompt Injection 공격을 직접 수행하고 방어의 필요성을 체감했습니다.",
      application: "창의융합경진대회에서 LLM 보안 교육 서비스 아이디어의 기반이 되었습니다.",
      fileUrl: "/files/융보공8기5주차.pdf"
    },
    {
      id: "learn-network",
      title: "네트워크 패킷 분석 (Wireshark)",
      imageUrl: "/images/learn_network.png",
      description: "Wireshark를 활용해 TCP 3-Way Handshake, ARP 등 주요 프로토콜의 동작 원리를 패킷 레벨에서 분석했습니다.",
      application: "네트워크 통신의 기본을 이해하는 데 큰 도움이 되었습니다.",
      fileUrl: "/files/TalkFile_융보공 8주차_ 와이어샤크.pdf.pdf"
    }
  ],
  
  awards: [
    {
      id: "award-mcp-ctf-2025",
      title: "2025 제 2회 융보공 MCP CTF 장려상",
      organizer: "융합보안공학과",
      date: "2025. 06.",
      description: "시스템 해킹 분야 문제 출제 및 종합 점수를 바탕으로 장려상을 수상했습니다.",
      proofLink: "/images/award_mcp_ctf.jpg"
    }
  ],

  certificates: [
    {
      id: "cert-bob-2025",
      name: "Best of the Best (BoB) 13기 수료증 (취약점 분석 트랙)",
      organizer: "한국정보기술연구원(KITRI)",
      date: "2025. 03.",
      proofLink: "/images/cert_bob.jpg"
    }
  ],

  externalActivities: [
    {
      id: "activity-secon-2025",
      name: "제23회 세계보안엑스포 (SECON & eGISEC)",
      imageUrl: "/images/activity_secon_expo.jpg",
      role: "참가자 (Attendee)",
      date: "2025. 03. 21.",
      description: "국내외 주요 보안 기업들의 부스를 방문하여 최신 AI 보안, 클라우드 보안 기술 동향을 파악하고, 다양한 보안 솔루션의 동작 원리를 이해하는 기회를 가졌습니다."
    }
  ],
  
  skills: {
    "언어": [
      { name: "Python", description: "CTF Exploit 코드, 자동화 스크립트 작성" },
      { name: "C", description: "시스템 취약점 분석 및 구현" },
      { name: "JavaScript", description: "Next.js를 이용한 웹 개발" }
    ],
    "보안 도구": [
      { name: "AFL", description: "퍼징을 통한 취약점 자동 탐색" },
      { name: "Wireshark", description: "패킷 캡처 및 프로토콜 분석" },
      { name: "Burp Suite", description: "웹 취약점 분석" }
    ],
    "기타": [
      { name: "Docker", description: "컨테이너 기반 환경 이해" },
      { name: "Git & GitHub", description: "버전 관리 및 협업" },
      { name: "Linux", description: "CLI 환경 서버 관리" }
    ]
  },
  
  blogPosts: [
    {
      id: "post-1",
      title: "CTF 'Integer Overflow' 문제 풀이 (Write-up)",
      imageUrl: "/images/post_integer_overflow.png",
      description: "제가 직접 출제한 문제의 기획 의도와 상세한 풀이 과정입니다.",
      url: "https://sooa-sec.tistory.com/10"
    }
  ]
};