export class Advogado {

  nome: string;
  email: string;
  oab: string;
  descricao: string;
  telefone: string;

  constructor(nome: string, email: string, oab: string, descricao: string, telefone: string) {
    this.nome = nome;
    this.email = email;
    this.oab = oab;
    this.descricao = descricao;
    this.telefone = telefone;

    this.descricao = 'Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.';
  }
}