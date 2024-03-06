const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    java: "java"
}

for (const key in myObj){
    console.log(key, myObj[key]);
}

// for-in loop does not work on map, as they are not itterable