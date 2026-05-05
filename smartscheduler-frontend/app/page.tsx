"use client";

import { useState } from "react";

type HealthResponse = {
  status: string;
  project: string;
  team: string;
  version: string;
};

const features = [
  {
    title: "Otomatik Optimizasyon",
    description:
      "Ders, hoca ve sınıf uygunluklarını AI ile analiz ederek en verimli programı üretir.",
  },
  {
    title: "Akıllı Kısıt Yönetimi",
    description:
      "Çakışma, kapasite ve zaman kısıtlarını gerçek zamanlı değerlendirir.",
  },
  {
    title: "Takvim Görünümü",
    description:
      "Haftalık planı modern bir görünümde sunar ve anlık değişiklikleri yansıtır.",
  },
  {
    title: "What-if Analizi",
    description:
      "Farklı senaryoları test ederek kararları veri odaklı şekilde karşılaştırır.",
  },
];

export default function Home() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkApiHealth = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/health");
      if (!response.ok) {
        throw new Error("API istegi basarisiz oldu.");
      }

      const data = (await response.json()) as HealthResponse;
      setHealth(data);
    } catch {
      setError(
        "API'ye baglanilamadi. Lutfen backend uygulamasinin localhost:5000 adresinde calistigini kontrol edin."
      );
      setHealth(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f2440] text-white">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 md:px-10">
        <section className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            SmartScheduler
          </h1>
          <p className="text-xl text-[#d8e5f6] md:text-2xl">
            AI Destekli Ders Programi Olusturucu
          </p>
          <p className="inline-block rounded-full border border-[#E8593C]/50 bg-[#E8593C]/10 px-4 py-1 text-sm font-semibold text-[#ffd7cf]">
            DevArchitechs
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-[#2d4a70] bg-[#1E3A5F] p-6 shadow-lg shadow-black/20"
            >
              <h2 className="mb-3 text-xl font-semibold text-[#ffd9d0]">
                {feature.title}
              </h2>
              <p className="leading-relaxed text-[#d8e5f6]">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-[#2d4a70] bg-[#1E3A5F] p-6 md:p-8">
          <h3 className="text-2xl font-semibold">API Baglantisi</h3>
          <p className="mt-2 text-[#d8e5f6]">
            Backend sagligini test etmek icin asagidaki butona tiklayin.
          </p>

          <button
            onClick={checkApiHealth}
            disabled={loading}
            className="mt-5 rounded-lg bg-[#E8593C] px-5 py-3 font-semibold text-white transition hover:bg-[#ff6d50] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Kontrol ediliyor..." : "API Sagligini Kontrol Et"}
          </button>

          {error && (
            <p className="mt-4 rounded-md border border-red-300/50 bg-red-400/10 p-3 text-red-100">
              {error}
            </p>
          )}

          {health && (
            <pre className="mt-4 overflow-x-auto rounded-md border border-[#355884] bg-[#102845] p-4 text-sm text-[#d8e5f6]">
              {JSON.stringify(health, null, 2)}
            </pre>
          )}
        </section>
      </main>
    </div>
  );
}
