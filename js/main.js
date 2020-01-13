window.onload = function(){
	var mainIndex = {
		init : function(){
			this.colorSet();
			this.projectImgSet();
		},

		/* project color set */
		colorSet : function(){
			var colorSet = document.querySelectorAll('.site-color span')
			for(var i = 0; i < colorSet.length; i++){
				colorSet[i].style.backgroundColor =  '#'+colorSet[i].getAttribute('data-pr-color')
			}
		},

		/* projectImg set */
		projectImgSet : function(){
			var bgSet = document.querySelectorAll('.project-list > li')
			var projectWrap = document.querySelectorAll('.project-img')
			for(var i = 0; i < bgSet.length; i++){
				var projectImg = bgSet[i].getAttribute('data-project-img')
				var projectType = bgSet[i].parentElement.parentElement.parentElement
	
				if(projectType.className === 'personal-project'){
					projectWrap[i].innerHTML = '<img src="images/personal-'+projectImg+'.png" alt="personal-'+projectImg+' 사이트 화면">'
				}else{
					projectWrap[i].innerHTML = '<img src="images/'+projectImg+'.png" alt="'+projectImg+' 사이트 화면">'
				}
			}
		}
	}
	mainIndex.init()
}