import {Component} from 'angular2/core';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';
import {CONTACT_DATA} from './data/contact-data';
import {ContactsService} from './contacts-service/contacts-service'
import {ContactsListComponent} from './contacts-list-component/contacts-list-component'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactDetailComponent} from './contact-detail-component/contact-detail-component';
import {ContactEditorComponent} from './contact-editor-component/contact-editor-component';
import {CloneService} from './clone-service/clone-service';

@Component({
  selector: 'contacts-app',
  styleUrls: ['app/contacts-app.css'],
  directives: [
    ContactHeaderComponent,
    ROUTER_DIRECTIVES
  ],
  providers: [
    ContactsService,
    ROUTER_PROVIDERS,
    CloneService
  ],
  template:
  `
    <contact-header-component></contact-header-component>
    <router-outlet></router-outlet>
  `
})
@RouteConfig([
  {
      path: '/',
      component: ContactsListComponent,
      name: 'ContactList'
  },
  {
    path: '/contacts/:id',
    component: ContactDetailComponent,
    name: 'ContactDetails'
  },
  {
    path: '/contact/:id/edit',
    component: ContactEditorComponent,
    name: 'ContactEditor'
  }
])

export class ContactsApp {

}
