sap.ui.jsview("testttt.testview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf xrouting2test.second
	*/
	getControllerName : function() {
		return "testttt.testview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf xrouting2test.second
	*/
	createContent : function(oController) {

	/*
		var dph = new sap.f.DynamicPageHeader({
			pinnable: true
			
		});
		
		var filterBar = new sap.ui.comp.filterbar({
			 reset:"onReset", search:"onSearch", useToolbar:"false", showGoOnFB:"false"
		});
		
		var filterItemA = sap.ui.comp.filterbar.FilterItem({
			 name="A", label="University"
		});
		var filterItemB = sap.ui.comp.filterbar.FilterItem({
			name="B", label="Organiser"
		});
		*/
		
		
		var selectUni = new sap.m.Select({
			id:"University",
			forceSelection:true,
			change: [oController.onSelectChange, oController]
			
		});
		
		var filterItemUni = new sap.ui.comp.filterbar.FilterItem({
			id: "filterItemUni",
			name: "A", 
			label: "University",
			control: selectUni
		});
		
		var selectOrg = new sap.m.Select({
			id:"Organiser",
			forceSelection: true,
			change: [oController.onSelectChange, oController]
			//items:"{localModel/results/0/Organiser}"
		});
		
		var filterItemOrg = new sap.ui.comp.filterbar.FilterItem({
			id: "filterItemOrg",
			name: "B", 
			label: "Organiser",
			control: selectOrg
		});
		
		var oFilterBar = new sap.ui.comp.filterbar.FilterBar({
			id: "filterBar",
			reset: "onReset",
			 search: "onSearch",
			 useToolbar:false,
			 showGoOnFB:false,
			
		});
		
		oFilterBar.addFilterItem(filterItemUni);
		oFilterBar.addFilterItem(filterItemOrg);

		var eid = new sap.m.Text({
			maxLength : 20,
			text : "",
			id : "EvtID",
		//textAlign : "Left"
		});

		
		var oBtnDisplayAttendees = new sap.m.Button("DisplayAttendees", {
			text : "Display Participants",
			tap : [ oController.DisplayAttendees, oController ]
		});

		var oBtnCan = new sap.m.Button("EventCancel", {
			text : "Cancel",

			tap : [ oController.Cancel, oController ]
		});

		var oBtnJoin = new sap.m.Button("Join_Event", {
			text : "Join",

			tap : [ oController.Event_Join, oController ]
		});

		var text = new sap.m.Text({
			id : "textId",
			text : "Filter Events By Date"
		});

		var text2 = new sap.m.Text({
			id : "text2Id",
			text : "Filter Events By Category"
		});

		
		var oBtnSub = new sap.m.Button("Submit", {
	            text: "Create New Event",
	            //press: [oController.getTable, oController],
	            type: sap.m.ButtonType.Emphasized
        });
		
		
		
		var tableOnClick = new sap.m.Table({
			id : "tableOnClick",

			//itemPress : [ oController.JoinDialog, oController ],
			
			//showOverlay: true,
			
			/*inset:false,
				headerText:"Events",
				//items:"{localModel>/results}",
				alternateRowColors:true,
			*/
			columns : [

				new sap.m.Column({
					minScreenWidth:"Tablet",
					demandPopin:true,
					width : "1em",

					header : new sap.m.Label({
						text : "INumber"
					})
				}),
				
				
				
				new sap.m.Column({
					minScreenWidth:"Tablet",
					demandPopin:true,
					width : "1em",

					header : new sap.m.Label({
						text : "Date Joined"
					})
				}),
				
				new sap.m.Column({
					minScreenWidth:"Tablet",
					demandPopin:true,
					width : "1em",

					header : new sap.m.Label({
						text : "Role"
					})
				}),
				
				new sap.m.Column({
					minScreenWidth:"Tablet",
					demandPopin:true,
					width : "1em",

					header : new sap.m.Label({
						text : "Value"
					})
				}),
				
				new sap.m.Column({
					minScreenWidth:"Tablet",
					demandPopin:true,
					width : "1em",

					header : new sap.m.Label({
						text : "Email"
					})
				})
				

			]
		});
		
		var oDialog1 = new sap.m.Dialog("EventDialog", {
			title : "Event Details",

			modal : true,

			contentWidth : "1em",

			content : [



				new sap.m.Bar({
					contentLeft : [


						new sap.m.Label({
							text : "Description: "
						}),

						new sap.m.Text({
							maxLength : 20,
							text : "",
							id : "EventDescription",
						//textAlign : "Left"
						}),

					]
				}),
				new sap.m.Bar({
					contentLeft : [

						new sap.m.Label({
							text : "Time: "
						}),

						new sap.m.Text({
							maxLength : 20,
							text : "",
							id : "EventTime",
						//textAlign : "Left"
						}),


					]
				}),
				new sap.m.Bar({
					contentLeft : [


						new sap.m.Label({
							text : "Organiser: "
						}),

						new sap.m.Text({
							maxLength : 20,
							text : "",
							id : "EventOrganizer",
						//textAlign : "Left"
						}),



					]
				}),
				new sap.m.Bar({
					contentLeft : [


						new sap.m.Label({
							text : "Location: "
						}),

						new sap.m.Text({
							maxLength : 20,
							text : "",
							id : "EventLocation",
						//textAlign : "Left"
						}),

					]
				}),

				new sap.m.Bar({
					contentLeft : [


						new sap.m.Label({
							text : "Role: "
						}),

						new sap.m.Select({
							id : "mySelectMenu"
						}),

					]
				}),


				oBtnJoin,
				oBtnCan, 
				oBtnDisplayAttendees

			]
		});
		

		var search = new sap.m.SearchField({
			liveChange : [ oController.onSearch, oController ],
			width : "100%"
		});


		var oList = new sap.m.List({
			id : "EventList",
			headerText : "Events",
			itemPress : [ oController.JoinDialog, oController ]
		});



		var oTemplateListItem = new sap.m.StandardListItem({
			title : "{University}",
			description : "{EventDate}",
			info : "{Organiser}",
			type : sap.m.ListType.Active,
		});


		var oFilters = null;




		oList.bindItems("/results", oTemplateListItem, null, oFilters);


		
		var oBar = new sap.m.Bar( {
	          contentLeft : [ ],
		          
	     contentMiddle : [ new sap.m.Label( {
	          text : "Events Page",
	          textAlign : "Left",
	          design : "Bold"
	     }).addStyleClass("tit") ]
	});
		


		var templateOnC = new sap.m.ColumnListItem({
			type : sap.m.ListType.Active,
			



			cells : [

				new sap.m.Text({
					text : "{Inumber}"
				}),

			
				new sap.m.Text({
					text : "{DateJoined}"
				}),

				new sap.m.Text({
					text : "{Role}"
				}), 
				
				new sap.m.Text({
					text : "{Value}"
				}),
				
				new sap.m.Text({
					text : "{Email}"
				})

			]
		});
		
		var filterOnC = null;


		tableOnClick.bindItems("/results", templateOnC, null, filterOnC);
		
		

//		oList.bindItems("/results", oTemplateListItem, null, oFilters);

		return new sap.m.Page({
			id: "eventsPage",
			title: "Events Page", 
			content: [
				selectUni, 
				selectOrg,
				oList
		
			]
		});
		
		
	}
});