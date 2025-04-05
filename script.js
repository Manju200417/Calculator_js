function calc(data) {
    let d = document.getElementById('disp');
    if (data === 'C') {
        d.value = '';
    } else if (data === '=') {
        d.value = eval(d.value);
    } else {
        d.value += data;
    }
}