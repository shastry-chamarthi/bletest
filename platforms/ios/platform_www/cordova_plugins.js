cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-ble-peripheral.blePeripheral",
        "file": "plugins/cordova-plugin-ble-peripheral/www/blePeripheral.js",
        "pluginId": "cordova-plugin-ble-peripheral",
        "clobbers": [
            "blePeripheral"
        ]
    },
    {
        "id": "cordova-plugin-flashlight.Flashlight",
        "file": "plugins/cordova-plugin-flashlight/www/Flashlight.js",
        "pluginId": "cordova-plugin-flashlight",
        "clobbers": [
            "window.plugins.flashlight"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-ble-peripheral": "0.0.1",
    "cordova-plugin-flashlight": "3.0.0",
    "cordova-custom-config": "2.0.3"
};
// BOTTOM OF METADATA
});