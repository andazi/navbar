const body = document.querySelector("body"),
    sideBar = document.querySelector(".sidebar"),
    toggle = document.querySelector(".arrow"),
    searchBtn = document.querySelector(".search-icon"),
    modeBtn = document.querySelector(".toggle-btn"),
    modeText = document.querySelector(".toggle-text");

    toggle.addEventListener("click", () =>{
        sideBar.classList.toggle("close");
    });

    modeBtn.addEventListener("click", () => {
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Dark Mode"
        }else{
            modeText.innerText = "Light Mode"
        }
    });

    searchBtn.addEventListener("click", () =>{
        sideBar.classList.toggle("close");
    });

