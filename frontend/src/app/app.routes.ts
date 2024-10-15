import { Routes } from '@angular/router';
import { CardComponent } from './Components/card/card.component';
import { CreateAccountComponent } from './Components/login/create-account/create-account.component';

export const routes: Routes = [

    {
        path: 'Card',
        component: CardComponent,
        title:"Card page"
    },
    {
        path: 'create-account',
        component: CreateAccountComponent,
        title: "create-account page"
    }
];
