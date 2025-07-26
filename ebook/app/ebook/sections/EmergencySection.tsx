'use client';

import PhraseCard from '../PhraseCard';

export default function EmergencySection() {
  const phrases = [
    {
      french: "Au secours !",
      spanish: "¡Socorro!",
      pronunciation: "¡So-ko-ro!"
    },
    {
      french: "Appelez la police !",
      spanish: "¡Llamen a la policía!",
      pronunciation: "¡Ya-mén a la po-li-thi-a!"
    },
    {
      french: "Appelez une ambulance !",
      spanish: "¡Llamen a una ambulancia!",
      pronunciation: "¡Ya-mén a ou-na am-bou-lan-thia!"
    },
    {
      french: "Où est le commissariat ?",
      spanish: "¿Dónde está la comisaría?",
      pronunciation: "¿Dón-dé es-tá la ko-mi-sa-ri-a?"
    },
    {
      french: "J'ai été volé(e)",
      spanish: "Me han robado",
      pronunciation: "Mé an ro-ba-do"
    },
    {
      french: "J'ai perdu mon passeport",
      spanish: "He perdido mi pasaporte",
      pronunciation: "É pér-di-do mi pa-sa-por-té"
    },
    {
      french: "J'ai besoin d'aide",
      spanish: "Necesito ayuda",
      pronunciation: "Né-thé-si-to a-you-da"
    },
    {
      french: "Je ne me sens pas bien",
      spanish: "No me siento bien",
      pronunciation: "No mé sién-to bién"
    },
    {
      french: "Où est l'hôpital le plus proche ?",
      spanish: "¿Dónde está el hospital más cercano?",
      pronunciation: "¿Dón-dé es-tá el os-pi-tal mas thér-ka-no?"
    },
    {
      french: "Je suis perdu(e)",
      spanish: "Estoy perdido/a",
      pronunciation: "Es-toï pér-di-do/a"
    },
    {
      french: "Pouvez-vous m'aider ?",
      spanish: "¿Me puede ayudar?",
      pronunciation: "¿Mé pwé-dé a-you-dar?"
    },
    {
      french: "Je suis français(e)",
      spanish: "Soy francés/francesa",
      pronunciation: "Soï fran-thés/fran-thé-sa"
    },
    {
      french: "Où est l'ambassade de France ?",
      spanish: "¿Dónde está la embajada de Francia?",
      pronunciation: "¿Dón-dé es-tá la em-ba-kha-da dé Fran-thia?"
    },
    {
      french: "Il y a eu un accident",
      spanish: "Ha habido un accidente",
      pronunciation: "A a-bi-do oun ak-thi-dén-té"
    },
    {
      french: "Je veux porter plainte",
      spanish: "Quiero poner una denuncia",
      pronunciation: "Kié-ro po-nér ou-na dé-noun-thia"
    },
    {
      french: "C'est urgent !",
      spanish: "¡Es urgente!",
      pronunciation: "¡Es our-khén-té!"
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          <i className="ri-alarm-warning-line mr-2 text-red-500" />
          Urgences
        </h2>
        <p className="text-gray-600">
          Phrases cruciales en cas d'urgence
        </p>
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="font-semibold text-red-800 mb-2">Numéros d'urgence en Espagne :</h3>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• <strong>112</strong> - Urgences générales</li>
            <li>• <strong>091</strong> - Police nationale</li>
            <li>• <strong>092</strong> - Police municipale</li>
            <li>• <strong>080</strong> - Pompiers</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {phrases.map((phrase, index) => (
          <PhraseCard key={index} phrase={phrase} />
        ))}
      </div>
    </div>
  );
}