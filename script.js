const addBtn = document.getElementById("add_btn");
addBtn.addEventListener("click", addCourses);
const listEle = document.getElementById("listEle");

function addCourses(){
    const input = document.getElementById("text-field");
    let newLi = document.createElement("li");
    newLi.classList.add("list-group-item");
    newLi.className = "list-group-item d-flex justify-content-between";
    newLi.innerHTML = 
    `
        <h3 class="flex-grow-1">` + input.value +`</h3>
        <button class="btn btn-warning mx-2" onclick="editChapter(this)">Update</button>
        <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>
    `
    listEle.appendChild(newLi);
}

function removeChapter(currElement){
    currElement.parentElement.remove();
}

function editChapter(currElement){
    if(currElement.textContent === "Done"){
        currElement.textContent = "Edit";
        let currChapterName = currElement.previousElementSibling.value;
        let currentHeading = document.createElement('h3');
        currentHeading.className = "flex-grow-1";
        currentHeading.textContent = currChapterName;
        currElement.parentElement.replaceChild(currentHeading, currElement.previousElementSibling);

    }
    else{
        currElement.textContent = "Done";
        let currChapterName = currElement.previousElementSibling.textContent;
        let currentInput = document.createElement('input');
        currentInput.type = "text";
        currentInput.className = "form-control";
        currentInput.placeholder = currChapterName;
        currentInput.value = currChapterName;
        currElement.parentElement.replaceChild(currentInput, currElement.previousElementSibling);
    }
}