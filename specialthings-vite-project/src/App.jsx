import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  Heart,
  Camera,
  BookOpen,
} from "lucide-react";

const portfolio = [
  {
    title: "Свадебная история",
    text: "Эстетичная съемка и премиальная фотокнига в журнальном стиле.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Альбом новорожденного",
    text: "Нежные семейные воспоминания, оформленные как luxury-архив.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Семейная история",
    text: "Теплые моменты, которые хочется хранить годами.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function App() {
  return (
    <div className="bg-[#f7f4ef] text-neutral-900 overflow-hidden scroll-smooth">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-50 scale-105"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <p className="uppercase tracking-[0.35em] text-white/60 mb-6 text-sm md:text-base">
            Luxury Memory Studio
          </p>

          <h1 className="text-5xl md:text-8xl font-semibold leading-none mb-8">
            ОСОБЕННЫЕ
            <span className="block text-white/70">ВЕЩИ</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10">
            Эстетичные фотосъемки, премиальные фотокниги и семейные архивы,
            которые хочется передавать поколениям.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="rounded-full bg-white text-black px-8 py-4 text-lg hover:scale-105 transition"
            >
              Смотреть портфолио
            </a>

            <a
              href="#contacts"
              className="rounded-full border border-white/30 px-8 py-4 text-lg hover:bg-white/10 transition"
            >
              Рассчитать стоимость
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Camera size={34} />,
              title: "Эстетичная съемка",
              text: "Свет, детали и атмосфера luxury editorials.",
            },
            {
              icon: <BookOpen size={34} />,
              title: "Премиальные альбомы",
              text: "Фотокниги и архивы музейного качества.",
            },
            {
              icon: <Heart size={34} />,
              title: "Семейная ценность",
              text: "Истории, которые остаются с вами навсегда.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-[36px] p-10 shadow-xl"
            >
              <div className="mb-6">{item.icon}</div>

              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

              <p className="text-neutral-500 text-lg leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="uppercase tracking-[0.3em] text-neutral-400 mb-4">
                Portfolio
              </p>

              <h2 className="text-5xl md:text-7xl font-semibold">
                Портфолио
              </h2>
            </div>

            <p className="max-w-xl text-neutral-500 text-lg">
              Luxury-съемки, семейные архивы и эстетичные истории в премиальном
              исполнении.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="group rounded-[40px] overflow-hidden bg-white shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    className="h-[520px] w-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-neutral-500 text-lg leading-relaxed mb-6">
                    {item.text}
                  </p>

                  <button className="flex items-center gap-2 text-lg font-medium">
                    Подробнее <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-[48px] bg-black text-white p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1800&auto=format&fit=crop"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10">
            <p className="uppercase tracking-[0.3em] text-white/50 mb-6">
              Luxury Experience
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold mb-8">
              Создаём воспоминания,
              <span className="block text-white/70">
                которые становятся наследием
              </span>
            </h2>

            <a
              href="#contacts"
              className="inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-5 text-lg hover:scale-105 transition"
            >
              Забронировать съемку
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[48px] p-12 md:p-20 shadow-xl text-center">
          <p className="uppercase tracking-[0.3em] text-neutral-400 mb-6">
            Contacts
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold mb-8">
            Забронируйте проект
          </h2>

          <p className="text-neutral-500 text-xl leading-relaxed mb-10">
            Напишите нам в WhatsApp или Telegram — поможем подобрать стиль,
            формат и эстетику проекта.
          </p>

          <a
            href="https://wa.me/79857637997"
            className="inline-flex items-center gap-3 rounded-full bg-black text-white px-10 py-5 text-lg hover:scale-105 transition"
          >
            <MessageCircle />
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
