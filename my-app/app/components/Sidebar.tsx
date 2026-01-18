export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-6">
      <h2 className="text-xl font-bold mb-6">VLLM System</h2>

      <ul className="space-y-4 text-gray-700">
        <li className="font-semibold">Dashboard</li>
        <li>Upload Image</li>
        <li>Results</li>
        <li>Model Details</li>
      </ul>
    </aside>
  );
}
