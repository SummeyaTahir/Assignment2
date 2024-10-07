// Import Chart.js
import { Chart } from 'chart.js';

// Apply global settings in Chart.js v3+
Chart.defaults.font.color = window.theme["gray-600"]; // Set the global font color
Chart.defaults.font.family = "'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"; // Set the global font family

// Attach Chart.js to the global window object if needed
window.Chart = Chart;
