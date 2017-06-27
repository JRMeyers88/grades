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
var a = 0, b = 0, c = 0, d = 0, f = 0;

for (var i = 0; i < scores.length; i++){
	if (scores[i] >= 90) {
		a++;
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
	console.log("a", a);
	console.log("b", b);
	console.log("c", c);
	console.log("d", d);
	console.log("f", f);

scores.sort(function(a, b) {
  return a - b;
});
console.log("sort", scores.sort(function(a, b){
	return a - b;
}));
console.log("lowest score", scores[0]);
console.log("highest score", scores[scores.length - 1]);

