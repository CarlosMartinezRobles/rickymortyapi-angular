import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RmsyteService {
  private baseUrl:string= `https://rickandmortyapi.com/api/`;
  constructor(private http:HttpClient) { }
  
  public getData(endPoint:string){
    return this.http.get(this.baseUrl+endPoint);
  }
}
