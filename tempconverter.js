tempconverter (86, "c")

function tempconverter (temp, unit) {
if (unit === "F" || unit === "f")
    return console.log(`${(temp*9/5)+32}°F`);
else if (unit === "C" || unit === "c")
    return console.log(`${(temp-32)*5/9}°C`)
else
    return console.log("Unit must be C or F")
}