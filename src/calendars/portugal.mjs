import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {
  
  let _dates = [
    {
      "key": "blessedGoncaloDeAmarantePriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 11 }),
      "data": {}
    },
    {
      "key": "saintJohnDeBritoPriestAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 1, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED,
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "theFiveWoundsOfTheLord",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 1, day: 7 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 1, day: 14 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintTheotoniusPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 1, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedJacintaAndFranciscoMarto",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 1, day: 20 }),
      "data": {}
    },
    {
      "key": "saintJohnOfGodPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 2, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 3, day: 29 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [
            Titles.PATRON_OF_EUROPE,
            Titles.DOCTOR_OF_THE_CHURCH
          ]
        }
      }
    },
    {
      "key": "blessedJoanOfPortugalVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 12 }),
      "data": {}
    },
    {
      "key": "ourLadyOfFatima",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 4, day: 13 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "guardianAngelOfPortugal",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 10 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintAnthonyOfLisbonPriestAndDoctorOfTheChurch",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 5, day: 13 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [
            Titles.DOCTOR_OF_THE_CHURCH
          ]
        }
      }
    },
    {
      "key": "blessedSanchaAndMafaldaVirginsOrBlessedTheresaOfPOrtugalReligious",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 20 }),
      "data": {}
    },
    {
      "key": "saintElizabethOfPortugal",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBenedictOfNursiaAbbot",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 11 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "blessedInacioDeAzevedoPriestAndCompanionsMartyrs",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedBartholomewOfTheMartyrsBishop",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBrigittaReligious",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 7, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED,
          "titles": [
            Titles.MARTYR,
            Titles.PATRON_OF_EUROPE
          ]
        }
      }
    },
    {
      "key": "saintBeatriceOfSilvaVirgin",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 1 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriestBlessedJohnNewmanBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 9 }),
      "data": {}
    },
    {
      "key": "blessedGoncaloDeLagosPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 27 }),
      "data": {}
    },
    {
      "key": "saintNunoDeSantaMaria",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 6 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintFructuosusSaintMartinOfDumeAndSaintGeraldBishops",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 11, day: 5 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates 
};
