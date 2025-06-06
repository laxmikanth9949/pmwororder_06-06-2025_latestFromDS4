var oDetailView;
var sApp;
var cPage;
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/olam/pmworkorder/model/models",
	"sap/ui/core/routing/HashChanger"
	
], function(UIComponent, Device, models, HashChanger) {
	"use strict";

	return UIComponent.extend("com.olam.pmworkorder.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();

			document.addEventListener("backbutton", jQuery.proxy(this.onBackKeyDown, this), false);

			// var query = "SELECT * from user_login;";
			var that = this;
		/*	sqliteDB.transaction(function(tx) {
				tx.executeSql(query, [], function(tx, rs) {
					console.log(rs.rows);
					//var oBundle = that.getView().getModel("i18n").getResourceBundle();
					if (rs.rows.length > 0) {
						that.loginLang = rs.rows.item(0).lang;
						var sBundleSelected = "i18n";
						if (that.loginLang === "ar-eg") {
							sBundleSelected = "i18n_AE"
						} else if (that.loginLang === undefined || that.loginLang === null) {
							sBundleSelected = "i18n";
							that.loginLang = "en";
						}
						var oResourceModel = new sap.ui.model.resource.ResourceModel({
							bundleName: "com.olam.pmworkorder.i18n." + sBundleSelected
						});
						// Assign the model object to the SAPUI5 core using the name "i18n"
						that.setModel(oResourceModel, "i18n");
						// Creating Global model , to use in fragments
						sap.ui.getCore().setModel(oResourceModel, "i18n");
						console.log(that.loginLang);
						sap.ui.getCore().getConfiguration().setLanguage(that.loginLang);
						that.getRouter().navTo("View1");

					} else {
						console.log("Stay back in login screen")
						that.getRouter().navTo("Login");
					}

				}, function(tx, error) {
					console.log('SELECT error: ' + error.message);
				});
			})*/

			//this.getRouter().navTo("Login");

			
			HashChanger.getInstance().replaceHash("");
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
		
		},
		// On BackButton Press Event
		onBackKeyDown: function(e) {
			e.preventDefault();
		}
	});
});