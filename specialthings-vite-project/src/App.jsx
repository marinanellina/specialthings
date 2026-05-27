
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f3ef] text-neutral-900">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-6">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl text-center"
        >
          <p className="uppercase tracking-[0.3em] text-white/70 mb-6">
            Luxury Memory Studio
          </p>

          <h1 className="text-6xl md:text-8xl font-semibold leading-none mb-8">
            ОСОБЕННЫЕ
            <span className="block text-white/70">ВЕЩИ</span>
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Премиальные фотокниги, семейные архивы и эстетичные воспоминания.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contacts"
              className="rounded-full bg-white text-black px-8 py-4 text-lg"
            >
              Рассчитать стоимость
            </a>

            <a
              href="#portfolio"
              className="rounded-full border border-white/30 px-8 py-4 text-lg"
            >
              Смотреть портфолио
            </a>
          </div>
        </motion.div>
      </section>

      <section id="portfolio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-semibold mb-16 text-center">
            Портфолио
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((item) => (
              <div key={item} className="rounded-[32px] overflow-hidden bg-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-[420px] object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    Luxury Album
                  </h3>

                  <p className="text-neutral-500">
                    Editorial aesthetics и premium photobook дизайн.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-6">
        <div className="max-w-4xl mx-auto rounded-[40px] bg-white p-16 text-center shadow-xl">
          <h2 className="text-5xl font-semibold mb-6">
            Забронируйте съёмку
          </h2>

          <p className="text-neutral-500 text-xl mb-10">
            WhatsApp • Telegram • Luxury photobooks
          </p>

          <a
            href="https://wa.me/79857637997"
            className="inline-flex items-center gap-3 rounded-full bg-black text-white px-8 py-5 text-lg"
          >
            <MessageCircle />
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
