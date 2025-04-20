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
      "Linux é leve e alimenta sistemas críticos como sistemas de entretenimento, automotivo e sensores industriais.",
      "O kernel do Linux é o núcleo do sistema e gerencia recursos como memória, processos e dispositivos.",
      "Linux é altamente personalizável, o que o torna ideal para servidores, dispositivos embarcados e desktops.",
      "Empresas como Google, Facebook e Amazon utilizam Linux em larga escala para infraestrutura de servidores.",
      "A comunidade ativa de desenvolvedores contribui constantemente para a melhoria e segurança do Linux.",
      "Sistemas baseados em Linux geralmente oferecem maior estabilidade e tempo de atividade em comparação com outros sistemas operacionais.",
      "Muitas ferramentas de desenvolvimento e programação são nativamente suportadas no Linux, como Git, Docker e Python.",
      "Além de Ubuntu e Debian, outras distribuições populares incluem Fedora, Arch Linux e CentOS."
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
      "Aprenda a importância do gerenciamento de máquinas (iniciar, terminar e visualizar detalhes).",
      "Ubuntu é uma das distribuições Linux mais populares e é amplamente usada para aprendizado, servidores e desenvolvimento.",
      "Para uma experiência mais completa, você pode instalar o Ubuntu em uma máquina virtual usando softwares como VirtualBox ou VMware.",
      "Alternativamente, é possível instalar o Ubuntu diretamente no disco rígido, seja ao lado de outro sistema operacional (dual boot) ou como sistema único.",
      "Instalar em uma VM oferece praticidade e segurança, ideal para testes e aprendizado sem alterar seu sistema atual.",
      "A instalação direta no disco oferece melhor desempenho e é recomendada para uso contínuo ou profissional.",
      "Durante o uso do Ubuntu, você aprenderá a lidar com a linha de comando, permissões, pacotes e recursos do sistema.",
      "Com o tempo, você entenderá como o Ubuntu gerencia usuários, processos e arquivos em um ambiente Linux real."
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
      "O comando whoami mostra o nome do usuário atual.",
      "O Terminal permite controlar praticamente todos os aspectos do sistema, desde arquivos até redes e permissões.",
      "Comandos são geralmente compostos por um nome, opções (flags) e argumentos.",
      "Além de echo e whoami, comandos como pwd (mostrar diretório atual) e ls (listar arquivos) são essenciais.",
      "Com o comando cd, você pode navegar entre diretórios no sistema de arquivos.",
      "O comando man mostra páginas de manual, ajudando a entender como usar outros comandos.",
      "Comandos podem ser combinados com pipes (|) e redirecionamentos (>, >>, <) para tarefas mais avançadas.",
      "Aprender a usar o Terminal é fundamental para aproveitar o poder e a flexibilidade do Linux."
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
      "Você pode abrir o Terminal no Ubuntu usando o atalho Ctrl + Alt + T ou procurando por 'Terminal' no menu.",
      "Esses comandos são fundamentais para navegar pelo sistema de arquivos no Linux.",
      "ls exibe os arquivos e pastas no diretório atual.",
      "cd permite mover-se entre diretórios, como por exemplo cd Documentos.",
      "pwd exibe o caminho completo até o diretório atual, útil para saber exatamente onde você está.",
      "cat mostra o conteúdo de arquivos de texto diretamente no Terminal, sem precisar abrir um editor."
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
      "O comando find permite localizar arquivos ou pastas com base em critérios como nome, tipo ou data de modificação.",
      "Use grep para buscar palavras ou padrões dentro do conteúdo de arquivos, ideal para localizar informações rapidamente.",
      "É possível combinar find e grep com pipes (|) para encontrar arquivos e verificar se contêm determinado conteúdo.",
      "Exemplo: use find para localizar todos os arquivos .txt e grep para procurar uma palavra dentro deles.",
      "Esses comandos são muito úteis para análise de logs, buscas em projetos grandes ou administração de sistemas.",
      "A combinação de find e grep aumenta a eficiência ao trabalhar com grandes quantidades de arquivos no terminal.",
      "Exemplo prático: find . -name \"*.txt\" — busca todos os arquivos .txt a partir do diretório atual.",
      "Exemplo combinado: find . -name \"*.txt\" | xargs grep \"palavra-chave\" — procura por 'palavra-chave' dentro dos arquivos encontrados.",
      "find: Procure arquivos por nome em diretórios.",
      "grep: Procure conteúdo específico dentro de arquivos."
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
      "Usar & ao final de um comando permite que ele seja executado em segundo plano, liberando o terminal para outros comandos.",
      "O operador && executa um segundo comando apenas se o primeiro for bem-sucedido (retorno 0).",
      "Com > você pode salvar a saída de um comando em um arquivo, substituindo qualquer conteúdo anterior.",
      "Com >> você adiciona a nova saída ao final do arquivo, sem apagar o que já estava lá.",
      "Esses operadores ajudam a controlar o fluxo de execução e o destino da saída dos comandos no terminal.",
      "Exemplo com &: sleep 10 & — executa o comando sleep por 10 segundos em segundo plano.",
      "Exemplo com &&: mkdir nova_pasta && cd nova_pasta — só muda de diretório se a criação da pasta for bem-sucedida.",
      "Exemplo com >: echo \"Olá\" > saudacao.txt — cria (ou sobrescreve) o arquivo saudacao.txt com o texto 'Olá'.",
      "Exemplo com >>: echo \"Bem-vindo\" >> saudacao.txt — adiciona o texto 'Bem-vindo' ao final do arquivo saudacao.txt.",
      "&: Execute comandos em segundo plano.",
      "&&: Execute comandos sequencialmente (apenas se o primeiro for bem-sucedido).",
      ">: Redirecione a saída para um arquivo (sobrescreve o conteúdo).",
      ">>: Redirecione a saída e adicione ao final do arquivo."
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