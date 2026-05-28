import {
  ChevronLeft,
  ChevronRight,
  Menu,
  MessageCircle,
  ShoppingBag,
  Image,
  Gift,
  Shirt,
  Sparkles,
  Heart,
  ArrowUpRight
} from 'lucide-react'

import { useState } from 'react'

const translations = {
  ru: {
    brand: 'ОСОБЕННЫЕ ВЕЩИ',
    label: 'Студия воспоминаний',
    portfolio: 'Портфолио',
    contacts: 'Контакты',
    services: 'Услуги',
    process: 'Процесс',
    reviews: 'Отзывы',
    heroTitle: 'ОСОБЕННЫЕ',
    heroSubtitle: 'ВЕЩИ',
    heroText:
      'Эстетичная фотосъёмка, премиальный дизайн и памятные вещи, которые хочется хранить годами.',
    discuss: 'Рассчитать стоимость',
    viewWorks: 'Смотреть портфолио',
    moreThanAlbums: 'Больше,',
    moreThanAlbums2: 'чем альбомы',
    memories:
      'Эстетичные воспоминания, персональные подарки и предметы, которые хочется хранить годами.',
    portfolioTitle: 'Твой',
    portfolioTitle2: 'альбом',
    touchTitle: 'Воспоминания',
    touchTitle2: 'которые можно трогать',
    touchText:
      'Мы создаём не просто выпускные альбомы. Это семейные архивы, интерьерные объекты и персональные коллекции.',
    booking: 'Забронируйте',
    booking2: 'дату съёмки',
    bookingText:
      'Напишите нам в WhatsApp или Telegram — поможем подобрать стиль и формат проекта.',
    memoryExperience: 'Эмоции в деталях',
    specialMemories: 'Особенные воспоминания',
    products: [
      {
        title: 'Памятные альбомы',
        text: 'Премиальный дизайн альбомов, эстетика минимализма'
      },
      {
        title: 'Интерьер и постеры',
        text: 'Фотоколлажи, фото и постеры в рамке, интерьерные постеры.'
      },
      {
        title: 'Фото-подарки',
        text: 'Кружки, подушки, пазлы и семейные подарки.'
      },
      {
        title: 'Мой мерч',
        text: 'Худи, футболки и персональный мерч с уникальным дизайном.'
      }
    ],
    albums: [
      {
        category: 'Детский сад',
        title: 'Первые истории'
      },
      {
        category: 'Школа',
        title: 'Моменты юности'
      },
      {
        category: 'Университет',
        title: 'Новая глава'
      },
      {
        category: 'На работе',
        title: 'AT WORK'
      },
      {
        category: 'Свадьба',
        title: 'Wedding Day'
      },
      {
        category: 'Золотая свадьба',
        title: 'Golden Anniversary'
      },
      {
        category: 'Семейные путешествия',
        title: 'Family Travels'
      }
    ],
    features: ['Премиальная печать', 'Эстетика editorial', 'Luxury материалы']
  },
  en: {
    brand: 'SPECIAL THINGS',
    label: 'Memory Studio',
    portfolio: 'Portfolio',
    contacts: 'Contacts',
    services: 'Services',
    process: 'Process',
    reviews: 'Reviews',
    heroTitle: 'SPECIAL',
    heroSubtitle: 'THINGS',
    heroText:
      'Aesthetic photography, luxury design and meaningful keepsakes made to last for years.',
    discuss: 'Calculate Price',
    viewWorks: 'View Portfolio',
    moreThanAlbums: 'More',
    moreThanAlbums2: 'than albums',
    memories:
      'Elegant memories, personalized gifts and meaningful objects designed to stay forever.',
    portfolioTitle: 'Your',
    portfolioTitle2: 'album',
    touchTitle: 'Memories',
    touchTitle2: 'you can touch',
    touchText:
      'We create more than graduation albums. We design family archives, interior pieces and personal collections.',
    booking: 'Book your',
    booking2: 'shooting date',
    bookingText:
      'Contact me via WhatsApp or Telegram — I will help you choose the perfect style and format.',
    memoryExperience: 'Memory Experience',
    specialMemories: 'Special memories',
    products: [
      {
        title: 'Memory Sets',
        text: 'Elegant memory sets with albums, mini copies and meaningful keepsakes for families.'
      },
      {
        title: 'Wall Art & Prints',
        text: 'Photo collages, framed prints and photos, and interior posters.'
      },
      {
        title: 'Photo Gifts',
        text: 'Mugs, pillows, puzzles and meaningful family gifts.'
      },
      {
        title: 'My Merch',
        text: 'Hoodies, t-shirts and personalized merchandise with unique designs.'
      }
    ],
    albums: [
      {
        category: 'Kindergarten',
        title: 'First Memories'
      },
      {
        category: 'School',
        title: 'Youth Memories'
      },
      {
        category: 'University',
        title: 'New Chapter'
      }
    ],
    features: ['Luxury printing', 'Editorial aesthetics', 'Premium materials']
  }
}

export default function GraduationAlbumLanding() {
  const [language, setLanguage] = useState('ru')
  const t = translations[language]

  const [activeAlbum, setActiveAlbum] = useState(0)
  const [activePage, setActivePage] = useState(0)

  const albums = [
    {
      category: language === 'ru' ? 'Новорожденный' : 'Newborn',
      title: language === 'ru' ? 'Первые дни жизни' : 'First Days of Life',
      cover:
        'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop'
    },
    {
      category: language === 'ru' ? 'Детский сад' : 'Kindergarten',
      title: language === 'ru' ? 'Первые истории' : 'First Memories',
      cover:
        'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop'
    },
    {
      category: language === 'ru' ? 'Школа' : 'School',
      title: language === 'ru' ? 'Моменты юности' : 'Youth Memories',
      cover:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop'
    },
    {
      category: language === 'ru' ? 'Университет' : 'University',
      title: language === 'ru' ? 'Новая глава' : 'New Chapter',
      cover:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop'
    },
    {
      category: language === 'ru' ? 'На работе' : 'AT WORK',
      title: language === 'ru' ? 'Рабочие моменты' : 'Working Moments',
      cover:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'
    },
    {
      category: language === 'ru' ? 'Свадьба' : 'Wedding',
      title: language === 'ru' ? 'Начало нашей истории' : 'Beginning of Our Story',
      cover:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop'
    },
    {
      category: language === 'ru' ? 'Золотая свадьба' : 'Golden Anniversary',
      title: language === 'ru' ? '50 лет вместе' : '50 Years Together',
      cover:
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop'
    },
    {
      category: language === 'ru' ? 'Семейные путешествия' : 'Family Travels',
      title: language === 'ru' ? 'Вместе по миру' : 'Around the World Together',
      cover:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  const products = [
    {
      icon: ShoppingBag,
      title: 'Memory Sets',
      text: 'Эстетичные наборы воспоминаний: альбомы, мини-копии и памятные вещи для семьи.',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop'
    },
    {
      icon: Image,
      title: 'Wall Art & Prints',
      text: 'Фотоколлажи, фото и постеры в рамке, интерьерные постеры.',
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop'
    },
    {
      icon: Gift,
      title: 'Photo Gifts',
      text: 'Кружки, подушки, пазлы и семейные подарки.',
      image:
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop'
    },
    {
      icon: Shirt,
      title: 'My Merch',
      text: 'Худи, футболки и персональный мерч с уникальным дизайном.',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-[#f5f3ef] text-neutral-900 overflow-hidden scroll-smooth">
      <a
        href="https://wa.me/79857637997"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-black text-white flex items-center justify-center shadow-2xl hover:scale-110 transition"
      >
        <MessageCircle size={28} />
      </a>

      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-5">
        <div className="max-w-7xl mx-auto rounded-full border border-white/30 bg-white/50 backdrop-blur-2xl px-7 py-4 flex items-center justify-between shadow-lg">
          <h2 className="text-lg font-semibold tracking-tight">
            {t.brand}
          </h2>
<div className="flex md:hidden items-center gap-2 mt-4">
  <button
    onClick={() => setLanguage('ru')}
    className={`px-3 py-1 rounded-full text-xs ${
      language === 'ru'
        ? 'bg-black text-white'
        : 'bg-white text-black'
    }`}
  >
    RU
  </button>

  <button
    onClick={() => setLanguage('en')}
    className={`px-3 py-1 rounded-full text-xs ${
      language === 'en'
        ? 'bg-black text-white'
        : 'bg-white text-black'
    }`}
  >
    EN
  </button>
</div>
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8 text-sm text-neutral-600">
            <a href="#portfolio" className="hover:text-black transition">
              {t.portfolio}
            </a>
            <a href="#services" className="hover:text-black transition">
              {t.services}
            </a>
            <a href="#process" className="hover:text-black transition">
              {t.process}
            </a>
            <a href="#reviews" className="hover:text-black transition">
              {t.reviews}
            </a>
            <a href="#contacts" className="hover:text-black transition">
              {t.contacts}
            </a>
          </nav>

            <div className="flex items-center rounded-full border border-neutral-200 overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => setLanguage('ru')}
                className={`px-4 py-2 text-xs tracking-[0.2em] transition ${
                  language === 'ru'
                    ? 'bg-black text-white'
                    : 'bg-white text-neutral-500'
                }`}
              >
                RU
              </button>

              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-xs tracking-[0.2em] transition ${
                  language === 'en'
                    ? 'bg-black text-white'
                    : 'bg-white text-neutral-500'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <button className="md:hidden h-11 w-11 rounded-full bg-black text-white flex items-center justify-center">
            <Menu size={18} />
          </button>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-white/5" />

        <div className="absolute top-1/2 -translate-y-1/2 right-8 z-20 hidden xl:flex flex-col gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-500"
          >
            <MessageCircle size={22} />
          </a>

          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-500"
          >
            <Image size={22} />
          </a>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 w-full">
          <div className="w-full rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-2xl p-10 md:p-14 shadow-2xl space-y-8 transition-all duration-700">

            <h1 className="text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
  <span className="text-white">{t.heroTitle}</span>{' '}
  <span className="text-white/70">{t.heroSubtitle}</span>
</h1>

            <div className="flex flex-wrap gap-3 text-sm text-white/80 uppercase tracking-[0.2em]">
              <span className="rounded-full border border-white/20 px-4 py-2 bg-white/10">{language === 'ru' ? 'Премиальные фотокниги' : 'Luxury photobooks'}</span>
              <span className="rounded-full border border-white/20 px-4 py-2 bg-white/10">{language === 'ru' ? 'Журнальная эстетика' : 'Editorial style'}</span>
              <span className="rounded-full border border-white/20 px-4 py-2 bg-white/10">{language === 'ru' ? 'Премиальное качество' : 'Premium quality'}</span>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button className="rounded-full bg-white text-black px-10 py-5 text-lg font-medium hover:scale-105 transition duration-300 shadow-2xl">
                {t.discuss}
              </button>

              <a
                href="#portfolio"
                className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-5 text-lg font-light hover:bg-white hover:text-black transition duration-500 inline-flex items-center gap-3"
              >
                {language === 'ru' ? 'Смотреть портфолио' : 'Explore portfolio'}
                <ArrowUpRight size={20} />
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="rounded-[24px] border border-white/10 bg-white/10 backdrop-blur-xl p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-white/60 mb-3">{language === 'ru' ? 'ПРЕМИУМ' : 'Luxury'}</p>
                <p className="text-white/90 leading-relaxed">{language === 'ru' ? 'Премиальные фотокниги с журнальной эстетикой и тактильными материалами.' : 'Premium photobooks with editorial aesthetics and tactile materials.'}</p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/10 backdrop-blur-xl p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-white/60 mb-3">{language === 'ru' ? 'СЕМЕЙНЫЙ АРХИВ' : 'Family archive'}</p>
                <p className="text-white/90 leading-relaxed">{language === 'ru' ? 'Воспоминания, превращённые в семейные ценности на долгие годы.' : 'Meaningful memories transformed into timeless collectible objects.'}</p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/10 backdrop-blur-xl p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-white/60 mb-3">{language === 'ru' ? 'ЭСТЕТИКА' : 'Editorial'}</p>
                <p className="text-white/90 leading-relaxed">{language === 'ru' ? 'Минималистичный дизайн, вдохновлённый современными fashion и editorial журналами.' : 'Minimalistic layouts inspired by modern fashion and design magazines.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-400 mb-4">
            {t.label}
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-none mb-8">
            {t.moreThanAlbums}
            <span className="block text-neutral-400">{t.moreThanAlbums2}</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-neutral-500 leading-relaxed font-light">
            {t.memories}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={t.products[index].title}
                className="group rounded-[36px] overflow-hidden bg-[#f8f6f2] border border-neutral-200 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition duration-500"
              >
                <div className="relative overflow-hidden h-[300px]">
                  <img
                    src={item.image}
                    alt={t.products[index].title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div className="absolute top-5 left-5 h-12 w-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {t.products[index].title}
                  </h3>

                  <p className="text-neutral-500 leading-relaxed font-light text-lg">
                    {t.products[index].text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id="portfolio" className="bg-[#f8f6f2] py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_top,black_1px,transparent_1px)] bg-[length:32px_32px]" />
        <div className="max-w-[1500px] mx-auto">
          <div className="relative z-10 text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-serif tracking-tight text-neutral-900 mb-6">
              {t.portfolioTitle}
              <span className="block">{t.portfolioTitle2}</span>
            </h2>

            <p className="text-2xl text-neutral-400 font-light">
              {language === 'ru'
                ? 'Выбери историю, которую хочется сохранить навсегда'
                : 'Choose the story you want to keep forever'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 auto-rows-fr">
            {albums.map((album, albumIndex) => {
              const wideCard = false

              return (
                <button
                  key={albumIndex}
                  onClick={() => {
                    setActiveAlbum(albumIndex)
                    setActivePage(0)
                  }}
                  className={`group bg-white overflow-hidden border border-neutral-200 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)] ${
                    wideCard
                      ? 'md:col-span-2 xl:col-span-2 rounded-[24px]'
                      : 'rounded-[24px]'
                  } ${
                    activeAlbum === albumIndex
                      ? 'ring-1 ring-black/20 shadow-[0_20px_60px_rgba(0,0,0,0.08)]'
                      : ''
                  }`}
                >
                  <div className={`overflow-hidden ${wideCard ? 'aspect-[2/1]' : 'aspect-[4/5]'}`}>
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700"
                    />
                  </div>

                  <div className="p-7 flex flex-col items-center text-center min-h-[170px] justify-center bg-[#fbfaf8]">
                    <h3 className="text-4xl font-serif tracking-tight text-neutral-900 mb-3 leading-none">
                      {album.category}
                    </h3>

                    <p className="text-neutral-400 text-xl font-light mb-5">
                      {album.title}
                    </p>

                    <div className="text-[#c9a27e] text-3xl">
                      {albumIndex === 0 && '🍼'}
                      {albumIndex === 1 && '🧸'}
                      {albumIndex === 2 && '📖'}
                      {albumIndex === 3 && '🎓'}
                      {albumIndex === 4 && '💼'}
                      {albumIndex === 5 && '💍'}
                      {albumIndex === 6 && '♡'}
                      {albumIndex === 7 && '✈'}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section id="instagram" className="py-28 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <p className="uppercase tracking-[0.35em] text-sm text-neutral-400 mb-4">
                {language === 'ru' ? 'СОЦИАЛЬНЫЕ СЕТИ' : 'SOCIAL'}
              </p>

              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-none">
                {language === 'ru' ? 'Следите за' : 'Follow the'}
                <span className="block text-neutral-400">
                  {language === 'ru' ? 'эстетикой' : 'aesthetic'}
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-black text-white px-7 py-4 inline-flex items-center gap-3 hover:scale-105 transition"
              >
                <MessageCircle size={20} />
                {language === 'ru' ? 'Инстаграм' : 'Instagram'}
              </a>

              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-200 bg-white px-7 py-4 inline-flex items-center gap-3 hover:bg-neutral-100 transition"
              >
                <Image size={20} />
                {language === 'ru' ? 'Пинтерест' : 'Pinterest'}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {albums.slice(0, 4).map((album, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] aspect-[4/5]"
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-2">
                    {language === 'ru' ? 'Эстетика бренда' : 'Social aesthetic'}
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight">
                    {album.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-32 px-6 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm tracking-[0.2em] uppercase text-neutral-500 shadow-lg">
              <Sparkles size={16} />
              {t.memoryExperience}
            </div>

            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
              Воспоминания
              <span className="block text-neutral-400">
                в твоих руках
              </span>
            </h2>

            <div className="max-w-2xl">
              <p className="text-2xl text-neutral-600 leading-relaxed font-light">
                {language === 'ru' ? 'Создаем семейные архивы, выпускные и памятные альбомы в премиальном качестве.' : 'We create family archives, graduation and memory albums in premium quality.'}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 pt-4">
              {t.features.map((item) => (
                <div
                  key={item}
                  className="rounded-[28px] bg-white border border-neutral-200 p-6 shadow-sm"
                >
                  <Heart className="mb-4" size={22} />
                  <p className="font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-5 pt-10">
              <div className="rounded-[30px] bg-white p-7 border border-neutral-200">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3">01</p>
                <h4 className="text-2xl font-semibold mb-3">Концепция и стиль</h4>
                <p className="text-neutral-500">Подбираем визуальную эстетику, образы и формат будущего альбома.</p>
              </div>

              <div className="rounded-[30px] bg-white p-7 border border-neutral-200">
                <p className="text-sm uppercase tracking-[0.2em] text-neutral-400 mb-3">02</p>
                <h4 className="text-2xl font-semibold mb-3">Съёмка и дизайн</h4>
                <p className="text-neutral-500">Создаем эстетичные кадры и превращаем их в premium photobook.</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-[42px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop"
              alt="memory"
              className="w-full h-[760px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 p-10 text-white max-w-xl">
              <p className="uppercase tracking-[0.3em] text-sm text-white/70 mb-4">
                {t.brand}
              </p>

              <h3 className="text-4xl font-semibold leading-tight tracking-tight mb-5">
                {t.specialMemories}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-400 mb-4">
              {language === 'ru' ? 'Отзывы' : 'Testimonials'}
            </p>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">Отзывы клиентов</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="rounded-[32px] p-8 bg-[#f8f6f2] border border-neutral-200">
              <p className="text-lg leading-relaxed text-neutral-600 mb-6">“Это не просто альбом — это полноценная семейная реликвия.”</p>
              <p className="font-semibold">{language === 'ru' ? 'Анна • Свадебный альбом' : 'Anna • Wedding Book'}</p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#f8f6f2] border border-neutral-200">
              <p className="text-lg leading-relaxed text-neutral-600 mb-6">“Дизайн выглядит как luxury editorial журнал.”</p>
              <p className="font-semibold">{language === 'ru' ? 'Мария • Выпускной альбом' : 'Maria • Graduation Album'}</p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#f8f6f2] border border-neutral-200">
              <p className="text-lg leading-relaxed text-neutral-600 mb-6">“Самый красивый семейный альбом, который у нас был.”</p>
              <p className="font-semibold">{language === 'ru' ? 'Елена • Семейные воспоминания' : 'Elena • Family Memories'}</p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#f8f6f2] border border-neutral-200">
              <p className="text-lg leading-relaxed text-neutral-600 mb-6">“Мы получили гораздо больше, чем ожидали. Это настоящее искусство.”</p>
              <p className="font-semibold">{language === 'ru' ? 'София • Семейная luxury-книга' : 'Sophia • Luxury Family Book'}</p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#f8f6f2] border border-neutral-200">
              <p className="text-lg leading-relaxed text-neutral-600 mb-6">“Каждая страница выглядит как кадр из модного журнала.”</p>
              <p className="font-semibold">{language === 'ru' ? 'Дарья • Альбом в журнальной эстетике' : 'Daria • Editorial Album'}</p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#f8f6f2] border border-neutral-200">
              <p className="text-lg leading-relaxed text-neutral-600 mb-6">“Очень деликатная работа с детьми и невероятное качество печати.”</p>
              <p className="font-semibold">{language === 'ru' ? 'Ирина • Воспоминания детского сада' : 'Irina • Kindergarten Memories'}</p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#f8f6f2] border border-neutral-200">
              <p className="text-lg leading-relaxed text-neutral-600 mb-6">“Фотокнига выглядит дорого и ощущается как настоящий luxury объект.”</p>
              <p className="font-semibold">{language === 'ru' ? 'Ольга • Альбом новорожденного' : 'Olga • Newborn Album'}</p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#f8f6f2] border border-neutral-200">
              <p className="text-lg leading-relaxed text-neutral-600 mb-6">“Спасибо за атмосферу, внимание к деталям и невероятные эмоции.”</p>
              <p className="font-semibold">{language === 'ru' ? 'Наталья • Свадебная история' : 'Natalia • Wedding Story'}</p>
            </div>

            <div className="rounded-[32px] p-8 bg-[#f8f6f2] border border-neutral-200">
              <p className="text-lg leading-relaxed text-neutral-600 mb-6">“Лучшее решение для семейной памяти — красиво, современно и очень эстетично.”</p>
              <p className="font-semibold">{language === 'ru' ? 'Кристина • Семейная коллекция' : 'Kristina • Family Collection'}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-28 px-6">
        <div className="max-w-6xl mx-auto rounded-[48px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)] p-14 md:p-20 text-center">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-8 text-neutral-900">
            {t.booking}
            <span className="block text-neutral-400">{t.booking2}</span>
          </h2>

          <p className="text-xl text-neutral-500 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t.bookingText}
          </p>

          <div className="mb-10 space-y-3">
            <p className="text-2xl font-semibold text-neutral-900">
              +7 (495) 763-79-97
            </p>
            <p className="text-neutral-500 text-lg">
              WhatsApp • Telegram • Звонки
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://wa.me/79857637997"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-neutral-900 text-white px-10 py-5 text-lg font-medium hover:scale-[1.03] transition duration-300 shadow-xl inline-flex items-center justify-center"
            >
              WhatsApp
            </a>

            <a
              href="https://t.me/+79857637997"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-200 bg-white px-10 py-5 text-lg font-medium hover:bg-neutral-100 transition duration-300 text-neutral-900 inline-flex items-center justify-center"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-14 pt-4 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto border-t border-neutral-200 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">
              {t.brand}
            </h3>

            <p className="text-neutral-500 font-light max-w-md leading-relaxed">
              {language === 'ru'
                ? 'Premium фотокниги, семейные архивы и эстетичные воспоминания, созданные на годы.'
                : 'Premium photobooks, family archives and aesthetic memories created to last for years.'}
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-neutral-500">
            <a href="#portfolio" className="hover:text-black transition">
              {t.portfolio}
            </a>
            <a href="#services" className="hover:text-black transition">
              {t.services}
            </a>
            <a href="#contacts" className="hover:text-black transition">
              {t.contacts}
            </a>
          </div>

          <div className="text-sm text-neutral-400 text-center md:text-right leading-relaxed">
            <p>© 2026 SPECIAL THINGS</p>
            <p>{language === 'ru' ? 'Премиальная студия воспоминаний' : 'Luxury Memory Studio'}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
