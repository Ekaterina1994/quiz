import console from "console";
import fs from "fs";

let DATA_IN_STRING: string;

// Return a string with datas which were converted from json file
// export const readFile = (PATH_TO_FILE: string) => {
//   fs.readFile(PATH_TO_FILE, "utf-8", (err, data) => {
//     if (err) {
//       throw err;
//     } else {
//       DATA_IN_STRING = JSON.parse(data);
//       console.log(DATA_IN_STRING);
//       return DATA_IN_STRING;
//     }
//   });
//   return DATA_IN_STRING;
// } 



// export const readFile = async (PATH_TO_FILE: string) => {
//   try {
//     const data = await fs.promises.readFile(PATH_TO_FILE, 'utf8')
//     return data;
//   }
//   catch(err) {
//     console.log(err)
//   }
// }



export const readFile = async (PATH_TO_FILE: string): Promise<string> => {
  const data = await fs.promises.readFile(PATH_TO_FILE, 'utf8');
  // let DATA = new Promise((resolve, reject) => {
  //   fs.readFile(PATH_TO_FILE, 'utf8', (err, data) => {
  //     if (err) {
  //       reject(err);
  //     }
  //     resolve(data);
  //   });
  // });
  // let DATA_IN_STRING = await DATA;
  return data;
}
