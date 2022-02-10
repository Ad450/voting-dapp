abstract class Validator {
  static regex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  static validateEmail(email :string):boolean{
    if(email === '' || email === null){
      return false;
    }

    return  this.regex.test(email);
  }
}


export default Validator;