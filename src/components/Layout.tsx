import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Map, Menu, X, Twitter, MessageCircle as Reddit } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black border-b border-zinc-800 relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Hackerin
              </span>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/linux" className="text-gray-300 hover:text-white transition-colors">
                Linux
              </Link>
              <Link to="/networking" className="text-gray-300 hover:text-white transition-colors">
                Redes
              </Link>
              <Link to="/machines" className="text-gray-300 hover:text-white transition-colors">
                Máquinas
              </Link>
              <Link to="/roadmap" className="text-gray-300 hover:text-white transition-colors flex items-center">
                <Map className="w-4 h-4 mr-1" />
                Trilhas
              </Link>
              <a 
                href="https://hackerin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Visitar Hackerin
              </a>
            </nav>
          </div>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute left-0 right-0 top-full bg-black border-b border-zinc-800 px-4 py-4`}>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/linux" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Linux
              </Link>
              <Link 
                to="/networking" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Redes
              </Link>
              <Link 
                to="/machines" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Máquinas
              </Link>
              <Link 
                to="/roadmap" 
                className="text-gray-300 hover:text-white transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Map className="w-4 h-4 mr-1" />
                Trilhas
              </Link>
              <a 
                href="https://hackerin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Visitar Hackerin
              </a>
            </nav>
          </div>
        </div>
      </header>

      {children}

      <footer className="mt-auto bg-zinc-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6 text-emerald-500" />
                <span className="text-xl font-bold text-white">Hackerin</span>
              </div>
              <p className="text-sm">
                Fornecendo treinamento em cibersegurança e ambientes de teste de penetração de classe mundial.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Trilhas de Aprendizado</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/linux" className="hover:text-white transition-colors">
                    Fundamentos do Linux
                  </Link>
                </li>
                <li>
                  <Link to="/linux2" className="hover:text-white transition-colors">
                    Administração de Sistemas
                  </Link>
                </li>
                <li>
                  <Link to="/networking" className="hover:text-white transition-colors">
                    Redes
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/machines" className="hover:text-white transition-colors">
                    Máquinas Virtuais
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white transition-colors">
                    Termos de Serviço
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Conecte-se</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://x.com/Proffess_X" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.reddit.com/r/hackerin/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  <Reddit className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-800 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p>© 2025 Hackerin. Todos os direitos reservados.</p>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Termos de Serviço
                </Link>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}