'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Guide de Conversation Français-Espagnol
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Votre compagnon de voyage indispensable pour l'Espagne
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <img 
              src="https://readdy.ai/api/search-image?query=Beautiful%20Spain%20travel%20guide%20book%20cover%20with%20Spanish%20flag%20colors%2C%20modern%20minimalist%20design%2C%20travel%20essentials%2C%20passport%20and%20guidebook%20on%20wooden%20table%2C%20warm%20lighting%2C%20professional%20photography%20style&width=800&height=400&seq=spain-guide-hero&orientation=landscape"
              alt="Guide de voyage Espagne"
              className="w-full h-64 object-cover object-top rounded-lg mb-6"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <i className="ri-global-line text-3xl text-blue-500 mb-2" />
                <h3 className="font-semibold text-gray-800">Hors ligne</h3>
                <p className="text-sm text-gray-600">Accessible sans connexion internet</p>
              </div>
              <div>
                <i className="ri-chat-3-line text-3xl text-green-500 mb-2" />
                <h3 className="font-semibold text-gray-800">Phrases pratiques</h3>
                <p className="text-sm text-gray-600">Plus de 100 expressions utiles</p>
              </div>
              <div>
                <i className="ri-volume-up-line text-3xl text-orange-500 mb-2" />
                <h3 className="font-semibold text-gray-800">Prononciation</h3>
                <p className="text-sm text-gray-600">Phonétique et audio intégré</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <Link
            href="/ebook"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg whitespace-nowrap"
          >
            <i className="ri-book-open-line" />
            Ouvrir le guide
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <i className="ri-plane-line text-4xl text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Aéroport</h3>
            <p className="text-sm text-gray-600">Enregistrement, contrôles, correspondances</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <i className="ri-hotel-line text-4xl text-green-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Hôtel</h3>
            <p className="text-sm text-gray-600">Réservation, services, réclamations</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <i className="ri-restaurant-line text-4xl text-orange-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Restaurant</h3>
            <p className="text-sm text-gray-600">Commandes, allergies, paiement</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <i className="ri-alarm-warning-line text-4xl text-red-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Urgences</h3>
            <p className="text-sm text-gray-600">Secours, police, hôpital</p>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>🇪🇸 Phrases essentielles • 🎯 Situations pratiques • 📱 Toujours accessible</p>
        </div>
      </div>
    </div>
  );
}