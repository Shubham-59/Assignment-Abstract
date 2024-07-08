let feedbackArray = [];

const addFeedback = () => {
    const feedbackInput = document.getElementById('feedbackInput');
    const feedbackText = feedbackInput.value.trim();
    
    if (feedbackText !== "") {
        feedbackArray.push(feedbackText);
        feedbackInput.value = "";
        renderFeedbackList();
    } else {
        alert("Please enter a feedback.");
    }
}

// const renderFeedbackList = () => {
//     const feedbackList = document.getElementById('feedbackList');
//     feedbackList.innerHTML = feedbackArray.map(feedback => `
//         <div class="feedback-item">
//             ${feedback}
//         </div>
//     `).join('');
// }

const renderFeedbackList=()=>
{

    let str="";
    feedbackArray.forEach(feedback=>
    {
           str+=`
           
              <div class="feedback-item">
                ${feedback}
            </div>
           
           `
    }
    )
    document.getElementById("feedbackList").innerHTML=str
}
