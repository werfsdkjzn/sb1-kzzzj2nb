import { Lock, Key, Shield, Network, Database, Globe, Terminal } from 'lucide-react';
import { Task } from '../types/course';

export const networkingTasks5: Task[] = [
  {
    id: 1,
    title: "Troca de Chaves",
    objective: "Compreender os diferentes mecanismos de troca de chaves em redes.",
    icon: <Key className="w-6 h-6" />,
    content: [
      "A troca de chaves permite que dois dispositivos criem um segredo compartilhado de forma segura.",
      "",
      "Métodos de Troca de Chaves:",
      "• **Diffie-Hellman (DH)**: Método pioneiro, vulnerável a ataques MITM",
      "• **RSA**: Usa chaves públicas/privadas para comunicação segura",
      "• **ECDH (Elliptic Curve Diffie-Hellman)**: Versão moderna e eficiente do DH",
      "• **ECDSA**: Para assinaturas digitais com curva elíptica",
      "",
      "Características:",
      "• Permite criar segredos compartilhados remotamente",
      "• Protege contra interceptação",
      "• Base para HTTPS e VPNs",
      "• Garante sigilo direto (forward secrecy)",
      "",
      "🔐 *Exemplo Prático:*",
      "Como dois amigos criando uma saudação secreta sem se encontrar pessoalmente, usando charadas que só o outro consegue resolver."
    ],
    questions: [
      {
        text: "Qual método de troca de chaves é mais eficiente e moderno?",
        choices: [
          { id: "a", text: "RSA", correct: false },
          { id: "b", text: "ECDH", correct: true },
          { id: "c", text: "DH", correct: false },
          { id: "d", text: "DSA", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "VPNs e IKE",
    objective: "Entender o funcionamento de VPNs e o protocolo IKE.",
    icon: <Network className="w-6 h-6" />,
    content: [
      "VPNs criam túneis seguros entre redes, usando IKE (Internet Key Exchange) para negociar a segurança.",
      "",
      "Modos IKE:",
      "• **Main Mode**: Mais lento mas mais seguro",
      "• **Aggressive Mode**: Mais rápido mas menos seguro",
      "",
      "Processo de Conexão:",
      "1. Troca de chaves",
      "2. Autenticação mútua",
      "3. Definição de regras de segurança",
      "",
      "Tipos de Autenticação:",
      "• **PSK (Pre-Shared Keys)**",
      "• **Certificados Digitais**",
      "• **EAP**",
      "",
      "⚠️ Cuidado: PSKs comprometidas podem afetar toda a conexão!"
    ],
    questions: [
      {
        text: "Qual modo IKE oferece maior segurança?",
        choices: [
          { id: "a", text: "Aggressive Mode", correct: false },
          { id: "b", text: "Main Mode", correct: true },
          { id: "c", text: "Fast Mode", correct: false },
          { id: "d", text: "Quick Mode", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Autenticação e Protocolos",
    objective: "Conhecer os principais protocolos de autenticação em redes.",
    icon: <Shield className="w-6 h-6" />,
    content: [
      "Protocolos de autenticação garantem a identidade dos participantes na comunicação.",
      "",
      "Protocolos Principais:",
      "• **Kerberos**: Sistema de tickets para autenticação",
      "• **TLS/SSL**: Segurança para HTTPS",
      "• **OAuth/OpenID**: Login federado",
      "• **2FA/MFA**: Verificação em múltiplos fatores",
      "",
      "Características SSH/HTTPS:",
      "• Versões seguras de protocolos antigos",
      "• Criptografia embutida",
      "• Verificação de identidade",
      "",
      "PKI (Infraestrutura de Chave Pública):",
      "• Gerencia certificados digitais",
      "• Valida identidades",
      "• Base para HTTPS e email seguro"
    ],
    questions: [
      {
        text: "Qual protocolo usa sistema de tickets para autenticação?",
        choices: [
          { id: "a", text: "OAuth", correct: false },
          { id: "b", text: "Kerberos", correct: true },
          { id: "c", text: "OpenID", correct: false },
          { id: "d", text: "TLS", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Transmissão de Dados",
    objective: "Compreender como os dados são transmitidos de forma segura.",
    icon: <Database className="w-6 h-6" />,
    content: [
      "Os dados na rede são enviados em pacotes, usando diferentes protocolos conforme a necessidade.",
      "",
      "TCP vs UDP:",
      "• **TCP**: Confiável, ordenado, mais lento",
      "• **UDP**: Rápido, sem garantias",
      "",
      "Aplicações:",
      "• TCP: web, email, downloads",
      "• UDP: streaming, jogos, VoIP",
      "",
      "Estrutura do Pacote:",
      "• **Cabeçalho**: Informações de roteamento",
      "• **Carga**: Dados reais",
      "• **Campo IP ID**: Identifica fragmentos",
      "",
      "🎯 Dica: Use `traceroute` para ver o caminho dos pacotes!"
    ],
    questions: [
      {
        text: "Qual protocolo é melhor para streaming de vídeo?",
        choices: [
          { id: "a", text: "TCP", correct: false },
          { id: "b", text: "UDP", correct: true },
          { id: "c", text: "ICMP", correct: false },
          { id: "d", text: "ARP", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Blind Spoofing",
    objective: "Entender o conceito de Blind Spoofing e suas implicações.",
    icon: <Globe className="w-6 h-6" />,
    content: [
      "Blind Spoofing é um ataque onde o invasor tenta adivinhar detalhes da conexão sem ver as respostas.",
      "",
      "Características:",
      "• Falsifica identidade do dispositivo",
      "• Tenta adivinhar números de sequência",
      "• Pode invadir sessões",
      "• Envia dados falsos",
      "",
      "Proteções Modernas:",
      "• Números aleatórios",
      "• Criptografia forte",
      "• Validação de identidade",
      "• Monitoramento de tráfego",
      "",
      "⚠️ Sempre use protocolos modernos com proteções contra spoofing!"
    ],
    questions: [
      {
        text: "O que é Blind Spoofing?",
        choices: [
          { id: "a", text: "Ataque que adivinha detalhes da conexão", correct: true },
          { id: "b", text: "Tipo de criptografia", correct: false },
          { id: "c", text: "Protocolo de rede", correct: false },
          { id: "d", text: "Sistema de backup", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Criptografia em Redes",
    objective: "Aprender sobre diferentes tipos de criptografia e suas aplicações.",
    icon: <Lock className="w-6 h-6" />,
    content: [
      "A criptografia protege dados transformando-os em formato ilegível.",
      "",
      "Tipos de Criptografia:",
      "• **Simétrica**: Mesma chave para codificar/decodificar",
      "• **Assimétrica**: Par de chaves pública/privada",
      "",
      "Algoritmos Comuns:",
      "• **AES**: Padrão moderno, muito seguro",
      "• **3DES**: Versão reforçada do DES",
      "",
      "Modos de Operação:",
      "• **ECB**: Modo eletrônico básico",
      "• **CBC**: Cadeia de blocos",
      "• **CFB/OFB**: Para fluxos contínuos",
      "• **CTR**: Modo contador",
      "• **GCM**: Modo autenticado",
      "",
      "Aplicações:",
      "• Wi-Fi (WPA2/3)",
      "• VPNs",
      "• HTTPS",
      "• Discos rígidos"
    ],
    questions: [
      {
        text: "Qual modo de operação é mais seguro para VPNs?",
        choices: [
          { id: "a", text: "ECB", correct: false },
          { id: "b", text: "GCM", correct: true },
          { id: "c", text: "CBC", correct: false },
          { id: "d", text: "CTR", correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Segurança Prática",
    objective: "Aplicar conhecimentos de segurança em situações reais.",
    icon: <Terminal className="w-6 h-6" />,
    content: [
      "Práticas essenciais para manter redes seguras:",
      "",
      "Princípios Básicos:",
      "• Defesa em profundidade",
      "• Menor privilégio possível",
      "• Monitoramento constante",
      "• Atualizações regulares",
      "",
      "Ferramentas Essenciais:",
      "• Firewalls",
      "• IDS/IPS",
      "• VPNs",
      "• Antivírus",
      "",
      "Boas Práticas:",
      "• Backups regulares",
      "• Senhas fortes",
      "• Autenticação em dois fatores",
      "• Logs centralizados",
      "",
      "🔐 Dica: A segurança é um processo contínuo, não um produto!"
    ],
    questions: [
      {
        text: "Qual princípio de segurança recomenda usar apenas os privilégios necessários?",
        choices: [
          { id: "a", text: "Defesa em profundidade", correct: false },
          { id: "b", text: "Menor privilégio possível", correct: true },
          { id: "c", text: "Monitoramento constante", correct: false },
          { id: "d", text: "Backup regular", correct: false }
        ]
      }
    ]
  }
];