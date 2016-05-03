import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ContactsService} from '../contacts-service/contacts-service';
import {RouteParams} from 'angular2/router';
import {Contact} from '../models/contact';

@Component({
  selector: 'contact-detail-component',
  templateUrl: 'app//contact-detail-component/contact-detail-component.html',
  styleUrls: ['app//contact-detail-component/contact-detail-component.css'],
  providers: [
    ContactsService
  ],
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  template:
  `
  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img [src]="contact.image">
          <span class="card-title">{{contact.name}}</span>
        </div>
        <div class="card-content grey-text text-darken-4">
          <div class="row">
            <span class="col s6"><i class="material-icons prefix">email</i> Email:</span>
            <span class="col s6">{{contact.email}}</span>
          </div>
          <div class="row">
            <span class="col s6"><i class="material-icons prefix">phone</i> Phone:</span>
            <span class="col s6">{{contact.phone}}</span>
          </div>
          <div class="row">
            <span class="col s6"><i class="material-icons prefix">cake</i> Birthday:</span>
            <span class="col s6">I{{contact.birthday}}</span>
          </div>
          <div class="row">
            <span class="col s6"><i class="material-icons prefix">public</i> Website:</span>
            <span class="col s6">{{contact.website}}</span>
          </div>
          <fieldset>
            <legend><i class="material-icons prefix">location_city</i> Address</legend>
            <div class="row">
              <span class="col s6">Street:</span>
              <span class="col s6">{{contact.street}}</span>
            </div>
            <div class="row">
              <span class="col s6">Zipcode:</span>
              <span class="col s6">{{contact.address.zip}}</span>
            </div>
            <div class="row">
              <span class="col s6">City:</span>
              <span class="col s6">{{contact.address.city}}</span>
            </div>
            <div class="row">
              <span class="col s6">Country:</span>
              <span class="col s6">{{contact.address.country}}</span>
            </div>
          </fieldset>
        </div>
        <a [routerLink]="['/ContactEditor', {id: contact.id}]">
        <div class="card-action">
          <a class="btn">Edit</a>
        </div>
          </a>
        <div class="card-action">
          <a class="btn" [routerLink]="['/ContactList']">Go Back</a>
        </div>
      </div>
    </div>
  </div>
  `
})
export class ContactDetailComponent {

  contact:Contact;
  constructor(params:RouteParams, contactsService:ContactsService) {
    this.contact = contactsService.getContact(params.get('id'));
  }


}
