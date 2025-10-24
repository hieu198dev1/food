const reviews = [
  {
    quote: "Nước chấm ở đây là số một! Không nơi nào sánh bằng. Nem nướng thơm, rau sạch và đầy đặn.",
    name: "Chị Lan Anh",
    source: "Foody Review",
    img: "https://placehold.co/100x100/333333/ffffff?text=LA"
  },
  {
    quote: "Mình là fan ruột của quán. Tuần nào cũng phải ăn 2 lần. Giá cả hợp lý mà chất lượng thì tuyệt vời.",
    name: "Anh Minh Đức",
    source: "Google Maps",
    img: "https://placehold.co/100x100/333333/ffffff?text=MD"
  },
  {
    quote: "Không gian quán sạch sẽ, phục vụ nhanh nhẹn. Mẹt nem đầy ú ụ, ăn no căng. Sẽ quay lại nhiều lần!",
    name: "Bạn Thu Trang",
    source: "Facebook",
    img: "https://placehold.co/100x100/333333/ffffff?text=TT"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-amber-50">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold uppercase tracking-wider">
            Khách Hàng Nói Gì
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Đánh Giá Từ Thực Khách
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.name} 
              className="bg-white p-8 rounded-lg shadow-lg text-center
                         border-t-4 border-amber-500"
            >
              <p className="text-lg italic text-gray-700 before:content-['“'] after:content-['”']">
                {review.quote}
              </p>
              <img 
                src={review.img} 
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mt-6 mb-4 border-4 border-amber-100"
                // onError={(e) => (e.currentTarget.src = 'https://placehold.co/100x100')}
              />
              <h4 className="text-xl font-bold text-gray-900">{review.name}</h4>
              <span className="text-sm text-gray-500">{review.source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
