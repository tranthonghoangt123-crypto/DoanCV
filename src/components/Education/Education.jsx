import React from 'react';
import './Education.css';
// Import trophy/award icon từ Material Design Outline
import { MdOutlineEmojiEvents } from 'react-icons/md';

const Education = () => {
  const educationData = [
    {
      id: 1,
      school: 'Cao đẳng CNTT TP.HCM',
      degree: 'Sinh viên',
      field: 'Ngành: Thiết kế trang Web',
      year: '2024 - 2026',
      gpa: 'GPA: 3.4',
      details: [
        'Chuyên ngành: Công nghệ thông tin',
        'Điều phối làm việc nhóm trong các dự án học tập',
        'Làm việc với giảng viên, khoa về kế hoạch học tập'
      ]
    },
    {
      id: 2,
      school: 'Trường THPT Hậu Thạnh Đông',
      degree: 'Bằng Tốt Nghiệp THPT',
      field: 'Học sinh phổ thông',
      year: '2021 - 2024',
      gpa: 'Hoàn thành tốt',
      details: [
        'Hoàn thành chương trình giáo dục phổ thông',
        'Phát triển nền tảng tư duy logic'
      ]
    }
  ];

  const certificatesData = [
    { 
      name: 'Giải Nhất ITC let\' sgo', 
      issuer: 'Cấp Trường', 
      year: '2024 - 2026' 
    }
  ];

  return (
    <section className="education-section">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Học Vấn & Thành Tích</h2>
          <p className="section-subtitle">Hành trình học tập và phát triển của tôi</p>
        </div>

        {/* Education Timeline */}
        <div className="education-wrapper">
          <h3 className="subsection-title">Học Tập</h3>
          <div className="education-timeline">
            {educationData.map(edu => (
              <div key={edu.id} className="education-item">
                <div className="education-dot"></div>
                <div className="education-content">
                  <h4>{edu.school}</h4>
                  <p className="degree">{edu.degree} - {edu.field}</p>
                  <p className="year">{edu.year}</p>
                  <span className="gpa">{edu.gpa}</span>
                  <ul>
                    {edu.details.map((detail, idx) => (
                      <li key={idx}>✓ {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="certificates-wrapper">
          <h3 className="subsection-title">Thành Tích Nổi Bật</h3>
          <div className="certificates-grid">
            {certificatesData.map((cert, idx) => (
              <div key={idx} className="certificate-card">
                {/* Thay thế placeholder 🏆 emoji bằng professional award icon */}
                <div className="cert-icon"><MdOutlineEmojiEvents /></div>
                <h5>{cert.name}</h5>
                <p className="issuer">{cert.issuer}</p>
                <p className="year">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;