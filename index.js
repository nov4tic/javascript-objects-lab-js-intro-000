var recipes = {Eggs: 3}

var updateObjectWithKeyAndValue = (obj, key, value) => Object.assign({}, obj, {[key]: value});

var destructivelyUpdateObjectWithKeyAndValue = (obj, key, value) => Object.assign(obj, {[key]: value});

var deleteFromObjectByKey = (obj, key) => {
  var newObj = Object.assign({}, obj);
  delete newObj[key];
  return newObj;
}

var destructivelyUpdateObjectWithKeyAndValue = (obj, key) => delete obj[key];