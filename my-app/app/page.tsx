// import Image from "next/image";
import ImageUploader from "./components/ImageUploader";
import Sidebar from "./components/Sidebar";
import UploadCard from "./components/UploadCard";
import ResultSummary from "./components/ResultSummary";
import ModelInfo from "./components/ModelInfo";

// export default function Home() {
//   return ( 
//     <main className="min-h-screen bg-gray-100 p-10">
//       <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />

//       <main className="flex-1 p-6 space-y-6">
//         <h1 className="text-2xl font-bold">
//           Satellite Image Understanding Dashboard
//         </h1>

//         <UploadCard />
//         <ResultSummary />
//         <ModelInfo />
//       </main>
//     </div>
//     </main>
    
//   );
// }

import SpaceDashboard from "./components/SpaceDashboard";

export default function Home() {
  return <SpaceDashboard />;
}


