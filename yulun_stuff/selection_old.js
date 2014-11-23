//set users
//call return_winner_ID()

var users = [{id: 1, score:12},{id: 2, score:10}]

console.log(users[0])
console.log(users[0].id)
console.log(users[0].score)



console.log("HI")
//break condition for our while loop
//resets after clearing list
//users list is the list of everyone who presses a button
//within 1 second
//list of user objects with .id and .rating
var contenders=[]
//contenders are the list of lucky ppl in users who are selected
//list of user objects with .id and .rating



function clear_lists(){
	console.log("clear_lists")
	users=[]
	contenders=[]
	//clears the potential winners list
	//clears contenders list
	//we should store winning user ID before clearing lists
}

function push_winner(){
	console.log("push_winner")
	//push a users into contenders
	var temp_index=Math.random()
	console.log("picked random number:"+temp_index)
	var length = users.length
	console.log("users length is:"+length)
	var index=Math.floor(length*temp_index)
	console.log("chosen index is:"+index)
	//cannot use the below naive push
	//contenders.push(users[index])
	//will write an insert_into_contenders subroutine
	console.log("pushing")
	console.log(users[index].id+" : "+users[index].score)
	insert_into_contenders(users[index])
}

function check_if_exists(input_id){
	//checks contenders to see if the input_ID already exists
	for (person in contenders)
	{
		if (person.id==input_id)
			{
				return true
			}
	}
	return false
}


function insert_into_contenders(input){
	var score=input.score
	var id=input.id
	console.log("insert_into_contenders"+input)
	console.log("input ID is"+id)
	console.log("input score is "+score)
	//check if ID exists
	//if it does, add to score
	//else append to list
	
	for (i=0;i<contenders.length;i++)
	{
		if (contenders[i].id==input.id)
			{
				//we add score
				console.log("adding score")
				contenders[i].score+=input.score
				return
			}
	}

	console.log("adding person")
	contenders.push(input)
	console.log(contenders) 
	console.log("new contenders length is"+contenders.length)

	//inserts passed in object into contenders
	//checks if the ID is already present in contenders
	//assume we are passing in a tuple
}

//@ completion
function check_for_winner(){
	console.log("contenders length is "+contenders.length)
	var threshold_score = 100
	console.log("check_for_winner")
	for (i=0;i<contenders.length;i++)
	{
		console.log("id is:"+contenders[i].id + ": score is:" + contenders[i].score)
		if (contenders[i].score>threshold_score)
			{

				return contenders[i].id
			}
			console.log(contenders[i].id+" : "+contenders[i].score)
	}
	//returns winning user_ID if found
	//returns negative 1 if not
	//assumes non_negative user_ID
	//alway stored in each while loop before lists are cleared

	//we need to build an inteligent threshold score to use
	//
	return -1
}

function return_winner_ID(){
	var counter=0
	console.log("return_winner_ID")
	

	var winner=-1
	while (winner<0){
		push_winner()
		//@ finish
		winner=check_for_winner()
		console.log("current winner is"+winner + "at counter: "+counter)
		if(winner>0)
			{
				found_winner=true
				console.log("we have a winner!")
				clear_lists()
				return winner
			}//else repeat 
		counter+=1
		//if (counter>5)
		//	{
		//		return winner
		//	}
		//
		//return winner
	}
	return winner
}

console.log(return_winner_ID())
//randomly select and push a user_id, score tuple
//
