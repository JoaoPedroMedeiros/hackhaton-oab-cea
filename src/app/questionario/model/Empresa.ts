export class Empresa {
  cnpj: string;
  razaosocial: string;
  email: string;
  telefone: string;
  cep: string;
  uf: string;
  municipio: string;
  logradouro: string;
  bairro: string;
  numero: string;
  complemento: string;

  constructor(cnpj: string, razaosocial: string) {
    this.cnpj = cnpj;
    this.razaosocial = razaosocial;
  }
}