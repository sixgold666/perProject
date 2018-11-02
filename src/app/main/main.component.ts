import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
declare var echarts: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class mainComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit() {
  }
  startGame() {
    this.router.navigate(['/ballGame']);
  }
}
