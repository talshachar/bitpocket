import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor() { }
  
  @Input() contact : Contact;

  @Output() selectedContact = new EventEmitter();

  selectContact(contact) {
    this.selectedContact.emit(contact);
  }

  ngOnInit(): void {
  }

}
