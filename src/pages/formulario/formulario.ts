import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesServiceProvider } from '../../providers/movies-service/movies-service';
import { RemindersServiceProvider } from '../../providers/reminders-service/reminders-service';

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

  reminder = {}
  movies = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesService: MoviesServiceProvider, public reminderService: RemindersServiceProvider) {
    this.movies = moviesService.getAllMovies()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  sendForm() {
    this.reminderService.addReminder(this.reminder)
    this.reminder = {}
  }

}
