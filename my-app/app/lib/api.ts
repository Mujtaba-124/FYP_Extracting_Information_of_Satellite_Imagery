export async function analyzeSatelliteImage(image: File) {
  const formData = new FormData();
  formData.append("image", image);

  const res = await fetch("http://127.0.0.1:8000/analyze", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to analyze image");
  }

  return res.json();
}