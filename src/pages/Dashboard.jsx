import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <p className="mt-4 text-gray-600">
        Manage products, orders and customers here.
      </p>

      <button
        onClick={logout}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
