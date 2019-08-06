let color = document.getElementById('colorPicker');
let gridSize = document.getElementById('sizePicker');
let table = document.getElementById('pixelCanvas');


gridSize.addEventListener ('submit',function (e){
  e.preventDefault();
  cleanGrid()
  makeGrid();
});


function makeGrid() {
  const color = document.getElementById('colorPicker');
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;


  let r;
  let c;
  for (r = 0; r < height; r++) {
    const row = table.insertRow (r);
    for (c = 0; c < width; c++){
      const cell = row.insertCell (c);
      cell.addEventListener ('click', function colorCell(c){
        cell.style.backgroundColor = color.value;
      });
    }
  }
};

function cleanGrid () {
  while (table.hasChildNodes()){
    table.removeChild(table.firstChild);
  };
}
