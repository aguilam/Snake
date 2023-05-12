let GameSpeed = 1500;
let Food = false;
const TickInterval = setInterval(Tick, GameSpeed);

function Tick() {
  if(Food == false){
    alert("Еда создана")
    Food = true
  }
}