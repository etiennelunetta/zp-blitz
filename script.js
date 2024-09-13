
function displayUserInput() {
    var userInput = document.getElementById('userInput').value;
    document.getElementById('output').innerHTML = userInput;
}

function executeUserScript() {
    var userScript = document.getElementById('userScript').value;
    eval(userScript);
}

function loadUserData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://example.com/userdata', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('ajaxOutput').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
