import { ReactNode } from 'react';

export interface Choice {
  id: string;
  text: string;
  correct: boolean;
}

export interface Question {
  text: string;
  choices: Choice[];
}

export interface Task {
  id: number;
  title: string;
  objective: string;
  icon: ReactNode;
  content: string[];
  questions: Question[];
}