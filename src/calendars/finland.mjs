import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintHenryBishopAndMartyr",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 0, day: 19 }),
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
      "key": "saintEricIxMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedHemmingBishop",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 22 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintUrsulaLedochowskaVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 29 }),
      "data": {}
    },
    {
      "key": "blessedElisabethHesselbaldVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 4 }),
      "data": {}
    },
    {
      "key": "saintJosemariaEscrivaDeBalaguerPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 26 }),
      "data": {}
    },
    {
      "key": "saintCanuteMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 10 }),
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
      "key": "saintThorlacBishop",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 20 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBridgetOfSwedenReligious",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [ Titles.PATRON_OF_EUROPE ]
        }
      }
    },
    {
      "key": "saintOlafIiMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 29 }),
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
      "key": "blessedNicolasStenoBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 25 }),
      "data": {}
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates
};
