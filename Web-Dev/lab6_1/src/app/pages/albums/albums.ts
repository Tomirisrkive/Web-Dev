import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { Observable } from 'rxjs'

import { AlbumService } from '../../services/album'
import { Album } from '../../models/album.model'

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums implements OnInit {

  albums$!: Observable<Album[] | null>

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albums$ = this.albumService.albums$
    this.albumService.loadAlbums()
  }

  deleteAlbum(id: number, event: MouseEvent): void {
    event.preventDefault()
    event.stopPropagation()

    this.albumService.deleteAlbum(id).subscribe()
  }
}
