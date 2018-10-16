import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListRemindersPage } from './list-reminders';

@NgModule({
  declarations: [
    ListRemindersPage,
  ],
  imports: [
    IonicPageModule.forChild(ListRemindersPage),
  ],
})
export class ListRemindersPageModule {}
