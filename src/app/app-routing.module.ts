import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcartComponent } from './addcart/addcart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'',
    component:SidebarComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'productpage',
    component:ProductpageComponent
  },
  {
    path:'cartpage',
    component:AddcartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
