export default function ResultPanel({ result }: { result: any }) {
  return (
    <div className="mt-6 bg-gray-50 p-4 rounded">
      <h2 className="text-xl font-semibold mb-3">Extracted Information</h2>

      <pre className="bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
}