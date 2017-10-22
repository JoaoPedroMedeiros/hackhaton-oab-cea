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

  public empresa: Empresa;

  constructor() {
    this.dadosCliente = new DadosCliente();
    this.empresa = new Empresa();
  }
}