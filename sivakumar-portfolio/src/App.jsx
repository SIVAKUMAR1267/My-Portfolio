import React, { useState, useEffect } from 'react';
import './App.css';

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={isVisible ? 'header-visible' : 'header-hidden'}>
      <div className="container">
        <nav>
          <div className="logo">My Portfolio</div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            
            {/* Desktop Theme Toggle */}
            <button onClick={toggleTheme} className="theme-toggle desktop-toggle" aria-label="Toggle Theme">
              {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle + Hamburger */}
          <div className="mobile-actions">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
            </button>
            <div className="hamburger" onClick={toggleMenu}>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
          </div>
        </nav>
      </div>
      
      <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </header>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="container hero-content">
      {/* Centered Hero Text - No Image */}
      <div className="hero-text text-center">
        <span className="greeting">Hello, I'm</span>
        <h1>Sivakumar R</h1>
        <h2>Full-Stack Web Developer</h2>
        <p className="hero-desc">
          I am a Computer Science Engineering student graduating in May 2026 from St. Joseph’s College of Engineering. 
          Specializing in the MERN stack, I build scalable, secure, and user-centric web applications with a strong focus on automated CI/CD workflows and API integrations.
        </p>
        <div className="contact-info justify-center">
          <a href="mailto:rsivakumar1205o@gmail.com"><i className="fas fa-envelope"></i> rsivakumar1205o@gmail.com</a>
          <a href="https://github.com/SIVAKUMAR1267" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
        </div>
        <div className="hero-buttons justify-center">
          <a href="#projects" className="btn">View My Work <i className="fas fa-arrow-right" style={{marginLeft: '8px'}}></i></a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-bio">
          <p>
            As a dedicated web developer, I am passionate about bridging the gap between complex backend architecture and seamless user experiences. My journey in software engineering is driven by continuous learning and hands-on building.
          </p>
          <p>
            Beyond my university curriculum, I have rigorously expanded my expertise by completing the comprehensive <strong>Full-Stack Open course from the University of Helsinki</strong>. This equipped me with production-ready skills in React, Redux, Node.js, and Docker.
          </p>
          <p>
            I thrive in environments that challenge me to solve real-world problems—whether that is engineering zero-knowledge privacy architectures for my final year project, or handling complex API workflows like integrating Amazon order flows for e-commerce platforms.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <i className="fas fa-graduation-cap"></i>
            <div>
              <h4>Education</h4>
              <span>B.E. Computer Science, St. Joseph’s College of Engineering (May 2026)</span>
            </div>
          </div>
          <div className="stat-card">
            <i className="fas fa-certificate"></i>
            <div>
              <h4>Certifications</h4>
              <span>Full-Stack Open - University of Helsinki</span>
            </div>
          </div>
          <div className="stat-card">
            <i className="fas fa-laptop-code"></i>
            <div>
              <h4>Core Focus</h4>
              <span>MERN Stack, CI/CD, Cloud Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skillCategories = [
    { 
      title: 'Frontend Development', 
      icon: 'fa-laptop-code',
      skills: ['JavaScript', 'TypeScript', 'React', 'Redux', 'HTML5', 'CSS3', 'Vite', 'Next.js'] 
    },
    { 
      title: 'Backend Development', 
      icon: 'fa-server',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GraphQL', 'Python'] 
    },
    { 
      title: 'DevOps & Tools', 
      icon: 'fa-tools',
      skills: ['Git', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Postman'] 
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <i className={`fas ${category.icon}`}></i>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: "Full-Stack Neo-Brutalist E-commerce",
      subtitle: "Dynamic Retail & Inventory System",
      desc: "Developed a high-performance retail platform implementing a server-side caching layer for optimized API delivery.",
      tech: ["Next.js", "Node.js", "MongoDB", "Express", "REST API"],
      codeLink: "https://github.com/SIVAKUMAR1267/e-commerce",
      icon: "fa-cart-shopping"
    },
    {
      title: "Privacy-Preserving Cloud File Storage",
      subtitle: "Final Year Academic Project",
      desc: "Engineered a zero-knowledge security architecture merging AES-256 for payload encryption and RSA-2048 for session keys. Features robust database integration to guarantee end-to-end data integrity.",
      tech: ["React", "Node.js", "MongoDB", "Cryptography"],
      codeLink: "https://github.com/SIVAKUMAR1267/Sanctuary",
      icon: "fa-shield-halved"
    },
    {
      title: "Pokedex Automation & CI/CD",
      subtitle: "DevOps & Testing Pipeline",
      desc: "Constructed a fully automated CI/CD pipeline using GitHub Actions. Orchestrated automated linting, unit tests with Jest, and end-to-end testing for safe deployments on every Pull Request.",
      tech: ["React", "Jest", "GitHub Actions", "E2E Testing"],
      codeLink: "https://github.com/SIVAKUMAR1267/full-stack-open-pokedex",
      icon: "fa-server"
    },
    {
      title: "Full-Stack Blog Platform",
      subtitle: "University of Helsinki Coursework",
      desc: "A comprehensive blog application featuring JWT authentication, state management with Redux, and full CRUD operations. Containerized environment using Docker.",
      tech: ["React", "Redux", "Node.js", "Docker"],
      codeLink: "https://github.com/SIVAKUMAR1267/fullstackopen/tree/main/part5/bloglist",
      icon: "fa-blog"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <div className="project-icon">
                  <i className={`fas ${project.icon}`}></i>
                </div>
                <div className="project-links">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" title="View Source">
                    <i className="fab fa-github"></i>
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <span className="project-subtitle">{project.subtitle}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="skill-tags">
                  {project.tech.map((tag, i) => <span className="skill-tag" key={i}>{tag}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <h2 className="section-title justify-center">Get In Touch</h2>
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!</p>
        <div style={{ marginTop: '30px' }}>
          <a href="mailto:rsivakumar1205o@gmail.com" className="btn"><i className="fas fa-envelope"></i> Send Email</a>
        </div>
        <div className="contact-info justify-center" style={{ marginTop: '40px' }}>
          <a href="https://www.linkedin.com/in/sivakumar-r-webdev/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a href="https://github.com/SIVAKUMAR1267" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/SIVAKUMAR1267" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/sivakumar-r-webdev/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
        <p>© 2026 Sivakumar R. All rights reserved.</p>
        <p>Chennai, India</p>
      </div>
    </div>
  </footer>
);

function App() {
  // Theme Management Logic
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, fallback to system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Apply theme to HTML root element whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;