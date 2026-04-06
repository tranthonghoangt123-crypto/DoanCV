# 📚 CV Projects Component - Hướng Dẫn Toàn Diện

## 📖 Nội Dung

- [Giới Thiệu](#giới-thiệu)
- [Cài Đặt & Khởi Chạy](#cài-đặt--khởi-chạy)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [Component Projects](#component-projects)
- [Tùy Chỉnh](#tùy-chỉnh)
- [Thêm Các Component Khác](#thêm-các-component-khác)
- [Deploy](#deploy)

---

## 🎯 Giới Thiệu

Đây là một **CV Website** chuyên nghiệp cho sinh viên IT, được xây dựng với React + Vite. 

### Tính Năng Chính:
- 🎨 Design hiện đại, responsive
- 📱 Tối ưu cho mobile, tablet, desktop
- ⚡ Hiệu suất cao với Vite
- 🔄 Component dễ tùy chỉnh
- 📊 Hiển thị dự án, kỹ năng, kinh nghiệm

---

## 🚀 Cài Đặt & Khởi Chạy

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy development server
```bash
npm start
```
Hoặc:
```bash
npm run start
```

Khi chạy xong, truy cập: **http://localhost:5173**

### 3. Build production
```bash
npm run build
```

---

## 📂 Cấu Trúc Dự Án

```
vite-react-starter/
│
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📁 Projects/              ← COMPONENT CHÍNH CỦA BẠN ✓
│   │   │   ├── Projects.jsx          ← Core logic (130 dòng)
│   │   │   ├── Projects.css          ← Styling (300+ dòng)
│   │   │   ├── index.js              ← Export
│   │   │   └── README.md             ← Doc riêng
│   │   │
│   │   ├── 📁 Home/                  ← Section hero
│   │   ├── 📁 About/                 ← Giới thiệu
│   │   ├── 📁 Contact/               ← Liên hệ
│   │   ├── 📁 Education/             ← Học vấn
│   │   ├── 📁 WorkExperience/        ← Kinh nghiệm
│   │   ├── 📁 TechStack/             ← Kỹ năng
│   │   ├── 📁 Testimonial/           ← Nhận xét
│   │   └── 📁 Sidebar/               ← Navigation
│   │
│   ├── 📁 Images/                    ← Hình ảnh
│   ├── main.jsx                      ← Entry point
│   ├── main.css                      ← Global styles
│   ├── App.jsx                       ← Root component
│   └── App.css
│
├── 📁 public/                        ← Static files
├── index.html                        ← HTML chính
├── package.json                      ← Dependencies
├── vite.config.js                    ← Vite config
├── QUICKSTART.md                     ← Guide nhanh
└── SETUP_GUIDE.md                    ← File này
```

---

## 🎨 Component Projects

### Tính Năng:

#### 1️⃣ **Danh Sách Dự Án**
- 8 dự án mẫu
- Chia 2 loại: Frontend + Backend
- Mỗi dự án có: icon, tên, mô tả, công nghệ, tính năng, button link

#### 2️⃣ **Bộ Lọc**
```
[Tất Cả] [Frontend] [Backend]
```
- Lọc theo loại
- Cập nhật tức thời
- Smooth animation

#### 3️⃣ **Hiển Thị Kỹ Năng**
- **Frontend**: React, JS, CSS, Bootstrap, Angular
- **Backend**: PHP, Laravel, MySQL, REST API
- **Tools**: Git, VS Code, Figma, Postman
- Progress bar cho mỗi kỹ năng

### Công Nghệ Được Bao Gồm:

```
FRONTEND          BACKEND          TOOLS
---------------------------------------
React ⚛️          PHP 🐘           Git/GitHub 🐙
JavaScript 📜    Laravel 🔴       VS Code 💻
CSS 🎨            MySQL 🗄️        Figma 📐
Bootstrap 5 🅱️   REST API 🔗      Postman 📮
Angular 🔴
```

---

## ✏️ Tùy Chỉnh

### 1️⃣ Thêm Dự Án Mới

**File**: `src/components/Projects/Projects.jsx` (dòng ~30)

```javascript
// Tìm const projectsData = [
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Website',
    // ... existing projects
  },
  // ← ĐẶT CON TRỎ ĐÃY VÀ THÊM:
  {
    id: 9,
    title: 'Social Media App',
    description: 'Ứng dụng mạng xã hội với messaging, timeline, notification system.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'frontend', // 'frontend' hoặc 'backend'
    image: '👥', // Emoji hoặc URL
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/user/project',
    features: ['Real-time Chat', 'Timeline Feed', 'User Profiles']
  },
  // ... other projects
];
```

### 2️⃣ Cập Nhật Kỹ Năng

**File**: `src/components/Projects/Projects.jsx` (dòng ~75)

```javascript
const skillsData = {
  frontend: [
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'Vue.js', level: 75, icon: '💚' }, // ← Thêm dòng này
    // ...
  ],
  backend: [
    // Thêm kỹ năng backend tại đây
  ],
  tools: [
    // Thêm tool tại đây
  ]
};
```

**Giải thích `level`**:
- 0-40: Beginner
- 41-70: Intermediate
- 71-100: Advanced

### 3️⃣ Thay Đổi Màu Sắc

**File**: `src/components/Projects/Projects.css`

**Tìm và thay**:
```css
/* Primary color (Xanh tím) */
#667eea  →  Thay bằng: #3498db (xanh dương), #e74c3c (cam), etc.

/* Secondary (Tím) */
#764ba2  →  Thay bằng: #9b59b6, #2ecc71, etc.

/* Text color (Xám tối) */
#2c3e50  →  Thay bằng: #1a1a1a, #34495e, etc.
```

**Gradient Generator**: https://www.gradient.co/

### 4️⃣ Thay Đổi Typography

**File**: `src/components/Projects/Projects.css`

```css
.section-title {
  font-size: 2.5rem;  /* Thay kích thước */
  font-weight: 700;   /* Thay độ đậm */
  letter-spacing: 1px; /* Thay khoảng cách chữ */
}
```

### 5️⃣ Thay Đổi Spacing & Layout

```css
.projects-grid {
  gap: 30px;  /* Khoảng cách giữa card */
}

.project-card {
  border-radius: 15px;  /* Bo góc (0-20px) */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  /* Thay shadow ở đây */
}
```

### 6️⃣ Sử Dụng Ảnh Thực Tế

Thay thế emoji bằng hình ảnh:

```javascript
// Trước
image: '🛒',

// Sau
image: 'https://cdn.example.com/ecommerce.jpg',
```

CSS cần thay đổi:
```css
.project-image {
  background: linear-gradient(...);
  /* Thêm code này */
  background-image: url('...');
  background-size: cover;
  background-position: center;
}
```

---

## 🔧 Thêm Các Component Khác

Template cho các component khác:

### Ví dụ: Home Component

```javascript
// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <h1>Xin Chào, Tôi Là [Tên Bạn]</h1>
        <p>Full Stack Developer | Sinh viên IT</p>
        <button className="cta-btn">Xem CV Của Tôi</button>
      </div>
    </section>
  );
};

export default Home;
```

### Cách Sử Dụng:

```javascript
// src/App.jsx
import Home from './components/Home';
import Projects from './components/Projects';

const App = () => {
  return (
    <main>
      <Home />
      <Projects />
      {/* ... other components */}
    </main>
  );
};
```

---

## 📊 Cấu Trúc Dữ Liệu

### Projects Object:
```javascript
{
  id: 1,                              // Unique ID
  title: 'Project Name',              // Tên dự án
  description: 'Mô tả...',            // Mô tả
  technologies: ['React', 'CSS'],     // Công nghệ
  category: 'frontend',               // 'frontend' | 'backend'
  image: '🎯',                        // Emoji hoặc URL
  liveLink: 'https://...',            // Link live
  githubLink: 'https://github.com/...', // Link GitHub
  features: ['Feature 1', 'Feature 2'] // Tính năng
}
```

### Skill Object:
```javascript
{
  name: 'React',  // Tên kỹ năng
  level: 85,      // Mức độ (0-100)
  icon: '⚛️'      // Emoji icon
}
```

---

## 🎨 Responsive Design Breakpoints

```css
/* Desktop */
@media (min-width: 1024px) { /* > 1024px */ }

/* Tablet */
@media (max-width: 1024px) and (min-width: 768px) { /* 768-1024px */ }

/* Mobile */
@media (max-width: 768px) { /* < 768px */ }

/* Small Mobile */
@media (max-width: 480px) { /* < 480px */ }
```

---

## 🚀 Deploy

### Option 1: Vercel (Recommended)

```bash
npm run build
# Upload thư mục dist/ lên Vercel
```

Hoặc connect GitHub:
1. Push to GitHub
2. Vào https://vercel.com
3. Import project
4. Auto deploy! ✅

### Option 2: Netlify

```bash
npm run build
```

Drag & drop thư mục `dist/`

### Option 3: GitHub Pages

```bash
npm install --save-dev gh-pages
```

Thêm `package.json`:
```json
"homepage": "https://username.github.io/repo-name"
```

---

## 🎯 Checklist Hoàn Thành

- [ ] Cài đặt dependencies (`npm install`)
- [ ] Chạy dev server (`npm start`)
- [ ] Thêm 2-3 dự án thực tế
- [ ] Cập nhật kỹ năng
- [ ] Thay đổi màu sắc
- [ ] Tạo component Home
- [ ] Tạo component About
- [ ] Thêm Contact form
- [ ] Build production (`npm run build`)
- [ ] Deploy lên Vercel/Netlify

---

## 📞 Debugging

### Component không hiển thị?
1. Mở DevTools (F12)
2. Kiểm tra console có lỗi
3. Kiểm tra import/export
4. Reload page (Ctrl+R)

### CSS không có hiệu lực?
1. Kiểm tra file CSS được import
2. Xóa browser cache (Ctrl+Shift+Del)
3. Restart dev server
4. Kiểm tra class name trùng

### Performance issues?
1. Mở DevTools > Performance tab
2. Kiểm tra re-renders không cần thiết
3. Sử dụng React.memo() cho components tĩnh
4. Lazy load hình ảnh

---

## 📚 Tài Liệu Bổ Sung

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Design](https://www.w3schools.com/css/css_rwd_intro.asp)

---

## 💡 Tips Chuyên Nghiệp

1. **Commit thường xuyên** vào Git
2. **Viết README.md** trong mỗi component
3. **Test responsive** trên nhiều devices
4. **Tối ưu ảnh** trước upload
5. **Kiểm tra SEO** trước deploy
6. **Thêm manifest.json** cho PWA
7. **Sử dụng https** khi deploy

---

## 🎓 Tiếp Theo

1. Thêm các component khác
2. Tạo page Contact có form
3. Thêm Dark Mode
4. Tạo Blog section
5. Thêm Search functionality
6. Implement animation nhiều hơn

---

**Made with ❤️ for IT Students**

Hỏi gì không rõ? Xem `QUICKSTART.md` hoặc [`Projects/README.md`](src/components/Projects/README.md)
