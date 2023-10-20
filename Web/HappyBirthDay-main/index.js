const contentLetterSrart_actived = "Tích tích, hãy bấm vào hộp quà và bức thư bên dưới để đọc thư!" //Lời mở đầu cho bức thư
const mainContentLetter = "Gửi em cô gái bé nhỏ của anh. Chúc mừng sinh nhật bé bún, chúc cho ngày sinh nhật của em sẽ thiệt là nhiều niềm vui và hạnh phúc. Chúc em càng ngày càng đẹp ra nè yêu anh nhiều hơn nè,... tóm lại là anh chúc mọi điều tốt đẹp luôn đến với em Hehe. \nAnh Yêu Emmm!" //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/cute-young-boy-kid-wearing-vest-and-hat-free-png.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/b4bbdb54b7152338d7143cb444a77f09.png"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư    
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            const effectType = setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                const mainContent = document.querySelector(".mainContent");
                mainContent.scrollTop = mainContent.scrollHeight;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                    clearTimeout(effectType);
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".startForm ");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".startForm ");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "white", "yellow", "orange", "blue"]

    for (let i = 0; i < count; i++) {
        const randomLeft = Math.floor(Math.random() * width);
        const randomTop = Math.floor(Math.random() * height / 2);
        const color = "white";
        const blur = Math.floor(Math.random() * 2);
        const widthEle = Math.floor(Math.random() * 5) + 15;
        const moveTime = Math.floor(Math.random() * 4) + 4;
    
        const div = document.createElement("div");
        div.classList.add("snow");
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)];
        div.style.borderRadius = `${Math.floor(Math.random() * 10 + 10)}px`;
        div.style.height = `${widthEle * Math.floor(Math.random() * 4 + 1)}px`;
        div.style.width = `${widthEle}px`;
        div.style.marginLeft = `${randomLeft}px`;
        div.style.marginTop = `${randomTop}px`;
        div.style.filter = `blur(${blurLv[blur]}px)`;
        div.style.animation = `moveLight ${moveTime}s ease-in-out infinite`;
    
        container.appendChild(div);
    }
}