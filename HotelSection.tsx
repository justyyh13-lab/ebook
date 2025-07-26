'use client';

import PhraseCard from '../PhraseCard';

export default function HotelSection() {
  const phrases = [
    {
      french: "J'ai une réservation",
      spanish: "Tengo una reserva",
      pronunciation: "Tén-go ou-na ré-sér-va"
    },
    {
      french: "Je voudrais une chambre",
      spanish: "Quisiera una habitación",
      pronunciation: "Ki-sié-ra ou-na a-bi-ta-thión"
    },
    {
      french: "Pour combien de nuits ?",
      spanish: "¿Para cuántas noches?",
      pronunciation: "¿Pa-ra kwan-tas no-tchés?"
    },
    {
      french: "Combien coûte la chambre par nuit ?",
      spanish: "¿Cuánto cuesta la habitación por noche?",
      pronunciation: "¿Kwan-to kwés-ta la a-bi-ta-thión por no-tché?"
    },
    {
      french: "Le petit-déjeuner est-il inclus ?",
      spanish: "¿Está incluido el desayuno?",
      pronunciation: "¿Es-tá in-klou-i-do el dé-sa-you-no?"
    },
    {
      french: "À quelle heure est le check-out ?",
      spanish: "¿A qué hora es el check-out?",
      pronunciation: "¿A ké o-ra es el tchek-aot?"
    },
    {
      french: "Où est l'ascenseur ?",
      spanish: "¿Dónde está el ascensor?",
      pronunciation: "¿Dón-dé es-tá el as-thén-sor?"
    },
    {
      french: "Ma chambre n'est pas propre",
      spanish: "Mi habitación no está limpia",
      pronunciation: "Mi a-bi-ta-thión no es-tá lim-pia"
    },
    {
      french: "La climatisation ne fonctionne pas",
      spanish: "El aire acondicionado no funciona",
      pronunciation: "El ai-ré a-kon-di-thio-na-do no foun-thio-na"
    },
    {
      french: "Y a-t-il le WiFi ?",
      spanish: "¿Hay WiFi?",
      pronunciation: "¿Aï wi-fi?"
    },
    {
      french: "Quel est le mot de passe WiFi ?",
      spanish: "¿Cuál es la contraseña del WiFi?",
      pronunciation: "¿Kwal es la kon-tra-sé-gna del wi-fi?"
    },
    {
      french: "Pouvez-vous me réveiller à 7h ?",
      spanish: "¿Me puede despertar a las 7?",
      pronunciation: "¿Mé pwé-dé dés-pér-tar a las sié-té?"
    },
    {
      french: "Y a-t-il un coffre-fort ?",
      spanish: "¿Hay caja fuerte?",
      pronunciation: "¿Aï ka-kha fwér-té?"
    },
    {
      french: "Où est la réception ?",
      spanish: "¿Dónde está la recepción?",
      pronunciation: "¿Dón-dé es-tá la ré-thép-thión?"
    },
    {
      french: "Je voudrais une serviette supplémentaire",
      spanish: "Quisiera una toalla extra",
      pronunciation: "Ki-sié-ra ou-na to-a-ya eks-tra"
    },
    {
      french: "La facture, s'il vous plaît",
      spanish: "La factura, por favor",
      pronunciation: "La fak-tou-ra, por fa-vor"
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          <i className="ri-hotel-line mr-2 text-blue-500" />
          Hôtel
        </h2>
        <p className="text-gray-600">
          Tout ce qu'il faut savoir pour votre séjour à l'hôtel
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