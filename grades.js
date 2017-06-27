// // Use console.log() to output the following criteria:

// //     How many of each grade?
// //     What is the lowest grade?
// //     What is the highest grade?



// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// //create the object you want the scores to go into
// let gradesCount = {
// 	a:0,
// 	b:0,
// 	c:0,
// 	d:0,
// 	f:0
// }

// //create standard for loop
// for (var i = 0; i < scores.length; i++) {
// 	//if/else statement that each item in the array will loop through to determine placement
// 	if (scores[i] > 90 && scores[i] <= 100) {
// 		gradesCount.a++;
// 	} else if (scores[i] > 80 && scores[i] <= 91) {
// 		gradesCount.b++;
// 	} else if (scores[i] > 70 && scores[i] <= 81) {
// 		gradesCount.c++;
// 	} else if (scores[i] > 60 && scores[i] <= 71) {
// 		gradesCount.d++;
// 	} else if (scores[i] > 50 && scores[i] <= 61) {
// 		gradesCount.f++;
// 	}
// }

// console.log(gradesCount);

// scores.sort()
// console.log(scores[0]);
// console.log(scores[11]);

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 100];
//create grades with empty values to be increased
var a = 0, b = 0, c = 0, d = 0, f = 0;

//loop to run through array
for (var i = 0; i < scores.length; i++){
	//for any item in array (scores[i]) that meet perameter, increase by 1 (#++)
	if (scores[i] >= 90) {
		a++;
	//use "else if" for multiple perameters, end with "else"
	} else if (scores[i] >= 80 && scores[i] < 90) {
		b++;
	} else if (scores[i] >= 70 && scores[i] < 80) {
		c++;
	} else if (scores[i] >= 60 && scores[i] < 70) {
		d++
	} else {
		f++
	}
}
	//log each grade
	console.log("a", a);
	console.log("b", b);
	console.log("c", c);
	console.log("d", d);
	console.log("f", f);

//sort function takes first and second item in array and returns math to determine what is the larger value, workaround for 100 displaying as lesser number
scores.sort(function(a, b) {
  return a - b;
});
//need to console entire function
console.log("sort", scores.sort(function(a, b){
	return a - b;
}));
console.log("lowest score", scores[0]);
//length -1 will always display last item in array
console.log("highest score", scores[scores.length - 1]);

