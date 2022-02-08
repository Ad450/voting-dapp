abstract class Validator {
  static regex = new RegExp('[\w_]+@[a-z]+\.[a-z]{2,5}$');

  static validateEmail(email :string):boolean{
    if(email === '' || email === null){
      return false;
    }

    return  this.regex.test(email);
  }
}


export default Validator;