import { Terminal, Edit, FileText, Search, Filter, Code, BookOpen } from 'lucide-react';
import { Task } from '../types/course';

export const linuxCliTasks3: Task[] = [
  {
    id: 1,
    title: "Editores de Texto no Terminal",
    objective: "Aprender a usar os editores de texto nano e vi no terminal.",
    icon: <Edit className="w-6 h-6" />,
    content: [
      "Editores de texto são ferramentas essenciais para trabalhar no terminal. Vamos começar com o nano, que é mais amigável para iniciantes.",
      "",
      "Comandos básicos do nano:",
      "• Ctrl + O         - Salvar arquivo (Write Out). Usado para salvar as alterações feitas no arquivo.",
      "• Ctrl + X         - Sair do editor. Caso haja alterações não salvas, o nano irá pedir confirmação antes de sair.",
      "• Ctrl + W         - Buscar texto no arquivo. Permite procurar por uma palavra ou termo dentro do arquivo aberto.",
      "• Ctrl + K         - Cortar a linha atual (Kill). Remove a linha do texto e coloca na área de transferência do nano.",
      "• Ctrl + U         - Colar a linha (UnKill). Coloca o conteúdo que foi cortado de volta no local do cursor.",
      "• Ctrl + G         - Mostrar ajuda. Exibe a ajuda do nano, com uma lista de comandos disponíveis.",
      "• Ctrl + Y         - Ir para página anterior. Navega uma página para trás no conteúdo do arquivo.",
      "• Ctrl + V         - Ir para a próxima página. Navega uma página para frente no conteúdo do arquivo.",
      "• Ctrl + C         - Mostrar posição do cursor. Exibe a linha e a coluna do cursor no arquivo.",
      "• Ctrl + _         - Ir para linha/coluna específica. Permite que você vá diretamente para uma linha ou coluna do arquivo.",
      "",
      "Para abrir um arquivo no nano:",
      "• nano arquivo.txt         - Abre o arquivo 'arquivo.txt' no editor nano.",
      "• nano +10 arquivo.txt     - Abre o arquivo 'arquivo.txt' e posiciona o cursor na linha 10.",
      "• nano -v arquivo.txt      - Abre o arquivo 'arquivo.txt' em modo somente leitura (não é possível salvar alterações).",
      "",
      "Dicas práticas:",
      "• Use as setas para navegar pelo texto de forma simples.",
      "• O menu na parte inferior da tela mostra os comandos principais disponíveis.",
      "• O '^' significa que você deve pressionar a tecla Ctrl junto com a letra indicada (ex: ^X significa Ctrl+X).",
      "• Salve frequentemente seu trabalho para evitar perda de dados em caso de imprevistos."
    ],
    questions: [
      {
        text: "Qual comando salva um arquivo no nano?",
        choices: [
          { id: "a", text: "Ctrl + S", correct: false },
          { id: "b", text: "Ctrl + O", correct: true },
          { id: "c", text: "Ctrl + W", correct: false },
          { id: "d", text: "Ctrl + X", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Editor Vi/Vim",
    objective: "Dominar os conceitos básicos do editor vi/vim.",
    icon: <Code className="w-6 h-6" />,
    content: [
      "O vi é um editor de texto poderoso e avançado que opera em diferentes modos. A tecla Esc é FUNDAMENTAL para alternar entre os modos.",
      "IMPORTANTE: A tecla Esc é usada para:",
      "• Sair do modo de inserção para o modo normal",
      "• Cancelar comandos parcialmente digitados",
      "• Voltar ao modo normal de qualquer outro modo",
      "",
      "Modos principais do vi (use Esc para voltar ao modo normal):",
      "• Modo Normal - Usado para navegação e execução de comandos. Este é o modo padrão ao abrir o vi.",
      "• Modo Inserção (pressione 'i') - Usado para digitar texto. Pressione Esc para sair do modo de inserção.",
      "• Modo Visual (pressione 'v') - Usado para seleção de texto. Pressione Esc para sair do modo visual.",
      "• Modo Comando (pressione ':') - Usado para executar comandos no vi, como salvar ou sair. Pressione Esc para voltar ao modo normal.",
      "",
      "Fluxo típico de edição no vi:",
      "1. Pressione 'i' para entrar no modo inserção.",
      "2. Digite ou edite o texto.",
      "3. Pressione Esc para voltar ao modo normal.",
      "4. Use comandos de navegação/edição conforme necessário.",
      "5. Pressione ':' para entrar no modo comando.",
      "6. Digite 'wq' para salvar e sair.",
      "",
      "Comandos essenciais no modo normal (pressione Esc primeiro):",
      "• h, j, k, l - Movimentação (esquerda, baixo, cima, direita)",
      "• w - Pular para a próxima palavra",
      "• b - Voltar uma palavra",
      "• 0 - Início da linha",
      "• $ - Fim da linha",
      "• gg - Início do arquivo",
      "• G - Final do arquivo",
      "",
      "Comandos de edição no modo normal (pressione Esc primeiro):",
      "• i - Entrar no modo inserção antes do cursor",
      "• a - Entrar no modo inserção após o cursor",
      "• o - Abrir uma nova linha abaixo",
      "• O - Abrir uma nova linha acima",
      "• dd - Excluir a linha atual",
      "• yy - Copiar a linha atual",
      "• p - Colar após o cursor",
      "• u - Desfazer a última ação",
      "• Ctrl + r - Refazer a última ação desfeita",
      "",
      "Comandos do modo comando (pressione Esc, depois ':'):",
      "• :w - Salvar o arquivo",
      "• :q - Sair do vi",
      "• :wq - Salvar e sair",
      "• :q! - Sair sem salvar as alterações",
      "• :set number - Exibir números de linha",
      "• :%s/antigo/novo/g - Substituir texto em todo o arquivo"
    ],
    questions: [
      {
        text: "Qual tecla é usada para sair do modo de inserção no vi?",
        choices: [
          { id: "a", text: "Ctrl", correct: false },
          { id: "b", text: "Esc", correct: true },
          { id: "c", text: "Tab", correct: false },
          { id: "d", text: "Enter", correct: false }
        ]
      },
      {
        text: "Qual é a sequência correta para salvar um arquivo no vi?",
        choices: [
          { id: "a", text: "Esc, :wq", correct: true },
          { id: "b", text: "Ctrl + S", correct: false },
          { id: "c", text: ":w, Enter", correct: false },
          { id: "d", text: "Esc, :s", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Comando grep",
    objective: "Aprender a buscar padrões em arquivos usando grep.",
    icon: <Search className="w-6 h-6" />,
    content: [
      "O grep é uma ferramenta poderosa para buscar texto em arquivos.",
      "",
      "Sintaxe básica:",
      "grep [opções] padrão [arquivo...]",
      "",
      "Opções principais:",
      "• -i - Ignora maiúsculas/minúsculas",
      "• -r ou -R - Busca recursiva em diretórios",
      "• -l - Mostra apenas nomes dos arquivos",
      "• -n - Mostra números das linhas",
      "• -v - Inverte a busca (mostra linhas que não contêm o padrão)",
      "• -c - Conta ocorrências",
      "• -w - Busca palavra exata",
      "• -A n - Mostra n linhas após a ocorrência",
      "• -B n - Mostra n linhas antes da ocorrência",
      "• -C n - Mostra n linhas antes e depois",
      "",
      "Exemplos práticos:",
      "• grep -i 'erro' /var/log/* - Busca 'erro' em logs",
      "• grep -r 'TODO' . - Busca 'TODO' no diretório atual",
      "• grep -v '^#' config.txt - Remove linhas comentadas",
      "• grep -n 'root' /etc/passwd - Mostra linhas com 'root'",
      "",
      "Expressões regulares básicas:",
      "• ^ - Início da linha",
      "• $ - Fim da linha",
      "• . - Qualquer caractere",
      "• * - Zero ou mais ocorrências",
      "• [] - Lista de caracteres",
      "Exemplo: grep '^[0-9]' arquivo.txt - Linhas que começam com número"
    ],
    questions: [
      {
        text: "Qual opção do grep ignora maiúsculas e minúsculas?",
        choices: [
          { id: "a", text: "-r", correct: false },
          { id: "b", text: "-v", correct: false },
          { id: "c", text: "-i", correct: true },
          { id: "d", text: "-n", correct: false }
        ]
      },
      {
        text: "Para mostrar 3 linhas antes e depois de cada ocorrência, use:",
        choices: [
          { id: "a", text: "-A 3", correct: false },
          { id: "b", text: "-C 3", correct: true },
          { id: "c", text: "-B 3", correct: false },
          { id: "d", text: "-L 3", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Comando sed",
    objective: "Aprender a substituir e manipular texto usando sed.",
    icon: <Edit className="w-6 h-6" />,
    content: [
      "O sed (Stream Editor) é uma ferramenta poderosa para manipulação de texto.",
      "",
      "Sintaxe básica:",
      "sed [opções] 'comando' arquivo",
      "",
      "Comandos principais:",
      "• s - Substituição",
      "• d - Deleção",
      "• p - Impressão",
      "• i - Inserção",
      "• a - Adição",
      "",
      "Opções importantes:",
      "• -i - Edita o arquivo diretamente",
      "• -e - Permite múltiplos comandos",
      "• -n - Suprime saída automática",
      "",
      "Exemplos de substituição:",
      "• sed 's/antigo/novo/' arquivo.txt - Primeira ocorrência",
      "• sed 's/antigo/novo/g' arquivo.txt - Todas ocorrências",
      "• sed 's/antigo/novo/2' arquivo.txt - Segunda ocorrência",
      "• sed 's/antigo/novo/gI' arquivo.txt - Ignora maiúsculas",
      "",
      "Exemplos avançados:",
      "• sed '1,5s/antigo/novo/' - Substitui nas linhas 1-5",
      "• sed '/padrão/d' - Remove linhas com padrão",
      "• sed '/^$/d' - Remove linhas em branco",
      "• sed 'G' - Adiciona linha em branco após cada linha",
      "• sed '1i\\texto' - Insere texto no início",
      "• sed '$a\\texto' - Adiciona texto no final",
      "",
      "Dicas:",
      "• Use aspas simples para evitar interpretação do shell",
      "• Faça backup antes de usar -i",
      "• Teste primeiro sem -i para verificar o resultado"
    ],
    questions: [
      {
        text: "Qual opção do sed modifica o arquivo diretamente?",
        choices: [
          { id: "a", text: "-g", correct: false },
          { id: "b", text: "-i", correct: true },
          { id: "c", text: "-s", correct: false },
          { id: "d", text: "-m", correct: false }
        ]
      },
      {
        text: "Para substituir todas as ocorrências de uma palavra, use:",
        choices: [
          { id: "a", text: "s/palavra/nova/", correct: false },
          { id: "b", text: "s/palavra/nova/a", correct: false },
          { id: "c", text: "s/palavra/nova/g", correct: true },
          { id: "d", text: "s/palavra/nova/p", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Comando cut",
    objective: "Aprender a extrair colunas e campos de texto usando cut.",
    icon: <FileText className="w-6 h-6" />,
    content: [
      "O cut é uma ferramenta para extrair seções de cada linha de arquivos.",
      "",
      "Sintaxe básica:",
      "cut [opções] [arquivo...]",
      "",
      "Opções principais:",
      "• -c - Seleciona caracteres",
      "• -f - Seleciona campos",
      "• -d - Define delimitador",
      "• --complement - Seleciona o complemento",
      "• --output-delimiter - Define delimitador de saída",
      "",
      "Exemplos com caracteres:",
      "• cut -c 1-5 - Primeiros 5 caracteres",
      "• cut -c -3 - Até o terceiro caractere",
      "• cut -c 5- - Do quinto caractere em diante",
      "• cut -c 1,3,5 - Caracteres específicos",
      "",
      "Exemplos com campos:",
      "• cut -d ',' -f 1 arquivo.csv - Primeira coluna",
      "• cut -d ':' -f 1,3 /etc/passwd - Campos 1 e 3",
      "• cut -d ' ' -f 2- - Do segundo campo em diante",
      "",
      "Exemplos práticos:",
      "• cut -d ':' -f 1 /etc/passwd - Lista usuários",
      "• ls -l | cut -d ' ' -f 9 - Lista apenas nomes de arquivos",
      "• cut -d ',' -f 2,4 dados.csv > novo.csv - Extrai colunas",
      "",
      "Dicas:",
      "• Use aspas para delimitadores especiais",
      "• Combine com sort e uniq para análise de dados",
      "• Útil para processar logs e arquivos CSV"
    ],
    questions: [
      {
        text: "Como extrair a primeira coluna de um arquivo CSV?",
        choices: [
          { id: "a", text: "cut -f 1 arquivo.csv", correct: false },
          { id: "b", text: "cut -d ',' -f 1 arquivo.csv", correct: true },
          { id: "c", text: "cut -c 1 arquivo.csv", correct: false },
          { id: "d", text: "cut -l 1 arquivo.csv", correct: false }
        ]
      },
      {
        text: "Para extrair os caracteres 1 a 5 de cada linha, use:",
        choices: [
          { id: "a", text: "cut -f 1-5", correct: false },
          { id: "b", text: "cut -d 1-5", correct: false },
          { id: "c", text: "cut -c 1-5", correct: true },
          { id: "d", text: "cut -l 1-5", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Comando awk",
    objective: "Aprender a processar e analisar texto usando awk.",
    icon: <Filter className="w-6 h-6" />,
    content: [
      "O awk é uma linguagem de programação poderosa para processamento de texto.",
      "",
      "Sintaxe básica:",
      "awk 'padrão { ação }' arquivo",
      "",
      "Conceitos importantes:",
      "• $0 - Linha inteira",
      "• $1, $2, ... - Campos individuais",
      "• NF - Número de campos",
      "• NR - Número da linha atual",
      "• FS - Separador de campo (Field Separator)",
      "• OFS - Separador de saída",
      "",
      "Exemplos básicos:",
      "• awk '{print $1}' - Primeira coluna",
      "• awk -F ',' '{print $1,$3}' - Campos específicos",
      "• awk 'NR>1' - Pula primeira linha",
      "• awk 'length($0)>80' - Linhas longas",
      "",
      "Operadores:",
      "• == - Igual",
      "• != - Diferente",
      "• > < >= <= - Comparações",
      "• ~ - Corresponde (regex)",
      "• !~ - Não corresponde",
      "",
      "Exemplos avançados:",
      "• awk '{sum += $1} END {print sum}' - Soma",
      "• awk '$1 > 100' - Filtra valores",
      "• awk '{count[$1]++} END {for (i in count) print i, count[i]}' - Contagem",
      "",
      "Estruturas de controle:",
      "• if (condição) { ações }",
      "• for (i=1; i<=NF; i++) { ações }",
      "• while (condição) { ações }",
      "",
      "Exemplos práticos:",
      "• Análise de logs:",
      "awk '/ERROR/ {print $1,$2,$NF}'",
      "• Estatísticas:",
      "awk '{sum+=$1; count++} END {print sum/count}'",
      "• Formatação de saída:",
      "awk 'BEGIN {printf \"%-20s %s\\n\", \"Nome\", \"Valor\"}"
    ],
    questions: [
      {
        text: "Como definir o separador de campos no awk?",
        choices: [
          { id: "a", text: "-d", correct: false },
          { id: "b", text: "-s", correct: false },
          { id: "c", text: "-F", correct: true },
          { id: "d", text: "-f", correct: false }
        ]
      },
      {
        text: "Qual variável representa o número total de campos em uma linha?",
        choices: [
          { id: "a", text: "NR", correct: false },
          { id: "b", text: "NF", correct: true },
          { id: "c", text: "FC", correct: false },
          { id: "d", text: "TF", correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Análise de Logs",
    objective: "Aplicar os conhecimentos em um exemplo prático de análise de logs.",
    icon: <Terminal className="w-6 h-6" />,
    content: [
      "Vamos aplicar os comandos aprendidos em situações reais de análise de logs.",
      "",
      "Cenário 1: Análise de Erros",
      "• Contar erros:",
      "grep ERROR log.txt | wc -l",
      "• Extrair timestamp e mensagem:",
      "awk '/ERROR/ {print $1,$2,$NF}' log.txt",
      "• Agrupar por tipo de erro:",
      "grep ERROR log.txt | cut -d ']' -f 2 | sort | uniq -c",
      "",
      "Cenário 2: Análise de Acesso Web",
      "• IPs mais frequentes:",
      "cut -d ' ' -f 1 access.log | sort | uniq -c | sort -nr",
      "• Requisições por hora:",
      "awk '{print $4}' access.log | cut -d: -f2 | sort | uniq -c",
      "• Códigos de status HTTP:",
      "cut -d '\"' -f3 access.log | cut -d ' ' -f2 | sort | uniq -c",
      "",
      "Cenário 3: Segurança",
      "• Tentativas de login falhas:",
      "grep 'Failed password' /var/log/auth.log",
      "• IPs bloqueados:",
      "grep 'Blocked IP' security.log | awk '{print $5}'",
      "• Ataques por país:",
      "awk '/Attack/ {print $6}' security.log | sort | uniq -c",
      "",
      "Dicas para análise de logs:",
      "• Use head/tail para amostragem inicial",
      "• Combine comandos com pipe ( | )",
      "• Salve resultados importantes em arquivos",
      "• Crie aliases para comandos frequentes",
      "• Monitore logs em tempo real com tail -f"
    ],
    questions: [
      {
        text: "Qual comando conta o número de linhas com a palavra 'ERROR'?",
        choices: [
          { id: "a", text: "grep ERROR log.txt | wc -l", correct: true },
          { id: "b", text: "grep -c ERROR log.txt", correct: false },
          { id: "c", text: "awk '/ERROR/' log.txt", correct: false },
          { id: "d", text: "sed -n '/ERROR/p' log.txt", correct: false }
        ]
      },
      {
        text: "Para monitorar um log em tempo real, use:",
        choices: [
          { id: "a", text: "cat -f", correct: false },
          { id: "b", text: "tail -f", correct: true },
          { id: "c", text: "watch", correct: false },
          { id: "d", text: "monitor", correct: false }
        ]
      }
    ]
  }
];