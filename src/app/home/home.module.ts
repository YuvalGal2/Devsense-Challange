import { GalleryComponent } from './../gallery/gallery.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootListComponent } from './root-list/root-list.component';
import { NodeComponent } from './root-list/root/root.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:'picture/:imagePath',component:GalleryComponent,pathMatch:"full"}
    ])
  ],
  declarations: [RootListComponent, NodeComponent, HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
