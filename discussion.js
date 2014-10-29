var site = {
	"title" : "Should you hire Dan?",
	"body" : "Yes or no...",
	"replies" : [ { //reply count: 6
		"title" : "Yes!",
		"body" : "He's a diligent, friendly and capable guy...What more could you want?",
		"replies" : [ //reply count: 1
			{ "title" : "I agree",
			  "body" : "Plus he's got a great sense of humor",
			  "replies" : [] //reply count: 0
			} 
		]
	},
	{
	 	"title" : "No",
	 	"body" : "See the title",
	 	"replies" : [ //reply count: 3
			 	{
				 	"title" : "Troll post",
				 	"body" : "You, sir or madam, get a downvote",
				 	"replies": [] //reply count: 0
				 },
			 	{
			 		"title" : "Are you kidding?",
				 	"body" : "This poster can't be serious",
				 	"replies": [] //reply count: 0
				},
				{
				 	"title" : "Ugh",
				 	"body" : "Obvious troll is Obvious",
				 	"replies": [] //reply count: 0
				 },

			]
		}
	] 
};

var site2 = { 
				"title" : "Test Post", 
				"body" : "Plz Ignore", 
				"replies" : []
			}; // reply count: 0

var site3 = {
				"title" : "Recursive Post",
				"body"  : "Down the rabbit hole we go...",
				"replies" : [ //reply count: 3
							{
								"title" : "Recursive Post",
								"body"  : "Down the rabbit hole we go...",
								"replies" : [ //reply count : 2
											{
												"title" : "Recursive Post",
												"body"  : "Down the rabbit hole we go...",
												"replies" : [ // reply count : 1
															{
																"title" : "Recursive Post",
																"body"  : "Down the rabbit hole we go...",
																"replies" : [] //reply count : 0
															}	
															] 
											}
											]
							}				
							]
			};

//Recursively counts replies to a discussion post and adds a count property	
function repliesCount(root) {

	//Base Case: There are no replies
	root.count = root['replies'].length;
	var currentLength = root.count;
	if(currentLength === 0) {
		return root.count; 
		
	//Recursive Case: call function on each child node	
	} else {
		root.count = root['replies'].length;
		for (var i = 0; i < currentLength; i++) {
			root.count += repliesCount(root['replies'][i]);
		}
		return root.count;
	}
};

//Test
repliesCount(site);
repliesCount(site2);
repliesCount(site3);
