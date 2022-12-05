sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter",
	"sap/m/MessageToast",
	"sap/base/Log"
], function(Controller,
	formatter,
	MessageToast, Log) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {
			Log.info("Controller has been initialized.")
		},
		onBeforeRendering: function () { 
			Log.info("The view will shortly be rendered.")
		},
		onAfterRendering: function () {
			 Log.info("The view has been rendered.") 
			},

		onExit: function(){
			Log.info("Controller will shortly be destroyed.")
		},

		onPress: function(sValue){
			sap.ui.require(["sap/m/MessageToast"], function(oMessage){
				oMessage.show("Searching...." + sValue);
			});
		},

		onPressImage: function(oEvent) {
			sap.ui.require(["sap/m/MessageToast"], function(oMessage){
				oMessage.show('Do you feel like going to the movies?')
			})
		}
	});
});