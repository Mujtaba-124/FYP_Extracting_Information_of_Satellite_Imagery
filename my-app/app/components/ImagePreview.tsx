export default function ImagePreview({ src }: { src: string }) {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-2">Image Preview</p>
      <img
        src={src}
        alt="Satellite"
        className="w-full h-64 object-cover rounded"
      />
    </div>
  );
}
