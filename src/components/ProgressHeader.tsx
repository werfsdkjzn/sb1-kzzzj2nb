import React from 'react';
import { Network, Trophy } from 'lucide-react';

interface ProgressHeaderProps {
  title: string;
  subtitle: string;
  progress: number;
}

export default function ProgressHeader({ title, subtitle, progress }: ProgressHeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Network className="w-10 h-10 text-indigo-600" />
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                {title}
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                {subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <div className="text-lg font-semibold text-gray-700">
              Progresso: {Math.round(progress)}%
            </div>
          </div>
        </div>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </header>
  );
}