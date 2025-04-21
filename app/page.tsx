'use client';

import { useState } from 'react';
import enTranslations from './i18n/locales/en.json';
import ptBRTranslations from './i18n/locales/pt-BR.json';

const translations = {
  'en': enTranslations,
  'pt-BR': ptBRTranslations
};

export default function Home() {
  const [lang, setLang] = useState('en');
  const t = translations[lang as keyof typeof translations];

  const socials = [
    { name: 'Telegram', url: 'https://t.me/zxcsix', icon: '📱' },
    { name: 'GitHub', url: 'https://github.com/Moyasee', icon: '💻' },
    { name: 'HydraLibrary', url: 'https://moyasee.github.io/HydraLibrary/', icon: '📚' },
    { name: 'IsItOnHydra', url: 'https://isitonhydra.xyz', icon: '🔍' },
  ];

  const renderText = (text: string) => {
    const parts = text.split(/(<link>.*?<\/link>)/);
    return parts.map((part, index) => {
      if (part.startsWith('<link>') && part.endsWith('</link>')) {
        const linkText = part.replace('<link>', '').replace('</link>', '');
        return (
          <a
            key={index}
            href="https://isitonhydra.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            {linkText}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      <div className="animated-bg" />
      <div className="fixed top-20 left-10 max-w-md z-10 transform -rotate-6">
        <div className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 animate-pulse"></div>
          <p className="relative text-sm font-medium leading-tight">
            {t.badge}
          </p>
          <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-white/10 rounded-full blur-xl"></div>
        </div>
      </div>
      <main className="min-h-screen flex flex-col items-center justify-center p-4 relative">
        <div className="max-w-2xl w-full bg-black/40 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-white/10">
          <div className="flex justify-end mb-6 space-x-2">
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                lang === 'en'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('pt-BR')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                lang === 'pt-BR'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              PT-BR
            </button>
          </div>

          <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {t.title}
          </h1>

          <ul className="space-y-4 mb-8">
            {Object.entries(t.disclaimers).map(([key, text]) => (
              <li key={key} className="flex items-start bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                <span className="mr-3 text-blue-400 font-bold">{key}.</span>
                <span className="text-gray-200">{renderText(text)}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-200">{t.socials}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="text-gray-200">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
