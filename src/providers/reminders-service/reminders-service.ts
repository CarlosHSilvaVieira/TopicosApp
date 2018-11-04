import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReminderInterface } from '../../interfaces/reminder';

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

  updateReminder(element: ReminderInterface) {
    
    let value: boolean = false

    this.reminders.forEach(reminder => {

      if (element.id === reminder.id) {
        reminder = element
        value = true
        return false
      }
    })

    console.log(this.reminders)

    return value
  }

  deleteReminder(id: number) {

    const index: number = this.getIndex(id)
    this.reminders.splice(index, 1)
  }

  getIndex(id: number) {

    let position: number = this.reminders.length + 1

    this.reminders.forEach((reminder: ReminderInterface, index: number) => {

      if (id === reminder.id) {
        position = index
        return false
      }
    })

    return position
  }
}
