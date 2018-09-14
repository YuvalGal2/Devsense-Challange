import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Image } from '../image.model';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private imageList: Image[] = [];
  private isCentered: boolean;
  constructor() { }

  addImage(image: Image) {
    if (!this.imageList.includes(image)) {
      if (this.imageList.length === 0) {
        this.isCentered = true;
      }
      else {
        this.isCentered = false;
      }
      this.imageList.push({ "path": image.path, id: image.id, "isCentered": this.isCentered });

    }
  }

  getImageList() {
    return of(this.imageList);
  }
}
