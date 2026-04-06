import React from 'react';
import './TechStack.css';
import { MdOutlineCode, MdOutlineDesignServices, MdOutlineEngineering } from 'react-icons/md';

const TechStack = () => {
  const technologies = [
    {
      category: 'Thiết Kế UI/UX',
      // Thay icon bằng MdOutlineDesignServices
      icon: <MdOutlineDesignServices />,
      tools: [
        { name: 'Figma', version: 'Thiết kế UI & Prototype', level: 90 },
        { name: 'Wordpress', version: 'Thiết kế Website CMS', level: 85 },
        { name: 'User Research', version: 'Nghiên cứu hành vi', level: 80 },
        { name: 'Usability Testing', version: 'Đánh giá & Tối ưu', level: 80 }
      ]
    },
    {
      category: 'Front-end',
      // Thay icon bằng MdOutlineCode
      icon: <MdOutlineCode />,
      tools: [
        { name: 'HTML5 / CSS3', version: 'Thành thạo', level: 90 },
        { name: 'JavaScript', version: 'ES6+', level: 85 },
        { name: 'Bootstrap 5', version: 'Thành thạo', level: 85 },
        { name: 'ReactJS', version: 'Vận dụng tốt', level: 80 },
        { name: 'Angular', version: 'Kiến thức cơ bản', level: 65 }
      ]
    },
    {
      category: 'Kỹ Năng Mềm & Công Cụ',
      // Thay icon bằng MdOutlineEngineering
      icon: <MdOutlineEngineering />,
      tools: [
        { name: 'Làm việc nhóm', version: 'Điều phối & Hợp tác', level: 95 },
        { name: 'Giải quyết vấn đề', version: 'Tư duy logic', level: 90 },
        { name: 'Git / GitHub', version: 'Quản lý mã nguồn', level: 85 },
        { name: 'VS Code', version: 'Công cụ lập trình', level: 90 }
      ]
    }
  ];

  return (
    <section className="techstack-section">
      <div className="techstack-container">
        <div className="section-header">
          <h2 className="section-title">Kỹ Năng & Công Nghệ</h2>
          <p className="section-subtitle">Nền tảng chuyên môn và các kỹ năng mềm tôi đang sở hữu</p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, idx) => (
            <div key={idx} className="tech-category">
              <div className="tech-header">
                <span className="tech-icon">{tech.icon}</span>
                <h3>{tech.category}</h3>
              </div>
              <div className="tools-list">
                {tech.tools.map((tool, i) => (
                  <div key={i} className="tool-item">
                    <div className="tool-name">{tool.name}</div>
                    <div className="tool-version">{tool.version}</div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${tool.level}%` }}
                      ></div>
                    </div>
                    <div className="tool-level">{tool.level}%</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-features">
          <h3>Kinh Nghiệm & Điểm Nổi Bật</h3>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-number">5+</div>
              <div className="feature-text">Dự Án<br/>Thực Tế</div>
            </div>
            <div className="feature">
              <div className="feature-number">8+</div>
              <div className="feature-text">Công Nghệ<br/>Chuyên Môn</div>
            </div>
            <div className="feature">
              <div className="feature-number">3.4</div>
              <div className="feature-text">Điểm<br/>GPA Tích Lũy</div>
            </div>
            <div className="feature">
              <div className="feature-number">100%</div>
              <div className="feature-text">Đam Mê<br/>Phát Triển Sản Phẩm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;