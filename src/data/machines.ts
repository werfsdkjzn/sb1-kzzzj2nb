import { VirtualMachine } from '../types/vm';

export const machines: VirtualMachine[] = [
  {
    id: 'ubuntu-basic',
    nome: 'Ubuntu Básico',
    dificuldade: 'Iniciante',
    nivelNumerico: 2,
    descricao: 'Máquina virtual Ubuntu com vulnerabilidades básicas para iniciantes aprenderem conceitos fundamentais de segurança.',
    sistemaOperacional: 'Ubuntu 22.04 LTS',
    tags: ['linux', 'iniciante', 'ubuntu', 'básico'],
    pontos: 10
  },
  {
    id: 'windows-server',
    nome: 'Windows Server Desafio',
    dificuldade: 'Intermediário',
    nivelNumerico: 5,
    descricao: 'Servidor Windows com múltiplas vulnerabilidades de privilégios e configurações incorretas de serviços.',
    sistemaOperacional: 'Windows Server 2019',
    tags: ['windows', 'servidor', 'privilégios'],
    pontos: 25
  },
  {
    id: 'kali-master',
    nome: 'Kali Master Challenge',
    dificuldade: 'Especialista',
    nivelNumerico: 9,
    descricao: 'Ambiente complexo com múltiplas camadas de segurança e desafios avançados de penetração.',
    sistemaOperacional: 'Kali Linux',
    tags: ['kali', 'avançado', 'pentest'],
    pontos: 50
  },
  {
    id: 'debian-web',
    nome: 'Debian Web Server',
    dificuldade: 'Intermediário',
    nivelNumerico: 6,
    descricao: 'Servidor web Debian com vulnerabilidades em aplicações web e configurações de servidor Apache.',
    sistemaOperacional: 'Debian 11',
    tags: ['debian', 'web', 'apache'],
    pontos: 30
  },
  {
    id: 'centos-network',
    nome: 'CentOS Network Challenge',
    dificuldade: 'Avançado',
    nivelNumerico: 7,
    descricao: 'Ambiente de rede CentOS com múltiplos serviços e vulnerabilidades de rede para explorar.',
    sistemaOperacional: 'CentOS 8',
    tags: ['centos', 'rede', 'serviços'],
    pontos: 35
  }
];