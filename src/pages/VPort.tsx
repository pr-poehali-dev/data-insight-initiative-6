import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const steps = [
  { n: "1", text: "Зарегистрируйтесь онлайн" },
  { n: "2", text: "Выберите удобное время" },
  { n: "3", text: "Приезжайте без очереди" },
];

export default function VPort() {
  const [form, setForm] = useState({ name: "", phone: "", plate: "", date: "", time: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-black text-white py-24 px-6 text-center">
        <Header />
        <p className="text-xs uppercase tracking-[0.3em] mb-3 opacity-60">Осетровский речной порт</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">VPORT</h1>
        <p className="text-lg opacity-80 max-w-xl mx-auto">Быстрая выгрузка в порту — регистрация онлайн</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-3 gap-6 mb-16">
          {steps.map((s) => (
            <div key={s.n} className="text-center border border-neutral-200 p-6">
              <div className="text-3xl font-bold text-black mb-2">{s.n}</div>
              <p className="text-sm text-neutral-600">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">Зарегистрируйтесь сейчас</h2>
            <ul className="space-y-3 text-neutral-600 text-sm">
              <li className="flex gap-2"><span className="text-black font-bold">—</span> Сократите ожидание на въезде</li>
              <li className="flex gap-2"><span className="text-black font-bold">—</span> Получите персональный номер очереди</li>
              <li className="flex gap-2"><span className="text-black font-bold">—</span> SMS-уведомление о вашей очереди</li>
            </ul>
          </div>

          <div>
            {sent ? (
              <div className="border border-black p-8 text-center">
                <p className="text-xl font-bold mb-2">Заявка принята!</p>
                <p className="text-neutral-600 text-sm">Ожидайте SMS с номером очереди и временем въезда.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  required
                  placeholder="ФИО водителя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
                <input
                  required
                  placeholder="Телефон"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
                <input
                  required
                  placeholder="Гос. номер ТС"
                  value={form.plate}
                  onChange={(e) => setForm({ ...form, plate: e.target.value })}
                  className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                  />
                  <select
                    required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors bg-white"
                  >
                    <option value="">Время</option>
                    {["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-black text-white uppercase text-sm tracking-widest py-3 hover:bg-neutral-800 transition-colors"
                >
                  Зарегистрироваться
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
