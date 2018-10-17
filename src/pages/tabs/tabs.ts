import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FormularioPage } from '../formulario/formulario'
import { ListRemindersPage } from '../list-reminders/list-reminders'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListRemindersPage;
  tab3Root = FormularioPage

  constructor() {

  }
}
