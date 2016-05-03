import {Component} from 'angular2/core';
import {Contact} from '../models/contact';
import {CONTACT_DATA} from '../data/contact-data';
import {ContactsService} from '../contacts-service/contacts-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'contacts-list-component',
  templateUrl: 'app//contacts-list-component/contacts-list-component.html',
  styleUrls: ['app//contacts-list-component/contacts-list-component.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  template: `
  <ul class="collection">
    <li class="collection-item avatar" *ngFor="#contact of contacts">
    <a [routerLink]="['/ContactDetails', {id: contact.id}]">
    <img [src]="contact.image" alt="" class="circle">
    <span class="title">{{contact.name}}</span>
    </a>
    </li>
  </ul>
  `
})
export class ContactsListComponent {

  contacts: Array<Contact>;
  constructor(contactsService: ContactsService) {
    this.contacts = contactsService.getContacts();
  }

  

}
