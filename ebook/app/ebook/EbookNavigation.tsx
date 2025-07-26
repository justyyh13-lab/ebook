'use client';

interface Section {
  id: string;
  title: string;
  icon: string;
}

interface Props {
  sections: Section[];
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export default function EbookNavigation({ sections, currentSection, onSectionChange }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sticky top-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Sections</h2>
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all whitespace-nowrap ${
              currentSection === section.id
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <i className={`${section.icon} text-lg`} />
            <span className="text-sm font-medium">{section.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}