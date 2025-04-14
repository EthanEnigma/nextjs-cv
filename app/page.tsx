import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>CV - Ethan Legris</title>
        <meta name="description" content="Étudiant de 1ère année à Enigma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 👇 Centré horizontalement avec mx-auto, contenu centré aussi */}
      <main className="flex flex-col items-center gap-8 max-w-3xl mx-auto text-center">
        <Image
          src="/portrait.jpg"
          alt="Photo de profil"
          width={300}
          height={300}
          className="rounded-full shadow-md"
        />

        <section className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Ethan Legris</h1>
          <p className="text-lg text-gray-600">Étudiant de 1ère année à Enigma</p>
        </section>
      </main>

      <footer className="mt-16 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500">
        © 2025 - CV en ligne éco-responsable
      </footer>
    </div>
  );
}
