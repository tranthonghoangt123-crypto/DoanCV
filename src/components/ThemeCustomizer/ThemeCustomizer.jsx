import React, { useState, useEffect } from 'react';
import { FaCog, FaTimes } from 'react-icons/fa';
import './ThemeCustomizer.css';

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Danh sách các theme màu sắc cài đặt sẵn
  const colorThemes = [
    { id: 'default', name: 'Xanh Tím', primary: '#667eea', secondary: '#764ba2' },
    { id: 'sky', name: 'Xanh Dương', primary: '#0ea5e9', secondary: '#4f46e5' },
    { id: 'emerald', name: 'Ngọc Lục Bảo', primary: '#10b981', secondary: '#059669' },
    { id: 'rose', name: 'Hồng Đỏ', primary: '#f43f5e', secondary: '#e11d48' },
    { id: 'amber', name: 'Vàng Cam', primary: '#f59e0b', secondary: '#d97706' },
    { id: 'purple', name: 'Tím Đậm', primary: '#8b5cf6', secondary: '#6d28d9' }
  ];

  // Helper chuyển đổi Hex sang RGB để làm hiệu ứng trong suốt (rgba)
  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
  };

  // Khôi phục màu từ Local Storage khi load lại trang
  useEffect(() => {
    const savedPrimary = localStorage.getItem('theme-primary');
    const savedSecondary = localStorage.getItem('theme-secondary');
    
    if (savedPrimary && savedSecondary) {
      document.documentElement.style.setProperty('--primary-color', savedPrimary);
      document.documentElement.style.setProperty('--secondary-color', savedSecondary);
      document.documentElement.style.setProperty('--primary-rgb', hexToRgb(savedPrimary));
      document.documentElement.style.setProperty('--secondary-rgb', hexToRgb(savedSecondary));
    }
  }, []);

  // Hàm xử lý đổi màu
  const handleThemeChange = (primary, secondary) => {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
    document.documentElement.style.setProperty('--primary-rgb', hexToRgb(primary));
    document.documentElement.style.setProperty('--secondary-rgb', hexToRgb(secondary));
    
    // Lưu lại cấu hình
    localStorage.setItem('theme-primary', primary);
    localStorage.setItem('theme-secondary', secondary);
  };

  return (
    <div className={`theme-customizer ${isOpen ? 'open' : ''}`}>
      <div className="customizer-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FaCog className="cog-icon" />
      </div>
      
      <div className="customizer-panel">
        <div className="customizer-header">
          <h4>Tùy Chỉnh Màu Sắc</h4>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>
        
        <div className="theme-options">
          {colorThemes.map((theme) => (
            <div 
              key={theme.id} 
              className="color-swatch"
              style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
              onClick={() => handleThemeChange(theme.primary, theme.secondary)}
              title={theme.name}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomizer;