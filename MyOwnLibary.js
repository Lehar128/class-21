
function collision(A,B){


    if (A.x - B.x < B.width/2 + A.width/2
      && B.x - A.x < B.width/2 + A.width/2) {
    A.velocityX = A.velocityX * (-1);
    B.velocityX = B.velocityX * (-1);
  }
  if (A.y - B.y < B.height/2 + A.height/2
    && B.y - A.y < B.height/2 + A.height/2){
    A.velocityY = A.velocityY * (-1);
    B.velocityY = B.velocityY * (-1);
  }
  
  
  
  
  }