<template>
  <article class="product-info">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>
            Basic<br>
            <span class="small">O ESSENCIAL PARA A GESTÃO DE UM CLUBE</span>
          </th>
          <th>
            PRO<br>
            <span class="small">FUNCIONALIDADES PODEROSAS PARA A GESTÃO DO CLUBE</span>
          </th>
          <th>
            PREMIUM<br>
            <span class="small">FUNCIONALIDADES PREMIUM PARA A GESTÃO DO CLUBE</span>
          </th>
          <th>
            PAGAMENTO ÚNICO
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Backoffice</td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>Administrativo</td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>Jogador</td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>Scouting</td>
          <td class="partial">
            <i class="fas fa-check"></i>
          </td>
          <td class="partial">
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>Área Técnica</td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>Académico e Psicológico</td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>Médico</td>
          <td class="partial">
            <i class="fas fa-check"></i>
          </td>
          <td class="partial">
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>Instalações</td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>Equipmentos</td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>Juridico</td>
          <td class="deny">
            <i class="fas fa-times"></i>
          </td>
          <td class="partial">
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>Agentes</td>
          <td class="deny">
            <i class="fas fa-times"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>Integrações com Terceiros</td>
          <td class="deny">
            <i class="fas fa-times"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
        <tr>
          <td>Aplicações Móveis</td>
          <td class="deny">
            <i class="fas fa-times"></i>
          </td>
          <td class="partial">
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
          <td>
            <i class="fas fa-check"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

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
    border-right: 2px solid $white;
    font-size: 16px;
    height: 80px;
    padding: 15px;
  }

  thead th:not(:first-child) { 
    background-color: $black;
    width: 20%;
  }

  thead th:last-child { 
    background-color: #449845;
    text-align: center;
  }

  thead th .small {
    font-size: 12px;
    font-weight: $font-weight-normal;
  }

  thead tr { 
    color: $white;
    font-size: 16px;
    height: 60px;
  }
  
  tbody tr {
    background-color: $white;
    height: 48px;

    &:nth-child(2n) {
      background-color: rgb(248, 248, 248);
    }

    & i {
      color: #449845;
    }

    & .partial {

      & i {
        color: #f9c907;
      }
    }

    & .deny {

      & i {
        color: $red;
      }
    }
  }
  
  td,
  th { 
  text-align: left;
    
    &.l { 
      text-align: right; 
    }

		&.c { 
      text-align: center 
    }

		&.r { 
      text-align: center 
    }
  }
  
  tbody tr td:not(:first-child) { 
    text-align: center;
  }
}
</style>