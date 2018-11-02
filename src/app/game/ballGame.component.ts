/**
 * Created by Administrator on 2018/10/16.
 */
import { Component , OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ballGame',
  templateUrl: './ballGame.component.html',
  styleUrls: ['./ballGame.component.scss']
})
export class ballGameComponent implements OnInit {
  constructor( private location: Location) {}
  ngOnInit() {}
  goBack() {
    this.location.back();
  }
}
