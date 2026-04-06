import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import thư viện EmailJS
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebookF, FaBehance } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // State để quản lý trạng thái nút bấm khi đang gửi mail
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // BẠN HÃY THAY 3 THÔNG TIN NÀY BẰNG ID CỦA BẠN TRÊN EMAILJS
    const serviceID = 'service_aptp2fs'; 
    const templateID = 'template_2tvbbo9'; 
    const publicKey = 'OCSiajqfLcfY1UHXf';

    // ĐÃ SỬA: Đóng gói dữ liệu khớp chính xác với biến {{...}} trong khung EmailJS của bạn
    const templateParams = {
      name: formData.name,       // Khớp với {{name}}
      email: formData.email,     // Khớp với {{email}}
      title: formData.subject,   // Khớp với {{title}}
      message: formData.message, // Khớp với {{message}}
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('🎉 Gửi tin nhắn thành công! Tôi sẽ phản hồi bạn sớm nhất.');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Xóa form sau khi gửi
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('❌ Có lỗi xảy ra. Vui lòng kiểm tra lại cấu hình tài khoản EmailJS.');
      })
      .finally(() => {
        setIsSending(false); // Trả lại trạng thái bình thường cho nút bấm
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Liên Hệ Với Tôi</h2>
          <p className="section-subtitle">Sẵn sàng kết nối và hợp tác trong các dự án sắp tới</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Thông Tin Cá Nhân</h3>
            <p className="info-desc">Bạn có thể liên hệ trực tiếp với tôi qua email hoặc số điện thoại bên dưới. Tôi luôn mở cửa cho các cơ hội thực tập và làm việc mới.</p>
            
            <div className="info-item">
              <span className="info-icon"><FaEnvelope /></span>
              <div>
                <p className="info-label">Email</p>
                <a href="mailto:tranthonghoangt123@gmail.com">tranthonghoangt123@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon"><FaPhoneAlt /></span>
              <div>
                <p className="info-label">Điện Thoại</p>
                <a href="tel:+84394400351">0394 400 351</a>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon"><FaMapMarkerAlt /></span>
              <div>
                <p className="info-label">Địa Chỉ</p>
                <p>Bình Tân, Hồ Chí Minh</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-btn" aria-label="GitHub"><FaGithub /></a>
              <a href="#" className="social-btn" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" className="social-btn" aria-label="Behance"><FaBehance /></a>
              <a href="#" className="social-btn" aria-label="Facebook"><FaFacebookF /></a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Họ và tên của bạn"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Địa chỉ Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Chủ đề (VD: Mời Phỏng Vấn...)"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Nội dung tin nhắn..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {/* Vô hiệu hóa nút bấm khi đang gửi để tránh spam click */}
            <button type="submit" className="btn-submit" disabled={isSending}>
              {isSending ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;