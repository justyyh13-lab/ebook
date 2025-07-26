'use client';

import { useState } from 'react';

interface Phrase {
  french: string;
  spanish: string;
  pronunciation: string;
}

interface Props {
  phrase: Phrase;
}

export default function PhraseCard({ phrase }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playPronunciation = () => {
    if ('speechSynthesis' in window) {
      setIsPlaying(true);
      const utterance = new SpeechSynthesisUtterance(phrase.spanish);
      utterance.lang = 'es-ES';
      utterance.rate = 0.8;
      utterance.onend = () => setIsPlaying(false);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="text-sm text-gray-600 mb-1">Français</div>
          <div className="font-medium text-gray-800">{phrase.french}</div>
        </div>
        <button
          onClick={playPronunciation}
          className="ml-2 p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors whitespace-nowrap"
          disabled={isPlaying}
        >
          <i className={`ri-${isPlaying ? 'pause' : 'volume-up'}-line`} />
        </button>
      </div>
      
      <div className="mb-2">
        <div className="text-sm text-gray-600 mb-1">Español</div>
        <div className="font-medium text-blue-600 text-lg">{phrase.spanish}</div>
      </div>
      
      <div>
        <div className="text-sm text-gray-600 mb-1">Prononciation</div>
        <div className="text-sm text-gray-500 italic">{phrase.pronunciation}</div>
      </div>
    </div>
  );
}