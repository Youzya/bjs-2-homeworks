"use strict";
function solveEquation(a, b, c) {

  let arr = [];
  let discriminant = b**2-4*a*c;// код для задачи №1 писать здесь
  if (discriminant === 0) {
    arr.push(- b / (2 * a));
  }
 else if (discriminant > 0) {
  arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
  arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  } 
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let S = amount - contribution;
  let P = percent/100/12;

  let percentNumb = parseFloat(percent);           
  let contributionNumb = parseFloat(contribution); 
  let amountNumb = parseFloat(amount);     

  if ((Number.isNaN(percentNumb) === true) || (percent <= 0) )  {
    return(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
   };

   if ((Number.isNaN(amountNumb) === true) || (amount <= 0))  { 
    return(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
   };

   if ((Number.isNaN(contributionNumb) === true) || (contributionNumb > amountNumb)) {
    return(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
   };
  

  let dateFrom = new Date();                                                                  
  let fullMonthsDataTo = date.getFullYear() * 12 ;              
  let fullMonthsDataFrom = dateFrom.getFullYear() * 12;           
  let n = fullMonthsDataTo - fullMonthsDataFrom;                  
  let Pay = S * (P + (P / (((1 + P)**n) - 1)));
  totalAmount = (Pay * n).toFixed(2);
  let answer = Number(totalAmount);
return answer;



  // код для задачи №2 писать здесь

  return totalAmount;
}
