class Turtle {
constructor (x = 0, y = 0){
   this.x = x
   this.y = y
   this.direction = 'East' 
   this.moves = [[this.x, this.y]] 
       this.maxX = 4
       this.maxY = 4
       this.minX = 0
       this.minY = 0
   this.location = [this.x, this.y]
}
   right(){
      if(this.direction === 'East'){
         this.direction = 'South' 
      } else if(this.direction === 'South'){
         this.direction = 'West'
      } else if(this.direction === 'West'){
         this.direction = 'North'
      } else if (this.direction === 'North') {
         this.direction = 'East'
         }
   }
   left(){
      if(this.direction === 'East'){
         this.direction = 'North' 
      } else if(this.direction === 'North'){
         this.direction = 'West'
      } else if(this.direction === 'West'){
         this.direction = 'South'
      } else if (this.direction === 'South') {
         this.direction = 'East'
         }

   }
   forward(numSteps) {
      let lastMove = this.moves[this.moves.length - 1]

      
      if(this.direction === 'East'){
         let newX = lastMove[0] + numSteps
         const newY = lastMove[1]

         const newMove = [newX, newY]
         this.moves.push(newMove)
         console.log(newMove)
      } else if(this.direction === 'North'){
         let newY = lastMove[1] - numSteps
         
         const newX = lastMove[0]

         const newMove = [newX, newY]
         this.moves.push(newMove)
         console.log(newMove)
      } else if(this.direction === 'West'){
         let newX = lastMove[0] - numSteps
         const newY = lastMove[1]

         const newMove = [newX, newY]
         this.moves.push(newMove)
         console.log(newMove)
      } else if (this.direction === 'South') {
         let newY = lastMove[1] + numSteps
         const newX = lastMove[0]

         const newMove = [newX, newY]
         this.moves.push(newMove)
         console.log(newMove)
         }
         
   }
   allPoints() {
      console.log(this.moves)
   }
   print() {
      let moves = this.moves
      for (let x = 0; x < 5; x++) {
      let line = []
      let icon = '𓆉  '
      
      for (let y = 0; y < 5; y ++) {
         let turtle_added = false
        
         for (let value of moves) {
            const value_x = value[0]
            const value_y = value[1]

               if (value_x === x && value_y === y) {
                  line.push(icon)
                  turtle_added = true
               } 
         }
         
         if ( turtle_added === false ) {
            line.push(' X ')

         }
        
      }
    
     console.log(line.join(' , '))
     
   }

   }
}



let turtle = new Turtle( 0, 0 )


    turtle.forward(3)
    turtle.right()
    turtle.forward(3)
    turtle.right()
    turtle.forward(3)
    turtle.allPoints()
    turtle.print()

    

   
   

