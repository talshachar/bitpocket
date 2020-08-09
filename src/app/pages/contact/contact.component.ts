import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  contacts$: Contact[] = null;

  goToContact(contact: Contact) {
    console.log(contact._id);
    this.router.navigate([contact._id], { relativeTo: this.route });
  }

  get contacts() {
    this.contactService.query().subscribe(contacts => this.contacts$ = contacts);
    return this.contacts$;
  }

  ngOnInit(): void {
    this.contactService.loadContacts();
  }

}
