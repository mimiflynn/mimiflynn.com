(function () {
    this.window.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.shiftKey) {
            console.log('ctrl + shift pressed');
            this.document.querySelector('p').innerHTML = `You pressed magic combination`;
            this.document.querySelector('.pi').addEventListener('click',function (e) {
                console.log('pi was clicked with the magic combo');
                this.document.querySelector('p').innerHTML = `You pressed magic combination AND CLICKED`;
            }.bind(this), false);
        }
    }.bind(this), false);
})();