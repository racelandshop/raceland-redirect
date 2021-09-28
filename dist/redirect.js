//Javascript class to redirect user to corresponding homekit dashboard

var Root; 
var user; 
var width; 
var height; 

function run(){
    loadVars()
}



function loadVars() {
    Root = document.querySelector("home-assistant");
    Root = Root && Root.shadowRoot;
    Root = Root && Root.querySelector("home-assistant-main");
    Root = Root && Root.shadowRoot;
    Root = Root && Root.querySelector("app-drawer-layout partial-panel-resolver");
    Root = (Root && Root.shadowRoot) || Root;
    Root = Root && Root.querySelector("ha-panel-lovelace");
    Root = Root && Root.shadowRoot;
    Root = Root && Root.querySelector("hui-root");
    try {
      var Hass = Root.hass;
    }
    catch { }
    if (Root) {
        user = Hass.user.name;
        width = window.innerWidth;
        height = window.innerHeight;
    }
  }

run(); 
console.log("the User is ", user, " and the screen size is ", width, "x", height);