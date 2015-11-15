// JavaScript Document
window.onload = function(){
	//Create Stuff
	var postBut = document.getElementById("postBut");
	var showCommentsBut = document.getElementById("showCommentsBut");
	var contentDiv = document.getElementById("content");
	var commentsDiv = document.createElement("div");
	var hideComments = document.createElement("button");
	hideComments.className = "buttons";
	hideComments.innerHTML = "Hide Comments";
	
	var reveal = function (){
		newDiv = document.createElement("div");
		commentsDiv.appendChild(newDiv);
		commentsDiv.appendChild(hideComments);	
		contentDiv.appendChild(commentsDiv);
		
		//Styling the div 
		commentsDiv.style.width = "100vw";
		commentsDiv.style.height = "100%";
		commentsDiv.style.position = "absolute";
		commentsDiv.style.top = 0;
		commentsDiv.style.left = 0;
		commentsDiv.style.backgroundColor = "white";
		commentsDiv.style.marginTop = "25px";
		commentsDiv.style.marginTop = "25px";
		commentsDiv.style.backgroundColor = "#dcebe8";
		commentsDiv.style.marginLeft = "1.5px";
		
		//Styling the Button
		hideComments.style.position = "absolute";
		hideComments.style.bottom = 0;
		hideComments.style.backgroundColor = "#4199b6";
		hideComments.style.marginBottom = "26px";
		
		
		
	};

	postBut.onclick = function(){
		var commValue1 = document.getElementById("commentInput").value;
		reveal();
		addComment(commValue1);
	};
	
	showCommentsBut.onclick = function() {
		reveal();		
	};
	
	hideComments.onclick = function() {
		contentDiv.removeChild(commentsDiv);	
		
	};


	
/*insert the comments!*/	
	//http://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_rowspan
	
	var userPic = document.createElement("img");
	
	userPic.setAttribute("class", "pics");
	userPic.style.marginTop="10px";
	userPic.style.marginLeft="5px";
	commentsDiv.appendChild(userPic);
	
	textArea = document.createElement("textarea");
	commentsDiv.appendChild(textArea);
	textArea.style.marginTop = "10px";
	textArea.style.marginLeft = "10px";	

	postBut2 = document.createElement("button");
	postBut2.innerHTML = "Post Comment";
	postBut2.style.marginLeft = "55px";
	commentsDiv.appendChild(postBut2);

	
	
	var commHead = document.createElement("h4");
	commHead.innerHTML = "Comments";
	commentsDiv.appendChild(commHead);

	postBut2.onclick = function(){
			var commValue2 = textArea.value;
			addComment(commValue2);
		}

	//Create Table for comments
	var addComment = function(commValue1) {
		
		var commentsTable = document.createElement("table");
		commentsTable.style.border = "1px solid";
		commentsDiv.appendChild(commentsTable);
		var tr1 = document.createElement("tr");
		var tr2 = document.createElement("tr");
		
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		
		var td4 = document.createElement("td");
		
		commentsTable.appendChild(tr1);
		commentsTable.appendChild(tr2);
		
		tr1.appendChild(td1);
		tr1.appendChild(td2);
		tr1.appendChild(td3);
		
		tr2.appendChild(td4);
		
		var profPic = document.createElement("img");
		profPic.src = "./imgs/profpic.png";
		profPic.style.width= "60px";
		td1.appendChild(profPic);
		td2.innerHTML = "Your Name";
		td3.innerHTML = "5 stars";
		
		td4.innerHTML = commValue1;
		td4.setAttribute("colspan", "3");
		td4.style.width = "60px";
		
		td2.style.width = "80%";
		
		td1.style.height= "30px";
	}

	//rating buttons
	$(".rating input:radio").attr("checked", false);
    $('.rating input').click(function () {
        $(".rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('input:radio').change(
    function(){
        var Rating = this.value;
    }); 
	
};
