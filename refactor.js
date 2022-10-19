function returnRandomNumber() {
  const randomNumber = Math.random();
  return Math.round(randomNumber * 100)
}

const performsOperation ={
  sum: function (num) {return returnRandomNumbe() + num; },
  substract: function (num){return returnRandomNumbe() - num; },
  multiply : function (num){return returnRandomNumbe() * num; },
  divide : function (num) {return returnRandomNumber() / num; }
}

