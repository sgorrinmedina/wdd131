document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


function calculateWindChill(temp, wind) {
    const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    return windChill;
}

function displayWindChill() {
    const tempElement = document.getElementById('temperature');
    const windElement = document.getElementById('wind-speed');
    const windChillElement = document.getElementById('wind-chill');

    const tempValue = parseFloat(tempElement.textContent.match(/-?\d+(\.\d+)?/)[0]);
    const windValue = parseFloat(windElement.textContent.match(/-?\d+(\.\d+)?/)[0]);

    let windChillDisplay = "N/A";

    if (tempValue <= 10 && windValue > 4.8) {
        const calculatedChill = calculateWindChill(tempValue, windValue);
        windChillDisplay = `${calculatedChill.toFixed(1)} °C`;
    }

    windChillElement.innerHTML = `<span>Wind Chill:</span> ${windChillDisplay}`;
}

document.addEventListener('DOMContentLoaded', displayWindChill);



