import {
  faInstagram,
  faTwitch,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const strings = {
  components: {
    logo: {
      logoAlt: "Logo do Codechella",
    },
    card: {
      imageRenderer: {
        summerAlt:
          "A imagem apresentada no tema 'summer' apresenta pessoas cantando e dançando em um festival de música",
        borealAlt:
          "A imagem apresentada no tema 'boreal' apresenta uma banda tocando no palco de um festival de música",
      },
    },
  },
  pages: {
    header: {
      navigationMenu: [
        "A experiência",
        "Mapa de Setores",
        "Informações",
        "Ingresso",
      ],
    },
    home: {
      hero: {
        line1: "Boas-vindas ao",
        line2: "#CodeChella2023!",
      },
      dates: {
        title: "< 11 e 12 de Março > Aluródromo de São Paulo",
        text: "Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!",
        button: "Comprar ingresso!",
      },
      lineUp: {
        heading: "/Line-Up/",
        dates: {
          firstDate: "SÁBADO <11/03>",
          secondDate: "DOMINGO <12/03>",
        },
        lineUpCard: {
          firstList: {
            row1: "System of a DOM",
            row2: [
              "Python Maiden",
              "Apollo Client 2001",
              "Bon Java",
              "NickCallback",
            ],
            row3: [
              "Linkin Promises",
              "Fullstack Fighters",
              "Papa React",
              "Angular in Chains",
            ],
            row4: ["Agnostic Front-end", "SlipkNode", "Pink Flutter", "Kiss"],
          },
          secondList: {
            row1: "Lana Del Ploy",
            row2: [
              "Dua Lib",
              "The Backnd",
              "CSS Styles",
              "DJ Query",
              "ArrayAna Grande",
            ],
            row3: [
              "Miley Cypress",
              "The Bootstrap Boys",
              "Json Derulo",
              "CloudPlay",
              "Dev Lovato",
            ],
            row4: ["Kylie MiLOG", "Jenkins Brothers", "Rubycat Dolls"],
          },
        },
      },
    },
    footer: {
      footerLinks: {
        heading: "Acesse nossas redes:",
        socialMediaArr: [
          { icon: faWhatsapp, url: "https://wa.me/5543999702430" },
          { icon: faTwitch, url: "https://meu-portfolio-dusky.vercel.app/" },
          { icon: faInstagram, url: "https://www.instagram.com/kellysondias/" },
          { icon: faTwitter, url: "https://twitter.com/kellyson_tech" },
        ],
      },
      credits: {
        url: "https://meu-portfolio-dusky.vercel.app/",
        text: {
          dev: "Kellyson Dias.",
          line1: "Desenvolvido por ",
          line2: "Projeto fictício sem fins comerciais.",
        },
      },
    },
  },
};

export default strings;
