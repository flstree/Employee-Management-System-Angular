export class Employee {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
  designation: string;
  avatar: string;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
