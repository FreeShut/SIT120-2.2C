// Create SVG container for the graph
const svgWidth = window.innerWidth * 0.8; // Taking up 80% of the window width
const svgHeight = window.innerHeight * 0.8; // Taking up 80% of the window height

const svg = d3.select("#relationship-graph")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

const node = svg.selectAll(".node")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", 15) /* Increase the radius from 10 to 15 */
    // ... rest of the code ...

function ticked() {
    // ... (rest of the function remains unchanged)
}

// Adjust force parameters for a larger graph
const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(120)) // Increase the link distance
    .force("charge", d3.forceManyBody().strength(-300)) // Adjust the repulsion strength
    .force("center", d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2.5)); // Adjust the centering force