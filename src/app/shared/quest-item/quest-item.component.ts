import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-quest-item',
  templateUrl: './quest-item.component.html',
  styleUrls: ['./quest-item.component.styl']
})
export class QuestItemComponent implements OnInit {
  @Input() index;
  @Input() quest;
  isOpenModal;
  solution = '';
  constructor() { }

  ngOnInit() {
    console.log(this.quest);
  }

  openModal() {
    setTimeout(() => {this.isOpenModal = true});
  }

  closeModal() {
    if (this.isOpenModal) {
      this.isOpenModal = false;
    }
  }

}
