import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemindersServiceProvider } from '../../providers/reminders-service/reminders-service';

/**
 * Generated class for the ListRemindersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-reminders',
  templateUrl: 'list-reminders.html',
})
export class ListRemindersPage {

  reminders = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public reminderService: RemindersServiceProvider) {
    
    this.refreshReminders()
  }

  refreshReminders() {
    this.reminders = this.reminderService.getAllReminders()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListRemindersPage');
  }

}
