'use client';

import { useState } from 'react';
import EbookNavigation from './EbookNavigation';
import AirportSection from './sections/AirportSection';
import HotelSection from './sections/HotelSection';
import RestaurantSection from './sections/RestaurantSection';
import ShoppingSection from './sections/ShoppingSection';
import TransportSection from './sections/TransportSection';
import EmergencySection from './sections/EmergencySection';
import HospitalSection from './sections/HospitalSection';
import BasicSection from './sections/BasicSection';

export default function EbookPage() {
  const [currentSection, setCurrentSection] = useState('basic');

  const sections = [
    { id: 'basic', title: 'Phrases de base', icon: 'ri-chat-1-line' },
    { id: 'airport', title: 'Aéroport', icon: 'ri-plane-line' },
    { id: 'hotel', title: 'Hôtel', icon: 'ri-hotel-line' },
    { id: 'restaurant', title: 'Restaurant', icon: 'ri-restaurant-line' },
    { id: 'shopping', title: 'Shopping', icon: 'ri-shopping-cart-line' },
    { id: 'transport', title: 'Transport', icon: 'ri-bus-line' },
    { id: 'emergency', title: 'Urgences', icon: 'ri-alarm-warning-line' },
    { id: 'hospital', title: 'Hôpital', icon: 'ri-hospital-line' },
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 'basic':
        return <BasicSection />;
      case 'airport':
        return <AirportSection />;
      case 'hotel':
        return <HotelSection />;
      case 'restaurant':
        return <RestaurantSection />;
      case 'shopping':
        return <ShoppingSection />;
      case 'transport':
        return <TransportSection />;
      case 'emergency':
        return <EmergencySection />;
      case 'hospital':
        return <HospitalSection />;
      default:
        return <BasicSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Guide de Conversation Français-Espagnol
          </h1>
          <p className="text-xl text-gray-600">
            Votre compagnon de voyage pour l'Espagne
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <EbookNavigation
              sections={sections}
              currentSection={currentSection}
              onSectionChange={setCurrentSection}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6 min-h-[600px]">
              {renderSection()}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>📱 Fonctionne hors ligne • 🇪🇸 Phrases essentielles • 🎯 Situations pratiques</p>
        </div>
      </div>
    </div>
  );
}