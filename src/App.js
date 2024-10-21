import React from 'react';
import './App.css';
import './components/Avaliacoes.css'
import logo from './assets/logo.png';
import avatar1 from './assets/image0_0 (1).jpg'
import avatar2 from './assets//image0_0 (2).jpg'
import avatar3 from './assets/image0_0 (3).jpg'
import avatar4 from './assets/image0_0.jpg'
import avatar5 from './assets/perfil1.jpg'
import avatar6 from './assets/perfil2.jpg'
import Avalizacoes from './components/Avaliacoes';
import Planos from './components/Planos';
import Creditos from './components/Creditos';
import Mapa from './components/Mapa';


function App() {
  return (
    <div className='App'>
      <div className='PartePrincipal'>
        <header id='topo'>
          <img src={logo} alt='Logo'/>
            <nav>
              <a href="#local" className='btn_localizacoes'>Localizações</a>
              <a href="#entrar" className='btn_entrar'>Entrar</a>
            </nav>
        </header>
        <section>
          <h1>Coworking+</h1>
          <p>"O espaço ideal para realizar seus sonhos."</p>
          <br></br>
          <a href='#agendar' className='btn_agendar'>Agendar</a>
          <br></br>
          <div className='socialmedia'>
            <a href="#facebook"><i className="fab fa-facebook"></i></a>
            <a href="#instagrem"><i className="fab fa-instagram"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </section>
      </div>
      <section className='section_parte2'>
        <h2>Planos e Preços</h2> <br/><br/>
        <div className='Planos'>
          <Planos NomePlano='Plano Standard' Preco='R$ 199,00/mês'><i class="fa-solid fa-check"></i> Acesso 24/7 aos espaços parceiros e próprios.<br/><br/>
          <i class="fa-solid fa-check"></i> Internet de alta velocidade.<br/><br/>
          <i class="fa-solid fa-check"></i> Opção de escolher entre espaços próprios ou de terceiros.<br/><br/>
          <i class="fa-solid fa-check"></i> Café e chá gratuitos em espaços próprios. <br/><br/>
          <i class="fa-solid fa-check"></i> Suporte básico via chat ou e-mail.<br/><br/>
          <i class="fa-solid fa-check"></i> Uma hora de sala de reunião em espaços próprios por mês.</Planos>
          <Planos NomePlano='Plano Master' Preco='R$ 399,00/mês'><strong><i class="fa-solid fa-check"></i> Todos os benefícios do plano Standard.</strong><br/><br/>
          <i class="fa-solid fa-check"></i> Cinco horas de sala de reunião em espaços próprios por mês.<br/><br/>
          <i class="fa-solid fa-check"></i> Desconto de 10% em reservas de espaços de terceiros.<br/><br/>
          <i class="fa-solid fa-check"></i> Locker pessoal para armazenamento em espaços próprios.<br/><br/>
          <i class="fa-solid fa-check"></i> Prioridade na escolha de locais com alta demanda.<br/><br/>
          <i class="fa-solid fa-check"></i> Acesso a áreas exclusivas de relaxamento e lounge VIP em espaços próprios.<br/><br/>
          <i class="fa-solid fa-check"></i> Recepção de correspondências e pacotes em locais próprios.</Planos>
          <Planos NomePlano='Plano Ultimate' Preco='R$ 799,00/mês'><strong><i class="fa-solid fa-check"></i> Todos os benefícios do plano Master.</strong><br/><br/>
          <i class="fa-solid fa-check"></i> Escritórios dedicados e completamente personalizáveis, com branding da empresa.<br/><br/>
          <i class="fa-solid fa-check"></i> Dez horas de sala de reunião em qualquer local, próprio ou de terceiros, por mês.<br/><br/>
          <i class="fa-solid fa-check"></i> Endereço comercial premium em espaços próprios.<br/><br/>
          <i class="fa-solid fa-check"></i> Acesso gratuito a eventos e workshops em locais próprios.<br/><br/>
          <i class="fa-solid fa-check"></i> Suporte técnico dedicado com resposta prioritária.<br/><br/>
          <i class="fa-solid fa-check"></i> Desconto de 20% em reservas de salas de conferência em qualquer local.<br/><br/>
          <i class="fa-solid fa-check"></i> Estacionamento gratuito em espaços próprios.<br/><br/>
          <i class="fa-solid fa-check"></i> Serviço de catering para reuniões (mediante solicitação) em espaços próprios.<br/><br/></Planos>
        </div>
      </section>
      <section className='section_parte3'>
        <h2>Avaliações</h2>
        <div className='avaliacoes'>
          <Avalizacoes avatar={avatar1} nome='Lucas Almeida'>"O coworking superou minhas expectativas. O ambiente é limpo, moderno e muito confortável, com várias opções de estações de trabalho. Além disso, há uma ótima oportunidade de networking com outros profissionais. Um ótimo investimento para aumentar a produtividade."</Avalizacoes>
          <Avalizacoes avatar={avatar4} nome='Aline Ferreira'>"O coworking é bom, mas poderia ser melhor. A estrutura é adequada, e o espaço é confortável, mas o ambiente às vezes é um pouco movimentado demais para quem precisa de concentração. No geral, é uma opção válida para quem busca uma alternativa ao home office."</Avalizacoes>
          <Avalizacoes avatar={avatar2} nome='Felipe Silva'>"Excelente ambiente para trabalhar! O espaço de coworking é bem organizado, com boa infraestrutura e muitas opções de locais para se acomodar. A internet é rápida e estável, e a atmosfera é inspiradora. Recomendo para quem precisa de um lugar produtivo fora de casa."</Avalizacoes>
          <Avalizacoes avatar={avatar3} nome='Mariana Costa'>"Achei o espaço de coworking satisfatório. Ele oferece as necessidades básicas, como internet e áreas de trabalho variadas, mas não se destaca em termos de comodidades ou serviços extras. É uma escolha ok para quem não precisa de muitos recursos adicionais."</Avalizacoes>
          <Avalizacoes avatar={avatar5} nome='Lucas Oliveira'>"Gostei bastante do site de coworking! A navegação é intuitiva, e o design é moderno e agradável. As informações sobre os espaços e serviços estão bem organizadas, e é fácil encontrar detalhes importantes, como preços e disponibilidade. Além disso, a seção de reservas é prática e funciona muito bem."</Avalizacoes>
          <Avalizacoes avatar={avatar6} nome='Sofia Almeida'>"O site de coworking é funcional e fornece todas as informações necessárias sobre os serviços oferecidos. No geral, o site é bom, mas com algumas melhorias de desempenho e usabilidade, poderia ser excelente."</Avalizacoes>
        </div>
      </section>
      <section className='mapa' id='local'>
        <h3><i class="fa-solid fa-map"></i> São Paulo</h3>
        <p>Rua Frederico Grotte, 156 - Jardim Sao Luiz <i class="fa-regular fa-copy"></i></p>
        <h3><i class="fa-solid fa-map"></i> Barueri</h3>
        <p>Av. Henriqueta Mendes Guerra, 100 - Vila Sao Joao <i class="fa-regular fa-copy"></i></p>
        <br />
        <Mapa />
        <br />
        <div className='topo'>
          <a href='#topo'>Topo da pagina <i class="fa-solid fa-up-long"></i></a>
        </div>
      </section>
      <section className='creditos'>
        <Creditos NomeEmp='Coworking+'></Creditos>
      </section>
    </div>
  );
}

export default App;
