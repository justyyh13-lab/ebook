'use client';

import PhraseCard from '../PhraseCard';

export default function ShoppingSection() {
  const phrases = [
    {
      french: "Combien ça coûte ?",
      spanish: "¿Cuánto cuesta?",
      pronunciation: "¿Kwan-to kwés-ta?"
    },
    {
      french: "C'est trop cher",
      spanish: "Es muy caro",
      pronunciation: "Es moui ka-ro"
    },
    {
      french: "Y a-t-il une réduction ?",
      spanish: "¿Hay descuento?",
      pronunciation: "¿Aï dés-kwén-to?"
    },
    {
      french: "Je peux essayer ?",
      spanish: "¿Puedo probármelo?",
      pronunciation: "¿Pwé-do pro-bar-mé-lo?"
    },
    {
      french: "Où sont les cabines d'essayage ?",
      spanish: "¿Dónde están los probadores?",
      pronunciation: "¿Dón-dé es-tán los pro-ba-do-rés?"
    },
    {
      french: "Avez-vous une autre taille ?",
      spanish: "¿Tienen otra talla?",
      pronunciation: "¿Tié-nén o-tra ta-ya?"
    },
    {
      french: "Avez-vous une autre couleur ?",
      spanish: "¿Tienen otro color?",
      pronunciation: "¿Tié-nén o-tro ko-lor?"
    },
    {
      french: "Je prends celui-ci",
      spanish: "Me llevo este",
      pronunciation: "Mé yé-vo és-té"
    },
    {
      french: "Je peux payer par carte ?",
      spanish: "¿Puedo pagar con tarjeta?",
      pronunciation: "¿Pwé-do pa-gar kon tar-khé-ta?"
    },
    {
      french: "Acceptez-vous les euros ?",
      spanish: "¿Aceptan euros?",
      pronunciation: "¿A-thép-tan éou-ros?"
    },
    {
      french: "Puis-je avoir un sac ?",
      spanish: "¿Me da una bolsa?",
      pronunciation: "¿Mé da ou-na bol-sa?"
    },
    {
      french: "Y a-t-il une garantie ?",
      spanish: "¿Hay garantía?",
      pronunciation: "¿Aï ga-ran-ti-a?"
    },
    {
      french: "Je voudrais un reçu",
      spanish: "Quisiera un recibo",
      pronunciation: "Ki-sié-ra oun ré-thi-bo"
    },
    {
      french: "Où est le supermarché ?",
      spanish: "¿Dónde está el supermercado?",
      pronunciation: "¿Dón-dé es-tá el sou-pér-mér-ka-do?"
    },
    {
      french: "À quelle heure fermez-vous ?",
      spanish: "¿A qué hora cierran?",
      pronunciation: "¿A ké o-ra thié-ran?"
    },
    {
      french: "Je regarde seulement",
      spanish: "Solo estoy mirando",
      pronunciation: "So-lo es-toï mi-ran-do"
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          <i className="ri-shopping-cart-line mr-2 text-blue-500" />
          Shopping
        </h2>
        <p className="text-gray-600">
          Phrases utiles pour faire ses courses et ses achats
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