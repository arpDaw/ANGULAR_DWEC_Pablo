import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService){

  }

  get gifs(){
    return this.gifsService.historial
  }

  buscar(query:string){
    console.log(query)
    this.gifsService.buscarGifs(query)
  }
}
