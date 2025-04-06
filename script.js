function calc(data) {
    let d = document.getElementById('disp');
    if (data === 'C') {
        d.value = '';
    } else if (data === '=') {
        try {
            if (/[^0-9+\-*/.]/.test(d.value) || /[+\-*/]{2,}/.test(d.value)) {
                d.value = 'Error';
            } else {
                d.value = eval(d.value);
            }
        } catch {
            d.value = 'Error';
        }
    } else {
        d.value += data;
    }
}
