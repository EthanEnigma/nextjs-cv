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
          <p className="text-lg text-white-600">Étudiant de 1ère année à <span className="text-blue-400">Enigma</span></p>
        </section>

        <hr className="border-t border-gray-300 w-full" />

        <h1 className="text-4xl font-bold">Contact</h1>
        <section className="flex flex-col items-start">
          <p className="text-lg text-customgray"><span className="text-yellow-200">Téléphone :</span> 07 60 47 15 59</p>
          <p className="text-lg text-customgray"><span className="text-yellow-200">Email :</span> ethan.legris@outlook.com</p>
          <p className="text-lg text-customgray"><span className="text-yellow-200">Adresse :</span> 45 rue de Canteleu 59000 Lille</p>
        </section>

        <hr className="border-t border-gray-300 w-full" />

        <h1 className="text-4xl font-bold">Diplômes</h1>
        <section className="flex flex-col items-start">
          <p className="text-lg text-customgray"><span className="text-yellow-200">BAC STI2D :</span> Mention Bien</p>
          <p className="text-lg text-customgray"><span className="text-yellow-200">Brevet des collèges :</span> Mention</p>
        </section>

        <hr className="border-t border-gray-300 w-full" />

        <h1 className="text-4xl font-bold">Compétences</h1>
        <section className="flex flex-col gap-6 items-center">
          <div className="flex flex-col items-center">
            <p className="text-lg text-yellow-200"><span className="text-white">Anglais :</span> Niveau C1</p>
            <div className="w-64 bg-gray-200 h-2">
              <div className="bg-yellow-500 h-2" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-yellow-200"><span className="text-white">Allemand :</span> Niveau A2</p>
            <div className="w-64 bg-gray-200 h-2">
              <div className="bg-yellow-500 h-2" style={{ width: '30%' }}></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-yellow-200"><span className="text-white">Développement Web :</span> Intermédiaire</p>
            <div className="w-64 bg-gray-200 h-2">
              <div className="bg-yellow-500 h-2" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-yellow-200"><span className="text-white">Adobe Creative Cloud :</span> Intermédiaire</p>
            <div className="w-64 bg-gray-200 h-2">
              <div className="bg-yellow-500 h-2" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-yellow-200"><span className="text-white">Création 3D :</span> Avancé</p>
            <div className="w-64 bg-gray-200 h-2">
              <div className="bg-yellow-500 h-2" style={{ width: '70%' }}></div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 w-full" />

        <h1 className="text-4xl font-bold">Expérience Professionnelle</h1>
        <section className="flex flex-col items-start">
          <hr className="border-t border-blue-300 w-full" />
          <br />
          <div className="flex items-center gap-4">
            <Image 
              src="/cpplogo.jpg"
              alt="Cassel Paintball Park logo"
              width={50}
              height={50}
              className="object-contain rounded-full shadow-md"
            />
            <h1 className="font-bold text-2xl">Cassel Paintball Park (2023) <span className="font-bold text-yellow-200 text-sm">(Entreprise multi-loisirs)</span> :</h1>
          </div>
          <br />
          <p><span className="text-xl text-yellow-200">Relations Clients : </span>Accueil et gestion des besoins liés aux clients.</p>
          <p><span className="text-xl text-yellow-200">Animation : </span>Savoir animer des groupes de personne durant des activités.</p>
          <br />
          <hr className="border-t border-blue-300 w-full" />

          <br />
          <div className="flex items-center gap-4">
            <Image 
              src="/diamandscarlogo.jpg"
              alt="Diamand's Car logo"
              width={50}
              height={50}
              className="object-contain rounded-full shadow-md"
            />
            <h1 className="font-bold text-2xl">Diamand's Car (2022) <span className="font-bold text-yellow-200 text-sm">(Entreprise d'entretien automobile)</span> :</h1>
          </div>
          <br />
          <p><span className="text-xl text-yellow-200">Gestion des stocks : </span>Gestion des stocks du garage et de la boutique.</p>
          <p><span className="text-xl text-yellow-200">Préparation de commande : </span>Préparation des commandes des clients en ligne.</p>
          <br />
          <hr className="border-t border-blue-300 w-full" />
          <br />
        </section>
        
        <hr className="border-t border-gray-300 w-full" />
        
        <h1 className="text-4xl font-bold">Hobbies</h1>
        <section className="flex flex-col items-start">
          <div className="items-center">
            <h1 className="text-2xl text-yellow-200">Photographie :</h1>
            <p>
              Passioné de photographie, je maîtrise les bases de la prise de vue 
              (câdrage, lumière) avec des appareils réflex. J'utilise Lightroom et Photoshop 
              pour la retouche de mes photos.
            </p>
          </div>
          <br />
          <div className="items-center">
            <h1 className="text-2xl text-yellow-200">Modélisation 3D :</h1>
            <p>
              Je pratique la 3D, la Modélisation sur le logiciel Blender. Je créer des
              scènes et différents objets ainsi que des animations en explorant différentes
              techniques de rendu. Cette compétence me permet notamment de pouvoir créer et
              vendre des objets 3D pour le jeu vidéo sur des sites spécialisés.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-300 w-full" />
        
      </main>
      <footer className="mt-16 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500">
        <p>© 2025 - CV en ligne éco-responsable</p>
      </footer>
    </div>
  );
}
