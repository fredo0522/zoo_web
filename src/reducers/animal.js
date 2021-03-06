let initialState = {
  animal: {},
  animals: [
    {
      id: 1,
      name: "León",
      description:
        "De todos los felinos del planeta, son los únicos que viven en familia.",
      bg_description:
        "De todos los felinos del planeta, son los únicos que viven en familia. Cuando llega el momento de buscar alimento las hembras adultas toman la iniciativa, y sólo si la presa es muy grande, el macho suspenderá repentimanente su descanso para sumarse a la cacería. Las crías aprenden poco a poco jugando entre ellas y empiezan a participar de la búsqueda de alimento cuando cumplen más de un año. Son verdaderos amantes del descanso, en cada familia por una hora de actividad se garantizan diez horas de pausa.",
      img: "https://www.zoologicodecali.com.co/images/zooanimalesapp/leonh.jpg",
      bg_img:
        "http://4.bp.blogspot.com/-xJxeP-SiSSQ/UWk0iUK-SUI/AAAAAAAAAFs/XeF6ccjodcQ/s1600/Lion-King-Of-Jungle.jpg",
    },
    {
      id: 2,
      name: "Zorro Cañero",
      description:
        "Detrás de su amigable apariencia hay un astuto y recursivo animal que no se vara cuando de buscar alimento se trata.",
      bg_description:
        "Detrás de su amigable apariencia hay un astuto y recursivo animal que no se vara cuando de buscar alimento se trata. Si este abunda escoge sólo mejor, pero si escasea, no tiene problema en aventurarse a recorrer grandes distancias hasta encontrar el menú que saciará su hambre. Le encantan los roedores, los cangrejos, las ranas, los reptiles, las aves, las tortugas e incluso los insectos; pero si encuentra huevos, semillas o una que otra fruta silvestre, no dudará en hacerlo parte del almuerzo.",
      img:
        "https://www.zoologicodecali.com.co/images/zooanimalesapp/zorrocaeroh.jpg",
      bg_img: "https://i.pinimg.com/originals/38/09/51/3809511eecc6cee095d0ba447d88680d.jpg",
    },
    {
      id: 3,
      name: "Jaguar",
      description:
        "Es cierto que el león es rey, pero no de la selva, pues habita en las praderas y sabanas africanas.",
      bg_description:
        "Es cierto que el león es rey, pero no de la selva, pues habita en las praderas y sabanas africanas. El jaguar en cambio, si es dueño y señor de las selvas americanas y  se ha adaptado perfectamente a ellas, sus manchas le permiten camuflarse entre las sombras y los rayos de sol que penetran las copas de los árboles. Es un ágil trepador y tiene una de las mordidas más poderosas del reino animal, con la que puede cazar tatabros, tapires, venados y caimanes.",
      img:
        "https://www.zoologicodecali.com.co/images/zooanimalesapp/jaguarh.jpg",
      bg_img:
        "http://weknowyourdreams.com/images/jaguar/jaguar-01.jpg",
    },
    {
      id: 4,
      name: "Nutria Gigante",
      description:
        "En la mitología Makuna, las nutrias antes eran gente como nosotros, que aprendieron a vivir en grupos, a comunicarse y a cocinar los alimentos...",
      bg_description:
        "En la mitología Makuna, las nutrias antes eran gente como nosotros, que aprendieron a vivir en grupos, a comunicarse y a cocinar los alimentos. Pero alguien les robó el fuego y se vieron obligadas a regresar a las aguas y comer peces crudos. Aunque perdieron el dominio de las brasas, aún guardan toda la sabiduría para cuidar la vida, en las selvas, ríos, lagos y lagunas de la Orinoquía y la Amazonía.",
      img:
        "https://www.zoologicodecali.com.co/images/zooanimalesapp/nutriah.jpg",
      bg_img:
        "http://3.bp.blogspot.com/-jSsBrGMrrPI/VhM8SDWVwcI/AAAAAAAA3K8/Fq0L3QZUVeU/s1600/NUTRIA%2BGIGANTE%2BDEL%2BAMAZONAS%2B2.JPG",
    },
    {
      id: 5,
      name: "Oso Pardo",
      description:
        "Este gigante peludo ha desarrollado un finísimo sentido del olfato, nada ni nadie se escapa de su poderosa nariz.",
      bg_description:
        'Este gigante peludo ha desarrollado un finísimo sentido del olfato, nada ni nadie se escapa de su poderosa nariz. Puede detectar a kilómetros cualquier fruto o animal que le sirva de alimento, e incluso una que otra hembra coqueta que se encuentre en celo. Cuando llega el invierno suelen entrar en cuevas para "desconectarse" del mundo y dormir plácidamente, alimentados únicamente por las extraordinarias reservas de grasa que guardan bajo la piel.',
      img:
        "https://www.zoologicodecali.com.co/images/zooanimalesapp/osopardoh.jpg",
      bg_img:
        "http://1.bp.blogspot.com/-0pDivEgq2Ww/UZPHCDSoEUI/AAAAAAAAADI/V1YK4ItM-88/s1600/P1130074.JPG",
    },
    {
      id: 6,
      name: "Anaconda",
      description:
        "Es la reina de los grandes ríos y humedales de las llanuras del Orinoco y las selvas del gran Amazonas.",
      bg_description:
        "Es la reina de los grandes ríos y humedales de las llanuras del Orinoco y las selvas del gran Amazonas, y la serpiente que mayor peso alcanza de todas las que habitan el planeta. Su gran tamaño no es excusa para ser la más veloz y ágil nadadora de las aguas que frecuenta. Trata de evitar los ríos correntosos, y le apasionan las aguas quietas y lentas, donde permanece la mayor parte del tiempo sumergida, asomando sólo la nariz y los ojos, para pasar desapercibida sin importar sus dimensiones. Como no es venenosa, cuando busca alimento debe hacer uso del abrazo más poderoso que se conoce en la selva, después de algunos minutos hasta el más fuerte se rinde ante el dominio de esta mega serpiente.",
      img:
        "https://www.zoologicodecali.com.co/images/zooanimalesapp/anacondah.jpg",
      bg_img:
        "https://www.wrs.com.sg/content/dam/wrs/river-safari/animals/signpost/1x1/green-anaconda-1X1.jpg",
    },
    {
      id: 7,
      name: "Puma",
      description:
        "Nadie como él para adaptarse a cualquier territorio, sean bosques densos o desiertos, llanuras o montañas, zonas frías o cálidas.",
      bg_description:
        "Nadie como él para adaptarse a cualquier territorio, sean bosques densos o desiertos, llanuras o montañas, zonas frías o cálidas. Habita con destreza en toda América, desde Canadá hasta los Andes del extremo sur. Para vivir en tantos lugares tuvo que aprender a alimentarse casi de cualquier otro animal, desde pequeños insectos hasta grandes ciervos. Domina perfectamente el arte de la emboscada, cuando el hambre aparece, se esconde con sigilo y aguarda pacientemente hasta que llegua el momento adecuado para dar un poderoso salto y clavar con precisión sus colmillos en el cuello de la presa.",
      img: "https://www.zoologicodecali.com.co/images/zooanimalesapp/pumah.jpg",
      bg_img:
        "https://cdn.britannica.com/20/93520-050-3E663489/Puma.jpg",
    },
    {
      id: 8,
      name: "Aguila Real",
      description:
        "Poseen una excelente visión binocular que les permite calcular con extraordinaria precisión la ubicación de conejos, roedores y serpientes.",
      bg_description:
        "De repente dos aves se apoderan del cielo, sobrevuelan en círculos lenta y pacientemente sobre la escarpada cordillera, se trata de una pareja de águilas expertas en el arte de cazar. Poseen una excelente visión binocular que les permite calcular con extraordinaria precisión la ubicación de conejos, roedores y serpientes. Dicen quienes las han visto cazar que, cuando se trata de capturar alimento, nada se les escapa.",
      img:
        "https://www.zoologicodecali.com.co/images/zooanimalesapp/aguilarealh.jpg",
      bg_img:
        "https://1.bp.blogspot.com/-saQjmlnvxu4/WK_yZXTa6II/AAAAAAAAaH4/meswXGT-LCMye4ballS1PpjPkLa4B29NACLcB/s1600/aguilareal1sm.JPG",
    },
    {
      id: 9,
      name: "Venado de Cola Blanca",
      description:
        "Saben que su supervivencia depende de la habilidad para encontrar alimento y detectar a tiempo algún depredador que aceche en las cercanías.",
      bg_description:
        "Saben que su supervivencia depende de la habilidad para encontrar alimento y detectar a tiempo algún depredador que aceche en las cercanías. Cuando identifican un peligro, activan tres señales de alarma: resoplan vigorozamente, golpean fuertemente el suelo con sus poderosas patas y levantan la cola mostrando y batiendo la mancha blanca que la cubre y que, durante la huída, servirá de guía a los otros miembros del grupo que siguen al listo venado que alertó del inminente peligro.",
      img:
        "https://www.zoologicodecali.com.co/images/zooanimalesapp/venadoh.jpg",
      bg_img:
        "https://4.bp.blogspot.com/-6tNYmv8dRFk/Vy_HoTt9GdI/AAAAAAAAAt8/0-2Tdh8dRBsA-ldEGfXx13pP81vLWciHACLcB/s1600/Foto-3.jpg",
    },
  ],
  filtered: [],
};

const getClearName = function (name, tenerEnhe = false) {
  let clearName = name.toUpperCase();
  for (let i = 0; i < clearName.length; i++) {
    if (clearName[i] !== "Ñ" || tenerEnhe) {
      clearName =
        clearName.substring(0, i) +
        clearName[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "") +
        clearName.substring(i + 1, clearName.length);
    }
  }
  return clearName;
};

const animalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIMAL":
      return {
        ...state,
        animal: action.payload.animal,
      };
    case "SET_ANIMAL_BY_NAME":
      let name = getClearName(action.payload.name);
      for (let i = 0; i < state.animals.length; i++) {
        let currentAnimalName = getClearName(state.animals[i].name, true);
        if (name === currentAnimalName) {
          return {
            ...state,
            animal: state.animals[i],
          };
        }
      }
      return {
        ...state,
        animal: {},
      };
    case "FILTER_ANIMALS":
      let text = action.payload.text.toUpperCase().trim();
      if (text === "") {
        return {
          ...state,
          filtered: state.animals,
        };
      } else {
        let res = state.animals.filter((animal) =>
          getClearName(animal.name).includes(text)
        );
        return {
          ...state,
          filtered: res,
        };
      }
    default:
      return state;
  }
};

export default animalReducer;
