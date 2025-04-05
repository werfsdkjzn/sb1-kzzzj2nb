export interface VirtualMachine {
  id: string;
  nome: string;
  dificuldade: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Especialista';
  nivelNumerico: number; // 1-10
  descricao: string;
  sistemaOperacional: string;
  tags: string[];
  pontos: number;
}