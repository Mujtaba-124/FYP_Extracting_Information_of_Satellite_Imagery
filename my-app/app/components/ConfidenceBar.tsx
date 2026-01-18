export default function ConfidenceBar({ value }: { value: number }) {
  return (
    <div className="mt-2">
      <p className="text-sm text-gray-600 mb-1">
        Confidence Score: {(value * 100).toFixed(1)}%
      </p>

      <div className="w-full bg-gray-200 rounded">
        <div
          className="bg-green-500 text-white px-2 py-1 rounded"
          style={{ width: `${value * 100}%` }}
        >
          {(value * 100).toFixed(0)}%
        </div>
      </div>
    </div>
  );
}
