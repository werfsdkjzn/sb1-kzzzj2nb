import { Network, Layers, Globe, Shield, Server, Terminal, Database } from 'lucide-react';
import { Task } from '../types/course';

export const networkingTasks2: Task[] = [
  {
    id: 1,
    title: "Introdução às Redes",
    objective: "Compreender os conceitos fundamentais de redes e sua importância.",
    icon: <Network className="w-6 h-6" />,
    content: [
      "Seja bem-vindo ao seu primeiro passo no mundo das redes!",
      "Aqui você vai aprender, passo a passo, como os computadores se comunicam, o que acontece quando você acessa um site, e como ferramentas como proxies, IPs e MAC addresses fazem tudo isso funcionar.",
      "",
      "Imagine que a internet funciona como uma entrega de pacotes. Cada 'parte do processo' tem uma função específica:",
      "• Quem embala",
      "• Quem transporta",
      "• Quem faz o rastreamento",
      "• Quem entrega na porta",
      "",
      "Para organizar isso, existem modelos de rede que dividem a comunicação em camadas.",
      "Vamos aprender sobre esses modelos e como eles trabalham juntos para fazer a internet funcionar."
    ],
    questions: [
      {
        text: "Como podemos comparar o funcionamento da internet?",
        choices: [
          { id: "a", text: "A um sistema de correios", correct: true },
          { id: "b", text: "A uma biblioteca", correct: false },
          { id: "c", text: "A um supermercado", correct: false },
          { id: "d", text: "A uma escola", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Modelo OSI",
    objective: "Entender o modelo OSI e suas sete camadas.",
    icon: <Layers className="w-6 h-6" />,
    content: [
      "O modelo OSI serve como uma maneira de entender tudo que acontece quando você envia dados.",
      "",
      "As 7 camadas do modelo OSI são:",
      "",
      "7. Aplicação: É onde você interage — o navegador, o app de e-mail, um jogo online",
      "6. Apresentação: Aqui os dados são formatados. Exemplo: criptografia (como o cadeado do HTTPS) ou compressão",
      "5. Sessão: Garante que sua sessão com o servidor funcione — como manter você logado sem cair",
      "4. Transporte: Cuida do 'como enviar': se os dados vão chegar inteiros e em ordem (TCP), ou se a velocidade é mais importante (UDP)",
      "3. Rede: Define o caminho que os dados vão seguir. Usa IPs para identificar origens e destinos",
      "2. Enlace: Lida com a entrega dentro da rede local. Usa endereços MAC para isso",
      "1. Física: É onde o dado se transforma em sinal elétrico, ondas de rádio ou pulsos de luz"
    ],
    questions: [
      {
        text: "Qual camada do modelo OSI é responsável pela criptografia?",
        choices: [
          { id: "a", text: "Aplicação", correct: false },
          { id: "b", text: "Apresentação", correct: true },
          { id: "c", text: "Sessão", correct: false },
          { id: "d", text: "Transporte", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Modelo TCP/IP",
    objective: "Compreender o modelo TCP/IP e sua aplicação prática.",
    icon: <Globe className="w-6 h-6" />,
    content: [
      "O modelo TCP/IP é o modelo usado na prática. Ele resume o OSI em 4 camadas:",
      "",
      "1. Camada de Aplicação:",
      "• Reúne tudo que o usuário vê (HTTP, FTP, DNS, etc)",
      "• Combina as camadas de Aplicação, Apresentação e Sessão do modelo OSI",
      "",
      "2. Camada de Transporte:",
      "• Escolhe se os dados devem ser confiáveis (TCP) ou rápidos (UDP)",
      "• Equivalente à camada de Transporte do modelo OSI",
      "",
      "3. Camada de Internet:",
      "• Cuida dos endereços IP e do roteamento",
      "• Equivalente à camada de Rede do OSI",
      "",
      "4. Camada de Acesso:",
      "• Lida com o hardware — como os dados saem pela antena do Wi-Fi ou pelo cabo Ethernet",
      "• Combina as camadas Física e de Enlace do OSI"
    ],
    questions: [
      {
        text: "Quantas camadas tem o modelo TCP/IP?",
        choices: [
          { id: "a", text: "7", correct: false },
          { id: "b", text: "5", correct: false },
          { id: "c", text: "4", correct: true },
          { id: "d", text: "3", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Encapsulamento",
    objective: "Entender como os dados são encapsulados nas diferentes camadas.",
    icon: <Database className="w-6 h-6" />,
    content: [
      "Pense assim: cada camada da rede coloca seus próprios 'dados extras' nos pacotes — como se cada um colocasse sua etiqueta na encomenda. Isso se chama encapsulamento.",
      "",
      "Por exemplo, quando você envia algo:",
      "",
      "1. A camada de aplicação gera o conteúdo (como uma mensagem)",
      "2. A camada de transporte embala isso num segmento",
      "3. A camada de rede adiciona um endereço IP",
      "4. A camada de enlace coloca o endereço MAC",
      "5. A camada física transforma tudo em sinais para viajar",
      "",
      "Quando o pacote chega no destino, cada camada 'desembrulha' o que a anterior fez, até que a mensagem original chegue ao aplicativo."
    ],
    questions: [
      {
        text: "O que acontece quando um pacote chega ao destino?",
        choices: [
          { id: "a", text: "É descartado", correct: false },
          { id: "b", text: "É copiado", correct: false },
          { id: "c", text: "É desencapsulado", correct: true },
          { id: "d", text: "É compactado", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Proxies",
    objective: "Compreender o conceito e tipos de proxies.",
    icon: <Server className="w-6 h-6" />,
    content: [
      "Um proxy é um intermediário. Ele fica entre o seu dispositivo e a internet. Em vez de você acessar diretamente um site, você fala com o proxy, e ele fala com o site por você.",
      "",
      "Existem vários tipos:",
      "",
      "• Forward proxy: Usado para controlar ou filtrar a saída da sua rede. Exemplo: uma empresa que quer bloquear o acesso ao Instagram",
      "",
      "• Reverse proxy: Fica na frente de um servidor na internet. Quando você acessa um site, está na verdade acessando o proxy, que encaminha para o servidor verdadeiro",
      "",
      "• Proxy transparente: Redireciona seu tráfego sem que você precise configurar nada. Exemplo: Wi-Fi de hotel",
      "",
      "• Proxy não transparente: Precisa ser configurado manualmente, muito usado em ferramentas de privacidade",
      "",
      "Dica: Um VPN cria um 'túnel seguro' para seus dados. Um proxy apenas atua como intermediário. Eles parecem similares, mas funcionam de formas bem diferentes."
    ],
    questions: [
      {
        text: "Qual tipo de proxy não requer configuração do usuário?",
        choices: [
          { id: "a", text: "Forward proxy", correct: false },
          { id: "b", text: "Reverse proxy", correct: false },
          { id: "c", text: "Proxy transparente", correct: true },
          { id: "d", text: "Proxy não transparente", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Navegação de Dados",
    objective: "Entender como os dados navegam na internet.",
    icon: <Terminal className="w-6 h-6" />,
    content: [
      "A camada de rede é como um sistema de navegação para seus dados. Ela usa endereços IP para saber quem é quem, e protocolos de roteamento para decidir o melhor caminho.",
      "",
      "Protocolos importantes:",
      "",
      "• IPv4: O tipo mais comum de IP (ex: 192.168.0.1), com 32 bits",
      "• IPv6: Uma versão mais moderna, com mais espaço de endereços (ex: 2001:db8::1)",
      "• ICMP: Usado por comandos como ping e traceroute para testar conexões",
      "• IGMP: Permite transmissões para vários dispositivos ao mesmo tempo",
      "• IPSec: Cria conexões seguras entre redes — como as VPNs",
      "• RIP/OSPF: Protocolos que ajudam os roteadores a se comunicarem"
    ],
    questions: [
      {
        text: "Qual protocolo é usado para testar conexões com ping?",
        choices: [
          { id: "a", text: "IPv4", correct: false },
          { id: "b", text: "ICMP", correct: true },
          { id: "c", text: "IGMP", correct: false },
          { id: "d", text: "IPSec", correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Endereçamento IP",
    objective: "Compreender endereçamento IP e sub-redes.",
    icon: <Shield className="w-6 h-6" />,
    content: [
      "Um endereço IP é como o 'CEP' do seu computador na internet. Exemplo: 192.168.1.10",
      "",
      "Ele é dividido em:",
      "• Parte da rede (ex: 192.168.1)",
      "• Parte do host (ex: .10)",
      "",
      "Com sub-redes, você pode dividir redes grandes em partes menores. Isso é útil para organizar e proteger sua rede.",
      "",
      "Ferramentas como ipcalc ajudam a calcular:",
      "• Faixa de IPs disponíveis",
      "• Endereço da rede",
      "• Máscara de sub-rede",
      "• Broadcast (último IP)",
      "",
      "Quer praticar? Use um site como ipcalc.co se não quiser instalar nada."
    ],
    questions: [
      {
        text: "O que é uma sub-rede?",
        choices: [
          { id: "a", text: "Um tipo de cabo de rede", correct: false },
          { id: "b", text: "Uma divisão de uma rede maior", correct: true },
          { id: "c", text: "Um protocolo de rede", correct: false },
          { id: "d", text: "Um tipo de firewall", correct: false }
        ]
      }
    ]
  }
];