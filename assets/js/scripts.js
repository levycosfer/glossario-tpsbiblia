function mostrarTexto(opcao) {
    const conteudo = document.getElementById('conteudo');
    
    // Lista de páginas HTML válidas para carregar
    const arquivos = {
      pesquisa: './pesquisa-sinais.html',
      maos: './maos.html',
      rosto: './rosto.html',
      contato: null,
      sobre: null
    };
  
    // Esconde o conteúdo atual e limpa o que está sendo exibido
    conteudo.innerHTML = ''; 
  
    // Verifica se é uma página externa ou texto interno
    if (arquivos[opcao]) {
      fetch(arquivos[opcao])
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao buscar o arquivo.');
          }
          return response.text();
        })
        .then(data => {
          conteudo.innerHTML = data;
        })
        .catch(error => {
          console.error('Erro ao carregar o conteúdo:', error);
          conteudo.innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
        });
    } else if (opcao === 'contato') {
      conteudo.innerHTML = `
        <h2>Contato</h2>
        <p>Entre em contato conosco pelo telefone ou email...</p>
      `;
    } else if (opcao === 'sobre') {
      conteudo.innerHTML = `
        <h2>Sobre</h2>
        <p>O Projeto de Tradução com Protagonismo Surdo busca valorizar a Libras como língua de sinais e promover a tradução da Bíblia em Libras com protagonismo da comunidade surda.</p>
      `;
    } else {
      conteudo.innerHTML = '<p>Opção inválida.</p>';
    }
  }
  