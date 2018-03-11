import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {
  
  let _dates = [
    {
      "key": "blessedMarcelinaDarowskaReligious",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 5 }),
      "data": {}
    },
    {
      "key": "blessedBronislawMarkiewiczPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 30 }),
      "data": {}
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
      "key": "maryMotherOfTheChurch",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 5, day: 13 }),
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
      "key": "saintAndrewBobolaPriestAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 16 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintJohnNepomucenePriestAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 21 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintAlbertChmielowskiReligious",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 17 }),
      "data": {}
    },
    {
      "key": "saintZygmuntGorazdowskiPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 26 }),
      "data": {}
    },
    {
      "key": "saintJohnOfDuklaPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 8 }),
      "data": {}
    },
    {
      "key": "saintHedwigOfPoland",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 18 }),
      "data": {}
    },
    {
      "key": "saintOlga",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 24 }),
      "data": {}
    },
    {
      "key": "saintVladimirTheGreat",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 28 }),
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
      "key": "saintBirgittaReligious",
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
      "key": "ourLadyOfCzestochowa",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 26 }),
      "data": {}
    },
    {
      "key": "blessedWladyslawBladzinskiPriestAndCompanionsMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 9 }),
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
      "key": "saintStanislausKostkaReligious",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJozefBilczewskiBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 23 }),
      "data": {}
    },
    {
      "key": "saintJohnPaulIiPope",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 22 }),
      "data": {}
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates 
};
