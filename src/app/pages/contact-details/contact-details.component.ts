import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  selectedContactId: string = null;

  get contact(): Contact {
    let selectedContact = null;
    this.contactService.getContactById(this.selectedContactId).subscribe(contact => selectedContact = contact);
    return selectedContact;
  }

  ngOnInit(): void {
    this.selectedContactId = this.route.snapshot.paramMap.get('id');
  }

}