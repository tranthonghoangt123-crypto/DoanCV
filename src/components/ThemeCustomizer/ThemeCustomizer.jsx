import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeCustomizer.css';

const ThemeCustomizer = () => {
  const { theme, updateTheme, toggleDarkMode, resetTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('colors');

  const handleColorChange = (colorKey, value) => {
    updateTheme({
      [colorKey]: value
    });
  };

  const handleQuickColorScheme = (scheme) => {
    const schemes = {
      purple: {
        primaryColor: '#667eea',
        secondaryColor: '#764ba2',
        accentColor: '#ffd700'
      },
      ocean: {
        primaryColor: '#00d4ff',
        secondaryColor: '#0099cc',
        accentColor: '#ff6b6b'
      },
      sunset: {
        primaryColor: '#ff6b6b',
        secondaryColor: '#ff8e72',
        accentColor: '#ffd700'
      },
      forest: {
        primaryColor: '#27ae60',
        secondaryColor: '#16a085',
        accentColor: '#f39c12'
      },
      midnight: {
        primaryColor: '#2c3e50',
        secondaryColor: '#34495e',
        accentColor: '#e74c3c'
      },
      candy: {
        primaryColor: '#ff69b4',
        secondaryColor: '#ff1493',
        accentColor: '#00ff00'
      }
    };

    if (schemes[scheme]) {
      updateTheme(schemes[scheme]);
    }
  };

  return (
    <>
      <button
        className={`theme-toggle-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme customizer"
        title="Tùy chỉnh giao diện"
      >
        🎨
      </button>

      {isOpen && <div className="customizer-overlay" onClick={() => setIsOpen(false)}></div>}

      <div className={`theme-customizer ${isOpen ? 'active' : ''}`}>
        <div className="customizer-header">
          <h3>🎨 Tùy Chỉnh Giao Diện</h3>
          <button
            className="close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close customizer"
          >
            ✕
          </button>
        </div>

        <div className="customizer-tabs">
          <button
            className={`tab-btn ${activeTab === 'colors' ? 'active' : ''}`}
            onClick={() => setActiveTab('colors')}
          >
            🎨 Màu Sắc
          </button>
          <button
            className={`tab-btn ${activeTab === 'presets' ? 'active' : ''}`}
            onClick={() => setActiveTab('presets')}
          >
            🎪 Chủ Đề
          </button>
          <button
            className={`tab-btn ${activeTab === 'mode' ? 'active' : ''}`}
            onClick={() => setActiveTab('mode')}
          >
            🌓 Chế Độ
          </button>
        </div>

        <div className="customizer-content">

          {/* MODE TAB */}
          {activeTab === 'mode' && (
            <div className="tab-content">
              <div className="customizer-section">
                <label className="section-title">🌓 Chế Độ Sáng/Tối</label>
                <button
                  className={`mode-toggle ${theme.mode}`}
                  onClick={toggleDarkMode}
                >
                  <span className="mode-label">
                    {theme.mode === 'light' ? '☀️ Chế Độ Sáng' : '🌙 Chế Độ Tối'}
                  </span>
                </button>
                <p className="help-text">
                  {theme.mode === 'light' 
                    ? 'Nhấp để chuyển sang chế độ tối' 
                    : 'Nhấp để chuyển sang chế độ sáng'}
                </p>
              </div>
            </div>
          )}

          {/* COLORS TAB */}
          {activeTab === 'colors' && (
            <div className="tab-content">
              <div className="customizer-section">
                <label className="section-title">🎯 Màu Chính</label>
                <div className="color-input-group">
                  <input
                    type="color"
                    value={theme.primaryColor}
                    onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                    className="color-picker"
                  />
                  <span className="color-value">{theme.primaryColor}</span>
                </div>
              </div>

              <div className="customizer-section">
                <label className="section-title">💜 Màu Phụ</label>
                <div className="color-input-group">
                  <input
                    type="color"
                    value={theme.secondaryColor}
                    onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
                    className="color-picker"
                  />
                  <span className="color-value">{theme.secondaryColor}</span>
                </div>
              </div>

              <div className="customizer-section">
                <label className="section-title">✨ Màu Accent</label>
                <div className="color-input-group">
                  <input
                    type="color"
                    value={theme.accentColor}
                    onChange={(e) => handleColorChange('accentColor', e.target.value)}
                    className="color-picker"
                  />
                  <span className="color-value">{theme.accentColor}</span>
                </div>
              </div>

              <div className="customizer-divider"></div>

              <div className="customizer-section">
                <label className="section-title">📝 Màu Chữ</label>
                <div className="color-input-group">
                  <input
                    type="color"
                    value={theme.textColor}
                    onChange={(e) => handleColorChange('textColor', e.target.value)}
                    className="color-picker"
                  />
                  <span className="color-value">{theme.textColor}</span>
                </div>
              </div>

              <div className="customizer-section">
                <label className="section-title">🏳️ Màu Nền</label>
                <div className="color-input-group">
                  <input
                    type="color"
                    value={theme.backgroundColor}
                    onChange={(e) => handleColorChange('backgroundColor', e.target.value)}
                    className="color-picker"
                  />
                  <span className="color-value">{theme.backgroundColor}</span>
                </div>
              </div>

              <div className="customizer-divider"></div>

              <button className="reset-btn" onClick={resetTheme}>
                ↻ Đặt Lại Màu Mặc Định
              </button>
            </div>
          )}

          {/* PRESETS TAB */}
          {activeTab === 'presets' && (
            <div className="tab-content">
              <p className="help-text">Chọn một chủ đề màu nhanh chóng:</p>
              <div className="preset-buttons">
                <button
                  className="preset-btn preset-blue"
                  onClick={() => handleQuickColorScheme('purple')}
                  title="Màu xanh tím"
                >
                  <span className="preset-icon">💜</span>
                  Purple
                </button>
                <button
                  className="preset-btn preset-ocean"
                  onClick={() => handleQuickColorScheme('ocean')}
                  title="Màu xanh biển"
                >
                  <span className="preset-icon">🌊</span>
                  Ocean
                </button>
                <button
                  className="preset-btn preset-sunset"
                  onClick={() => handleQuickColorScheme('sunset')}
                  title="Màu hoàng hôn"
                >
                  <span className="preset-icon">🌅</span>
                  Sunset
                </button>
                <button
                  className="preset-btn preset-forest"
                  onClick={() => handleQuickColorScheme('forest')}
                  title="Màu rừng"
                >
                  <span className="preset-icon">🌲</span>
                  Forest
                </button>
                <button
                  className="preset-btn preset-midnight"
                  onClick={() => handleQuickColorScheme('midnight')}
                  title="Màu nửa đêm"
                >
                  <span className="preset-icon">🌙</span>
                  Midnight
                </button>
                <button
                  className="preset-btn preset-candy"
                  onClick={() => handleQuickColorScheme('candy')}
                  title="Màu kẹo"
                >
                  <span className="preset-icon">🍬</span>
                  Candy
                </button>
              </div>
            </div>
          )}

        </div>

        <div className="customizer-footer">
          <p className="footer-text">💾 Tùy chỉnh của bạn được lưu tự động</p>
        </div>
      </div>
    </>
  );
};

export default ThemeCustomizer;
