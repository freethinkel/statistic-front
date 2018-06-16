import { Component, OnInit, Input, NgModule, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quest-item',
  templateUrl: './quest-item.component.html',
  styleUrls: ['./quest-item.component.styl']
})
export class QuestItemComponent implements OnInit {
  @Input() index;
  @Input() quest;
  @Output() solution = new EventEmitter();
  _solution;
  isOpenModal;
  constructor() { }

  ngOnInit() {
  }

  openModal() {
    setTimeout(() => {this.isOpenModal = true});
  }

  closeModal() {
    if (this.isOpenModal) {
      this.solution.emit(this._solution.trim().toLowerCase());
      this.isOpenModal = false;
    }
  }

}
