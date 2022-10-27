
let einkaufsliste = []
function clickme(){
	let input = $("#textbox").val()
  einkaufsliste.push(input)

	$("#einkaufsliste").html("")
  for (let i of einkaufsliste) {
  let checkbox = '<input type="checkbox">'
 	 let item = $("<li></li>").html(checkbox + i)
 	 $("#einkaufsliste").append(item)
  }

  
}
