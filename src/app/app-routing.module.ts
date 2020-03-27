import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [{ 
    path: '', 
    redirectTo: '/shoping-list', 
    pathMatch: 'full' 
  },
  {
    path: 'shoping-list', 
    component: ShoppingListComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
