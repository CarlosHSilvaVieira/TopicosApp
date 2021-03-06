import { Calendar } from '@ionic-native/calendar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesServiceProvider } from '../../providers/movies-service/movies-service';
import { RemindersServiceProvider } from '../../providers/reminders-service/reminders-service';
import { ReminderInterface } from '../../interfaces/reminder';
import { addHours } from 'date-fns'
import { AlertController } from 'ionic-angular'
import { FormGroup, FormControl } from '@angular/forms';
/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  registerForm
  reminder: ReminderInterface = {
    title: '',
    movie: null,
    locale: '',
    notes: '',
    date: new Date(),
    total_price: 0,
  }
  movies = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesService: MoviesServiceProvider, public reminderService: RemindersServiceProvider, private calendar: Calendar, public alertCtrl: AlertController) {
    this.movies = moviesService.getAllMovies()
    this.registerForm = new FormGroup({

      title: new FormControl(),
      movie: new FormControl(),
      date: new FormControl(),
      notes: new FormControl(),
      local: new  FormControl(),
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  sendForm() {
    this.reminderService.addReminder(this.reminder)

    this.calendar.openCalendar(new Date()).then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );

    this.calendar.createEventInteractivelyWithOptions(this.reminder.title, this.reminder.locale, this.reminder.notes, new Date(this.reminder.date), addHours(this.reminder.date, 1))
      .then((algo) => { console.log(algo); this.cleanReminder()})
      .catch((err) => { this.alertCtrl.create({ title: 'Erro', subTitle: err }) })
  }

  cleanReminder() {
    this.reminder = {
      title: '',
      movie: null,
      locale: '',
      notes: '',
      date: new Date(),
      total_price: 0,
    }

    this.registerForm.reset()
  }

}
