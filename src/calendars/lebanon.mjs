import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {

  let _dates = [
    {
      "key": "saintBarbaraVirginAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 11, day: 4 }),
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
      "key": "saintNicholasBishop",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 11, day: 6 }),
      "data": {}
    },
    {
      "key": "saintCharbelMakhloufPriestAndHermit",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 24 }),
      "data": {}
    },
    {
      "key": "saintMaroun",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 1, day: 9 }),
      "data": {}
    },
    {
      "key": "saintRafqaRebeccaVirgin",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 2, day: 23 }),
      "data": {}
    },
    {
      "key": "saintGeorgeMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 3, day: 23 }),
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
      "key": "ourLadyOfLebanon",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 4, day: 1 }),
      "data": {}
    }
  ];

  // Get localized celebration names
  return Utils.localizeDates(_dates);
};

export {
  dates 
};
