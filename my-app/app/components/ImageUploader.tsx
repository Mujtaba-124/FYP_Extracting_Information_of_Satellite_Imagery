"use client";

import { useState } from "react";
import ResultPanel from "./ResultPanel";

export default function ImageUploader() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const analyzeImage = async () => {
    if (!image) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    const res = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        className="mb-4"
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}

      <button
        onClick={analyzeImage}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Analyzing..." : "Analyze Satellite Image"}
      </button>

      {result && <ResultPanel result={result} />}
    </div>
  );
}