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
  @Input() index;
  @Output() save = new EventEmitter();
  questForm;
  constructor(private fb: FormBuilder, private questsService: QuestsService) { }

  ngOnInit() {
    this.initForm();
    console.log(this.quest);
  }

  initForm() {
    this.questForm = this.fb.group({
      name: new FormControl(this.quest.name, [Validators.required]),
      type: new FormControl(this.quest.type, [Validators.required]),
      solution: new FormControl(this.quest.solution, [Validators.required]),
      description: new FormControl(this.quest.description, [Validators.required]),
      links: new FormControl(this.quest.links, [Validators.required])
    });
  }

  saveQuest() {
    this.questsService.edit(this.index, this.questForm.value);
    this.save.emit();
  }

}
