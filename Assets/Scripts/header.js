class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>SG | Age Calculator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Satisfy&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet">
    <link rel="stylesheet" href="Assets/CSS/main.css">
    <link rel="stylesheet" href="Assets/CSS/scroll-top-bottom.css">
    <link rel="stylesheet" href="Assets/CSS/tool-basic.css">
    <link rel="stylesheet" href="Assets/CSS/Tools/Calculators/Age-Calculator.css">
</head>
<body>
    <header class="header">
        <div class="logo">
            <a href="index.html">Uiu Cse <span class="h-t-n">Question Bank</span>
            </a>
        </div>
        <button class="menu-toggle" id="menuToggle">
            <i class="fas fa-bars"></i>
        </button>
        <div class="off-canvas-menu" id="offCanvasMenu">
            <span class="close-menu" id="closeMenu">
                <i class="fas fa-times"></i>
            </span>
            <p class="Off-Menu-txt">Menu
            <div>
                <div class="content-section active" id="tools-content">
<!-- -----------ICS -------------- -->
<span class="Head-txt"><i class="fas fa-desktop"></i> ICS</span>
<ul class="tree">
    <li class="toggle" id="color-title">Mid
        <ul>
            <li><a href="" style="text-decoration:none;color:inherit">Will be added soon</a></li>
        </ul>
    </li>
    <li class="toggle" id="color-title">Final
        <ul>
            <li><a href="ics-final-241.html" style="text-decoration:none;color:inherit">Batch-241</a></li>
            <li><a href="ics-final-242.html" style="text-decoration:none;color:inherit">Batch-242</a></li>
        </ul>
    </li>
</ul>

<!-- -----------SPL -------------- -->
<span class="Head-txt"><i class="fas fa-flask"></i> SPL</span>
<ul class="tree">
    <li class="toggle" id="color-title">Will be added soon</li>
</ul>

</div>
    </header>
    <div class="wrapper-X">
        <div class="scroll-container-X">
            <div class="scroll-content-X">
            </div>
        </div>
    </div>
</body>
</html>
        `
    }
}
customElements.define('my-header', MyHeader)

const radioInputs = document.querySelectorAll('input[type="radio"]');
const contentSections = document.querySelectorAll('.content-section');

radioInputs.forEach(input => {
    input.addEventListener('change', function () {
        const selectedValue = this.value;
        contentSections.forEach(section => {
            if (section.id === `${selectedValue}-content`) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var headTxt = document.querySelectorAll(".Head-txt");
    var tree = document.querySelectorAll(".tree");

    tree.forEach(function (item) {
        item.style.display = "none";
    });

    headTxt.forEach(function (txt) {
        txt.addEventListener("click", function () {
            var siblingTree = this.nextElementSibling;
            siblingTree.style.display = siblingTree.style.display === "none" ? "block" : "none";
        });
    });

    var toggles = document.querySelectorAll(".tree .toggle");

    toggles.forEach(function (toggle) {
        var nestedList = toggle.querySelector("ul");
        if (nestedList) {
            nestedList.style.display = "none";
            toggle.classList.remove("open");
        }

        toggle.addEventListener("click", function (event) {
            event.stopPropagation();
            nestedList = this.querySelector("ul");
            if (nestedList) {
                nestedList.style.display = nestedList.style.display === "none" ? "block" : "none";
                this.classList.toggle("open");
            }
        });

        toggle.addEventListener("mousedown", function (event) {
            event.preventDefault();
        });
    });

    document.querySelectorAll('.tree li:not(.toggle)').forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.stopPropagation(); 
        });
    });
});

 document.querySelector('.scroll-container-X').addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        this.scrollLeft += 100;
    } else {
        this.scrollLeft -= 100;
    }
    event.preventDefault();
});

const items = document.querySelectorAll('.item-X');
items.forEach(item => {
    item.addEventListener('click', function () {
        items.forEach(item => item.classList.remove('active-X'));
        this.classList.add('active-X');
    });
});


        document.getElementById('menuToggle').addEventListener('click', function () {
            const offCanvasMenu = document.getElementById('offCanvasMenu');
            offCanvasMenu.classList.add('open');
            document.body.classList.add('no-scroll'); 
        });

        document.getElementById('closeMenu').addEventListener('click', function () {
            const offCanvasMenu = document.getElementById('offCanvasMenu');
            offCanvasMenu.classList.remove('open');
            document.body.classList.remove('no-scroll'); 
        });

 