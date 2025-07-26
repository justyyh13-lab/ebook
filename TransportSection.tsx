'use client';

import PhraseCard from '../PhraseCard';

export default function TransportSection() {
  const phrases = [
    {
      french: "Où est la gare ?",
      spanish: "¿Dónde está la estación?",
      pronunciation: "¿Dón-dé es-tá la és-ta-thión?"
    },
    {
      french: "Je voudrais un billet pour Madrid",
      spanish: "Quisiera un billete para Madrid",
      pronunciation: "Ki-sié-ra oun bi-yé-té pa-ra Ma-drid"
    },
    {
      french: "À quelle heure part le train ?",
      spanish: "¿A qué hora sale el tren?",
      pronunciation: "¿A ké o-ra sa-lé el trén?"
    },
    {
      french: "De quel quai part le train ?",
      spanish: "¿De qué andén sale el tren?",
      pronunciation: "¿Dé ké an-dén sa-lé el trén?"
    },
    {
      french: "Combien de temps dure le voyage ?",
      spanish: "¿Cuánto dura el viaje?",
      pronunciation: "¿Kwan-to dou-ra el via-khé?"
    },
    {
      french: "Où est l'arrêt de bus ?",
      spanish: "¿Dónde está la parada de autobús?",
      pronunciation: "¿Dón-dé es-tá la pa-ra-da dé ao-to-bous?"
    },
    {
      french: "Ce bus va-t-il au centre-ville ?",
      spanish: "¿Este autobús va al centro?",
      pronunciation: "¿És-té ao-to-bous va al thén-tro?"
    },
    {
      french: "Combien coûte le ticket ?",
      spanish: "¿Cuánto cuesta el billete?",
      pronunciation: "¿Kwan-to kwés-ta el bi-yé-té?"
    },
    {
      french: "Pouvez-vous me dire quand descendre ?",
      spanish: "¿Me puede decir cuándo bajar?",
      pronunciation: "¿Mé pwé-dé dé-thir kwan-do ba-khar?"
    },
    {
      french: "Je dois descendre ici",
      spanish: "Tengo que bajar aquí",
      pronunciation: "Tén-go ké ba-khar a-ki"
    },
    {
      french: "Où puis-je prendre un taxi ?",
      spanish: "¿Dónde puedo tomar un taxi?",
      pronunciation: "¿Dón-dé pwé-do to-mar oun tak-si?"
    },
    {
      french: "Emmenez-moi à cette adresse",
      spanish: "Lléveme a esta dirección",
      pronunciation: "Yé-vé-mé a és-ta di-rék-thión"
    },
    {
      french: "Combien coûte la course ?",
      spanish: "¿Cuánto cuesta la carrera?",
      pronunciation: "¿Kwan-to kwés-ta la ka-ré-ra?"
    },
    {
      french: "Arrêtez-vous ici, s'il vous plaît",
      spanish: "Pare aquí, por favor",
      pronunciation: "Pa-ré a-ki, por fa-vor"
    },
    {
      french: "Y a-t-il un métro ?",
      spanish: "¿Hay metro?",
      pronunciation: "¿Aï mé-tro?"
    },
    {
      french: "Où acheter un ticket de métro ?",
      spanish: "¿Dónde comprar un billete de metro?",
      pronunciation: "¿Dón-dé kom-prar oun bi-yé-té dé mé-tro?"
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          <i className="ri-bus-line mr-2 text-blue-500" />
          Transport
        </h2>
        <p className="text-gray-600">
          Expressions pour se déplacer facilement
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