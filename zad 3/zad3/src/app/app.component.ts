import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import { tree } from '../assets/mock_tree.js';
import { TreeComponent } from './tree/tree.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'zad3';

  tree: any[];
  selectedString: string;

  @ViewChildren(TreeComponent, { read: TreeComponent}) checkboxTree: QueryList<TreeComponent>;

  constructor() {
    this.tree = tree;
    this.selectedString = '';
  }

  // ngAfterViewInit() {
  //   this.checkboxTree.changes.subscribe(a => {

  //     if (a.toArray().length === 0) { return; }

  //     const selected = this.selectedString.split(', ');
  //     selected.splice(selected.length - 1, 1);
  //     console.log(selected);
  //     this.checkboxTree.forEach(element => {
  //       // element.checked = true;
  //       console.log(element);
  //       // element.checked = selected.includes(element.branch['label']);
  //       //   element.treeItem.forEach(el => {
  //       //   el.checked = true;
  //       // });
  //     });
  //   });
  // }

  keyUp(input) {
    const tmp = JSON.parse(JSON.stringify(tree));
    this.tree = [];
    tmp.forEach(element => {
      element.children = element.children.filter(x =>
        x.label.includes(input.value)
      );

      if (element.children.length > 0) {
        this.tree.push(element);
      }
    });
  }

  selectedEmitter() {
    this.selectedString = '';
    this.checkboxTree.forEach(element => {
      if (element.selected) {
        this.selectedString += element.selected.join(', ');
      }
      if (
        element !== this.checkboxTree.last &&
        element.selected.length > 0
      ) { this.selectedString += ', '; }
    });
  }
}
