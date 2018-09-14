import { Component, OnInit } from '@angular/core';
import { RootService } from '../shared/root.service';
import { Root } from '../shared/root.model';

@Component({
  selector: 'app-root-list',
  templateUrl: './root-list.component.html',
  styleUrls: ['./root-list.component.css']
})
export class RootListComponent implements OnInit {

  constructor(private rootService: RootService) { }

  root: Root;

  ngOnInit() {}

  getRoot() {
    this.rootService.getNodes().subscribe((root: Root) => {
      this.root = root;
    },
    (error) => {
      alert(`Error ${error.status} - ${error.statusText}`);
   
    }

  
  );
  }
}
