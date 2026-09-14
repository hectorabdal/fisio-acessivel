import type { EditorialArticle } from "./orientacoes";

export const draftArticles: EditorialArticle[] = [
  {
    slug: "fisioterapia-domiciliar-para-idosos",
    title: "Fisioterapia domiciliar para idosos: como funciona e quando é indicada?",
    seoTitle: "Fisioterapia domiciliar para idosos: como funciona?",
    description:
      "Entenda como funciona a fisioterapia em casa, o que é avaliado e quando conversar com um profissional sobre o atendimento domiciliar.",
    category: "Fisioterapia domiciliar",
    tags: ["Orientações para familiares"],
    status: "draft",
    review: null,
    intro:
      "Levar um familiar até uma clínica pode exigir ajuda para sair de casa, entrar no carro e enfrentar o trajeto. Quando essa rotina se torna difícil, é natural perguntar se o cuidado pode acontecer na própria residência.",
    answer:
      "A fisioterapia domiciliar é o atendimento realizado pelo fisioterapeuta no local onde a pessoa vive. Sua indicação depende da avaliação das necessidades da pessoa e das condições para atendê-la com segurança em casa.",
    sections: [
      {
        heading: "Como o atendimento começa?",
        text: "O primeiro passo é uma consulta. O fisioterapeuta procura compreender as dificuldades, examina a funcionalidade — a capacidade de realizar atividades do dia a dia — e estabelece um plano de cuidado. A assistência pode incluir tratamento e orientações à pessoa atendida e à família.",
        reference: "norma",
      },
      {
        heading: "Para quem pode ser uma alternativa?",
        text: "A dificuldade de deslocamento é um motivo para considerar essa modalidade, mas não é o único. Na conversa inicial, explique o que motivou a procura: houve mudança para caminhar? Sair de casa se tornou desgastante? Existe uma dificuldade específica na rotina? Essas informações ajudam a discutir a adequação do atendimento, sem concluir antecipadamente qual tratamento será necessário.",
      },
      {
        heading: "O que muda quando o cuidado acontece em casa?",
        text: "O ambiente residencial permite observar tarefas no contexto em que elas acontecem. Uma dificuldade para levantar do sofá, por exemplo, pode ser discutida no próprio local. O plano considera a pessoa, o espaço disponível e a participação de familiares ou cuidadores.",
        reference: "coffito",
      },
      {
        heading: "Qual é o papel da família?",
        text: "A família pode contar o que percebeu e levar dúvidas. Vale perguntar: “Como podemos ajudar sem fazer tudo pela pessoa?” e “Quais orientações precisam ser acompanhadas?”. Sempre inclua a pessoa idosa na conversa e respeite suas escolhas. O familiar não precisa chegar sabendo o nome de uma doença ou de um exercício.",
      },
      {
        heading: "Quando procurar avaliação profissional?",
        text: "Converse com um fisioterapeuta quando houver limitações nas atividades habituais ou dúvidas sobre a viabilidade do atendimento em casa. Conte quando a mudança começou e como afeta a rotina. Se houver piora súbita ou uma situação de urgência, procure atendimento de saúde imediato; uma conversa sobre fisioterapia não substitui esse cuidado.",
      },
    ],
    faqs: [
      {
        question: "É preciso estar acamado?",
        answer:
          "Não. A decisão não se resume a estar ou não na cama: depende das necessidades identificadas na avaliação.",
      },
      {
        question: "Quantas sessões serão necessárias?",
        answer:
          "Não é possível definir pelo artigo. Pergunte como serão combinados os objetivos, a frequência e os momentos de reavaliação.",
      },
      {
        question: "Preciso comprar equipamentos antes?",
        answer:
          "Converse primeiro com o profissional sobre o espaço e os recursos necessários para o atendimento proposto. Evite compras baseadas em uma lista genérica.",
      },
    ],
    conclusion:
      "A conversa inicial pode esclarecer se o atendimento domiciliar faz sentido para sua realidade e quais serão os próximos passos.",
    related: ["vantagens-fisioterapia-idosos-em-casa", "fisioterapia-geriatrica"],
    references: ["norma", "coffito"],
  },
  {
    slug: "prevencao-de-quedas-em-idosos",
    title: "Prevenção de quedas em idosos: como a fisioterapia pode ajudar?",
    seoTitle: "Prevenção de quedas em idosos: como a fisioterapia ajuda",
    description:
      "Saiba como força, equilíbrio e ambiente doméstico se relacionam às quedas e por que a prevenção exige avaliação individual.",
    category: "Prevenção de quedas",
    tags: ["Cuidado da pessoa idosa", "Orientações para familiares"],
    status: "draft",
    review: null,
    intro:
      "Depois de um tropeço ou de uma queda, a família pode ficar receosa até com um caminho curto dentro de casa. A preocupação merece escuta, inclusive quando a pessoa diz que passou a evitar atividades por medo de cair.",
    answer:
      "A fisioterapia pode participar da prevenção com avaliação do movimento e exercícios adequados à pessoa. Mas as quedas podem ter várias causas: o cuidado também pode exigir avaliação médica e de outros profissionais.",
    sections: [
      {
        heading: "Por que uma queda merece atenção?",
        text: "Além de lesões, uma queda pode trazer medo e reduzir a participação nas atividades habituais. Alterações de força e equilíbrio, dificuldades de visão, efeitos de medicamentos e obstáculos em casa podem se combinar. Não se deve atribuir tudo à idade.",
        reference: "quedas",
      },
      {
        heading: "Como o exercício pode ajudar?",
        text: "Programas que trabalham equilíbrio e fortalecimento podem contribuir para reduzir o risco de quedas. A escolha e a progressão precisam considerar as condições individuais. Não existe um exercício que garanta que alguém nunca mais cairá.",
        reference: "ednor",
      },
      {
        heading: "O que observar dentro de casa?",
        text: "Tapetes soltos, fios no caminho e iluminação insuficiente merecem atenção. Adaptações, como barras de apoio, precisam ser adequadas ao ambiente e instaladas de forma segura. Uma avaliação no domicílio pode ajudar a identificar dificuldades na circulação.",
        reference: "ednor",
      },
      {
        heading: "Como conversar sobre o medo de cair?",
        text: "Em vez de encerrar a conversa com “é só ter cuidado”, pergunte em quais momentos aparece a insegurança. É ao ir ao banheiro? Ao virar o corpo? Na calçada? Anote exemplos para a consulta. Escutar a pessoa ajuda a entender o que ela quer voltar a fazer e quais preocupações precisam ser discutidas.",
      },
      {
        heading: "Quando procurar avaliação profissional?",
        text: "Uma queda, episódios de quase cair ou insegurança que restringe a rotina justificam avaliação. Leve informações sobre o episódio e os medicamentos em uso. Não interrompa remédios por conta própria. Após uma queda com dor intensa, deformidade ou incapacidade de se mover, procure atendimento de urgência.",
        reference: "ednor",
      },
    ],
    faqs: [
      {
        question: "A fisioterapia resolve todas as causas de queda?",
        answer:
          "Não. A avaliação pode apontar necessidades de cuidado além do movimento, como investigar visão, pressão arterial e medicamentos.",
      },
      {
        question: "É melhor deixar de caminhar por medo?",
        answer:
          "Converse com a equipe sobre como manter a participação nas atividades com segurança. Não force caminhadas nem proponha desafios de equilíbrio sem orientação.",
      },
      {
        question: "É necessário esperar a primeira queda?",
        answer:
          "Não é preciso esperar um acidente para relatar insegurança ou dificuldade de equilíbrio a um profissional.",
      },
    ],
    conclusion:
      "Prevenir quedas começa por compreender o que acontece com aquela pessoa e naquele ambiente, construindo um cuidado compartilhado.",
    related: ["perda-de-forca-muscular-em-idosos", "idoso-com-dificuldade-para-caminhar"],
    references: ["quedas", "ednor"],
  },
  {
    slug: "perda-de-forca-muscular-em-idosos",
    title: "Perda de força muscular em idosos: quando é preciso prestar atenção?",
    seoTitle: "Perda de força em idosos: quando procurar avaliação?",
    description:
      "Dificuldade para levantar ou realizar tarefas merece atenção. Entenda a perda de força, a sarcopenia e o papel da avaliação profissional.",
    category: "Força e funcionalidade",
    tags: ["Cuidado da pessoa idosa", "Orientações para familiares"],
    status: "draft",
    review: null,
    intro:
      "Seu pai passou a pedir ajuda para sair da cadeira? Sua mãe deixou de carregar objetos que antes faziam parte da rotina? Essas observações são um bom ponto de partida para conversar sobre mudanças na força.",
    answer:
      "Preste atenção quando a perda de força interfere em atividades habituais, progride ou representa uma mudança em relação ao que a pessoa conseguia fazer. A causa precisa ser investigada; não é possível afirmar pelo sintoma que se trata de sarcopenia.",
    sections: [
      {
        heading: "Envelhecer significa perder a independência?",
        text: "O envelhecimento envolve mudanças musculares, mas uma dificuldade nova não deve ser automaticamente tratada como algo inevitável. Inatividade, doenças e fatores nutricionais também podem participar da perda muscular. A avaliação ajuda a compreender o caso.",
        reference: "artmed",
      },
      {
        heading: "O que é sarcopenia?",
        text: "Sarcopenia é uma condição que envolve redução da força e da massa muscular. Pode comprometer a função e se associar a quedas. Nem toda fraqueza é sarcopenia; a confirmação exige avaliação apropriada.",
        reference: "artmed",
      },
      {
        heading: "Por que não fazer o diagnóstico em casa?",
        text: "Instrumentos de avaliação de força e desempenho precisam ser interpretados no contexto clínico. Um estudo publicado na revista da USP comparou métodos de identificação de sarcopenia e encontrou diferenças entre suas classificações. Uma medida isolada ou um teste da internet não responde sozinho à dúvida da família.",
        reference: "usp",
      },
      {
        heading: "Qual é o papel da atividade física?",
        text: "Exercícios de fortalecimento podem fazer parte do cuidado. Um estudo em mulheres idosas com sarcopenia observou mudanças favoráveis após treinamento progressivo. Esse resultado não determina o programa adequado para todo leitor: condições de saúde, limitações e objetivos precisam orientar a prescrição.",
        reference: "treino",
      },
      {
        heading: "Quando procurar avaliação profissional?",
        text: "Procure avaliação se levantar, caminhar ou realizar tarefas passou a exigir mais ajuda. Conte quando começou, se está piorando e quais atividades foram deixadas de lado. Fraqueza súbita exige atendimento imediato, não uma tentativa de resolver com exercícios em casa.",
      },
      {
        heading: "Como levar a preocupação para a consulta?",
        text: "Troque descrições vagas por exemplos: “Antes levantava da poltrona para atender a porta; agora precisa pedir ajuda”. Pergunte à pessoa o que ela mesma percebe e o que mais a incomoda. Não é necessário submetê-la a testes domésticos para justificar a procura por cuidado.",
      },
    ],
    faqs: [
      {
        question: "Uma pessoa magra sempre tem sarcopenia?",
        answer:
          "Não é possível concluir isso pela aparência. A avaliação vai além de observar o tamanho do corpo.",
      },
      {
        question: "Caminhar substitui qualquer fortalecimento?",
        answer:
          "São atividades diferentes. Pergunte ao profissional quais componentes do movimento precisam ser trabalhados no seu caso.",
      },
      {
        question: "Devo começar a tomar suplemento?",
        answer:
          "O artigo não indica suplementos. Leve dúvidas sobre alimentação e perda de peso à equipe de saúde para avaliação individual.",
      },
    ],
    conclusion:
      "Perceber a mudança e descrevê-la com clareza ajuda a buscar cuidado, sem transformar a observação da família em um diagnóstico.",
    related: ["fisioterapia-geriatrica", "prevencao-de-quedas-em-idosos"],
    references: ["artmed", "usp", "treino"],
  },
  {
    slug: "idoso-com-dificuldade-para-caminhar",
    title: "Idoso com dificuldade para caminhar: quando procurar ajuda?",
    seoTitle: "Idoso com dificuldade para caminhar: quando buscar ajuda?",
    description:
      "Passos mais lentos, apoio nos móveis e medo de cair merecem atenção. Veja como relatar mudanças na caminhada e buscar avaliação.",
    category: "Mobilidade e independência",
    tags: ["Orientações para familiares"],
    status: "draft",
    review: null,
    intro:
      "Levantar da cadeira ficou mais difícil. Os passos parecem menores ou mais lentos. A pessoa procura apoio nos móveis, evita escadas ou deixa de sair por medo de cair. Quando essas mudanças aparecem, a família pode não saber por onde começar.",
    answer:
      "Procure ajuda quando caminhar ficou diferente do habitual, inseguro ou passou a limitar atividades. A avaliação profissional é necessária para compreender a mudança. Se a dificuldade começou de repente ou há piora importante, procure atendimento imediato.",
    sections: [
      {
        heading: "Por que um artigo não consegue explicar a causa?",
        text: "Dificuldades de equilíbrio, força e outras condições de saúde podem interferir na mobilidade. Problemas de visão, alterações da pressão e efeitos de medicamentos também podem participar da insegurança. Vários fatores podem coexistir; observar passos curtos, por exemplo, não identifica uma doença.",
        reference: "quedas",
      },
      {
        heading: "O que vale observar?",
        text: "Organize um relato simples: quando começou; em quais ambientes acontece; se há dor ou medo; se ocorreu alguma queda; e que tipo de ajuda passou a ser necessária. Compare com a rotina da própria pessoa, não com a de outros idosos. Não provoque a dificuldade para gravar ou demonstrar o problema.",
      },
      {
        heading: "Como a avaliação pode orientar o cuidado?",
        text: "O fisioterapeuta pode avaliar as limitações funcionais e discutir metas. A investigação da causa pode precisar de outros profissionais. Leve perguntas práticas: “O que está dificultando o trajeto até o banheiro?”, “Que apoio é adequado?” e “Quais atividades precisam de acompanhamento?”.",
      },
      {
        heading: "Força é a única questão?",
        text: "Não. Perda muscular pode comprometer a função, mas não explica sozinha todos os problemas de caminhada. A avaliação de sarcopenia, quando pertinente, exige mais do que a impressão de que a pessoa está fraca.",
        reference: "artmed",
      },
      {
        heading: "Quando procurar avaliação profissional?",
        text: "Não espere uma queda para relatar uma limitação nova ou persistente. Uma consulta pode esclarecer necessidades e encaminhamentos. Se a dificuldade surge após uma queda com dor intensa ou incapacidade de se mover, procure urgência. Não force a pessoa a caminhar para testar se está bem.",
        reference: "ednor",
      },
      {
        heading: "Como a família pode participar?",
        text: "Pergunte quais trajetos são importantes para a pessoa: circular pela casa, visitar alguém, ir ao quintal. Esses exemplos tornam a conversa sobre independência concreta. Evite decidir todas as atividades por ela antes de ouvir seus receios e preferências.",
      },
    ],
    faqs: [
      {
        question: "Passos menores significam uma doença específica?",
        answer:
          "Não. Esse sinal precisa ser interpretado junto com a história e o exame profissional.",
      },
      {
        question: "Devo comprar uma bengala?",
        answer:
          "Peça orientação sobre necessidade, escolha e uso antes de decidir. Um produto comprado sem avaliação não substitui a compreensão da dificuldade.",
      },
      {
        question: "E se for difícil sair de casa para a consulta?",
        answer:
          "Converse sobre a possibilidade de avaliação domiciliar e sua adequação ao caso. Uma urgência exige atendimento imediato.",
      },
    ],
    conclusion:
      "Mudanças na caminhada merecem escuta e avaliação. O primeiro passo é compreender a situação, sem culpar a pessoa ou atribuir tudo ao envelhecimento.",
    related: ["fisioterapia-domiciliar-para-idosos", "prevencao-de-quedas-em-idosos"],
    references: ["quedas", "artmed", "ednor"],
  },
  {
    slug: "fisioterapia-geriatrica",
    title: "Fisioterapia geriátrica: o que é e para quem é indicada?",
    seoTitle: "Fisioterapia geriátrica: o que é e para quem é indicada?",
    description:
      "Conheça o cuidado fisioterapêutico da pessoa idosa, com atenção à mobilidade, à funcionalidade e aos objetivos de cada pessoa.",
    category: "Cuidado da pessoa idosa",
    tags: ["Força e funcionalidade", "Mobilidade e independência"],
    status: "draft",
    review: null,
    intro:
      "Duas pessoas da mesma idade podem ter rotinas e necessidades muito diferentes. Uma quer continuar cuidando do jardim; outra precisa de ajuda para sair da cama. O cuidado fisioterapêutico deve partir dessa realidade individual.",
    answer:
      "A fisioterapia geriátrica é o cuidado fisioterapêutico voltado às necessidades da pessoa idosa. Considera o movimento, as atividades cotidianas e os objetivos de cada pessoa, em ações de prevenção e reabilitação.",
    sections: [
      {
        heading: "O que significa cuidar da funcionalidade?",
        text: "Funcionalidade diz respeito ao que a pessoa consegue fazer no cotidiano. “Melhorar a rotina” pode significar vestir-se, levantar, caminhar dentro de casa ou participar de uma atividade importante. Ao conversar com o profissional, descreva qual dessas tarefas representa uma necessidade real.",
      },
      {
        heading: "Quais aspectos podem merecer atenção?",
        text: "Força, equilíbrio e mobilidade podem fazer parte da avaliação, conforme as dificuldades relatadas. A literatura sobre exercício em mulheres idosas com sarcopenia indica potencial do fortalecimento, mas não autoriza prescrever o mesmo programa a todas as pessoas idosas.",
        reference: "treino",
      },
      {
        heading: "É apenas para quem está se recuperando de uma lesão?",
        text: "A atuação fisioterapêutica pode incluir prevenção e recuperação funcional. A necessidade do acompanhamento e os objetivos devem ser definidos individualmente. No atendimento domiciliar, a norma do COFFITO contempla ações de promoção da saúde, prevenção e cuidado funcional.",
        reference: "norma",
      },
      {
        heading: "Como preservar autonomia na conversa?",
        text: "Inclua a pessoa idosa nas decisões. Pergunte o que ela deseja fazer com mais facilidade e que tipo de ajuda aceita. Familiares e cuidadores podem contribuir com informações, sem substituir sua voz quando ela pode expressar suas escolhas.",
      },
      {
        heading: "Quando procurar avaliação profissional?",
        text: "Procure orientação quando atividades antes habituais se tornam difíceis, há insegurança para se movimentar ou dúvidas sobre como iniciar um cuidado. Sintomas com causas desconhecidas podem exigir investigação por outros profissionais. Não é necessário chegar à consulta com um diagnóstico feito pela família.",
      },
      {
        heading: "Como conhecer o profissional antes de começar?",
        text: "Pergunte sobre sua formação, experiência com as necessidades apresentadas, modo de avaliação e comunicação com a família. Também vale esclarecer como as metas serão acompanhadas e quando o plano será revisto. Não espere garantias de resultado: peça explicações claras sobre a proposta.",
      },
    ],
    faqs: [
      {
        question: "Existe uma idade que determina a necessidade de tratamento?",
        answer:
          "A idade, isoladamente, não define o plano. A conversa deve considerar as dificuldades e os objetivos individuais.",
      },
      {
        question: "Esse cuidado pode acontecer em casa?",
        answer:
          "Pode, quando a modalidade domiciliar for adequada. O local do atendimento e o foco do cuidado são decisões relacionadas, mas diferentes.",
      },
      {
        question: "Quem ajuda em casa precisa participar de todas as sessões?",
        answer:
          "Combine com o profissional e com a pessoa atendida quando essa participação é pertinente e quais orientações precisam ser compartilhadas.",
      },
    ],
    conclusion:
      "Um cuidado centrado na pessoa começa com objetivos que fazem sentido para sua vida, respeitando suas necessidades e escolhas.",
    related: ["fisioterapia-domiciliar-para-idosos", "perda-de-forca-muscular-em-idosos"],
    references: ["norma", "treino", "coffito"],
  },
  {
    slug: "vantagens-fisioterapia-idosos-em-casa",
    title: "Fisioterapia para idosos em casa: quais são as vantagens do atendimento domiciliar?",
    seoTitle: "Fisioterapia em casa: vantagens para a pessoa idosa",
    description:
      "Conheça as vantagens potenciais da fisioterapia em casa e os pontos que a família deve discutir antes de escolher essa modalidade.",
    category: "Fisioterapia domiciliar",
    tags: ["Orientações para familiares"],
    status: "draft",
    review: null,
    intro:
      "Organizar transporte, encontrar alguém para acompanhar e preparar uma saída pode ocupar boa parte do dia. Se isso faz parte da sua rotina, talvez você esteja comparando o atendimento em casa com outras possibilidades.",
    answer:
      "O atendimento domiciliar pode facilitar a organização do cuidado e aproximá-lo da rotina da pessoa. A adequação depende das necessidades individuais e das condições da residência; estar em casa, por si só, não garante um resultado melhor.",
    sections: [
      {
        heading: "Evitar deslocamentos frequentes",
        text: "Receber o atendimento na residência dispensa o trajeto para aquela sessão. Para avaliar se isso faz diferença, pense na sua rotina: quem acompanha a saída? Quanto preparo ela exige? A pessoa se sente confortável com esse processo? Essas perguntas ajudam a comparar opções sem reduzir a escolha apenas à conveniência.",
      },
      {
        heading: "Olhar para as atividades no próprio ambiente",
        text: "O domicílio permite considerar o contexto físico e familiar no planejamento. Dificuldades em tarefas realizadas na residência podem ser observadas e discutidas ali. Essa proximidade ajuda a relacionar as orientações à vida cotidiana.",
        reference: "coffito",
      },
      {
        heading: "Facilitar a conversa com quem participa do cuidado",
        text: "A assistência domiciliar inclui ações educativas destinadas à pessoa e à família. Combine previamente quem participará e quais dúvidas serão tratadas.",
        reference: "norma",
      },
      {
        heading: "Conforto também é uma preferência pessoal",
        text: "Algumas pessoas preferem receber o profissional em casa; outras valorizam sair para o atendimento. Pergunte à pessoa idosa como ela se sente. Privacidade, rotina e disponibilidade de quem mora no local devem entrar nessa conversa. Não pressuponha que todas as famílias desejam a mesma solução.",
      },
      {
        heading: "O que perguntar antes de escolher?",
        text: "Peça explicações sobre a avaliação inicial, os recursos necessários, a organização do espaço e o acompanhamento das metas. Esclareça valores e disponibilidade diretamente com o serviço. Não há informações suficientes neste artigo para prever frequência, duração do cuidado ou resultados.",
      },
      {
        heading: "Quando procurar avaliação profissional?",
        text: "Converse com um fisioterapeuta se existe uma necessidade funcional e você quer entender se o cuidado pode acontecer em casa. A avaliação deve anteceder a definição do plano. Se houver urgência ou mudança súbita importante, procure atendimento imediato.",
      },
    ],
    faqs: [
      {
        question: "Atender em casa é sempre melhor do que atender em clínica?",
        answer:
          "Não existe uma escolha única para todos. Discuta necessidades, condições do ambiente e preferências para comparar as opções.",
      },
      {
        question: "O atendimento será igual ao de outro familiar?",
        answer:
          "Não necessariamente. Ter a mesma idade ou morar no mesmo local não significa ter as mesmas necessidades.",
      },
      {
        question: "A família precisa decidir tudo antes do primeiro contato?",
        answer:
          "Não. Explique a dificuldade e leve suas dúvidas sobre funcionamento e avaliação. A conversa inicial serve justamente para esclarecer os próximos passos.",
      },
    ],
    conclusion:
      "As vantagens devem ser avaliadas à luz da rotina e das necessidades da pessoa. Uma conversa sem compromisso de resultado pode ajudar a decidir com mais clareza.",
    related: ["fisioterapia-domiciliar-para-idosos", "fisioterapia-geriatrica"],
    references: ["coffito", "norma"],
  },
];
