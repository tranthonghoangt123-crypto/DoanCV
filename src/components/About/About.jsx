import React from 'react';
import './About.css';
// Đổi FaTarget thành FaBullseye
import { FaHandshake, FaRocket, FaBullseye } from 'react-icons/fa';
import { MdLightbulbOutline } from 'react-icons/md';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">Về Tôi</h2>
          <p className="section-subtitle">Trần Hoàng Thông - Thực tập sinh Thiết kế trang Web</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Giới thiệu bản thân</h3>
            <p>
              Xin chào, tôi là Trần Hoàng Thông, hiện đang là sinh viên ngành Thiết kế trang Web tại Trường Cao đẳng CNTT TP.HCM (niên khóa 2024 - 2026) với điểm GPA 3.4.
            </p>
            <p>
              Mục tiêu nghề nghiệp của tôi là ứng tuyển vị trí UX/UI Designer tại Bách Hóa Xanh, tập trung cải tiến trải nghiệm người dùng trên App & Website. 
            </p>
            <p>
              Tôi hướng đến việc khai thác insight hành vi khách hàng, phối hợp cùng IT/Product để triển khai sản phẩm thực tế, đồng thời tối ưu usability, conversion và NPS thông qua testing và phân tích dữ liệu, với định hướng phát triển lâu dài trong lĩnh vực Product/UX Design.
            </p>
          </div>

          <div className="about-features">
            {/* Sử dụng FaBullseye thay cho FaTarget */}
            <div className="feature-item">
              <div className="feature-icon"><FaBullseye /></div>
              <h4>Tập Trung UX/UI</h4>
              <p>Thành thạo Figma, Wordpress; xây dựng wireframe, prototype và user flow.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><FaRocket /></div>
              <h4>Nhanh Chóng & Tối Ưu</h4>
              <p>Luôn nỗ lực tối ưu usability và hiệu suất sản phẩm.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><MdLightbulbOutline /></div>
              <h4>Sáng Tạo & Đổi Mới</h4>
              <p>Khai thác insight khách hàng để đưa ra giải pháp thiết kế sáng tạo.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><FaHandshake /></div>
              <h4>Hợp Tác Đa Phối</h4>
              <p>Mong muốn phối hợp cùng IT/Product để triển khai sản phẩm thực tế.</p>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <h3>2+</h3>
            <p>Dự Án Nổi Bật</p>
          </div>
          <div className="stat-box">
            <h3>3.4</h3>
            <p>Điểm GPA</p>
          </div>
          <div className="stat-box">
            <h3>8+</h3>
            <p>Kỹ Năng Chuyên Môn</p>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <p>Đam mê UX/UI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;