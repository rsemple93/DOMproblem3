function addRow() {
	let table = document.getElementById("myTable");
	let newRow = table.insertRow(0)
	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);
	cell1.innerHTML = "NEW CELL1";
	cell2.innerHTML = "NEW CELL2";
	
}

