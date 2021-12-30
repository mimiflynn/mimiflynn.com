(function () {
    window.addEventListener('keydown', function (e) {
        document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    }, false);
})();