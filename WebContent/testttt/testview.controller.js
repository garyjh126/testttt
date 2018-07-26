var sEID;
var counter = 0;
var startingWidth = "1em";
sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/Filter',
	'sap/ui/model/json/JSONModel'
], function(jQuery, Controller, Filter, JSONModel) {
	"use strict";

	return Controller.extend("testttt.testview", {
		
		onInit: function () {
			
			
			
		/*	var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZAMBASSADOR_ADMIN_SRV";
			var oJsonModel = new sap.ui.model.json.JSONModel();
			var form = sap.ui.getCore().byId("University");
			var form2 = sap.ui.getCore().byId("Organiser");
			var allUni = new sap.ui.core.Item({ key: "" , text: "All"});
			var allOrg = new sap.ui.core.Item({ key: "" , text: "All"});
			var tab = sap.ui.getCore().byId("idEventsTable");
			form.addItem(allUni);
			form2.addItem(allOrg);
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
		
			oModel.read("/AdminEventListSet?",
					null,
					null,
					true,
					function(oData,
							repsonse) {
						
				               
				              // set the odata JSON as data of JSON model
								oJsonModel.setData(oData);
								   //console.log(oData);
							   var head = oJsonModel.getProperty("/results");
							   //console.log(head);
							   var re = "/results/";
							   
							   for(var i = 0; i<head.length; i++){
								   
								   re = re.substr(0,9);
								   re += "" + i;
								   var results = oJsonModel.getProperty(re);
								   
								   var uni = results.University;
								   var uniItem = new sap.ui.core.Item({ key: uni, text: uni});
								   if(form.getItemByKey(uni)==null){
									   form.addItem(uniItem);
								   }
								   
								   var org = results.Organiser;
								   var orgItem = new sap.ui.core.Item({ key: org, text: org});
								   if(form2.getItemByKey(org)==null){
									   form2.addItem(orgItem);
								   }
								   
								   
								   
							   }
							   
				              // store the model
				              tab.setModel(oJsonModel, "localModel");
					          //console.log(oJsonModel.getData());
					              
				              //INCLUDE 'ALL' AS OPTION FOR FILTER
				         
					});
			
			sap.ui.getCore().byId("idEventsTable").setModel(oJsonModel);
			//this.getView().setModel(this.oJsonModel);
			////console.log("JSON: "+oJsonModel.getData());
			
			this.aKeys = ["University", "Organiser"];
			this.oSelectUniversity = form.getSelectedItem();
			//this.oSelectOrganiser = this.getSelect("Organiser");
			
			//this.oSelectOrganiser = this.getSelect("Organiser");
//			this.oModel.setProperty("/Filter/text", "Filtered by None");
			//this.addSnappedLabel();
			
			
			
			
			var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZAMBASSADOR_ADMIN_SRV";
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
			var oJsonModel = new sap.ui.model.json.JSONModel();
			var oTable = sap.ui.getCore().byId("idEventsTable"); //sap.ui.getCore().byId("idEventsTable"); 
			//console.log(oTable);
			oModel.read("/AdminEventListSet?",
							null,
							null,
							true,
							function(oData,
									repsonse) {
										oJsonModel.setData(oData);
										//console.log(oData);
										////console.log(oJsonModel);
							});
			oTable.setModel(oJsonModel);
			
			
		*/
			
			//SETTING LIST DATA
			this.servURL = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZAMBASSADOR_USR_SRV";
			this.mod = new sap.ui.model.odata.ODataModel(this.servURL, true);
			this.jsonModel = new sap.ui.model.json.JSONModel();
			var js = this.jsonModel;
			this.oList = sap.ui.getCore().byId("EventList");
			this.mod.read("/usrEventListSet?", null, null, true, function(oData, repsonse) {
				js.setData(oData);
			////console.log(oJsonModel);
			});
			this.oList.setModel(this.jsonModel);  //, "localModel");
			
			
			
			
			//FILTERS
			//var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZAMBASSADOR_USR_SRV";
			var oJsonModel = new sap.ui.model.json.JSONModel();
			var form = sap.ui.getCore().byId("University");
			var form2 = sap.ui.getCore().byId("Organiser");
			var allUni = new sap.ui.core.Item({ key: "" , text: "All"});
			var allOrg = new sap.ui.core.Item({ key: "" , text: "All"});
		//	var tab = sap.ui.getCore().byId("tableOnClick");
			form.addItem(allUni);
			form2.addItem(allOrg);
			var oModel = new sap.ui.model.odata.ODataModel(this.servURL, true);
			
			
			
			
			oModel.read("/usrEventListSet?",
					null,
					null,
					true,
					function(oData,
							repsonse) {
						
				               
				              // set the odata JSON as data of JSON model
								oJsonModel.setData(oData);
								 //  //console.log(oData);
							   var head = oJsonModel.getProperty("/results");
							  // //console.log(head);
							   var re = "/results/";
							   
							   for(var i = 0; i<head.length; i++){
								   
								   re = re.substr(0,9);
								   re += "" + i;
								   var results = oJsonModel.getProperty(re);
								   
								   var uni = results.University;
								   var uniItem = new sap.ui.core.Item({ key: uni, text: uni});
								   if(form.getItemByKey(uni)==null){
									   form.addItem(uniItem);
								   }
								   
								   var org = results.Organiser;
								   var orgItem = new sap.ui.core.Item({ key: org, text: org});
								   if(form2.getItemByKey(org)==null){
									   form2.addItem(orgItem);
								   }
								   
								   
								   
							   }
							   
				              // store the model
				           //   oList.setModel(oJsonModel, "localModel");
					        //  //console.log(oJsonModel.getData());
					              
				              //INCLUDE 'ALL' AS OPTION FOR FILTER
				         
					});
			
			var mModel = new sap.ui.model.json.JSONModel("model/your_data.json"); //initialise your model from a JSON file
			sap.ui.getCore().setModel(mModel, "your_data_model"); //set model with a name to use later
			var m = new sap.ui.getCore().getModel("your_data_model");
			var oItemSelectTemplate = new sap.ui.core.Item({
				key : "{dkey}",
				text : "{dtext}"
			}); //Define the template for items, which will be inserted inside a select element
			var mySelectMenu = sap.ui.getCore().byId("mySelectMenu"); //Get a reference to the UI element, Select to bind data
			////console.log(mySelectMenu);
			mySelectMenu.setModel(m); // set model your_data_model to Select element
			mySelectMenu.bindAggregation("items", "/mRoot", oItemSelectTemplate); //bind aggregation, item to Select element with the template selected above
			
			
			sap.ui.getCore().setModel(oModel);
			this.aKeys = ["University", "Organiser"];
			this.oSelectUniversity = this.getSelect("University");
			console.log(this.oSelectUniversity);
			//console.log( this.getSelect("University"));
			this.oSelectOrganiser = this.getSelect("Organiser");
			
			
			
		},
		
		
		
		JoinDialog : function(evt) {
			this.ResetDisplayAttendees();

			sap.ui.getCore().byId("EventDialog").open();

			var oSelectedItem = evt.getParameter("listItem");

			////console.log(oSelectedItem);

			sEID = oSelectedItem.getBindingContext().getProperty("Eventid");

			var sLoc = oSelectedItem.getBindingContext().getProperty("Location");

			var sUni = oSelectedItem.getBindingContext().getProperty("University");

			var sTime = oSelectedItem.getBindingContext().getProperty("EventTime");

			var sDate = oSelectedItem.getBindingContext().getProperty("EventDate");

			var sOrg = oSelectedItem.getBindingContext().getProperty("Organiser");

			var sDes = oSelectedItem.getBindingContext().getProperty("Description");






			////console.log(sEID);




			sap.ui.getCore().byId("EventDescription").setText(sDes);

			sap.ui.getCore().byId("EventTime").setText(sTime);

			sap.ui.getCore().byId("EventOrganizer").setText(sOrg);

			sap.ui.getCore().byId("EventLocation").setText(sLoc);

			sap.ui.getCore().byId("EvtID").setText(sEID);


			
		},
		
		DisplayAttendees: function() {
			var ed = sap.ui.getCore().byId("EventDialog");
			var tab = sap.ui.getCore().byId("tableOnClick");
			
			//var c = new sap.ui.core.Control;
		
			var currentWidth = startingWidth;
			var temp = "";
			for(var i = 0; i < currentWidth.length; i++){
				if(currentWidth.charAt(i)!="e"){
					temp += currentWidth.charAt(i);
				}
				else {
					break;
				}
				
				
			}
			var cssSize =  parseInt(temp) + 70;
			var feedB = "" + cssSize + "em";
			/*if(initialChange){
				ed.setContentWidth(feedB);
			}
				*/
			if(parseInt(temp) < 71 ){
				ed.setContentWidth(feedB);	
			}
			
			
			////console.log("New Dailog Box Size: "+ ed.getContentWidth())
			ed.addContent(tab);
			
			//CREATE OR FIND FUNCTION MODULE WHICH GETS ALL USERS AT ONE PARTICULAR EVENT 
			//Populate table following click of 'Display Participants' click
			
			var usersOnClickURL = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_USR_SRV";
			var uocModel = new sap.ui.model.odata.ODataModel(usersOnClickURL, true);
			var uocJsonModel = new sap.ui.model.json.JSONModel();
			//var uocTable = sap.ui.getCore().byId("tableOnClick");	
			var st = "'" + sEID + "'";
			
			uocModel.read("/EventsSetSet?$filter=Eventid eq "+st, null, null, true, function(oData, repsonse) {
				uocJsonModel.setData(oData);
			////console.log(oJsonModel);
			});
			tab.setModel(uocJsonModel);
			
			////console.log("startingWidth at "+counter+ ": "+startingWidth);
			counter++;
		},
		
		ResetDisplayAttendees: function() {
			var ed = sap.ui.getCore().byId("EventDialog");
			var tab = sap.ui.getCore().byId("tableOnClick");
			
			//var c = new sap.ui.core.Control;
			//startingWidth = ed.getContentWidth();
			ed.setContentWidth(startingWidth);	
			////console.log(ed.getContentWidth());
			////console.log("ResetDisplayAttendees Success")
			ed.removeContent(tab);
		},
		
		
		Event_Join : function() {
			var y = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/bc/ui2/start_up";
			var xmlHttp = null;
			var email;
			var oUserData; 
			
			xmlHttp = new XMLHttpRequest();
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
					oUserData = JSON.parse(xmlHttp.responseText);
					email = oUserData.email;


					if (oUserData.id == "I348462") {
						//sap.ui.getCore().byId("Admin").setVisible(true);

					}
				}
			};
			xmlHttp.open("GET", y, false);
			xmlHttp.send(null);
			this.Create(email);


		},

		Create : function(email) {


			var oDate = new Date();
			
			var role = sap.ui.getCore().byId("mySelectMenu").getSelectedItem().mProperties.text;
			//console.log(role);
			var oEntry = {};


			oEntry.Eventid = sap.ui.getCore().byId("EvtID").getText();

			oEntry.Location = ""; //sap.ui.getCore().byId("Location2").getValue();

			oEntry.University = ""; //sap.ui.getCore().byId("University2").getValue();

			oEntry.EventTime = ""; //sap.ui.getCore().byId("Time2").getValue();

			oEntry.Organiser = sap.ui.getCore().byId("EventOrganizer").getText();

			oEntry.Description = ""; //sap.ui.getCore().byId("Description2").getValue();

			oEntry.EventDate = ""; //sap.ui.getCore().byId("Date2").getValue();
			
			oEntry.Role = role.toUpperCase(); //sap.ui.getCore().byId("Date2").getValue();
			

			
			
			////console.log(sap.ui.getCore().byId("mySelectMenu").getSelectedItem().mProperties.text);



			var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZAMBASSADOR_USR_SRV";


			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);


			var oJsonModel = new sap.ui.model.json.JSONModel();

			////console.log(oEntry);




			oModel.read("/JoinDetailsSet?", null, null, true, function(oData, repsonse) {


				OData.request({
					requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_USR_SRV/JoinDetailsSet",
					method : "GET",
					headers : {
						"X-Requested-With" : "XMLHttpRequest",
						"Content-Type" : "application/atom+xml",
						"DataServiceVersion" : "2.0",
						"X-CSRF-Token" : "Fetch"
					}
				},
					function(data, response) {
						////console.log(data);

						header_xcsrf_token = response.headers['x-csrf-token'];
						var oHeaders = {
							"x-csrf-token" : header_xcsrf_token,
							'Accept' : 'application/json',
						};

						OData.request({
							requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_USR_SRV/JoinDetailsPostSet",

							method : "POST",
							headers : oHeaders,
							data : oEntry
						},
							function(data, request) {
								sap.m.MessageToast.show('Product Created');
								location.reload(true);
							}, function(err) {
								sap.m.MessageToast.show('Request Sent!');
								location.reload(true);
							});

					}, function(err) {
						var request = err.request;
						var response = err.response;
						sap.m.MessageToast.show("Error in Get -- Request " + request + " Response " + response);



					});
			});


		},

		on2ndpage : function() {
			var router = sap.ui.core.UIComponent.getRouterFor(this);
			router.navTo("third", {
				id : 1
			}, false);
		},


		Cancel : function() {

			sap.ui.getCore().byId("EventDialog").close();
		
		},
		
		/*onSearch : function(oEvt) {

			// add filter for search
			var aFilters = [];
			var sQuery = oEvt.getSource().getValue();
			var oItem = oEvt.getSource();
			var oContext = oItem.getBindingContext();
			//var sName = oContext.getProperty("Name");
			//var sPath = oContext.getProperty("Path");
			////console.log(oContext);
			if (sQuery && sQuery.length > 0) {
				var filter = new sap.ui.model.Filter("University", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = sap.ui.getCore().byId("EventList");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");
		},
		
		
		*/ 
		
		handleSelectionChange: function(oEvent){
			/*var changedItem = oEvent.getParameter("changedItem");
	        var isSelected = oEvent.getParameter("selected");
	        */
	        //Need to populate table now with details of that event
	        
	        
		},
		onSelectChange: function() {
			
			var aCurrentFilterValues = [];
			
			//var role = sap.ui.getCore().byId("University").getSelectedItem().mProperties.text;
			//var g = this.getSelectedItemText(this.getSelect("University"));
			//console.log(this.oSelectUniversity);
			aCurrentFilterValues.push(this.getSelectedItemText(this.oSelectUniversity));
			aCurrentFilterValues.push(this.getSelectedItemText(this.oSelectOrganiser));
			
			//console.log(this.getTable());
			this.filterTable(aCurrentFilterValues);
			
			/*this.oSelectUniversity = form.getSelectedItem();
			this.oSelectOrganiser = form2.getSelectedItem();*/
/*			var aCurrentFilterValues = [];

			aCurrentFilterValues.push(this.getSelectedItemText(this.oSelectUniversity));
			
			aCurrentFilterValues.push(this.getSelectedItemText(this.oSelectOrganiser));

			this.filterTable(aCurrentFilterValues);*/
		},

		
		
		
		
		onExit: function () {
			this.aKeys = [];
			this.aFilters = [];
			this.mod = null;
		},
		

		getTable : function () { //Get list 
			 
			return sap.ui.getCore().byId("EventList");
			
		},
		getTableItems : function () {
			////console.log( this.getTable().getBinding("items"));
			console.log(this.getTable().getBinding("items"));
			return this.getTable().getBinding("items"); //ERROR
			
		},
		getSelect : function (sId) {
			//console.log(sId);
			return sap.ui.getCore().byId(sId);
		},
		
		
		getSelectedItemText : function (oSelect) {
			return oSelect.getSelectedItem() ? oSelect.getSelectedItem().getKey() : "";
		},
		getPage : function() {
			return sap.ui.getCore().byId("eventsPage");
		},
		getPageTitle: function() {
			return this.getPage().getTitle();
		},
		
		getFilters: function (aCurrentFilterValues) {
			this.aFilters = [];

			this.aFilters = this.aKeys.map(function (sCriteria, i) {
				return new sap.ui.model.Filter(sCriteria, sap.ui.model.FilterOperator.Contains, aCurrentFilterValues[i]);
			});

			return this.aFilters;
		},
		
		getFilterCriteria : function (aCurrentFilterValues){
			return this.aKeys.filter(function (el, i) {
				if (aCurrentFilterValues[i] !== "") return  el;
			});
		},

		filterTable: function (aCurrentFilterValues) {
			this.getTableItems().filter(this.getFilters(aCurrentFilterValues));
			//this.updateFilterCriterias(this.getFilterCriteria(aCurrentFilterValues));
		},

		

		/*
		onToggleHeader: function () {
			this.getPage().setHeaderExpanded(!this.getPage().getHeaderExpanded());
		},
		onToggleFooter : function () {
			this.getPage().setShowFooter(!this.getPage().getShowFooter());
		},
		onSelectChange: function() {
			var aCurrentFilterValues = [];

			aCurrentFilterValues.push(this.getSelectedItemText(this.oSelectUniversity));
			
			aCurrentFilterValues.push(this.getSelectedItemText(this.oSelectOrganiser));

			this.filterTable(aCurrentFilterValues);
		},

		filterTable: function (aCurrentFilterValues) {
			this.getTableItems().filter(this.getFilters(aCurrentFilterValues));
			//this.updateFilterCriterias(this.getFilterCriteria(aCurrentFilterValues));
		},

		updateFilterCriterias : function (aFilterCriterias) {
			this.removeSnappedLabel();  because in case of label with an empty text, 
			this.addSnappedLabel();  a space for the snapped content will be allocated and can lead to title misalignment 
			//this.oModel.setProperty("/Filter/text", this.getFormattedSummaryText(aFilterCriterias));
		},

		addSnappedLabel : function() {
			var oSnappedLabel = this.getSnappedLabel();
			oSnappedLabel.attachBrowserEvent("click", this.onToggleHeader, this);
			this.getPageTitle().addSnappedContent(oSnappedLabel);
		},

		removeSnappedLabel : function() {
			this.getPageTitle().destroySnappedContent();
		},

		getFilters: function (aCurrentFilterValues) {
			this.aFilters = [];

			this.aFilters = this.aKeys.map(function (sCriteria, i) {
				return new sap.ui.model.Filter(sCriteria, sap.ui.model.FilterOperator.Contains, aCurrentFilterValues[i]);
			});

			return this.aFilters;
		},
		getFilterCriteria : function (aCurrentFilterValues){
			return this.aKeys.filter(function (el, i) {
				if (aCurrentFilterValues[i] !== "") return  el;
			});
		},
		getFormattedSummaryText : function (aFilterCriterias) {
			if (aFilterCriterias.length > 0) {	
				return "Filtered By (" + aFilterCriterias.length + "): " + aFilterCriterias.join(", ");
			} else {
				return "Filtered by None";
			}
		},

		getSelectedItemText : function (oSelect) {
			return oSelect.getSelectedItem() ? oSelect.getSelectedItem().getKey() : "";
		},
		getPage : function() {
			return this.getView().byId("dynamicPageId");
		},
		getPageTitle: function() {
			return this.getPage().getTitle();
		},
		getSnappedLabel : function () {
			return new sap.m.Label({text: "{/Filter/text}"});
		}
		*/
	});
});