import { Terminal, FileText, Command, Search, FolderTree, BookOpen, FileSymlink as FileSystem } from 'lucide-react';
import { Task } from '../types/course';

export const linuxCliTasks: Task[] = [
  {
    id: 1,
    title: "Sistema de Arquivos Linux",
    objective: "Compreender a estrutura do sistema de arquivos Linux e seus diretórios principais.",
    icon: <FolderTree className="w-6 h-6" />,
    content: [
      "No Linux, não existem letras de unidade como no Windows (C:, D:). Em vez disso, tudo — arquivos, programas, dispositivos USB — faz parte de uma única estrutura em árvore que começa no diretório raiz /.",
      "Diretórios importantes que você vai usar:",
      "• /bin – Programas essenciais do sistema (ex: ls, cat, echo)",
      "• /sbin – Ferramentas administrativas (ex: reboot, ifconfig)",
      "• /etc – Arquivos de configuração do sistema (ex: configurações de rede)",
      "• /tmp – Arquivos temporários, apagados automaticamente após reiniciar",
      "• /usr/bin – Aplicativos instalados (ex: nmap, wget)",
      "• /usr/share – Documentação e arquivos compartilhados",
      "• /home – Pastas pessoais dos usuários (ex: /home/kali)",
      "Dica: Pense em / como sua 'área de trabalho'. Todos os outros diretórios estão dentro dele."
    ],
    questions: [
      {
        text: "Qual diretório contém os programas essenciais do sistema?",
        choices: [
          { id: "a", text: "/bin", correct: true },
          { id: "b", text: "/etc", correct: false },
          { id: "c", text: "/usr", correct: false },
          { id: "d", text: "/tmp", correct: false }
        ]
      },
      {
        text: "Onde ficam armazenados os arquivos de configuração do sistema?",
        choices: [
          { id: "a", text: "/bin", correct: false },
          { id: "b", text: "/etc", correct: true },
          { id: "c", text: "/usr/bin", correct: false },
          { id: "d", text: "/sbin", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Manual do Linux (man)",
    objective: "Aprender a usar o manual embutido do Linux para consultar documentação dos comandos.",
    icon: <BookOpen className="w-6 h-6" />,
    content: [
      "O comando man exibe a documentação oficial dos comandos Linux.",
      "Uso básico: man <comando>",
      "Por exemplo: man mkdir",
      "Ele vai mostrar:",
      "• NAME: nome e descrição do comando",
      "• SYNOPSIS: como usá-lo",
      "• DESCRIPTION: explicação detalhada",
      "• OPTIONS: opções e parâmetros disponíveis",
      "Para procurar por palavras-chave: man -k networking",
      "Isso busca nomes e descrições nos manuais que contenham a palavra 'networking'."
    ],
    questions: [
      {
        text: "Como você procura por comandos relacionados a 'user' no manual?",
        choices: [
          { id: "a", text: "find user", correct: false },
          { id: "b", text: "man -k user", correct: true },
          { id: "c", text: "search user", correct: false },
          { id: "d", text: "help user", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Comando apropos",
    objective: "Aprender a encontrar comandos quando você sabe o que quer fazer, mas não lembra o nome do comando.",
    icon: <Search className="w-6 h-6" />,
    content: [
      "Se você sabe o que quer fazer, mas não lembra o comando, use apropos.",
      "Uso: apropos firewall",
      "Ele mostrará comandos relacionados a 'firewall' com base em suas descrições.",
      "Dica: É a mesma coisa que man -k.",
      "Experimente:",
      "• apropos password",
      "• apropos ssh"
    ],
    questions: [
      {
        text: "Qual comando é equivalente ao apropos?",
        choices: [
          { id: "a", text: "man -k", correct: true },
          { id: "b", text: "man -f", correct: false },
          { id: "c", text: "man -l", correct: false },
          { id: "d", text: "man -a", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Listando Arquivos (ls)",
    objective: "Aprender a listar e visualizar arquivos e diretórios no sistema.",
    icon: <FileText className="w-6 h-6" />,
    content: [
      "O comando ls é um dos mais usados. Ele mostra o que há dentro de uma pasta.",
      "Opções comuns:",
      "• ls – lista simples",
      "• ls -a – mostra arquivos ocultos (começam com .)",
      "• ls -l – mostra detalhes como permissões e datas",
      "• ls -lh – o mesmo, mas com tamanhos legíveis",
      "• ls -a1 – um arquivo por linha"
    ],
    questions: [
      {
        text: "Qual opção do ls mostra arquivos ocultos?",
        choices: [
          { id: "a", text: "-h", correct: false },
          { id: "b", text: "-l", correct: false },
          { id: "c", text: "-a", correct: true },
          { id: "d", text: "-1", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Navegação no Sistema (cd, pwd)",
    objective: "Aprender a navegar pelo sistema de arquivos usando cd e pwd.",
    icon: <FileSystem className="w-6 h-6" />,
    content: [
      "Use cd para entrar em diretórios e pwd para saber onde você está.",
      "Comandos:",
      "• cd /caminho – muda para o diretório desejado",
      "• pwd – mostra o diretório atual",
      "• cd ~ – volta para sua pasta pessoal",
      "• cd .. – sobe um nível na hierarquia"
    ],
    questions: [
      {
        text: "Como você volta para o diretório home do usuário?",
        choices: [
          { id: "a", text: "cd /home", correct: false },
          { id: "b", text: "cd ~", correct: true },
          { id: "c", text: "cd ..", correct: false },
          { id: "d", text: "cd /", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Criando Diretórios (mkdir)",
    objective: "Aprender a criar diretórios e estruturas de pastas.",
    icon: <Command className="w-6 h-6" />,
    content: [
      "Você pode criar pastas para organizar ferramentas, notas e relatórios.",
      "Uso básico: mkdir <nome-da-pasta>",
      "Para criar diretórios aninhados: mkdir -p pai/filho/neto",
      "Para criar múltiplas pastas: mkdir -p projeto/{scans,reports,scripts}"
    ],
    questions: [
      {
        text: "Qual opção do mkdir permite criar diretórios pais automaticamente?",
        choices: [
          { id: "a", text: "-r", correct: false },
          { id: "b", text: "-p", correct: true },
          { id: "c", text: "-m", correct: false },
          { id: "d", text: "-d", correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Encontrando Arquivos",
    objective: "Aprender diferentes métodos para localizar arquivos no sistema.",
    icon: <Search className="w-6 h-6" />,
    content: [
      "Três ferramentas diferentes para localizar arquivos no sistema:",
      "• which – Mostra o caminho completo de um comando",
      "• locate – Busca rápida usando um banco de dados interno",
      "• find – Busca direta e poderosa no sistema",
      "Exemplos:",
      "• which ssh",
      "• locate apache2.conf",
      "• sudo find /etc -name '*.conf'"
    ],
    questions: [
      {
        text: "Qual comando é mais apropriado para encontrar o caminho de um executável?",
        choices: [
          { id: "a", text: "locate", correct: false },
          { id: "b", text: "find", correct: false },
          { id: "c", text: "which", correct: true },
          { id: "d", text: "whereis", correct: false }
        ]
      }
    ]
  }
];