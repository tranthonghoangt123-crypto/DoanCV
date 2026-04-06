import React from 'react';
import './Home.css';
// Import thêm icon chuyên nghiệp
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="home-greet">Xin Chào </div>
          <h1 className="home-title">
            Tôi Là <span className="highlight">Trần Hoàng Thông</span>
          </h1>
          <p className="home-subtitle">UX/UI Designer • Front-end Developer</p>
          <p className="home-description">
            Tôi là sinh viên ngành Thiết kế trang Web tại Trường Cao đẳng CNTT TP.HCM. Tôi đam mê thiết kế UI/UX và phát triển Front-end với các công cụ như Figma, ReactJS, HTML5/CSS3. Mục tiêu của tôi là tạo ra những trải nghiệm người dùng tuyệt vời.
          </p>

          <div className="home-buttons">
            <button className="btn btn-primary">
              <FaDownload className="btn-icon" />
              Tải CV
            </button>
            <button className="btn btn-secondary">
              <FaEnvelope className="btn-icon mauchu" />
              <a href="" className="mauchu">
                 Liên Hệ
              </a>
            </button>
          </div>

          <div className="home-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Dự Án Nổi Bật</span>
            </div>
            <div className="stat">
              <span className="stat-number">3.4</span>
              <span className="stat-label">Điểm GPA</span>
            </div>
            <div className="stat">
              <span className="stat-number">8+</span>
              <span className="stat-label">Kỹ Năng Chính</span>
            </div>
          </div>
        </div>

        <div className="home-image">
          <div className="profile-img-wrapper">
            <div className="profile-img-glow"></div>
            <img
              src="src/Images/anhdaidien.jpg"
              alt="Profile"
              className="profile-main-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;