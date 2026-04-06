import React from 'react';
import './Testimonial.css';
// Import các icon từ FontAwesome, Material Design và Typicons
import { FaHandshake } from 'react-icons/fa';
import { MdElectricBolt, MdLightbulbOutline, MdOutlineEmojiEvents, MdStar, MdStarBorder } from 'react-icons/md';
import { TiUserOutline } from 'react-icons/ti';

const Testimonial = () => {
  // Dữ liệu đánh giá (Để trống để bạn tự điền)
  const testimonials = [
    {
      id: 1,
      name: '[Tên người đánh giá 1]',
      position: '[Vai trò / Chức vụ]',
      message: '[Nhập nội dung nhận xét hoặc đánh giá của người này vào đây...]',
      avatar: <TiUserOutline size={50} />, 
      rating: 5
    },
    {
      id: 2,
      name: '[Tên người đánh giá 2]',
      position: '[Vai trò / Chức vụ]',
      message: '[Nhập nội dung nhận xét hoặc đánh giá của người này vào đây...]',
      avatar: <TiUserOutline size={50} />, 
      rating: 5
    },
    {
      id: 3,
      name: '[Tên người đánh giá 3]',
      position: '[Vai trò / Chức vụ]',
      message: '[Nhập nội dung nhận xét hoặc đánh giá của người này vào đây...]',
      avatar: <TiUserOutline size={50} />, 
      rating: 5
    }
  ];

  // Hàm render sao bằng vector icon professional
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = rating;
    const borderStars = totalStars - filledStars;

    return (
      <>
        {[...Array(filledStars)].map((_, i) => <MdStar key={`filled-${i}`} className="star filled" />)}
        {[...Array(borderStars)].map((_, i) => <MdStarBorder key={`border-${i}`} className="star border" />)}
      </>
    );
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="section-header">
          <h2 className="section-title">Nhận Xét & Đánh Giá</h2>
          <p className="section-subtitle">Góc nhìn từ những người đồng đội và giảng viên đã đồng hành cùng tôi</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar-icon-container">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>

              <div className="stars">
                {renderStars(testimonial.rating)}
              </div>

              <p className="message">"{testimonial.message}"</p>
            </div>
          ))}
        </div>

        <div className="testimonial-summary">
          <h3>Giá Trị Tôi Mang Lại Với Vai Trò Thực Tập Sinh</h3>
          <div className="summary-grid">
            
            {/* Giá trị 1 */}
            <div className="summary-item">
              <div className="summary-icon"><MdElectricBolt /></div>
              <h5>[Tiêu đề thế mạnh 1]</h5>
              <p>[Mô tả chi tiết về thế mạnh này của bạn...]</p>
            </div>
            
            {/* Giá trị 2 */}
            <div className="summary-item">
              <div className="summary-icon"><FaHandshake /></div>
              <h5>[Tiêu đề thế mạnh 2]</h5>
              <p>[Mô tả chi tiết về thế mạnh này của bạn...]</p>
            </div>
            
            {/* Giá trị 3 */}
            <div className="summary-item">
              <div className="summary-icon"><MdOutlineEmojiEvents /></div>
              <h5>[Tiêu đề thế mạnh 3]</h5>
              <p>[Mô tả chi tiết về thế mạnh này của bạn...]</p>
            </div>
            
            {/* Giá trị 4 */}
            <div className="summary-item">
              <div className="summary-icon"><MdLightbulbOutline /></div>
              <h5>[Tiêu đề thế mạnh 4]</h5>
              <p>[Mô tả chi tiết về thế mạnh này của bạn...]</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;