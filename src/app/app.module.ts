import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './pages/main/main.component';
import { QuestComponent } from './pages/quest/quest.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { ModalComponent } from './shared/modal/modal.component';
import { UsersService } from './services/users.service';
import { QuestModalComponent } from './shared/quest-modal/quest-modal.component';
import { EditQuestModalComponent } from './shared/edit-quest-modal/edit-quest-modal.component';
import { ApiService } from './services/api.service';
import { environment } from '../environments/environment';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { QuestsService } from './services/quests.service';
import { QuestItemComponent } from './shared/quest-item/quest-item.component';
import { AutosizeDirective } from './directives/autosize.directive';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    QuestComponent,
    HeaderComponent,
    AdminComponent,
    LoginComponent,
    ModalComponent,
    QuestModalComponent,
    EditQuestModalComponent,
    QuestItemComponent,
    AutosizeDirective,
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: 'API_ROOT_URL', useValue: environment.api.baseUrl },
    { provide: 'HOSTNAME', useValue: environment.hostname,},
    UsersService, 
    ApiService,
    QuestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
