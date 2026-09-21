import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section for About */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            From the heart of Palembang to your plate, Pempek Betigo has been serving authentic flavors and preserving culinary traditions since 1999.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative h-[500px] bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center border border-gray-200">
               <span className="text-8xl">👩‍🍳</span>
            </div>
            
            <div className="w-full md:w-1/2">
              <span className="text-primary font-semibold tracking-wider uppercase mb-2 block">The Heritage</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">A Legacy of Authentic Taste</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pempek Betigo started as a small family kitchen in Palembang. Our founder, Ibu Ratna, used a recipe that had been passed down from her grandmother, focusing strictly on quality and authentic flavor.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Over two decades later, we still use the exact same recipe. We never compromise on our ingredients, ensuring every bite takes you straight to the heart of South Sumatra.
              </p>
              
              <div className="space-y-4">
                {[
                  "100% Pure Tenggiri Fish (No Substitutes)",
                  "Signature Cuko naturally brewed with Palm Sugar",
                  "Made fresh daily without preservatives",
                  "Authentic Palembang traditional methods"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary" size={24} />
                    <span className="text-gray-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet the Team Behind the Kitchen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
             {[1,2,3,4].map((i) => (
               <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                     {["🧑‍🍳", "👨‍🍳", "👩‍🍳", "👨‍🍳"][i-1]}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Chef Master</h4>
                  <p className="text-primary text-sm font-medium mb-3">Specialist</p>
                  <p className="text-gray-500 text-sm">Dedicated to making the best quality pempek daily.</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
