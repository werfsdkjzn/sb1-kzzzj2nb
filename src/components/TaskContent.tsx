import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Task } from '../types/course';

interface TaskContentProps {
  task: Task;
  selectedAnswers: { [key: number]: string };
  completed: boolean;
  onAnswerSelect: (questionIndex: number, choiceId: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function TaskContent({
  task,
  selectedAnswers,
  completed,
  onAnswerSelect,
  onNext,
  onPrev,
  isFirst,
  isLast
}: TaskContentProps) {
  const isQuestionEnabled = (questionIndex: number) => {
    if (questionIndex === 0) return true;
    const prevQuestion = task.questions[questionIndex - 1];
    const correctAnswer = prevQuestion.choices.find(choice => choice.correct)?.id;
    return selectedAnswers[questionIndex - 1] === correctAnswer;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{task.title}</h2>
          <p className="text-gray-500 text-sm mt-1">Tarefa {task.id}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-100">
          <h3 className="font-semibold text-indigo-900 mb-2">Objetivo:</h3>
          <p className="text-indigo-800">{task.objective}</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Conteúdo:</h3>
          <div className="space-y-3">
            {task.content.map((content, index) => (
              content.startsWith('<table') ? (
                <div key={index} dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                <p key={index} className="text-gray-700 whitespace-pre-line">
                  {content}
                </p>
              )
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {task.questions.map((question, questionIndex) => {
            const correctAnswer = question.choices.find(choice => choice.correct)?.id;
            const selectedAnswer = selectedAnswers[questionIndex];
            const isQuestionCorrect = selectedAnswer === correctAnswer;
            const enabled = isQuestionEnabled(questionIndex);

            return (
              <div 
                key={questionIndex} 
                className={`bg-gray-50 p-6 rounded-xl border border-gray-100 ${!enabled ? 'opacity-50' : ''}`}
              >
                <h3 className="font-semibold text-gray-800 mb-4">
                  {question.text}
                  {!enabled && (
                    <span className="ml-2 text-sm text-gray-500">
                      (Responda corretamente a questão anterior primeiro)
                    </span>
                  )}
                </h3>
                <div className="space-y-3">
                  {question.choices.map((choice) => {
                    const isSelected = selectedAnswer === choice.id;
                    const showCorrect = isQuestionCorrect && choice.correct;
                    
                    return (
                      <button
                        key={choice.id}
                        onClick={() => {
                          if (enabled && !isQuestionCorrect) {
                            if (choice.correct) {
                              onAnswerSelect(questionIndex, choice.id);
                            }
                          }
                        }}
                        disabled={isQuestionCorrect || !enabled}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          isSelected
                            ? 'bg-green-100 border-green-300'
                            : 'bg-white border-gray-200 hover:bg-gray-50'
                        } ${(isQuestionCorrect || !enabled) ? 'cursor-not-allowed' : ''}`}
                      >
                        <span className="font-medium">
                          {choice.id.toUpperCase()}) {choice.text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between pt-4">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className={`flex items-center px-6 py-2.5 rounded-lg ${
              isFirst
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-50'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Anterior
          </button>
          <button
            onClick={onNext}
            className="flex items-center px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700"
          >
            {isLast ? 'Finalizar' : 'Próxima'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}