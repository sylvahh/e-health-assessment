import {type Options } from 'highcharts'

export const getStaticChartOptions = ():Options => ({
  accessibility: {
    enabled: false
  },
  chart: {
    type: 'column'
  },

  title: {
    text: 'Distribution of Blood Groups and Age Ranges',
    align: 'center'
  },

  xAxis: {
    categories: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },

  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: 'number of users'
    }
  },

  tooltip: {
    formatter() {
      return `<b>${this.key}</b><br/>${this.series.name}: ${this.y}<br/>Total: ${this.point.total}`
    }
  },

  plotOptions: {
    column: {
      stacking: 'normal'
    },
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true
      }
    }
  }
})
