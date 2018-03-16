import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let dates = year => {
  
  let _dates = [
    {
      "key": "mostHolyNameOfJesusOrOurLadyOfBethlehem",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 3 }),
      "data": {}
    },
    {
      "key": "blessedMariaDoloresRodriguezSopenaVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 10 }),
      "data": {}
    },
    {
      "key": "blessedCarlosManuelRodriguez",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 4 }),
      "data": {}
    },
    {
      "key": "ourLadyOfMountCarmel",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintTeresaOfJesusJornetEIbarsVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 26 }),
      "data": {}
    },
    {
      "key": "saintRoseOfLima",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 7, day: 30 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedsCarlosSpinolaAndJeronimoDeAngelisPriestsAndMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 10 }),
      "data": {
        "meta": {
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    {
      "key": "saintSoledadTorresAcostaVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 11 }),
      "data": {}
    },
    {
      "key": "ourLadyMotherOfDivineProvidencePatronessOfPuertoRico",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 10, day: 19 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyOfGuadalupe",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 11, day: 12 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "maryMotherOfTheChurch",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 13 }),
      "data": {}
    },
    {
      "key": "ourLordJesusChristTheEternalHighPriest",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 5, day: 16 }),
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
