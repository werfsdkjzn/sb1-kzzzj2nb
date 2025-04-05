import { Terminal, BookOpen, Command, FileSearch, Workflow, BrainCircuit } from 'lucide-react';
import { Task } from '../types/course';

export const linuxTasks: Task[] = [
  {
    id: 1,
    title: "Introdução ao Linux",
    objective: "Compreender a importância do Linux e onde ele é usado.",
    icon: <Terminal className="w-6 h-6" />,
    content: [
      "Linux é um sistema operacional de código aberto usado em vários campos, de smartphones a supercomputadores.",
      "Distribuições comuns do Linux incluem Ubuntu e Debian.",
      "Linux é leve e alimenta sistemas críticos como sistemas de entretenimento automotivo e sensores industriais."
    ],
    questions: [
      {
        text: "Quais dos seguintes dispositivos normalmente executam Linux?",
        choices: [
          { id: "a", text: "Smart TV", correct: true },
          { id: "b", text: "Game Boy Color", correct: false },
          { id: "c", text: "Roteador Wi-Fi", correct: true },
          { id: "d", text: "iPod Classic", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Seus Primeiros Passos com Linux",
    objective: "Familiarizar-se com o lançamento da sua primeira máquina Linux.",
    icon: <BookOpen className="w-6 h-6" />,
    content: [
      "Você pode interagir com uma máquina Linux em seu navegador.",
      "Você começará com uma configuração básica do Ubuntu neste tutorial.",
      "Aprenda a importância do gerenciamento de máquinas (iniciar, terminar e visualizar detalhes)."
    ],
    questions: [
      {
        text: "Qual comando é mais apropriado para visualizar informações detalhadas do sistema?",
        choices: [
          { id: "a", text: "uname -a", correct: true },
          { id: "b", text: "show-info", correct: false },
          { id: "c", text: "system-details", correct: false },
          { id: "d", text: "linux-info", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Usando Comandos Básicos no Terminal",
    objective: "Aprender a executar comandos simples no terminal.",
    icon: <Command className="w-6 h-6" />,
    content: [
      "O Terminal é uma interface poderosa baseada em texto para interagir com o Linux.",
      "Comandos comuns: echo para exibir texto.",
      "O comando whoami mostra o nome do usuário atual."
    ],
    questions: [
      {
        text: "Qual é a sintaxe correta para exibir 'Hello Linux!' no terminal?",
        choices: [
          { id: "a", text: 'echo "Hello Linux!"', correct: true },
          { id: "b", text: 'print "Hello Linux!"', correct: false },
          { id: "c", text: 'display "Hello Linux!"', correct: false },
          { id: "d", text: 'show "Hello Linux!"', correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Navegando pelo Sistema de Arquivos",
    objective: "Entender como explorar e gerenciar arquivos no Linux.",
    icon: <FileSearch className="w-6 h-6" />,
    content: [
      "Use ls para listar arquivos e diretórios.",
      "Mude diretórios com cd.",
      "Exiba conteúdo de arquivos com cat.",
      "pwd mostra seu caminho atual do diretório."
    ],
    questions: [
      {
        text: "Para navegar até Documents e ver seu conteúdo, qual comando você usa?",
        choices: [
          { id: "a", text: "cd Documents && ls", correct: true },
          { id: "b", text: "goto Documents, list", correct: false },
          { id: "c", text: "open Documents; show", correct: false },
          { id: "d", text: "Documents/list", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Buscando Arquivos Eficientemente",
    objective: "Aprender a encontrar arquivos rapidamente no Linux.",
    icon: <Terminal className="w-6 h-6" />,
    content: [
      "find: Procure arquivos por nome em diretórios.",
      "grep: Procure conteúdo específico dentro de arquivos.",
      "Combine comandos para buscas mais eficientes."
    ],
    questions: [
      {
        text: "Para localizar um arquivo config.txt em todo o sistema, qual comando é mais eficiente?",
        choices: [
          { id: "a", text: "find / -name config.txt", correct: true },
          { id: "b", text: "search config.txt", correct: false },
          { id: "c", text: "locate config.txt", correct: false },
          { id: "d", text: "grep config.txt /", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Introdução aos Operadores Shell",
    objective: "Aprender a combinar e redirecionar comandos usando operadores shell.",
    icon: <Workflow className="w-6 h-6" />,
    content: [
      "&: Execute comandos em segundo plano.",
      "&&: Execute comandos sequencialmente (apenas se o primeiro for bem-sucedido).",
      ">: Redirecione a saída para um arquivo (sobrescrever).",
      ">>: Redirecione a saída e adicione ao arquivo."
    ],
    questions: [
      {
        text: "Para adicionar a palavra 'Hello' ao final de um arquivo existente, qual comando você usa?",
        choices: [
          { id: "a", text: 'echo "Hello" >> greetings.txt', correct: true },
          { id: "b", text: 'echo "Hello" > greetings.txt', correct: false },
          { id: "c", text: 'echo "Hello" -> greetings.txt', correct: false },
          { id: "d", text: 'append "Hello" greetings.txt', correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Conclusão e Resumo",
    objective: "Recapitular as habilidades essenciais aprendidas neste módulo.",
    icon: <BrainCircuit className="w-6 h-6" />,
    content: [
      "Você interagiu com sua primeira máquina Linux.",
      "Executou comandos básicos como echo, whoami, ls, cd, cat e pwd.",
      "Usou os comandos find e grep para procurar arquivos.",
      "Explorou operadores shell para otimizar tarefas."
    ],
    questions: [
      {
        text: "Entre os seguintes, qual NÃO é um comando nativo do Linux?",
        choices: [
          { id: "a", text: "show-files", correct: true },
          { id: "b", text: "ls", correct: false },
          { id: "c", text: "pwd", correct: false },
          { id: "d", text: "cat", correct: false }
        ]
      }
    ]
  }
];