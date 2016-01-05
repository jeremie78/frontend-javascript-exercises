
function favoriteNumber(favoritenum,guess){
  if(guess > favoritenum){  document.write("Too high  ");}
  if(guess == favoritenum){  document.write("You got it !  ");}
  if(guess < favoritenum){  document.write("Too low  ");}
}
document.write("  <br><br>   favnum ->  ");
favoriteNumber(5,10);

document.write(" <br><br>   checklock ->  ");



function checkLock(first,second,third,fourth){

  if((first == 3)|| (first == 5) || (first == 7)){

    if(second == 2 ){

      if((third>=5) && (third<=100)){

        if((fourth<=9) || (fourth >=20)){

            document.write("Correct  ");
        }
        else document.write("incorrect  ");
      }
      else document.write("incorrect  ");
    }
    else document.write("incorrect  ");

  }
  else document.write("incorrect  ");
}

checkLock(5,2,45,1);
checkLock(1, 2, 45, 1);
checkLock(5, 2, 45, 10);

document.write("  <br><br>   canIGet  -> ");


function CanIGet(item,money){

  switch(item){

    case "MacBook Air" :
    if( money >= 999){
      return true;
    } else return false;

    case "MacBook Pro" :
    if( money >= 1299){
      return true;
    } else return false;

    case "Mac Pro" :
    if( money >= 2499){
      return true;
    } else return false;

    case "Apple Sticker" :
    if( money >= 1){
      return true;
    } else return false;
  }
}
var result = CanIGet('MacBook Air', 100);
document.write(result);
