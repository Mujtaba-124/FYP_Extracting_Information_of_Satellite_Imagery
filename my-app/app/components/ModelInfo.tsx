export default function ModelInfo() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Model Information</h2>

      <ul className="text-gray-700 space-y-1">
        <li><strong>Vision Encoder:</strong> BLIP-2</li>
        <li><strong>Language Model:</strong> FLAN-T5</li>
        <li><strong>Dataset:</strong> EuroSAT, Sentinel-2</li>
        <li><strong>Task:</strong> Semantic Information Extraction</li>
      </ul>
    </div>
  );
}
