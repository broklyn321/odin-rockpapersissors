
let choicepc;
let wr="pc wins by rock";
let wp="pc wins by paper"
let ws="pc wins by sissiors"
let count=0;
while(count<6)
{
let choiceme=prompt("enter choice");
function winner(choiceme)
{
if(choiceme=="rock")
{
 count=count+1;
 return wp
}
 else if(choiceme=="paper")
 {
  count=count+1;
  return ws
 }
  else if(choiceme=="sissors")
  {
   count=count+1;
   return wr
  }
}
console.log(winner(choiceme))
}
console.log("score of winner",count)