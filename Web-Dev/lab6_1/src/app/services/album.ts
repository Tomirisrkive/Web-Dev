import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { Album } from '../models/album.model'
import { Photo } from '../models/photo.model'

@Injectable({
  providedIn: 'root',
})
export class AlbumService {

  private api = 'https://jsonplaceholder.typicode.com'

  private albumsSubject = new BehaviorSubject<Album[] | null>(null)
  albums$ = this.albumsSubject.asObservable()

  constructor(private http: HttpClient) {}


  loadAlbums(): void {
    if (this.albumsSubject.value !== null) return

    this.http.get<Album[]>(`${this.api}/albums`).subscribe({
      next: (data) => this.albumsSubject.next(data),
      error: (err) => console.error(err),
    })
  }


  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.api}/albums/${id}`)
  }


  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.api}/albums/${album.id}`, album)
  }

  deleteAlbum(id: number): Observable<void> {
    return new Observable(observer => {

      const current = this.albumsSubject.value ?? []

      // remove locally
      this.albumsSubject.next(
        current.filter(album => album.id !== id)
      )

      observer.next()
      observer.complete()
    })
  }
  createAlbum(payload: { userId: number; title: string }): Observable<Album> {
    return new Observable(observer => {

      const fakeAlbum: Album = {
        id: Math.floor(Math.random() * 1000),
        userId: payload.userId,
        title: payload.title
      }

      const current = this.albumsSubject.value ?? []

      // optimistic update (UI update)
      this.albumsSubject.next([fakeAlbum, ...current])

      observer.next(fakeAlbum)
      observer.complete()
    })
  }

  // photos
  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.api}/albums/${id}/photos`)
  }
}
