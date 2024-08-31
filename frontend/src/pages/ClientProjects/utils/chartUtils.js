
import { Chart } from "chart.js";

export function createChart(ctx, progressValue) {
    const data = {
        labels: ["Em desenvolvimento", "Em teste", "Concluído"],
        datasets: [{
            data: [progressValue, 100 - progressValue],
            backgroundColor: ['#2ca25f', '#99d8c9', "#f03b20"],
        }]
    };

    const config = {
        type: "pie",
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false, // Permite o gráfico se ajustar ao tamanho do contêiner
            plugins: {
                title: {
                    display: true,
                },
            }
        }
    };

    return new Chart(ctx, config);
};

export function determineProjectStatus(progress) {
    const numericProgress = parseFloat(progress);

    if (numericProgress < 33) {
        return "Em desenvolvimento";
    } else if (numericProgress < 67) {
        return "Em teste";
    } else if (numericProgress === 100) {
        return "Concluído";
    }
}