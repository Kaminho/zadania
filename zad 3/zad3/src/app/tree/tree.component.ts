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

  @Output() selected: string[];
  @Output() selectedEmitter =  new EventEmitter();

  constructor() {
    this.branch = [];
    this.hidden = false;
    this.checked = false;
   }

   toggle() {
     this.hidden = !this.hidden;
   }

   onChangeParent() {
     this.checked = !this.checked;
     this.treeItem.forEach(element => {
      element.checked = this.checked;
    });

    this.selected = this.treeItem.toArray().filter(item => item.checked).map(item => item.label);

    if (this.checked) { this.selected.unshift(this.branch['label']); }

    this.selectedEmitter.emit();
   }

   onChangeChild(input: TreeItemComponent) {
    input.checked = !input.checked;
    this.selected = this.treeItem.toArray().filter(item => item.checked).map(item => item.label);
    if (this.checked) { this.selected.unshift(this.branch['label']); }

    this.selectedEmitter.emit();
   }
}
