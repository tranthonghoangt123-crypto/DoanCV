import React, { useState } from 'react';
import './Sidebar.css';
import { 
  FaHome, FaUserAlt, FaBriefcase, FaCode, 
  FaBook, FaGraduationCap, FaStar, FaEnvelope,
  FaGithub, FaLinkedin, FaFacebook,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    if (window.innerWidth < 1200) setIsOpen(false);
  };

  const navItems = [
    { id: 1, label: 'Trang Chủ', href: '#home', icon: <FaHome /> },
    { id: 2, label: 'Giới Thiệu', href: '#about', icon: <FaUserAlt /> },
    { id: 3, label: 'Dự Án', href: '#projects', icon: <FaBriefcase /> },
    { id: 4, label: 'Kỹ Năng', href: '#skills', icon: <FaCode /> },
    { id: 5, label: 'Kinh Nghiệm', href: '#experience', icon: <FaBook /> },
    { id: 6, label: 'Học Vấn', href: '#education', icon: <FaGraduationCap /> },
    { id: 7, label: 'Phản Hồi', href: '#testimonial', icon: <FaStar /> },
    { id: 8, label: 'Liên Hệ', href: '#contact', icon: <FaEnvelope /> }
  ];

  return (
    <>
      <button 
        className={`hamburger-menu ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-inner">
          {/* PHẦN ĐẦU: PROFILE & CONTACT */}
          <div className="profile-card-mini">
            <div className="avatar-wrapper">
              <img src="src/Images/anhdaidien.jpg" alt="Profile" className="avatar-img" />
              <div className="online-badge"></div>
            </div>
            <h3 className="user-name">Trần Hoàng Thông</h3>
            <p className="user-role">UX/UI Designer • Front-end</p>

            {/* Liên hệ dời lên trên */}
            <div className="header-contact">
              <div className="c-info">
                <FaEnvelope /> <span>tranthonghoangt123@gmail.com</span>
              </div>
              <div className="c-info">
                <FaMapMarkerAlt /> <span>Bình Tân, TP. HCM</span>
              </div>
            </div>

            {/* Mạng xã hội dời lên trên */}
            <div className="header-social">
              <a href="https://github.com" className="s-icon" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com" className="s-icon" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://facebook.com" className="s-icon" target="_blank" rel="noreferrer"><FaFacebook /></a>
            </div>
          </div>

          <div className="sidebar-separator"></div>

          {/* PHẦN GIỮA: NAVIGATION */}
          <nav className="nav-container">
            <ul className="nav-menu">
              {navItems.map(item => (
                <li key={item.id} className="nav-item">
                  <a href={item.href} className="nav-link" onClick={handleNavClick}>
                    <span className="icon-box">{item.icon}</span>
                    <span className="label-text">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* PHẦN CUỐI: COPYRIGHT */}
          <div className="sidebar-footer-simple">
            <p className="copy-text">© 2026 Trần Hoàng Thông</p>
          </div>
        </div>
      </aside>

      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;