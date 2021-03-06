//Javascript class to redirect user to corresponding homekit dashboard

import  { navigate } from "custom-card-helpers";

var Root; 
var user; 
var width; 
var height; 
var Hass
var phoneWidth = 600;
var phoneHeight = 800;
var relativeUrl; 

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
      Hass = Root.hass;
    }
    catch { }
    if (Root) {
      user = Hass.user.name;
      width = window.innerWidth;
      height = window.innerHeight;
      if (width <= phoneWidth && height <= phoneHeight) {
        console.log("phone detected")
        navigate('', `/homekit-infused-${user}/main_menu`, false); 
      }
  }
}

run(); 