import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGIFResponse } from '../gifs/interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = '6FIba7fJ1XPU2wmHYbMxqjIgMY6zm3L0'
  private _historial:string[]=[]
  public resultados: any[] = []

  get historial(){
    return [...this._historial]
  }

  buscarGifs(query:string){
    if(query.trim().length != 0 && !this._historial.includes(query.trim().toLowerCase())){
        this._historial.unshift(query.trim().toLowerCase())

    console.log(this._historial)
    }

    fetch("https://api.giphy.com/v1/gifs/search?api_key=6FIba7fJ1XPU2wmHYbMxqjIgMY6zm3L0&q=apple&limit=10").then(resp=>{
      resp.json().then(data => {
        console.log(data)
      })
    })
     
    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=6FIba7fJ1XPU2wmHYbMxqjIgMY6zm3L0&q=${query}&limit=10`)
    .subscribe((resp:any) =>{
      console.log(resp.data)
      this.resultados = resp.data;
    })

    if(query.trim())
    this._historial = this._historial.splice(0,10)
  
  }



  constructor(private http:HttpClient) { }


}
