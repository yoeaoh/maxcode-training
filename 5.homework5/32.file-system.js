// https://maxcode.dev/problems/file-system/

// Вроде почти решил, но запутался.. 
function findAllJavascriptFiles(folder, callback) {
    const result = [];

    folder.size(size => {
        for (let i = 0; i < size; i++) {
            folder.read(i, (value) => {
                if (typeof value === 'string') {
                    if (value.split('.')[1] === 'js') {
                        result.push(value);
                    }

                    if (i === size - 1) {
                        callback(result)
                    }
                } else {
                    findAllJavascriptFiles(value, (arr) => {
                        result.push(...arr)

                        if (i === size - 1) {
                            callback(result)
                        }
                    })
                }
            })
        }
    })
}

function Folder(files) {
    const rand = () => Math.random() * 500;

    return {
        read: (index, cb) => void setTimeout(cb, rand(), files[index]),
        size: (cb) => void setTimeout(cb, rand(), files.length),
    };
}

const root = Folder([
    "1.js",
    "2.js",
    Folder([
        Folder([
            "3.txt",
        ]),
        "4.js",
    ]),
    Folder([
        "5.png",
        "6.js",
        Folder([
            "7.txt",
        ]),
    ]),
    "8.html",
]);

findAllJavascriptFiles(root, arr => {
    console.log(arr); // arr === ["1.js", "2.js", "4.js", "6.js"]
})

