import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexDataLabels, ApexPlotOptions, ApexTitleSubtitle, NgApexchartsModule, ApexTooltip, ApexLegend } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardHeader, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NgApexchartsModule]
})
export class DashboardPage implements OnInit {

  public chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    title: ApexTitleSubtitle;
    tooltip: ApexTooltip;
    legend: ApexLegend;
  };

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Primera Vuelta",
          data: [75, 65, 35, 25]
        },
        {
          name: "Segunda Vuelta",
          data: [61, 49, 0, 0]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ["Daniel Noboa - ADN", "Luisa Gonzalez - RC", "Jan Topic - PSC", "Christian Zurita - MC25"],
        labels: {
          style: {
            colors: ['#DBDBDB'],
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#DBDBDB'],
          }
        }
      },
      title: {
        text: "Gráfico de Barras",
        style: {
          color: '#DBDBDB'
        }
      },
      legend: {
        labels: {
          colors: '#DBDBDB',
          useSeriesColors: false
        },
      },
      tooltip: {
        theme: 'dark',
      },
    }
  };

  ngOnInit() {
  }

}
