import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css'],
})
export class DashboardAdminComponent implements OnInit {
  // isSidebarOpen = false;
  private barChart: Chart;
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

    // Création du graphique à barres
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    // const config = { ctx, type: 'doughnut', data: data };
    this.barChart = new Chart(ctx, {
      type: 'bar', //bar, line, bubble, doughnut, pie
      data: data,
      options: options,
      // options: {
      //   indexAxis: 'y', //pour renverser le graphe
      // },
    });

    /*******PIE Chart */

    // Données pour le graphique en secteurs
    const data1 = {
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
    const ctx1 = document.getElementById('pieChart') as HTMLCanvasElement;
    this.pieChart = new Chart(ctx1, {
      type: 'doughnut',
      // type: 'pie',
      data: data1,
      options: options1,
    });
  }

  // toggleSidebar() {
  //   this.isSidebarOpen = !this.isSidebarOpen;
  // }
}
