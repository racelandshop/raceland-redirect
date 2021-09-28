//Javascript class to redirect user to corresponding homekit dashboard

var Root; 
var user; 
var width; 
var height; 


function getDeviceInfo(){
  user = Hass.user.name;
  width = window.innerWidth;
  height = window.innerHeight;
}

function run() {
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
      getDeviceInfo();
      // window.location.href = 'http://192.168.1.142:8123/homekit-infused/main_menu';
      history.replaceState(null, "", "http://192.168.1.142:8123/homekit-infused/main_menu");
      const event = new Event("location-changed", {
        bubbles: true,
        composed: true,
      });
      event.detail = { replace: true };
      this.dispatchEvent(event);

    }

    console.log("the User is ", user, " and the screen size is ", width, "x", height);
  }


run(); 