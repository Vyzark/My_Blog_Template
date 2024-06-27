import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "/home"},
    {path: "home", component: HomeComponent},
    {path: "posts", component: PostListComponent},
    {path: "contact", component: ContactComponent},
    {path: "new", component: NewPostComponent},
    {path: "**", redirectTo: "/home"},
];
