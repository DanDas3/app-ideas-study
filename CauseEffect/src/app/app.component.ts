import { Component } from '@angular/core';
import {faker} from '@faker-js/faker'
import {People} from './model/people.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CauseEffect';
  peoples: People[];

  constructor(){
    this.peoples = this.populatePeople();
  }

  private generatePeople(): People{
    let p: People = new People();
    faker.setLocale('pt_BR')
    p.name = faker.name.fullName();
    p.city = faker.address.cityName();
    p.country = faker.address.country();
    p.state = faker.address.state();
    p.street = faker.address.streetName();
    p.telephone = faker.phone.number();
    p.birthday = faker.date.birthdate().toDateString();

    return p;
  }

  private populatePeople(): People[]{
    let peoples: People[] = [];

    for (let index = 0; index < 10; index++) {
      peoples.push(this.generatePeople());
    }
    return peoples;
  }
}
