const fs = require("node:fs/promises");

// const nama = "Samsul";
// const noHp = "09894748734";

// const munculkan = () => {
//   console.log(`Nama saya adalah ${nama} dan nomor hp saya adalah ${noHp}`);
// };

// console.log(munculkan());
// fs.writeFile("test.txt", "world Secara synconous");

// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const validator = require("validator");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan nama anda: ", (nama) => {
  rl.question("Masukan NoHP anda: ", (noHp) => {
    if (!validator.isMobilePhone(noHp, "id-ID")) {
      console.log(`No Hp Anda anda salah cobalagi`);
      rl.close();
      return false;
    } else {
      rl.question("Masukan Email anda: ", (email) => {
        if (!validator.isEmail(email)) {
          console.log(`Email anda salah cobalagi`);
          rl.close();
          return false;
        } else {
          console.log(
            `Hallo ${nama} nomor hp anda adalah ${noHp} email anda adalah ${email}`
          );
          rl.close();
          return true;
        }
      });
    }
  });
});
