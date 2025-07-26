'use client';

import PhraseCard from '../PhraseCard';

export default function RestaurantSection() {
  const phrases = [
    {
      french: "Une table pour deux, s'il vous plaît",
      spanish: "Una mesa para dos, por favor",
      pronunciation: "Ou-na mé-sa pa-ra dos, por fa-vor"
    },
    {
      french: "Avez-vous une table libre ?",
      spanish: "¿Tienen mesa libre?",
      pronunciation: "¿Tié-nén mé-sa li-bré?"
    },
    {
      french: "Je voudrais voir la carte",
      spanish: "Quisiera ver la carta",
      pronunciation: "Ki-sié-ra vér la kar-ta"
    },
    {
      french: "Qu'est-ce que vous me conseillez ?",
      spanish: "¿Qué me recomienda?",
      pronunciation: "¿Ké mé ré-ko-mién-da?"
    },
    {
      french: "Je prends le menu du jour",
      spanish: "Tomo el menú del día",
      pronunciation: "To-mo el mé-nou del di-a"
    },
    {
      french: "L'addition, s'il vous plaît",
      spanish: "La cuenta, por favor",
      pronunciation: "La kwén-ta, por fa-vor"
    },
    {
      french: "Est-ce que le service est compris ?",
      spanish: "¿Está incluido el servicio?",
      pronunciation: "¿Es-tá in-klou-i-do el sér-vi-thio?"
    },
    {
      french: "Je suis allergique aux arachides",
      spanish: "Soy alérgico a los cacahuetes",
      pronunciation: "Soï a-lér-khi-ko a los ka-ka-wé-tés"
    },
    {
      french: "Je suis végétarien(ne)",
      spanish: "Soy vegetariano/a",
      pronunciation: "Soï vé-khé-ta-ria-no/a"
    },
    {
      french: "Sans piment, s'il vous plaît",
      spanish: "Sin picante, por favor",
      pronunciation: "Sin pi-kan-té, por fa-vor"
    },
    {
      french: "Pouvez-vous chauffer ceci ?",
      spanish: "¿Puede calentar esto?",
      pronunciation: "¿Pwé-dé ka-lén-tar és-to?"
    },
    {
      french: "Un café, s'il vous plaît",
      spanish: "Un café, por favor",
      pronunciation: "Oun ka-fé, por fa-vor"
    },
    {
      french: "Une bière, s'il vous plaît",
      spanish: "Una cerveza, por favor",
      pronunciation: "Ou-na thér-vé-tha, por fa-vor"
    },
    {
      french: "De l'eau, s'il vous plaît",
      spanish: "Agua, por favor",
      pronunciation: "A-gwa, por fa-vor"
    },
    {
      french: "C'est délicieux !",
      spanish: "¡Está delicioso!",
      pronunciation: "¡Es-tá dé-li-thio-so!"
    },
    {
      french: "Où sont les toilettes ?",
      spanish: "¿Dónde están los servicios?",
      pronunciation: "¿Dón-dé es-tán los sér-vi-thios?"
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          <i className="ri-restaurant-line mr-2 text-blue-500" />
          Restaurant
        </h2>
        <p className="text-gray-600">
          Expressions utiles pour bien manger en Espagne
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