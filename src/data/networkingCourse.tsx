import { Network, Globe, Cpu, Signal, Wifi, Shield, Lock, Cloud } from 'lucide-react';
import { Task } from '../types/course';

export const networkingTasks: Task[] = [
  {
    id: 1,
    title: "Compreendendo Redes",
    objective: "Entender o conceito básico de redes e suas aplicações no dia a dia.",
    icon: <Network className="w-6 h-6" />,
    content: [
      "Redes são simplesmente coisas que estão conectadas. Por exemplo, seu círculo de amizades: vocês todos estão conectados por interesses, hobbies, habilidades e afins.",
      "Redes podem ser encontradas em diversas áreas da vida, como:",
      "• Sistema de transporte público de uma cidade",
      "• Infraestruturas como a rede elétrica nacional",
      "• Conhecer e cumprimentar seus vizinhos",
      "• Sistemas postais para enviar cartas e pacotes",
      "No contexto da computação, a ideia de rede é a mesma, apenas distribuída para dispositivos tecnológicos.",
      "Uma rede na computação pode consistir de dois dispositivos até bilhões de dispositivos."
    ],
    questions: [
      {
        text: "Qual é o termo chave para dispositivos que estão conectados entre si?",
        choices: [
          { id: "a", text: "Grupo", correct: false },
          { id: "b", text: "Coleção", correct: false },
          { id: "c", text: "Rede", correct: true },
          { id: "d", text: "Sistema", correct: false }
        ]
      },
      {
        text: "Qual das opções abaixo NÃO é um exemplo de rede na vida cotidiana?",
        choices: [
          { id: "a", text: "Sistema de transporte público", correct: false },
          { id: "b", text: "Rede elétrica nacional", correct: false },
          { id: "c", text: "Envio de cartas pelo sistema postal", correct: false },
          { id: "d", text: "Um único computador isolado", correct: true }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Protocolos de Rede",
    objective: "Compreender os principais protocolos de rede e sua importância.",
    icon: <Cpu className="w-6 h-6" />,
    content: [
      "Protocolos são conjuntos de regras que permitem que dispositivos se comuniquem em uma rede.",
      "Alguns protocolos importantes incluem:",
      "• TCP/IP - Protocolo base da Internet",
      "• HTTP - Protocolo para transferência de páginas web",
      "• FTP - Protocolo para transferência de arquivos",
      "• SMTP - Protocolo para envio de emails",
      "• DNS - Sistema de nomes de domínio",
      "Cada protocolo tem uma função específica e trabalha em conjunto com outros protocolos."
    ],
    questions: [
      {
        text: "Qual protocolo é usado para transferência de páginas web?",
        choices: [
          { id: "a", text: "FTP", correct: false },
          { id: "b", text: "SMTP", correct: false },
          { id: "c", text: "HTTP", correct: true },
          { id: "d", text: "DNS", correct: false }
        ]
      },
      {
        text: "O que significa DNS?",
        choices: [
          { id: "a", text: "Data Network System", correct: false },
          { id: "b", text: "Domain Name System", correct: true },
          { id: "c", text: "Digital Network Service", correct: false },
          { id: "d", text: "Dynamic Network Setup", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Segurança de Rede",
    objective: "Aprender conceitos básicos de segurança em redes.",
    icon: <Shield className="w-6 h-6" />,
    content: [
      "A segurança de rede é fundamental para proteger dados e sistemas.",
      "Elementos importantes de segurança de rede incluem:",
      "• Firewalls - Controlam o tráfego de rede",
      "• Criptografia - Protege dados em trânsito",
      "• VPNs - Redes privadas virtuais",
      "• Autenticação - Verifica identidade dos usuários",
      "• Monitoramento - Detecta atividades suspeitas",
      "Uma boa estratégia de segurança combina múltiplas camadas de proteção."
    ],
    questions: [
      {
        text: "O que é um firewall?",
        choices: [
          { id: "a", text: "Um antivírus", correct: false },
          { id: "b", text: "Um controlador de tráfego de rede", correct: true },
          { id: "c", text: "Um tipo de cabo de rede", correct: false },
          { id: "d", text: "Um servidor web", correct: false }
        ]
      },
      {
        text: "Para que serve uma VPN?",
        choices: [
          { id: "a", text: "Aumentar a velocidade da internet", correct: false },
          { id: "b", text: "Criar uma rede privada virtual", correct: true },
          { id: "c", text: "Armazenar arquivos na nuvem", correct: false },
          { id: "d", text: "Gerenciar emails", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Redes Sem Fio",
    objective: "Compreender os fundamentos de redes wireless.",
    icon: <Wifi className="w-6 h-6" />,
    content: [
      "Redes sem fio permitem conectividade sem necessidade de cabos físicos.",
      "Aspectos importantes de redes wireless:",
      "• Padrões Wi-Fi (802.11)",
      "• Segurança wireless",
      "• Configuração de roteadores",
      "• Troubleshooting",
      "• Otimização de desempenho",
      "A configuração adequada de redes sem fio é crucial para garantir segurança e performance."
    ],
    questions: [
      {
        text: "Qual é o padrão mais comum para redes sem fio?",
        choices: [
          { id: "a", text: "Bluetooth", correct: false },
          { id: "b", text: "802.11", correct: true },
          { id: "c", text: "3G", correct: false },
          { id: "d", text: "NFC", correct: false }
        ]
      },
      {
        text: "O que NÃO afeta o desempenho de uma rede sem fio?",
        choices: [
          { id: "a", text: "Distância do roteador", correct: false },
          { id: "b", text: "Interferência", correct: false },
          { id: "c", text: "Cor do roteador", correct: true },
          { id: "d", text: "Número de dispositivos", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Endereçamento IP",
    objective: "Aprender sobre endereçamento IP e sub-redes.",
    icon: <Signal className="w-6 h-6" />,
    content: [
      "Endereços IP são identificadores únicos para dispositivos em rede.",
      "Conceitos importantes de endereçamento IP:",
      "• IPv4 vs IPv6",
      "• Classes de endereços IP",
      "• Máscaras de sub-rede",
      "• DHCP",
      "• NAT (Network Address Translation)",
      "Entender endereçamento IP é fundamental para configuração e troubleshooting de redes."
    ],
    questions: [
      {
        text: "Qual é o formato correto de um endereço IPv4?",
        choices: [
          { id: "a", text: "192.168.1", correct: false },
          { id: "b", text: "192.168.1.256", correct: false },
          { id: "c", text: "192.168.1.1", correct: true },
          { id: "d", text: "192:168:1:1", correct: false }
        ]
      },
      {
        text: "O que significa DHCP?",
        choices: [
          { id: "a", text: "Dynamic Host Configuration Protocol", correct: true },
          { id: "b", text: "Domain Host Control Protocol", correct: false },
          { id: "c", text: "Digital Host Control Program", correct: false },
          { id: "d", text: "Dynamic Host Control Program", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Infraestrutura de Rede",
    objective: "Compreender os componentes físicos de uma rede.",
    icon: <Cloud className="w-6 h-6" />,
    content: [
      "A infraestrutura de rede inclui diversos componentes físicos.",
      "Elementos principais:",
      "• Switches - Conectam dispositivos em rede local",
      "• Roteadores - Conectam diferentes redes",
      "• Cabos - Ethernet, fibra óptica",
      "• Access Points - Fornecem acesso wireless",
      "• Servidores - Hospedam serviços e aplicações",
      "Cada componente tem um papel específico no funcionamento da rede."
    ],
    questions: [
      {
        text: "Qual dispositivo é usado para conectar diferentes redes?",
        choices: [
          { id: "a", text: "Hub", correct: false },
          { id: "b", text: "Switch", correct: false },
          { id: "c", text: "Roteador", correct: true },
          { id: "d", text: "Modem", correct: false }
        ]
      },
      {
        text: "Qual é a função principal de um switch?",
        choices: [
          { id: "a", text: "Conectar dispositivos em rede local", correct: true },
          { id: "b", text: "Fornecer acesso à Internet", correct: false },
          { id: "c", text: "Converter sinais digitais em analógicos", correct: false },
          { id: "d", text: "Armazenar dados", correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Troubleshooting de Rede",
    objective: "Aprender técnicas básicas de resolução de problemas em redes.",
    icon: <Lock className="w-6 h-6" />,
    content: [
      "O troubleshooting é essencial para manter redes funcionando corretamente.",
      "Ferramentas e comandos importantes:",
      "• ping - Testa conectividade",
      "• traceroute - Mostra rota de pacotes",
      "• nslookup - Consulta DNS",
      "• ipconfig/ifconfig - Mostra configuração de rede",
      "• netstat - Exibe conexões ativas",
      "Conhecer estas ferramentas ajuda a identificar e resolver problemas rapidamente."
    ],
    questions: [
      {
        text: "Qual comando é usado para testar conectividade com outro host?",
        choices: [
          { id: "a", text: "ping", correct: true },
          { id: "b", text: "trace", correct: false },
          { id: "c", text: "nslookup", correct: false },
          { id: "d", text: "ipconfig", correct: false }
        ]
      },
      {
        text: "Para ver as conexões de rede ativas, usamos:",
        choices: [
          { id: "a", text: "netstat", correct: true },
          { id: "b", text: "ifconfig", correct: false },
          { id: "c", text: "route", correct: false },
          { id: "d", text: "arp", correct: false }
        ]
      }
    ]
  }
];