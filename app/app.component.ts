import { Component, ViewChild, ElementRef } from "@angular/core";
import "chartjs-plugin-annotation";

//declare const $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("myCanvas")
  public canvas: ElementRef;
  public context: CanvasRenderingContext2D;
  public chartType: string = "line";
  public chartData: any[];
  public chartLabels: any[];
  public chartColors: any[];
  public chartOptions: any;

  ngOnInit() {
    //Chart.defaults.line.showLines = false;
    this.chartData = [
      {
        data: [3, 1, 4, 2, 5],
        ///  label: "Anthracnose",
        fill: false,
        //bezierCurve: false,
        lineTension: 0
      }
    ];
    this.chartLabels = ["Jan", "Feb", "Mar", "Apr", "May"];
    this.chartColors = [
      {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderColor: "rgba(0, 0, 0, 1)"
      }
    ];
    this.chartOptions = {
      //bezierCurve: false,
      //lineTension: 0,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              // color: "rgba(0, 0, 0, 0)"
              display: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              // color: "rgba(0, 0,0 ,0 )"
              display: false
            }
          }
        ]
      }
    };
  }
}
