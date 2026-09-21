import { MapPin } from "lucide-react";

export function LocationMap() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Kunjungi Kami</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Nikmati kelezatan pempek asli Palembang langsung dari tempat kami. Tempat yang nyaman untuk berkumpul bersama keluarga dan teman.
            </p>
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full text-primary mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Lokasi Kami</h4>
                <p className="text-gray-600">
                  Ruko JSquare No. 6–8<br />
                  Komplek JCity Medan Johor<br />
                  Kota Medan, Sumatera Utara
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 h-[400px] md:h-[500px]">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative group">
              <iframe
                src="https://maps.google.com/maps?q=Pempek%20Betigo%20JCity%20Medan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Pempek Betigo"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
