import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'

import { AlbumService } from '../../services/album'
import { Photo } from '../../models/photo.model'

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css'],
})
export class AlbumPhotos implements OnInit {

  loading = true
  error = ''
  albumId = 0
  photos: Photo[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AlbumService
  ) {}

  ngOnInit(): void {

    const idParam = this.route.snapshot.paramMap.get('id')
    this.albumId = idParam ? Number(idParam) : 0

    if (this.albumId === 0) {
      this.loading = false
      this.error = 'Invalid album id'
      return
    }

    this.service.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data
        this.loading = false
      },
      error: () => {
        this.error = 'Failed to load photos'
        this.loading = false
      }
    })
  }

  back(): void {
    this.router.navigate(['/albums', this.albumId])
  }
}
