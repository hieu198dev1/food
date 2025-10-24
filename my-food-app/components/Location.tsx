// Các biểu tượng SVG đơn giản
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default function Location() {
  return (
    <section id="location" className="py-24 bg-white grid grid-cols-1 md:grid-cols-2">
      {/* Map Section - ĐÃ CẬP NHẬT */}
      <div className="min-h-[400px] md:h-full">
        {/* ĐÂY LÀ BẢN ĐỒ NHÚNG IFRAME TỪ GOOGLE MAPS
          Để lấy mã nhúng cho địa chỉ của bạn:
          1. Vào Google Maps, tìm địa chỉ quán của bạn.
          2. Nhấn "Share" (Chia sẻ).
          3. Chọn tab "Embed a map" (Nhúng bản đồ).
          4. Copy đoạn mã 'iframe' và dán vào đây, thay thế iframe mẫu bên dưới.
        */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.44717112702!2d106.68228511529634!3d10.77698899232093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f20e7d91e3f%3A0x42f70355f69c011b!2sDinh%20%C4%90%E1%BB%99c%20L%E1%BA%ADp!5e0!3m2!1svi!2s!4v1678888888888!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bản đồ địa chỉ quán"
        ></iframe>
      </div>
      
      {/* Info Section */}
      <div id="order" className="p-12 md:p-20 flex flex-col justify-center">
        <span className="text-amber-600 font-semibold uppercase tracking-wider">
          Ghé Thăm & Đặt Hàng
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
          Tìm Chúng Tôi
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPinIcon className="h-8 w-8 text-amber-600 shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold text-gray-900">Địa Chỉ</h4>
              <p className="text-lg text-gray-700">
                123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <ClockIcon className="h-8 w-8 text-amber-600 shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold text-gray-900">Giờ Mở Cửa</h4>
              <p className="text-lg text-gray-700">
                Thứ 2 - Chủ Nhật: <strong>10:00 - 22:00</strong>
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-12 mb-6">
          Đặt Hàng Qua Ứng Dụng
        </h3>
        <div className="flex space-x-4">
          <a 
            href="#" 
            className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg flex-1 text-center
                       hover:bg-red-600 transition-colors"
          >
            ShopeeFood
          </a>
          <a 
            href="#" 
            className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg flex-1 text-center
                       hover:bg-green-600 transition-colors"
          >
            GrabFood
          </a>
        </div>
      </div>
    </section>
  )
}

