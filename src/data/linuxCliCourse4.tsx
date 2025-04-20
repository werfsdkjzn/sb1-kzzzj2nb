import { Terminal, Activity, Monitor, Download, Settings, Clock, Server } from 'lucide-react';
import { Task } from '../types/course';

export const linuxCliTasks4: Task[] = [
  {
    id: 1,
    title: "Processos em Segundo Plano",
    objective: "Aprender a executar e controlar processos em segundo plano.",
    icon: <Activity className="w-6 h-6" />,
    content: [
      "O Linux permite executar processos em segundo plano para liberar o terminal.",
      "",
      "Executando processos em segundo plano:",
      "• comando & - Inicia processo em segundo plano",
      "• Ctrl+Z - Suspende processo atual",
      "• bg - Continua processo suspenso em segundo plano",
      "• fg - Traz processo para primeiro plano",
      "• jobs - Lista processos em segundo plano",
      "",
      "Exemplo prático:",
      "ping -c 50 localhost > resultados_ping.txt &",
      "",
      "Dicas:",
      "• Use & para processos longos",
      "• jobs mostra números dos processos",
      "• fg %N traz processo específico para frente",
      "• Ctrl+C cancela processo em primeiro plano"
    ],
    questions: [
      {
        text: "Como colocar um processo em segundo plano ao iniciá-lo?",
        choices: [
          { id: "a", text: "bg processo", correct: false },
          { id: "b", text: "comando &", correct: true },
          { id: "c", text: "background", correct: false },
          { id: "d", text: "start -b", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Listagem de Processos",
    objective: "Aprender a visualizar e entender processos em execução.",
    icon: <Server className="w-6 h-6" />,
    content: [
      "O comando ps é fundamental para visualizar processos em execução.",
      "",
      "Opções comuns do ps:",
      "• ps - Mostra processos do usuário atual",
      "• ps aux - Lista detalhada de todos os processos",
      "• ps -ef - Formato alternativo de listagem",
      "• ps -C nome - Busca processo por nome",
      "• ps --sort=-%cpu - Ordena por uso de CPU",
      "",
      "Colunas importantes:",
      "• USER - Dono do processo",
      "• PID - ID do processo",
      "• %CPU - Uso de CPU",
      "• %MEM - Uso de memória",
      "• COMMAND - Comando executado",
      "",
      "Exemplo de uso:",
      "ps aux | grep firefox"
    ],
    questions: [
      {
        text: "Qual comando lista todos os processos em execução?",
        choices: [
          { id: "a", text: "ls -p", correct: false },
          { id: "b", text: "list", correct: false },
          { id: "c", text: "ps aux", correct: true },
          { id: "d", text: "show all", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Gerenciamento de Processos",
    objective: "Aprender a controlar e terminar processos.",
    icon: <Activity className="w-6 h-6" />,
    content: [
      "O Linux oferece vários comandos para controlar processos.",
      "",
      "Terminando processos:",
      "• kill PID - Envia sinal SIGTERM",
      "• kill -9 PID - Força encerramento (SIGKILL)",
      "• killall nome - Termina processos por nome",
      "• pkill nome - Similar ao killall",
      "",
      "Sinais comuns:",
      "• SIGTERM (15) - Término normal",
      "• SIGKILL (9) - Término forçado",
      "• SIGHUP (1) - Recarregar configuração",
      "",
      "Monitoramento:",
      "• top - Monitor de processos interativo",
      "• htop - Versão melhorada do top",
      "• free - Mostra uso de memória",
      "• uptime - Tempo de execução e carga"
    ],
    questions: [
      {
        text: "Qual sinal força o encerramento imediato de um processo?",
        choices: [
          { id: "a", text: "SIGTERM", correct: false },
          { id: "b", text: "SIGKILL", correct: true },
          { id: "c", text: "SIGHUP", correct: false },
          { id: "d", text: "SIGSTOP", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Monitoramento de Arquivos",
    objective: "Aprender a monitorar arquivos em tempo real.",
    icon: <Monitor className="w-6 h-6" />,
    content: [
      "O comando tail é essencial para monitorar arquivos em tempo real.",
      "",
      "Opções do tail:",
      "• tail arquivo - Últimas 10 linhas",
      "• tail -n N arquivo - Últimas N linhas",
      "• tail -f arquivo - Monitora em tempo real",
      "• tail -F arquivo - Como -f, mas segue renomeações",
      "",
      "Exemplos práticos:",
      "• tail -f /var/log/syslog",
      "• tail -n 50 /var/log/auth.log",
      "",
      "Dicas:",
      "• Use -f para logs ativos",
      "• Combine com grep para filtrar",
      "• Ctrl+C para sair do monitoramento",
      "• Útil para debugging e monitoramento"
    ],
    questions: [
      {
        text: "Qual opção do tail monitora um arquivo em tempo real?",
        choices: [
          { id: "a", text: "-n", correct: false },
          { id: "b", text: "-l", correct: false },
          { id: "c", text: "-f", correct: true },
          { id: "d", text: "-m", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Monitoramento de Comandos",
    objective: "Aprender a monitorar a saída de comandos periodicamente.",
    icon: <Clock className="w-6 h-6" />,
    content: [
      "O comando watch executa um comando periodicamente e mostra sua saída.",
      "",
      "Opções do watch:",
      "• watch comando - Executa a cada 2 segundos",
      "• watch -n N comando - Executa a cada N segundos",
      "• watch -d comando - Destaca diferenças",
      "• watch -t comando - Oculta cabeçalho",
      "",
      "Exemplos úteis:",
      "• watch -n 1 'ps aux | sort -rn -k 3 | head'",
      "• watch -d -n 2 'df -h'",
      "• watch 'ls -l | wc -l'",
      "",
      "Dicas:",
      "• Use aspas para comandos compostos",
      "• -d é útil para detectar mudanças",
      "• Ctrl+C para sair do watch"
    ],
    questions: [
      {
        text: "Para executar um comando a cada 5 segundos com watch, use:",
        choices: [
          { id: "a", text: "watch -t 5", correct: false },
          { id: "b", text: "watch -n 5", correct: true },
          { id: "c", text: "watch -i 5", correct: false },
          { id: "d", text: "watch -s 5", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Download de Arquivos",
    objective: "Aprender diferentes métodos para baixar arquivos da internet.",
    icon: <Download className="w-6 h-6" />,
    content: [
      "O Linux oferece várias ferramentas para download de arquivos.",
      "",
      "Comando wget:",
      "• wget url - Download simples",
      "• wget -O arquivo url - Define nome do arquivo",
      "• wget -c url - Continua download interrompido",
      "• wget -b url - Download em segundo plano",
      "",
      "Comando curl:",
      "• curl -o arquivo url - Download com nome",
      "• curl -O url - Mantém nome original",
      "• curl -C - url - Continua download",
      "• curl -L url - Segue redirecionamentos",
      "",
      "Comando axel:",
      "• axel url - Download com múltiplas conexões",
      "• axel -n N url - Define número de conexões",
      "• axel -o arquivo url - Define nome do arquivo",
      "",
      "Dicas:",
      "• wget para downloads simples",
      "• curl para APIs e testes",
      "• axel para arquivos grandes"
    ],
    questions: [
      {
        text: "Qual comando é melhor para downloads com múltiplas conexões?",
        choices: [
          { id: "a", text: "wget", correct: false },
          { id: "b", text: "curl", correct: false },
          { id: "c", text: "axel", correct: true },
          { id: "d", text: "download", correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Personalização do Bash",
    objective: "Aprender a personalizar o ambiente Bash para maior produtividade.",
    icon: <Settings className="w-6 h-6" />,
    content: [
      "O Bash pode ser personalizado para melhorar sua experiência no terminal.",
      "",
      "Arquivos de configuração:",
      "• ~/.bashrc - Configurações para shells interativos",
      "• ~/.bash_profile - Configurações de login",
      "• ~/.bash_aliases - Aliases personalizados",
      "",
      "Aliases comuns:",
      "alias ll='ls -la'",
      "alias update='sudo apt update && sudo apt upgrade'",
      "alias c='clear'",
      "",
      "Histórico do Bash:",
      "• HISTSIZE=10000",
      "• HISTFILESIZE=20000",
      "• HISTCONTROL=ignoredups:erasedups",
      "",
      "Prompt personalizado (PS1):",
      "• \\u - Usuário atual",
      "• \\h - Hostname",
      "• \\w - Diretório atual",
      "• \\t - Hora atual",
      "",
      "Para aplicar mudanças:",
      "source ~/.bashrc"
    ],
    questions: [
      {
        text: "Como aplicar mudanças no .bashrc sem reiniciar o terminal?",
        choices: [
          { id: "a", text: "restart bash", correct: false },
          { id: "b", text: "reload", correct: false },
          { id: "c", text: "source ~/.bashrc", correct: true },
          { id: "d", text: "update bash", correct: false }
        ]
      }
    ]
  }
];