import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { TodoComponent } from './todo/todo.component';

const appRoutes: Routes = [
    { path: 'todo', component: TodoComponent },
    { path: 'todo/:id', component: DetailComponent },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: '', redirectTo: '/todo', pathMatch: 'full' }
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
