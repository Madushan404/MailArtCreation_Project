export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
        />

        <button className="w-full bg-[#0A1A2F] text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}
