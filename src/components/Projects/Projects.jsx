import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaGlobe, FaPrescriptionBottleAlt, FaShoppingCart, FaStar } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'Website Thương Mại Điện Tử',
      description: 'Thiết kế UX/UI cho ứng dụng mua sắm sản phẩm đa nền tảng (App & Website) bao gồm toàn bộ quy trình từ nghiên cứu đến Prototype.',
      technologies: ['Figma', 'User Research', 'Prototype', 'Wireframe'],
      category: 'ui-ux',
      // Dùng icon vector thay vì emoji
      image: <FaShoppingCart size={40} color="#6c757d" />,
      liveLink: 'https://www.figma.com/proto/k1bza2VaM9KtX2IYziKc8R/trangbanhangdientu?',
      githubLink: '#',
      features: ['Xây dựng persona, user flow', 'Thiết kế UI hoàn chỉnh', 'Usability testing & Cải tiến']
    },
    {
      id: 2,
      title: 'Website Mua Sắm Mỹ Phẩm',
      description: 'Đồ án học phần: Xây dựng ứng dụng mua sắm mỹ phẩm hoàn chỉnh từ khâu thiết kế trên Figma đến lập trình giao diện ReactJS.',
      technologies: ['ReactJS', 'Figma', 'HTML/CSS', 'JavaScript'],
      category: 'frontend',
      // Dùng icon vector thay vì emoji
      image: <FaPrescriptionBottleAlt size={40} color="#d63384" />,
      liveLink: '#',
      githubLink: '#',
      features: ['Chuyển đổi UI sang React', 'Tìm kiếm, lọc sản phẩm', 'Giỏ hàng & thanh toán giả lập']
    }
  ];

  const skillsData = {
    ui_ux: [
      { name: 'Figma', level: 90, icon: '📐' },
      { name: 'UI/UX Design', level: 85, icon: '🎨' },
      { name: 'Wireframing & Prototyping', level: 85, icon: '📱' },
      { name: 'User Research', level: 80, icon: '🔍' }
    ],
    frontend: [
      { name: 'HTML5 / CSS3', level: 90, icon: '📜' },
      { name: 'JavaScript', level: 85, icon: '⚡' },
      { name: 'Bootstrap 5', level: 85, icon: '🅱️' },
      { name: 'ReactJS', level: 80, icon: '⚛️' },
      { name: 'Angular', level: 65, icon: '🔴' }
    ],
    tools: [
      { name: 'Wordpress', level: 80, icon: '🌐' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'Git / GitHub', level: 80, icon: '🐙' },
      { name: 'Làm việc nhóm', level: 95, icon: '🤝' }
    ]
  };

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Dự Án Thực Tế</h2>
          <p className="section-subtitle">Các sản phẩm thiết kế và lập trình tôi đã thực hiện</p>
        </div>

        <div className="filter-tabs">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Tất Cả (02)
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'ui-ux' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ui-ux')}
          >
            UI/UX Design (01)
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('frontend')}
          >
            Frontend (01)
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">{project.image}</div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaStar className="feature-check" /> {feature}
                    </li>
                  ))}
                </ul>

                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <FaGlobe className="btn-icon" /> Xem Demo
                  </a>
                  {project.category === 'frontend' && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-secondary">
                      <FaGithub className="btn-icon mauchu" /><a className="mauchu">GitHub</a> 
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;