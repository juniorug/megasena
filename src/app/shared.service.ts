import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  private megasenaURL = "http://www.loterias.caixa.gov.br/wps/portal/loterias/landing/megasena";
  readFile() {
    return this.http.get('assets/jogos.txt', { responseType: 'text' });
  }

  getMegaSenaCrawler() {
    return this.http.get(this.megasenaURL, { responseType: 'text' });
  }
}
