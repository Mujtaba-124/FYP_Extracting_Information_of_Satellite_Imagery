// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function SpaceDashboard() {
//   const [image, setImage] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [analyzing, setAnalyzing] = useState(false);

//   const handleUpload = (e: any) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black text-white">
//       {/* STAR BACKGROUND */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.08),transparent_40%)]" />

//       {/* FLOATING PLANETS */}
//       <motion.div
//         animate={{ y: [0, -20, 0] }}
//         transition={{ duration: 6, repeat: Infinity }}
//         className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-indigo-800 shadow-2xl"
//       />

//       <motion.div
//         animate={{ y: [0, 25, 0] }}
//         transition={{ duration: 8, repeat: Infinity }}
//         className="absolute bottom-32 right-24 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-cyan-700 shadow-2xl"
//       />

//       {/* MAIN CONTENT */}
//       <main className="relative z-10 max-w-6xl mx-auto px-6 py-16">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-bold text-center mb-6"
//         >
//           🛰 Vision-Based LLM
//           <span className="block text-blue-400 text-2xl mt-2">
//             Satellite Intelligence Command Center
//           </span>
//         </motion.h1>

//         <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
//           An interactive space-inspired interface for extracting semantic
//           intelligence from satellite imagery using Vision-Language Models.
//         </p>

//         {/* DASHBOARD GRID */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {/* UPLOAD PANEL */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl"
//           >
//             <h2 className="text-xl font-semibold mb-4">🌍 Upload Satellite Image</h2>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleUpload}
//               className="block w-full text-sm text-gray-300 file:bg-blue-600 file:border-none file:px-4 file:py-2 file:rounded-lg file:text-white"
//             />

//             {preview && (
//               <motion.img
//                 src={preview}
//                 alt="Preview"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="mt-6 w-full h-64 object-cover rounded-xl border border-white/10"
//               />
//             )}

//             <button
//               onClick={() => setAnalyzing(true)}
//               className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:opacity-90"
//             >
//               {analyzing ? "🚀 Analyzing Orbit Data..." : "🚀 Launch Analysis"}
//             </button>
//           </motion.div>

//           {/* RESULT PANEL */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl"
//           >
//             <h2 className="text-xl font-semibold mb-4">🧠 AI Intelligence Output</h2>

//             <div className="space-y-4 text-gray-300">
//               <p><strong>Land Type:</strong> Agricultural Zone</p>
//               <p><strong>Detected Objects:</strong> Roads, Fields, Buildings</p>
//               <p><strong>Confidence:</strong> 92%</p>

//               <div className="w-full bg-gray-700 rounded-full h-3">
//                 <div className="bg-green-400 h-3 rounded-full w-[92%]" />
//               </div>

//               <p className="text-sm text-gray-400 mt-4">
//                 The model detected structured land patterns, road connectivity,
//                 and vegetation clusters consistent with agricultural activity.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* FOOTER */}
//         <p className="text-center text-gray-500 text-sm mt-16">
//           Final Year Project · Vision-Language Models · Satellite Intelligence
//         </p>
//       </main>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import EarthGlobe from "./EarthGlobe";

export default function SpaceDashboard() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* STAR BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.08),transparent_40%)]" />

      {/* FLOATING PLANETS */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-indigo-800 shadow-2xl"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-32 right-24 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-cyan-700 shadow-2xl"
      />

      {/* MAIN CONTENT */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          🛰 Vision-Based LLM
          <span className="block text-blue-400 text-2xl mt-2">
            Satellite Intelligence Command Center
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          An interactive space-inspired interface for extracting semantic
          intelligence from satellite imagery using Vision-Language Models.
        </p>

        {/* EARTH HOLOGRAM SECTION (ONLY ONE EARTH) */}
        <div className="relative flex justify-center items-center mb-16">
          <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-3xl" />
          <EarthGlobe />
        </div>

        {/* DASHBOARD GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* UPLOAD PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-4">
              Upload Satellite Image
            </h2>

            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="block w-full text-sm text-gray-300 file:bg-blue-600 file:border-none file:px-4 file:py-2 file:rounded-lg file:text-white"
            />

            {preview && (
              <motion.img
                src={preview}
                alt="Preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 w-full h-64 object-cover rounded-xl border border-white/10"
              />
            )}

            <button
              onClick={() => setAnalyzing(true)}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:opacity-90"
            >
              {analyzing ? "Analyzing Orbit Data..." : "Launch Analysis"}
            </button>
          </motion.div>

          {/* RESULT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-4">
              AI Intelligence Output
            </h2>

            <div className="space-y-4 text-gray-300">
              <p><strong>Land Type:</strong> Agricultural Zone</p>
              <p><strong>Detected Objects:</strong> Roads, Fields, Buildings</p>
              <p><strong>Confidence:</strong> 92%</p>

              <div className="w-full bg-gray-700 rounded-full h-3">
                <div className="bg-green-400 h-3 rounded-full w-[92%]" />
              </div>

              <p className="text-sm text-gray-400 mt-4">
                The model detected structured land patterns, road connectivity,
                and vegetation clusters consistent with agricultural activity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <p className="text-center text-gray-500 text-sm mt-16">
          Final Year Project · Vision-Language Models · Satellite Intelligence
        </p>
      </main>
    </div>
  );
}
