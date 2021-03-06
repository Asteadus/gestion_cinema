import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CinemasComponent } from './components/user/cinemas/cinemas.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FilmFormComponent } from './components/admin/movies/film-form/film-form.component';
import { FilmsComponent } from './components/user/films/films.component';
import { GetOneMovieComponent } from './components/user/films/get-one-movie/get-one-movie.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';
import { MoviesComponent } from './components/admin/movies/movies.component';
import { GetOneMovieAdminComponent } from './components/admin/movies/get-one-movie-admin/get-one-movie-admin.component';
import { CinemaAdminComponent } from './components/admin/cinema-admin/cinema-admin.component';
import { GetOneCinemaAdminComponent } from './components/admin/cinema-admin/get-one-cinema-admin/get-one-cinema-admin.component';
import { SessionComponent } from './components/admin/session/session.component';
import { SessionUserComponent } from './components/user/session-user/session-user.component';
import { GetOneUserComponent } from './components/user/get-one-user/get-one-user.component';

const routes: Routes = [
  { path:"", redirectTo:"accueil", pathMatch:"full"},
  { path:"accueil",component:AccueilComponent},
  { path:"header",component:HeaderComponent},
  { path:"movies", component:FilmsComponent},
  { path:"movies/:id", component:GetOneMovieComponent},
  { path:"session", component:SessionUserComponent},
  {path: "admin/movies", component:MoviesComponent},
  {path: "admin/movies/:id", component:GetOneMovieAdminComponent},
  {path: "admin/cinema", component:CinemaAdminComponent},
  {path: "admin/cinema/:id", component:GetOneCinemaAdminComponent},
  {path: "admin/session", component:SessionComponent},
  {path: "user/name/:username", component:GetOneUserComponent},
  { path:"cinemas", component:CinemasComponent},
  { path:"connexion", component:ConnexionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
