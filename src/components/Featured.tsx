const services = [
  { title: "Два грузовых района", desc: "Северный грузовой район (СГР) и Западный перегрузочный комплекс (ЗПК) — 19 причалов, 1 855 м причальной стенки" },
  { title: "Тяжеловесные грузы", desc: "Крупногабаритные грузы до 160 тонн, кран-деррик, 4 ричстакера, 33 портальных и козловых крана" },
  { title: "Контейнерные поезда", desc: "Приём и отправка контейнерных поездов — до 10 составов в месяц, прямое ж/д-водное сообщение" },
];

export default function Featured() {
  return (
    <div id="services" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/66345227-9556-4954-841e-ad433f581b7b/bucket/1b2b1aa6-b957-48b4-b4a6-3aa370548e3f.jpg"
          alt="Перевалка грузов в Осетровском порту"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Инфраструктура</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          На пересечении БАМа и реки Лены — ключевой перевалочный узел для грузов в Якутию и Арктику.
        </p>
        <div className="flex flex-col gap-6 mb-8">
          {services.map((s) => (
            <div key={s.title} className="border-l-2 border-black pl-4">
              <p className="font-semibold text-neutral-900 mb-1">{s.title}</p>
              <p className="text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <a href="/services" className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Все услуги
        </a>
      </div>
    </div>
  );
}