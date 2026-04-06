# 🚀 Quick Start - Projects CV Component

## ⚡ Cách Chạy Ngay

1. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

2. **Chạy development server**:
   ```bash
   npm start
   ```
   
   Hoặc:
   ```bash
   npm run start
   ```

3. **Mở trình duyệt** tại: `http://localhost:5173`

## 📂 Cấu Trúc Thư Mục

```
vite-react-starter/
├── src/
│   ├── components/
│   │   ├── Projects/           ← Component chính của bạn
│   │   │   ├── Projects.jsx    ← Logic React
│   │   │   ├── Projects.css    ← Styling
│   │   │   ├── index.js        ← Export
│   │   │   └── README.md       ← Hướng dẫn chi tiết
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Contact/
│   │   └── ... (các component khác)
│   ├── main.jsx               ← Entry point (đã update)
│   ├── main.css               ← Global styles
│   └── Images/
├── public/
├── index.html                 ← HTML chính
├── package.json               ← Dependencies
└── vite.config.js             ← Vite config
```

## 🎯 Các Tính Năng Trong Projects Component

✅ **8 Dự Án Mẫu**
- 4 dự án Frontend (React, Angular, etc)
- 4 dự án Backend (Laravel, PHP, etc)

✅ **Bộ Lọc Dự Án**
- Lọc theo: Tất cả, Frontend, Backend

✅ **Hiển Thị Kỹ Năng**
- 13 kỹ năng với progress bar
- 3 danh mục: Frontend, Backend, Tools

✅ **Design Hiện Đại**
- Responsive (mobile, tablet, desktop)
- Animations mượt mà
- Gradient colors
- Hover effects

## 🎨 Các Công Nghệ Được Hiển Thị

### Frontend
- React ⚛️
- JavaScript 📜  
- CSS / SCSS 🎨
- Bootstrap 5 🅱️
- Angular 🔴

### Backend
- PHP 🐘
- Laravel 🔴
- MySQL 🗄️
- REST API 🔗

### Tools
- Git/GitHub 🐙
- VS Code 💻
- Figma 📐
- Postman 📮

## 📝 Tùy Chỉnh Nhanh

### 1. Thêm Dự Án Mới

**File**: `src/components/Projects/Projects.jsx`

Tìm đoạn này (khoảng dòng 30-60):
```javascript
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Website',
    // ... fields khác
  },
  // ← Thêm object mới ở đây
];
```

**Template mẫu**:
```javascript
{
  id: 9,
  title: 'Tên Dự Án Của Bạn',
  description: 'Viết mô tả dự án ở đây...',
  technologies: ['React', 'CSS', 'JavaScript'],
  category: 'frontend', // 'frontend' hoặc 'backend'
  image: '🎯', // Emoji hoặc URL ảnh
  liveLink: 'https://your-link.com',
  githubLink: 'https://github.com/you/repo',
  features: ['Tính năng 1', 'Tính năng 2', 'Tính năng 3']
}
```

### 2. Cập Nhật Kỹ Năng

**File**: `src/components/Projects/Projects.jsx`

Tìm đoạn này (khoảng dòng 75):
```javascript
const skillsData = {
  frontend: [
    { name: 'React', level: 85, icon: '⚛️' },
    // Thêm hoặc chỉnh sửa ở đây
  ],
  // ...
}
```

**Ví dụ thêm kỹ năng**:
```javascript
{ name: 'Vue.js', level: 75, icon: '💚' },
```

### 3. Thay Đổi Màu Sắc

**File**: `src/components/Projects/Projects.css`

**Màu primary** (xanh tím):
- Tìm: `#667eea`
- Thay bằng: Màu hex của bạn

**Màu secondary** (tím):
- Tìm: `#764ba2`
- Thay bằng: Màu hex của bạn

**Ví dụ colors**:
```
Xanh dương: #3498db
Cam:       #e74c3c
Xanh lá:   #2ecc71
Tím:       #9b59b6
Vàng:      #f39c12
```

### 4. Thay Đổi Kích Thước Card

**File**: `src/components/Projects/Projects.css`

Tìm `.projects-grid` (khoảng dòng 120):
```css
.projects-grid {
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  /*                                              ↑ Thay số này
    320px = kích thước tối thiểu card
    Tăng để card rộng hơn, giảm để hẹp hơn */
}
```

## 🔗 Import Component Vào Nơi Khác

Nếu muốn hiển thị Projects component ở trang khác:

```javascript
import Projects from './components/Projects';

export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <Projects />
    </div>
  );
}
```

## 🌍 Cập Nhật Liên Kết

Tất cả dự án hiện đang link đến `#` (không đâu)

Thay bằng liên kết thực tế:

```javascript
// Trước
liveLink: '#',
githubLink: '#',

// Sau
liveLink: 'https://my-ecommerce.vercel.app',
githubLink: 'https://github.com/username/ecommerce',
```

## 🚀 Build Production

```bash
npm run build
```

Tạo thư mục `dist/` với code được tối ưu hóa

## 📦 Các Scripts Có Sẵn

```bash
npm start                 # Chạy dev server
npm run build            # Build production
npm run preview          # Preview build
npm run host            # Chạy trên network
```

## 💡 Tips & Tricks

1. **Emoji Icons**: Sử dụng emoji từ [emojipedia.org](https://emojipedia.org)

2. **Gradient Colors**: Tạo gradient tại [gradient.co](https://gradient.co)

3. **Images thực tế**: Thay emoji bằng ảnh (PNG, JPG):
   ```javascript
   image: 'https://your-image-url.com/image.jpg'
   ```

4. **Dark Mode**: Thêm CSS variables cho dark mode:
   ```css
   @media (prefers-color-scheme: dark) {
     .project-card {
       background: #1a1a1a;
       color: #fff;
     }
   }
   ```

## 🐛 Troubleshooting

### Component không hiển thị?
✓ Check có lỗi console (F12)
✓ Kiểm tra import/export
✓ Reload page (F5)

### Style không đúng?
✓ Kiểm tra CSS file được load
✓ Xóa browser cache (Ctrl+Shift+Del)
✓ Restart dev server

### Card bị biến dạng?
✓ Kiểm tra chiều rộng viewport
✓ Mở DevTools > Responsive mode
✓ Kiểm tra media queries

## 📚 File Cần Biết

| File | Tác vụ |
|------|--------|
| `Projects.jsx` | Logic React, data |
| `Projects.css` | Styling, animations |
| `index.js` | Export component |
| `README.md` | Hướng dẫn chi tiết |
| `main.jsx` | App entry point |
| `main.css` | Global styles |

## ✨ Tiếp Theo

1. Thêm dự án thực tế của bạn
2. Cập nhật kỹ năng
3. Thay đổi màu sắc theo thích
4. Thêm ảnh thực tế
5. Deploy lên Vercel/Netlify

---

**Happy Coding! 🎉**
