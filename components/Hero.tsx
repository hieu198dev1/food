export default function Hero() {
  return (
    <section
      id="home"
      className="h-[90vh] min-h-[600px] flex items-center justify-center text-white text-center px-4 
                 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('https://ipos.vn/wp-content/uploads/2023/05/bi-quyet-kinh-doanh-nem-nuong-nha-trang.jpg')",
      }}
    >
      <div className="max-w-3xl animate-fade-in-up"> {/* Thêm hiệu ứng đơn giản */}
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wide text-shadow-lg">
          Nem Nướng Chuẩn Vị Nha Trang
        </h1>
        <p className="mt-6 text-lg md:text-xl font-light text-gray-200 max-w-xl mx-auto">
          Công thức gia truyền mang đến hương vị đậm đà, khó quên. 
          Cuốn trọn tinh túy ẩm thực Việt.
        </p>
        <a
          href="#menu"
          className="mt-10 inline-block bg-amber-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:bg-amber-600 transition-transform transform hover:scale-105"
        >
          Khám Phá Thực Đơn
        </a>
      </div>
    </section>
  )
}
