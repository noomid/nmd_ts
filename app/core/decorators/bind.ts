module.exports = function(target: any, key: string){
  // target.template_vars.push(key);
  var _val = this[key];

  // property getter
  var getter = function () {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  // property setter
  var setter = function (newVal) {
    _val = newVal;
    if(this.template_vars.indexOf(key) === -1){
        this.template_vars.push(key);
    }

    this.render();
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
