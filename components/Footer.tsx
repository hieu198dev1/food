export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto max-w-7xl px-6 text-center">
        <h3 className="text-3xl font-black text-amber-500 mb-4">
          Bếp Việt
        </h3>
        <p className="text-lg mb-6">
          Nem Nướng Nha Trang - Đậm Vị Truyền Thống
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Tiktok</a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bếp Việt. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
