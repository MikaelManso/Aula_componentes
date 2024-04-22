class Card {
    constructor(titulo, conteudo) {
      this.titulo = titulo;
      this.conteudo = conteudo;
  
      this.element = document.createElement('div');
      this.element.classList.add('card');
  
      this.render();
    }
  
    render() {
      this.element.innerHTML = `
        <h2>${this.titulo}</h2>
        <p>${this.conteudo}</p>
      `;
    }
  }
  
  const meuCard = new Card('Novo ET', '');
  document.body.appendChild(meuCard.element);