import { DadosCliente } from "./DadosCliente";
import { CorpoPeticao } from "./CorpoPeticao";
import { Empresa } from "./Empresa";
import { ValorParcial } from "./ValorParcial";

export class Respostas {

  /**
   * 1 - Cobraram o que já foi pago
   * 2 - Cobraram uma taxa que não contratei
   * 3 - Cobraram por um serviço que nunca requisitei/utilizei
   * 4 - Cobraram um valor maior do que eu contratei
   */
  public problema: number;

  /**
   * Dados do cliente, nome, CPF, bla, bla, bla
   */
  public dadosCliente: DadosCliente;

  /**
   * Seleção de valor para dar caminho à ação
   */
  public valorParcial: ValorParcial;

  /**
   * Corpo da petição, data / história
   */
  public corpoPeticao: CorpoPeticao;

  /**
   * Valor exato da cobrança.
   */
  public valor: number;

  /**
   * Provas anexadas
   */
  public provas: any[] = [];

  public empresa: Empresa;

  constructor() {
    this.dadosCliente = new DadosCliente();
    this.empresa = new Empresa(null, null);
    this.valorParcial = new ValorParcial();
    this.corpoPeticao = new CorpoPeticao();
  }

  problemaString(): string {
    if (this.problema == 1 || this.problema == null)
      return 'Cobraram o que já foi pago';
    else if (this.problema == 2)
      return 'Cobraram uma taxa que não contratei';
    else if (this.problema == 3)
      return 'Cobraram por um serviço que nunca requisitei/utilizei';
    else if (this.problema == 4)
      return 'Cobraram um valor maior do que eu contratei';
    return null;
  }
}