import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

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

      <Footer />
    </main>
  );
}
