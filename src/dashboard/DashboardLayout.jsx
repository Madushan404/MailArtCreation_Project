import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A1A2F] text-white p-6">
        <h2 className="text-2xl font-bold mb-6 text-[#C9A66B]">
          Admin Dashboard
        </h2>

        <nav className="space-y-4">
          <Link to="/dashboard" className="block hover:text-[#C9A66B]">
            Dashboard Home
          </Link>
          <Link to="/dashboard/products" className="block hover:text-[#C9A66B]">
            Products
          </Link>
          <Link to="/dashboard/add-product" className="block hover:text-[#C9A66B]">
            Add Product
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
