import { Locale } from '../types/locale';

export const locale: Locale = {
  id: 'el',

  seasons: {
    advent: {
      season: 'Περίοδος της Παρουσίας',
      weekday: '$t(weekdays:{{dow}}) της $t(ordinals:{{week}}, { "context": "abbreviation" }) Εβδομάδας της Παρουσίας',
      sunday: '$t(ordinals:{{week}}) Κυριακή της Παρουσίας',
      privileged_weekday: '{{day}} $t(months:11)',
    },

    christmas_time: {
      season: 'Περίοδος των Χριστουγέννων',
      day: '$t(weekdays:{{dow}}) των Χριστουγέννων',
      octave: '{{count}}η ημέρα της Ογδοάδας των Χριστουγέννων',
      second_sunday_after_christmas: 'Δεύτερη Κυριακή μετά τα Χριστούγεννα',
      before_epiphany: '{{day}} $t(months:0)',
      after_epiphany: '$t(weekdays:{{dow}}) μετά την πανήγυρη των Θεοφανίων',
    },

    ordinary_time: {
      season: 'Κοινή περίοδος του έτους',
      weekday:
        '$t(weekdays:{{dow}}) της $t(ordinals:{{week}}, { "context": "genitive" }) της κοινής περίοδου του έτους',  // TODO: My spellchecker suggests to use either `περίοδο` or `περίοδοι`. It could be wrong, however, I want to verify it.
      sunday: '$t(ordinals:{{week}}) Κυριακή της κοινής περίοδου του έτους',  // TODO: My spellchecker suggests to use either `περίοδο` or `περίοδοι`. It could be wrong, however, I want to verify it.
    },

    lent: {
      season: 'Περίοδος της αγίας Τεσσαρακοστής',
      weekday:
        '$t(weekdays:{{dow}}) της $t(ordinals:{{week}}, { "context": "abbreviation" }) Εβδομάδας της Τεσσαρακοστής',
      sunday: '$t(ordinals:{{week}}) Κυριακή της Τεσσαρακοστής',
      day_after_ash_wed: '$t(weekdays:{{dow}}) των Τεφρών',
      holy_week_day: 'Μεγάλη $t(weekdays:{{dow}})',
    },

    paschal_triduum: { season: 'Πασχαλινό τριήμερο' },

    easter_time: {
      season: 'Περίοδος του Πάσχα',  // TODO: My spell-checker suggests to change this to use `Περίοδος` (note the `ί`) and `Πάσχα` (note the `ά`). It could be wrong, however, I want to verify it.
      weekday: '$t(weekdays:{{dow}}) της $t(ordinals:{{week}}, { "context": "abbreviation" }) Εβδομάδας του Πάσχα',
      sunday: '$t(ordinals:{{week}}) Κυριακή του Πάσχα',
      octave: '$t(weekdays:{{dow}}) της Διακαινησίμου',  // TODO: My spell-checker suggests to change this to use `Διακαινήσιμος` (note the transfer of the accent). It could be wrong, however, I want to verify it.
    },
  },

  ranks: {
    solemnity: 'πανήγυρη',  // src: mr_el_2006_ed3
    feast: 'εορτή',  // src: mr_el_2006_ed3
    memorial: 'μνήμη',  // src: mr_el_2006_ed3
    sunday: 'Κυριακή',
    weekday: 'καθημερινή',
  },

  cycles: {
    proper_of_time: 'Ιδιαίτερο του περιόδου',
    proper_of_saints: 'Ιδιαίτερο των αγίων',
    sunday_year_a: 'Κύκλος Α΄',
    sunday_year_b: 'Κύκλος Β΄',
    sunday_year_c: 'Κύκλος Γ΄',
    weekday_year_1: 'Κύκλος Α΄',
    weekday_year_2: 'Κύκλος Β΄',
    psalter_week_1: 'Εβδομάδα Αʹ',
    psalter_week_2: 'Εβδομάδα Β΄',
    psalter_week_3: 'Εβδομάδα Γ΄',
    psalter_week_4: 'Εβδομάδα Δ΄',
  },

  weekdays: {
    0: 'Κυριακή',
    1: 'Δευτέρα',
    2: 'Τρίτη',
    3: 'Τετάρτη',
    4: 'Πέμπτη',
    5: 'Παρασκευή',
    6: 'Σάββατο',
  },

  months: {
    0: 'Ιανουάριου',  // TODO: [Wiktionary](https://en.wiktionary.org/wiki/%CE%99%CE%B1%CE%BD%CE%BF%CF%85%CE%B1%CF%81%CE%AF%CE%BF%CF%85) suggests to use `Ιανουαρίου` as Genitive. I presume we need Genitive, however, we could consider to add Nominative too. Also compare this to `Κυριακή μετά τις 6 Ιανουαρίου` which can be found int `mr_el_2006_ed3` in the Calendar (Γενικο Πωμαϊκο εορτολογιο Ιανουαριος) in the bottom of the page.
    1: 'Φεβρουάριου',  // TODO; [Wiktionary](https://en.wiktionary.org/wiki/%CE%A6%CE%B5%CE%B2%CF%81%CE%BF%CF%85%CE%B1%CF%81%CE%AF%CE%BF%CF%85#Greek) suggests to use `Φεβρουαρίου` as Genitive.
    2: 'Μάρτιου',  // TODO: [Wiktionary](https://en.wiktionary.org/wiki/%CE%9C%CE%B1%CF%81%CF%84%CE%AF%CE%BF%CF%85#Greek) suggests to us `Μαρτίου` as Genitive.
    3: 'Απρίλιου',  // TODO: [Wiktionary](https://en.wiktionary.org/wiki/%CE%91%CF%80%CF%81%CE%B9%CE%BB%CE%AF%CE%BF%CF%85#Greek) suggests to use `Απριλίου` as Genitive.
    4: 'Μάιου',  // TODO: [Wiktionary](https://en.wiktionary.org/wiki/%CE%9C%CE%B1%CE%90%CE%BF%CF%85#Greek) suggests to use `Μαΐου` as Genitive.
    5: 'Ιούνιου',  // TODO: [Wiktionary](https://en.wiktionary.org/wiki/%CE%99%CE%BF%CF%85%CE%BD%CE%AF%CE%BF%CF%85#Greek) suggests to use `Ιουνίου` as Genitive.
    6: 'Ιούλιου',  // TODO: [Wiktionary}(https://en.wiktionary.org/wiki/%CE%99%CE%BF%CF%85%CE%BB%CE%AF%CE%BF%CF%85#Greek) suggests to use `Ιουλίου` as Genitive.
    7: 'Αύγουστου',  // TODO: [Wiktionary](https://en.wiktionary.org/wiki/%CE%91%CF%85%CE%B3%CE%BF%CF%8D%CF%83%CF%84%CE%BF%CF%85#Greek) suggests to use `Αυγούστου` as Genitive.
    8: 'Σεπτέμβριου',  // TODO: [Wiktionary](https://en.wiktionary.org/wiki/%CE%A3%CE%B5%CF%80%CF%84%CE%B5%CE%BC%CE%B2%CF%81%CE%AF%CE%BF%CF%85#Greek) suggests to use `Σεπτεμβρίου` as Genitive.
    9: 'Οκτώβριου',  // TODO: [Wiktionary](https://en.wiktionary.org/wiki/%CE%9F%CE%BA%CF%84%CF%89%CE%B2%CF%81%CE%AF%CE%BF%CF%85#Greek) suggests to use `Οκτωβρίου` as Genitive.
    10: 'Νοέμβριου',  // TODO: [Wiktionary](https://en.wiktionary.org/wiki/%CE%9D%CE%BF%CE%B5%CE%BC%CE%B2%CF%81%CE%AF%CE%BF%CF%85#Greek) suggests to use `Νοεμβρίου` as Genitive.
    11: 'Δεκέμβριου',  // TODO: [Wiktionary](https://en.wiktionary.org/wiki/%CE%94%CE%B5%CE%BA%CE%B5%CE%BC%CE%B2%CF%81%CE%AF%CE%BF%CF%85#Greek) suggests to use `Δεκεμβρίου` as Genitive.
  },

  ordinals: {
    '1': 'πρώτη',
    '2': 'δεύτερη',
    '3': 'τρίτη',
    '4': 'τέταρτη',
    '5': 'πέμπτη',
    '6': 'έκτη',
    '7': 'έβδομη',
    '8': 'όγδοη',
    '9': 'ένατη',
    '10': 'δέκατη',
    '11': 'ενδέκατη',
    '12': 'δωδέκατη',
    '13': 'δέκατη τρίτη',
    '14': 'δέκατη τέταρτη',
    '15': 'δέκατη πέμπτη',
    '16': 'δέκατη έκτη',
    '17': 'δέκατη έβδομη',
    '18': 'δέκατη όγδοη',
    '19': 'δέκατη ένατη',
    '20': 'εικοστή',
    '21': 'εικοστή πρώτη',
    '22': 'εικοστή δεύτερη',
    '23': 'εικοστή τρίτη',
    '24': 'εικοστή τέταρτη',
    '25': 'εικοστή πέμπτη',
    '26': 'εικοστή έκτη',
    '27': 'εικοστή έβδομη',
    '28': 'εικοστή όγδοη',
    '29': 'εικοστή ένατη',
    '30': 'τριακοστή',
    '31': 'τριακοστή πρώτη',
    '32': 'τριακοστή δεύτερη',
    '33': 'τριακοστή τρίτη',
    '34': 'τριακοστή τέταρτη',
    '1_genitive': 'πρώτης',
    '2_genitive': 'δεύτερης',
    '3_genitive': 'τρίτης',
    '4_genitive': 'τέταρτης',
    '5_genitive': 'πέμπτης',
    '6_genitive': 'έκτης',
    '7_genitive': 'έβδομης',
    '8_genitive': 'όγδοης',
    '9_genitive': 'ένατης',
    '10_genitive': 'δέκατης',
    '11_genitive': 'ενδέκατης',
    '12_genitive': 'δωδέκατης',
    '13_genitive': 'δέκατης τρίτης',
    '14_genitive': 'δέκατης τέταρτης',
    '15_genitive': 'δέκατης πέμπτης',
    '16_genitive': 'δέκατης έκτης',
    '17_genitive': 'δέκατης έβδομης',
    '18_genitive': 'δέκατης όγδοης',
    '19_genitive': 'δέκατης ένατης',
    '20_genitive': 'εικοστής',
    '21_genitive': 'εικοστής πρώτης',
    '22_genitive': 'εικοστής δεύτερης',
    '23_genitive': 'εικοστής τρίτης',
    '24_genitive': 'εικοστής τέταρτης',
    '25_genitive': 'εικοστής πέμπτης',
    '26_genitive': 'εικοστής έκτης',
    '27_genitive': 'εικοστής έβδομης',
    '28_genitive': 'εικοστής όγδοης',
    '29_genitive': 'εικοστής ένατης',
    '30_genitive': 'τριακοστής',
    '31_genitive': 'τριακοστής πρώτης',
    '32_genitive': 'τριακοστής δεύτερης',
    '33_genitive': 'τριακοστής τρίτης',
    '34_genitive': 'τριακοστής τέταρτης',
    '1_abbreviation': 'Αʹ',
    '2_abbreviation': 'Β΄',
    '3_abbreviation': 'Γ΄',
    '4_abbreviation': 'Δ΄',
    '5_abbreviation': 'Ε΄',
    '6_abbreviation': 'ΣΤ΄',
    '7_abbreviation': 'Ζ΄',
    '8_abbreviation': 'Η΄',
    '9_abbreviation': 'Θ΄',
    '10_abbreviation': 'Ι΄',
    '11_abbreviation': 'ΙΑ΄',
    '12_abbreviation': 'ΙΒ΄',
    '13_abbreviation': 'ΙΓ΄',
    '14_abbreviation': 'ΙΔ΄',
    '15_abbreviation': 'ΙΕ΄',
    '16_abbreviation': 'ΙΣΤ΄',
    '17_abbreviation': 'ΙΖ΄',
    '18_abbreviation': 'ΙΗ΄',
    '19_abbreviation': 'ΙΘ΄',
    '20_abbreviation': 'Κ΄',
    '21_abbreviation': 'ΚΑ΄',
    '22_abbreviation': 'ΚΒ΄',
    '23_abbreviation': 'ΚΓ΄',
    '24_abbreviation': 'ΚΔ΄',
    '25_abbreviation': 'ΚΕ΄',
    '26_abbreviation': 'ΚΣΤ΄',
    '27_abbreviation': 'ΚΖ΄',
    '28_abbreviation': 'ΚΗ΄',
    '29_abbreviation': 'ΚΘ΄',
    '30_abbreviation': 'Λ΄',
    '31_abbreviation': 'ΛΑ΄',
    '32_abbreviation': 'ΛΒ΄',
    '33_abbreviation': 'ΛΓ΄',
    '34_abbreviation': 'ΛΔ΄',
  },

  colors: {
    white: 'λευκό',
    red: 'κόκκινο',
    green: 'πράσινο',
    purple: 'μοβ',
    black: 'μαύρο',
    rose: 'ροζ',
    gold: 'χρυσαφένιο',
  },

  names: {
    adalbert_of_prague_bishop: 'Αγίου Αδαλβέρτου, επισκόπου και μάρτυρος',
    agapitus_of_palestrina_martyr: 'Αγίου Αγαπητού, μάρτυρος',
    agatha_of_sicily_virgin: 'Αγίας Αγάθης, παρθενομάρτυρος',  // src: mr_el_2006_ed3
    agnes_of_rome_virgin: 'Αγίας Αγνής, παρθενομάρτυρος',  // src: mr_el_2006_ed3
    albert_the_great_bishop: 'Αγίου Αλβέρτου του Μεγάλου, επισκόπου και διδασκάλου της Εκκλησιάς',
    all_saints: 'Αγίων Πάντων',
    aloysius_gonzaga_religious: 'Αγίου Αλοϊσίου Gonzaga, μοναχού',
    alphonsus_mary_liguori_bishop: 'Αγίου Αλφόνσου Μαρία de Liguori, επισκόπου και διδασκάλου της Εκκλησίας',
    ambrose_of_milan_bishop: 'Αγίου Αμβροσίου, επισκόπου και διδασκάλου της Εκκλησιάς',
    andrew_apostle: 'Αγίου Ανδρέα, Απόστολου',
    andrew_dung_lac_priest_and_companions_martyrs: 'Αγίων Ανδρέα Dung Lac, πρεσβυτέρου, και συντρόφων, μαρτύρων',
    andrew_kim_tae_gon_priest_paul_chong_ha_sang_and_companions_martyrs:
      'Αγίου Ανδρέα Kim Tae-gon, πρεσβυτέρου, Αγίου Παύλου Chong Ha-sang, και συντρόφων, μαρτύρων',
    angela_merici_virgin: 'Αγίας Άγγελας Merici, παρθένου',  // src: mr_el_2006_ed3
    annunciation_of_the_lord: 'Ευαγγελισμός της Θεοτόκου',
    anselm_of_canterbury_bishop: 'Αγίου Ανσέλμου, επισκόπου και διδασκάλου της Εκκλησίας',
    ansgar_of_hamburg_bishop: 'Αγίου Ανσγκαρίου, επισκόπου',  // src: mr_el_2006_ed3
    anthony_mary_claret_bishop: 'Αγίου Αντωνίου Μαρία Claret, επισκόπου',
    anthony_of_egypt_abbot: 'Αγίου Αντωνίου του Μεγάλου, αββά',  // src: mr_el_2006_ed3
    anthony_of_padua_priest: 'Αγίου Αντωνίου της Παδούης, πρεσβυτέρου και διδασκάλου της Εκκλησίας',
    anthony_zaccaria_priest: 'Αγίου Αντωνίου Μαρία Ζαχαρία, πρεσβυτέρου',
    apollinaris_of_ravenna_bishop: 'Αγίου Απολλιναρίου, επισκόπου και μάρτυρος',
    assumption_of_the_blessed_virgin_mary: 'Της Μεταστάσεως της Υπεραγίας Θεοτόκου και Αειπαρθένου Μαρίας',
    athanasius_of_alexandria_bishop: 'Αγίου Αθανασίου, επισκόπου και διδασκάλου της Εκκλησίας',
    augustine_of_canterbury_bishop: 'Αγίου Αυγουστίνου Cantuariensis, επισκόπου',
    augustine_of_hippo_bishop: 'Αγίου Αυγουστίνου, επισκόπου και διδασκάλου της Εκκλησίας',
    augustine_zhao_rong_priest_and_companions_martyrs:
      'Αγίου Αυγουστίνου Zhao Rong, πρεσβυτέροθ, και ουντρόφων μαρτύρων',
    baptism_of_the_lord: 'Η Βάπτιση του Κυρίου',  // src: mr_el_2006_ed3
    barbara_of_heliopolis_virgin: 'Αγίας Βαρβάρας, παρθενομάρτυρος',
    barnabas_apostle: 'Αγίου Βαρνάβα, Αποστόλου',
    bartholomew_apostle: 'Αγίου Βαρθολομαίου, Αποστόλου',
    basil_the_great_and_gregory_nazianzen_bishops:
      'Αγίου Βασιλείου του Μεγάλου και Αγίου Γρηγορίου του Ναζιανζηνού, επισκόπων και διδασκάλων της Εκκλησίας',  // src: mr_el_2006_ed3
    bede_the_venerable_priest: 'Αγίου Βέδα του Σεβασμίου, πρεσβυτέρου και διδασκάλου της Εκκλησίας',
    benedict_of_nursia_abbot: 'Αγίου Βενέδικτου, αββά',
    benedict_of_nursia_abbot_patron_of_europe: 'Αγίου Βενέδικτου, αββά, προστάτι της Ευρώπης',
    bernard_of_clairvaux_abbot: 'Αγίου Βερνάρδου, αββά και διδασκάλου της Εκκλησίας',
    bernardine_of_siena_priest: 'Αγίου Βερναρδίνου της Σιένας, πρεσβυτέρου',
    blaise_of_sebaste_bishop: 'Αγίου Βλασίου, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3
    bonaventure_of_bagnoregio_bishop: 'Αγίου Βοναβεντούρα, επισκόπουθ και διδασκάλου της Εκκλησίας',
    boniface_of_mainz_bishop: 'Αγίου Βονιφατίου, επισκόπου και μάρτυρος',
    bridget_of_sweden_religious: 'Αγίας Μπριγκίτης, μοναχής',
    bridget_of_sweden_religious_copatroness_of_europe: 'Αγίας Μπριγκίτης, μοναχής, προστάτιδας της Ευρώπης',
    bruno_of_cologne_priest: 'Αγίου Βρούνονα, πρεσβυτέρου',
    cajetan_of_thiene_priest: 'Αγίου Γαετάνου, πρεσβυτέρου',
    callistus_i_pope: 'Αγίου Καλλίστου Αʹ, πάπα και μάρτυρος',
    camillus_de_lellis_priest: 'Αγίου Καμίλλου de Lellis, πρεσβυτέρου',
    casimir_of_poland: 'Αγίου Καζίμηρου',
    catherine_of_alexandria_virgin: 'Αγίας Αικατερίνης Αλεξανδρείας, παρθενομάρτυρος',
    catherine_of_siena_virgin: 'Αγίας Αικατερίνης της Σιένας, παρθένου και διδασκάλου της Εκκλησίας',
    catherine_of_siena_virgin_copatroness_of_europe:
      'Αγίας Αικατερίνης της Σιένας, παρθένου και διδασκάλου της Εκκλησίας, προστάτιδας της Ευρώπης',
    cecilia_of_rome_virgin: 'Αγίας  Καικιλίας, παρθενομάρτυρος',
    chair_of_saint_peter_the_apostle: 'Καθέδρας του Απόστολου Πέτρου',  // src: mr_el_2006_ed3
    charles_borromeo_bishop: 'Αγίου Καρόλου Borromeo, επισκόπου',
    charles_lwanga_and_companions_martyrs: 'Καίων Καρόλου Lwanga και συντρόφων, μαρτύρων',
    christopher_magallanes_priest_and_companions_martyrs:
      'Αγίου Χριστοφόρου Magallanes, πρεσβυτέρου, και ουντρόφων, μαρτύρων',
    christopher_of_anatolia_martyr: 'Αγίου Χριστοφόρου, μάρτυρος',
    clare_of_assisi_virgin: 'Αγίας Κλάρας, παρθένου',
    clement_i_pope: 'Αγίου Κλήμεντος Αʹ, πάπα και μάρτυρος',
    columba_of_iona_abbot: 'Αγίου Κολουμβανού, αββά',
    commemoration_of_all_the_faithful_departed: 'Μνήμη Όλων Των Κεκοιμημένων Πιστών',
    conversion_of_saint_paul_the_apostle: 'Η μεταστροφή του Αποστόλου Παύλου',  // src: mr_el_2006_ed3
    cornelius_i_pope_and_cyprian_of_carthage_bishop_martyrs:
      'Αγίων Κορνηλίου, πάπα, και Κυπριανού, επισκόπου, μαρτύρων',
    cosmas_of_cilicia_and_damian_of_cilicia_martyrs: 'Αγίων Κοσμά και Δαμιανού, των Αναργύρων, μαρτύρων',
    cyriacus_martyr: 'Αγίου Κυριάκου, διακόνου και μάρτυρος',
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop:
      'Αγίων Κύριλλου, μοναχού και Μεθόδιου, επισκόπου',  // based on: mr_el_2006_ed3
    cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop_copatrons_of_europe:
      'Αγίων Κύριλλου, μοναχού και Μεθόδιου, επισκόπου, Προστατών της Ευρώπης',  // src: mr_el_2006_ed3
    cyril_of_alexandria_bishop: 'Αγίου Κυρίλλου της Αλεξάνδρειας, επισκόπου και διδασκάλου της Εκκλησίας',
    cyril_of_jerusalem_bishop: 'Αγίου Κυρίλλου των Ιεροσολύμων, επισκόπου και διδασκάλου της Εκκλησίας',
    damasus_i_pope: 'Αγίου Δαμάσου, πάπα',
    dedication_of_the_basilica_of_our_lady_of_the_snows_tinos_grece:
      'Των Εγκαινίων της Βασιλικής της Αγίας Μαρίας, της Παναγίας των Χιόνων',
    dedication_of_the_basilica_of_saint_mary_major: 'Τα Εγκαίνια της βασιλικής της Αγίας Μαρίας',
    dedication_of_the_basilicas_of_saints_peter_and_paul_apostles:
      'Εγκαινίων των Βασιλικών των Αγίων Πέτρου Και Παύλου, αποστόλων',
    dedication_of_the_cathedral_of_saint_dionysius_athens:
      'Επέτειος των εγκαινίων του Καθεδρικού Ιερού Ναού αγίου Διονυσίου',
    dedication_of_the_lateran_basilica: 'Εγκαινίων της Βασιλικής του Λατερανό',
    demetrius_of_thessaloniki_martyr: 'Αγίου Δημητρίου, μάρτυρος',
    denis_of_paris_bishop_and_companions_martyrs: 'Αγίου Διονυσίου, επισκόπου, και συντρόφων, μαρτύρων',
    dionysius_the_areopagite_bishop: 'Αγίου Διονυσίου του Αρεοπαγίτου, επισκόπου και μάρτυρος',
    divine_mercy_sunday: 'Δεύτερη Κυριακή του Πάσχα ή της θείας Ευσπλαχωίας',
    dominic_de_guzman_priest: 'Αγίου Δομινίκου, πρεσβυτέρου',
    easter_sunday: 'Κυριακή του Πάσχα της Αναστάσεως του Κύριου',
    elijah_prophet: 'Αγίου Ηλία, προφήτη',
    elizabeth_of_hungary_religious: 'Αγίας Ελισάβετ της Ουγγαρίας, μοναχής',
    elizabeth_of_portugal: 'Αγίας Ελισάβετ της Πορτογαλίας',
    emilie_de_vialar_virgin: 'Αγίας Αιμιλίας de Vialar, παρθένου',
    ephrem_the_syrian_deacon: 'Αγίου Εφραίμ, διακόνου και διδασκάλου της Εκκλησίας',
    epiphany_of_the_lord: 'Των Θεοφανίων',  // src: mr_el_2006_ed3
    eric_ix_of_sweden_martyr: 'Αγίου Ερρίκου',
    eusebius_of_vercelli_bishop: 'Αγίου Ευσεβίου των Βερκελλών, επισκόπου',
    exaltation_of_the_holy_cross: 'Ύψωση του Τιµίου Σταυρού.',
    fabian_i_pope: 'Αγίου Φαβιανού, πάπα και μάρτυρος',  // src: mr_el_2006_ed3
    faustina_kowalska_virgin: 'Αγίας Φαουστίνα Kowalska, παρθένου',
    fidelis_of_sigmaringen_priest: 'Αγίου Φιδελίου de Sigmaringen, πρεσβυτέρου και μάρτυρος',
    first_martyrs_of_the_holy_roman_church: 'Αγίων Πρωτομαρτύρων της Εκκλησίας της Ρώμης',
    frances_of_rome_religious: 'Αγίας Φρανκίσκας της Ρωμαίας, μοναχής',
    francis_de_sales_bishop: 'Αγίου Φραγκίσκου de Sales, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3
    francis_of_assisi: 'Αγίου Φραγκίσκου της Ασσίζης',
    francis_of_paola_hermit: 'Αγίου Φραγκίσκου de Paola, ερημίτη',
    francis_xavier_priest: 'Αγίου Φραγκίσκου Ξαβέριου, πρεσβυτέρου',
    genevieve_of_paris_virgin: 'Αγίας Γενεβιέβης, παρθένου',
    george_of_lydda_martyr: 'Αγίου Γεωργίου, μάρτυρος',
    gregory_of_narek_abbot: 'Αγίου Γρηγορίου του Narek, μοναχού και διδασκάλου της Εκκλησίας',
    gertrude_the_great_virgin: 'Αγίας Γερτρούδης, παρθένου',
    gregory_i_the_great_pope: 'Αγίου Γεωργίου του Μεγάλου, πάπα και διδασκάλου της Εκκλησίας',
    gregory_vii_pope: 'Αγίου Γρηγορίου Ζʹ, πάπα',
    hedwig_of_poland: 'Αγίας Εδβίγης, μοναχής',
    hilary_of_poitiers_bishop: 'Αγίου Ιλαρίου, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3
    hildegard_of_bingen_abbess: 'Αγίας Χίλντεγκαρντ, παρθένου και διδασκάλου της Εκκλησίας',
    holy_family_of_jesus_mary_and_joseph: 'Της Αγίας Οικογένειας: Ιήσου, Μαρίας και Ιωσήφ',
    holy_guardian_angels: 'Αγίων Φυλάκων Αγγέλων',
    holy_innocents_martyrs: 'Αγίων Αθώων Νηπίων, Μαρτύρων',
    ignatius_of_antioch_bishop: 'Αγίου Ιγνατίου της Αντιοχείας, επισκόπου και μάρτυρος',
    ignatius_of_loyola_priest: 'Αγίου Ιγνατίου de Loyola, πρεσβυτέρου',
    immaculate_conception_of_the_blessed_virgin_mary: 'Της Αμίαντου Συλλήψεως της Μακαριάς και Αειπαρθένου Μαρίας',
    immaculate_heart_of_mary: 'Αµίαντης Καρδίας της Αειπαρθένου Μαρίας',
    irenaeus_of_lyon_bishop: 'Αγίου Ειρηναίου, επισκόπου, μάρτυρος και διδασκάλου της Εκκλησίας',
    irene_of_macedonia: 'Αγίας Ειρήνης, παρθενομάρτυρος',
    isidore_of_seville_bishop: 'Αγίου Ισιδώρου, επισκόπου και διδασκάλου της Εκκλησίας',
    isidore_the_farmer: 'Αγίου Ισιδώρου, γεωργού',
    james_apostle: 'Αγίου Ιακώβου, Απόστολου',
    jane_frances_de_chantal_religious: 'Αγίας Ιωάννας Φραγκίσκης de Chantal, μοναχής',
    januarius_i_of_benevento_bishop: 'Αγίου Ιανουαρίου, επισκόπου και μάρτυρος',
    jerome_emiliani: 'Αγίου Ιερώνυμου Emiliani',  // src: mr_el_2006_ed3
    jerome_of_stridon_priest: 'Αγίου Ιερώνυμου, πρεσβυτέρου και διδασκάλου της Εκκλησίας',
    joachim_and_anne_parents_of_mary: 'Αγίων Ιωακείμ και Άννης, γονέων της Παναγίας',
    john_apostle: 'Αγίου Ιωάννη, Απόστολου και Ευαγγελιστή',
    john_baptist_de_la_salle_priest: 'Αγίου Ιωάννη Βαπτιστή de la Salle, πρεσβυτέρου',
    john_bosco_priest: 'Αγίου Ιωάννη Bosco, πρεσβυτέρου',  // src: mr_el_2006_ed3
    john_chrysostom_bishop: 'Αγίου Ιωάννου Χρυσοστόμου, επισκόπου και διδασκάλου της Εκκλησίας',
    john_damascene_priest: 'Αγίου Ιωάννη του Δαμασκηνού, πρεσβυτέρου και διδασκάλου της Εκκλησιάς',
    john_de_brebeuf_isaac_jogues_priests_and_companions_martyrs:
      'Αγίων Ιωάννη de Brebeuf και Ισαάκ Jogues, πρεσβυτέρων και συντρόφων, μαρτύρων',
    john_eudes_priest: 'Αγίου Ιωάννη Eudes, πρεσβυτέρου',
    john_fisher_bishop_and_thomas_more_martyrs: 'Αγίων Ιωάννη Fisher, επισκόπου και Θωμά More, μαρτύρων',
    john_i_pope: 'Αγίου Ιωάννη Αʹ, πάπα και μάρτυρος',
    john_leonardi_priest: 'Αγίου Ιωάννη Leonardi, πρεσβυτέρου',
    john_mary_vianney_priest: 'Αγίου Ιωάννη Μαρία Vianney, πρεσβυτέρου',
    john_of_capistrano_priest: 'Αγίου Ιωάννη de Capestrano, πρεσβυτέρου',
    john_of_god_duarte_cidade_religious: 'Αγίου Ιωάννη του Θεού, μοναχού',
    john_of_kanty_priest: 'Αγίου Ιωάννη de Kety, πρεσβυτέρου',
    john_of_the_cross_priest: 'Αγίου Ιωάννη του Σταυρού, πρεσβυτέρου και διδασκάλου της Εκκλησιάς',
    john_paul_ii_pope: 'Αγίου Ιωάννη Παύλου Βʹ, πάπα',
    john_xxiii_pope: 'Αγίου Ιωάννη ΚΓ΄, πάπα',
    josaphat_kuntsevych_bishop: 'Αγίου Ιωσαφάτ, επισκόπου Και μάρτυρος',
    joseph_of_calasanz_priest: 'Αγίου Ιωσήφ de Calasanz, πρεσβυτέρου',
    joseph_spouse_of_mary: 'Αγίου Ιωσήφ, Μνήστορος της Αειπαρθένου Μαρίας',
    joseph_the_worker: 'Αγίου Ιωσήφ, εργαζομένου',
    josephine_bakhita_virgin: 'Αγίας Ιωσηφίνας Bakhita, παρθένου',  // src: mr_el_2006_ed3
    juan_diego_cuauhtlatoatzin: 'Αγίου Ιωάννη Diego Διδάχου Cuahtlatoatzin',
    justin_martyr: 'Αγίου Ιουστίνου, μάρτυρος',
    lawrence_justinian: 'Αγίου Λαυρεντίου Giustiniani',
    lawrence_of_brindisi_priest: 'Αγίου Λαυρεντίου του Βρινδησίου, παρθένου και διδασκάλου της Εκκλησίας',
    lawrence_of_rome_deacon: 'Αγίου Λαυρεντίου, διακόνου και μάρτυρος',
    lawrence_ruiz_and_companions_martyrs: 'Αγίου Λαυρεντίου Ruiz και συντρόφων μαρτύρων',
    leo_i_the_great_pope: 'Αγίου Λέωντα του Μεγάλου, πάπα και διδασκόλου της Εκκλησίας',
    louis_grignion_de_montfort_priest: 'Αγίου Λουδοβίκου Μαρία Grignion de Montfort, πρεσβυτέρου',
    louis_ix_of_france: 'Αγίου Λουδοβίκου',
    louise_de_marillac_religious: 'Αγίας Λουίζας de Marillac',
    luke_evangelist: 'Αγίου Λούκα, Ευαγγελιστή',
    lydia_of_philippi: 'Αγίας Λυδίας της Φιλιππησίας',
    lydia_of_philippi_first_european_christian: 'Αγίας Λυδίας της Φιλιππησίας, πρώτης Χριστιανής της Ευρώπης', // Custom title
    mammes_of_caesarea_martyr: 'Αγίου Μάμα, μάρτυρος',
    marcellin_champagnat_priest: 'Αγίου Μαρκελλίνου Champagnat, πρεσβυτέρου',
    marcellinus_of_ancona_bishop: 'Αγίου Μαρκελλίνου, επισκόπου',
    marcellinus_of_rome_and_peter_the_exorcist_martyrs: 'Αγίου Μαρκελλίνου και Πέτρου, μαρτύρων',
    margaret_mary_alacoque_virgin: 'Αγίας Μαργαρίτας Μαρίας Alacoque, παρθένου',
    margaret_of_antioch_virgin: 'Αγίας Μαρίνας, παρθενομάρτυρος',
    margaret_of_scotland: 'Αγίας Μαργαρίτας της Σκοτίας',
    maria_goretti_virgin: 'Αγίας Μαρίας Goretti, παρθενομάρτυρος',
    mark_evangelist: 'Αγίου Μάρκου, Ευαγγελιστή',
    martha_of_bethany: 'Αγίας Μάρθας',
    martha_of_bethany_mary_of_bethany_and_lazarus_of_bethany: 'Αγίων Μάρθας, Μαρίας και Λαζάρου',
    martin_de_porres_religious: 'Αγίου Μαρτίνου de Porres, μοναχού',
    martin_i_pope: 'Αγίου Μαρτίνου Αʹ, πάπα και μάρτυρος',
    martin_of_tours_bishop: 'Αγίου Μαρτίνου, επισκόπου',
    mary_magdalene: 'Αγίας Μαρίας της Μαγδαληνής',
    mary_magdalene_de_pazzi_virgin: 'Αγίας Μαρίας Μαγδαληνής de’ Pazzi, παρθένου',
    mary_mother_of_god: 'Ογδοάδα των Χριστουγέννων: Της Υπεραγίας Θεοτόκου Μαρίας',  // src: mr_el_2006_ed3
    mary_mother_of_the_church: 'Tης Υπεραγίας Θεοτόκου Μαρίας, Μητέρας της Εκκλησίας',
    mary_mother_of_hope: 'Tης Υπεραγίας και Αειπαρθένου Θεοτόκου, Μητέρας της αγίας Ελπίδας',
    matthew_apostle: 'Αγίου Ματθαίου, Απόστολου και Ευαγγελιστή',
    matthias_apostle: 'Αγίου Ματθίας, Απόστολου',
    maximilian_mary_raymund_kolbe_priest: 'Αγίου Μαξιμιλιανού Μαρία Kolbe, πρεσβυτέρου και μάρτυρος',
    michael_gabriel_and_raphael_archangels: 'Αγίων Μιχαήλ, Γαβριήλ και Ραφαήλ, Αρχαγγέλων',
    miltiades_pope: 'Αγίου Μιλτιάδης, πάπα',
    monica_of_hippo: 'Αγίας Μόνικας',
    most_holy_body_and_blood_of_christ: 'Του Παναχράντου Σώματος και Αίματος του Χριστού',
    most_holy_name_of_jesus: 'Του Αγιοτάτου Ονόματος του Ιησού',  // src: mr_el_2006_ed3
    most_holy_name_of_mary: 'Του ονόματος της Υπεραγίας Θεοτόκου Μαρίας',
    most_holy_trinity: 'Της Αγίας Τριάδος',
    most_sacred_heart_of_jesus: 'Ιεροτάτης Καρδίας του Ιησού',
    nativity_of_john_the_baptist: 'Η Γέννηση του Αγίου Ιωάννη του Βαπτιστή',
    nativity_of_the_blessed_virgin_mary: 'Η Γέννηση της Μακαριάς Αειπαρθένου Μαρίας',
    nativity_of_the_lord: 'Η Γέννηση του Κύριου',
    nereus_of_terracina_and_achilleus_of_terracina_martyrs: 'Αγίων Νηρέα και Αχιλλέα, μαρτύρων',
    nicholas_of_myra_bishop: 'Αγίου Νικολάου, επισκόπου',
    norbert_of_xanten_bishop: 'Αγίου Νορβέρτου, επισκόπου',
    our_lady_of_angels: 'Της Υπεραγίας Θεοτόκου Μαρίας των Αγγέλων',
    our_lady_of_faneromeni: 'Υπεραγίας Θεοτόκου της Φανερωμένης', // or: of Lefkada
    our_lady_of_fatima: 'Tης Υπεραγίας Θεοτόκου Μαρίας de Fatima',
    our_lady_of_guadalupe: 'Της Υπεραγίας Θεοτόκου της Γουαδελούπης',
    our_lady_of_loreto: 'Tης Υπεραγίας Θεοτόκου Μαρίας του Λορέτο',
    our_lady_of_lourdes: 'Αειπαρθένου Θεοτόκου Μαρίας της Λούρδης',  // src: mr_el_2006_ed3
    our_lady_of_mount_carmel: 'Αειπαρθένου Μαρίας του όρους Καρμήλου',
    our_lady_of_sorrows: 'Παναγίας Αειπαρθένου Μαρίας της Πονεμένης',
    our_lady_of_the_rosary: 'Παναγίας του Ροδαρίου',
    our_lord_jesus_christ_king_of_the_universe: 'Του Ιησού Χριστού, Βασιλέα του σύμπαντος',
    palm_sunday_of_the_passion_of_the_lord: 'Κυριακή των Βαΐων',
    pancras_of_rome_martyr: 'Αγίου Πανκρατίου, μάρτυρος',
    pantaleon_of_nicomedia_martyr: 'Αγίου Παντελεήμονος, μάρτυρος',
    passion_of_saint_john_the_baptist: 'Του μαρτυρίου του Αγίου Ιωάννη, Προδρόμου και Βαπτιστή',
    patrick_of_ireland_bishop: 'Αγίου Πατρικίου, επισκόπου',
    paul_miki_and_companions_martyrs: 'Αγίων Παύλου Miki και συντρόφων, μαρτύρων',  // src: mr_el_2006_ed3
    paul_of_the_cross_priest: 'Αγίου Παύλου του Σταυρού, πρεσβυτέρου',
    paulinus_of_nola_bishop: 'Αγίου Παυλίνου Nolani, επισκόπου',
    pelagia_the_penitent_virgin: 'Αγίας Πελαγίας της Μετανοούσης',
    pentecost_sunday: 'Κυριακή της Πεντηκοστής',
    perpetua_of_carthage_and_felicity_of_carthage_martyrs: 'Αγίων Περπέτουας και Φηλικίτης, μαρτύρων',
    peter_and_paul_apostles: 'Αγίων Πέτρου και Παύλου, Αποστόλων',
    peter_canisius_priest: 'Αγίου Πέτρου Κανισίου, πρεσβυτέρου και διδασκάλου της Εκκλησιάς',
    peter_chanel_priest: 'Αγίου Πέτρου Chanel, πρεσβυτέρου και μάρτυρος',
    peter_chrysologus_bishop: 'Αγίου Πέτρου του Χρυσολόγου, επισκόπου και διδασκάλου της Εκκλησίας',
    peter_claver_priest: 'Αγίου Πέτρου Claver, πρεσβυτέρου',
    peter_damian_bishop: 'Αγίου Πέτρου Damiani, επισκόπου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3
    peter_julian_eymard_priest: 'Αγίου Πέτρου Ιουλιανού Eymard, πρεσβυτέρου',
    philip_and_james_apostles: 'Αγίων Φιλίππου και Ιακώβου, Αποστόλων',
    philip_neri_priest: 'Αγίων Φιλίππου Neri, πρεσβυτέρου',
    pius_francesco_forgione_priest: 'Αγίου Πίου de Pietrelcina, πρεσβυτέρου',
    pius_v_pope: 'Αγίου Πίου Εʹ, πάπα',
    pius_x_pope: 'Αγίου Πίου Ιʹ, πάπα',
    polycarp_of_smyrna_bishop: 'Αγίου Πολυκάρπου, επισκόπου και μάρτυρος',  // src: mr_el_2006_ed3
    pontian_i_pope_and_hippolytus_of_rome_priest: 'Αγίου Ποντιανού, πάπα, και Ιππολύτου, πρεσβυτέρου, μαρτύρων',
    presentation_of_the_blessed_virgin_mary: 'Εισόδια της Μακαριάς Αειπαρθένου Μαρίας',
    presentation_of_the_lord: 'Η Υπαπαντή του Κυρίου',  // src: mr_el_2006_ed3
    queenship_of_the_blessed_virgin_mary: 'Υπεραγίας Θεοτόκου και Αειπαρθένου Μαρίας Βασίλισσας',
    raymond_of_penyafort_priest: 'Αγίου Ραϊμόνδου de Penyafort, πρεσβυτέρου',  // src: mr_el_2006_ed3
    rita_of_cascia_religious: 'Αγίας Ρίτας de Cascia, μοναχής',
    robert_bellarmine_bishop: 'Αγίου Ροβέρτου Bellarmino, επισκόπου και διδασκάλου της Εκκλησίας',
    roch_of_montpellier: 'Αγίου Ρόκκο',
    romanus_martyr: 'Αγίου Ρωμανού, μάρτυρος',
    romuald_of_ravenna_abbot: 'Αγίου Ρομουάλδου, αββά',
    rose_of_lima_virgin: 'Αγίας Ρόζας της Λίμα, παρθένου',
    scholastica_of_nursia_virgin: 'Αγίας Σχολαστικής, παρθένου',  // src: mr_el_2006_ed3
    sebastian_of_milan_martyr: 'Αγίου Σεβαστιανού, μάρτυρος',  // src: mr_el_2006_ed3
    seven_holy_founders_of_the_servite_order:
      'Επτά Αγίων Ιδρυτών του Τάγματος των Δούλων της Μακαρίας Αειπαρθένου Μαρίας',  // src: mr_el_2006_ed3
    sharbel_makhluf_priest: 'Αγίου Σαρβελίου Makhluf, πρεσβυτέρου',
    simon_and_jude_apostles: 'Αγίων Σίμωνος και Ιούδα, Αποστόλων',
    sixtus_ii_pope_and_companions_martyrs: 'Αγίου Σίξτου Βʹ, πάπα, και των συντρόφων, μαρτύρων',
    spyridon_of_trimythous_bishop: 'Αγίου Σπυρίδωνος, επισκόπου',
    stanislaus_of_szczepanow_bishop: 'Αγίου Στανισλάου, επισκόπου και μάρτυρος',
    stephen_i_of_hungary: 'Αγίου Στέφανου της Ουγγαρίας',
    stephen_the_first_martyr: 'Αγίου Στέφανου, Πρωτομάρτυρος',
    sylvester_i_pope: 'Αγίου Σιλβέστρου Αʹ, πάπα',
    teresa_benedicta_of_the_cross_stein_virgin:
      'Αγίας Θηρεσίας Βενεδίκτης a Cruce (Edith Stein), παρθένου και μάρτυρος',
    teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe:
      'Αγίας Θηρεσίας Βενεδίκτης a Cruce (Edith Stein), παρθένου και μάρτυρος, προστάτιδας της Ευρώπης',
    teresa_of_calcutta_religious: 'Αγίας Μητέρας Τερέζας της Καλκούτας',
    teresa_of_jesus_of_avila_virgin: 'Αγίας Θηρεσίας της Άβιλα, παρθένου και διδασκάλου της Εκκλησίας',
    thecla_of_iconium_virgin: 'Αγίας Θέκλας, παρθενομάρτυρος',
    theodore_stratelates: 'Αγίου Θεοδώρου, μάρτυρος',
    therese_of_the_child_jesus_and_the_holy_face_of_lisieux_virgin:
      'Αγίας Θηρεσίας του Βρέφους Ιησού, παρθένου και διδασκάλου της Εκκλησίας',
    thomas_apostle: 'Αγίου Θωμά, Αποστόλου',
    thomas_aquinas_priest: 'Αγίου Θωμά του Ακινάτη, πρεσβυτέρου και διδασκάλου της Εκκλησίας',  // src: mr_el_2006_ed3
    thomas_becket_bishop: 'Αγίου Θωμά Becket, επισκόπου και μάρτυρος',
    timothy_of_ephesus_and_titus_of_crete_bishops: 'Αγίων Τιμοθέου και Τίτου, επισκόπων',  // src: mr_el_2006_ed3
    timothy_of_ephesus_and_titus_the_first_bishop_of_crete_bishops:
      'Αγίου Τίτου, πρώτου επισκόπου Κρήτης και Αγίου Τιμοθέου, επισκόπου',  // based on: mr_el_2006_ed3; TODO: Where is this used? Can't we use `timothy_of_ephesus_and_titus_of_crete_bishops` there instead?
    transfiguration_of_the_lord: 'Η Μεταμόρφωση του Κυρίου',
    turibius_of_mogrovejo_bishop: 'Αγίου Τουριβίου de Mogrovejo, επισκόπου',
    twelve_apostles: 'Αγίων Δώδεκα Αποστόλων',
    ursula_of_cologne_virgin: 'Αγίας Ούρσουλας, παρθενομάρτυρος',
    vincent_de_paul_priest: 'Αγίου Βικεντίου de Paul, πρεσβυτέρου',
    vincent_ferrer_priest: 'Αγίου Βικεντίου Ferrer, πρεσβυτέρου',
    vincent_of_saragossa_deacon: 'Αγίου Βικεντίου, διακόνου και μάρτυρος',  // src: mr_el_2006_ed3
    visitation_of_mary: 'Η επίσκεψη της Αειπαρθένου Μαρίας στην αγία Ελισάβετ',
    zechariah_and_elizabeth_parents_of_john_the_baptist: 'Αγίων Ζαχαρία και Ελισάβετ',
  },
};
