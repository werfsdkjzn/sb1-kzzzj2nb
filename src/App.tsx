import React from 'react';
import { Terminal, Network, ArrowRight, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Domine Cibersegurança com{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Hackerin
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Aprenda cibersegurança através de experiência prática com nossos cursos interativos e laboratórios virtuais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Linux Fundamentals Card */}
          <div className="group relative perspective">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full duration-1000 h-full">
              <div className="absolute backface-hidden w-full h-full">
                <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden h-full border border-zinc-700">
                  <div className="h-48 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
                    <Terminal className="w-24 h-24 text-emerald-500" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Fundamentos do Linux</h2>
                    <p className="text-gray-400 mb-4">
                      Domine os fundamentos da linha de comando Linux e administração de sistemas através de aulas interativas.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-300">
                        <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        Aprenda comandos básicos do Linux
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        Entenda a navegação no sistema de arquivos
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        Domine conceitos básicos de administração
                      </div>
                    </div>
                    <Link
                      to="/linux"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors"
                    >
                      Começar Curso
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
                <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden h-full p-6 border border-zinc-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Visão Geral do Curso</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white">Módulo 1: Introdução</h4>
                      <p className="text-gray-400 text-sm">Aprenda sobre a importância do Linux e onde ele é usado.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Módulo 2: Primeiros Passos</h4>
                      <p className="text-gray-400 text-sm">Comece com sua primeira máquina Linux.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Módulo 3: Comandos Básicos</h4>
                      <p className="text-gray-400 text-sm">Domine comandos essenciais do terminal.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Módulo 4: Sistema de Arquivos</h4>
                      <p className="text-gray-400 text-sm">Navegue e gerencie arquivos efetivamente.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Módulo 5: Busca de Arquivos</h4>
                      <p className="text-gray-400 text-sm">Encontre arquivos de forma rápida e eficiente.</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <Link
                      to="/linux"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors"
                    >
                      Iniciar Curso
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Administration Card */}
          <div className="group relative perspective">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full duration-1000 h-full">
              <div className="absolute backface-hidden w-full h-full">
                <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden h-full border border-zinc-700">
                  <div className="h-48 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
                    <Terminal className="w-24 h-24 text-emerald-500" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Administração de Sistemas</h2>
                    <p className="text-gray-400 mb-4">
                      Domine a administração de sistemas Linux com conceitos avançados em gerenciamento de usuários, serviços e segurança.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-300">
                        <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        Gerenciamento de usuários e permissões
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        Serviços e processos do sistema
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        Melhores práticas de segurança
                      </div>
                    </div>
                    <Link
                      to="/linux2"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors"
                    >
                      Iniciar Curso
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
                <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden h-full p-6 border border-zinc-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Tópicos do Curso</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-white">Módulo 1: Arquitetura do Sistema</h4>
                      <p className="text-gray-400 text-sm">Mergulhe fundo na arquitetura do sistema Linux.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Módulo 2: Gerenciamento de Usuários</h4>
                      <p className="text-gray-400 text-sm">Gerenciamento avançado de usuários e permissões.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Módulo 3: Controle de Processos</h4>
                      <p className="text-gray-400 text-sm">Domine o gerenciamento de serviços e processos.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Módulo 4: Gerenciamento de Pacotes</h4>
                      <p className="text-gray-400 text-sm">Técnicas avançadas de gerenciamento de software.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Módulo 5: Segurança</h4>
                      <p className="text-gray-400 text-sm">Implemente medidas robustas de segurança.</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <Link
                      to="/linux2"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors"
                    >
                      Começar Curso
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Virtual Machines Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-zinc-700">
            <div className="h-48 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Server className="w-24 h-24 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Máquinas Virtuais</h2>
              <p className="text-gray-400 mb-4">
                Pratique suas habilidades em ambientes reais com máquinas virtuais vulneráveis.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Diferentes níveis de dificuldade
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Ambientes Linux e Windows
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Desafios práticos de segurança
                </div>
              </div>
              <Link
                to="/machines"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors"
              >
                Explorar Máquinas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Networking Course Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-zinc-700">
            <div className="h-48 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Network className="w-24 h-24 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Fundamentos de Redes</h2>
              <p className="text-gray-400 mb-4">
                Entenda os fundamentos de redes de computadores, protocolos e segurança de rede.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Aprenda sobre endereçamento IP
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Entenda protocolos de rede
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Domine segurança básica de redes
                </div>
              </div>
              <Link
                to="/networking"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;