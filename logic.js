let user_score=0, system_score=0;

let choices=document.querySelectorAll(".choice");
let message=document.querySelector("#message");
let system_score_msg=document.querySelector("#systemscore");
let user_score_msg=document.querySelector("#userscore");
let choiceimages=document.querySelectorAll(".choiceimg");
let choice_msg=document.querySelectorAll(".choicemsg");

choices.forEach( (choice)=>
{
    choice.addEventListener("click", (evt)=>{
        let user_choice=choice.getAttribute("id");
        computeResult(user_choice);
    });
}
);


function computeResult(user_choice)
{
    let computer_choice=getComputerChoice();
    //console.log(user_choice, computer_choice);

    if(user_choice===computer_choice)
    {
        showDraw();
    }
    else
    {
        let user_win=true;

        if(user_choice==='rock')
        {
            user_win=computer_choice==="paper"?false:true;
        }
        else if(user_choice==='paper')
        {
            user_win=computer_choice==="rock"?true:false;
        }
        else
        {
            user_win=computer_choice==="rock"?false:true;
        }

        setScoreBoard(user_win);
        printResult(user_win, user_choice, computer_choice);
    }

    showChoices(user_choice, computer_choice);
}


function getComputerChoice()
{
    const options=["rock", "paper", "scissors"];
    let idx=Math.floor(Math.random() * 3);
    return options[idx];
}

function showDraw()
{
    message.innerText="It is a draw!, please try again";
    message.style.backgroundColor="grey";
}

function printResult(user_win, user_choice, computer_choice)
{
    if(user_win)
    {
        message.innerText=`You win!, your ${user_choice} beats ${computer_choice}`;
        message.style.backgroundColor="green";
    }
    else
    {
        message.innerText=`You lose!, ${computer_choice} beats your ${user_choice}`;
        message.style.backgroundColor="red";
    }

}

function setScoreBoard(user_win)
{
    if(user_win)
    {
        user_score++;
        user_score_msg.innerText=user_score;
    }
    else
    {
        system_score++;
        system_score_msg.innerText=system_score;
    }
}

function showChoices(user_choice, computer_choice)
{
    let left_img_url, right_img_url;

    if(user_choice==="rock")
    {
        left_img_url="./Images/left_rock.png";
    }
    else if(user_choice==="paper")
    {
        left_img_url="./Images/left_paper.png";
    }
    else
    {
        left_img_url="./Images/left_scissors.png";
    }

    if(computer_choice==="rock")
    {
        right_img_url="./Images/right_rock.png";
    }
    else if(computer_choice==="paper")
    {
        right_img_url="./Images/right_paper.png";
    }
    else
    {
        right_img_url="./Images/right_scissors.png";
    }

    //console.log(choice_msg);

    choiceimages[0].setAttribute("src", left_img_url);
    choiceimages[0].style.height="10rem";
    choiceimages[0].style.width="10rem";
    choice_msg[0].style.visibility="visible";

    choiceimages[1].setAttribute("src", right_img_url);
    choiceimages[1].style.height="10rem";
    choiceimages[1].style.width="10rem";
    choice_msg[1].style.visibility="visible";
}