export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center text-[#0A1A2F] mb-6">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-6 rounded"
        />

        <button className="w-full bg-[#0A1A2F] text-[#C9A66B] py-2 rounded font-semibold hover:opacity-90">
          Login
        </button>
      </div>
    </div>
  );
}
