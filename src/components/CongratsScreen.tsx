import React from 'react';
import { Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CongratsScreenProps {
  onReset: () => void;
  nextCourse?: string;
}

export default function CongratsScreen({ onReset, nextCourse }: CongratsScreenProps) {
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
      <div className="space-y-4">
        {nextCourse ? (
          <Link
            to={nextCourse}
            className="block w-full px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 font-medium"
          >
            Próximo Curso
          </Link>
        ) : null}
        <button
          onClick={onReset}
          className="w-full px-8 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
        >
          Recomeçar o Curso
        </button>
      </div>
    </div>
  );
}