export const facultyChartData = {
    type: 'bar',
    data: {
        labels: ["COF", "CAS", "CCS", "CTE", "CHMT", "CFND", "CBMA", "CCJE"],
        datasets: [{
            label: 'Number of Faculty Members',
            data: [28, 18, 10, 18, 10, 7, 7, 4],
            backgroundColor: [
                'rgba(63, 127, 191, 1)',
                'rgba(63, 191, 127, 1)',
                'rgba(231, 54, 54, 1)',
                'rgba(1, 87, 130, 1)',
                'rgba(135, 52, 186, 1)',
                'rgba(1, 87, 130, 1)',
                'rgba(12, 4, 234, 1)',
                'rgba(224, 108, 0, 1)'
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
}

export default facultyChartData;