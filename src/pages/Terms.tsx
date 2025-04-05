import React from 'react';
import { FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-8">
            <FileText className="w-8 h-8 text-emerald-500" />
            <h1 className="text-3xl font-bold">Termos de Serviço</h1>
          </div>

          <div className="prose prose-emerald max-w-none">
            <p className="text-gray-600 mb-6">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
              <p>Ao acessar e usar a plataforma Hackerin, você concorda com estes termos de serviço. Se você não concordar com algum aspecto destes termos, não use nossos serviços.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Descrição do Serviço</h2>
              <p>A Hackerin fornece:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Cursos de cibersegurança</li>
                <li>Ambientes de laboratório virtual</li>
                <li>Materiais educacionais</li>
                <li>Ferramentas de aprendizado</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Contas de Usuário</h2>
              <p>Ao criar uma conta, você concorda em:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Fornecer informações precisas</li>
                <li>Manter suas credenciais seguras</li>
                <li>Não compartilhar sua conta</li>
                <li>Ser responsável por todas as atividades</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Uso Aceitável</h2>
              <p>Você concorda em não:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Violar leis ou regulamentos</li>
                <li>Interferir com a segurança do site</li>
                <li>Distribuir conteúdo malicioso</li>
                <li>Usar os laboratórios para atividades maliciosas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Propriedade Intelectual</h2>
              <p>Todo o conteúdo da plataforma é protegido por direitos autorais. Você não pode:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Copiar ou distribuir o conteúdo</li>
                <li>Modificar os materiais</li>
                <li>Usar para fins comerciais</li>
                <li>Remover avisos de direitos autorais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Limitação de Responsabilidade</h2>
              <p>A Hackerin não se responsabiliza por:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Uso indevido da plataforma</li>
                <li>Perda de dados</li>
                <li>Interrupções do serviço</li>
                <li>Danos indiretos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contato</h2>
              <p>Para questões sobre os termos de serviço, contate-nos em:</p>
              <p className="mt-2">Email: midasgamesbob@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}