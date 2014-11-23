//set users
//call return_winner_ID()
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
	var groupEl = document.createElement("li");
	var groupText = document.createTextNode(table[i][0]);
	groupEl.appendChild(groupText);
	groupEl.className = "sidebar-title separator";
	console.log(groupEl);
	document.getElementById("grps").appendChild(groupEl);
}

