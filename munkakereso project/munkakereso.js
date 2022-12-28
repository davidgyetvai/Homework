'use strict'

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const authQuestion = (answer) => {
    return new Promise((resolve, reject) => {
        rl.question("Köszöntöm! Kérem az azonosítóját!", (answer) => {
            console.log("Üdvözlöm", (answer));
            resolve();
        });

    });
};

async function main() {
    await authQuestion();
    rl.close();
}

main();