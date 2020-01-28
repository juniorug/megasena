import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'megasena';
  jogos: string [][];

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.jogos = [];
    this.sharedService.readFile().subscribe(data => {
      for (const line of data.split(/[\r\n]+/)) {
        this.jogos.push(line.split(":")[1].split(" "));
      }
      console.log("END! jogos: ", this.jogos);
    });
  }
}
