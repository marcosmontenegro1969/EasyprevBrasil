import AposentadoriaIdadeUrbana from '../img/AposentadoriaIdadeUrbana.jpg';
import AposentadoriaIdadeRural from '../img/AposentadoriaIdadeRural.jpg';
import AposentadoriaIdadeDeficiencia from '../img/AposentadoriaIdadeDeficiencia.jpg';
import AposentadoriaTempoContribuicaoDeficiencia from '../img/AposentadoriaTempoContribuicaoDeficiencia.jpg';
import AposentadoriaTempoContribuicao from '../img/AposentadoriaTempoContribuicao.jpg';
import AposentadoriaInvalidez from '../img/AposentadoriaInvalidez.jpg';
import AposentadoriaAutonomo from '../img/AposentadoriaAutonomo.jpg';
import AposentadoriaEspecial from '../img/AposentadoriaEspecial.jpg';
import AposentadoriaServidorPublico from '../img/AposentadoriaServidorPublico.jpg';
import AuxilioAcidente from '../img/AuxilioAcidente.jpg';
import AuxilioDoenca from '../img/AuxilioDoenca.jpg';
import AuxilioReclusao from '../img/AuxilioReclusao.jpg';
import SalarioMaternidade from '../img/SalarioMaternidade.jpg';
import SalarioFamilia from '../img/SalarioFamilia.jpg';
import PensaoMorte from '../img/PensaoMorte.jpg';
import AmparoIdosoDeficiente from '../img/AmparoIdosoDeficiente.jpg';

const pagesData = [
  {
    id: 1,
    title: "APOSENTADORIA POR IDADE URBANA",
    mainParagraph: "A aposentadoria por idade urbana é um benefício destinado aos trabalhadores urbanos que atingiram a idade mínima e possuem o tempo de contribuição necessário.",
    secondaryParagraph: [
      "Para homens, é necessário ter 65 anos de idade e pelo menos 15 anos de contribuição. Para mulheres, a idade mínima é de 60 anos, com o mesmo tempo de contribuição. Este benefício visa garantir segurança financeira ao trabalhador urbano na sua fase de aposentadoria, assegurando uma renda mensal. Além disso, trabalhadores que contribuíram como autônomos, empresários e segurados especiais também podem ter direito, desde que atendam aos requisitos de idade e tempo de contribuição.",
      "Para solicitar o benefício, é necessário reunir a documentação necessária e agendar o atendimento no INSS, que pode ser feito online ou presencialmente."
    ],
    image: AposentadoriaIdadeUrbana,
  },
  {
    id: 2,
    title: "APOSENTADORIA POR IDADE RURAL",
    mainParagraph: "A aposentadoria por idade rural é destinada aos trabalhadores rurais que atingem a idade mínima de 60 anos para homens e 55 anos para mulheres. Este benefício visa garantir a proteção social e financeira dos trabalhadores do campo.",
    secondaryParagraph: [
      "Para ter direito ao benefício, é necessário comprovar o exercício da atividade rural por no mínimo 15 anos, mesmo que de forma descontínua. A comprovação pode ser feita através de documentos como contratos de arrendamento, declarações de sindicatos e notas fiscais de venda da produção. A solicitação da aposentadoria por idade rural pode ser feita pelo site ou aplicativo Meu INSS, ou diretamente em uma agência do INSS.",
      "Além dos documentos de comprovação de atividade rural, também são exigidos documentos pessoais, como RG, CPF e certidão de nascimento ou casamento."
    ],
    image: AposentadoriaIdadeRural,
  },
  {
    id: 3,
    title: "APOSENTADORIA POR IDADE PARA PESSOA COM DEFICIÊNCIA",
    mainParagraph: "A aposentadoria por idade para pessoa com deficiência é destinada aos segurados que possuem algum tipo de deficiência e atingem a idade mínima de 60 anos para homens e 55 anos para mulheres.",
    secondaryParagraph: [
      "Para ter direito ao benefício, é necessário comprovar 15 anos de contribuição e a condição de deficiência durante o período de contribuição. A deficiência pode ser física, mental, intelectual ou sensorial. A solicitação da aposentadoria pode ser feita pelo site ou aplicativo Meu INSS, ou diretamente em uma agência do INSS.",
      "Além dos documentos de comprovação de deficiência, também são exigidos documentos pessoais, como RG, CPF e certidão de nascimento ou casamento."
    ],
    image: AposentadoriaIdadeDeficiencia,
  },
  {
    id: 4,
    title: "APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO PARA PESSOA COM DEFICIÊNCIA",
    mainParagraph: "A aposentadoria por tempo de contribuição para pessoa com deficiência é destinada a segurados do INSS que possuem deficiência física, mental, intelectual ou sensorial. Este benefício é concedido de acordo com o grau de deficiência: leve, moderada ou grave.",
    secondaryParagraph: [
      "O tempo de contribuição necessário varia conforme o grau de deficiência. Para deficiência grave, são necessários 25 anos de contribuição para homens e 20 anos para mulheres. Para deficiência moderada, 29 anos para homens e 24 anos para mulheres. Para deficiência leve, 33 anos para homens e 28 anos para mulheres.",
      "A comprovação da deficiência e do tempo de contribuição é realizada por meio de avaliação médica e funcional, realizada por profissionais do INSS. É importante ressaltar que o segurado precisa ter contribuído para o INSS enquanto estava na condição de pessoa com deficiência para ter direito ao benefício."
    ],
    image: AposentadoriaTempoContribuicaoDeficiencia,
  },
  {
    id: 5,
    title: "APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO - PESSOA SEM DEFICIÊNCIA",
    mainParagraph: "A aposentadoria por tempo de contribuição é um benefício destinado aos segurados que completam o tempo mínimo de contribuição ao INSS, independentemente da idade. Exige-se 35 anos de contribuição para homens e 30 anos para mulheres.",
    secondaryParagraph: [
      "A reforma da Previdência trouxe mudanças significativas, mas quem já possuía direito adquirido antes da reforma pode se aposentar pelas regras antigas. É possível também se beneficiar das regras de transição, que facilitam a adaptação às novas normas.",
      "Para solicitar a aposentadoria, é necessário reunir toda a documentação que comprova os períodos de contribuição e agendar o atendimento pelo site ou aplicativo Meu INSS, ou diretamente em uma agência do INSS."
    ],
    image: AposentadoriaTempoContribuicao,
  },
  {
    id: 6,
    title: "APOSENTADORIA POR INVALIDEZ",
    mainParagraph: "A aposentadoria por invalidez é concedida aos segurados do INSS que, devido a uma doença ou acidente, ficam permanentemente incapazes de trabalhar e de serem reabilitados em outra profissão.",
    secondaryParagraph: [
      "Para ter direito ao benefício, é necessário passar por uma avaliação médica do INSS que comprove a incapacidade total e permanente para o trabalho. A carência para esse benefício é de 12 contribuições mensais, exceto em casos de acidentes de qualquer natureza ou doenças graves especificadas em lei. O valor da aposentadoria por invalidez é calculado com base na média salarial do segurado, podendo sofrer acréscimos no caso de necessidade de assistência permanente de outra pessoa.",
      "É importante que o segurado mantenha suas contribuições em dia e esteja atento às revisões periódicas realizadas pelo INSS para confirmação da continuidade da incapacidade."
    ],
    image: AposentadoriaInvalidez,
  },
  {
    id: 7,
    title: "APOSENTADORIA DE AUTÔNOMO",
    mainParagraph: "A aposentadoria de autônomo é destinada aos profissionais que trabalham por conta própria e contribuem para o INSS. O benefício pode ser concedido por idade ou por tempo de contribuição, conforme o histórico contributivo do trabalhador.",
    secondaryParagraph: [
      "Para a aposentadoria por idade, o autônomo deve ter pelo menos 180 contribuições mensais, sendo a idade mínima de 65 anos para homens e 60 anos para mulheres. Já para a aposentadoria por tempo de contribuição, são necessários 35 anos de contribuição para homens e 30 anos para mulheres.",
      "É essencial que os autônomos mantenham suas contribuições em dia para garantir o direito ao benefício e evitar transtornos na hora da aposentadoria. Além disso, é possível complementar a aposentadoria com planos de previdência privada."
    ],
    image: AposentadoriaAutonomo,
  },
  {
    id: 8,
    title: "APOSENTADORIA ESPECIAL",
    mainParagraph: "A aposentadoria especial é destinada aos trabalhadores que exerceram atividades sob condições prejudiciais à saúde ou à integridade física, permitindo a concessão com menos tempo de contribuição.",
    secondaryParagraph: [
      "Para ter direito à aposentadoria especial, o trabalhador deve comprovar 15, 20 ou 25 anos de exposição a agentes nocivos, de acordo com a atividade exercida. A comprovação é feita por meio de documentos como o Perfil Profissiográfico Previdenciário (PPP) e o Laudo Técnico de Condições Ambientais do Trabalho (LTCAT). É importante manter todos os registros e laudos atualizados para facilitar a comprovação junto ao INSS.",
      "A aposentadoria especial proporciona uma compensação justa aos trabalhadores que dedicaram anos de suas vidas a atividades de risco, garantindo um descanso merecido."
    ],
    image: AposentadoriaEspecial,
  },
  {
    id: 9,
    title: "APOSENTADORIA DE SERVIDOR PÚBLICO",
    mainParagraph: "A aposentadoria de servidor público é regida por normas específicas, diferentes do regime geral de previdência social. Servidores públicos têm direito à aposentadoria após cumprirem determinados requisitos de idade e tempo de contribuição, que podem variar conforme a data de ingresso no serviço público.",
    secondaryParagraph: [
      "Os critérios para aposentadoria dos servidores públicos foram alterados pela Reforma da Previdência, que estabeleceu novas regras de transição para aqueles que estavam próximos de se aposentar. É fundamental que os servidores estejam atentos às mudanças para garantir seus direitos.",
      "A aposentadoria pode ser integral ou proporcional, dependendo do tempo de contribuição e da idade do servidor. Além disso, servidores que exercem atividades de risco têm direito a uma aposentadoria especial com requisitos diferenciados."
    ],
    image: AposentadoriaServidorPublico,
  },
  {
    id: 10,
    title: "AUXÍLIO ACIDENTE",
    mainParagraph: "O auxílio-acidente é um benefício indenizatório concedido aos segurados que, após sofrerem acidente de qualquer natureza, apresentem sequelas que reduzam a capacidade para o trabalho. Este benefício é devido ao trabalhador empregado, trabalhador avulso e segurado especial.",
    secondaryParagraph: [
      "Para ter direito ao auxílio-acidente, é necessário que o segurado tenha sofrido um acidente que resulte em redução da capacidade laboral. A avaliação da incapacidade é feita pelo INSS, por meio de perícia médica. O benefício é pago mensalmente, correspondendo a 50% do salário de benefício.",
      "O auxílio-acidente é devido a partir do dia seguinte ao da cessação do auxílio-doença, se for o caso, ou da data do acidente, se não houver afastamento. O benefício é acumulável com outros benefícios, exceto aposentadoria.",
      "A solicitação do auxílio-acidente pode ser feita pelo site ou aplicativo Meu INSS, ou em uma das agências do INSS. É importante que o segurado reúna todos os documentos necessários, como laudos médicos, atestados e exames que comprovem a redução da capacidade laboral."
    ],
    image: AuxilioAcidente,
  },
  {
    id: 11,
    title: "AUXÍLIO DOENÇA",
    mainParagraph: "O auxílio-doença é um benefício concedido ao segurado que fica temporariamente incapaz de trabalhar por motivo de doença ou acidente, comprovado por perícia médica do INSS.",
    secondaryParagraph: [
      "O benefício é devido a partir do 16º dia de afastamento do trabalho para os empregados e, desde o início da incapacidade, para os demais segurados. É necessário cumprir uma carência mínima de 12 contribuições mensais, exceto em casos de acidentes de qualquer natureza ou doenças previstas em lei.",
      "A solicitação do auxílio-doença pode ser feita pelo site ou aplicativo Meu INSS, ou em uma das agências do INSS. É importante que o segurado reúna todos os documentos médicos necessários, como atestados, laudos e exames que comprovem a incapacidade laboral. Durante o recebimento do auxílio-doença, o segurado não pode exercer nenhuma atividade remunerada. O benefício será cessado quando o INSS constatar a recuperação da capacidade para o trabalho, seja total ou parcial."
    ],
    image: AuxilioDoenca,
  },
  {
    id: 12,
    title: "AUXÍLIO RECLUSÃO",
    mainParagraph: "O auxílio-reclusão é um benefício destinado aos dependentes do segurado de baixa renda que se encontra preso em regime fechado ou semiaberto. É necessário que o segurado esteja contribuindo para o INSS no momento da prisão.",
    secondaryParagraph: [
      "Para ter direito ao benefício, a família do segurado preso deve comprovar a baixa renda e apresentar a certidão de prisão emitida pela autoridade competente. O benefício é pago mensalmente aos dependentes durante o período de reclusão. O valor do auxílio-reclusão é equivalente ao valor da aposentadoria que o segurado teria direito, caso estivesse aposentado por invalidez. O benefício é dividido igualmente entre todos os dependentes.",
      "A solicitação do auxílio-reclusão pode ser feita pelo site ou aplicativo Meu INSS, ou em uma das agências do INSS. É necessário apresentar documentos como certidão de prisão, comprovante de dependência e documentos de identificação dos dependentes."
    ],
    image: AuxilioReclusao,
  },
  {
    id: 13,
    title: "SALÁRIO MATERNIDADE",
    mainParagraph: "O salário-maternidade é um benefício garantido para seguradas empregadas, trabalhadoras avulsas, empregadas domésticas, contribuintes individuais, facultativas e seguradas especiais. Este benefício é devido em casos de parto, aborto não criminoso, adoção ou guarda judicial para fins de adoção.",
    secondaryParagraph: [
      "O início do benefício é fixado na data do atestado médico, a partir do 8º mês de gestação, ou 28 dias antes do parto, ou na data do nascimento da criança. Para seguradas desempregadas, o benefício é considerado a partir do nascimento da criança. No caso de adoção ou guarda judicial, o benefício também é garantido, inclusive para seguradas desempregadas.",
      "O salário-maternidade é devido tanto para mães quanto para pais adotantes, abrangendo todas as formas de constituição familiar. A segurada desempregada terá direito ao benefício se o desemprego ocorrer durante a gravidez e desde que mantida a qualidade de segurada. Em casos de adoção, o início do benefício será a partir da data da sentença judicial."
    ],
    image: SalarioMaternidade,
  },
  {
    id: 14,
    title: "SALÁRIO FAMÍLIA",
    mainParagraph: "O salário-família é um benefício pago aos trabalhadores de baixa renda para auxiliar no sustento dos filhos. É destinado a empregados, trabalhadores avulsos e empregados domésticos que tenham filhos menores de 14 anos ou inválidos de qualquer idade.",
    secondaryParagraph: [
      "Para ter direito ao benefício, o trabalhador deve ter uma remuneração mensal inferior ao limite estabelecido pelo governo. O valor do benefício é pago por filho e varia de acordo com a faixa salarial do trabalhador. A comprovação da idade dos filhos é feita através da certidão de nascimento, e a invalidez deve ser comprovada por perícia médica do INSS. O benefício é ajustado periodicamente de acordo com os índices de reajuste do governo.",
      "Para receber o salário-família, é necessário apresentar a documentação exigida e realizar o pedido junto ao empregador, que será responsável pelo pagamento e posterior compensação do valor junto à Previdência Social."
    ],
    image: SalarioFamilia,
  },
  {
    id: 15,
    title: "PENSÃO POR MORTE",
    mainParagraph: "A pensão por morte é um benefício previdenciário pago aos dependentes do segurado do INSS que venha a falecer, seja aposentado ou não. Esse benefício tem como objetivo garantir a manutenção financeira dos dependentes após a perda do provedor da família.",
    secondaryParagraph: [
      "Os dependentes que têm direito à pensão por morte incluem cônjuge ou companheiro(a), filhos menores de 21 anos ou inválidos, e, na ausência destes, pais e irmãos menores de 21 anos ou inválidos. A duração do benefício varia conforme a idade e o tipo de dependente. Para solicitar a pensão por morte, é necessário apresentar documentos que comprovem a relação de dependência com o segurado falecido, como certidão de casamento, certidão de nascimento dos filhos, e outros documentos específicos.",
      "O benefício pode ser solicitado pela internet, através do site do INSS, ou em uma agência do INSS. O valor da pensão por morte é calculado com base na aposentadoria que o segurado recebia ou na média dos salários de contribuição, se ele ainda não estivesse aposentado. Existem regras específicas para o cálculo do benefício, incluindo possíveis reduções dependendo do número de dependentes e do tempo de contribuição do segurado."
    ],
    image: PensaoMorte,
  },
  {
    id: 16,
    title: "AMPARO AO IDOSO E PESSOA COM DEFICIÊNCIA",
    mainParagraph: "O amparo ao idoso e à pessoa com deficiência, conhecido como Benefício de Prestação Continuada (BPC), é um direito garantido pela Lei Orgânica da Assistência Social (LOAS). Este benefício assegura um salário mínimo mensal para idosos a partir de 65 anos e pessoas com deficiência que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família.",
    secondaryParagraph: [
      "Para ter direito ao BPC, é necessário que a renda familiar per capita seja inferior a 1/4 do salário mínimo. A deficiência deve ser comprovada por avaliação médica e social realizada pelo INSS, demonstrando impedimentos de longo prazo de natureza física, mental, intelectual ou sensorial. O processo de solicitação do BPC pode ser feito por meio do site ou aplicativo Meu INSS, ou em uma das agências do INSS.",
      "É importante reunir todos os documentos necessários, como CPF, comprovante de residência, e documentos que comprovem a deficiência ou idade do beneficiário. O BPC não requer contribuições prévias ao INSS e é um benefício assistencial, não sendo acumulável com outros benefícios previdenciários, como aposentadoria, no entanto, é possível que o beneficiário do BPC venha a contribuir para a Previdência Social para futuramente obter uma aposentadoria."
    ],
    image: AmparoIdosoDeficiente
  }
];

export default pagesData;










// const pagesData = [
//   {
//     id: 1,
//     title: "APOSENTADORIA POR IDADE URBANA",
//     mainParagraph: "A aposentadoria por idade urbana é um benefício destinado aos trabalhadores urbanos que atingiram a idade mínima e possuem o tempo de contribuição necessário.",
//     secondaryParagraph: "Para homens, é necessário ter 65 anos de idade e pelo menos 15 anos de contribuição. Para mulheres, a idade mínima é de 60 anos, com o mesmo tempo de contribuição. Este benefício visa garantir segurança financeira ao trabalhador urbano na sua fase de aposentadoria, assegurando uma renda mensal. Além disso, trabalhadores que contribuíram como autônomos, empresários e segurados especiais também podem ter direito, desde que atendam aos requisitos de idade e tempo de contribuição. Para solicitar o benefício, é necessário reunir a documentação necessária e agendar o atendimento no INSS, que pode ser feito online ou presencialmente.",
//     image: "/img/AposentadoriaIdadeUrbana.jpg",
//   },
//   {
//     id: 2,
//     title: "APOSENTADORIA POR IDADE RURAL",
//     mainParagraph: "A aposentadoria por idade rural é destinada aos trabalhadores rurais que atingem a idade mínima de 60 anos para homens e 55 anos para mulheres. Este benefício visa garantir a proteção social e financeira dos trabalhadores do campo.",
//     secondaryParagraph: "Para ter direito ao benefício, é necessário comprovar o exercício da atividade rural por no mínimo 15 anos, mesmo que de forma descontínua. A comprovação pode ser feita através de documentos como contratos de arrendamento, declarações de sindicatos e notas fiscais de venda da produção. A solicitação da aposentadoria por idade rural pode ser feita pelo site ou aplicativo Meu INSS, ou diretamente em uma agência do INSS. Além dos documentos de comprovação de atividade rural, também são exigidos documentos pessoais, como RG, CPF e certidão de nascimento ou casamento.",
//     image: "/img/AposentadoriaIdadeRural.jpg",
//   },
//   {
//     id: 3,
//     title: "APOSENTADORIA POR IDADE PARA PESSOA COM DEFICIÊNCIA",
//     mainParagraph: "A aposentadoria por idade para pessoa com deficiência é destinada aos segurados que possuem algum tipo de deficiência e atingem a idade mínima de 60 anos para homens e 55 anos para mulheres.",
//     secondaryParagraph: "Para ter direito ao benefício, é necessário comprovar 15 anos de contribuição e a condição de deficiência durante o período de contribuição. A deficiência pode ser física, mental, intelectual ou sensorial. A solicitação da aposentadoria pode ser feita pelo site ou aplicativo Meu INSS, ou diretamente em uma agência do INSS. Além dos documentos de comprovação de deficiência, também são exigidos documentos pessoais, como RG, CPF e certidão de nascimento ou casamento.",
//     image: "/img/AposentadoriaIdadeDeficiencia.jpg",
//   },
//   {
//     id: 4,
//     title: "APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO PARA PESSOA COM DEFICIÊNCIA",
//     mainParagraph: "A aposentadoria por tempo de contribuição para pessoa com deficiência é destinada a segurados do INSS que possuem deficiência física, mental, intelectual ou sensorial. Este benefício é concedido de acordo com o grau de deficiência: leve, moderada ou grave.",
//     secondaryParagraph: "O tempo de contribuição necessário varia conforme o grau de deficiência. Para deficiência grave, são necessários 25 anos de contribuição para homens e 20 anos para mulheres. Para deficiência moderada, 29 anos para homens e 24 anos para mulheres. Para deficiência leve, 33 anos para homens e 28 anos para mulheres. A comprovação da deficiência e do tempo de contribuição é realizada por meio de avaliação médica e funcional, realizada por profissionais do INSS. É importante ressaltar que o segurado precisa ter contribuído para o INSS enquanto estava na condição de pessoa com deficiência para ter direito ao benefício.",
//     image: "/img/AposentadoriaTempoContribuicaoDeficiencia.jpg",
//   },
//   {
//     id: 5,
//     title: "APOSENTADORIA POR TEMPO DE CONTRIBUIÇÃO - PESSOA SEM DEFICIÊNCIA",
//     mainParagraph: "A aposentadoria por tempo de contribuição é um benefício destinado aos segurados que completam o tempo mínimo de contribuição ao INSS, independentemente da idade. Exige-se 35 anos de contribuição para homens e 30 anos para mulheres.",
//     secondaryParagraph: "A reforma da Previdência trouxe mudanças significativas, mas quem já possuía direito adquirido antes da reforma pode se aposentar pelas regras antigas. É possível também se beneficiar das regras de transição, que facilitam a adaptação às novas normas. Para solicitar a aposentadoria, é necessário reunir toda a documentação que comprova os períodos de contribuição e agendar o atendimento pelo site ou aplicativo Meu INSS, ou diretamente em uma agência do INSS.",
//     image: "/img/AposentadoriaTempoContribuicao.jpg",
//   },
//   {
//     id: 6,
//     title: "APOSENTADORIA POR INVALIDEZ",
//     mainParagraph: "A aposentadoria por invalidez é concedida aos segurados do INSS que, devido a uma doença ou acidente, ficam permanentemente incapazes de trabalhar e de serem reabilitados em outra profissão.",
//     secondaryParagraph: "Para ter direito ao benefício, é necessário passar por uma avaliação médica do INSS que comprove a incapacidade total e permanente para o trabalho. A carência para esse benefício é de 12 contribuições mensais, exceto em casos de acidentes de qualquer natureza ou doenças graves especificadas em lei. O valor da aposentadoria por invalidez é calculado com base na média salarial do segurado, podendo sofrer acréscimos no caso de necessidade de assistência permanente de outra pessoa. É importante que o segurado mantenha suas contribuições em dia e esteja atento às revisões periódicas realizadas pelo INSS para confirmação da continuidade da incapacidade.",
//     image: "/img/AposentadoriaInvalidez.jpg",
//   },
//   {
//     id: 7,
//     title: "APOSENTADORIA DE AUTÔNOMO",
//     mainParagraph: "A aposentadoria de autônomo é destinada aos profissionais que trabalham por conta própria e contribuem para o INSS. O benefício pode ser concedido por idade ou por tempo de contribuição, conforme o histórico contributivo do trabalhador.",
//     secondaryParagraph: "Para a aposentadoria por idade, o autônomo deve ter pelo menos 180 contribuições mensais, sendo a idade mínima de 65 anos para homens e 60 anos para mulheres. Já para a aposentadoria por tempo de contribuição, são necessários 35 anos de contribuição para homens e 30 anos para mulheres. É essencial que os autônomos mantenham suas contribuições em dia para garantir o direito ao benefício e evitar transtornos na hora da aposentadoria. Além disso, é possível complementar a aposentadoria com planos de previdência privada.",
//     image: "/img/AposentadoriaAutonomo.jpg",
//   },
//   {
//     id: 8,
//     title: "APOSENTADORIA ESPECIAL",
//     mainParagraph: "A aposentadoria especial é destinada aos trabalhadores que exerceram atividades sob condições prejudiciais à saúde ou à integridade física, permitindo a concessão com menos tempo de contribuição.",
//     secondaryParagraph: "Para ter direito à aposentadoria especial, o trabalhador deve comprovar 15, 20 ou 25 anos de exposição a agentes nocivos, de acordo com a atividade exercida. A comprovação é feita por meio de documentos como o Perfil Profissiográfico Previdenciário (PPP) e o Laudo Técnico de Condições Ambientais do Trabalho (LTCAT). É importante manter todos os registros e laudos atualizados para facilitar a comprovação junto ao INSS. A aposentadoria especial proporciona uma compensação justa aos trabalhadores que dedicaram anos de suas vidas a atividades de risco, garantindo um descanso merecido.",
//     image: "/img/AposentadoriaEspecial.jpg",
//   },
//   {
//     id: 9,
//     title: "APOSENTADORIA DE SERVIDOR PÚBLICO",
//     mainParagraph: "A aposentadoria de servidor público é regida por normas específicas, diferentes do regime geral de previdência social. Servidores públicos têm direito à aposentadoria após cumprirem determinados requisitos de idade e tempo de contribuição, que podem variar conforme a data de ingresso no serviço público.",
//     secondaryParagraph: "Os critérios para aposentadoria dos servidores públicos foram alterados pela Reforma da Previdência, que estabeleceu novas regras de transição para aqueles que estavam próximos de se aposentar. É fundamental que os servidores estejam atentos às mudanças para garantir seus direitos. A aposentadoria pode ser integral ou proporcional, dependendo do tempo de contribuição e da idade do servidor. Além disso, servidores que exercem atividades de risco têm direito a uma aposentadoria especial com requisitos diferenciados.",
//     image: "/img/AposentadoriaServidorPublico.jpg",
//   },
//   {
//     id: 10,
//     title: "AUXÍLIO ACIDENTE",
//     mainParagraph: "O auxílio-acidente é um benefício indenizatório concedido aos segurados que, após sofrerem acidente de qualquer natureza, apresentem sequelas que reduzam a capacidade para o trabalho. Este benefício é devido ao trabalhador empregado, trabalhador avulso e segurado especial.",
//     secondaryParagraph: "Para ter direito ao auxílio-acidente, é necessário que o segurado tenha sofrido um acidente que resulte em redução da capacidade laboral. A avaliação da incapacidade é feita pelo INSS, por meio de perícia médica. O benefício é pago mensalmente, correspondendo a 50% do salário de benefício. O auxílio-acidente é devido a partir do dia seguinte ao da cessação do auxílio-doença, se for o caso, ou da data do acidente, se não houver afastamento. O benefício é acumulável com outros benefícios, exceto aposentadoria. A solicitação do auxílio-acidente pode ser feita pelo site ou aplicativo Meu INSS, ou em uma das agências do INSS. É importante que o segurado reúna todos os documentos necessários, como laudos médicos, atestados e exames que comprovem a redução da capacidade laboral.",
//     image: "/img/AuxilioAcidente.jpg",
//   },
//   {
//     id: 11,
//     title: "AUXÍLIO DOENÇA",
//     mainParagraph: "O auxílio-doença é um benefício concedido ao segurado que fica temporariamente incapaz de trabalhar por motivo de doença ou acidente, comprovado por perícia médica do INSS.",
//     secondaryParagraph: "O benefício é devido a partir do 16º dia de afastamento do trabalho para os empregados e, desde o início da incapacidade, para os demais segurados. É necessário cumprir uma carência mínima de 12 contribuições mensais, exceto em casos de acidentes de qualquer natureza ou doenças previstas em lei. A solicitação do auxílio-doença pode ser feita pelo site ou aplicativo Meu INSS, ou em uma das agências do INSS. É importante que o segurado reúna todos os documentos médicos necessários, como atestados, laudos e exames que comprovem a incapacidade laboral. Durante o recebimento do auxílio-doença, o segurado não pode exercer nenhuma atividade remunerada. O benefício será cessado quando o INSS constatar a recuperação da capacidade para o trabalho, seja total ou parcial.",
//     image: "/img/AuxilioDoenca.jpg",
//   },
//   {
//     id: 12,
//     title: "AUXÍLIO RECLUSÃO",
//     mainParagraph: "O auxílio-reclusão é um benefício destinado aos dependentes do segurado de baixa renda que se encontra preso em regime fechado ou semiaberto. É necessário que o segurado esteja contribuindo para o INSS no momento da prisão.",
//     secondaryParagraph: "Para ter direito ao benefício, a família do segurado preso deve comprovar a baixa renda e apresentar a certidão de prisão emitida pela autoridade competente. O benefício é pago mensalmente aos dependentes durante o período de reclusão. O valor do auxílio-reclusão é equivalente ao valor da aposentadoria que o segurado teria direito, caso estivesse aposentado por invalidez. O benefício é dividido igualmente entre todos os dependentes. A solicitação do auxílio-reclusão pode ser feita pelo site ou aplicativo Meu INSS, ou em uma das agências do INSS. É necessário apresentar documentos como certidão de prisão, comprovante de dependência e documentos de identificação dos dependentes.",
//     image: "/img/AuxilioReclusao.jpg"
//   },
//   {
//     id: 13,
//     title: "SALÁRIO MATERNIDADE",
//     mainParagraph: "O salário-maternidade é um benefício garantido para seguradas empregadas, trabalhadoras avulsas, empregadas domésticas, contribuintes individuais, facultativas e seguradas especiais. Este benefício é devido em casos de parto, aborto não criminoso, adoção ou guarda judicial para fins de adoção.",
//     secondaryParagraph: "O início do benefício é fixado na data do atestado médico, a partir do 8º mês de gestação, ou 28 dias antes do parto, ou na data do nascimento da criança. Para seguradas desempregadas, o benefício é considerado a partir do nascimento da criança. No caso de adoção ou guarda judicial, o benefício também é garantido, inclusive para seguradas desempregadas. O salário-maternidade é devido tanto para mães quanto para pais adotantes, abrangendo todas as formas de constituição familiar. A segurada desempregada terá direito ao benefício se o desemprego ocorrer durante a gravidez e desde que mantida a qualidade de segurada. Em casos de adoção, o início do benefício será a partir da data da sentença judicial.",
//     image: "/img/SalarioMaternidade.jpg"
//   },
//   {
//   id: 14,
//   title: "SALÁRIO FAMÍLIA",
//   mainParagraph: "O salário-família é um benefício pago aos trabalhadores de baixa renda para auxiliar no sustento dos filhos. É destinado a empregados, trabalhadores avulsos e empregados domésticos que tenham filhos menores de 14 anos ou inválidos de qualquer idade.",
//   secondaryParagraph: "Para ter direito ao benefício, o trabalhador deve ter uma remuneração mensal inferior ao limite estabelecido pelo governo. O valor do benefício é pago por filho e varia de acordo com a faixa salarial do trabalhador. A comprovação da idade dos filhos é feita através da certidão de nascimento, e a invalidez deve ser comprovada por perícia médica do INSS. O benefício é ajustado periodicamente de acordo com os índices de reajuste do governo. Para receber o salário-família, é necessário apresentar a documentação exigida e realizar o pedido junto ao empregador, que será responsável pelo pagamento e posterior compensação do valor junto à Previdência Social.",
//   image: "/img/SalarioFamilia.jpg"
//   },
//   {
//   id: 15,
//   title: "PENSÃO POR MORTE",
//   mainParagraph: "A pensão por morte é um benefício previdenciário pago aos dependentes do segurado do INSS que venha a falecer, seja aposentado ou não. Esse benefício tem como objetivo garantir a manutenção financeira dos dependentes após a perda do provedor da família.",
//   secondaryParagraph: "Os dependentes que têm direito à pensão por morte incluem cônjuge ou companheiro(a), filhos menores de 21 anos ou inválidos, e, na ausência destes, pais e irmãos menores de 21 anos ou inválidos. A duração do benefício varia conforme a idade e o tipo de dependente. Para solicitar a pensão por morte, é necessário apresentar documentos que comprovem a relação de dependência com o segurado falecido, como certidão de casamento, certidão de nascimento dos filhos, e outros documentos específicos. O benefício pode ser solicitado pela internet, através do site do INSS, ou em uma agência do INSS. O valor da pensão por morte é calculado com base na aposentadoria que o segurado recebia ou na média dos salários de contribuição, se ele ainda não estivesse aposentado. Existem regras específicas para o cálculo do benefício, incluindo possíveis reduções dependendo do número de dependentes e do tempo de contribuição do segurado.",
//   image: "/img/PensaoMorte.jpg"
//   },
//   {
//   id: 16,
//   title: "AMPARO AO IDOSO E PESSOA COM DEFICIÊNCIA",
//   mainParagraph: "O amparo ao idoso e à pessoa com deficiência, conhecido como Benefício de Prestação Continuada (BPC), é um direito garantido pela Lei Orgânica da Assistência Social (LOAS). Este benefício assegura um salário mínimo mensal para idosos a partir de 65 anos e pessoas com deficiência que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família.",
//   secondaryParagraph: "Para ter direito ao BPC, é necessário que a renda familiar per capita seja inferior a 1/4 do salário mínimo. A deficiência deve ser comprovada por avaliação médica e social realizada pelo INSS, demonstrando impedimentos de longo prazo de natureza física, mental, intelectual ou sensorial. O processo de solicitação do BPC pode ser feito por meio do site ou aplicativo Meu INSS, ou em uma das agências do INSS. É importante reunir todos os documentos necessários, como CPF, comprovante de residência, e documentos que comprovem a deficiência ou idade do beneficiário. O BPC não requer contribuições prévias ao INSS e é um benefício assistencial, não sendo acumulável com outros benefícios previdenciários, como aposentadoria. No entanto, é possível que o beneficiário do BPC venha a contribuir para a Previdência Social para futuramente obter uma aposentadoria.",
//   image: "/img/AmparoIdosoDeficiente.jpg"
//   }
// ];

// export default pagesData;
