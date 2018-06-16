import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-quest-done',
  templateUrl: './modal-quest-done.component.html',
  styleUrls: ['./modal-quest-done.component.styl']
})
export class ModalQuestDoneComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
