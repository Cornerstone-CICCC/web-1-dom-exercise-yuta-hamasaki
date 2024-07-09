const btn1 = document.querySelector("#btn1")
const output1 = document.getElementById("output1")

const btn2 = document.querySelector("#btn2")
const output2 = document.getElementById("output2")
const newSpan = document.createElement('span')
newSpan.textContent = "Hello world"

const btn3 = document.querySelector("#btn3")
const smallTxt = document.querySelector(".small-text", "#output3")

const btn4 = document.querySelector("#btn4")
const output4 = document.querySelector("#output4")

const btn5 = document.querySelector("#btn5")
const input = document.getElementById("message")

btn1.addEventListener("click", ()=>{
  if (output1.style.color === "red") {
    output1.style.color = ""
  } else {
    output1.style.color = "red"
  }
})

btn2.addEventListener("click", ()=>{
  if(output2.contains(newSpan) ){
    output2.removeChild(newSpan)
  }else{
    output2.append(newSpan)
  }
})

btn3.addEventListener("click",()=>{
  if(smallTxt.classList.contains("small-text")){
    smallTxt.classList.remove("small-text")
  }else{
    smallTxt.classList.add("small-text")
  }
})

btn4.addEventListener("click", ()=>{
  const paragraphs = output4.querySelectorAll("p");
  paragraphs.forEach(p => {
    if(p.style.backgroundColor === "red"){
      p.style.backgroundColor = ""
    }else{
      p.style.backgroundColor = "red"
    }
  });
})

btn5.addEventListener("click",()=>{
  console.log(input.value)
})