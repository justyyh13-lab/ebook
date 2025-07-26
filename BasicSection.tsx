'use client';

import PhraseCard from '../PhraseCard';

export default function BasicSection() {
  const phrases = [
    {
      french: "Bonjour",
      spanish: "Hola",
      pronunciation: "O-la"
    },
    {
      french: "Bonsoir",
      spanish: "Buenas noches",
      pronunciation: "Bwé-nas no-tchés"
    },
    {
      french: "Au revoir",
      spanish: "Adiós",
      pronunciation: "A-dioss"
    },
    {
      french: "S'il vous plaît",
      spanish: "Por favor",
      pronunciation: "Por fa-vor"
    },
    {
      french: "Merci",
      spanish: "Gracias",
      pronunciation: "Gra-thias"
    },
    {
      french: "De rien",
      spanish: "De nada",
      pronunciation: "Dé na-da"
    },
    {
      french: "Excusez-moi",
      spanish: "Disculpe",
      pronunciation: "Dis-koul-pé"
    },
    {
      french: "Je suis désolé(e)",
      spanish: "Lo siento",
      pronunciation: "Lo sién-to"
    },
    {
      french: "Parlez-vous français ?",
      spanish: "¿Habla francés?",
      pronunciation: "¿A-bla fran-thés?"
    },
    {
      french: "Je ne parle pas espagnol",
      spanish: "No hablo español",
      pronunciation: "No a-blo es-pa-gnol"
    },
    {
      french: "Je ne comprends pas",
      spanish: "No entiendo",
      pronunciation: "No en-tién-do"
    },
    {
      french: "Pouvez-vous répéter ?",
      spanish: "¿Puede repetir?",
      pronunciation: "¿Pwé-dé ré-pé-tir?"
    },
    {
      french: "Où sont les toilettes ?",
      spanish: "¿Dónde están los baños?",
      pronunciation: "¿Dón-dé es-tán los ba-gnoss?"
    },
    {
      french: "Combien ça coûte ?",
      spanish: "¿Cuánto cuesta?",
      pronunciation: "¿Kwan-to kwés-ta?"
    },
    {
      french: "Je voudrais...",
      spanish: "Quisiera...",
      pronunciation: "Ki-sié-ra..."
    },
    {
      french: "Où est... ?",
      spanish: "¿Dónde está...?",
      pronunciation: "¿Dón-dé es-tá...?"
    },
    {
      french: "Oui",
      spanish: "Sí",
      pronunciation: "Si"
    },
    {
      french: "Non",
      spanish: "No",
      pronunciation: "No"
    },
    {
      french: "Je m'appelle...",
      spanish: "Me llamo...",
      pronunciation: "Mé ya-mo..."
    },
    {
      french: "Comment vous appelez-vous ?",
      spanish: "¿Cómo se llama?",
      pronunciation: "¿Ko-mo sé ya-ma?"
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          <i className="ri-chat-1-line mr-2 text-blue-500" />
          Phrases de Base
        </h2>
        <p className="text-gray-600">
          Les expressions essentielles pour commencer toute conversation
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