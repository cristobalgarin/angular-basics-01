import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Thor', 'Punisher', 'Liu Kang', 'Lex Luthor'];
  borrado: string = '';
  borrarPerro() {
    // var heroeBorrado = this.heroes.pop();
    // console.log(heroeBorrado);
    this.borrado = this.heroes.shift() || '';
  }

}