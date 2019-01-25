import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MoviesDetailComponent } from './movies/movies-detail/movies-detail.component';
import { MovieStartComponent } from './movies/movie-start/movie-start.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { AllMovieDetailsComponent } from './all-movies/all-movie-details/all-movie-details.component';

const appRoutes: Routes = [
    {path: 'movies', component: MoviesComponent, children: [
        {path: '', component: MovieStartComponent},
        { path: 'new', component: MovieEditComponent },
        {path: ':id',component: MoviesDetailComponent},
        { path: ':id/edit', component: MovieEditComponent },
    ]},
    {path: 'movielist', component: AllMoviesComponent},
    { path: 'movie/:movieID', component: AllMovieDetailsComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}