import React from 'react';
import { Terminal, Network, ArrowRight, Server, Command, Shield, BookOpen, Edit, Activity, PenTool as Tool, Search, Layers, Globe, Wifi, Lock } from 'lucide-react';
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Linux Fundamentals Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Terminal className="w-20 h-20 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Fundamentos do Linux</h2>
              <p className="text-gray-400 mb-4">
                Aprenda os conceitos básicos do Linux e sua importância nos sistemas operacionais.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Introdução ao Linux
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Conceitos básicos
                </div>
              </div>
              <Link
                to="/linux"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Linux Advanced Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Shield className="w-20 h-20 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Linux Avançado</h2>
              <p className="text-gray-400 mb-4">
                Domine conceitos avançados de administração e segurança Linux.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Administração de sistemas
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Segurança básicos de sistemas
                </div>
              </div>
              <Link
                to="/linux2"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Linux CLI Basic Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Command className="w-20 h-20 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Linha de Comando Linux</h2>
              <p className="text-gray-400 mb-4">
                Domine os comandos essenciais do Linux e aprenda a navegar pelo sistema de arquivos.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Sistema de arquivos Linux
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Comandos básicos
                </div>
              </div>
              <Link
                to="/linux-cli"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Linux CLI Advanced Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Terminal className="w-20 h-20 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Linha de Comando Avançada</h2>
              <p className="text-gray-400 mb-4">
                Aprenda conceitos avançados de linha de comando e administração do sistema.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Gerenciamento de serviços
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Administração avançada
                </div>
              </div>
              <Link
                to="/linux-cli2"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Linux CLI Text Processing Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Edit className="w-20 h-20 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Manipulação de Texto</h2>
              <p className="text-gray-400 mb-4">
                Aprenda a editar e manipular texto usando ferramentas poderosas do Linux.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Editores de texto
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Processamento de texto
                </div>
              </div>
              <Link
                to="/linux-cli3"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Linux CLI Process Management Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Activity className="w-20 h-20 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Processos e Monitoramento</h2>
              <p className="text-gray-400 mb-4">
                Aprenda a gerenciar processos, monitorar arquivos e personalizar seu ambiente Bash.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Gerenciamento de processos
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Personalização do Bash
                </div>
              </div>
              <Link
                to="/linux-cli4"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Linux CLI Tools Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Tool className="w-20 h-20 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Ferramentas Práticas</h2>
              <p className="text-gray-400 mb-4">
                Aprenda a usar ferramentas essenciais como Netcat e Socat para testes de rede e segurança.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Netcat e Socat
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Transferência de arquivos
                </div>
              </div>
              <Link
                to="/linux-cli5"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Virtual Machines Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Server className="w-20 h-20 text-emerald-500" />
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
              </div>
              <Link
                to="/machines"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Explorar Máquinas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Network Enumeration Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Search className="w-20 h-20 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Enumeração de Rede</h2>
              <p className="text-gray-400 mb-4">
                Aprenda técnicas de varredura de portas e enumeração de serviços de rede.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Varredura de portas
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Enumeração de serviços
                </div>
              </div>
              <Link
                to="/networking"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Networking Course Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Network className="w-20 h-20 text-emerald-500" />
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
              </div>
              <Link
                to="/networking"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Advanced Networking Course Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Layers className="w-20 h-20 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Redes Avançado</h2>
              <p className="text-gray-400 mb-4">
                Aprenda sobre modelos OSI/TCP/IP, proxies, endereçamento IP avançado e ferramentas de rede.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Modelos de rede
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Ferramentas avançadas
                </div>
              </div>
              <Link
                to="/networking2"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Network Protocols Course Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Globe className="w-20 h-20 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Protocolos de Rede</h2>
              <p className="text-gray-400 mb-4">
                Domine os principais protocolos de rede, incluindo TCP/UDP, ICMP, e protocolos de segurança.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Protocolos de comunicação
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Segurança e autenticação
                </div>
              </div>
              <Link
                to="/networking3"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Wireless Networks Course Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Wifi className="w-20 h-20 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Redes Sem Fio</h2>
              <p className="text-gray-400 mb-4">
                Aprenda sobre redes sem fio, segurança wireless e protocolos de autenticação.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Tecnologias wireless
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Segurança e criptografia
                </div>
              </div>
              <Link
                to="/networking4"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
              >
                Começar Curso
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Network Security Card */}
          <div className="bg-zinc-800 rounded-xl shadow-lg overflow-hidden border border-zinc-700">
            <div className="h-40 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
              <Lock className="w-20 h-20 text-emerald-500" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Criptografia e Segurança</h2>
              <p className="text-gray-400 mb-4">
                Aprenda sobre criptografia, VPNs, autenticação e segurança de rede.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Criptografia e VPNs
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <span className="w-4 h-4 rounded-full bg-emerald-900 text-emerald-500 flex items-center justify-center mr-2">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                  Segurança avançada
                </div>
              </div>
              <Link
                to="/networking5"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-colors w-full justify-center"
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