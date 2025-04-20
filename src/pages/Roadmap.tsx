import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Network, ArrowRight, Shield, Command, BookOpen, Edit, Activity, PenTool as Tool, Search, Layers, Globe, Wifi, Lock } from 'lucide-react';

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trilhas de Aprendizado
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Escolha uma trilha e comece sua jornada de aprendizado em cibersegurança
          </p>
        </div>

        {/* Linux Path */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Terminal className="w-8 h-8 text-emerald-500 mr-3" />
            Trilha Linux
          </h2>
          <div className="grid gap-6">
            <div className="flex items-center">
              <Link 
                to="/linux"
                className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">1. Fundamentos do Linux</h3>
                    <p className="text-gray-600 mt-2">Aprenda os conceitos básicos do Linux e sua importância nos sistemas operacionais.</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-emerald-500" />
                </div>
              </Link>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-px bg-emerald-500 mx-4"></div>
              <Link 
                to="/linux2"
                className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">2. Linux Avançado</h3>
                    <p className="text-gray-600 mt-2">Domine conceitos avançados de administração e segurança Linux.</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-emerald-500" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Linux CLI Path */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Command className="w-8 h-8 text-emerald-500 mr-3" />
            Trilha Linha de Comando
          </h2>
          <div className="grid gap-6">
            {[
              {
                path: "/linux-cli",
                title: "1. Linha de Comando Linux",
                description: "Domine os comandos essenciais do Linux e aprenda a navegar pelo sistema de arquivos."
              },
              {
                path: "/linux-cli2",
                title: "2. Linha de Comando Avançada",
                description: "Aprenda conceitos avançados de linha de comando e administração do sistema."
              },
              {
                path: "/linux-cli3",
                title: "3. Manipulação de Texto",
                description: "Aprenda a editar e manipular texto usando ferramentas poderosas do Linux."
              },
              {
                path: "/linux-cli4",
                title: "4. Processos e Monitoramento",
                description: "Aprenda a gerenciar processos, monitorar arquivos e personalizar seu ambiente."
              },
              {
                path: "/linux-cli5",
                title: "5. Ferramentas Práticas",
                description: "Aprenda a usar ferramentas essenciais como Netcat e Socat."
              }
            ].map((course, index) => (
              <div key={course.path} className="flex items-center">
                {index > 0 && <div className="w-8 h-px bg-emerald-500 mx-4"></div>}
                <Link 
                  to={course.path}
                  className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                      <p className="text-gray-600 mt-2">{course.description}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-emerald-500" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Networking Path */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Network className="w-8 h-8 text-emerald-500 mr-3" />
            Trilha Redes
          </h2>
          <div className="grid gap-6">
            {[
              {
                path: "/networking",
                title: "1. Fundamentos de Redes",
                description: "Aprenda os conceitos essenciais de redes e comunicação."
              },
              {
                path: "/networking2",
                title: "2. Redes Avançado",
                description: "Aprenda sobre modelos OSI/TCP/IP, proxies e endereçamento IP avançado."
              },
              {
                path: "/networking3",
                title: "3. Protocolos de Rede",
                description: "Domine os principais protocolos de rede e suas aplicações."
              },
              {
                path: "/networking4",
                title: "4. Redes Sem Fio",
                description: "Aprenda sobre redes sem fio, segurança wireless e protocolos."
              },
              {
                path: "/networking5",
                title: "5. Criptografia e Segurança",
                description: "Aprenda sobre criptografia, VPNs e segurança de rede."
              }
            ].map((course, index) => (
              <div key={course.path} className="flex items-center">
                {index > 0 && <div className="w-8 h-px bg-emerald-500 mx-4"></div>}
                <Link 
                  to={course.path}
                  className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                      <p className="text-gray-600 mt-2">{course.description}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-emerald-500" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}