import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'megasena';
  jogos: string [][];
  result: string[][]
  raffled = ['09', '19', '23', '32', '39', '45'];
  //raffled =["16", "20", "24", "29", "38", "50"]
  gameWithMoreHits = -1;
  maxHits = 0;
  HitSix = false;
  hitList = ['', '', 'Dupla', 'Terno', 'Quadra', 'Quina', 'Sena'];
  
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.jogos = [];
    this.sharedService.readFile().subscribe(data => {
      for (const line of data.split(/[\r\n]+/)) {
        this.jogos.push(line.split(":")[1].split(" "));
      }
      console.log("jogos: ", this.jogos);
      this.getSummary();
    });
  }

  numberFound(number) {
    return this.raffled.includes(number);
  }

  getSummary() {
    this.jogos.forEach(element => {
      let intersectionCount = _.intersection(this.raffled, element).length;
      if(this.maxHits < intersectionCount) {
        this.maxHits = intersectionCount;
      }
    });
    console.log("maxHits: ", this.maxHits);
    
  }

}
