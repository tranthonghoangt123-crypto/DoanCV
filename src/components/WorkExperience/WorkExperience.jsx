import React from 'react';
import './WorkExperience.css';
import { FaCode, FaFileCode, FaCalendarAlt, FaCheckCircle, FaGithub, FaProjectDiagram } from 'react-icons/fa';
import { BiGitCommit } from 'react-icons/bi';

const WorkExperience = () => {
  const experienceData = [
    {
      id: 1,
      company: 'Đồ án môn học',
      position: 'Hệ thống Quản lý Khách sạn',
      period: '2026',
      type: 'Laravel & MySQL',
      typeIcon: <FaFileCode />, 
      description: 'Xây dựng hệ thống quản lý nghiệp vụ khách sạn hoàn chỉnh với backend mạnh mẽ và bảo mật.',
      responsibilities: [
        'Thiết kế kiến trúc cơ sở dữ liệu (Migrations, Seeders).',
        'Xây dựng logic nghiệp vụ backend xử lý đặt phòng, trả phòng bằng Laravel.',
        'Phân quyền người dùng chi tiết theo vai trò (Quản lý, Lễ tân).',
        'Tối ưu hóa các câu truy vấn cơ sở dữ liệu MySQL.'
      ]
    },
    {
      id: 2,
      company: 'Dự án cá nhân',
      position: 'Website Xem Phim Trực Tuyến',
      period: '2025 - 2026',
      type: 'ReactJS',
      typeIcon: <FaCode />,
      description: 'Phát triển giao diện ứng dụng web xem phim với trải nghiệm người dùng mượt mà và trực quan.',
      responsibilities: [
        'Xây dựng giao diện người dùng (UI) hiện đại bằng ReactJS.',
        'Kết nối và fetch dữ liệu từ RESTful API để hiển thị danh sách và chi tiết phim.',
        'Tích hợp tính năng phát video và xem trailer phim trực tiếp.',
        'Đảm bảo giao diện hiển thị tốt (Responsive) trên cả điện thoại và máy tính.'
      ]
    },
    {
      id: 3,
      company: 'Đồ án thực hành',
      position: 'Ứng dụng Nhắn tin Real-time',
      period: '2025',
      type: 'React & Firebase',
      typeIcon: <FaCode />,
      description: 'Xây dựng bảng tin nhắn (Message Board) hoạt động theo thời gian thực.',
      responsibilities: [
        'Thiết lập và tích hợp cấu hình Firebase vào dự án React.',
        'Sử dụng Firebase Firestore làm cơ sở dữ liệu thời gian thực (Real-time DB).',
        'Xử lý bảo mật và phân quyền truy cập dữ liệu với Firestore Rules.',
        'Quản lý state ứng dụng để cập nhật luồng tin nhắn ngay lập tức.'
      ]
    }
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Đồ Án & Dự Án</h2>
          <p className="section-subtitle">Những dự án thực tế tôi đã thực hiện trong quá trình học tập</p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="experience-item">
              {/* Đã thay đổi icon tại đây */}
              <div className="timeline-icon"><FaProjectDiagram /></div>
              <div className="experience-content">
                <div className="exp-header">
                  <h3 className="position">{exp.position}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                
                <div className="exp-meta">
                  <span className="period"><FaCalendarAlt className="meta-icon" /> {exp.period}</span>
                  <span className="type"><span className="meta-icon">{exp.typeIcon}</span> {exp.type}</span>
                </div>

                <p className="description">{exp.description}</p>

                <div className="responsibilities">
                  <h4>Chi tiết công việc:</h4>
                  <ul>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>
                        <FaCheckCircle className="check-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-stats">
          <div className="stat-card">
            <div className="stat-icon"><FaGithub /></div>
            <div className="stat-value">5+</div>
            <div className="stat-label">Dự Án Hoàn Thành</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><FaCode /></div>
            <div className="stat-value">4+</div>
            <div className="stat-label">Công Nghệ Nắm Vững</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><BiGitCommit /></div>
            <div className="stat-value">100+</div>
            <div className="stat-label">Commits</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;