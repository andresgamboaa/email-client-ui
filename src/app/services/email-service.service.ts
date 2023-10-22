import { Injectable } from '@angular/core';
import {Email} from '../email.model'
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  inbox: Email[] = [];
  sent: Email[] = []

  constructor() {
    this.inbox = faker.helpers.multiple(createRandomEmail, {
      count: 15,
    });   
  }

  getInbox() {
    return this.inbox
  }
}

function createRandomEmail(): Email {
  let authorId = faker.person.fullName()
  return {
    Id: faker.string.uuid(),
    authorId: authorId,
    author: faker.internet.email({
      firstName: authorId.split(" ")[0],
      lastName: authorId.split(" ")[1]
    }),
    subject: faker.company.buzzPhrase(),
    content: faker.lorem.words(600),
    date: faker.date.recent().toISOString()
  }
}