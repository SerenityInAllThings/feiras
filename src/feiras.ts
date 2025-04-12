export type Feira = {
  name: string
  mapsUrl: string
  weekday: number
  startTime: string
  endTime: string
  type: 'daytime' | 'nighttime' | 'daytime_organic' | 'nighttime_organic' | 'cooperative' | 'sea',
  moreDetailsUrl: string
  address: string
}

export const feiras: Feira[] = [
  {
    name: 'Feira São Francisco',
    mapsUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7206.887945491901!2d-49.27993258559917!3d-25.42341641355256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94dce40cd0648c39%3A0x33fbbc37e76f995c!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Rosaria%20Filizola%2C%20Alameda%20Cabral%2C%20747%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080410-064!3m2!1d-25.4266397!2d-49.279483!4m5!1s0x94dce41add10c813%3A0xaaf0e3be68976417!2sR.%20David%20Carneiro%20-%20S%C3%A3o%20Francisco%2C%20Curitiba%20-%20State%20of%20Paran%C3%A1!3m2!1d-25.4194224!2d-49.2731445!5e0!3m2!1sen!2sbr!4v1743022566102!5m2!1sen!2sbr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    weekday: 3,
    startTime: '07:00',
    endTime: '12:00',
    type: 'daytime',
    moreDetailsUrl: 'https://www.curitiba.pr.gov.br/locais/feira-livre-diurna-sao-francisco/915',
    address: 'R. David Carneiro - São Francisco'
  },
  {
    name: 'Feira Mercês',
    mapsUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7206.643881168668!2d-49.2875452038603!3d-25.42749816025352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94dce40cd0648c39%3A0x33fbbc37e76f995c!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Rosaria%20Filizola%2C%20Alameda%20Cabral%2C%20747%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080410-064!3m2!1d-25.4266397!2d-49.279483!4m5!1s0x94dce3f638215f33%3A0xfe2746e03880f375!2sR.%20Martim%20Afonso%2C%20850%20-%20Bigorrilho%2C%20Curitiba%20-%20PR!3m2!1d-25.4286042!2d-49.285415699999994!5e0!3m2!1sen!2sbr!4v1743023084049!5m2!1sen!2sbr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    weekday: 6,
    startTime: '07:00',
    endTime: '13:00',
    type: 'daytime',
    moreDetailsUrl: 'https://www.curitiba.pr.gov.br/locais/feira-livre-diurna-merces/462',
    address: 'R. PE. ANCHIETA, Entre a Rua Brigadeiro Franco e a Rua Professor Fernando Moreira'
  },
  {
    name: 'Feira Noturna Bigorilho',
    mapsUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7206.658758984599!2d-49.28802415386049!3d-25.427249360254006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x94dce40cd0648c39%3A0x33fbbc37e76f995c!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Rosaria%20Filizola%2C%20Alameda%20Cabral%2C%20747%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080410-064!3m2!1d-25.4266397!2d-49.279483!4m5!1s0x94dce3f707eff139%3A0x65aa0d5f82f507b0!2sR.%20Padre%20Anchieta%2C%20694%20-%20Merc%C3%AAs%2C%20Curitiba%20-%20State%20of%20Paran%C3%A1!3m2!1d-25.427918899999998!2d-49.2867621!5e0!3m2!1sen!2sbr!4v1743022658742!5m2!1sen!2sbr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    weekday: 5,
    startTime: '17:00',
    endTime: '22:00',
    type: 'nighttime',
    moreDetailsUrl: 'https://www.curitiba.pr.gov.br/locais/feira-livre-noturna-champagnat/269',
    address: 'R. PE. ANCHIETA, Entre a Rua Desembargador Motta e a Alameda Presidente Taunay'
  },
  {
    name: 'Feira Noturna São Francisco',
    mapsUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3603.2810259104986!2d-49.27843341820789!3d-25.428866542375197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94dce40cd0648c39%3A0x33fbbc37e76f995c!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Rosaria%20Filizola%2C%20Alameda%20Cabral%2C%20747%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080410-064!3m2!1d-25.4266397!2d-49.279483!4m3!3m2!1d-25.4290259!2d-49.2738759!5e0!3m2!1sen!2sbr!4v1743023248920!5m2!1sen!2sbr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    weekday: 4,
    startTime: '17:00',
    endTime: '22:00',
    type: 'nighttime',
    moreDetailsUrl: 'https://www.curitiba.pr.gov.br/locais/feira-livre-noturna-sao-francisco/46',
    address: 'R. KELLERS, Entre a Alameda Doutor Muricy e a Rua do Rosário, ao lado da Praça Garibaldi'
  },
  {
    name: 'Feira orgânica Passeio Público',
    mapsUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3603.364237649122!2d-49.27237308174247!3d-25.42608347210822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94dce40cd0648c39%3A0x33fbbc37e76f995c!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Rosaria%20Filizola%2C%20Alameda%20Cabral%2C%20747%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080410-064!3m2!1d-25.4266397!2d-49.279483!4m3!3m2!1d-25.425054!2d-49.2686305!5e0!3m2!1sen!2sbr!4v1743023322781!5m2!1sen!2sbr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    weekday: 6,
    startTime: '07:00',
    endTime: '12:00',
    type: 'daytime_organic',
    moreDetailsUrl: 'https://www.curitiba.pr.gov.br/locais/feira-organica-diurna-passeio-publico/763',
    address: ' R. PRES. FARIA, 550, Passeio Público'
  },
  {
    name: 'Feira cooperativa da Praça Osório',
    mapsUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3603.256897559319!2d-49.280110338229335!3d-25.429673477468445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94dce40cd0648c39%3A0x33fbbc37e76f995c!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Rosaria%20Filizola%20-%20Alameda%20Cabral%20-%20Centro%2C%20Curitiba%20-%20State%20of%20Paran%C3%A1!3m2!1d-25.4266397!2d-49.279483!4m3!3m2!1d-25.432745699999998!2d-49.276224799999994!5e0!3m2!1sen!2sbr!4v1743015787729!5m2!1sen!2sbr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    weekday: 5,
    startTime: '08:00',
    endTime: '14:00',
    type: 'cooperative',
    moreDetailsUrl: 'https://www.curitiba.pr.gov.br/locais/feira-das-cooperativas-osorio/2595',
    address: 'PÇ. GEN. OSÓRIO, Entre a Rua Comendador Araújo e a Avenida Vicente Machado'
  },
  {
    name: 'Feira do Litoral',
    mapsUrl: '<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d7206.762437512444!2d-49.28051541362106!3d-25.425515493092266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m5!1s0x94dce40cd0648c39%3A0x33fbbc37e76f995c!2sCondom%C3%ADnio%20Edif%C3%ADcio%20Rosaria%20Filizola%2C%20Alameda%20Cabral%2C%20747%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080410-064!3m2!1d-25.4266397!2d-49.279483!4m3!3m2!1d-25.4245776!2d-49.268938!5e0!3m2!1sen!2sbr!4v1743024868763!5m2!1sen!2sbr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    weekday: 6,
    startTime: '07:00',
    endTime: '12:00',
    type: 'sea',
    moreDetailsUrl: 'https://www.curitiba.pr.gov.br/locais/feira-do-litoral-praca-dezenove-de-dezembro/1215',
    address: 'R. PAULA GOMES, 40, Praça Dezenove de Dezembro'
  }
]