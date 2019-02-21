import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss']
})
export class TreeItemComponent {

  @Input() value: string;
  @Input() label: string;
  @Input() checked: boolean;

  constructor() {
    this.value = '';
    this.label = '';
    this.checked = false;
   }
}
