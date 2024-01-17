function myTodo (deleteButton){
    const task = document.getElementById("inputdata").value.trim()
    if (task!== "") {
        // Created new div 
        const newtodo = document.createElement("div")
        newtodo.setAttribute("class" , "new-task")
        // Added text node
        newtodo.appendChild(document.createTextNode(task))


            // Add a delete icon
            const deleteIcon = document.createElement("img")
            deleteIcon.setAttribute("class" , "deleteicon")
            deleteIcon.src = "/To-do_App/image/delete.png"
            deleteIcon.addEventListener("click" , function(){
                newtodo.remove()
            })

           const updateIcon = document.createElement("img")
           updateIcon.setAttribute("class" , "update-icon")
           updateIcon.src = "/To-do_App/image/supergg.png"
           updateIcon.addEventListener("click" ,function(){
            const updatedTask = prompt("Update your to-do :")
           if (updatedTask !== "" && updatedTask !== null) {
            newtodo.firstChild.textContent = updatedTask        
           }
           })

           
        //    const updateButton  = document.createElement
       
        
        document.getElementById("lists").appendChild(newtodo)
        newtodo.appendChild(updateIcon)
        newtodo.appendChild(deleteIcon)

        document.getElementById("inputdata").value = ""
        
    }
    
}

