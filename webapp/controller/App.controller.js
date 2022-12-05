sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/demo/basicTemplate/model/formatter",
	"sap/m/MessageToast"
], function(Controller,
	formatter,
	MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {

		formatter: formatter,

		onInit: function () {

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