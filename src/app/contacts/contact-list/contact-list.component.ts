import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
    new Contact("1", "Bro. Jackson", "jackson@byui.edu", "208-496-3771", "https://web.byui.edu/Directory/Employee/jacksonk.jpg", null),
    new Contact("2", "Bro. Barzee", "barzeer@byui.edu", "208-496-3768", "https://web.byui.edu/Directory/Employee/barzeer.jpg", null)
  ];

  @Output() selectContactFired = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
  }

  selectContact(contact: Contact) {
    this.selectContactFired.emit(contact);
  }

}
