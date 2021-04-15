import { Component } from '@angular/core';
import { heroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroes: string[] = ['Ironman', 'Thor', 'Spiderman', 'Batman', 'Superman'];
  public heroeBorrado: string = '';
  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
