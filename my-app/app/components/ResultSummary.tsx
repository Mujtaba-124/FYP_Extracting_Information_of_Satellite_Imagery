import ConfidenceBar from "./ConfidenceBar";

export default function ResultSummary() {
  // Dummy data (replace with backend output)
  const result = {
    landType: "Agricultural",
    confidence: 0.92,
    objects: ["Fields", "Roads", "Buildings"],
    description:
      "The satellite image shows agricultural land with road networks and sparse settlements.",
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Analysis Result</h2>

      <p className="mb-2">
        <strong>Land Type:</strong> {result.landType}
      </p>

      <ConfidenceBar value={result.confidence} />

      <p className="mt-3">
        <strong>Detected Objects:</strong>{" "}
        {result.objects.join(", ")}
      </p>

      <p className="mt-3 text-gray-700">
        <strong>Model Explanation:</strong><br />
        {result.description}
      </p>
    </div>
  );
}
