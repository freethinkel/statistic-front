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
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      solution: ['', [Validators.required]],
      description: ['', [Validators.required]],
      link: ['', [Validators.required, Validators.pattern(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig)]],
      links: this.fb.array([])
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

  addLink() {
    if (this.questForm.controls.link.valid) {
      let group = this.fb.group({
        link: [this.questForm.value.link, Validators.required]
      });
      console.log(this.questForm);
      this.questForm.controls.links.push(group);
      this.questForm.controls.link.setValue('');
    }
  }

  saveQuest() {
    if (this.questForm.valid) {
      this.questsService.saveQuest(this.questForm.value, this.quest._id).subscribe((data) => {
        console.log(data);
        this.onClose.emit();
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
