import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

import { tree } from '../assets/mock_tree.js';
import { TreeComponent } from './tree/tree.component.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zad3';

  tree = tree;

  // @ViewChildren(TreeComponent, { read: TreeComponent}) treeItem: QueryList<TreeComponent>;


  keyUp(input) {
    // console.log(input);
    // console.log(this.treeItem);
  }
}
