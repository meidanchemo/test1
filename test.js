//Roei Mizrahi , Meidan chemo

//Ex 1
const num = 123;
const m2 = Number(num % 2 === 0);
const m3 = Number(num % 3 === 0);
const m5 = Number(num % 5 === 0);

console.log((m2+m3+m5));

//Ex 2 
// פונקציה שבודקת אם מספר הוא ראשוני
function isPrime(num)
{
    if (num < 2) 
        return false; // 0 ו-1 אינם מספרים ראשוניים
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (num % i === 0) 
            return false; // אם נמצא מחלק, המספר אינו ראשוני
    
    return true; // המספר ראשוני
}

// לולאה להדפסת כל המספרים הראשוניים מתחת ל-237
for (let i = 2; i < 237; i++) 
    if (isPrime(i)) 
        console.log(i); // הדפס את המספר אם הוא ראשוני

//Ex3 
// הגדרת המערך
const numbers = [0, 50, 0, 300, 1200, 7, 0, 10];

// חישוב כמות הספרות '0'
const zeroCount = numbers
  .join('') // ממיר את כל המספרים במערך למחרוזת אחת
  .split('') // מפרק את המחרוזת למערך של תווים בודדים
  .filter(char => char === '0').length; // מסנן רק את הספרות '0' וסופר אותן

// הדפסת התוצאה
console.log(`Number of zeros in the array: ${zeroCount}`);

