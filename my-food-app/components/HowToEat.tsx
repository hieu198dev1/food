const steps = [
  {
    step: '01',
    title: 'Làm Ẩm Bánh Tráng',
    description: 'Lấy một tờ bánh tráng, nhúng nhanh qua nước lọc (không nhúng quá lâu) để bánh mềm.',
  },
  {
    step: '02',
    title: 'Thêm Rau & Nem',
    description: 'Xếp rau sống, xoài xanh, dưa leo, chuối chát và cuối cùng là miếng nem nướng lên bánh.',
  },
  {
    step: '03',
    title: 'Cuốn & Chấm',
    description: 'Cuốn chặt tay và thưởng thức ngay cùng nước chấm đậu phộng béo ngậy, thơm lừng.',
  },
]

export default function HowToEat() {
  return (
    <section id="how-to-eat" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold uppercase tracking-wider">
            Bí Quyết
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Cuốn Nem Chuẩn Vị
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((item) => (
            <div key={item.step} className="border border-gray-200 rounded-lg p-8 shadow-lg bg-white">
              <span className="text-6xl font-black text-gradient-amber">
                {item.step}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 my-4">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
