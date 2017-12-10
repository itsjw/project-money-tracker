import { HomeComponent } from './components/home/home.component';
import { ItemContentComponent } from './components/item-content/item-content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: ':projectId',
                component: ItemContentComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
