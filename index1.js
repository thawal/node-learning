//built in modules
// const path=require("node:path")
const path=require("path")
// console.log(__filename);
//gives the full path of file name
// console.log(__dirname);
//gives the full path of dir name
// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
// console.log(path.extname(__filename))
// console.log(path.extname(__dirname))

// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__filename)))
// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./data.json"))
//bcoz ./ is a relative path
// console.log(path.join("/folder1","folder2","folder3","index.html"))
// console.log(path.join("/folder1","//folder2","folder3","index.html"))
// console.log(path.join("/folder1","folder2","folder3","../index.html"))
// //../ is for jumping one folder up and then concatinate
// console.log(path.join(__dirname,"data.json"))

console.log(path.resolve("folder1","folder2","folder3","index.html"))
console.log(path.resolve("/folder1","//folder2","folder3","index.html"))
console.log(path.resolve("/folder1","folder2","folder3","../index.html"))
console.log(path.resolve(__dirname,"data.json"))
