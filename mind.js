let CurrentValue = '';
document.querySelector('#blank').value = CurrentValue;

function backspace() {
    CurrentValue = CurrentValue.slice(0, -1);
    document.querySelector('#blank').value = CurrentValue;
}