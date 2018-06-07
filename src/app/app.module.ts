import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './pages/main/main.component';
import { QuestComponent } from './pages/quest/quest.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { ModalComponent } from './shared/modal/modal.component';
import { UsersService } from './services/users.service';
import { QuestModalComponent } from './shared/quest-modal/quest-modal.component';
import { EditQuestModalComponent } from './shared/edit-quest-modal/edit-quest-modal.component';
import { QuestsService } from './services/quests.service';


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
    EditQuestModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [StorageService, AuthService, UsersService, QuestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
