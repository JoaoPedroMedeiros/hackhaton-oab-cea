export class DadosCliente {

  nome: string;
  cpf: string;
  rg: string;
  cep: string;
  uf: string;
  cidade: string;
  endereco: string;
  bairro: string;
  numero: string;
  complemento: string;
  email: string;

  preenchido() : boolean {
    return this.nome != null && this.nome != ''
      && this.cpf != null && this.cpf != ''
      && this.rg  != null && this.rg != ''
      && this.cep  != null && this.cep != ''
      && this.uf  != null && this.uf != ''
      && this.cidade  != null && this.cidade != ''
      && this.endereco  != null && this.endereco != ''
      && this.bairro  != null && this.bairro != ''
      && this.numero  != null && this.numero != ''
      && this.complemento  != null && this.complemento != ''
      && this.email  != null && this.email != '';
  }
}