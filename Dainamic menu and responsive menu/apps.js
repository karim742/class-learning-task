const dropdownLi = document.querySelectorAll("li.dropdown");

dropdownLi.forEach(function (dropdownLI) {
    dropdownLI.querySelector('span').innerHTML += '<i class="fas fa-caret-down"></i>';

    dropdownLI.addEventListener("click", function (e) {
        e.stopPropagation();
        if (dropdownLI.querySelector('ul').classList.contains("show")) {
            dropdownLI.querySelector('ul').classList.remove("show");
            dropdownLI.querySelector('a i').classList.remove("fa-caret-up");
        } else {
            dropdownLi.forEach(function (ndLi) {
                ndLi.querySelector('ul').classList.remove("show");
                ndLi.querySelector('a i').classList.remove("fa-caret-up");

                dropdownLI.querySelector('a i').classList.add("fa-caret-up");
                dropdownLI.querySelector('ul').classList.add("show");
            });
        }


            let subUl = dropdownLI.querySelectorAll("ul");
            let everyIcon = dropdownLI.querySelectorAll("a i");

            subUl.forEach(function (subul) {
                window.addEventListener("click", () => {
                    if (subul.classList.contains("show")) {
                        subul.classList.remove("show");
                    }
                    everyIcon.forEach((icon)=>{
                        if(icon.classList.contains("fa-caret-up")){
                            icon.classList.remove("fa-caret-up");
                        }
                    });
                });
            });


    });
});

// only for submenu show and hide 

const sub_menu_Li = document.querySelectorAll("li.SUBMENU");

sub_menu_Li.forEach(function (sub_menu_LI) {
    sub_menu_LI.querySelector("a").innerHTML += '  ' + '<i class="fas fa-caret-right"></i>';

    sub_menu_LI.addEventListener("click", function (event) {
        event.stopPropagation();
        sub_menu_LI.querySelector("a i").classList.toggle("fa-caret-left");
        sub_menu_LI.querySelector("ul").classList.toggle("show");
    })
});




// responsive mode menu show and hide 
// menubar click remove dropdownmenur show class
// menubar click remove submenur show class

let menu_bar = document.querySelector(".menuBar i");
let main_menu = document.querySelector(".mainmenu");
let dropdown_menu = document.querySelectorAll(".dropdownManu");
let sub_menu = document.querySelectorAll(".submenu");

menu_bar.addEventListener("click", function () {
    main_menu.classList.toggle("showMenu");
    this.classList.toggle("fa-times-circle");

    dropdown_menu.forEach(function (dropdown_Menu) {
        dropdown_Menu.className = 'dropdownManu';
    });

    sub_menu.forEach(function (sub_Menu) {
        sub_Menu.className = "submenu";
    });

    // node list topper and menubar click icon change to down

    dropdownLi.forEach(function (dropdownLI) {
        dropdownLI.querySelector("a i").className = "fas fa-caret-down";
    });

});


// scroll top and menu section position fixed

document.addEventListener("scroll", function () {
    const main_header = document.querySelector("#header");
    let scrollAmount = window.scrollY;

    if (scrollAmount >= 72) {
        main_header.classList.add("menuSectionLock");
    } else {
        main_header.classList.remove("menuSectionLock");
    }
});


