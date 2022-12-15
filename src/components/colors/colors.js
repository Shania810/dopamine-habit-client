const colors = ['#5b1d99','#0074b4','#00b34c','#ffd41f','#fc6e3d']
const randomColor = (value)=>{
    let color = 0
 if(value <= colors.length - 1){
  return colors[value]
 }else{
   if(!color === colors.length - 1){
     return colors[color]
   }else{
     color = 0
     return colors[color]
   }
 }
  
}
export default randomColor