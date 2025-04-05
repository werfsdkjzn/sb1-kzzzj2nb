import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Task } from '../types/course';

interface TaskListProps {
  tasks: Task[];
  currentTask: number;
  completedTasks: { [key: number]: boolean };
  onTaskSelect: (index: number) => void;
}

export default function TaskList({ tasks, currentTask, completedTasks, onTaskSelect }: TaskListProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 h-fit">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Módulos do Curso</h2>
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <button
            key={task.id}
            onClick={() => onTaskSelect(index)}
            className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-all ${
              currentTask === index
                ? 'bg-indigo-100 text-indigo-700'
                : 'hover:bg-gray-50'
            }`}
          >
            <div className={`${currentTask === index ? 'text-indigo-600' : 'text-gray-500'}`}>
              {task.icon}
            </div>
            <div className="flex-1">
              <div className="font-medium">{task.title}</div>
              {completedTasks[index] && (
                <span className="text-xs text-green-600 flex items-center mt-1">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Concluído
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}