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
      name: [this.quest.name, [Validators.required]],
      type: [this.quest.type, [Validators.required]],
      solution: [this.quest.solution, [Validators.required]],
      description: [this.quest.description, [Validators.required]],
      link: [],
      links: [this.quest.links, [Validators.required]]
    });
  }

  initForm() {
    this.questForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      solution: ['', [Validators.required]],
      description: ['', [Validators.required]],
      link: ['', [Validators.pattern(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig)]],
      links: this.fb.array([], Validators.required)
    });
  }

  createQuest() {
    if (this.questForm.valid) {
      console.log('create');
      this.questsService.createQuest(this.questForm.value).subscribe((data) => {
        console.log(data);
      });
    }
  }

  addLink() {
    if (this.questForm.controls.link.valid && this.questForm.controls.link.value.length) {
      let group = this.fb.group({
        link: [this.questForm.value.link, Validators.required]
      });
      console.log(this.questForm);
      this.questForm.controls.links.push(group);
      this.questForm.controls.link.setValue('');
    }
  }

  removeLink(i) {
    console.log(i);
    setTimeout(() => {this.questForm.controls.links.removeAt(i)});


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
    console.log('close');
    if (this.isOpen) {
      console.log('test');
      this.onClose.emit();
    }
  }


}
