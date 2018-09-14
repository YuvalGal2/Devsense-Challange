import { Image } from './image.model';
import { GalleryService } from './shared/gallery.service';
import { RootService } from './../home/shared/root.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;
  private gallerySubscription: Subscription;
  imageList: Image[] = [];
  imageID: number;
  constructor(private route: ActivatedRoute, private router: Router, private rootService: RootService, private galleryService: GalleryService) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => this.imageID = Number(params['imagePath']));
    this.gallerySubscription = this.galleryService.getImageList().subscribe((list: Image[]) => {
      if (!list.length) {
        this.router.navigate(['./home'])
      } else {
        this.imageList = list;
        console.log(this.imageList);

      }
    })
  }

  onSetPrimary(image: Image): void {
    this.imageList.forEach(img => {
      if(img !== image) {
        img.isCentered = false;
      } else {
        img.isCentered = true;
      }
    });
    this.imageList = this.imageList.filter(img => img.id !== image.id);
    this.imageList.unshift(image);
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.gallerySubscription.unsubscribe();
  }
}

