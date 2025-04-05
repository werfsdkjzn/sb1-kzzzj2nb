import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Github, Twitter } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Hackerin
              </span>
            </Link>
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
                  <a href="#" className="hover:text-white transition-colors">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Conecte-se</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-800 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p>© 2025 Hackerin. Todos os direitos reservados.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Termos de Serviço
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}