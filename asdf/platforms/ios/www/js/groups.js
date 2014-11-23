//set users
//call return_winner_ID()

var wwidth;
var wheight

wwidth, wheight = getWindowSizes();

var server_url = "empty?group=";
var current_group;


function getWindowSizes() {
  var windowHeight = 0, windowWidth = 0;
  if (typeof (window.innerWidth) == 'number') {
      windowHeight = window.innerHeight;
      windowWidth = window.innerWidth;
      
  } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      windowHeight = document.documentElement.clientHeight;
      windowWidth = document.documentElement.clientWidth;
      
  } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
     windowHeight = document.body.clientHeight;
     windowWidth = document.body.clientWidth;
  }
  return [windowWidth, windowHeight];
}

function getGroupList() {


	var parser= new function(input_data) {
		//default value
		this.table=[];
		this.pre_table=[{name: "group1 name", group_ID:1, score:2},{name: "group2 name", group_ID:2, score:3}];
		// this.pre_table=input_data;
		this.new_table=function (input_data){
			this.pre_table=input_data;
		};
			
		this.make_table=function(){
			var size=this.pre_table.length;
			var x = new Array(size);
		    for (var i = 0; i < size; i++) {
		    	x[i] = new Array(3);
		    	x[i][0]=this.pre_table[i].name
		    	x[i][1]=this.pre_table[i].group_ID
		    	x[i][2]=this.pre_table[i].score
		    }
			this.table=x;
		};


	}

	test=[{name: "group1 name", group_ID:1, score:2},{name: "group2 name", group_ID:2, score:3}];
	// console.log("test has length "+test.length);


	// console.log("pre table is:"+parser.pre_table);
	parser.make_table();

	table = parser.table;

	for (var i = 0; i < parser.table.length; i++) {
		for (var j = 0; j< 3; j++){
			console.log(parser.table[i][j]);
		}
	}
	// console.log(parser.table);

	for (var i = 0; i < table.length; i++) {
		var groupEl = document.createElement("a");
		var gname = table[i][0];
		if (gname == current_group)
			var groupText = document.createTextNode(gname + '<span class="menu-icon glyphicon glyphicon-play-circle"></span>');
		else
			var groupText = document.createTextNode(gname);
		groupEl.appendChild(groupText);
		groupEl.className = "list-group-item";
		groupEl.href(server_url + table[i][1])
		console.log(groupEl);
		document.getElementById("grps").appendChild(groupEl);
	}


	/*for (var i = 0; i < table.length; i++) {
		var groupEl = document.createElement("li");
		var groupText = document.createTextNode(table[i][0]);
		groupEl.appendChild(groupText);
		groupEl.className = "sidebar-title separator";
		console.log(groupEl);
		document.getElementById("grps").appendChild(groupEl);
	}*/
}


//this should perform the socket stuff as well change the background picture to blank
//it should also change the label whihc displays the group name
function changeActiveGroup(g_name, g_id)
{
	//assign name to label
	document.getElementById("#groupHead").innerHTML.child = g_name;


}



function setImage(img_link)
{
	$('#content-wrapper').css("height","100%","background-image", img_link, 
		"background-repeat","no-repeat", "background-size", "contain", "background-position","center");
}
