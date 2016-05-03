import {Component} from 'angular2/core';
import {ContactHeaderComponent} from './contact-header-component/contact-header-component';
import {Contact} from './models/contact';
import {CONTACT_DATA} from './data/contact-data';
import {ContactsService} from './contacts-service/contacts-service'
import {ContactsListComponent} from './contacts-list-component/contacts-list-component'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'contacts-app',
  styleUrls: ['app/contacts-app.css'],
  directives: [
    ContactHeaderComponent,
    ROUTER_DIRECTIVES
  ],
  providers: [
    ContactsService,
    ROUTER_PROVIDERS
  ],
  template: `
    <contact-header-component></contact-header-component>
    <router-outlet></router-outlet>
          `
})
@RouteConfig([
  {
      path: '/',
      component: ContactsListComponent,
      name: 'ContactList'
    }
])

export class ContactsApp {}
