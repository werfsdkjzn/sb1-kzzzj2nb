import { Terminal, Server, Lock, FileSearch, PenTool as Tool, Command, Shield, BookOpen } from 'lucide-react';
import { Task } from '../types/course';

export const linuxCliTasks2: Task[] = [
  {
    id: 1,
    title: "Introdução aos Serviços",
    objective: "Compreender o que são serviços no Linux e como gerenciá-los.",
    icon: <Server className="w-6 h-6" />,
    content: [
      "No Linux, um serviço é um programa que roda em segundo plano (background) para fornecer funcionalidades contínuas ao sistema ou a aplicações.",
      "Esses serviços geralmente são iniciados durante a inicialização do sistema e permanecem ativos para garantir o funcionamento de diversos recursos.",
      "São fundamentais para a operação de servidores, sistemas embarcados e ambientes desktop.",
      "Exemplos comuns de serviços incluem:",
      "• SSH - Para acesso remoto seguro via protocolo SSH (Secure Shell), permitindo administração de sistemas a distância.",
      "• Apache - Servidor web responsável por hospedar sites e aplicações acessíveis via navegador.",
      "• MySQL - Sistema de gerenciamento de banco de dados relacional usado para armazenar, consultar e manipular dados.",
      "O 'systemctl' é a ferramenta principal utilizada para gerenciar serviços em distribuições Linux modernas que usam o systemd.",
      "Com o systemctl, é possível iniciar, parar, reiniciar, habilitar ou verificar o status de serviços.",
      "Exemplos de comandos systemctl incluem:",
      "• systemctl start <serviço>     - Inicia um serviço",
      "• systemctl stop <serviço>      - Para um serviço",
      "• systemctl restart <serviço>   - Reinicia um serviço",
      "• systemctl status <serviço>    - Mostra o status atual de um serviço",
      "• systemctl enable <serviço>    - Habilita o serviço para iniciar junto com o sistema",
      "• systemctl disable <serviço>   - Desativa o serviço na inicialização"
    ],
    questions: [
      {
        text: "Qual é a ferramenta principal para gerenciar serviços no Linux moderno?",
        choices: [
          { id: "a", text: "service", correct: false },
          { id: "b", text: "systemctl", correct: true },
          { id: "c", text: "init.d", correct: false },
          { id: "d", text: "daemon", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Gerenciando Serviços",
    objective: "Aprender a iniciar, parar e verificar o status dos serviços.",
    icon: <Command className="w-6 h-6" />,
    content: [
      "Comandos essenciais para gerenciar serviços no Linux utilizando o systemctl:",
      "• systemctl start ssh     - Inicia o serviço SSH, permitindo conexões remotas ao servidor.",
      "• systemctl stop ssh      - Interrompe o serviço SSH, encerrando novas conexões.",
      "• systemctl status ssh    - Exibe o status atual do serviço SSH, incluindo se está ativo, falhou ou inativo.",
      "• systemctl enable ssh    - Configura o serviço SSH para iniciar automaticamente junto com o sistema.",
      "• systemctl disable ssh   - Impede que o serviço SSH seja iniciado automaticamente na inicialização.",
      "",
      "Para verificar as portas em uso relacionadas ao serviço SSH:",
      "• ss -antlp | grep sshd   - Mostra conexões de rede ativas e processos escutando portas, filtrando pelo serviço sshd."
    ],
    questions: [
      {
        text: "Qual comando habilita um serviço para iniciar automaticamente?",
        choices: [
          { id: "a", text: "systemctl start", correct: false },
          { id: "b", text: "systemctl enable", correct: true },
          { id: "c", text: "systemctl auto", correct: false },
          { id: "d", text: "systemctl boot", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Gerenciamento de Pacotes",
    objective: "Aprender a instalar, atualizar e remover software.",
    icon: <Tool className="w-6 h-6" />,
    content: [
      "O APT (Advanced Package Tool) é o gerenciador de pacotes principal utilizado no Ubuntu.",
      "Ele permite instalar, atualizar, buscar e remover softwares através da linha de comando de forma prática.",
      "",
      "Comandos importantes para gerenciamento de pacotes no Ubuntu:",
      "• sudo apt update           - Atualiza a lista de pacotes disponíveis nos repositórios. Deve ser usado antes de instalar algo.",
      "• sudo apt install pacote   - Instala um pacote de software (substitua 'pacote' pelo nome desejado, ex: sudo apt install git).",
      "• sudo apt remove pacote    - Remove um pacote instalado do sistema, mas mantém seus arquivos de configuração.",
      "• sudo apt purge pacote     - Remove completamente o pacote, incluindo seus arquivos de configuração.",
      "• apt search termo          - Realiza uma busca por pacotes disponíveis com base em um termo (ex: apt search nginx).",
      "• dpkg -l                   - Lista todos os pacotes atualmente instalados no sistema Ubuntu."
    ],
    questions: [
      {
        text: "Qual comando atualiza a lista de pacotes disponíveis?",
        choices: [
          { id: "a", text: "apt install", correct: false },
          { id: "b", text: "apt upgrade", correct: false },
          { id: "c", text: "apt update", correct: true },
          { id: "d", text: "apt refresh", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Variáveis de Ambiente",
    objective: "Entender e configurar variáveis de ambiente no Linux.",
    icon: <FileSearch className="w-6 h-6" />,
    content: [
      "Variáveis de ambiente armazenam configurações e informações que controlam o comportamento do sistema e dos programas em execução.",
      "Elas são amplamente utilizadas em sistemas Linux para definir caminhos, preferências do usuário, idioma, entre outros.",
      "",
      "Comandos e conceitos importantes relacionados a variáveis de ambiente:",
      "• echo $PATH                 - Exibe os diretórios onde o sistema procura por executáveis ao rodar comandos no terminal.",
      "• echo $HOME                 - Mostra o diretório home do usuário atual.",
      "• export VARIAVEL=valor      - Define uma variável de ambiente temporária (válida apenas na sessão atual do terminal).",
      "• env                        - Lista todas as variáveis de ambiente atualmente ativas.",
      "",
      "Para definir uma variável de ambiente de forma permanente, adicione o comando 'export VARIAVEL=valor' no arquivo ~/.bashrc.",
      "Após a modificação, execute 'source ~/.bashrc' para aplicar as mudanças imediatamente."
    ],
    questions: [
      {
        text: "Como definir uma variável de ambiente temporária?",
        choices: [
          { id: "a", text: "set VARIAVEL=valor", correct: false },
          { id: "b", text: "export VARIAVEL=valor", correct: true },
          { id: "c", text: "env VARIAVEL=valor", correct: false },
          { id: "d", text: "var VARIAVEL=valor", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Histórico e Autocompletar",
    objective: "Dominar recursos avançados do shell para maior produtividade.",
    icon: <BookOpen className="w-6 h-6" />,
    content: [
      "O Bash (Bourne Again SHell) é um dos interpretadores de linha de comando mais usados no Linux, oferecendo diversos recursos para aumentar a produtividade do usuário.",
      "",
      "Alguns comandos e atalhos úteis no Bash incluem:",
      "• history         - Exibe uma lista com o histórico de comandos executados no terminal.",
      "• !!              - Repete a execução do último comando digitado.",
      "• !número         - Executa um comando específico do histórico, substituindo 'número' pela posição do comando (ex: !42).",
      "• Tab             - Autocompleta comandos, nomes de arquivos ou diretórios, economizando tempo na digitação.",
      "",
      "Atalhos de teclado úteis no terminal para melhorar a produtividade:",
      "• Ctrl+Shift+C    - Copia o texto selecionado no terminal para a área de transferência.",
      "• Ctrl+R          - Atalho para buscar interativamente por comandos anteriores no histórico. Muito útil para reutilizar comandos longos.",
      "• Ctrl+L          - Limpa a tela do terminal, proporcionando uma área limpa para novos comandos.",
      "• Ctrl+S          - Interrompe a saída do comando atual na tela (útil para comandos longos e verbosos).",
      "• Ctrl+Q          - Retoma a exibição da saída na tela após ter sido pausada com Ctrl+S.",
      "• Ctrl+C          - Interrompe a execução de um comando em andamento.",
      "• Ctrl+Z          - Suspende o comando atual e o coloca em segundo plano, permitindo continuar o terminal.",
      "",
      "Esses atalhos tornam o uso do terminal mais ágil e eficiente, ajudando a gerenciar melhor os comandos e a saída de dados."
    ],
    questions: [
      {
        text: "Como repetir o último comando executado?",
        choices: [
          { id: "a", text: "!!", correct: true },
          { id: "b", text: "!1", correct: false },
          { id: "c", text: "repeat", correct: false },
          { id: "d", text: "last", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Redirecionamento",
    objective: "Aprender a redirecionar entrada e saída de comandos.",
    icon: <Terminal className="w-6 h-6" />,
    content: [
      "O Linux permite redirecionar a entrada e saída de comandos, o que proporciona flexibilidade no uso de comandos e manipulação de dados.",
      "Esses recursos permitem capturar a saída de um comando e usá-la como entrada de outro, ou mesmo gravar a saída em arquivos.",
      "",
      "Comandos e operadores de redirecionamento de entrada e saída:",
      "• > arquivo         - Redireciona a saída de um comando para um arquivo, sobrescrevendo o conteúdo do arquivo caso ele já exista.",
      "• >> arquivo        - Redireciona a saída de um comando para um arquivo, **adicionando** o conteúdo ao final do arquivo (não sobrescreve).",
      "• < arquivo         - Usa um arquivo como entrada para um comando. Pode ser útil para ler dados a partir de arquivos.",
      "• | (Pipe)          - Conecta a saída de um comando à entrada de outro, permitindo a criação de fluxos de dados encadeados.",
      "",
      "Exemplo de uso:",
      "• echo 'teste' > arquivo.txt   - Cria (ou sobrescreve) o arquivo 'arquivo.txt' com o texto 'teste'.",
      "• cat arquivo.txt | grep 'teste' - Usa o pipe (|) para pegar a saída do comando 'cat' e passá-la como entrada para o comando 'grep'."
    ],
    questions: [
      {
        text: "Qual operador adiciona saída ao final de um arquivo?",
        choices: [
          { id: "a", text: ">", correct: false },
          { id: "b", text: ">>", correct: true },
          { id: "c", text: "<", correct: false },
          { id: "d", text: "|", correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Segurança Básica",
    objective: "Aprender conceitos básicos de segurança no terminal.",
    icon: <Shield className="w-6 h-6" />,
    content: [
      "Práticas importantes de segurança ao utilizar o terminal no Linux:",
      "",
      "• Usar sudo apenas quando necessário - O comando sudo executa ações com privilégios de administrador. Use-o apenas quando for essencial, para reduzir o risco de execução de comandos prejudiciais.",
      "• Verificar permissões com ls -l - O comando 'ls -l' exibe detalhes sobre arquivos e diretórios, incluindo permissões de leitura, escrita e execução para o proprietário, grupo e outros usuários.",
      "• Manter o sistema atualizado - Manter o sistema operacional e os pacotes atualizados é crucial para a segurança, pois isso garante que as últimas correções e patches de segurança sejam aplicados.",
      "• Monitorar logs em /var/log - O diretório '/var/log' armazena logs do sistema, onde é possível monitorar eventos e identificar comportamentos suspeitos ou erros no sistema.",
      "• Verificar processos com ps aux - O comando 'ps aux' exibe uma lista de todos os processos em execução no sistema, permitindo verificar se há processos não autorizados ou suspeitos.",
      "• Cuidado com comandos de fontes não confiáveis - Sempre tenha cautela ao executar comandos ou scripts de fontes desconhecidas, pois podem conter códigos maliciosos que comprometem a segurança do sistema."
    ],
    questions: [
      {
        text: "Onde ficam armazenados os logs do sistema?",
        choices: [
          { id: "a", text: "/var/log", correct: true },
          { id: "b", text: "/etc/log", correct: false },
          { id: "c", text: "/usr/log", correct: false },
          { id: "d", text: "/log", correct: false }
        ]
      }
    ]
  }
];