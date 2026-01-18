"use client";

import { useState } from "react";
import ImagePreview from "./ImagePreview";

export default function UploadCard() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImage = (e: any) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Upload Satellite Image</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        className="mb-4"
      />

      {preview && <ImagePreview src={preview} />}
    </div>
  );
}
