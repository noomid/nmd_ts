export function bind(target: any, key: string){
  // target.template_vars.push(key);
  var _val = this[key];

  // property getter
  var getter = function () {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  // property setter
  var setter = function (newVal) {
    this.template_vars = [key];
    
    this.render();
    console.log(this);
    console.log(key);
    console.log(target);
  };

  // Delete property.
  if (delete this[key]) {

    // Create new property with getter and setter
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}
