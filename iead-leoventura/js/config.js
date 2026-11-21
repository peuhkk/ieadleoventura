/* ==========================================================
   CONFIGURAÇÃO DO SITE — edite SOMENTE este arquivo.
   Campos vazios ("") não aparecem no site: o botão some até
   você preencher. Nada aqui é informação oficial inventada.
   ========================================================== */
window.SITE = {
  igreja: {
    nome: "IEAD Leoventura",
    slogan: "Uma igreja com identidade.",
    local: "Leoventura, Camacan – Bahia",
    pastor: "Pr. Magno Alves Mota",
    cargoPastor: "Pastor presidente",
    logo: "assets/logo/logo.png",   // troque pelo arquivo real (SVG ou PNG)
    foto: "assets/images/igreja.png",                        // ex.: "assets/images/igreja.jpg" (opcional)
    fotoAlt: "Fachada da IEAD Leoventura" // descreva a foto escolhida
  },
  hero: {
    titulo: "Seja bem-vindo à casa de vocês.",
    texto: "Queremos conhecer você. Acompanhe nossos canais, veja os horários e venha nos visitar."
  },
  contato: {
    whatsapp: "",   // só números com DDI+DDD. Ex.: "5573999999999"
    mensagemWhats: "Olá! Gostaria de falar com a IEAD Leoventura.",
    mensagemOracao: "Olá! Gostaria de enviar um pedido de oração.",
    endereco: "",   // endereço completo. Se vazio, o Maps usa "Leoventura, Camacan – Bahia"
    mapsUrl: "https://maps.app.goo.gl/U5KgWhosFHEkmWYaA",    // opcional: link exato copiado do Google Maps (tem prioridade)
    email: ""
  },
  redes: {
    instagram: "https://www.instagram.com/ieadleoventura/",  // ex.: "https://www.instagram.com/usuario"
    youtube: "https://www.youtube.com/@ieadleoventura6764"     // ex.: "https://www.youtube.com/@canal"
  },
  departamentos: [
    // url vazio = aparece apenas como nome na seção institucional
    { nome: "UMADEL", descricao: "Departamento de jovens", url: "" }
    // { nome: "Nome do departamento", descricao: "Breve descrição", url: "https://..." }
  ],
  programacaoAviso: "Horários ainda não preenchidos. Atualize em js/config.js.",
  cultos: [
    // horario vazio aparece como "Horário a definir"
    { dia: "Terça-feira", nome: "Culto de Doutrina", horario: "18:30" },
    { dia: "Quinta-feira", nome: "Culto de Libertação", horario: "19:00" },
    { dia: "Domingo", nome: "Culto", horario: "19:00" }
  ],
  eventos: [
    // { data: "dd/mm", nome: "Nome do evento", detalhe: "Horário ou local" }
  ],
  institucional: {
    titulo: "Sobre a IEAD Leoventura",
    paragrafos: [
      "A IEAD Leoventura é uma igreja evangélica em Leoventura, Camacan – Bahia, dirigida pelo Pr. Magno Alves Mota.",
      "Esta página reúne em um só lugar os canais oficiais, os horários e os contatos da igreja."
      // Adicione aqui o texto oficial sobre história e propósito, quando desejar.
    ]
  }
};
