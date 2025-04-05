import React, { useState, useMemo } from 'react';
import { Search, Shield, Server, ChevronRight, Download, Lock } from 'lucide-react';
import { machines } from '../data/machines';
import { VirtualMachine } from '../types/vm';

export default function VirtualMachines() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');

  const filteredMachines = useMemo(() => {
    return machines.filter(machine => {
      const matchesSearch = machine.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        machine.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        machine.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesDifficulty = !selectedDifficulty || machine.dificuldade === selectedDifficulty;

      return matchesSearch && matchesDifficulty;
    });
  }, [searchTerm, selectedDifficulty]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciante':
        return 'bg-green-100 text-green-800';
      case 'Intermediário':
        return 'bg-yellow-100 text-yellow-800';
      case 'Avançado':
        return 'bg-orange-100 text-orange-800';
      case 'Especialista':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Server className="w-10 h-10 text-indigo-600" />
              <div>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Máquinas Virtuais
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                  Escolha uma máquina virtual para hackear e pratique suas habilidades
                </p>
              </div>
            </div>
            <button
              onClick={() => window.open('/vpn-pack.zip')}
              className="flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-colors shadow-md"
            >
              <Lock className="w-4 h-4 mr-2" />
              <span className="mr-2">Baixar Pacote VPN</span>
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar máquinas virtuais..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <select
              className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="">Todas as dificuldades</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
              <option value="Especialista">Especialista</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredMachines.map((machine) => (
            <div key={machine.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{machine.nome}</h2>
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(machine.dificuldade)}`}>
                      {machine.dificuldade}
                    </span>
                    <span className="text-sm text-gray-500">
                      {machine.pontos} pontos
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{machine.descricao}</p>
                  <div className="flex flex-wrap gap-2">
                    {machine.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4">
                    <button className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors">
                      Iniciar Desafio
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMachines.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhuma máquina virtual encontrada com os critérios selecionados.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}