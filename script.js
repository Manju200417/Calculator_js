function calc(data) {
    let d = document.getElementById('disp');
    let lastChar = d.value.slice(-1);

    try {
        if (data === 'C') {
            d.value = '';
        } else if (data === '=') {
            if (/[^0-9+\-*/.]/.test(d.value) || /[+\-*/]{2,}/.test(d.value)) {
                d.value = 'Error';
            } else {
                d.value = eval(d.value);
            }
        } else {
            if (/[+\-*/]/.test(data) && /[+\-*/]/.test(lastChar)) {
                return;
            } else {
                d.value += data;
            }
        }
    } catch {
        d.value = 'Error';
    }
}

// for keyboard input
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const allowedKeys = /^[0-9+\-*/.=]$/;
    const d = document.getElementById('disp');
    const lastChar = d.value.slice(-1);

    if (allowedKeys.test(key)) {
        if (/[+\-*/]/.test(key) && /[+\-*/]/.test(lastChar)) {
            return;
        } else if (key === '=') {
            calc('=');
        } else {
            calc(key);
        }
    } else if (key === 'Enter') {
        calc('=');
    } else if (key === 'Escape') {
        calc('C');
    } else if (key === 'Backspace') {
        d.value = d.value.slice(0, -1);
    }
});
