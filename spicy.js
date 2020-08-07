/*
 ______                                           _____ _______ 
|   __ \.---.-.----.----.-----.-----.-----.     _|     |     __|
|      <|  _  |  __|  __|  _  |  _  |     |    |       |__     |
|___|__||___._|____|____|_____|_____|__|__|    |_______|_______|

for my AP Computer Science Principals Create Task
                                                                
*/

var shopObject = document.getElementsByClassName('ItemGroup');
var destroyObject = document.getElementsByClassName('RemoveItem');
var modalBox = document.getElementById('ModalBox');
var modalAdd = document.getElementById('ModalAdd');
var addAnother = document.getElementById('AddItem');
var checkbox = document.getElementById('ModalCheck');
var modalExit = document.getElementById('ModalExit');
var loader = document.getElementById('PageLoader');
var angle = 720;
var raccoonEmoji = document.getElementById('BigRaccoon');
raccoonEmoji.style.opacity = '1';

/* Page Loader */
var spin = setInterval(() => {
    raccoonEmoji.style.transform = 'rotate(' + angle + 'deg)';
    if (angle > 2000) {
        clearInterval(spin);
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }
    angle = angle + 360;
}, 800);

// allows an element to be destroyed
allowDestruction();

function allowDestruction() {
    for (let i = 0; i < destroyObject.length; i++) {
        const certainDestroy = destroyObject[i];
        const certainObject = shopObject[i];
        certainDestroy.addEventListener('click', function () {
            certainObject.remove();
        });
    }
}


// opens and closes the modal
modalExit.addEventListener('click', function () {
    modalBox.style.display = 'none';
});

modalBox.addEventListener('click', function (event) {
    if (event.target == modalBox) {
        modalBox.style.display = 'none';
    }
});
addAnother.addEventListener('click', function () {
    modalBox.style.display = 'flex';
    modalAdd.children[1].value = '';
});
modalAdd.children[1].addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        addAnotherItem();
    }
});
checkbox.addEventListener('click', addAnotherItem);


//Main algorithim, checks for duplicate and alphabetizes
function addAnotherItem() {
    var textEntry = modalAdd.children[1].value;
    modalBox.style.display = 'none';
    if (checkDuplicate(textEntry)) { //verify the item is unique
        addAnother.insertAdjacentElement('afterend', shopObject[0].cloneNode(true));
        shopObject[1].children[1].innerHTML = textEntry;
        shopObject[1].style.display = 'flex';
        sort(shopObject);
        allowDestruction();
    }
}

// sorts the new entry
function sort(object) {
    for (let i = 1; i < object.length - 1; i++) {
        const originalShopObject = object[i].children[1].innerHTML;
        const nextShopObject = object[i + 1].children[1].innerHTML;
        if (compareWords(originalShopObject, nextShopObject) == 1) {
            object[i].children[1].innerHTML = nextShopObject;
            object[i + 1].children[1].innerHTML = originalShopObject;
        }

    }
}

// checks if the item already exists
function checkDuplicate(text) {
    for (var i = 0; i < shopObject.length; i++) {
        var shopContent = shopObject[i].children[1].innerHTML;
        if (shopContent == text) {
            return false;
        }
    }
    return true;
}

// compares 2 words to each other
function compareWords(word1, word2) {
    for (var i = 0; i < word1.length; i++) {
        if (word1.toUpperCase().charCodeAt(i) < word2.toUpperCase().charCodeAt(i) || isNaN(word1.toUpperCase().charCodeAt(i))) {
            return -1;
        } else if (word1.toUpperCase().charCodeAt(i) > word2.toUpperCase().charCodeAt(i) || isNaN(word2.toUpperCase().charCodeAt(i))) {
            return 1;
        } else continue;
    }
}