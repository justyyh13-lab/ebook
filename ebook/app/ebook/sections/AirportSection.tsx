'use client';

import PhraseCard from '../PhraseCard';

export default function AirportSection() {
  const phrases = [
    {
      french: "Où est l'enregistrement ?",
      spanish: "¿Dónde está el check-in?",
      pronunciation: "¿Dón-dé es-tá el tchek-in?"
    },
    {
      french: "Voici mon passeport",
      spanish: "Aquí está mi pasaporte",
      pronunciation: "A-ki es-tá mi pa-sa-por-té"
    },
    {
      french: "Où est ma porte d'embarquement ?",
      spanish: "¿Dónde está mi puerta de embarque?",
      pronunciation: "¿Dón-dé es-tá mi pwér-ta dé em-bar-ké?"
    },
    {
      french: "À quelle heure est le vol ?",
      spanish: "¿A qué hora es el vuelo?",
      pronunciation: "¿A ké o-ra es el vwé-lo?"
    },
    {
      french: "Mon vol est retardé",
      spanish: "Mi vuelo está retrasado",
      pronunciation: "Mi vwé-lo es-tá ré-tra-sa-do"
    },
    {
      french: "J'ai perdu mes bagages",
      spanish: "He perdido mi equipaje",
      pronunciation: "É pér-di-do mi é-ki-pa-khé"
    },
    {
      french: "Où est le contrôle de sécurité ?",
      spanish: "¿Dónde está el control de seguridad?",
      pronunciation: "¿Dón-dé es-tá el kon-trol dé sé-gou-ri-dad?"
    },
    {
      french: "Pouvez-vous m'aider ?",
      spanish: "¿Me puede ayudar?",
      pronunciation: "¿Mé pwé-dé a-you-dar?"
    },
    {
      french: "Je dois prendre une correspondance",
      spanish: "Tengo que hacer conexión",
      pronunciation: "Tén-go ké a-thér ko-né-ksión"
    },
    {
      french: "Où récupère-t-on les bagages ?",
      spanish: "¿Dónde se recoge el equipaje?",
      pronunciation: "¿Dón-dé sé ré-ko-khé el é-ki-pa-khé?"
    },
    {
      french: "Y a-t-il un bus pour le centre-ville ?",
      spanish: "¿Hay autobús al centro?",
      pronunciation: "¿Aï ao-to-bous al thén-tro?"
    },
    {
      french: "Où puis-je prendre un taxi ?",
      spanish: "¿Dónde puedo tomar un taxi?",
      pronunciation: "¿Dón-dé pwé-do to-mar oun tak-si?"
    },
    {
      french: "Combien coûte un taxi jusqu'au centre ?",
      spanish: "¿Cuánto cuesta un taxi al centro?",
      pronunciation: "¿Kwan-to kwés-ta oun tak-si al thén-tro?"
    },
    {
      french: "Je n'ai rien à déclarer",
      spanish: "No tengo nada que declarar",
      pronunciation: "No tén-go na-da ké dé-kla-rar"
    },
    {
      french: "Où puis-je changer de l'argent ?",
      spanish: "¿Dónde puedo cambiar dinero?",
      pronunciation: "¿Dón-dé pwé-do kam-biar di-né-ro?"
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          <i className="ri-plane-line mr-2 text-blue-500" />
          Aéroport
        </h2>
        <p className="text-gray-600">
          Phrases essentielles pour naviguer dans l'aéroport
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {phrases.map((phrase, index) => (
          <PhraseCard key={index} phrase={phrase} />
        ))}
      </div>
    </div>
  );
}