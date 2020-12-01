let initialState = {
  noticias: [
    {
      id: 1,
      titulo: "Decuento en voleteria del 60%",
      contenido:
        "Hay un descuento en boletas tanto para jovenes, como para adultos del 60% esta semana. Aprovecha!",
      imagen:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.du8VBWmQh0YME0rqxPPbNQHaDt%26pid%3DApi&f=1",
    },
    {
      id: 2,
      titulo: "Canguro tuvieron hijos",
      contenido:
        "Se han confirmado el nacimiento de 2 canguros, cada vez se hace una familia mas grande!",
      imagen:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.statementgames.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fbreaking-news.jpg&f=1&nofb=1",
    },
    {
      id: 3,
      titulo: "Prevenciones COVID-19",
      contenido: "Ahora el zoologico ha tomado prevenciones contra el COVID-19",
      imagen:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shrm.org%2Fimage%2Fupload%2Fc_crop%2Ch_617%2Cw_1099%2Cx_0%2Cy_0%2Fc_fit%2Cf_auto%2Cq_auto%2Cw_767%2Fv1%2FLegal%2520and%2520Compliance%2Fcoronavirus4m_utz5jt%3Fdatabtoa%3DeyIxNng5Ijp7IngiOjAsInkiOjAsIngyIjoxMDk5LCJ5MiI6NjE3LCJ3IjoxMDk5LCJoIjo2MTd9fQ%253D%253D&f=1&nofb=1",
    },
  ],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        noticias: state.noticias,
      };
    default:
      return {
        ...state,
        noticias: state.noticias,
      };
  }
};

export default newsReducer;
