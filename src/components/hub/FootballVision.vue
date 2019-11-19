<template>
  <article class="product-info">
    <!-- <Slideshow /> -->
    <img src="@/assets/images/footballISM-product.png" alt="">
    <p>
      O FootballISM gere ao pormenor a evolução desportiva, escolar, social e pessoal do principal ativo do Futebol: os jogadores. 
      É a única plataforma tecnológica do mercado capaz de analisar de forma detalhada e transversal: o “scouting”, o recrutamento, 
      a avaliação de treino e a competição, a gestão de instalações e equipamentos e a componente médica, nutricional e jurídica 
      num ambiente totalmente integrado. Desenvolvido para futebol de formação e profissional.
    </p>
    <p>
      É importante estar informado de todas as situações o mais breve possível, permitindo que sejam tomadas as ações apropriadas 
      imediatamente. Esta plataforma agiliza o processo usando alertas e notificações automáticos.
    </p>
    <p>
      A Plataforma foi desenhada utilizando os melhores padrões de usabilidade, permitindo um uso simples e um acesso interligado 
      às informações mais detalhadas sobre os jogadores nas diversas fases de sua carreira. Contém os mais altos padrões de 
      segurança, pois é gerida informação valiosa.
    </p>
    <!-- <table>
      <thead>
        <tr>
          <th>
            <span class="title">
              <i class="fas fa-eye"></i>
              VISION
            </span>
          </th>
          <th colspan="3">
            <p class="small">Purpose for making the product?</p>
            <p class="small">Which positive change should it bring about?</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span class="title">
              <i class="fas fa-users fa-2x"></i>
              TARGET GROUP
            </span>
          </td>
          <td>
            <span class="title">
              <i class="fas fa-heart fa-2x"></i>
              NEEDS
            </span>
          </td>
          <td>
            <span class="title">
              <i class="fas fa-box-open fa-2x"></i>
              PRODUCT
            </span>
          </td>
          <td>
            <span class="title">
              <i class="fas fa-crosshairs fa-2x"></i>
              BUSINESS GOALS
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              Which market or market segment does the product address?
            </p>
            <p>
              Who are the target customers and users?
            </p>
          </td>
          <td>
            <p>
              What Problem does the product solve?
            </p>
            <p>
              What benefits does it provide?
            </p>
          </td>
          <td>
            <p>
              What product is it?
            </p>
            <p>
              What makes it stand out?
            </p>
            <p>
              Is it feasible to develop the product?
            </p>
          </td>
          <td>
            <p>
              How is the product going to benefit the company?
            </p>
            <p>
              What are the business goals?
            </p>
          </td>
        </tr>
      </tbody>
    </table> -->
  </article>
</template>

<script>
import Slideshow from "@/components/base/Slideshow";

export default {
  components: {
    Slideshow
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

table { 
  border-spacing: 1; 
  border-collapse: collapse; 
  background: white;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;
  
  * { 
    position: relative;
  }
  
  td,
  th { 
    padding-left: 8px;
  }

  thead th {
    background-color: #449845;
    color: $white;
    font-size: 16px;
    height: 80px;
    padding: 15px;
    width: 200px;

    & .title {
      align-items: center;
      display: inline-flex;
    }

    & .small {
      font-size: 12px;
      font-weight: $font-weight-normal;
      margin: 0;
    }

    & tr { 
      color: $white;
      font-size: 16px;
      height: 60px;
    }

    & i {
      font-size: 3rem;
      margin-right: 20px;
    }
  }
  
  tbody tr {
    background-color: $white;
    
    & td {
      padding: 30px 15px 15px;
      vertical-align: top;
      width: 25%;
    }

    & .title {
      align-items: center;
      display: inline-flex;
    }

    & i {
      color: #449845;
      margin-right: 20px;
    }
  }
}
</style>