import { DadosCliente } from "./DadosCliente";
import { CorpoPeticao } from "./CorpoPeticao";
import { Empresa } from "./Empresa";

export class Respostas {

  public valor: number;
  public empresa: Empresa;
  public dadosCliente: DadosCliente;
  public corpoPeticao: CorpoPeticao;
  
  /**
   * 1 - Cobraram o que já foi pago
   * 2 - Cobraram serviço não contratado
   * 3 - Nunca usei o servico
   */
  public problema: number;
}