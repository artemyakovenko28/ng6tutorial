export class User {

  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;

  // constructor(id: number, name: string, username: string, email: string,
  //             address: Address, phone: string, website: string, company: Company) {
  //   this.id = id;
  //   this.name = name;
  //   this.username = username;
  //   this.email = email;
  //   this.address = address;
  //   this.phone = phone;
  //   this.website = website;
  //   this.company = company;
  // }
}

class Address {

  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressGeo;

  // constructor(street: string, suite: string, city: string, zipcode: string, geo: AddressGeo) {
  //   this.street = street;
  //   this.suite = suite;
  //   this.city = city;
  //   this.zipcode = zipcode;
  //   this.geo = geo;
  // }
}

class AddressGeo {

  lat: string;
  lng: string;

  constructor(lat: string, lng: string) {
    this.lat = lat;
    this.lng = lng;
  }
}

class Company {
  name: string;
  catchPhrase: string;
  bs: string;

  // constructor(name: string, catchPhrase: string, bs: string) {
  //   this.name = name;
  //   this.catchPhrase = catchPhrase;
  //   this.bs = bs;
  // }
}
