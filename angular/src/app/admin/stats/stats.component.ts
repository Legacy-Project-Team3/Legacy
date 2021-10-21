import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  public i:number = 0;
  public id:string ='chart-container';
  public chartData: Object[];
  public marker: Object;
  public title: string;
  public items:any =[];
  ngOnInit(): void {
    this.chartData = [{ x: 1, y: 21 }, { x: 2, y: 24 }, { x: 3, y: 36 },
    { x: 4, y: 38 }, { x: 5, y: 54 }, { x: 6, y: 57 }, { x: 7, y: 70 }],
      this.title = 'Inflation - Consumer Price';
    this.marker = { visible: true };
  }
  Add() {
   this.id = 'chart-container' + this.i;
    var item = {
      "id":this.id,
      }
    this.items.push(item);
     this.i++;
  }
}
