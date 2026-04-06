# 📋 Component Templates & Examples

Hướng dẫn tạo các component khác cho CV. Copy & paste các template này!

---

## 🏠 1. Home Component (Hero Section)

### File: `src/components/Home/Home.jsx`

```javascript
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Xin Chào, Tôi Là <span>Nguyễn Văn A</span>
          </h1>
          <p className="home-subtitle">
            Full Stack Developer • Passionate About Technology
          </p>
          <p className="home-description">
            Tôi là một sinh viên công nghệ thông tin đam mê xây dựng các ứng dụng web hiện đại.
            Với kiến thức về React, PHP, Laravel và các công nghệ khác, tôi luôn sẵn sàng nhận
            các dự án thử thách mới.
          </p>
          <div className="home-buttons">
            <button className="btn btn-primary">📥 Tải CV</button>
            <button className="btn btn-secondary">💬 Liên Hệ Ngay</button>
          </div>
        </div>
        <div className="home-image">
          <img src="your-profile-image.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
```

### File: `src/components/Home/Home.css`

```css
.home-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.home-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.home-title span {
  color: #ffd700;
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.home-subtitle {
  font-size: 1.5rem;
  margin-bottom: 20px;
  opacity: 0.95;
}

.home-description {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 30px;
  opacity: 0.85;
}

.home-buttons {
  display: flex;
  gap: 15px;
}

.home-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-image img {
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .home-container {
    grid-template-columns: 1fr;
  }

  .home-title {
    font-size: 2.2rem;
  }
}
```

---

## 📖 2. About Component

### File: `src/components/About/About.jsx`

```javascript
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="section-title">Về Tôi</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Tôi là một sinh viên năm thứ 3 ngành Công Nghệ Thông Tin tại 
              <strong> Đại Học XYZ</strong>.
            </p>
            <p>
              Tôi có kinh nghiệm thực tế với các dự án web thực tế, từ frontend 
              (React, Angular) đến backend (Laravel, PHP, Node.js).
            </p>
            <p>
              Tôi đam mê học hỏi công nghệ mới và luôn muốn ứng dụng những gì 
              đã học vào các dự án thực tế.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <h3>8+</h3>
              <p>Dự Án Hoàn Thành</p>
            </div>
            <div className="stat-item">
              <h3>13</h3>
              <p>Kỹ Năng Chính</p>
            </div>
            <div className="stat-item">
              <h3>2+</h3>
              <p>Năm Kinh Nghiệm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
```

### File: `src/components/About/About.css`

```css
.about-section {
  padding: 80px 20px;
  background: #f5f7fa;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  color: #2c3e50;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.about-text p {
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.stat-item {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.stat-item h3 {
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 10px;
}

.stat-item p {
  color: #7f8c8d;
  margin: 0;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }
}
```

---

## 🎓 3. Education Component

### File: `src/components/Education/Education.jsx`

```javascript
import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      school: 'Đại Học Công Nghệ Thông Tin',
      degree: 'Cử Nhân Công Nghệ Thông Tin',
      field: 'Phần Mềm / Web Development',
      year: '2021 - Nay',
      gpa: '3.7/4.0',
      details: [
        'GPA cao: 3.7/4.0',
        'Top 10% lớp',
        'Học bổng xuất sắc'
      ]
    },
    {
      id: 2,
      school: 'Trường Trung Phổ Thông Chuyên',
      degree: 'Bằng Tốt Nghiệp THPT',
      field: 'Chuyên Toán',
      year: '2018 - 2021',
      gpa: '9.5/10',
      details: [
        'Giải 3 Olympic Toán Quốc Gia',
        'Học sinh xuất sắc',
        'HSG cấp tỉnh'
      ]
    }
  ];

  return (
    <section className="education-section">
      <div className="education-container">
        <h2 className="section-title">Học Vấn & Chứng Chỉ</h2>

        <div className="education-timeline">
          {educationData.map(edu => (
            <div key={edu.id} className="education-item">
              <div className="education-dot"></div>
              <div className="education-content">
                <h3>{edu.school}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="field">{edu.field}</p>
                <p className="year">{edu.year}</p>
                <p className="gpa">GPA: {edu.gpa}</p>
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
    </section>
  );
};

export default Education;
```

### File: `src/components/Education/Education.css`

```css
.education-section {
  padding: 80px 20px;
  background: white;
}

.education-container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  color: #2c3e50;
}

.education-timeline {
  position: relative;
  padding: 20px 0;
}

.education-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, #667eea, #764ba2);
}

.education-item {
  margin-bottom: 40px;
  display: flex;
  gap: 30px;
  position: relative;
}

.education-item:nth-child(odd) {
  flex-direction: row;
}

.education-item:nth-child(even) {
  flex-direction: row-reverse;
}

.education-dot {
  position: absolute;
  width: 20px;
  height: 20px;
  background: white;
  border: 4px solid #667eea;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
}

.education-content {
  width: 45%;
  background: #f5f7fa;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.education-content h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.degree {
  font-weight: 600;
  color: #667eea;
  margin-bottom: 5px;
}

.field {
  color: #7f8c8d;
  font-size: 0.95rem;
  margin-bottom: 5px;
}

.year {
  color: #e74c3c;
  font-weight: 600;
  margin-bottom: 8px;
}

.gpa {
  background: #667eea;
  color: white;
  display: inline-block;
  padding: 5px 12px;
  border-radius: 5px;
  font-size: 0.85rem;
  margin-bottom: 12px;
}

.education-content ul {
  list-style: none;
  padding: 0;
}

.education-content li {
  color: #34495e;
  font-size: 0.9rem;
  padding: 5px 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .education-timeline::before {
    left: 0;
  }

  .education-item {
    flex-direction: column !important;
  }

  .education-dot {
    left: 0;
  }

  .education-content {
    width: 100%;
    margin-left: 40px;
  }
}
```

---

## 📞 4. Contact Component

### File: `src/components/Contact/Contact.jsx`

```javascript
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý submit form
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Liên Hệ Với Tôi</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Thông Tin Liên Hệ</h3>
            <div className="info-item">
              <span className="icon">📧</span>
              <div>
                <p className="label">Email</p>
                <a href="mailto:your@email.com">your@email.com</a>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📱</span>
              <div>
                <p className="label">Điện Thoại</p>
                <a href="tel:+84123456789">+84 123 456 789</a>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <p className="label">Địa Chỉ</p>
                <p>Hà Nội, Việt Nam</p>
              </div>
            </div>
            <div className="social-links">
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Tên của bạn"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email của bạn"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Tiêu đề"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tin nhắn của bạn"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Gửi Tin Nhắn
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

### File: `src/components/Contact/Contact.css`

```css
.contact-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  color: #2c3e50;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.contact-info h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.info-item .icon {
  font-size: 2rem;
}

.info-item .label {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 5px;
}

.info-item a {
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s;
}

.info-item a:hover {
  color: #764ba2;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.social-links a {
  padding: 10px 20px;
  background: #667eea;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s;
}

.social-links a:hover {
  background: #764ba2;
  transform: translateY(-3px);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.contact-form input,
.contact-form textarea {
  padding: 15px;
  border: 2px solid #e0e8ff;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.contact-form button {
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.contact-form button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
```

---

## 🔧 Cách Sử Dụng Các Component Này

### Bước 1: Tạo folder
```bash
mkdir src/components/Home
mkdir src/components/About
mkdir src/components/Education
mkdir src/components/Contact
```

### Bước 2: Tạo files
Tạo `.jsx`, `.css`, và `index.js` cho mỗi component

### Bước 3: Import vào App.jsx
```javascript
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
};
```

---

**Happy Coding!** 🚀
