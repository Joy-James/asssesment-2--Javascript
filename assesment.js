/*1.Write a JavaScript function that receives five numbers as input and finds the largest of five numbers. Print the results to the console. */
 let a=-5;
 let b=-2;
let c=-6;
 let d= 0;
let f=-1;
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}



/*Write a JavaScript function which iterates the integers from 1 to 100 and prints them out.
 But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
 For multiple numbers of three and five, print "FizzBuzz"*/


	let i;
	for (i=1; i<=100; i++)
	{
	
		if (i%15 == 0)
			console.log("FizzBuzz" + " ");
		

		else if ((i%3) == 0)
			console.log("Fizz" + " ");			
		

		else if ((i%5) == 0)				
			console.log("Buzz" + " ");			
	
		else
			console.log(i + " ");			
	}


    /*What will be the result of the following code, explain*/
   /* let str = “1”; 

str = + !str; 

Console.log(typeof str); 
*/
/*answer is code will not execute since there is a syntax error this is because they have intialized the string with a 
number instead of string hence when logged there is an error also string data-type should have a name instead .
can be rectified by:*/

