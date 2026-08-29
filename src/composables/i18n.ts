import { currentLang, currentTheme, toggleLanguage, toggleTheme } from "../composables/useAppState";
export { currentLang, currentTheme, toggleLanguage, toggleTheme };

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact",
    },
    hero: {
      badge: "Available for Freelance",
      hi: "Hi, I'm",
      subtitle: "Building Modern\nDigital Experiences.",
      desc: "I build modern, fast and beautiful web experiences using Vue.js, Laravel, Next.js and modern frontend technologies.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      availableForWork: "Available for Work",
      scroll: "Scroll",
    },
    about: {
      tag: "ABOUT",
      title: "Know Me Better",
      desc: "Passionate Full Stack Developer from Bogor, Indonesia. I enjoy creating modern digital experiences with Vue, Laravel, Next.js, and the latest web technologies.",
      cards: [
        {
          title: "About Me",
          lines: [
            "I love designing and developing beautiful websites. My focus is creating websites that are fast, responsive, and provide a great user experience.",
          ],
        },
        {
          title: "Location",
          lines: ["Bogor, Indonesia", "Open for Remote Work & Freelance Projects."],
        },
        {
          title: "Education",
          lines: ["SMK Pesat", "Software Engineering", "2023 - 2026"],
        },
        {
          title: "Currently",
          lines: [
            "Building modern websites with Vue.js, Laravel, and Next.js.",
            "Always learning something new.",
          ],
        },
      ],
    },
    projects: {
      tag: "My Projects",
      title: "Selected Works",
      desc: "A collection of websites and applications I've built using Laravel, Vue.js, Next.js and modern frontend technologies.",
      liveWebsite: "Live Website",
      viewPost: "View Post",
      items: {
        pilar: {
          title: "PILAR System",
          description: "Laravel-based web application designed for front desk data calculation.",
        },
        fortuna: {
          title: "Fortuna Website",
          description: "Laravel-based electrical service website featuring a booking system and an admin dashboard.",
        },
        library: {
          title: "Library",
          description: "Laravel-based library information website.",
        },
        travel: {
          title: "Travel",
          description: "Laravel-based travel website featuring tour package booking and an admin dashboard.",
        },
        hotel: {
          title: "Hotel",
          description: "A modern hotel booking website featuring a Laravel-based room reservation system.",
        },
      },
    },
    certificates: {
      tag: "My Certificates",
      title: "Professional Certifications",
      desc: "Certifications and competency assessments that demonstrate my expertise in web development and software engineering.",
      viewCertificate: "View Certificate",
      items: {
        bnsp: {
          title: "BNSP Junior Web Developer",
          desc: "Successfully completed the professional competency assessment and earned this certification, validating my skills in web development.",
        },
        mobile: {
          title: "Building a Full-Stack Mobile App",
          desc: "Successfully completed the professional competency assessment and earned this certification, validating my skills in mobile app development.",
        },
        library: {
          title: "Building a Library Management Website",
          desc: "Successfully completed the professional competency assessment and earned this certification, validating my skills in web development.",
        },
        hotel: {
          title: "Developing a Web-Based Hotel Booking Application",
          desc: "Successfully completed the professional competency assessment and earned this certification, validating my skills in web development.",
        },
      },
    },
    contact: {
      tag: "Contact",
      title: "Let's Work Together",
      desc: "I'm always open to discussing new opportunities, freelance projects, collaborations, or simply connecting.",
      getInTouch: "Get In Touch",
      getInTouchDesc: "Feel free to contact me if you have a project, business inquiry, internship opportunity, or just want to say hello.",
      letsTalk: "Let's Talk",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      certificates: "Sertifikat",
      contact: "Kontak",
    },
    hero: {
      badge: "Tersedia untuk Freelance",
      hi: "Halo, Saya",
      subtitle: "Membangun Pengalaman\nDigital Modern.",
      desc: "Saya membangun pengalaman web yang modern, cepat, dan indah menggunakan Vue.js, Laravel, Next.js, serta teknologi frontend modern.",
      viewProjects: "Lihat Proyek",
      contactMe: "Hubungi Saya",
      availableForWork: "Siap untuk Bekerja",
      scroll: "Gulir",
    },
    about: {
      tag: "TENTANG",
      title: "Kenali Saya Lebih Dekat",
      desc: "Full Stack Developer yang berdedikasi dari Bogor, Indonesia. Saya senang menciptakan pengalaman digital modern dengan Vue, Laravel, Next.js, dan teknologi web terkini.",
      cards: [
        {
          title: "Tentang Saya",
          lines: [
            "Saya suka merancang dan mengembangkan situs web yang indah. Fokus saya adalah membuat situs web yang cepat, responsif, dan memberikan pengalaman pengguna yang luar biasa.",
          ],
        },
        {
          title: "Lokasi",
          lines: ["Bogor, Indonesia", "Terbuka untuk Kerja Remote & Proyek Freelance."],
        },
        {
          title: "Pendidikan",
          lines: ["SMK Pesat", "Rekayasa Perangkat Lunak", "2023 - 2026"],
        },
        {
          title: "Saat Ini",
          lines: [
            "Membangun situs web modern dengan Vue.js, Laravel, dan Next.js.",
            "Selalu mempelajari hal-hal baru.",
          ],
        },
      ],
    },
    projects: {
      tag: "Proyek Saya",
      title: "Karya Terpilih",
      desc: "Kumpulan situs web dan aplikasi yang telah saya bangun menggunakan Laravel, Vue.js, Next.js, dan teknologi frontend modern.",
      liveWebsite: "Situs Web",
      viewPost: "Lihat Postingan",
      items: {
        pilar: {
          title: "PILAR System",
          description: "Aplikasi web berbasis Laravel yang dirancang untuk perhitungan data frontdesk.",
        },
        fortuna: {
          title: "Fortuna Website",
          description: "Situs web layanan kelistrikan berbasis Laravel dengan sistem pemesanan dan dashboard admin.",
        },
        library: {
          title: "Library",
          description: "Situs web informasi perpustakaan berbasis Laravel.",
        },
        travel: {
          title: "Travel",
          description: "Situs web travel berbasis Laravel dengan fitur pemesanan paket tur dan dashboard admin.",
        },
        hotel: {
          title: "Hotel",
          description: "Situs web pemesanan hotel modern yang memiliki sistem reservasi kamar berbasis Laravel.",
        },
      },
    },
    certificates: {
      tag: "Sertifikat Saya",
      title: "Sertifikasi Profesional",
      desc: "Sertifikasi dan uji kompetensi yang membuktikan keahlian saya dalam pengembangan web dan rekayasa perangkat lunak.",
      viewCertificate: "Lihat Sertifikat",
      items: {
        bnsp: {
          title: "BNSP Junior Web Developer",
          desc: "Berhasil menyelesaikan uji kompetensi profesional dan memperoleh sertifikasi ini, memvalidasi keahlian saya dalam pengembangan web.",
        },
        mobile: {
          title: "Building a Full-Stack Mobile App",
          desc: "Berhasil menyelesaikan uji kompetensi profesional dan memperoleh sertifikasi ini, memvalidasi keahlian saya dalam pengembangan aplikasi mobile.",
        },
        library: {
          title: "Building a Library Management Website",
          desc: "Berhasil menyelesaikan uji kompetensi profesional dan memperoleh sertifikasi ini, memvalidasi keahlian saya dalam pengembangan web.",
        },
        hotel: {
          title: "Developing a Web-Based Hotel Booking Application",
          desc: "Berhasil menyelesaikan uji kompetensi profesional dan memperoleh sertifikasi ini, memvalidasi keahlian saya dalam pengembangan web.",
        },
      },
    },
    contact: {
      tag: "Kontak",
      title: "Mari Bekerja Sama",
      desc: "Saya selalu terbuka untuk mendiskusikan peluang baru, proyek freelance, kolaborasi, atau sekadar terhubung.",
      getInTouch: "Hubungi Saya",
      getInTouchDesc: "Jangan ragu untuk menghubungi saya jika Anda memiliki proyek, pertanyaan bisnis, peluang magang, atau hanya ingin menyapa.",
      letsTalk: "Mari Bicara",
    },
  },
};
