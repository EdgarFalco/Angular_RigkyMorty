import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { HomeComponent } from './home/home.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

const routes: Routes = [
  {
    path: 'acercade',
    component: AcercadeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tarjeta',
    component: TarjetaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
