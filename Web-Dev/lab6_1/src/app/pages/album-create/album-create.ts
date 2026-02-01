import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { AlbumService } from '../../services/album'

@Component({
  selector: 'app-album-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-create.html'
})
export class AlbumCreate {

  userId = 1
  title = ''
  loading = false
  error = ''

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) {}

  createAlbum() {

    console.log('CREATE CLICK')

    if (!this.title || this.title.length < 3) {
      this.error = 'Title must be at least 3 characters'
      return
    }

    this.loading = true
    this.error = ''

    this.albumService.createAlbum({
      userId: this.userId,
      title: this.title
    }).subscribe({
      next: (res) => {
        console.log('SUCCESS', res)
        this.router.navigate(['/albums'])
      },
      error: (err) => {
        console.log('ERROR', err)
        this.error = 'Failed to create album'
        this.loading = false
      }
    })
  }

  cancel() {
    this.router.navigate(['/albums'])
  }
}
