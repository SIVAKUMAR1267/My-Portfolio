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
        <h2>Frontend Developer</h2>
        <p className="hero-desc">
          A dedicated Software Engineering graduate from St. Joseph’s College of Engineering. 
          I specialize in building high-performance, user-centric web applications with a 
          focus on React, TypeScript, and modern UI frameworks. By bridging complex 
          backend architecture with seamless frontend interfaces, I create scalable and 
          accessible digital experiences.
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
            As a detail-oriented Frontend Developer, I am passionate about bridging the gap between complex backend architecture and seamless, high-performance user experiences. My engineering approach is driven by the belief that robust functionality should be matched by intuitive and accessible design.          </p>
          <p>
            Beyond my university curriculum at St. Joseph's College of Engineering, I have rigorously expanded my expertise through the Full-Stack Open course from the University of Helsinki. This training solidified my production-ready skills in React, Redux, and modern CSS frameworks, allowing me to build responsive, scalable interfaces that do not compromise on speed or reliability.
          </p>
          <p>
            I thrive in environments that challenge me to solve complex front-end puzzles—whether that is engineering intuitive UI layers for advanced zero-knowledge privacy architectures, or optimizing state management and component rendering to handle complex API workflows. I am eager to leverage my proficiency in React, TypeScript, and Material UI to build forward-thinking digital products that prioritize the end-user.
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