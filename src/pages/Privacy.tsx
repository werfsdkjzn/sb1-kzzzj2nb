import React from 'react';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="w-8 h-8 text-emerald-500" />
            <h1 className="text-3xl font-bold">Política de Privacidade</h1>
          </div>

          <div className="prose prose-emerald max-w-none">
            <p className="text-gray-600 mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
              <p>A Hackerin está comprometida em proteger sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Informações Coletadas</h2>
              <p>Coletamos as seguintes informações:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Informações de registro (nome, email)</li>
                <li>Dados de uso do site</li>
                <li>Informações técnicas (IP, navegador)</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Uso de Cookies</h2>
              <p>Utilizamos cookies e tecnologias similares para:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Melhorar a experiência do usuário</li>
                <li>Analisar o uso do site (Google Analytics)</li>
                <li>Entender o comportamento do usuário (Hotjar)</li>
                <li>Manter suas preferências</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Uso das Informações</h2>
              <p>Usamos suas informações para:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Fornecer nossos serviços</li>
                <li>Melhorar nossa plataforma</li>
                <li>Enviar comunicações importantes</li>
                <li>Garantir a segurança</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Proteção de Dados</h2>
              <p>Implementamos medidas de segurança para proteger suas informações, incluindo:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Criptografia de dados</li>
                <li>Firewalls e sistemas de segurança</li>
                <li>Acesso restrito a dados pessoais</li>
                <li>Treinamento de funcionários</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
              <p>Você tem direito a:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Acessar seus dados</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar exclusão de dados</li>
                <li>Retirar consentimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contato</h2>
              <p>Para questões sobre privacidade, contate-nos em:</p>
              <p className="mt-2">Email: midasgamesbob@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}