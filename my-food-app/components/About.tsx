export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <img
            src="https://nemnuonghungviet.com/nemhungviet/uploads/2023/04/nem-vien-ho-lo-1-1.jpg"
            alt="Nem nướng công thức gia truyền"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Content */}
        <div className="text-gray-800">
          <span className="text-amber-600 font-semibold uppercase tracking-wider">
            Câu Chuyện Của Bếp
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Công Thức Gia Truyền Hơn 30 Năm
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Tại Bếp Việt, chúng tôi tự hào mang đến hương vị nem nướng
            Nha Trang đích thực, được lưu truyền qua ba thế hệ. Từng
            miếng nem được nướng trên than hồng, quyện với nước chấm
            đậu phộng đặc sệt, đánh thức mọi giác quan của bạn.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Chúng tôi cam kết sử dụng 100% nguyên liệu tươi sạch,
            được lựa chọn kỹ lưỡng mỗi ngày để đảm bảo trải nghiệm
            ẩm thực trọn vẹn nhất.
          </p>
        </div>
      </div>
    </section>
  )
}
