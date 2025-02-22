// import data from '../js/data';
// convert comma-separated values into an array
countries = csv.split(',')
console.log("🚀 ~ countries:", countries)

// convert array into delimited string
console.log("🚀 ~ countries :", countries.join(','))

// check if these are arrays
console.log("🚀 ~ check CSV :", Array.isArray(csv))
console.log("🚀 ~ check countries :", Array.isArray(countries))

// sort a simple array 
countries.sort()
console.log("🚀 ~ sort countries :", countries)
countries.sort((a, b) => {
   return a.toUpperCase() < b.toUpperCase() ? -1 : a.toUpperCase() > b.toUpperCase() ? 1 : 0
})
console.log("🚀 ~ sort countries :", countries)

// reverse the sort
countries.sort().reverse()
console.log("🚀 ~ reverse sort countries :", countries)

// remove the first element
countries.shift()
console.log("🚀 ~ shift countries :", countries)

// remove the last element
countries.pop()
console.log("🚀 ~ remove by pop countries :", countries)

// add new elements to the front of the array
countries.unshift('United States', 'Austria')
console.log("🚀 ~ add new elements to the front of the array :", countries)

// search for element
console.log("🚀 ~ search countries :", countries.includes('Germany'))

// search for element index
console.log("🚀 ~ search index countries :", countries.indexOf('Germany'))

// make a new array by extracting from another array
console.log("🚀 ~ splice countries :", countries.splice(2, 3))
console.log("🚀 ~ remaining countries :", countries)


console.log('---------------------');

// there are other array methods which you will learn in Ch 10 */


// use a loop to output all cities whose continent=="NA"
for (let i = 0; i < cities.length; i++) {
   const element = cities[i];
   if (element.continent == 'NA') {
      console.log("🚀 ~ cities element:", element)
   }
}


console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
for (let i = 0; i < galleries.length; i++) {
   const element = galleries[i];
   if (element?.location?.country == 'USA') {
      console.log("🚀 ~ galleries element:", element.name)
   }
}


console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */
document.write('<ul>')
for (let i = 0; i < galleries.length; i++) {
   const element = galleries[i];
   if (element?.location?.country == 'USA') {
      document.write(`<li><a href = ${element.url}> ${element.name} <a/></li>`)
   }
}
document.write('</ul>')




