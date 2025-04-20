import { Network, Globe, Cpu, Signal, Wifi, Shield, Lock, Cloud, Search, Terminal, Router, Database } from 'lucide-react';
import { Task } from '../types/course';

export const networkingTasks: Task[] = [
  {
    id: 1,
    title: "Fundamentos de Redes",
    objective: "Compreender os conceitos básicos de redes de computadores e suas estruturas.",
    icon: <Network className="w-6 h-6" />,
    content: [
      "Uma rede de computadores é um conjunto de dispositivos conectados entre si para trocar dados e compartilhar recursos.",
      "Redes de computadores são essenciais para a comunicação moderna e permitem que dispositivos como computadores, smartphones e servidores compartilhem informações e acessem recursos remotos.",
      "",
      "Tipos de Conexão:",
      "• Cabeada - Usando cabos físicos para conectar dispositivos, como cabos Ethernet. A conexão cabeada oferece maior estabilidade e velocidade de transferência de dados.",
      "• Sem fio - Usando tecnologias sem fio, como Wi-Fi e Bluetooth. Embora mais conveniente, a conexão sem fio pode ser suscetível a interferências e variações de desempenho.",
      "",
      "Conceitos Importantes:",
      "• Pacote - Unidade básica de dados em uma rede. Dados transmitidos pela rede são divididos em pacotes para facilitar a transmissão e garantir a integridade da comunicação. Cada pacote pode conter informações como endereços de origem e destino, além dos dados propriamente ditos.",
      "• Endereço IP - Identificador único de cada dispositivo em uma rede. O IP pode ser estático (não muda) ou dinâmico (atribuído automaticamente por um servidor DHCP). Existem duas versões de IP: IPv4 e IPv6.",
      "• Protocolo - Regras de comunicação entre dispositivos. Protocolos determinam como os dados são formatados, transmitidos e processados na rede. Exemplos de protocolos incluem TCP/IP, HTTP, FTP e DNS.",
      "",
      "Tipos de Rede:",
      "• LAN - Rede local (casa ou escritório). Redes locais conectam dispositivos dentro de uma área geograficamente restrita, como uma casa ou empresa. Elas costumam usar cabos Ethernet ou Wi-Fi para comunicação.",
      "• WLAN - LAN sem fio (Wi-Fi). Uma rede LAN sem fio utiliza a tecnologia Wi-Fi para conectar dispositivos sem a necessidade de cabos. Embora seja conveniente, o Wi-Fi pode ter uma cobertura limitada e sofrer interferências.",
      "• WAN - Rede de longa distância (Internet). As redes WAN cobrem grandes distâncias e conectam múltiplas LANs. A Internet é o maior exemplo de WAN, conectando milhões de dispositivos ao redor do mundo.",
      "• VPN - Rede privada virtual. A VPN cria uma conexão segura entre dispositivos e redes remotas pela Internet, criptografando o tráfego para garantir a privacidade e segurança dos dados transmitidos.",
      "• MAN - Rede metropolitana. Uma MAN cobre uma área maior do que uma LAN, geralmente uma cidade ou região metropolitana. Ela pode ser usada para conectar várias LANs dentro de uma cidade.",
      "• GAN - Rede global. A GAN conecta redes em nível global, como a Internet, permitindo comunicação e compartilhamento de dados entre dispositivos ao redor do mundo.",
      "• WPAN - Rede pessoal sem fio (Bluetooth). As redes WPAN conectam dispositivos em uma área muito pequena, como um telefone e um fone de ouvido Bluetooth. Elas são ideais para conectar dispositivos pessoais com baixo consumo de energia.",
      "",
      "Dicas adicionais:",
      "• A segurança de redes sem fio deve ser uma prioridade. Use criptografia WPA2 ou WPA3 para proteger redes Wi-Fi.",
      "• As redes cabeadas, embora mais estáveis e rápidas, podem ser limitadas por distância e necessidade de cabos físicos.",
      "• As redes VPN são essenciais para segurança em conexões públicas, como ao usar Wi-Fi em cafés ou aeroportos.",
      "• Para gerenciar grandes redes, como uma WAN ou MAN, são usados equipamentos como roteadores, switches e firewalls para garantir a conectividade e a segurança."
    ],
    questions: [
      {
        text: "O que é um pacote de rede?",
        choices: [
          { id: "a", text: "Um programa de computador", correct: false },
          { id: "b", text: "Uma unidade de dados com endereço de origem e destino", correct: true },
          { id: "c", text: "Um tipo de cabo de rede", correct: false },
          { id: "d", text: "Um dispositivo de rede", correct: false }
        ]
      },
      {
        text: "Qual é a principal diferença entre LAN e WAN?",
        choices: [
          { id: "a", text: "LAN é mais rápida que WAN", correct: false },
          { id: "b", text: "LAN usa Wi-Fi, WAN usa cabos", correct: false },
          { id: "c", text: "LAN é local, WAN cobre grandes distâncias", correct: true },
          { id: "d", text: "LAN é mais segura que WAN", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Topologias de Rede",
    objective: "Entender os diferentes tipos de estruturas de rede e suas aplicações.",
    icon: <Router className="w-6 h-6" />,
    content: [
      "A topologia de rede define como os dispositivos estão conectados entre si.",
      "A escolha da topologia de rede tem grande impacto na eficiência, segurança e confiabilidade da rede. A topologia ideal depende de fatores como o tamanho da rede, o orçamento e os requisitos de desempenho.",
      "",
      "Tipos de Topologia:",
      "• Ponto a Ponto - Conexão direta entre dois dispositivos. Esse modelo é simples e eficiente, sendo ideal para pequenas redes. Um exemplo comum é a conexão entre dois computadores via cabo de rede ou Bluetooth.",
      "• Barramento - Todos compartilham o mesmo meio físico. Todos os dispositivos na rede são conectados a um único cabo ou barramento, e os dados são enviados para todos os dispositivos. Esse tipo de topologia é simples e econômico, mas a falha no cabo pode derrubar toda a rede.",
      "• Estrela - Dispositivos conectados a um hub central. Nessa topologia, todos os dispositivos são conectados a um ponto central (como um switch ou hub). A falha em um dispositivo ou cabo não afeta a rede inteira, tornando-a mais robusta. É uma das topologias mais comuns em redes domésticas e corporativas.",
      "• Anel - Cada dispositivo conecta ao próximo em círculo. Os dados circulam em um único sentido até alcançar o destino. Embora tenha um desempenho bom para redes de médio porte, a falha de um dispositivo ou cabo pode interromper toda a comunicação na rede.",
      "• Malha - Dispositivos interconectados. Cada dispositivo está diretamente conectado a todos os outros dispositivos da rede, proporcionando alta redundância e confiabilidade. Este modelo é ideal para redes críticas que não podem ter falhas, mas pode ser caro e complexo para implementar.",
      "• Árvore - Estrutura em camadas hierárquicas. Combina características da topologia estrela e barramento, com dispositivos agrupados em diferentes níveis hierárquicos. As topologias de árvore são ideais para redes de grande escala, como em campus universitários ou grandes empresas.",
      "• Híbrida - Combinação de duas ou mais topologias. A topologia híbrida é usada quando uma única topologia não atende aos requisitos de rede. Por exemplo, uma rede pode usar uma combinação de topologia estrela e malha para otimizar desempenho e redundância.",
      "",
      "Impactos na Segurança:",
      "• A topologia afeta desempenho e confiabilidade. Redes bem projetadas, como as topologias estrela ou malha, oferecem maior confiabilidade e desempenho.",
      "• Uma topologia mal projetada pode facilitar ataques. Por exemplo, uma topologia de barramento pode ser vulnerável a ataques, pois todos os dispositivos compartilham o mesmo canal de comunicação.",
      "• Topologias redundantes aumentam a resiliência. As topologias malha e árvore oferecem redundância, o que significa que, em caso de falha de um dispositivo ou caminho, outro caminho pode ser utilizado, aumentando a resiliência da rede.",
      "",
      "Considerações Práticas:",
      "• Estrela é a mais comum em redes modernas. A topologia estrela é a escolha preferida para a maioria das redes locais (LANs), devido à sua facilidade de implementação e manutenção.",
      "• Malha oferece maior redundância. Redes malha são ideais para cenários onde a confiabilidade e a alta disponibilidade são cruciais, como em datacenters e redes corporativas críticas.",
      "• Barramento é simples mas vulnerável a falhas. Embora seja fácil de configurar, a topologia de barramento tem a desvantagem de ser suscetível a falhas no cabo principal, o que pode interromper toda a comunicação na rede."
    ],
    questions: [
      {
        text: "Qual topologia é mais resiliente a falhas?",
        choices: [
          { id: "a", text: "Barramento", correct: false },
          { id: "b", text: "Estrela", correct: false },
          { id: "c", text: "Malha", correct: true },
          { id: "d", text: "Anel", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Segmentação e Segurança",
    objective: "Aprender sobre segmentação de rede e estratégias de defesa em profundidade.",
    icon: <Shield className="w-6 h-6" />,
    content: [
      "A segmentação de rede é uma estratégia fundamental de segurança, que divide uma rede em várias partes isoladas para limitar o acesso a recursos críticos e melhorar a segurança.",
        "Ao segmentar uma rede, você pode aplicar diferentes políticas de segurança e controle de tráfego em cada segmento, o que reduz a superfície de ataque e melhora a eficiência na detecção de ameaças.",
        "",
        "Tipos de Segmentação:",
        "• DMZ - Zona desmilitarizada para servidores públicos. A DMZ é uma sub-rede isolada, onde são colocados servidores acessíveis ao público, como servidores web e de e-mail. Isso permite que os servidores externos sejam isolados da rede interna, minimizando riscos.",
        "• Rede de Usuários - Para estações de trabalho. Segmento dedicado aos dispositivos dos usuários, como computadores e laptops. Essa segmentação ajuda a limitar o impacto de ataques, já que o tráfego gerado pelos usuários não tem acesso direto a recursos sensíveis.",
        "• Rede de Administração - Para gerenciamento. Um segmento isolado para administração de dispositivos de rede e servidores críticos. A segmentação de rede de administração permite restringir o acesso aos administradores de sistemas e redes, fornecendo maior segurança.",
        "• Rede de VoIP - Para telefonia. Uma rede separada dedicada exclusivamente para comunicação por voz, como VoIP (Voice over IP). A segmentação de VoIP melhora a qualidade da comunicação e reduz o risco de ataques que afetam a telefonia.",
        "• Rede de IoT - Para dispositivos inteligentes. Segmentação específica para dispositivos da Internet das Coisas (IoT), como câmeras de segurança, termostatos e dispositivos domésticos inteligentes. Isolar esses dispositivos ajuda a proteger a rede principal contra vulnerabilidades típicas em dispositivos IoT.",
        "",
        "Defesa em Profundidade:",
        "1. Segmentação física e lógica. A segmentação pode ser feita fisicamente (utilizando equipamentos separados, como switches e roteadores) ou logicamente (criando VLANs e utilizando firewalls para separar os tráfegos). Ambas as abordagens têm suas vantagens em termos de segurança e flexibilidade.",
        "2. Firewalls entre segmentos. Usar firewalls para controlar o tráfego entre segmentos é crucial para garantir que apenas o tráfego autorizado seja permitido. Isso impede que um ataque em um segmento afete outros segmentos da rede.",
        "3. Monitoramento de tráfego. A segmentação de rede permite um monitoramento mais focado e eficiente. Com tráfego isolado em segmentos distintos, fica mais fácil identificar anomalias e detectar atividades suspeitas.",
        "4. Sistemas de detecção de intrusão. Implementar sistemas de detecção de intrusão (IDS) entre segmentos para monitorar comportamentos anômalos e gerar alertas em tempo real, permitindo uma resposta rápida a incidentes de segurança.",
        "5. Controle de acesso. Implementar políticas de controle de acesso rigorosas entre os segmentos, garantindo que apenas dispositivos autorizados possam acessar áreas específicas da rede, evitando acessos indevidos a recursos críticos.",
        "",
        "Benefícios:",
        "• Isolamento de ameaças. Ao isolar diferentes tipos de tráfego e dispositivos, as ameaças de um segmento não podem facilmente se propagar para outros segmentos da rede, o que limita os danos em caso de comprometimento.",
        "• Melhor desempenho. A segmentação reduz o tráfego desnecessário entre os segmentos e melhora o desempenho da rede, uma vez que o tráfego é mais organizado e segmentado, evitando congestionamentos.",
        "• Controle granular. Com a segmentação, é possível aplicar regras de segurança e controle de tráfego específicas para cada segmento da rede, garantindo uma gestão mais precisa dos recursos e acessos.",
        "• Conformidade regulatória. Muitos regulamentos de segurança exigem segmentação de rede para proteger dados sensíveis e garantir a conformidade com padrões como PCI-DSS, HIPAA, e outros. A segmentação pode ajudar a atender a esses requisitos."
    ],
    questions: [
      {
        text: "O que é uma DMZ?",
        choices: [
          { id: "a", text: "Uma rede sem proteção", correct: false },
          { id: "b", text: "Uma zona para servidores públicos", correct: true },
          { id: "c", text: "Uma rede de administração", correct: false },
          { id: "d", text: "Uma rede de backup", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Ferramentas Essenciais",
    objective: "Conhecer e aprender a usar ferramentas básicas de diagnóstico de rede.",
    icon: <Terminal className="w-6 h-6" />,
    content: [
      "Ferramentas essenciais para diagnóstico e análise de rede:",
      "",
      "ping:",
      "• Verifica conectividade básica entre dispositivos, enviando pacotes ICMP (Internet Control Message Protocol) para o destino e aguardando uma resposta.",
      "• Mede o tempo de resposta, informando o 'round-trip time' (RTT) para enviar e receber o pacote.",
      "• Detecta perda de pacotes, o que pode indicar problemas de rede, como congestionamento ou falhas nos links.",
      "Exemplo: ping 192.168.1.1 - Envia pacotes ICMP para o IP 192.168.1.1 e exibe os tempos de resposta.",
      "",
      "traceroute/tracert:",
      "• Mostra o caminho percorrido pelos pacotes até o destino, exibindo cada roteador intermediário entre a origem e o destino.",
      "• Identifica gargalos, ou seja, pontos da rede onde o tráfego pode estar sendo retardado ou perdido.",
      "• Diagnostica problemas de rota, ajudando a identificar falhas ou ineficiências na rede.",
      "Exemplo: traceroute google.com - Exibe o caminho completo para o domínio google.com, incluindo o tempo gasto em cada salto.",
      "",
      "ipconfig/ip a:",
      "• Mostra a configuração de rede do dispositivo, incluindo informações como o endereço IP atribuído, a máscara de sub-rede e o gateway padrão.",
      "• O comando ip a (em sistemas Linux) fornece detalhes mais completos sobre todas as interfaces de rede, incluindo aquelas desativadas.",
      "• O comando ipconfig (em sistemas Windows) exibe as configurações de rede de todas as interfaces de rede ativas.",
      "Exemplo: ipconfig - Exibe a configuração de rede no Windows, incluindo o endereço IP local e as interfaces de rede.",
      "",
      "netstat:",
      "• Lista as conexões de rede ativas no sistema, incluindo portas abertas, endereços IP e estados das conexões.",
      "• Exibe as portas em uso, permitindo que você veja quais serviços estão sendo executados e aguardando conexões.",
      "• Fornece estatísticas detalhadas sobre protocolos de rede como TCP e UDP, como número de pacotes enviados e recebidos.",
      "Exemplo: netstat -an - Exibe todas as conexões de rede e portas abertas, juntamente com seus respectivos estados e endereços de destino."
    ],
    questions: [
      {
        text: "Qual comando é usado para verificar o caminho até um destino?",
        choices: [
          { id: "a", text: "ping", correct: false },
          { id: "b", text: "traceroute", correct: true },
          { id: "c", text: "ipconfig", correct: false },
          { id: "d", text: "netstat", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Sub-redes (Subnetting)",
    objective: "Compreender o conceito de sub-redes e sua importância para segurança.",
    icon: <Database className="w-6 h-6" />,
    content: [
      "Sub-redes permitem dividir uma rede em segmentos menores e mais gerenciáveis.",
      "",
      "Conceitos Básicos:",
      "• Máscara de Sub-rede - Define o tamanho da rede e quais partes do endereço IP pertencem à rede e ao host.",
      "• CIDR - Notação para representar sub-redes, que substitui a notação tradicional de classes de rede (A, B, C). O CIDR usa o formato /N, onde N é o número de bits usados para a parte da rede.",
      "• Broadcast - Endereço de difusão usado para enviar pacotes para todos os dispositivos em uma rede ou sub-rede específica.",
      "",
      "Exemplos Práticos:",
      "• /24 = 256 endereços (0-255) - A máscara de sub-rede 255.255.255.0 cria uma rede com 256 endereços possíveis, sendo 254 utilizáveis (o primeiro é o endereço de rede e o último é o endereço de broadcast).",
      "• /25 = 128 endereços - A máscara 255.255.255.128 cria uma sub-rede com 128 endereços, dividindo uma /24 ao meio.",
      "• /26 = 64 endereços - A máscara 255.255.255.192 cria uma sub-rede com 64 endereços.",
      "• /27 = 32 endereços - A máscara 255.255.255.224 cria uma sub-rede com 32 endereços, permitindo a criação de mais sub-redes em uma rede maior.",
      "",
      "Benefícios:",
      "• Melhor organização - Permite segmentar redes, facilitando o gerenciamento e a alocação de endereços.",
      "• Isolamento de tráfego - Reduz o tráfego desnecessário entre diferentes partes da rede, melhorando a eficiência.",
      "• Controle de acesso - Facilita a aplicação de políticas de segurança e controle de tráfego entre segmentos.",
      "• Otimização de performance - A segmentação pode melhorar o desempenho geral da rede ao reduzir a quantidade de dispositivos em cada sub-rede.",
      "",
      "Considerações de Segurança:",
      "• Isolar sistemas críticos - Colocar sistemas sensíveis em sub-redes separadas ajuda a proteger dados e serviços importantes.",
      "• Limitar propagação de ameaças - Em caso de ataque, a segmentação ajuda a conter a propagação de ameaças a outras partes da rede.",
      "• Facilitar monitoramento - A segmentação torna o tráfego mais fácil de monitorar, identificando anomalias em sub-redes específicas.",
      "• Implementar controles por segmento - Cada sub-rede pode ter controles de segurança adaptados às suas necessidades específicas, como firewalls ou regras de acesso."
    ],
    questions: [
      {
        text: "Quantos endereços estão disponíveis em uma sub-rede /24?",
        choices: [
          { id: "a", text: "128", correct: false },
          { id: "b", text: "256", correct: true },
          { id: "c", text: "512", correct: false },
          { id: "d", text: "64", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Enumeração de Rede",
    objective: "Aprender técnicas de varredura de portas e enumeração de serviços.",
    icon: <Search className="w-6 h-6" />,
    content: [
      "A enumeração de rede é o processo de descobrir hosts ativos e serviços em execução.",
      "",
      "Varredura com Netcat:",
      "• nc -nvv -z -w 1 192.168.1.1 80-82",
      "• -z: Modo de varredura (scan mode), usado para verificar se as portas estão abertas.",
      "• -w: Timeout (tempo máximo para tentar a conexão). O valor '1' significa 1 segundo.",
      "• -v: Modo verboso (verbose mode), exibe mais informações sobre o processo.",
      "",
      "Tipos de Varredura Nmap:",
      "• -sS: Varredura SYN (furtiva), também conhecida como 'half-open scan'. Ela envia pacotes SYN e aguarda a resposta, sem completar a conexão, o que a torna mais difícil de detectar.",
      "• -sT: Varredura TCP completa (TCP connect scan), onde o Nmap estabelece uma conexão completa com a porta, tornando-a mais fácil de detectar.",
      "• -sU: Varredura UDP, usada para verificar portas UDP abertas.",
      "• -sn: Descoberta de hosts (ping scan), usada para identificar quais dispositivos estão ativos em uma rede, sem escanear as portas.",
      "",
      "Exemplos Práticos:",
      "• nmap -sn 192.168.1.0/24 - Realiza uma varredura de descoberta de hosts em toda a faixa de IPs de uma sub-rede (exemplo: 192.168.1.1 até 192.168.1.255).",
      "• nmap -sS -A 192.168.1.1 - Realiza uma varredura SYN (furtiva) e também faz detecção de versões, sistema operacional e scripts adicionais.",
      "• nmap -p- 192.168.1.1 - Varre todas as portas (de 1 a 65535) para o host 192.168.1.1.",
      "",
      "⚠️ Importante:",
      "• Obtenha autorização antes de escanear - A varredura sem permissão pode ser considerada ilegal e uma violação de privacidade.",
      "• Documente todas as ações - Mantenha um registro das varreduras realizadas para referência e auditoria.",
      "• Respeite políticas de segurança - Sempre siga as diretrizes de segurança e normas organizacionais ao realizar varreduras.",
      "• Use em ambientes controlados - Execute varreduras em redes de teste ou em ambientes controlados para evitar problemas em redes de produção."
    ],
    questions: [
      {
        text: "Qual opção do Nmap realiza uma varredura SYN furtiva?",
        choices: [
          { id: "a", text: "-sT", correct: false },
          { id: "b", text: "-sS", correct: true },
          { id: "c", text: "-sU", correct: false },
          { id: "d", text: "-sn", correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Boas Práticas e Revisão",
    objective: "Consolidar o conhecimento e entender as melhores práticas de segurança em rede.",
    icon: <Lock className="w-6 h-6" />,
    content: [
      "Resumo das melhores práticas de segurança em rede:",
      "",
      "Princípios Fundamentais:",
      "1. Defesa em Profundidade: Aplicar múltiplas camadas de segurança para proteger recursos. Se uma camada falhar, outras ainda estarão em vigor.",
      "2. Princípio do Menor Privilégio: Garantir que cada usuário ou processo tenha apenas os privilégios necessários para realizar sua tarefa.",
      "3. Segmentação de Rede: Dividir a rede em segmentos menores para melhorar o controle e limitar a propagação de ameaças.",
      "4. Monitoramento Contínuo: Monitorar o tráfego de rede e os sistemas em tempo real para detectar comportamentos suspeitos ou anômalos.",
      "",
      "Checklist de Segurança:",
      "• Manter sistemas atualizados: Aplique patches de segurança e atualizações regularmente para corrigir vulnerabilidades.",
      "• Usar senhas fortes: Implemente políticas de senhas fortes, com requisitos de comprimento e complexidade.",
      "• Implementar firewalls: Proteja sua rede com firewalls para controlar o tráfego de entrada e saída.",
      "• Monitorar tráfego: Utilize ferramentas para monitorar o tráfego de rede em busca de padrões suspeitos.",
      "• Documentar configurações: Registre todas as configurações de segurança e mudanças realizadas nos sistemas e redes.",
      "• Realizar backups: Mantenha backups regulares dos dados e configurações para recuperação em caso de incidentes.",
      "• Treinar usuários: Ensine os usuários sobre boas práticas de segurança e como identificar possíveis ameaças, como phishing.",
      "",
      "Ferramentas Essenciais:",
      "• Analisadores de rede: Ferramentas como Wireshark e tcpdump para capturar e analisar pacotes de dados na rede.",
      "• Sistemas de detecção de intrusão (IDS): Ferramentas como Snort ou Suricata para detectar atividades suspeitas em tempo real.",
      "• Gerenciadores de log: Ferramentas como ELK Stack ou Splunk para centralizar e analisar logs de eventos de segurança.",
      "• Software de monitoramento: Ferramentas como Nagios ou Zabbix para monitorar a saúde e o desempenho da rede e dos dispositivos.",
      "",
      "Dicas Práticas:",
      "• Mantenha um inventário atualizado: Acompanhe todos os dispositivos e softwares na rede para garantir que estejam protegidos.",
      "• Realize auditorias regulares: Faça auditorias de segurança para avaliar e corrigir possíveis falhas.",
      "• Tenha um plano de resposta a incidentes: Prepare-se para lidar com incidentes de segurança com um plano claro e bem documentado.",
      "• Implemente controles de acesso: Use autenticação multifatorial e controle rigoroso sobre quem pode acessar quais recursos."
    ],
    questions: [
      {
        text: "Qual é um princípio fundamental de segurança em rede?",
        choices: [
          { id: "a", text: "Acesso irrestrito", correct: false },
          { id: "b", text: "Defesa em Profundidade", correct: true },
          { id: "c", text: "Senha única", correct: false },
          { id: "d", text: "Rede aberta", correct: false }
        ]
      }
    ]
  }
];