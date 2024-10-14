import { Routes } from '@angular/router';
import { BoardComponent } from './Components/board/board.component';
import { CardComponent } from './Components/card/card.component';

export const routes: Routes = [

    {
        path: 'Card',
        component: CardComponent,
        title:"Card page"
    }
];
