import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { QuestsService } from '../../services/quests.service';

@Component({
  selector: 'app-edit-quest-modal',
  templateUrl: './edit-quest-modal.component.html',
  styleUrls: ['./edit-quest-modal.component.styl']
})
export class EditQuestModalComponent implements OnInit {
  @Input() quest;
  @Input() create;
  @Output() onClose = new EventEmitter();
  isOpen;
  questForm;
  constructor(private fb: FormBuilder,
              private questsService: QuestsService) { }

  ngOnInit() {
    if (this.create) {
      this.initForm();
    } else {
      this.initEditForm();
    }
    console.log(this.quest);
    setTimeout(() => {this.isOpen = true});
  }

  initEditForm() {
    this.questForm = this.fb.group({
      name: new FormControl(this.quest.name, [Validators.required]),
      type: new FormControl(this.quest.type, [Validators.required]),
      solution: new FormControl(this.quest.solution, [Validators.required]),
      description: new FormControl(this.quest.description, [Validators.required]),
      links: new FormControl(this.quest.links, [Validators.required])
    });
  }

  initForm() {
    this.questForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      solution: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      links: new FormControl('https://vk.com', [Validators.required])
    });
  }

  createQuest() {
    console.log('create');
    if (this.questForm.valid) {
      this.questsService.createQuest(this.questForm.value).subscribe((data) => {
        console.log(data);
      });
    }
  }

  saveQuest() {
    if (this.questForm.valid) {
      this.questsService.saveQuest(this.questForm.value, this.quest._id).subscribe((data) => {
        console.log(data);
      });
    }
  }

  close() {
    if (this.isOpen) {
      console.log('test');
      this.onClose.emit();
    }
  }


}
