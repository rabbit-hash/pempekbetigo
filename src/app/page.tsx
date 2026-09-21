import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Star, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          {/* We use a solid color/gradient fallback with a decorative pattern since we don't have an image */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-gray-900 opacity-95"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
          <div className="max-w-2xl text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold mb-6 tracking-wide uppercase">
              Berdiri Sejak 2019
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Taste the <span className="text-primary">Authentic</span> <br />
              Palembang Heritage
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Premium Pempek made from 100% fresh tenggiri fish, served with our signature rich and perfectly balanced sweet-spicy cuko.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/menu" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                View Menu <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center">
                Book a Table
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block relative w-full max-w-lg h-[500px]">
             {/* Decorative Element mimicking a plate of food */}
             <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-full animate-pulse blur-3xl"></div>
             <div className="absolute inset-4 rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-white text-center p-8">
                   <p className="text-2xl font-bold mb-2 text-primary">Best Seller</p>
                   <p className="text-lg text-gray-300">Kapal Selam Premium</p>
                   <div className="mt-6 flex justify-center">
                      <div className="w-32 h-32 rounded-full border-4 border-primary/50 border-dashed flex items-center justify-center">
                         <span className="text-4xl">🥟</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Pempek Betigo?</h2>
            <p className="text-foreground/70 text-lg">We compromise on nothing to bring you the best culinary experience.</p>
          </div>
          
          <div className="relative w-full flex overflow-hidden group">
            <div className="flex w-max gap-8 px-4 animate-[marqueeRight_40s_linear_infinite] hover:[animation-play-state:paused]">
              {[1, 2, 3, 4].map((set) => (
                <div key={set} className="flex gap-8 contents">
                  <div className="bg-white w-[350px] p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Star className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Premium Ingredients</h3>
                    <p className="text-gray-600 leading-relaxed">Made using only the freshest wild-caught Tenggiri fish and premium tapioca flour.</p>
                  </div>
                  <div className="bg-white w-[350px] p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <ShieldCheck className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Authentic Recipe</h3>
                    <p className="text-gray-600 leading-relaxed">Cuko khas kami dibuat dengan keseimbangan rasa manis, asam, dan pedas yang sempurna.</p>
                  </div>
                  <div className="bg-white w-[350px] p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Clock className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Freshly Made</h3>
                    <p className="text-gray-600 leading-relaxed">Prepared fresh every morning to ensure the best chewy texture and flavor.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Favorites</h2>
              <p className="text-gray-600 text-lg">Try our most loved dishes that keep our customers coming back.</p>
            </div>
            <Link href="/menu" className="mt-6 md:mt-0 text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              See Full Menu <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Kapal Selam', price: 'Rp 27.000', desc: 'Pempek besar isi telur', icon: '🥚' },
                { name: 'Lenjer Besar', price: 'Rp 27.000', desc: 'Pempek lenjer ukuran besar', icon: '🥖' },
                { name: 'Adaan', price: 'Rp 7.000 / Pcs', desc: 'Pempek bulat gurih bersantan', icon: '🍘' },
                { name: 'Tekwan', price: 'Rp 27.000', desc: 'Sup ikan tenggiri khas Palembang', icon: '🍲' },
              ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                  <span className="text-6xl transform group-hover:scale-110 transition-transform duration-500">{item.icon}</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  </div>
                  <p className="text-gray-500 mb-4 text-sm">{item.desc}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                    <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
