import { Wifi, Shield, Lock, Network, Server, Globe, Database } from 'lucide-react';
import { Task } from '../types/course';

export const networkingTasks4: Task[] = [
  {
    id: 1,
    title: "Redes Sem Fio",
    objective: "Compreender os fundamentos das redes sem fio e suas tecnologias.",
    icon: <Wifi className="w-6 h-6" />,
    content: [
      "Redes sem fio são redes de computadores que utilizam conexões de dados sem fio entre os nós, permitindo que dispositivos como notebooks, smartphones e tablets se comuniquem sem o uso de cabos físicos.",
      "",
      "Tipos de Redes Sem Fio:",
      "• **WPAN (Wireless Personal Area Network)**: Rede de curto alcance, como Bluetooth",
      "• **WLAN (Wireless Local Area Network)**: Abrange áreas pequenas, como residências e escritórios",
      "• **WMAN (Wireless Metropolitan Area Network)**: Cobre áreas do tamanho de uma cidade",
      "• **WWAN (Wireless Wide Area Network)**: Abrange grandes regiões, usando redes móveis como 3G, 4G LTE e 5G",
      "",
      "Funcionamento:",
      "• Usa **radiofrequência (RF)** para transmissão",
      "• Opera nas faixas de **2.4 GHz ou 5 GHz**",
      "• Requer **SSID e senha** para conexão",
      "• Usa **Ponto de Acesso Sem Fio (WAP)** como intermediário",
      "",
      "Fatores que afetam o sinal:",
      "• Potência do transmissor",
      "• Obstáculos físicos",
      "• Interferência de RF"
    ],
    questions: [
      {
        text: "Qual tipo de rede sem fio é usada para conexões Bluetooth?",
        choices: [
          { id: "a", text: "WLAN", correct: false },
          { id: "b", text: "WPAN", correct: true },
          { id: "c", text: "WMAN", correct: false },
          { id: "d", text: "WWAN", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Processo de Conexão Wi-Fi",
    objective: "Entender como ocorre o processo de conexão em redes Wi-Fi.",
    icon: <Network className="w-6 h-6" />,
    content: [
      "O processo de conexão Wi-Fi segue o padrão **IEEE 802.11** e envolve várias etapas de autenticação e associação.",
      "",
      "Informações no pedido de associação:",
      "• **Endereço MAC** – Identificador exclusivo do dispositivo",
      "• **SSID** – Nome da rede",
      "• **Taxas de dados e canais suportados**",
      "• **Protocolos de segurança compatíveis** (WPA2/WPA3)",
      "",
      "Protocolos envolvidos:",
      "• **TCP/IP** - Para endereçamento",
      "• **DHCP** - Para configuração automática",
      "• **WPA2** - Para criptografia",
      "",
      "Observações importantes:",
      "• Redes com SSIDs ocultos ainda podem ser detectadas",
      "• A configuração é automática após aceitação",
      "• O processo inclui verificação de segurança"
    ],
    questions: [
      {
        text: "O que é SSID?",
        choices: [
          { id: "a", text: "Endereço MAC do dispositivo", correct: false },
          { id: "b", text: "Nome da rede", correct: true },
          { id: "c", text: "Senha da rede", correct: false },
          { id: "d", text: "Protocolo de segurança", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Handshake e Autenticação",
    objective: "Compreender os diferentes processos de handshake em WEP e WPA.",
    icon: <Lock className="w-6 h-6" />,
    content: [
      "Os protocolos WEP e WPA usam diferentes métodos de handshake para autenticação:",
      "",
      "Handshake WEP (Obsoleto):",
      "1. Cliente envia pedido de associação",
      "2. Ponto de acesso responde com string de desafio",
      "3. Cliente criptografa a string com chave compartilhada",
      "4. Ponto de acesso valida e concede acesso",
      "",
      "Handshake WPA (Moderno):",
      "1. AP envia nonce (número aleatório) para o cliente",
      "2. Cliente gera outro nonce e envia com MIC baseado na PSK",
      "3. AP valida MIC e envia chaves temporárias",
      "4. Cliente confirma recebimento e inicia sessão segura",
      "",
      "Diferenças Principais:",
      "• WEP: Chave fixa compartilhada entre todos",
      "• WPA: Gera chaves únicas por sessão (PTK)",
      "• WEP: Vulnerável a ataques de força bruta",
      "• WPA: Inclui proteção contra replay attacks",
      "",
      "Características WPA:",
      "• Não expõe PSK diretamente",
      "• Deriva PTK dos nonces e PSK",
      "• Gera GTK para tráfego broadcast",
      "• Mais resiliente contra ataques",
      "",
      "⚠️ Vulnerabilidades WEP:",
      "• IVs pequenos e repetitivos",
      "• Processo previsível",
      "• CRC não criptografado",
      "• Fácil interceptação"
    ],
    questions: [
      {
        text: "Qual a principal diferença entre handshake WEP e WPA?",
        choices: [
          { id: "a", text: "WEP é mais rápido", correct: false },
          { id: "b", text: "WPA gera chaves únicas por sessão", correct: true },
          { id: "c", text: "WEP usa mais memória", correct: false },
          { id: "d", text: "WPA não usa criptografia", correct: false }
        ]
      },
      {
        text: "O que é PTK no contexto do WPA?",
        choices: [
          { id: "a", text: "Chave temporária derivada", correct: true },
          { id: "b", text: "Protocolo de transmissão", correct: false },
          { id: "c", text: "Tipo de autenticação", correct: false },
          { id: "d", text: "Sistema de backup", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Recursos de Segurança",
    objective: "Conhecer os principais recursos de segurança em redes sem fio.",
    icon: <Shield className="w-6 h-6" />,
    content: [
      "A segurança em redes sem fio envolve múltiplas camadas de proteção:",
      "",
      "Criptografia:",
      "• **WEP** - Obsoleto, usa chaves de 40 ou 104 bits e RC4",
      "• **WPA2/WPA3** - Moderno e seguro, usa AES",
      "",
      "Controle de Acesso:",
      "• Senhas de acesso",
      "• Filtragem por MAC",
      "• Autenticação de usuários",
      "",
      "Firewall:",
      "• Filtragem de tráfego",
      "• Bloqueio de acessos não autorizados",
      "• Proteção da rede interna",
      "",
      "Monitoramento:",
      "• Logs de acesso",
      "• Detecção de intrusão",
      "• Análise de tráfego"
    ],
    questions: [
      {
        text: "Qual protocolo de criptografia é considerado seguro atualmente?",
        choices: [
          { id: "a", text: "WEP", correct: false },
          { id: "b", text: "WPA2/WPA3", correct: true },
          { id: "c", text: "RC4", correct: false },
          { id: "d", text: "DES", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Protocolos de Criptografia",
    objective: "Entender os diferentes protocolos de criptografia e suas características.",
    icon: <Database className="w-6 h-6" />,
    content: [
      "Os protocolos de criptografia são essenciais para a segurança das redes sem fio:",
      "",
      "WEP:",
      "• Usa **chave compartilhada**",
      "• Vulnerável a **ataques de força bruta**",
      "• Vetores de inicialização (IV) pequenos",
      "• Permite descriptografia de dados",
      "",
      "WPA:",
      "• **WPA-Personal (PSK)** - Uso doméstico",
      "• **WPA-Enterprise** - Usa servidores RADIUS/TACACS+",
      "• Mais seguro que WEP",
      "• Melhor compatibilidade",
      "",
      "Protocolos de Autenticação:",
      "• **LEAP** - Usa chave compartilhada (frágil)",
      "• **PEAP** - Usa TLS para túnel criptografado",
      "",
      "⚠️ Recomendação: Sempre use WPA2/WPA3 quando possível!"
    ],
    questions: [
      {
        text: "Qual versão do WPA é mais adequada para empresas?",
        choices: [
          { id: "a", text: "WPA-Personal", correct: false },
          { id: "b", text: "WPA-Enterprise", correct: true },
          { id: "c", text: "WPA-Home", correct: false },
          { id: "d", text: "WPA-Basic", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "TACACS+ e Segurança",
    objective: "Compreender o funcionamento do TACACS+ e suas aplicações em segurança.",
    icon: <Server className="w-6 h-6" />,
    content: [
      "TACACS+ é um protocolo de autenticação e autorização para dispositivos de rede.",
      "",
      "Características:",
      "• **Autenticação e autorização** de usuários",
      "• Comunicação criptografada",
      "• Proteção de credenciais",
      "• Segurança de sessão",
      "",
      "Técnicas de Proteção:",
      "• **SSL/TLS** para criptografia",
      "• **IPSec** para túneis seguros",
      "• Confidencialidade de dados",
      "• Integridade da comunicação",
      "",
      "Aplicações:",
      "• Controle de acesso a equipamentos",
      "• Gerenciamento centralizado",
      "• Auditoria de acessos",
      "• Registro de atividades"
    ],
    questions: [
      {
        text: "Qual é a principal função do TACACS+?",
        choices: [
          { id: "a", text: "Roteamento de pacotes", correct: false },
          { id: "b", text: "Autenticação e autorização", correct: true },
          { id: "c", text: "Compressão de dados", correct: false },
          { id: "d", text: "Balanceamento de carga", correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Ataques e Proteção",
    objective: "Conhecer tipos comuns de ataques e medidas de proteção.",
    icon: <Globe className="w-6 h-6" />,
    content: [
      "Ataques comuns em redes sem fio e medidas de proteção:",
      "",
      "Ataque de Dissociação:",
      "• Envia **quadros de dissociação**",
      "• Força desconexões",
      "• Precede ataques MITM",
      "• Executado externamente",
      "",
      "Técnicas de Fortalecimento:",
      "• **Desabilitar transmissão do SSID**",
      "• **Ativar WPA2/WPA3**",
      "• **Filtragem por MAC**",
      "• **Implementar EAP-TLS**",
      "",
      "VPN (Rede Privada Virtual):",
      "• Cria **túnel criptografado**",
      "• Acesso remoto seguro",
      "• Conexão de filiais",
      "• Proteção em redes públicas",
      "",
      "Portas comuns:",
      "• TCP/1723 - PPTP",
      "• UDP/500 - IKE",
      "• UDP/4500 - ESP"
    ],
    questions: [
      {
        text: "O que é um ataque de dissociação?",
        choices: [
          { id: "a", text: "Roubo de senhas", correct: false },
          { id: "b", text: "Força desconexões de clientes", correct: true },
          { id: "c", text: "Criptografia fraca", correct: false },
          { id: "d", text: "Sobrecarga do servidor", correct: false }
        ]
      }
    ]
  }
];