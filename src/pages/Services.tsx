import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const professions = [
  "Водитель погрузчика", "Докер-механизатор", "Машинист крана (авто-, козлового, портального, плавучего)",
  "Матрос", "Маляр", "Кладовщик", "Стропальщик", "Тальман",
  "Слесарь (ремонтник, сантехник, по перегрузочным машинам и такелажу)",
  "Токарь", "Фрезеровщик", "Электромонтер", "Электрогазосварщик", "Вулканизаторщик",
];

const services = [
  {
    icon: "Route",
    title: "Схема доставки",
    desc: "Разработка оптимального маршрута МТР от изготовителя до заказчика с учётом специфики груза, сроков и экономических параметров.",
  },
  {
    icon: "Warehouse",
    title: "Приёмка и хранение",
    desc: "Обработка и хранение грузов и контейнеров в Усть-Куте, Ленске, Якутске, Витиме, Пеледуе и других пунктах бассейна реки Лена.",
  },
  {
    icon: "Ship",
    title: "Доставка",
    desc: "Доставка грузов и контейнеров водным и автотранспортом, включая дороги зимнего действия, до склада заказчика.",
  },
  {
    icon: "ClipboardCheck",
    title: "Входной контроль",
    desc: "Приёмка МТР по количеству и качеству с полным документальным сопровождением.",
  },
  {
    icon: "FileText",
    title: "Экспедирование",
    desc: "Транспортно-экспедиционное обслуживание: приём и отправка грузов, оформление документации, оплата услуг смежников.",
  },
  {
    icon: "Activity",
    title: "Диспетчеризация",
    desc: "Управление грузопотоком и мониторинг движения грузов на всём пути следования.",
  },
];

const clients = [
  "ПАО «Сургутнефтегаз»",
  "ПАО «Роснефть»",
  "ПАО «Газпром»",
  "АО ПО «Якутцемент»",
  "ООО «Верхне-Ленское речное пароходство»",
  "ООО «Иркутская нефтяная компания»",
];

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-black text-white py-24 px-6 text-center">
        <Header />
        <p className="text-xs uppercase tracking-[0.3em] mb-3 opacity-60">Осетровский речной порт</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">УСЛУГИ</h1>
        <p className="text-lg opacity-80 max-w-xl mx-auto">Комплексная организация обработки и доставки грузов</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((s) => (
            <div key={s.title} className="border border-neutral-200 p-6 hover:border-black transition-colors duration-300">
              <div className="mb-4">
                <Icon name={s.icon} size={32} className="text-black" />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-200 pt-12">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Building2" size={24} className="text-black" />
            <h2 className="text-xl font-bold uppercase tracking-wide">Крупнейшие клиенты</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((c) => (
              <div key={c} className="flex items-center gap-3 py-3 border-b border-neutral-100">
                <Icon name="CheckCircle" size={16} className="text-neutral-400 shrink-0" />
                <span className="text-sm text-neutral-700">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Контакты */}
      <div id="contact" className="bg-neutral-950 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Icon name="MapPin" size={24} className="text-neutral-400" />
            <h2 className="text-2xl font-bold uppercase tracking-wide">Контакты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Организация</p>
                <p className="text-white text-lg font-semibold leading-snug">АО «Осетровский речной порт»</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Генеральный директор</p>
                <p className="text-white">Алимов Владимир Юрьевич</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Адрес</p>
                <p className="text-white leading-relaxed">Россия, 666781, Иркутская обл.,<br />г. Усть-Кут, ул. Луговая стр. 21</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Приёмная</p>
                <a href="tel:+73956540140" className="text-white text-lg hover:text-neutral-400 transition-colors">
                  8 (39565) 4-01-40
                </a>
                <span className="text-neutral-500 ml-2 text-sm">доб. 3000</span>
              </div>
              <div className="pt-6 border-t border-neutral-800">
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="Globe" size={16} className="text-neutral-500" />
                  <a href="https://port-osetrovo.ru" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm">
                    port-osetrovo.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* УКК — Обучение */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">Учебно-курсовой комбинат</p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">Обучение и повышение квалификации</h2>
              <div className="space-y-3 mb-8">
                {[
                  "Профессиональная подготовка и переподготовка",
                  "Повышение квалификации",
                  "Обучение работников опасных производственных объектов",
                  "Проверка знаний по рабочим профессиям",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Icon name="CheckCircle" size={18} className="text-neutral-800 shrink-0 mt-0.5" />
                    <span className="text-neutral-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-neutral-50 border border-neutral-200 p-6 space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="User" size={16} className="text-neutral-500" />
                  <span className="text-xs uppercase tracking-widest text-neutral-500">Начальник УКК</span>
                </div>
                <p className="font-semibold text-neutral-900">Николаева Яна Васильевна</p>
                <div className="flex flex-col gap-1 pt-1">
                  <a href="tel:+79149505447" className="flex items-center gap-2 text-sm text-neutral-700 hover:text-black transition-colors">
                    <Icon name="Smartphone" size={14} className="text-neutral-400" />
                    8 914 950 54 47
                  </a>
                  <a href="tel:+73956540140" className="flex items-center gap-2 text-sm text-neutral-700 hover:text-black transition-colors">
                    <Icon name="Phone" size={14} className="text-neutral-400" />
                    8 (39565) 4-01-40 <span className="text-neutral-400">(вн. 3083)</span>
                  </a>
                  <a href="mailto:YNikolaeva@sibfinance.com" className="flex items-center gap-2 text-sm text-neutral-700 hover:text-black transition-colors">
                    <Icon name="Mail" size={14} className="text-neutral-400" />
                    YNikolaeva@sibfinance.com
                  </a>
                </div>
                <p className="text-xs text-neutral-500 pt-2 border-t border-neutral-200">Приём ведётся по заявкам организаций и по заявлениям граждан</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/66345227-9556-4954-841e-ad433f581b7b/files/93d80a73-e338-4d89-b859-29da593f307e.jpg"
                  alt="Учебно-курсовой комбинат"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">Обучение по профессиям</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {professions.map((p) => (
                    <div key={p} className="flex items-center gap-2 py-1.5 border-b border-neutral-100">
                      <Icon name="ChevronRight" size={14} className="text-neutral-400 shrink-0" />
                      <span className="text-sm text-neutral-700">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}