import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/66345227-9556-4954-841e-ad433f581b7b/files/bc183e27-765a-47d5-86b9-3915c9a3edd8.jpg"
          alt="Осетровский речной порт на реке Лена"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-80">Усть-Кут · Река Лена · С 1951 года</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ОСЕТРОВСКИЙ<br/>РЕЧНОЙ ПОРТ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Ворота в северные регионы России — перевалка грузов из железной дороги на водный транспорт и доставка в Якутию
        </p>
        <a href="#services" className="inline-block mt-10 border border-white text-white uppercase text-sm tracking-widest px-8 py-3 hover:bg-white hover:text-black transition-all duration-300">
          Наши услуги
        </a>
      </div>
    </div>
  );
}