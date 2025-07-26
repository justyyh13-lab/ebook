'use client';

import PhraseCard from '../PhraseCard';

export default function HospitalSection() {
  const phrases = [
    {
      french: "J'ai mal ici",
      spanish: "Me duele aquí",
      pronunciation: "Mé dwé-lé a-ki"
    },
    {
      french: "J'ai de la fièvre",
      spanish: "Tengo fiebre",
      pronunciation: "Tén-go fié-bré"
    },
    {
      french: "J'ai mal à la tête",
      spanish: "Me duele la cabeza",
      pronunciation: "Mé dwé-lé la ka-bé-tha"
    },
    {
      french: "J'ai mal au ventre",
      spanish: "Me duele el estómago",
      pronunciation: "Mé dwé-lé el es-to-ma-go"
    },
    {
      french: "Je suis diabétique",
      spanish: "Soy diabético/a",
      pronunciation: "Soï dia-bé-ti-ko/a"
    },
    {
      french: "Je suis allergique à...",
      spanish: "Soy alérgico/a a...",
      pronunciation: "Soï a-lér-khi-ko/a a..."
    },
    {
      french: "Je prends ces médicaments",
      spanish: "Tomo estos medicamentos",
      pronunciation: "To-mo és-tos mé-di-ka-mén-tos"
    },
    {
      french: "J'ai besoin d'un médecin",
      spanish: "Necesito un médico",
      pronunciation: "Né-thé-si-to oun mé-di-ko"
    },
    {
      french: "Où est la pharmacie ?",
      spanish: "¿Dónde está la farmacia?",
      pronunciation: "¿Dón-dé es-tá la far-ma-thia?"
    },
    {
      french: "J'ai une assurance",
      spanish: "Tengo seguro",
      pronunciation: "Tén-go sé-gou-ro"
    },
    {
      french: "Combien de temps pour les résultats ?",
      spanish: "¿Cuánto tiempo para los resultados?",
      pronunciation: "¿Kwan-to tiem-po pa-ra los ré-soul-ta-dos?"
    },
    {
      french: "Je suis enceinte",
      spanish: "Estoy embarazada",
      pronunciation: "Es-toï em-ba-ra-tha-da"
    },
    {
      french: "Je me suis cassé quelque chose",
      spanish: "Me he roto algo",
      pronunciation: "Mé é ro-to al-go"
    },
    {
      french: "J'ai eu un accident",
      spanish: "He tenido un accidente",
      pronunciation: "É té-ni-do oun ak-thi-dén-té"
    },
    {
      french: "Je ne peux pas bouger",
      spanish: "No puedo moverme",
      pronunciation: "No pwé-do mo-vér-mé"
    },
    {
      french: "Quand puis-je sortir ?",
      spanish: "¿Cuándo puedo salir?",
      pronunciation: "¿Kwan-do pwé-do sa-lir?"
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          <i className="ri-hospital-line mr-2 text-blue-500" />
          Hôpital
        </h2>
        <p className="text-gray-600">
          Expressions essentielles pour les soins médicaux
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