import '@fontsource/poppins';
import Chart from 'chart.js/auto';
import axios from 'axios';


/**
 * Chart js 
 */
const hydraulicsData = {
    labels: [0.0, 2.5, 5.0, 7.5, 10.0, 12.5, 15.0, 17.5],
    datasets: [
        {
            label: 'Pompa',
            data: [6, 5.8, 5, 4.9, 4.8, 4.6, 4.2, 3],
            borderColor: '#2A6AB6',
            backgroundColor: '#2A6AB6',
            pointStyle: 'rect',
            tension: 0.5,

        },
        {
            label: 'Rurociag',
            data: [4, 3.9, 3.8, 3.7, 3.5],
            borderColor: '#89B62A',
            backgroundColor: '#89B62A',
            pointStyle: 'rect',
            tension: 0.5
        },
        {
            label: 'Punk wymagnany',
            data: [2],
            borderColor: '#89B62A',
            backgroundColor: '#89B62A',
            tension: 0.5
        },

        {
            label: 'Punk pracy',
            data: [4],
            borderColor: '#FB4B14',
            backgroundColor: '#FB4B14',
            tension: 0.5
        },

        {
            label: 'Punk nominalny',
            data: [],
            borderColor: '#00507C',
            backgroundColor: '#00507C',
            tension: 0.5
        },
    ]
};


const powerData = {
    labels: [0.0, 2.5, 5.0, 7.5, 10.0, 12.5, 15.0, 17.5],
    datasets: [
        {
            label: 'Pompa',
            data: [2, 1.9, 3, 4, 5, 5.5, 5.4],
            borderColor: '#2A6AB6',
            backgroundColor: '#2A6AB6',
            pointStyle: 'rect',
            tension: 0.5

        },
        {
            label: 'Punk pracy',
            data: [3, 2.5, 2.4],
            borderColor: '#FB4B14',
            backgroundColor: '#FB4B14',
            pointStyle: 'rect',
            tension: 0.5
        },
        {
            label: 'Punk nominalny',
            data: [],
            borderColor: '#123F74',
            backgroundColor: '#2A6AB6',
            tension: 0.5
        }
    ]
};

const options = {
    responsive: true,
    layout: {
        padding: {
            left: 30 // Add extra padding to move the chart content 15px to the right
        }
    },
    plugins: {
        legend: {
            labels: {
                color: '#222325', // Label text color
                font: {
                    size: 10.5, // Font size
                    weight: 'Regular', // Font weight
                    family: 'Poppins', // Custom font family
                },
                boxWidth: 10, // Width of the legend box
                boxHeight: 6, // Height of the legend box
                padding: 16, // Padding between legend items
                usePointStyle: true, // Use rounded point styles
            },
            position: 'bottom', // Position: top, bottom, left, right
        },
        chartName: {
            text: 'Lorem ipsum dolor [m]', // Set the vertical text here
        },
        backgroundColorPlugin: {
            color: '#92929D', // Background color behind the curve
        }
    },
    scales: {
        x: {
            grid: {
                display: false // Hide vertical grid lines
            },
            ticks: {
                color: '#92929D' // Optional: Customize tick label color
            }
        },
        y: {
            grid: {
                backgroundColor: '#f0f0f0',
                color: '#e0e0e0', // Optional: Customize grid line color
            },
            ticks: {
                color: '#92929D', // Optional: Customize tick label color
                stepSize: 1,      // Ensure only integers are displayed
                callback: function (value) {
                    return Number.isInteger(value) ? value : null; // Display only integers
                }
            },
            min: 1,
            max: 6,
            beginAtZero: true
        }
    },

}


Chart.register({
    id: 'chartName',
    beforeDraw(chart) {
        const { ctx } = chart; // Canvas rendering context
        const text = (chart.options.plugins.chartName.text || '').toUpperCase(); // Convert text to uppercase
        const fontSize = 10;
        const fontColor = '#222325';
        const fontFamily = 'Poppins';

        if (text) {
            ctx.save();
            ctx.font = `${fontSize}px ${fontFamily}`;
            ctx.fillStyle = fontColor;
            ctx.textAlign = 'center';
            ctx.translate(8, chart.height / 3); // Position at the left edge of the canvas
            ctx.rotate(-Math.PI / 2); // Rotate text vertically
            ctx.fillText(text, 0, 0);
            ctx.restore();
        }
    }
});

const hydraulicsElement = document.getElementById('hydraulics');

const powerElement = document.getElementById('power');

if (hydraulicsElement) {
    const hydraulics = new Chart(hydraulicsElement, {
        type: 'line',
        stepped: false, // Remove 'stepped' if not needed
        data: hydraulicsData,
        options: options
    });

}

if (powerElement) {
    const power = new Chart(powerElement, {
        type: 'line',
        stepped: false, // Remove 'stepped' if not needed
        data: powerData,
        options: options
    });
}
// End chart js




// Menu bar toggler
function openMenu() {
    const navigation = document.querySelector('#navigation');
    navigation.classList.remove('hidden')
    navigation.classList.add('slideover')
}


function closeMenu() {
    const navigation = document.querySelector('#navigation');
    navigation.classList.add('hidden')
    navigation.classList.remove('slideover')
}


function toggleMenu() {

    const navigation = document.querySelector('#navigation');

    if (navigation.classList.contains('slideover')) {
        closeMenu();
    } else {
        openMenu()
    }

}

window.toggleMenu = toggleMenu;
// Eng menubar js



// dropdown 

document.querySelector('#dropdownDefaultButton').addEventListener("click", () => {
    document.querySelector("#dropdown").classList.toggle("hidden");
})

document.addEventListener('click', (e) => {
    const parentDiv = document.querySelector('#dropdownDefaultButton').parentElement
    if (!parentDiv.contains(e.target)) {
        document.querySelector("#dropdown").classList.add('hidden');
    }
});

document.querySelectorAll('.dropdown-link').forEach((item) => {
    item.addEventListener('click', (event) => {
        const value = event.target.getAttribute("value")
        const element = document.querySelector("#dropdownButtonValue")
        element.innerHTML = value;
        document.querySelector("#dropdown").classList.add('hidden');
    })
})
// 



window.increment = (target) => {
    const value = document.querySelector(target).innerHTML;
    document.querySelector(target).innerHTML = Number(value) + 1;
}

window.decrement = (target) => {
    const value = document.querySelector(target).innerHTML;
    document.querySelector(target).innerHTML = Number(value) - 1;
}