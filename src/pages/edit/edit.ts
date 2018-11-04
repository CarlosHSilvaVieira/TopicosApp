import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { RemindersServiceProvider } from '../../providers/reminders-service/reminders-service';
import { ReminderInterface } from '../../interfaces/reminder';
import { AlertController } from 'ionic-angular'

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  reminder: ReminderInterface

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private reminderService: RemindersServiceProvider) {
  
    this.reminder = navParams.get('reminder')
  }

  edit() {

    let alert: Alert
    const value: boolean = this.reminderService.updateReminder(this.reminder)
    if (value) {

      alert = this.alertCtrl.create({
        title: 'Sucesso',
        subTitle: 'Lembrete editado com sucesso',
        buttons: ['OK']
      })
    }
    else {
      alert = this.alertCtrl.create({
        title: 'Ops',
        subTitle: 'Erro ao tentar editar lembrete',
        buttons: ['OK']
      })
    }
    alert.present()
    this.navCtrl.pop()
  }

}
