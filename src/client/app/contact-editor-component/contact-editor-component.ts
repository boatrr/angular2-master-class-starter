import {Component} from 'angular2/core';
import {ContactsService} from '../contacts-service/contacts-service';
import {RouteParams} from 'angular2/router';
import {Router} from 'angular2/router';
import {Contact} from '../models/contact';
import {CloneService} from '../clone-service/clone-service';

@Component({
  selector: 'contact-editor-component',
  templateUrl: 'app//contact-editor-component/contact-editor-component.html',
  styleUrls: ['app//contact-editor-component/contact-editor-component.css'],
  providers: [],
  directives: [],
  pipes: [],
  template:
  `
  <div class="row">
    <form class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img [src]="INSERT_CONTACT_IMAGE"">
          <span class="card-title">{{contact.name}}</span>
        </div>
        <div class="card-content grey-text text-darken-4">
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">account_circle</i><input [(ngModel)]="contact.name" id="name" type="text" class="validate">
              <label class="active" for="name">Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">email</i><input [(ngModel)]="contact.email" id="email" type="text" class="validate">
              <label class="active" for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">phone</i><input [(ngModel)]="contact.phone" id="phone" type="text" class="validate">
              <label class="active" for="phone">Phone</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">cake</i><input id="birthday" type="date" class="validate">
              <label class="active" for="phone">Birthday</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">public</i><input id="website" type="text" class="validate">
              <label class="active" for="phone">Website</label>
            </div>
          </div>
          <fieldset>
            <legend><i class="material-icons prefix">location_city</i> Address</legend>

            <div class="row">
              <div class="input-field col s12">
                <input id="street" type="text" class="validate">
                <label class="active" for="street">Street</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="zip" type="text" class="validate">
                <label class="active" for="zip">Zipcode</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input id="city" type="text" class="validate">
                <label class="active" for="city">City</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="country" type="text"  class="validate">
                <label class="active" for="country">Country</label>
              </div>
            </div>
          </fieldset>
        </div>
        <div class="card-action">
          <button type="button" class="btn" (click)="cancel(contact)">Cancel</button>
          <button type="button" class="btn" (click)="save(contact)">Save</button>
        </div>
      </div>
    </form>
  </div>
  `
})
export class ContactEditorComponent {
  contact:Contact;
  router:Router;
  targetID;
  cloneService:CloneService<Contact>;
  constructor(params:RouteParams, contactsService:ContactsService, cloneService:CloneService<Contact>, router:Router) {
    this.contact = cloneService.createClone(contactsService.getContact(params.get('id')));
    this.router = router;
    this.targetID = params.get('id');
    this.cloneService = cloneService;
  }

  cancel(contact: Contact) {
    this.cloneService.abortChanges();
    this.router.navigate(['/ContactDetails', {id: this.targetID}]);
  }

  save(contact: Contact) {
    this.cloneService.commitChanges();
    this.router.navigate(['/ContactDetails', {id: this.targetID}]);
  }


}
