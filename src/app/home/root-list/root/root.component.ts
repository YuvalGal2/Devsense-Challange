
import { Component, Input, OnInit } from '@angular/core';
import { Root } from '../../shared/root.model';
import { RootService } from '../../shared/root.service';
import { GalleryService } from '../../../gallery/shared/gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class NodeComponent implements OnInit {

  @Input() root: Root;
  @Input() indent = 20;
  imgID: number;
  private isAlreadyActive: boolean;
  constructor(private rootService: RootService, private galleryService: GalleryService) { }

  ngOnInit() {
    if (this.root.type == 1) {
      this.imgID = +this.root.url.split('id=')[1].split(/[ >]/)[0];
      this.galleryService.addImage({ "id": this.imgID, "path": this.root.url,isCentered : false });
    }
  }

  getRoot(rootPath: string = '') {
    if (!this.isAlreadyActive) {
      this.rootService.getNodes(rootPath).subscribe((root: Root) => {
        this.root = root;
        this.isAlreadyActive = true;
      });
    }
  }


}
