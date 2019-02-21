import { Component, Input, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { TreeItemComponent } from '../tree-item/tree-item.component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  @ViewChildren(TreeItemComponent, { read: TreeItemComponent}) treeItem: QueryList<TreeItemComponent>;

  @Input() branch: [];
  @Input() hidden: boolean;
  @Input() checked: boolean;

  @Output() selectedString: string;

  constructor() {
    this.branch = [];
    this.hidden = false;
   }

   toggle() {
     this.hidden = !this.hidden;
   }

   onChangeParent() {
    this.checked = !this.checked;
    this.treeItem.forEach(element => {
      element.checked = this.checked;
    });

    this.selectedString = this.treeItem.toArray().map(item => item.label).join(', ');
   }

   onChangeChild(input: TreeItemComponent) {
    input.checked = !input.checked;
    this.selectedString = this.treeItem.toArray().map(item => item.label).join(', ');
   }
}
