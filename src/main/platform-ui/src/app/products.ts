export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Game XL',
    price: 799,
    description: 'A large game with one of the best gameplay',
    code: "game1"
  },
  {
    id: 2,
    name: 'Game Mini',
    price: 699,
    description: 'A great game with one of the best charactes',
    code: "game2"
  },
  {
    id: 3,
    name: 'Game Standard',
    price: 299,
    description: 'Cheapest game',
    code: "game3"
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/