import { Component, OnInit, Input, NgModule, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quest-item',
  templateUrl: './quest-item.component.html',
  styleUrls: ['./quest-item.component.styl']
})
export class QuestItemComponent implements OnInit {
  @Input() index;
  @Input() quest;
  @Input() permitter;
  @Output() solution = new EventEmitter();
  _solution:string = '';
  isOpenModal;
  showError;
  constructor() { }

  ngOnInit() {
    console.log(this.permitter);
  }

  openModal() {
    if (this.permitter[this.index-2] || this.index === 1) {
      setTimeout(() => {this.isOpenModal = true});
    } else {
      setTimeout(() => {this.showError = true;});
    }
  }

  closeModal() {
    if (this.isOpenModal) {
      this.solution.emit(this._solution.trim().toLowerCase());
      this.isOpenModal = false;
    } 
  }

  closeError() {
    if (this.showError) {
      this.showError = false;
    }
  }

}
