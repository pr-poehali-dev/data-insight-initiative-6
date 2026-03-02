const stats = [
  { value: "12", unit: "судов", label: "к одновременной погрузке" },
  { value: "200", unit: "тыс. тонн", label: "макс. переработка в месяц" },
  { value: "300", unit: "тыс. тонн", label: "макс. единовременное хранение" },
  { value: "10", unit: "поездов", label: "контейнерных в месяц" },
];

export default function Stats() {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-10 text-center">Мощности порта</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-neutral-800">
          {stats.map((s) => (
            <div key={s.label} className="px-6 lg:px-8 py-4 text-center">
              <p className="text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-1">{s.value}</p>
              <p className="text-sm text-neutral-400 uppercase tracking-wide mb-2">{s.unit}</p>
              <p className="text-xs text-neutral-600 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-10 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-neutral-400 text-sm leading-relaxed">Зона постоянного таможенного контроля</p>
          </div>
          <div>
            <p className="text-neutral-400 text-sm leading-relaxed">Прямое смешанное железнодорожно-водное сообщение</p>
          </div>
          <div>
            <p className="text-neutral-400 text-sm leading-relaxed">Навигация май – октябрь · Автозимник декабрь – март</p>
          </div>
        </div>
      </div>
    </div>
  );
}
