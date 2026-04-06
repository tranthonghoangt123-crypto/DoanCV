# 📚 Projects Component - CV Sinh Viên IT

## 📝 Mô Tả

Component **Projects** được tạo cho một sinh viên công nghệ thông tin, hiển thị danh sách các dự án, kỹ năng chuyên môn và công nghệ sử dụng.

## 🎯 Tính Năng Chính

### 1. **Hiển Thị Dự Án**
- 8 dự án mẫu chia thành 2 loại: Frontend và Backend
- Mỗi dự án bao gồm:
  - Tiêu đề và mô tả
  - Danh sách công nghệ sử dụng
  - Các tính năng chính
  - Nút liên kết (Live + GitHub)

### 2. **Lọc Dự Án**
- Bộ lọc theo loại: Tất cả, Frontend, Backend
- Cập nhật nhanh chóng với animation mượt mà

### 3. **Hiển Thị Kỹ Năng**
- 3 danh mục: Frontend, Backend, Tools & Công Cụ
- Thanh tiến độ hiển thị mức độ thành thạo (0-100%)
- Biểu tượng emoji sinh động

## 🛠️ Công Nghệ Sử Dụng

### Frontend
- **React** ⚛️ - Framework chính
- **JavaScript** 📜 - Xử lý logic
- **CSS** 🎨 - Styling hiện đại
- **Bootstrap 5** 🅱️ - Responsive design

### Backend
- **PHP** 🐘 - Server-side scripting
- **Laravel** 🔴 - Framework PHP
- **MySQL** 🗄️ - Database
- **REST API** 🔗 - API integration

### Tools
- **Git/GitHub** 🐙 - Version control
- **VS Code** 💻 - Code editor
- **Postman** 📮 - API testing
- **Figma** 📐 - Design tool

## 📦 Cấu Trúc Tệp

```
src/components/Projects/
├── Projects.jsx          # Component chính
├── Projects.css          # Stylesheet
├── index.js             # Export component
└── README.md            # File này
```

## 🚀 Cách Sử Dụng

### Import Component
```javascript
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Projects />
    </div>
  );
}
```

### Hoặc import từ index.js
```javascript
import Projects from './components/Projects/index.js';
```

## ✏️ Cách Tùy Chỉnh

### 1. Thêm Dự Án Mới

Mở file `Projects.jsx` và thêm object vào mảng `projectsData`:

```javascript
{
  id: 9,
  title: 'Tên Dự Án',
  description: 'Mô tả chi tiết dự án...',
  technologies: ['React', 'JavaScript', 'CSS'],
  category: 'frontend', // hoặc 'backend'
  image: '🎯', // Emoji hoặc URL ảnh
  liveLink: 'https://...',
  githubLink: 'https://...',
  features: ['Tính năng 1', 'Tính năng 2', 'Tính năng 3']
}
```

### 2. Cập Nhật Kỹ Năng

Tìm object `skillsData` trong `Projects.jsx` và chỉnh sửa:

```javascript
const skillsData = {
  frontend: [
    { name: 'React', level: 85, icon: '⚛️' },
    // Thêm kỹ năng mới ở đây
  ],
  // ...
}
```

### 3. Thay Đổi Màu Sắc

Mở `Projects.css` và tìm các biến màu:

```css
/* Thay đổi gradient chính */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Các màu chính:**
- Primary: `#667eea` (Xanh tím)
- Secondary: `#764ba2` (Tím)
- Text: `#2c3e50` (Xám tối)
- Light: `#f5f7fa` (Xám nhạt)

### 4. Cập Nhật Liên Kết

Trong mảng `projectsData`, thay đổi:
```javascript
liveLink: 'https://your-live-demo.com',
githubLink: 'https://github.com/your-username/repo'
```

## 🎨 Design Features

- ✨ Gradient colors chuyên nghiệp
- 🎯 Smooth animations & transitions
- 📱 Fully responsive (mobile-first)
- ⚡ Hover effects sinh động
- 🌈 Modern card design
- 📊 Progress bars cho kỹ năng

## 📱 Responsive Breakpoints

- **Desktop**: Lưới 3 cột
- **Tablet**: Lưới 2 cột
- **Mobile**: 1 cột

## 🔧 Tùy Chỉnh Cao Cấp

### Thay Đổi Số Cột Lưới
```css
.projects-grid {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  /* Thay đổi 320px để điều chỉnh kích thước card */
}
```

### Thay Đổi Animation
```css
@keyframes fadeInUp {
  /* Tùy chỉnh animation */
}
```

### Thay Đổi Hover Effect
```css
.project-card:hover {
  transform: translateY(-10px); /* Thay đổi giá trị này */
}
```

## 📊 Dữ Liệu Mẫu

Component hiện có:
- **Tổng dự án**: 8
- **Frontend**: 4 dự án
- **Backend**: 4 dự án
- **Kỹ năng**: 13 kỹ năng với mức độ từ 75-90%

## 🎓 Hướng Dẫn Cập Nhật

Khi hoàn thành dự án mới hoặc học kỹ năng mới:

1. Mở `Projects.jsx`
2. Cập nhật mảng `projectsData` hoặc `skillsData`
3. Cập nhật `liveLink` và `githubLink`
4. Tăng `level` cho kỹ năng nếu cần

## 💡 Lời Khuyên

- Luôn cập nhật danh sách dự án thực tế
- Đảm bảo liên kết live và GitHub hoạt động
- Thêm ảnh thực tế thay vì emoji để trông chuyên nghiệp hơn
- Viết mô tả chi tiết, rõ ràng
- Cập nhật mức độ kỹ năng khi có tiến bộ

## 📞 Hỗ Trợ

Nếu có vấn đề:
1. Kiểm tra import/export đúng
2. Kiểm tra CSS được load
3. Kiểm tra dữ liệu trong mảng
4. F12 để xem console có lỗi

---

**Made with ❤️ for IT Students**
