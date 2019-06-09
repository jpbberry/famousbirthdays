const parser = require("node-html-parser");
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

async function getBirthdays(url) {
    console.log(url)
    let u = await new Promise(resolve => {
        https.get(url, (res) => {
            let rawData = "";
            res.on("data", (chunk) => rawData += chunk);
            res.on("end", () => {
                let data = parser.parse(rawData)
                let g = data.querySelectorAll('.info')
                var v = [];
                let xx = 15
                for (i = 0; i < g.length && i < xx; i++) {
                    let dv = g[i].querySelector('.name').childNodes[0].rawText
                    if (!dv) continue;
                    dv = dv.replace(/\n/gi, "")
                    let [name, age] = dv.split(', ')
                    if (!g[i].querySelector('.title')) {
                        xx++
                        continue;
                    }
                    let occ = g[i].querySelector('.title').childNodes[0].rawText
                    if (!occ || !dv || !name) continue;
                    let z = {
                        name: name,
                        age: age,
                        occupation: occ.replace('&amp;', '&'),
                        link: g[i].parentNode.rawAttrs.split(' ')[0].replace(/("|=)/g, '').replace('href', '')
                    }
                    v.push(z)
                }
                resolve(v)
            })
        })
    })
    return u;
}

module.exports = function (date = new Date()) {
    if (!(date instanceof Date)) throw new Error("Expected Date but found " + typeof date);
    return new Promise(async function (resolve) {
        if (date.toString().split(' ')[2].toString()[0] == "0") {
            day = date.toString().split(' ')[2].toString()[1]
        } else {
            day = date.toString().split(' ')[2]
        }
        var response = await getBirthdays(
            `https://www.famousbirthdays.com/${monthNames[date.getMonth()].toLowerCase()}${day}.html`
        );
        resolve(response);
    })
}