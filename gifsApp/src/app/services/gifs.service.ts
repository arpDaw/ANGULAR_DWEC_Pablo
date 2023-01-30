import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGIFResponse } from '../gifs/interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = '6FIba7fJ1XPU2wmHYbMxqjIgMY6zm3L0'
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs'
  private _historial:string[]=[]
  public resultados: any[] = []
  
  get historial(){
    return [...this._historial]
  }

  buscarGifs(query:string){
    if(query.trim().length === 0){
       return }
  if(!this._historial.includes(query.toLowerCase())){
    this._historial.unshift(query.toLowerCase())
    this._historial = this._historial.splice(0,10) 
    localStorage.setItem('historial', JSON.stringify(this._historial))
  }

  const params = new HttpParams()
  .set("api_key", this.apiKey)
  .set("limt", "10")
  .set("q", query)

    this.http.get<SearchGIFResponse>(`${ this.servicioUrl}/search`, {params})
    .subscribe((resp:any) =>{
      this.resultados = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultados))
    })
   
  

  }

  

  constructor(private http:HttpClient) {
    if(localStorage.getItem("historial")){
      this._historial = JSON.parse(localStorage.getItem("historial")!)
      this.resultados = JSON.parse(localStorage.getItem("resultados")!)
    }
   }


}
