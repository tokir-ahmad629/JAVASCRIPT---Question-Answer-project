let showBtn = document.querySelector("#show-btn");
let questionCard= document.querySelector(".question-card");
let closeBtn = document.querySelector(".close-btn");
let submitBtn = document.querySelector(".submitBtn");
let questionsList = document.querySelector("#questions-list");
let questionInput = document.querySelector("#question-input");
let answerInput = document.querySelector("#answer-input");
let feedback = document.querySelector(".feedback");


showFrom = (e) => {
    e.preventDefault();
    questionCard.classList.add("showItem");
}
showBtn.addEventListener("click", showFrom);

    closeForm = (e) => {
        e.preventDefault();
        questionCard.style.display = 'none';
    }
closeBtn.addEventListener("click", closeForm);

  ansQuestion = (e) => {
    e.preventDefault();
        question = questionInput.value;
        answer = answerInput.value;

        if(question === "" || question === null || answer === "" || answer === null){
            feedback.classList.add("showItem","alert-danger");
            feedback.innerText = "cannot add empty values";
            setTimeout(() => {feedback.classList.remove("showItem","alert-danger")}, 3000);
        }else{
            
            const questionAns = document.createElement("p");
            questionAns.innerHTML = `<div class="card card-body flashcard my-3">
            <h4 class="text-capitalize">${question}</h4>
            <a href="#" onclick="myFunction(this)" class="text-capitalize my-3 show-answer">show/hide answer</a>
            <h5 class="answer mb-3">${answer}</h5>
            <div class="flashcard-btn d-flex justify-content-between">
                <a href="#" onclick="editFunction(this)" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a>
                <a href="#" onclick="deleteFunction(this)" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
            </div>`;
            questionsList.appendChild(questionAns);
        
        }
        questionInput.value = " ";
        answerInput.value = " ";
}
submitBtn.addEventListener("click", ansQuestion);


myFunction = (is) => {
    showans = is.nextElementSibling;
    console.log(showans);
    showans.classList.toggle("showItem");
}

editFunction = (edite) => {
    editeQuestion = edite.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    questionInput.value = editeQuestion;

    editeanswer = edite.parentElement.previousElementSibling.innerText;
    answerInput.value = editeanswer;

    deletQuestion = edite.parentElement.parentElement;
    deletQuestion.style.display = 'none';
}

deleteFunction = (del) => {
    deletItems = del.parentElement.parentElement;
    deletItems.style.display = 'none';
}