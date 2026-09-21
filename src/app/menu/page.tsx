import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function MenuPage() {
  const categories = [
    {
      name: "Aneka Pempek",
      items: [
        { name: "Kapal Selam", price: "Rp 27.000", desc: "Pempek besar isi telur", icon: "🥚" },
        { name: "Lenjer Besar", price: "Rp 27.000", desc: "Pempek lenjer ukuran besar", icon: "🥖" },
        { name: "Lenggang Goreng", price: "Rp 21.000", desc: "Pempek lenggang digoreng dengan telur", icon: "🍳" },
        { name: "Model", price: "Rp 27.000", desc: "Pempek tahu dengan kuah kaldu", icon: "🍲" },
        { name: "Tekwan", price: "Rp 27.000", desc: "Sup ikan tenggiri khas Palembang", icon: "🥣" },
      ]
    },
    {
      name: "Aneka Pempek Kecil",
      items: [
        { name: "Kulit", price: "Rp 7.000 / Pcs", desc: "Pempek kulit ikan renyah", icon: "🥨" },
        { name: "Lenjer Kecil", price: "Rp 7.000 / Pcs", desc: "Pempek lenjer ukuran kecil", icon: "🌭" },
        { name: "Keriting", price: "Rp 7.000 / Pcs", desc: "Pempek keriting khas", icon: "🍜" },
        { name: "Adaan", price: "Rp 7.000 / Pcs", desc: "Pempek bulat gurih bersantan", icon: "🍘" },
        { name: "Telur Kecil", price: "Rp 7.000 / Pcs", desc: "Pempek kecil isi telur", icon: "🥚" },
      ]
    },
    {
      name: "Paket Pempek",
      items: [
        { name: "Paket 1", price: "Rp 140.000", desc: "20 Pempek Kecil", icon: "🛍️" },
        { name: "Paket 2", price: "Rp 275.000", desc: "20 PK + 2 LB + 3 KS", icon: "🎁" },
        { name: "Paket 3", price: "Rp 412.000", desc: "28 PK + 4 LB + 4 KS", icon: "🎉" },
      ]
    },
    {
      name: "Betigo Corner (Makanan)",
      items: [
        { name: "Mie Ayam Bakso", price: "Rp 21.000", desc: "Mie ayam nikmat dengan bakso", icon: "🍜" },
        { name: "Bakso Betigo", price: "Rp 21.000", desc: "Bakso kuah khas Betigo", icon: "🍲" },
        { name: "Ketoprak", price: "Rp 21.000", desc: "Ketoprak bumbu kacang legit", icon: "🥗" },
        { name: "Ayam Penyet Komplit", price: "Rp 26.000", desc: "Ayam penyet dengan sambal khas", icon: "🍗" },
        { name: "Nasi Goreng", price: "Rp 21.000", desc: "Nasi goreng spesial", icon: "🍛" },
        { name: "Batagor / Siomay", price: "Rp 23.000", desc: "Batagor atau Siomay bumbu kacang", icon: "🥟" },
      ]
    },
    {
      name: "Aneka Minuman & Juice",
      items: [
        { name: "Es Kacang Merah", price: "Rp 21.000", desc: "Es kacang merah manis segar", icon: "🍧" },
        { name: "Kopi SH Juwara", price: "Rp 16.000", desc: "Kopi signature Betigo", icon: "☕" },
        { name: "Teh Bunga Telang Dingin", price: "Rp 13.000", desc: "Teh bunga telang menyegarkan", icon: "🍹" },
        { name: "Juice Mangga / Alpukat", price: "Rp 17.000", desc: "Jus buah segar murni", icon: "🥭" },
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Full Menu</h1>
          <p className="text-lg text-gray-600">
            Explore our authentic Palembang delicacies. Every item is freshly prepared with premium ingredients.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-secondary">{category.name}</h2>
                <div className="h-px bg-gray-200 flex-1"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col">
                    <div className="h-40 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                      <span className="text-5xl transform group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                      </div>
                      <p className="text-gray-500 mb-6 text-sm flex-1">{item.desc}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                        <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                          <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary/10 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Order?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Get your favorite Pempek delivered straight to your door or book a table for dine-in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/contact" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition-all shadow-md hover:-translate-y-1 inline-flex items-center justify-center gap-2">
               Order via WhatsApp <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
