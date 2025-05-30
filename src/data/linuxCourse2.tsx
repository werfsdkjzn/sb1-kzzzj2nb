import { Terminal, FileText, Lock, Server, Users, Cog, Database, Shield } from 'lucide-react';
import { Task } from '../types/course';

export const linuxTasks2: Task[] = [
  {
    id: 1,
    title: "Introdução ao Linux",
    objective: "Compreender os conceitos básicos do Linux e sua importância nos sistemas operacionais.",
    icon: <Terminal className="w-6 h-6" />,
    content: [
      "Linux é um sistema operacional de código aberto que foi criado por Linus Torvalds em 1991.",
      "Hoje, o Linux é usado em diversos dispositivos, desde smartphones até supercomputadores.",
      "Algumas características importantes do Linux incluem:",
      "• Código aberto e gratuito",
      "• Alta segurança e estabilidade",
      "• Grande comunidade de desenvolvedores",
      "• Flexibilidade e personalização",
      "O Linux é especialmente importante para administradores de sistemas e desenvolvedores devido à sua robustez e ferramentas poderosas de linha de comando."
    ],
    questions: [
      {
        text: "Quem criou o Linux?",
        choices: [
          { id: "a", text: "Steve Jobs", correct: false },
          { id: "b", text: "Bill Gates", correct: false },
          { id: "c", text: "Linus Torvalds", correct: true },
          { id: "d", text: "Richard Stallman", correct: false }
        ]
      },
      {
        text: "Qual característica NÃO é típica do Linux?",
        choices: [
          { id: "a", text: "Código aberto", correct: false },
          { id: "b", text: "Sistema pago", correct: true },
          { id: "c", text: "Alta segurança", correct: false },
          { id: "d", text: "Flexibilidade", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Comandos Básicos",
    objective: "Aprender os comandos fundamentais do terminal Linux.",
    icon: <FileText className="w-6 h-6" />,
    content: [
      "O terminal Linux é uma ferramenta poderosa para interagir com o sistema operacional.",
      "Dominar estes comandos básicos é o primeiro passo para se tornar proficiente em Linux.",
      "Comandos básicos essenciais incluem:",
      "• ls - Lista arquivos e diretórios no diretório atual. Use ls -l para mais detalhes ou ls -a para mostrar arquivos ocultos.",
      "• cd - Muda de diretório. Exemplo: cd Documentos. Use cd .. para voltar um nível.",
      "• pwd - Mostra o caminho completo do diretório atual, útil para saber onde você está no sistema.",
      "• mkdir - Cria um novo diretório. Exemplo: mkdir nova_pasta cria uma pasta chamada 'nova_pasta'.",
      "• rm - Remove arquivos. Use com cuidado. Exemplo: rm arquivo.txt. Para remover diretórios recursivamente, use rm -r pasta/",
      "• cp - Copia arquivos ou diretórios. Exemplo: cp origem.txt destino.txt. Para copiar pastas, use cp -r pasta1 pasta2.",
      "• mv - Move ou renomeia arquivos. Exemplo: mv arquivo.txt nova_pasta/ ou mv antigo.txt novo.txt para renomear."
    ],
    questions: [
      {
        text: "Qual comando é usado para listar arquivos em um diretório?",
        choices: [
          { id: "a", text: "list", correct: false },
          { id: "b", text: "ls", correct: true },
          { id: "c", text: "dir", correct: false },
          { id: "d", text: "show", correct: false }
        ]
      },
      {
        text: "Para criar um novo diretório, qual comando devemos usar?",
        choices: [
          { id: "a", text: "mkfile", correct: false },
          { id: "b", text: "create", correct: false },
          { id: "c", text: "mkdir", correct: true },
          { id: "d", text: "newdir", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Gerenciamento de Usuários",
    objective: "Aprender a gerenciar usuários e permissões no Linux.",
    icon: <Users className="w-6 h-6" />,
    content: [
      "O Linux é um sistema multiusuário, onde cada usuário pode ter diferentes níveis de acesso.",
      "Gerenciar usuários e permissões é essencial para manter a organização e a segurança em ambientes Linux.",
      "As permissões no Linux são divididas em três categorias: proprietário, grupo e outros.",
      "As permissões controlam quem pode ler, escrever ou executar arquivos.",
      "Você pode visualizar permissões com o comando ls -l, que mostra o dono, grupo e tipo de acesso.",
      "Comandos importantes para gerenciamento de usuários:",
      "• adduser - Cria novo usuário com diretório home e configurações básicas",
      "• usermod - Modifica atributos de um usuário existente",
      "• deluser - Remove um usuário do sistema",
      "• passwd - Define ou altera a senha de um usuário",
      "• chmod - Altera permissões de leitura (r), escrita (w) e execução (x)",
      "• chown - Altera o proprietário e o grupo de um arquivo ou diretório"
    ],
    questions: [
      {
        text: "Qual comando é usado para mudar a senha de um usuário?",
        choices: [
          { id: "a", text: "password", correct: false },
          { id: "b", text: "passwd", correct: true },
          { id: "c", text: "pwchange", correct: false },
          { id: "d", text: "setpass", correct: false }
        ]
      },
      {
        text: "Para modificar as permissões de um arquivo, usamos:",
        choices: [
          { id: "a", text: "chmod", correct: true },
          { id: "b", text: "chperm", correct: false },
          { id: "c", text: "permmod", correct: false },
          { id: "d", text: "filemod", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Serviços e Processos",
    objective: "Compreender como gerenciar serviços e processos no Linux.",
    icon: <Cog className="w-6 h-6" />,
    content: [
      "Processos são programas em execução no sistema Linux.",
      "Entender como gerenciar processos é crucial para manter um sistema Linux saudável.",
      "Comandos importantes para gerenciamento de processos:",
      "• ps - Lista processos em execução. Use ps aux para ver todos os processos com detalhes como PID, usuário e uso de recursos.",
      "• top - Monitor de processos em tempo real. Exibe o uso da CPU, memória e permite encerrar processos diretamente.",
      "• kill - Termina um processo com base no seu PID. Exemplo: kill 1234. Use kill -9 para forçar a finalização.",
      "• systemctl - Gerencia serviços do sistema em distribuições que usam systemd. Exemplo: systemctl status nginx para ver o status de um serviço.",
      "• service - Comando mais antigo usado para iniciar, parar ou reiniciar serviços. Exemplo: service apache2 restart."
    ],
    questions: [
      {
        text: "Qual comando mostra os processos em tempo real?",
        choices: [
          { id: "a", text: "ps", correct: false },
          { id: "b", text: "top", correct: true },
          { id: "c", text: "proc", correct: false },
          { id: "d", text: "list", correct: false }
        ]
      },
      {
        text: "Para encerrar um processo, usamos:",
        choices: [
          { id: "a", text: "end", correct: false },
          { id: "b", text: "stop", correct: false },
          { id: "c", text: "kill", correct: true },
          { id: "d", text: "terminate", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Gerenciamento de Pacotes",
    objective: "Aprender a instalar e gerenciar software no Linux.",
    icon: <Database className="w-6 h-6" />,
    content: [
      "O Linux usa gerenciadores de pacotes para instalar, remover e atualizar software no sistema.",
      "Diferentes distribuições Linux podem usar diferentes gerenciadores de pacotes.",
      "Comandos comuns em sistemas baseados em Debian (como Ubuntu):",
      "• apt update - Atualiza a lista de pacotes disponíveis nos repositórios",
      "• apt install - Instala novos pacotes no sistema",
      "• apt remove - Remove pacotes instalados",
      "• apt upgrade - Atualiza os pacotes instalados para as versões mais recentes",
      "• dpkg - Gerencia pacotes .deb de forma manual, útil para instalação direta de arquivos"
    ],
    questions: [
      {
        text: "Qual comando instala novos pacotes no Ubuntu?",
        choices: [
          { id: "a", text: "apt install", correct: true },
          { id: "b", text: "yum install", correct: false },
          { id: "c", text: "pacman -S", correct: false },
          { id: "d", text: "pkg install", correct: false }
        ]
      },
      {
        text: "Para atualizar a lista de pacotes disponíveis, usamos:",
        choices: [
          { id: "a", text: "apt list", correct: false },
          { id: "b", text: "apt refresh", correct: false },
          { id: "c", text: "apt update", correct: true },
          { id: "d", text: "apt sync", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Sistema de Arquivos",
    objective: "Compreender a estrutura do sistema de arquivos Linux.",
    icon: <Server className="w-6 h-6" />,
    content: [
      "O sistema de arquivos Linux segue uma hierarquia padrão.",
      "Diretórios importantes incluem:",
      "• /bin - Binários essenciais",
      "• /etc - Arquivos de configuração",
      "• /home - Diretórios dos usuários",
      "• /var - Dados variáveis",
      "• /tmp - Arquivos temporários",
      "• /usr - Programas e dados do usuário",
      "Entender esta estrutura é fundamental para administração do sistema."
    ],
    questions: [
      {
        text: "Onde ficam os arquivos de configuração do sistema?",
        choices: [
          { id: "a", text: "/bin", correct: false },
          { id: "b", text: "/etc", correct: true },
          { id: "c", text: "/var", correct: false },
          { id: "d", text: "/usr", correct: false }
        ]
      },
      {
        text: "Qual diretório armazena os arquivos temporários?",
        choices: [
          { id: "a", text: "/temp", correct: false },
          { id: "b", text: "/var", correct: false },
          { id: "c", text: "/tmp", correct: true },
          { id: "d", text: "/cache", correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Segurança Básica",
    objective: "Aprender conceitos básicos de segurança no Linux.",
    icon: <Shield className="w-6 h-6" />,
    content: [
      "A segurança é um aspecto crucial do Linux.",
      "Manter um sistema Linux seguro requer atenção constante e boas práticas.",
      "Conceitos importantes de segurança:",
      "• Controle de acesso - Garante que apenas usuários autorizados possam acessar arquivos e recursos",
      "• Firewall (iptables/ufw) - Controla o tráfego de rede, permitindo ou bloqueando conexões",
      "• Atualizações de segurança - Corrigem vulnerabilidades conhecidas no sistema e nos aplicativos",
      "• Logs do sistema - Registram atividades e ajudam a identificar comportamentos suspeitos",
      "• Backup de dados - Protege informações importantes contra perda ou corrupção",
      "• Criptografia - Protege dados sensíveis em repouso (disco) ou em trânsito (comunicação)"
    ],
    questions: [
      {
        text: "Qual é o firewall padrão do Linux?",
        choices: [
          { id: "a", text: "iptables", correct: true },
          { id: "b", text: "firewalld", correct: false },
          { id: "c", text: "ufw", correct: false },
          { id: "d", text: "netfilter", correct: false }
        ]
      },
      {
        text: "Onde são armazenados os logs do sistema?",
        choices: [
          { id: "a", text: "/etc/logs", correct: false },
          { id: "b", text: "/var/log", correct: true },
          { id: "c", text: "/usr/log", correct: false },
          { id: "d", text: "/log", correct: false }
        ]
      }
    ]
  }
];