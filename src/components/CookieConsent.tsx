import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    } else if (consent === 'accepted') {
      initializeAnalytics();
    }
  }, []);

  const initializeAnalytics = () => {
    // Initialize Google Analytics
    const gaScript1 = document.createElement('script');
    gaScript1.async = true;
    gaScript1.src = 'https://www.googletagmanager.com/gtag/js?id=G-F76356605X';
    
    const gaScript2 = document.createElement('script');
    gaScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-F76356605X');
    `;

    // Initialize Hotjar
    const hjScript = document.createElement('script');
    hjScript.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5272400,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;
    
    document.head.appendChild(gaScript1);
    document.head.appendChild(gaScript2);
    document.head.appendChild(hjScript);
  };

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
    initializeAnalytics();
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-gray-600 text-sm sm:text-base">
            Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site. 
            Usamos ferramentas como Google Analytics e Hotjar para entender como você interage 
            com nosso site. Ao clicar em "Aceitar", você concorda com o uso de cookies para análise, 
            conforme nossa{' '}
            <Link to="/privacy" className="text-indigo-600 hover:text-indigo-800">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <button
            onClick={declineCookies}
            className="flex-1 sm:flex-none px-4 py-2 text-gray-600 hover:text-gray-800 text-sm sm:text-base"
          >
            Recusar
          </button>
          <button
            onClick={acceptCookies}
            className="flex-1 sm:flex-none px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base"
          >
            Aceitar
          </button>
          <button
            onClick={declineCookies}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}