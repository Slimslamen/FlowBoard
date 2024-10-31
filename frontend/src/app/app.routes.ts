import { Routes } from '@angular/router';
import { CardComponent } from './Components/card/card.component';
import { CreateAccountComponent } from './Components/login/create-account/create-account.component';
import { UserComponent } from './Components/login/user/user.component';
import { HeroPageComponent } from './Components/hero-page/hero-page.component';
import { BoardComponent } from './Components/board/board.component';

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
    },
    {
        path: 'user',
        component: UserComponent,
        title: "user page"
    },
    {
        path: '',
        component: HeroPageComponent,
        title: "hero page"
    },
    {
        path: 'Board',
        component: BoardComponent,
        title: "Board page"
    }
];
