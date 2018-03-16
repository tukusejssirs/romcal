import moment from 'moment';
import _ from 'lodash';

import { Dates, Utils } from '../lib';
import { Titles, Types, LiturgicalColors } from '../constants';

let _holyWeek;
let _easterOctave;
let _annunciation;
let _holyWeekRange;
let _easterOctaveRange;
let _date;

let dates = year => {

  let _dates = [
    // jarosz: Created saintJozefSebastianPelczar
    {
      "key": "saintJozefSebastianPelczar",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 0, day: 19 }),
      "data": {}
    },
    {
      "key": "saintVincentPallottiPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 22 }),
      "data": {}
    },
    {
      "key": "blessedVincentLewoniukAndCompanionsMartyrsOfPratulin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 23 }),
      "data": {}
    },
    {
      "key": "blessedJerzyMatulewiczBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 27 }),
      "data": {}
    },
    // jarosz: Moved saintAngelaMerici to 29 Jan
    // According to official liturgical calendar for polish dioceses
    // http://www.kkbids.episkopat.pl/uploaded/KalendarzDiecezjiPolskich-2013-02-28_2.pdf
    // saint Angela Merici and blessed Bolesława Maria Lament may be celebrated in
    // Poland on Jan 29 as optional memorial, the date is different than in
    // general calendar because on Jan 27 we celebrate memorial of
    // blessed Jerzy Matulewicz, bishop.
    {
      "key": "blessedBoleslawaMariaLamentVirginAndSaintAngelaMericiVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 0, day: 29 }),
      "data": {}
    },
    {
      "key": "saintsCyrilMonkAndMethodiusBishop",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 1, day: 14 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE,
          "titles": [
            Titles.PATRON_OF_EUROPE
          ]
        }
      }
    },
    {
      "key": "saintCasimir",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 2, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    // jarosz: Moved saintAdalbert outside holy week and octave of Easter
    {
      "key": "saintAdalbertBishopAndMartyr",
      "type": Types[0],
      "moment": ( y => {
        
        _holyWeek = Dates.holyWeek( y );
        _easterOctave = Dates.octaveOfEaster( y );
        _annunciation = Dates.annunciation( y );
        _holyWeekRange = moment.range( _.head( _holyWeek ), _.last( _holyWeek ) );
        _easterOctaveRange = moment.range( _.head( _easterOctave ), _.last( _easterOctave ) );
        _date = moment.utc({ year: y, month: 3, day: 23 });

        // If the celebration lands anywhere between Holy Week to Divine Mercy Sunday (inclusive)
        // move it to the Monday after Divine Mercy Sunday
        if ( _holyWeekRange.contains( _date ) || _easterOctaveRange.contains( _date ) ) {
          // Ensure that the Monday after Divine Mercy Sunday is not Annunciation
          // if it is, move this celebration to the next day (Tuesday)
          // However, this condition will probably never happen
          var proposed =  _.last( _easterOctave ).add( 1, 'days' );
          if ( proposed.isSame( _annunciation ) ) {
            return _annunciation.add( 1, 'days' );
          }
          else {
            return proposed;
          }
        }
        else {
          return _date;
        }
      })(year),
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
    // jarosz: Created ourLadyQueenOfPoland on 3 May
    {
      "key": "ourLadyQueenOfPoland",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 4, day: 3 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyHelpOfChristians",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintFlorianMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 4 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintStanislausKazimierczykPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 5 }),
      "data": {}
    },
    {
      "key": "saintsPhilipAndJamesApostles",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 4, day: 6 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    // jarosz: Set saintAdalbert and saintStanislaus color to red
    {
      "key": "saintStanislausBishopAndMartyr",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 4, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED
        }
      }
    },
    {
      "key": "saintAndrewBobolaPriestAndMartyr",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 4, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintUrsulaLedochowskaVirgin",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 4, day: 29 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJohnSarkanderPriestAndMartyrSaintZdzislawa",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 4, day: 30 }),
      "data": {}
    },
    // jarosz: Created saintHedwigOfPoland on 8 Jun
    {
      "key": "saintHedwigOfPoland",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 8 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedBogumilBishop",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 10 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedAntoniNowowiejskiBishopAndCompanionsMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 12 }),
      "data": {}
    },
    {
      "key": "blessedMichaelKozalBishopAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 14 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedJolantaReligious",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 15 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintAlbertChmielowskiReligious",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 5, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintZygmuntGorazdowskiPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 5, day: 26 }),
      "data": {}
    },
    {
      "key": "saintOttoOfBambergBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 1 }),
      "data": {}
    },
    // jarosz: Moved saintMariaGoretti to 5 Jul
    {
      "key": "saintMariaGorettiVirginAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 5 }),
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
      "key": "blessedMariaTeresaLedochowskaVirgin",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 6 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJohnOfDuklaPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 8 }),
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
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintBrunoBonifaceOfQuerfurtBishopAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 12 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsAndrewZorardAndBenedictHermits",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 13 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    // jarosz: Moved saintHenry to 14 Jul
    {
      "key": "saintHenryBishopAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 14 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED,
          "titles": [
            Titles.MARTYR
          ]
        }
      }
    },
    // jarosz: Changed ourLadyOfMountCarmel to MEMORIAL
    {
      "key": "ourLadyOfMountCarmel",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 16 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintSimonOfLipnicaPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 18 }),
      "data": {}
    },
    {
      "key": "blessedCzeslawPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 20 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    // jarosz: Moved saintApollinaris to 21 Jul
    {
      "key": "saintApollinaris",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 21 }),
      "data": {}
    },
    {
      "key": "saintBridgetOfSweedenReligious",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 6, day: 23 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintKingaVirgin",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 6, day: 24 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    // jarosz: Moved saintCharbelMakhloufPriestAndHermit to 29 Jul
    {
      "key": "saintCharbelMakhloufPriestAndHermit",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 6, day: 28 }),
      "data": {}
    },
    {
      "key": "blessedEdmundBojanowski",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 7, day: 7 }),
      "data": {}
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
      "key": "saintHyacinthPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 7, day: 17 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "ourLadyOfCzestochowa",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 7, day: 26 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedBronislawaVirgin",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 1 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedMariaStellaAndCompanionsVirginsAndMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 4 }),
      "data": {}
    },
    {
      "key": "saintMelchiorGrodzieckiPriestAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 8, day: 7 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedAnielaSalawaVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 9 }),
      "data": {}
    },
    // jarosz: Moved saintDenisAndCoOrSaintJohnLeonardi to 10 Sep
    {
      "key": "saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 10 }),
      "data": {}
    },
    {
      "key": "saintZygmuntSzczesnyFelinskiBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 17 }),
      "data": {}
    },
    {
      "key": "saintStanislausKostkaReligious",
      "type": Types[4],
      "moment": moment.utc({ year: year, month: 8, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedWladyslawOfGielniowPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 25 }),
      "data": {}
    },
    // jarosz: Split saintRuizAndCo and saintWenceslaus (they are a single celebration in general.js)
    {
      "key": "saintsLawrenceRuizAndCompanionsMartyrs",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 8, day: 26 }),
      "data": {}
    },
    {
      "key": "saintWenceslausMartyr",
      "type": Types[0],
      "moment": moment.utc({ year: year, month: 8, day: 28 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintFaustinaKowalskaVirginAndReligious",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 5 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedVincentKadlubekBishop",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 9 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedMaryAngelaTruszkowskaVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 10 }),
      "data": {}
    },
    {
      "key": "blessedJohnBeyzymPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 12 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedHonoratKozminskiPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 13 }),
      "data": {}
    },
    // jarosz: Split saintHedwig and saint MargaretMaryAlacoque and rename saintHedwig to saintHedwigOfSilesia, since it's less ambiguous
    {
      "key": "saintMargaretMaryAlacoque",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 14 }),
      "data": {}
    },
    {
      "key": "saintHedwigOfSilesia",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 16 }),
      "data": {}
    },
    // jarosz: Removed saintJohnOfKanty duplicate entry saintJohnOfKety and moved to 20 Oct
    {
      "key": "saintJohnOfKantyPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 20 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedJakubStrzemieBishop",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 21 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJohnPaulIiPope",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 9, day: 22 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintJosefBilczewskiBishop",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 9, day: 23 }),
      "data": {}
    },
    // jarosz: Created Dedication of a particular church: solemnity on last Sunday of October
    {
      "key": "dedicationOfAParticularChurch",
      "type": Types[0],
      "moment": moment({ year: 2015, month: 9 }).endOf('month').startOf('week'),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintsBenedyktJanMateuszIsaakAndKrystynMartyrs",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 13 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.RED
        }
      }
    },
    {
      "key": "blessedKarolinaKozkownaVirginAndMartyr",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 18 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedSalomeVirgin",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 19 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "saintRafalKalinowskiPriest",
      "type": Types[5],
      "moment": moment.utc({ year: year, month: 10, day: 20 }),
      "data": {
        "meta": {
          "liturgicalColor": LiturgicalColors.WHITE
        }
      }
    },
    {
      "key": "blessedMaryOfJesusTheGoodShepherdVirgin",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 10, day: 25 }),
      "data": {}
    },
    // jarosz: Moved blessedRafalChylinski to 2 Dec
    {
      "key": "blessedRafalChylinskiPriest",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 2 }),
      "data": {}
    },
    {
      "key": "saintBarbaraVirginAndMartyr",
      "type": Types[6],
      "moment": moment.utc({ year: year, month: 11, day: 4 }),
      "data": {}
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
