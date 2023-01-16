(function () {
  this.window.addEventListener(
    "keydown",
    function (e) {
      if (e.ctrlKey && e.shiftKey) {
        const content = this.document.querySelector(".mf-content");
        console.log("ctrl + shift pressed");
        content.innerHTML = `You pressed magic combination`;
        this.document.querySelector(".pi").addEventListener(
          "click",
          function (e) {
            console.log("pi was clicked with the magic combo");
            content.innerHTML = `You pressed magic combination AND CLICKED`;
          }.bind(this),
          false
        );
      }
    }.bind(this),
    false
  );
})();
