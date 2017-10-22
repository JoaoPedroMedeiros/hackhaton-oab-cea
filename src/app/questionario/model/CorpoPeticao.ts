export class CorpoPeticao {

  comoConheceu: string;
  qualServico: string;
  comoDescobriuNegativ: string;
  negativImpediuNegocio: string;

  preenchido() {
    return this.comoConheceu != null && this.comoConheceu != ''
      && this.qualServico != null && this.qualServico != ''
      && this.comoDescobriuNegativ != null && this.comoDescobriuNegativ != ''
      && this.negativImpediuNegocio != null && this.negativImpediuNegocio != '';
  }
}