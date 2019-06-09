# `node-famousbirthdays`

## Wrapper around grabbing and parsing [FamousBirthdays](https://famousbirthdays.com) website.

### How to use
```js
const famousBirthdays = require("famousbirthdays");

famousBirthdays(new Date()) // Default is just new Date(). (aka today)
    .then(result=>{
        ///etc
    })
```
### Response
Will be an array of objects consisting of `name`, `age`, `occuptation`, and a `link` to their page. The array is limited to a length of 15. If the person is no longer alive, `age` will simply be `undefined` (oof).
#### Example
```js
[ { name: 'Johnny Depp',
    age: '56',
    occupation: 'Movie Actor',
    link: 'https://www.famousbirthdays.com/people/johnny-depp.html' },
  { name: 'Tanya Burr',
    age: '30',
    occupation: 'TV Actress',
    link: 'https://www.famousbirthdays.com/people/tanya-burr.html' },
  { name: 'Natalie Portman',
    age: '38',
    occupation: 'Movie Actress',
    link: 'https://www.famousbirthdays.com/people/natalie-portman.html' },
  { name: 'Stassiebaby',
    age: '22',
    occupation: 'Instagram Star',
    link: 'https://www.famousbirthdays.com/people/anastasia-karanikolaou.html' },
  { name: 'Laurie Hernandez',
    age: '19',
    occupation: 'Gymnast',
    link: 'https://www.famousbirthdays.com/people/laurie-hernandez.html' },
  { name: 'Michael J. Fox',
    age: '58',
    occupation: 'Movie Actor',
    link: 'https://www.famousbirthdays.com/people/michael-j-fox.html' },
  { name: 'Zac Vran',
    age: '23',
    occupation: 'Dancer',
    link: 'https://www.famousbirthdays.com/people/zac-vran.html' },
  { name: 'Xavier Serrano',
    age: '26',
    occupation: 'Model',
    link: 'https://www.famousbirthdays.com/people/xavier-serrano.html' },
  { name: 'Mae Whitman',
    age: '31',
    occupation: 'TV Actress',
    link: 'https://www.famousbirthdays.com/people/mae-whitman.html' },
  { name: 'Matthew Bellamy',
    age: '41',
    occupation: 'Rock Singer',
    link: 'https://www.famousbirthdays.com/people/matthew-bellamy.html' },
  { name: 'OMGItsBirdman',
    age: '40',
    occupation: 'YouTube Star',
    link: 'https://www.famousbirthdays.com/people/omgitsbirdman.html' },
  { name: 'Rafi Fine',
    age: '36',
    occupation: 'YouTube Star',
    link: 'https://www.famousbirthdays.com/people/rafi-fine.html' },
  { name: 'Anna Cunningham (2002-2019)',
    age: undefined,
    occupation: 'TikTok Star',
    link: 'https://www.famousbirthdays.com/people/anna-cunningham.html' },
  { name: 'Sonam Kapoor',
    age: '34',
    occupation: 'Movie Actress',
    link: 'https://www.famousbirthdays.com/people/sonam-kapoor.html' },
  { name: 'Jocelyn Macnab',
    age: '14',
    occupation: 'TV Actress',
    link: 'https://www.famousbirthdays.com/people/jocelyn-macnab.html' } ]
```

### Future Plans
- Giving famous persons a dedicated class
- Fetching specific people
- Linking those two first ones together
- Probably more that I can't think of