/*
0.  Потренировать создание обьектов всеми тремя способами

 let obj = {};
 let obj  = new Object();
 функция-конструктор
 */

let Obj1 = {
  key1: 'value1'
};

let instance1 = Object.assign({}, Obj1);

function Obj2 () {
  let key1 = 'value1';
}

let instance2 = new Obj2();

class Obj3 {
  constructor () {
    this.key1 = 'value1';
  }
}

let instance3 = new Obj3();

/*
1. Создать обьект Ордера через функцию конструктор , который :

Принимает в качестве параметров два обьекта и два массива  - Обьект ордера, Обьект Корзина товаров, Массив имен Пользователей, массив email

Реализуйте методы и свойства (по 2 свойства и метода кажлому обьекту)для работы с с этими тремя обьектами.

методы обьекта Ордер должны использовать методы и свойства вложенных обьектов
 */

class Order {
  constructor (order = {}, cart = {}, users = [], emails = []) {
    this.order = order;
    this.cart = cart;
    this.users = users;
    this.emails = emails;
  }

  addUser (userName) {
    if (!this.users.includes(userName)) this.users.push(userName);
    console.log(`${userName} was added`);
  }

  deleteUser (userName) {
    this.users = this.users.filter(user => user !== userName);
    console.log(`${userName} was deleted`);
  }

  addItem (itemName) {
    this.cart.itemName ? this.cart.itemName.quantity++ : this.cart[itemName] = {
      quantity: 1,
      price: 1
    };
  }

  removeItem (itemName) {
    if (this.cart.itemName) {
      this.cart.itemName.quantity > 2 ?
        this.cart.itemName.quantity-- : delete this.cart.itemName;
      return;
    }
    return 'Item was already deleted.';
  }

  listOrderItems () {
    let orderStr = '';
    Object.keys(this.cart)
      .forEach(item => orderStr += `${item}, \n`);
    console.log(orderStr);
  }

  calculateOrder () {
    let total = 0;
    for (let item in this.cart) {
      total += this.cart[item].quantity * this.cart[item].price;
    }
    console.log(total);
  }
}

let cart1 = {
  apple: {
    quantity: 5,
    price: 17
  },
  tomato: {
    quantity: 2,
    price: 25
  },
  peach: {
    quantity: 3,
    price: 40
  }
};

let order1 = new Order({}, cart1);
order1.addUser('Olha');
order1.addUser('Kate');
order1.deleteUser('Kate');
order1.listOrderItems();
order1.calculateOrder();
order1.addItem('onion');
order1.listOrderItems();
order1.calculateOrder();
order1.removeItem('apple');

/*
2.Создайте функцию-конструктор Calculator, который создаёт объекты с 4 методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств
min() возвращает разницу введенных свойств.
 */

class Calculator {
  num1 = 0;
  num2 = 0;

  _validateInput (value) {
    const containsOnlyDigits = /^[0-9]+$/;
    return (!isNaN(+value) && containsOnlyDigits.test(value));
  }

  read () {
    let num1 = prompt('Input first number.\nOnly digits are allowed.');
    this._validateInput(num1) ? this.num1 = +num1 : this.read();
    let num2 = prompt('Input second number.\nOnly digits are allowed.');
    this._validateInput(num2) ? this.num2 = +num2 : this.read();
  }

  sum () {
    return (this.num1 + this.num2);
  }

  mul () {
    return (this.num1 * this.num2);
  }

  min () {
    return (this.num1 - this.num2);
  }
}

let calculator = new Calculator();
calculator.read();
alert(`Sum = ${calculator.sum()}
Mul = ${calculator.mul()}
Min = ${calculator.min()}`);
