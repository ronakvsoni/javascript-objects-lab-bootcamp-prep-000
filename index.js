var recipes = {prop : 1, prop2:2}
function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
   var newObject = Object.assign({}, object)
   delete newObject[key]
   return newObject
}
var z = deleteFromObjectByKey(recipes,"prop")

//console.log(z)
//console.log(recipes)


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
var z = destructivelyDeleteFromObjectByKey(recipes,"prop")
console.log(recipes)