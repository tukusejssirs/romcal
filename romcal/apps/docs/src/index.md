---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'romcal'
  text: 'The all-inclusive Catholic liturgical calendar library'
  tagline: Generate liturgical calendars for the Roman Rite, with support for various particular calendars and localizations
  image:
    src: /logo512.png
    alt: romcal
  actions:
    - theme: brand
      text: Get Started
      link: /guide/general-usage
    - theme: alt
      text: View on GitHub
      link: https://github.com/romcal/romcal
    - theme: alt
      text: Example Implementation
      link: https://romcal.js.org/

features:
  - icon: 📅
    title: Comprehensive Calendar Generation
    details: Generate complete liturgical calendars for any year, following the General Roman Calendar and particular calendars for various countries and dioceses.
  - icon: 🌍
    title: Internationalization
    details: Full support for multiple languages and locales, with liturgical texts and celebration names available in various languages.
  - icon: ⚙️
    title: Highly Configurable
    details: Customize calendar output with various <a href='/guide/general-usage#configuration-options'>options</a> including calendar scope, possibility of moving the Epiphany of the Lord, the Most Holy Body and Blood of Christ and the Ascension of the Lord to the following Sunday, and optional memorial inclusion.
  - icon: 📚
    title: Rich Liturgical Data
    details: Access detailed information about each celebration including rank, liturgical color, and liturgical metadata.
  - icon: 🔧
    title: Developer Friendly
    details: Well-documented API with TypeScript support, making it easy to integrate into your applications.
  - icon: 🛠️
    title: Work in Progress
    details: Continuously improving accuracy and expanding calendar support. Community contributions welcome to enhance coverage and features.
---

## Quick Example

```typescript
import Romcal from '@romcal/core';
import { UnitedStates_En } from '@romcal/calendar.united-states';

// Generate a liturgical calendar for the year 2024
const romcal = new Romcal({
  scope: 'gregorian', // or 'liturgical' for liturgical year
  localizedCalendar: UnitedStates_En,
  epiphanyOnSunday: true,
  corpusChristiOnSunday: true,
  ascensionOnSunday: true,
});

// Generate calendar and access specific dates
const calendar = await romcal.generateCalendar(2024);
const christmas = calendar.find((day) => day.date === '2024-12-25');
console.log(christmas.name); // "The Nativity of the Lord"
console.log(christmas.rank); // "Solemnity"
console.log(christmas.liturgicalColor); // "White"
```

## Why romcal?

romcal is the most comprehensive JavaScript/TypeScript library for generating Catholic liturgical calendars. Whether you're building a parish website, a liturgical app, or need accurate liturgical data for any purpose, romcal provides:

- **Accuracy**: Strives to follow the General Instruction of the Roman Missal and the General Norms for the Liturgical Year and Calendar (work in progress)
- **Flexibility**: Support for many particular calendars and easy extensibility for custom implementations
- **Reliability**: Extensive test suite with ongoing improvements to ensure correct calendar generation
- **Performance**: Generates calendars for civil years (Jan–Dec) or liturgical years (First Sunday of Advent to Christ the King)

## Get Involved

romcal is an open-source project and welcomes contributions from the community:

- [Suggest features or improvements](https://github.com/romcal/romcal/discussions) via GitHub Discussions
- [Contribute code or documentation improvements](/guide/contribute)
- Help with translations for your language

## License

romcal is released under the [MIT License](https://github.com/romcal/romcal/blob/master/LICENSE).
