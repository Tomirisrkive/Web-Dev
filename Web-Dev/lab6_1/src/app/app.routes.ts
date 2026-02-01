import { Routes } from '@angular/router'

import { Home } from './pages/home/home'
import { About } from './pages/about/about'
import { Albums } from './pages/albums/albums'
import { AlbumDetail } from './pages/album-detail/album-detail'
import { AlbumPhotos } from './pages/album-photos/album-photos'
import { AlbumCreate } from './pages/album-create/album-create'
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'home', component: Home },
  { path: 'about', component: About },

  { path: 'albums', component: Albums },

  // NEW PAGE ДОЛЖНА БЫТЬ РАНЬШЕ
  { path: 'albums/new', component: AlbumCreate },

  { path: 'albums/:id', component: AlbumDetail },
  { path: 'albums/:id/photos', component: AlbumPhotos },

  { path: '**', redirectTo: 'home' }
]
