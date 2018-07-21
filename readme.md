# Shepard's Journey

On page load : display background story
1st action: "click start button to start game"

Opener :
2nd Action: First scene will show with the beginning question deciding on which items to bring. (has ability to choose more than one item)
1st displays: Questions in question div, the items display in answers div (once item is selected the object will go into the items div)
object variables : staff = gives you additional damages; flute = extra sheep ; food = addtional health;
3rd Action : after object is selected. button set to timer will appear and the user to enter into the first scene.

First Scene : 
1st Action : Question shows in question div and options display in the answers div(these will be on click functions). 
2nd Action : If user chooses to go through swamp seconds and sheep are deducted. Else if user chooses to go around seconds are depleted. 

Second Scene : 
1st Action : Question shows in question div and options display in the answers div(these will be on click functions).
2nd Action : Option 1 will turn into an attack button: If user chooses to fight the wolf. each click of the attack button will do damage to the wolf and to your health. (if you have the staff wolf can be killed in one or two hits else this will take 5-6 hits depleting health ranking)
            Option 2 : On click user will lose (a determined amount of sheep) some time will also deplete (determined later);

Third Scene : 
1st Action :  Question shows in question div and options display in the answers div(these will be on click functions).
2nd Action : User encounters elves they can either choose the exchange sheep for lives or for health else if user can move on.

Fourth Scene : 
1st Action : Question shows in question div and options display in the answers div(these will be on click functions).
2nd Action : User will encounter a troll (click function) troll block users way ; user can either answer a question or fight . 
Fight : damage with an attack button (this will affect users health) if user chooses to attack without staff user dies else user losses health.
Question : if this option is selected user will answer question (if question is correct user gains health points else user losses health points.)

Final Scene : 
1st Action : Text Congrats you made it home ! 
displays : final health; final sheeps; time remaining.
Submit : This will go to firebase.

Game Over Scene : 
- if any on the health; sheep ; or time variables run out restart game from beginning.
- restart button