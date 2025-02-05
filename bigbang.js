const fs = require("fs");

function generateBigBangArray() {
    let result = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("BIGBANG");
        } else if (i % 3 === 0) {
            result.push("BIG");
        } else if (i % 5 === 0) {
            result.push("BANG");
        } else {
            result.push(i.toString());
        }
    }

    return result;
}

const output = generateBigBangArray();

fs.writeFileSync("output.json", JSON.stringify(output), "utf8");

console.log("output.json has been generated successfully!");
