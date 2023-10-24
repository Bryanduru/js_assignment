let temp = 30;
let unit = "F";

if (unit === "F" || unit === "f")
    console.log(`${(temp*9/5)+32}°F`);
else if (unit === "C" || unit === "c")
    console.log(`${(temp-32)*5/9}°C`)
else
    console.log("Unit must be C or F")