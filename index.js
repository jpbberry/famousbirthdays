const parser = require("node-html-parser");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const https = require("https");

async function getBirthdays(url) {
  let u = await new Promise((resolve) => {
    https.get(url, (res) => {
      let rawData = "";
      res.on("data", (chunk) => (rawData += chunk));
      res.on("end", () => {
        let data = parser.parse(rawData);

        const birthdays = [];

        const tileList = data.querySelectorAll(
          'a[href^="https://www.famousbirthdays.com/people/"]'
        );

        tileList.forEach((tile) => {
          const link = tile.getAttribute("href");

          const personInfo = tile.childNodes[3];
          const occupation = tile.childNodes[5];

          const [name, age] = personInfo.innerText
            .replace(/\n/g, "")
            .split(", ")
            .map((x) => x.trim());

          birthdays.push({
            name: name.replace("&#039;", "'"),
            age,
            occupation: occupation.innerText
              .replace("&amp;", "&")
              .replace("&#039;", "'"),
            link,
          });
        });
        resolve(birthdays);
      });
    });
  });
  return u;
}

module.exports = function (date = new Date()) {
  if (!(date instanceof Date))
    throw new Error("Expected Date but found " + typeof date);
  return new Promise(async function (resolve) {
    if (date.toString().split(" ")[2].toString()[0] == "0") {
      day = date.toString().split(" ")[2].toString()[1];
    } else {
      day = date.toString().split(" ")[2];
    }
    var response = await getBirthdays(
      `https://www.famousbirthdays.com/${monthNames[
        date.getMonth()
      ].toLowerCase()}${day}.html`
    );
    resolve(response);
  });
};
