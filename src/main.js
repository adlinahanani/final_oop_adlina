const { app, BrowserWindow } = require('electron');  //import library
const fs = require('fs')  // import library fs = bila guna text file, kena ada fs ni
const path = require('path') // path = directory

// capture apa button yang user, kalau click any button, ada function for each button
var btnCreate = document.getElementById('btnCreate')
var btnUpdate = document.getElementById('btnUpdate')
var btnRead = document.getElementById('btnRead')
var btnDelete = document.getElementById('btnDelete')
var fileName = document.getElementById('fileName')
var fileContents = document.getElementById('fileContents')

let pathName = path.join(__dirname, 'Files')

btnCreate.addEventListener('click', function(){  //creating text file when user click CREATE button
  let file = path.join(pathName, fileName.value) //first parameter = file directory, second paramter = file name
  let contents = fileContents.value
  fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
    if(err){
      return console.log(err)
    }
    fileName.value = ""
    fileContents.value = ""
    var txtfile = document.getElementById("fileName").value   
    alert(txtfile + " Text file was created!") 
    console.log("The file was created!")
  })
})

btnRead.addEventListener('click', function(){  //read contents of the created text file
  let file = path.join(pathName, fileName.value)
  fs.readFile(file, function(err, data){ 
    if(err){
      return console.log(err)
    }
    fileContents.value = data
    alert("The file will be read!")
    console.log("The file was read!")
  })
})

btnUpdate.addEventListener('click', function(){  //creating text file when user click UPDATE button
  let file = path.join(pathName, fileName.value)
  let contents = fileContents.value
  fs.writeFile(file, contents, function(err){ //param1: textfile yg kita nak write param2: apa yg kita nak write ke text file
    if(err){
      return console.log(err)
    }
    fileName.value = ""
    fileContents.value = ""
    var txtfile = document.getElementById("fileName").value
    alert(txtfile + " Text file was updated!")  
    console.log("The file was updated!")
  })
})

btnDelete.addEventListener('click', function(){  //delete file
  let file = path.join(pathName, fileName.value)
  fs.unlink(file, function(err){ 
    if(err){
      return console.log(err)
    }
    fileName.value = ""
    fileContents.value = ""
    alert("The file will be deleted!")
    console.log("The file was deleted!")
  })
})
