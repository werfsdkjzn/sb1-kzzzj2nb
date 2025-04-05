import React from 'react';
import { Trophy } from 'lucide-react';

interface CongratsScreenProps {
  onReset: () => void;
}

export default function CongratsScreen({ onReset }: CongratsScreenProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-2xl mx-auto">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <Trophy className="w-12 h-12 text-yellow-500" />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Parabéns! Você completou todas as tarefas!
      </h2>
      <p className="text-gray-600 mb-4 text-lg">
        Você agora tem uma compreensão sólida dos fundamentos de redes.
        Continue explorando e aprendendo mais!
      </p>
      <p className="text-2xl font-bold text-indigo-600 mb-8">
        Progresso: 100%
      </p>
      <button
        onClick={onReset}
        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 font-medium"
      >
        Recomeçar o Curso
      </button>
    </div>
  );
}