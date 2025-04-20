import { Network, Shield, Terminal, Globe, Server, Lock, Database } from 'lucide-react';
import { Task } from '../types/course';

export const networkingTasks3: Task[] = [
  {
    id: 1,
    title: "Protocolos de Segurança e Acesso",
    objective: "Compreender os principais protocolos de segurança usados em redes.",
    icon: <Shield className="w-6 h-6" />,
    content: [
      "Os protocolos de segurança são fundamentais para proteger as comunicações em rede.",
      "",
      "Protocolos de Segurança Wi-Fi:",
      "• **WEP (Wired Equivalent Privacy)**: Protocolo antigo e inseguro",
      "• **WPA (Wi-Fi Protected Access)**: Evolução do WEP, mais seguro",
      "• **TKIP (Temporal Key Integrity Protocol)**: Usado com WPA, menos seguro que AES",
      "",
      "Protocolos VPN:",
      "• **VPN (Virtual Private Network)**: Cria conexão segura e criptografada com outra rede",
      "• **IPsec**: Protocolo de segurança usado em VPNs",
      "• **PPTP (Point-to-Point Tunneling Protocol)**: Protocolo VPN mais antigo e menos seguro",
      "",
      "🔎 *Lembrete prático:* Sempre opte por protocolos modernos como IPsec ou WPA2/3 para maior segurança."
    ],
    questions: [
      {
        text: "Qual protocolo de segurança Wi-Fi é considerado inseguro atualmente?",
        choices: [
          { id: "a", text: "WPA2", correct: false },
          { id: "b", text: "WEP", correct: true },
          { id: "c", text: "WPA3", correct: false },
          { id: "d", text: "IPsec", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Protocolos de Comunicação",
    objective: "Entender os principais protocolos usados para comunicação e transferência de arquivos.",
    icon: <Globe className="w-6 h-6" />,
    content: [
      "Existem diversos protocolos especializados para diferentes tipos de comunicação:",
      "",
      "Protocolos de Acesso Remoto:",
      "• **SSH (Secure Shell)**: Acesso remoto seguro via linha de comando",
      "• **FTP (File Transfer Protocol)**: Transferência de arquivos (não criptografado)",
      "• **SCP (Secure Copy Protocol)**: Alternativa segura ao FTP",
      "",
      "Protocolos Web:",
      "• **HTTP**: Protocolo padrão para sites (porta 80)",
      "• **HTTPS**: Versão segura do HTTP com SSL/TLS (porta 443)",
      "",
      "Protocolos de Email:",
      "• **SMTP**: Envio de emails",
      "• **POP3**: Recebimento de emails",
      "• **IMAP**: Acesso remoto a emails",
      "",
      "Compartilhamento de Arquivos:",
      "• **SMB**: Compartilhamento Windows",
      "• **NFS**: Compartilhamento Unix/Linux",
      "• **TFTP**: FTP simplificado"
    ],
    questions: [
      {
        text: "Qual porta é usada pelo HTTPS?",
        choices: [
          { id: "a", text: "80", correct: false },
          { id: "b", text: "443", correct: true },
          { id: "c", text: "22", correct: false },
          { id: "d", text: "21", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Protocolos de Sincronização",
    objective: "Aprender sobre protocolos usados para sincronização e gerenciamento de rede.",
    icon: <Server className="w-6 h-6" />,
    content: [
      "Protocolos essenciais para manter a rede sincronizada e gerenciada:",
      "",
      "Sincronização e Gerenciamento:",
      "• **NTP (Network Time Protocol)**: Sincroniza relógios",
      "• **SNMP (Simple Network Management Protocol)**: Gerencia dispositivos",
      "• **DHCP (Dynamic Host Configuration Protocol)**: Atribui IPs",
      "• **DNS (Domain Name System)**: Resolve nomes em IPs",
      "• **ICMP (Internet Control Message Protocol)**: Status e erros",
      "",

      "Este comando usa ICMP para testar conectividade, enviando 4 pacotes."
    ],
    questions: [
      {
        text: "Qual protocolo é usado para sincronizar o relógio dos sistemas?",
        choices: [
          { id: "a", text: "SNMP", correct: false },
          { id: "b", text: "NTP", correct: true },
          { id: "c", text: "DNS", correct: false },
          { id: "d", text: "DHCP", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Protocolos de Roteamento",
    objective: "Compreender os protocolos usados para roteamento e descoberta de rede.",
    icon: <Network className="w-6 h-6" />,
    content: [
      "Protocolos que ajudam na navegação e descoberta de dispositivos na rede:",
      "",
      "Protocolos de Roteamento:",
      "• **RIP (Routing Information Protocol)**: Roteamento simples",
      "• **OSPF (Open Shortest Path First)**: Roteamento eficiente",
      "• **EIGRP**: Protocolo Cisco proprietário",
      "",
      "Protocolos de Descoberta:",
      "• **CDP (Cisco Discovery Protocol)**: Descoberta Cisco",
      "• **HSRP e VRRP**: Redundância de roteadores",
      "• **STP (Spanning Tree Protocol)**: Previne loops",
      "",
      "Estes protocolos são essenciais para:",
      "• Encontrar melhores rotas",
      "• Evitar loops de rede",
      "• Garantir redundância",
      "• Otimizar tráfego"
    ],
    questions: [
      {
        text: "Qual protocolo previne loops em redes com múltiplos switches?",
        choices: [
          { id: "a", text: "RIP", correct: false },
          { id: "b", text: "OSPF", correct: false },
          { id: "c", text: "STP", correct: true },
          { id: "d", text: "CDP", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Protocolos de Autenticação",
    objective: "Entender os protocolos usados para autenticação e controle de acesso.",
    icon: <Lock className="w-6 h-6" />,
    content: [
      "Protocolos essenciais para autenticação e controle de acesso:",
      "",
      "Autenticação de Rede:",
      "• **TACACS**: Autenticação centralizada",
      "• **RADIUS**: Autenticação de acesso",
      "• **LDAP**: Diretório de usuários",
      "",
      "Protocolos de Comunicação:",
      "• **VoIP**: Chamadas pela internet",
      "• **SIP**: Gerencia sessões multimídia",
      "  - INVITE: inicia chamada",
      "  - BYE: termina sessão",
      "  - OPTIONS: consulta capacidades",
      "",
      "Identificação de Recursos:",
      "• **URI**: Identificador de recursos",
      "• **URL**: Localização específica",
      "• **NNTP**: Grupos de notícias"
    ],
    questions: [
      {
        text: "Qual protocolo é usado para diretório de usuários?",
        choices: [
          { id: "a", text: "TACACS", correct: false },
          { id: "b", text: "RADIUS", correct: false },
          { id: "c", text: "LDAP", correct: true },
          { id: "d", text: "SIP", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "TCP e UDP",
    objective: "Compreender as diferenças entre TCP e UDP e suas aplicações.",
    icon: <Terminal className="w-6 h-6" />,
    content: [
      "**TCP (Transmission Control Protocol)**:",
      "• Protocolo confiável",
      "• Garante entrega ordenada",
      "• Usa three-way handshake",
      "• Mais lento mas seguro",
      "",
      "🧠 *Exemplo TCP:* Navegação web via HTTP usa TCP para garantir carregamento correto das páginas.",
      "",
      "**UDP (User Datagram Protocol)**:",
      "• Mais rápido que TCP",
      "• Sem garantia de entrega",
      "• Ideal para streaming",
      "• Menor overhead",
      "",
      "🎥 *Exemplo UDP:* YouTube usa UDP para streaming porque prioriza velocidade sobre perfeição.",
      "",
      "Comparação:",
      "• TCP: Email, web, transferência de arquivos",
      "• UDP: VoIP, jogos online, streaming"
    ],
    questions: [
      {
        text: "Qual protocolo é mais adequado para streaming de vídeo ao vivo?",
        choices: [
          { id: "a", text: "TCP", correct: false },
          { id: "b", text: "UDP", correct: true },
          { id: "c", text: "HTTP", correct: false },
          { id: "d", text: "FTP", correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "ICMP e Diagnóstico",
    objective: "Aprender sobre ICMP e suas aplicações em diagnóstico de rede.",
    icon: <Database className="w-6 h-6" />,
    content: [
      "O ICMP ajuda dispositivos a trocar informações sobre status e erros.",
      "",
      "📌 Tipos de mensagens ICMP:",
      "• **Echo Request/Reply**: Teste de conectividade",
      "• **Destination Unreachable**: Destino inacessível",
      "• **Time Exceeded**: TTL expirado",
      "",
      "🧠 *Curiosidade sobre TTL:*",
      "Valores padrão por sistema:",
      "• Windows: TTL 128",
      "• Linux/macOS: TTL 64",
      "• Solaris: TTL 255",
      "",
      "Comandos úteis:",
      "• ping: testa conectividade",
      "• traceroute: mostra rota",
      "• pathping: combina ping e traceroute",
      "",
      "⚠️ Dica de Segurança: Valores de TTL podem revelar o sistema operacional do alvo!"
    ],
    questions: [
      {
        text: "Qual é o valor padrão de TTL no Linux?",
        choices: [
          { id: "a", text: "128", correct: false },
          { id: "b", text: "64", correct: true },
          { id: "c", text: "255", correct: false },
          { id: "d", text: "32", correct: false }
        ]
      }
    ]
  }
];