export class Exporter { 

  readonly marginLeft: number = 10;

  readonly marginTop: number = 20;

  readonly maginTitle: number = this.marginTop + 23;

  readonly spaceLineToTitle: number = 2;

  readonly spaceContentToLine: number = this.spaceLineToTitle + 5;

  readonly marginSection1: number = this.maginTitle + 75;

  readonly marginSection2: number = this.marginSection1 + 20;

  readonly marginSection3: number = this.marginSection2 + 20;
  
  readonly marginSection4: number = this.marginTop;

  readonly pSeparator: number = 8;

  readonly spaceItem: number = 5;

  readonly heightHeader: number = 65;

  private pdf: any;

  constructor(pdf) {
    this.pdf = pdf;
  }

  addTitle(text: string) {
    this.pdf.setFontSize(16);
    this.pdf.setFontType("bold");
    this.pdf.text(this.marginLeft, this.marginTop, text);
    this.pdf.setFontType("normal");
  }

  addSubtitleFirst(text: string) {
    this.pdf.setFontSize(12);
    this.pdf.setFontType("bold");
    this.pdf.text(this.marginLeft, this.marginTop + 20, text);
    this.pdf.setFontType("normal");
  }

  lineTitleFirst() {
    this.pdf.line(this.marginLeft, this.maginTitle, 80, this.maginTitle);
  }

  addSubtitleSecond(text: string) {
    this.pdf.setFontSize(12);
    this.pdf.setFontType("bold");
    this.pdf.text(this.marginLeft + 80, this.marginTop + 20, text);
    this.pdf.setFontType("normal");
  }

  addSubtitleSection1(text: string) {
    this.pdf.setFontSize(12);
    this.pdf.setFontType("bold");
    this.pdf.text(this.marginLeft, this.marginSection1, text);
    
    this.pdf.line(this.marginLeft, this.marginSection1 + this.spaceLineToTitle, 
      180, this.marginSection1 + this.spaceLineToTitle);
    
    this.pdf.setFontType("normal");
  }

  addContentSection1(text: string) {
    this.pdf.setFontSize(10);
    this.pdf.text(this.marginLeft, this.marginSection1 + this.spaceContentToLine, text);
  }

  addSubtitleSection2(text: string) {
    this.pdf.setFontSize(12);
    this.pdf.setFontType("bold");
    this.pdf.text(this.marginLeft, this.marginSection2, text);
    
    this.pdf.line(this.marginLeft, this.marginSection2 + this.spaceLineToTitle, 
      180, this.marginSection2 + this.spaceLineToTitle);
    
    this.pdf.setFontType("normal");
  }

  addContentSection2(text: string) {
    this.pdf.setFontSize(10);
    this.pdf.text(this.marginLeft, this.marginSection2 + this.spaceContentToLine, text);
  }

  addSubtitleSection3(text: string) {
    // this.pdf.addPage();
    this.pdf.setFontSize(12);
    this.pdf.setFontType("bold");
    this.pdf.text(this.marginLeft, this.marginSection3, text);
    
    this.pdf.line(this.marginLeft, this.marginSection3 + this.spaceLineToTitle, 
      180, this.marginSection3 + this.spaceLineToTitle);
    
    this.pdf.setFontType("normal");
  }

  addContentSection3(text: string) {
    this.pdf.setFontSize(10);
    var splitTitle = this.pdf.splitTextToSize(text, 180);
    this.pdf.text(this.marginLeft, this.marginSection3 + this.spaceContentToLine, splitTitle);
  }

  addSubtitleSection4(text: string) {
    this.pdf.addPage();
    this.pdf.setFontSize(12);
    this.pdf.setFontType("bold");
    this.pdf.text(this.marginLeft, this.marginSection4, text);
    
    this.pdf.line(this.marginLeft, this.marginSection4 + this.spaceLineToTitle, 
      180, this.marginSection4 + this.spaceLineToTitle);
    
    this.pdf.setFontType("normal");
  }

  addContentSection4() {
    this.pdf.setFontSize(10);
    var n = 180;
    var s = 5;
    var sum = 0;
    var splitTitle1 = this.pdf.splitTextToSize("O Acesso à Justiça nos Juizados Especiais O Juizado Especial Cível é responsável por processar as ações que envolvem direitos cujo valor econômico não excede 40 salários-mínimos. Na verdade, trata-se de causas mais simples, em que os direitos envolvidos podem ser facilmente demonstrados, tendo, geralmente, um procedimento mais simples e mais rápido.", n);
    var splitTitle2 = this.pdf.splitTextToSize("Dentre as hipóteses de ingressar com uma ação nos JEC’s (Juizados Especiais Cíveis), existe a possibilidade do cidadão entrar com um processo sem a necessidade de estar assistido por um advogado, desde que o valor pretendido com a ação não ultrapasse 20 salários-mínimos. Nestes casos, os juízes encarregados processam os pedidos do cidadão sem as formalidades e linguagem próprias dos advogados, ampliando o acesso à Justiça àqueles que não podem contratar um profissional.", n);
    var splitTitle3 = this.pdf.splitTextToSize("Assim, permite-se que o cidadão possa representar a si mesmo perante a Justiça, defendendo seus direitos de forma simples, objetiva e sem ônus, uma vez que o serviço é gratuito e não há gastos com advogados.", n);
    var splitTitle4 = this.pdf.splitTextToSize("O Acesso à Justiça é garantido pela Constituição Federal a todos os cidadãos e, tendo esta ação valor econômico limitado a 20 salários-mínimos, o cidadão que assina este documento vem defender os seus direitos explicados a seguir.", n);
    var splitTitle5 = this.pdf.splitTextToSize("Considera-se consumidor aquele que utiliza de produto ou serviço como destinatário final. Dentre os direitos básicos do consumidor está a proteção da integridade física, a liberdade de escolha dos produtos ou serviços, o acesso às informações claras e precisas do produto ou serviço escolhido, a ciência dos riscos envolvidos, proteção contra publicidade enganosa e abusos promovidos pelo fornecedor ou prestador do serviço, prevenção e reparação dos danos materiais e morais causador por falha, defeito, ou falta do produto ou serviço, entre outros (art. 6º, do Código de Defesa do Consumidor). Nesta ação, o nome do consumidor foi inscrito de forma indevida junto aos cadastros de proteção ao crédito, que possuem caráter público (art. 43, parágrafo 4º). Antes de mais nada, a inscrição do consumidor em tais cadastros foi feita por cobrança indevida da empresa fornecedora, o que, por si só, faz com que os valores cobrados incorretamente lhe sejam restituídos, em dobro (art. 42, parágrafo único).", n);
    var splitTitle6 = this.pdf.splitTextToSize("A proteção ao consumidor garante, inclusive, que as agressões aos seus direitos sejam consideradas crimes, como o fornecedor causar ameaça ou constrangimento de qualquer natureza ao consumidor (art. 71), como nesse caso em que a inscrição indevida de seu nome nos órgãos de proteção ao crédito causa incômodos e humilhação de caráter público.", n);
    var splitTitle7 = this.pdf.splitTextToSize("Inclusive, impedir o acesso ao consumidor aos registros de devedores e a estes órgãos de proteção ao crédito, também configura crime (art. 72). E, ainda, tendo o fornecedor o conhecimento de que a cobrança é indevida, por já ter sido quitada, ou por cobrança de valores diferentes do contratado, o simples fato de manter o registro do consumidor nestes cadastros de inadimplentes, com todos os efeitos negativos que isso causa, também configura conduta criminosa (art. 73). 3) A responsabilidade do fornecedor pelos danos A reparação por danos causados ao patrimônio ou à honra das pessoas é garantida pela Constituição e pelo Código Civil, por meio de indenização no valor proporcional a estes danos.", n);
    var splitTitle8 = this.pdf.splitTextToSize("Todas as práticas anteriormente apresentadas que estão contra o Código do Consumidor, merecem a devida reparação na forma de indenização pelos danos materiais ou patrimoniais, e ainda, pelos danos morais, causados sobre a honra, imagem, etc.", n);
    var splitTitle9 = this.pdf.splitTextToSize("Os elementos da responsabilidade são: a demonstração do dano, as condutas em desrespeito ao Código do Consumidor, e a relação de causalidade entre os outros dois elementos. Feito o relato do que efetivamente aconteceu, expostas as condutas irregulares praticadas contra o consumidor neste caso, e conforme as provas abaixo, é evidente a necessidade de reparar o consumidor pelos danos sofridos, tanto ao seu patrimônio, quanto contra a sua imagem, diretamente afetada.", n);

    sum = sum + this.marginSection4 + this.spaceContentToLine;
    this.pdf.text(this.marginLeft, sum, splitTitle1);
    sum = sum + s * splitTitle1.length;
    this.pdf.text(this.marginLeft, sum, splitTitle2);
    sum = sum + s * splitTitle2.length;
    this.pdf.text(this.marginLeft, sum, splitTitle3);
    sum = sum + s * splitTitle3.length;
    this.pdf.text(this.marginLeft, sum, splitTitle4);
    sum = sum + s * splitTitle4.length;
    this.pdf.text(this.marginLeft, sum, splitTitle5);
    sum = sum + s * splitTitle5.length;
    this.pdf.text(this.marginLeft, sum, splitTitle6);
    sum = sum + s * splitTitle6.length;
    this.pdf.text(this.marginLeft, sum, splitTitle7);
    sum = sum + s * splitTitle7.length;
    this.pdf.text(this.marginLeft, sum, splitTitle8);
    sum = sum + s * splitTitle8.length;
    this.pdf.text(this.marginLeft, sum, splitTitle9);
  }

  lineTitleSecond() {
    this.pdf.line(this.marginLeft + 80, this.maginTitle, 180, this.maginTitle);
  }

  addHeaderItemKey(n: number, text: string) {
    this.pdf.setFontSize(10);
    this.pdf.text(text, this.marginLeft, this.maginTitle + this.spaceItem * n);
  }

  addHeaderItemValue(n: number, text: string) {
    this.pdf.setFontSize(10);
    this.pdf.text(text, this.marginLeft + 25, this.maginTitle + this.spaceItem * n);
  }

  addHeaderItemKey2(n: number, text: string) {
    this.pdf.setFontSize(10);
    this.pdf.text(text, this.marginLeft + 80, this.maginTitle + this.spaceItem * n);
  }

  addHeaderItemValue2(n: number, text: string) {
    this.pdf.setFontSize(10);
    this.pdf.text(text, this.marginLeft + 80 + 25, this.maginTitle + this.spaceItem * n);
  }

  addImages(images: any, titulos: string[], callback) {
    var count = 0;
    var imgArray = [];
    for (let i = 0; i < images.length; i++) {
      let img = new Image;
      imgArray.push(img);
      img.crossOrigin = "";
      img.src = URL.createObjectURL(images[i]);

      // var img = new Image;
      // img.onload = () => {
      //   let oldWidth = img.width;
      //   let proportion = oldWidth / 720;
      //   img.width = 720;
      //   img.height = img.height / proportion; 

      //   this.pdf.addPage();
      //   this.pdf.addImage(img, 10, 30);
      //   count++;

      //   console.log(count);

      //   if (count === images.length) {
      //     callback();
      //   }
      // }
      // img.crossOrigin = "";
      // img.src = URL.createObjectURL(images[i]);
    }
    
    var intervalo = window.setInterval(() => {
      for (let i = 0; i < imgArray.length; i++) {
        let oldWidth = imgArray[i].width;
        let proportion = oldWidth / 720;
        imgArray[i].width = 720;
        imgArray[i].height = imgArray[i].height / proportion; 

        this.pdf.addPage();
        this.pdf.setFontSize(12);
        this.pdf.setFontType("bold");
        this.pdf.text(titulos[i], 10, 20);
        this.pdf.setFontType("normal");
        this.pdf.addImage(imgArray[i], 10, 30);
      }
      window.clearInterval(intervalo);
      callback();
    }, 2000);
    
    // var count = 0;
    // for (let i = 0; i < images.length; i++) {
    //   var img = new Image;
    //   img.onload = () => {
    //     let oldWidth = img.width;
    //     let proportion = oldWidth / 720;
    //     img.width = 720;
    //     img.height = img.height / proportion; 

    //     this.pdf.addPage();
    //     this.pdf.addImage(img, 10, 30);
    //     count++;

    //     console.log(count);

    //     if (count === images.length) {
    //       callback();
    //     }
    //   }
    //   img.crossOrigin = "";
    //   img.src = URL.createObjectURL(images[i]);
    // }
  }

  save() {
    this.pdf.save('Requerimento.pdf');
  }
}