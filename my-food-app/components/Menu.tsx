import React from 'react'; // Thêm import React

// Dữ liệu mẫu cho thực đơn
const menuItems = [
  {
    title: 'Mẹt Nem Nướng Đặc Biệt',
    description: 'Mẹt đầy đặn gồm nem nướng thơm lừng, bánh tráng giòn, rau sống tươi xanh và nước chấm độc quyền.',
    price: '120.000đ',
    img: 'https://cdn.xanhsm.com/2025/02/d34718f9-nem-nuong-binh-thanh-8.jpg' // Ảnh món nem nướng tổng thể đẹp mắt
  },
  {
    title: 'Nem Nướng Thêm (5 Que)',
    description: 'Thêm phần nem nướng vàng óng, dai ngon, đậm đà gia vị, nướng trên than hồng.',
    price: '50.000đ',
    img: 'https://www.huongnghiepaau.com/wp-content/uploads/2019/01/nem-nuong-mien-tay620x400.jpg' // Ảnh cận cảnh nem nướng vàng ươm
  },
  {
    title: 'Nước Chấm Đậu Phộng',
    description: 'Nước chấm sền sệt, béo ngậy từ đậu phộng rang, pha chế theo công thức gia truyền đặc biệt.',
    price: '15.000đ',
    img: 'https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2024/1/7/h3-1704597770429201548847-62-0-562-800-crop-17045980130421979153482.jpg' // Ảnh chén nước chấm đẹp mắt
  },
  {
    title: 'Combo Đặc Biệt Gia Đình',
    description: 'Mẹt nem nướng lớn, thêm 10 nem nướng, 2 phần nước chấm và trà đá miễn phí cho 4 người.',
    price: '250.000đ',
    img: 'https://nemnuongdiba.com/wp-content/uploads/2018/07/timthumb-960x750.jpg' // Ảnh món ăn với nhiều người đang dùng
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-amber-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold uppercase tracking-wider">
            Thực Đơn
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Hương Vị Hấp Dẫn
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item) => (
            <div 
              key={item.title} 
              className="bg-white rounded-lg shadow-xl overflow-hidden
                         transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <span className="text-2xl font-black text-amber-600">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

