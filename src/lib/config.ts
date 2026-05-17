export const businessConfig = {
  // Identity
  name: "Ovosodo",
  category: "restaurant",
  tagline: "Cucina autentica, ingredienti freschi, momenti indimenticabili.",
  city: "Milano",

  // Contact
  address: "Via Raffaele Lambruschini, 29, 20158 Milano MI",
  phone: "+39 388 474 4551",
  email: "",
  bookingUrl: "",

  // Online presence
  googleMapsUrl: "https://maps.google.com/?q=Via%20Raffaele%20Lambruschini%2C%2029%2C%2020158%20Milano%20MI",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d10!3d45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzM2LjAiTiA5wrAxMScyNC4wIkU!5e0!3m2!1sit!2sit!4v1600000000000!5m2!1sit!2sit&q=Via%20Raffaele%20Lambruschini%2C%2029%2C%2020158%20Milano%20MI",

  // Visuals
  heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
  storyImage: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",

  // Story
  storyTitle: "La Nostra Storia",
  storyText:
    "La nostra cucina nasce dal rispetto per la tradizione e la ricerca della qualità. A Milano, selezioniamo ogni giorno ingredienti freschi e di stagione per offrire piatti che raccontano la vera essenza del territorio. Ogni piatto è preparato con cura, come a casa.",
  yearsInBusiness: 7,
  reviewCount: 92,
  rating: 4.5,

  // Specialties / Services
  specialtiesIntro:
    "Offriamo una selezione curata di servizi progettati con cura e competenza.",
  specialties: [
    {
      icon: "🐟",
      title: "Secondi di Pesce",
      description: "Pesce fresco del giorno, preparato secondo la tradizione locale.",
    },
    {
      icon: "🥩",
      title: "Secondi di Carne",
      description: "Carni selezionate, cotte alla perfezione con contorni di stagione.",
    },
    {
      icon: "🍷",
      title: "Carta dei Vini",
      description: "Selezione di vini locali e nazionali, perfetti per ogni piatto.",
    },
    {
      icon: "🍕",
      title: "Pizze e Focacce",
      description: "Impasto a lunga lievitazione, cotto in forno a legna.",
    }
  ],

  // Reviews
  reviews: [
    {
      author: "Stefano B.",
      date: "1 settimana fa",
      stars: 5,
      text: "Sono rimasto davvero colpito dalla qualità del servizio. Professionalità e simpatia al top.",
    },
    {
      author: "Sara D.",
      date: "2 mesi fa",
      stars: 5,
      text: "Esperienza fantastica! Il team è stato professionale e il risultato ha superato le mie aspettative. Tornerò sicuramente.",
    },
    {
      author: "Marco R.",
      date: "2 mesi fa",
      stars: 5,
      text: "Finalmente ho trovato un posto di fiducia a {city}. Consiglio a tutti gli amici.",
    },
    {
      author: "Ilaria K.",
      date: "1 mese fa",
      stars: 4,
      text: "Servizio molto buono nel complesso. Personale cordiale e professionale. Piccoli miglioramenti possibili ma niente di grave.",
    }
  ],

  // Social Media
  social: {
    instagram: "",
    facebook: "https://www.facebook.com/ovobovisa/",
  },

  // Hours
  hours: [
    "Lun – Ven: 9:00 – 19:00",
    "Sabato: 10:00 – 18:00",
    "Domenica: Chiuso"
  ],
};
