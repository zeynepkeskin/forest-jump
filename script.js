 document.addEventListener("DOMContentLoaded", function() {
    var bird = document.getElementById("bird");
    var tree = document.getElementById("tree");
    var score = 0;
    
    function jump() {
        bird.classList.add("jump");
        setTimeout(() => {
        bird.classList.remove("jump");
        score++;
        }, 550);
        document.getElementById("score").innerHTML="score:"+ score;
    }
    document.body.onclick = jump;
    });
    
    function checkCollision(div1, div2) {
        var div1Rect = div1.getBoundingClientRect();
        var div2Rect = div2.getBoundingClientRect();
      
        return !(
          div1Rect.right < div2Rect.left ||
          div1Rect.left > div2Rect.right ||
          div1Rect.bottom < div2Rect.top ||
          div1Rect.top > div2Rect.bottom
        );
      }
    
      function gameOver() {
        document.getElementById("gameOver").style.display="block";
      }
      
      setInterval(function() {
        if (checkCollision(bird, tree)) {
          gameOver()
        }
      }, 10);
      

