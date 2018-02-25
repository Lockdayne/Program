do {var sum = prompt("Enter your number");}
while (Number.isInteger(parseInt(sum)) == false);

// Generating an array with random numbers
var lenghtArr = 100;
var max = 50;
var min = -50;
var unSortedArr = [];
while(unSortedArr.length < lenghtArr){
  var randomnumber=Math.ceil(Math.random() * (max - (min-1)) + (min-1));
  unSortedArr.push(randomnumber);  }

// Sorting an array in ascending order of numbers
var sortedArr = unSortedArr.sort(function(a,b){return a - b});

// Removing duplicate numbers from an array, except for our number divisible by 2
k = sortedArr.length;
while (k--) { if (sortedArr[k] == sortedArr[k-1] && sortedArr[k] !== sum/2)
			{ sortedArr.splice(k, 1); }  }

// Finding the sum of two numbers which in sum are equal to the required number
var i = 0 ;
var j = sortedArr.length - 1;
var start, end, tempSum;
var found = false;
var allResult = [];

while (i < j) {

	start = sortedArr[i];
    end = sortedArr[j];
	tempSum = start + end;
		    if (start == sum/2 && end == sum/2) { allResult.push(start +' + '+ end +' = ' +sum);
                							      found = true;
		   										  break;}
			else if (tempSum == sum)    		{ allResult.push(start +' + '+ end +' = ' +sum);
										 		  found = true;
												  i++;
     											  j--; }
			else if (tempSum > sum)    			{ j--; }
			else                      			{ i++; }
	}

// Displaying the result on the screen
allResult.reverse();
if (found == true) {document.write("<h3 align='center'> Result: </h3>");
for (var z=0;  z < allResult.length;z++) {document.write("<h4 align='center'>"+ allResult[z] +"</h4>");}}

// There are no such numbers whose sum is equal to the required number
else { alert ("There are no such numbers whose sum is equal to the required number : "+ sum);}
