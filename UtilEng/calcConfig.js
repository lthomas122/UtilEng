(function(){
    try {
  if (window !== window.top) {
    window.onerror = window.top.onerror;
    window.addEventListener("unhandledrejection", function (e) {
      throw e.reason;
    });
  }
} catch (ex) {}
if (typeof Desmos === "undefined"){
    window.Desmos = {};
    Desmos.config = {
      sciKeypad: true,
      degreeMode: true,
    };
    Desmos.commit = "3be06ebee8f7366142fb9ea339255893d7b4f51f";
}
})()
    
