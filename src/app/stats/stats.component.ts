import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  private barChart: Chart;
  private lineChart: Chart;
  private pieChart: Chart;

  constructor() {}

  ngOnInit(): void {
    // Données de visites par mois
    // const labels = Utils.months({count: 12});
    //  Fisrt Bar
    const data = {
      labels: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Aout',
        'Septembre',
        'Octobre',
        'Novembre',
        'Decembre',
      ],
      datasets: [
        {
          label: 'Visites',
          data: [150, 200, 300, 250, 400, 350, 500, 250, 150, 200, 300, 250],
          fill: false,
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Couleur de fond des barres
          borderColor: 'rgba(75, 192, 192, 1)', // Couleur de bordure des barres
          borderWidth: 1,
        },
      ],
    };
    //  Fisrt line
    const data1 = {
      labels: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Aout',
        'Septembre',
        'Octobre',
        'Novembre',
        'Decembre',
      ],
      datasets: [
        {
          label: 'Offres',
          data: [150, 200, 300, 250, 400, 350, 500, 250, 150, 200, 300, 250],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Options du graphique
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    /***** Bubble Chart
    const data = {
      datasets: [
        {
          label: 'First Dataset',
          data: [
            {
              x: 20,
              y: 30,
              r: 15,
            },
            {
              x: 40,
              y: 10,
              r: 10,
            },
          ],
          backgroundColor: 'rgb(255, 99, 132)',
        },
      ],
    };**/

    /**const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    };***/

    // Création du graphique à barres et à ligne
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    const ctx1 = document.getElementById('lineChart') as HTMLCanvasElement;
    // const config = { ctx, type: 'doughnut', data: data };
    this.barChart = new Chart(ctx, {
      type: 'bar', //bar, line, bubble, doughnut, pie
      data: data,
      options: options,
      // options: {
      //   indexAxis: 'y', //pour renverser le graphe
      // },
    });

    this.lineChart = new Chart(ctx1, {
      type: 'line', //bar, line, bubble, doughnut, pie
      data: data1,
      options: options,
      // options: {
      //   indexAxis: 'y', //pour renverser le graphe
      // },
    });

    /*******PIE Chart */

    // Données pour le graphique en secteurs
    const data2 = {
      labels: ['Recruteur', 'Candidat'],
      datasets: [
        {
          data: [26, 74],
          backgroundColor: [
            'rgba(255, 0, 0, 0.5)',
            'rgba(0, 255, 0, 0.5)',
            // 'rgba(0, 0, 255, 0.5)',
            // 'rgba(255, 255, 0, 0.5)',
          ], // Couleurs des secteurs
          borderColor: 'rgba(255, 255, 255, 1)', // Couleur de bordure des secteurs
          borderWidth: 1,
        },
      ],
    };

    // Options du graphique
    const options1 = {
      responsive: true,
    };

    // Création du graphique en secteurs
    const ctx2 = document.getElementById('pieChart') as HTMLCanvasElement;
    this.pieChart = new Chart(ctx2, {
      type: 'doughnut',
      // type: 'pie',
      data: data2,
      options: options1,
    });
  }
}
