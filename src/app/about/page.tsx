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
              <span className="text-primary font-semibold tracking-wider uppercase mb-2 block">Sejarah Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Berdiri Sejak 2019</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pempek Betigo merupakan usaha kuliner yang berdiri sejak tahun 2019 dan berlokasi di Ruko JSquare No. 6–8, Komplek JCity Medan Johor, Kota Medan. 
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nama <strong className="text-gray-900">"Betigo"</strong> berasal dari kata <em>bertiga</em>, yang mencerminkan tiga pendiri utamanya. Didirikan karena melihat potensi pasar yang menjanjikan di kawasan strategis tersebut, kami menawarkan berbagai olahan pempek khas Palembang dengan cita rasa autentik.
              </p>
              
              <div className="space-y-4">
                {[
                  "Menyajikan Makanan Berkualitas",
                  "Mempertahankan Cita Rasa Khas",
                  "Memberikan Pelayanan Terbaik"
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pendiri Kami</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Visi kami adalah menjadi restoran pempek yang terkenal dan menjadi pilihan utama masyarakat di Kota Medan.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
             {["Hendi Rukmana", "Hartono", "Apriyanto"].map((founder, i) => (
               <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center w-full max-w-[280px]">
                  <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center text-4xl">
                     {["👔", "💼", "📈"][i]}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{founder}</h4>
                  <p className="text-primary text-sm font-medium mb-3">Co-Founder</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
