import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryComponent } from './components/query/query.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';

const routes: Routes = [
  {path:'home',component: ShopingCartComponent},
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path:'query',component:QueryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
