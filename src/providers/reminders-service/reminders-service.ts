import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RemindersServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemindersServiceProvider {

  reminders = []
  lastId: number = 0

  constructor(public http: HttpClient) {
    console.log('Hello RemindersServiceProvider Provider');
  }

  addReminder(remind) {
    this.lastId++
    remind.id = this.lastId
    this.reminders.push(remind)
  }

  getAllReminders() {
    return this.reminders
  }

  getReminderById(id: number) {
    let reminder = null
    this.reminders.forEach(element => {
      
      if (element.id === id) {
        reminder = element
        return false
      }
    })
  
    return reminder
  }
}
