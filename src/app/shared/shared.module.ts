import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { ListadoComponent } from './components/listado/listado.component';
import { CarritoComponent } from './components/carrito/carrito.component';


@NgModule({
  declarations: [HeaderComponent, InfoComponent, ListadoComponent, CarritoComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, InfoComponent, ListadoComponent, CarritoComponent]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders<SharedModule>{
    return {
      ngModule: SharedModule
    }
  }
}
