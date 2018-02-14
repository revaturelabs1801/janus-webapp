import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-boom',
  templateUrl: './boom.component.html',
  styleUrls: ['./boom.component.css']
})
export class BoomComponent implements OnInit {

  @ViewChild('barChart') barChart: ElementRef;
  @ViewChild('pieChart') pieChart: ElementRef;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    tooltips: {
      displayColors: false,
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.yLabel + '%';
        }
      }
    },
    responsive: true
  };
  public pieChartOptions: any = {
    tooltips: {displayColors: false},
    legend: {position: 'left'},
  };
  public barChartLabels: string[] = [];
  public barChartType: String = 'bar';
  public barChartLegend: Boolean = false;
  public barColors: any = [{fill: true, backgroundColor: '#ff9945' },
                           {fill: true, backgroundColor: '#b63e4f' }];
  public barChartData: any[] = [];

  public pieChartLegend: Boolean = false;
  public pieChartLabels: string[][] = [];
  public pieChartData: number[] = [];
  public pieChartDatasets: any[] = [];
  public pieColors: any = [{fill: true, backgroundColor: ['#ff9945', '#b63e4f'] }];
  public pieChartType: String = 'pie';

  public percent: Number = 90;
  public batches: any[] = [];
  public chartHeight: Number = 345;
  public pieChartHeight: Number = 345;
  public batchOverallArray: any = [];

  constructor() { }

  ngOnInit() {

  let batch1: any;
  let batch2: any;
  let batch3: any;
  let batch4: any;
  let batch5: any;
    batch1 = {
      'w': 8, 'trainer': 'Steve', 't': 240, 'topics': [{ 'topic': 'Core Java', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'SQL/JDBC', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'HTML/CSS/AJAX/JavaScript/Servlets', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'Angular/Devops', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'Hibernate', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'Spring', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'Spring', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'MicroServices', 'subtopic': { 'c': 100, 'm': 0 } }
      ]
    };
    batch2 = {
      'w': 5, 'trainer': 'Trevin', 't': 150, 'topics': [{ 'topic': 'Core Java', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'SQL/JDBC', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'HTML/CSS/AJAX/JavaScript/Servlets', 'subtopic': { 'c': 90, 'm': 10 } },
      { 'topic': 'Angular/Devops', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'Hibernate', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'Spring', 'subtopic': { 'c': 0, 'm': 0 } },
      { 'topic': 'Spring', 'subtopic': { 'c': 0, 'm': 0 } },
      { 'topic': 'MicroServices', 'subtopic': { 'c': 0, 'm': 0 } }]
    };
    batch3 = {
      'w': 2, 'trainer': 'Gail',  't': 60, 'topics': [{ 'topic': 'Core Java', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'SQL/JDBC', 'subtopic': { 'c': 70, 'm': 30 } },
      { 'topic': 'HTML/CSS/AJAX/JavaScript/Servlets', 'subtopic': { 'c': 0, 'm': 0 } },
      { 'topic': 'Angular/Devops', 'subtopic': { 'c': 0, 'm': 0 } },
      { 'topic': 'Hibernate', 'subtopic': { 'c': 0, 'm': 0 } },
      { 'topic': 'Spring', 'subtopic': { 'c': 0, 'm': 0 } },
      { 'topic': 'Spring', 'subtopic': { 'c': 0, 'm': 0 } },
      { 'topic': 'MicroServices', 'subtopic': { 'c': 0, 'm': 0 } }]
    };
    batch4 = {
      'w': 6, 'trainer': 'Larry', 't': 180, 'topics': [{ 'topic': 'Core Java', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'SQL/JDBC', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'HTML/CSS/AJAX/JavaScript/Servlets', 'subtopic': { 'c': 90, 'm': 10 } },
      { 'topic': 'Angular/Devops', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'Hibernate', 'subtopic': { 'c': 60, 'm': 40 } },
      { 'topic': 'Spring', 'subtopic': { 'c': 50, 'm': 50 } },
      { 'topic': 'Spring', 'subtopic': { 'c': 0, 'm': 0 } },
      { 'topic': 'MicroServices', 'subtopic': { 'c': 0, 'm': 0 } }]
    };
    batch5 = {
      'w': 3, 'trainer': 'Jose', 't': 90, 'topics': [{ 'topic': 'Core Java', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'SQL/JDBC', 'subtopic': { 'c': 100, 'm': 0 } },
      { 'topic': 'HTML/CSS/AJAX/JavaScript/Servlets', 'subtopic': { 'c': 40, 'm': 60 } },
      { 'topic': 'Angular/Devops', 'subtopic': { 'c': 0, 'm': 0 } },
      { 'topic': 'Hibernate', 'subtopic': { 'c': 0, 'm': 0 } },
      { 'topic': 'Spring', 'subtopic': { 'c': 0, 'm': 0 } },
      { 'topic': 'Spring', 'subtopic': { 'c': 0, 'm': 0 } },
      { 'topic': 'MicroServices', 'subtopic': { 'c': 0, 'm': 0 } }]
    };

    this.batches = [batch1, batch2, batch3, batch4, batch5];
    this.plotBatch(batch1.trainer);
    // this.pieChartAvg();
    this.pieChartPercent(this.percent);
  }

  public plotBatch(trainer) {
    const completedSubtop: any[] = [];
    const missedSubTop: any[] = [];

    for (let i = 0; i < this.batches.length; i++) {
      if (this.batches[i].trainer === trainer) {
        for (let j = 0; j < this.batches[i].w; j++) {
          this.barChartLabels.push('Week ' + (j + 1));
          completedSubtop.push(this.batches[i].topics[j].subtopic.c);
          missedSubTop.push(this.batches[i].topics[j].subtopic.m);
        }
        this.barChartData = [
          { data: completedSubtop, label: 'Completed', fill: true,
          backgroundColor: '#ff9945' },
          { data: missedSubTop, label: 'Missed', fill: true,
          backgroundColor: '#b63e4f' }
        ];
        break;
      }
    }

  }

  public pieChartPercent(percent) {
    const allCompletedSubtop: any[] = [];
    const allMissedSubTop: any[] = [];
    const labelComplete: any[] = [];
    const labelMissed: any[] = [];
    this.batchOverallArray = [];
    this.percent = percent;
    labelComplete.push('Batches');
    labelMissed.push('Batches');

    for (let i = 0; i < this.batches.length; i++) {
      let totalCompleted: any = 0;
      let totalMissed: any = 0;
      let totalCompletedAvg: any = 0;
      let totalMissedAvg: any = 0;

      for (let j = 0; j < this.batches[i].w; j++) {

        totalCompleted += this.batches[i].topics[j].subtopic.c;
        totalMissed += this.batches[i].topics[j].subtopic.m;
      }

      totalCompletedAvg = Number((totalCompleted / this.batches[i].w).toFixed(2));
      totalMissedAvg = Number((totalMissed / this.batches[i].w).toFixed(2));

      const trainer = {
        bName: 'Batch ' + (i + 1),
        trainer: this.batches[i].trainer,
        missed: totalMissed / this.batches[i].w * this.batches[i].t / 100,
        completed: totalCompleted / this.batches[i].w * this.batches[i].t / 100,
        total: this.batches[i].t,
        week: this.batches[i].w
      };

      this.batchOverallArray.push(trainer);

      if (totalCompletedAvg >= percent) {
        labelComplete.push(this.batches[i].trainer + ' ' + totalCompletedAvg + '%');
      } else {
        labelMissed.push(this.batches[i].trainer + ' ' + totalCompletedAvg + '%');
      }

    }
    this.pieChartLabels = [labelComplete, labelMissed];
    this.pieChartData.push(labelComplete.length - 1);
    this.pieChartData.push(labelMissed.length - 1);

    this.pieChartDatasets = [{ data : this.pieChartData}];
  }

  changePercent(event: any, percent: Number) {
    if (percent == this.percent && String(percent).length > 1) {
      event.preventDefault();
      return;
    }
    this.pieChartHeight = $(this.pieChart.nativeElement.lastElementChild).height();
    $(this.pieChart.nativeElement).css('min-height', this.pieChartHeight + 'px');
    this.pieChartData = [];
    this.pieChartLabels = [];
    this.pieChartDatasets = [];
    if (String(percent) !== '') {
      setTimeout(() => {
        this.pieChartPercent(percent);
      }, 0);
    }
  }

  checkInput(event: any, value) {
    const pattern = /[0-9\ ]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)
        || inputChar === ' '
        || Number(value + inputChar) > 100
        || Number(inputChar + value) === 0) {
      event.preventDefault();
      return;
    }
  }

  public pieChartAvg() {
    const allCompletedSubtop: any[] = [];
    const allMissedSubTop: any[] = [];
    const labelComplete: any[] = [];
    const labelMissed: any[] = [];
    labelComplete.push('Avg Complete');
    labelMissed.push('Avg Missed');

    for (let i = 0; i < this.batches.length; i++) {
      let totalCompleted: any = 0;
      let totalMissed: any = 0;
      let totalCompletedAvg: any = 0;
      let totalMissedAvg: any = 0;

      for (let j = 0; j < this.batches[i].w; j++) {

        totalCompleted += this.batches[i].topics[j].subtopic.c;
        totalMissed += this.batches[i].topics[j].subtopic.m;
      }

      totalCompletedAvg = Number((totalCompleted / this.batches[i].w).toFixed(2));
      labelComplete.push(this.batches[i].trainer + ' ' + totalCompletedAvg + '%');
      allCompletedSubtop.push(totalCompletedAvg);

      totalMissedAvg = Number((totalMissed / this.batches[i].w).toFixed(2));
      labelMissed.push(this.batches[i].trainer + ' ' + totalMissedAvg + '%');
      allMissedSubTop.push(totalMissedAvg);

    }
    let subtopicSumCompleted: any = 0;
    let subtopicSumMissed: any = 0;

    for (let i = 0; i < allCompletedSubtop.length ; i++) {
      subtopicSumCompleted += allCompletedSubtop[i];
      subtopicSumMissed += allMissedSubTop[i];
    }
    this.pieChartLabels = [labelComplete, labelMissed];

    this.pieChartData.push(Number((subtopicSumCompleted / allCompletedSubtop.length).toFixed(2)));
    this.pieChartData.push(Number((subtopicSumMissed / allCompletedSubtop.length) .toFixed(2)));

    this.pieChartDatasets = [{ data : this.pieChartData}];
  }

  changeBatch(trainer) {
    this.chartHeight = $(this.barChart.nativeElement.lastElementChild).height();
    $(this.barChart.nativeElement).css('min-height', this.chartHeight + 'px');
    this.barChartData = [];
    this.barChartLabels = [];
    setTimeout(() => {
          this.plotBatch(trainer);
    }, 0);
  }
}
