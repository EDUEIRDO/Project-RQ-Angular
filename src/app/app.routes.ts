import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ProfileComponent } from './profile/profile.component';
import { InterestsComponent } from './interests/interests.component';

export const routes: Routes = [
    { path: 'recipes', component: RecipesComponent }, 
    { path: 'profile', component: ProfileComponent },
    { path: 'interests', component: InterestsComponent },
];

