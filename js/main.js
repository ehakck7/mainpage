window.onload = function(){
	var mainIndex = {
		init : function(){
			this.darkModeBtn();
			this.arrowMove();
			this.colorSet();
			this.projectImgSet();
		},

		/* darkModeBtn */
		darkModeBtn : function(){
			var wrap = document.querySelector('.wrap')
			var modeIcon = document.querySelector('.btn-darkmode-wrap .far')
			var modeBtnWrap = document.querySelector('.btn-darkmode-wrap .btn-wrap')
			var modeBtn = document.querySelector('.btn-darkmode-wrap .btn-darkmode')
			var modeHandle = $('.btn-handle')
			modeBtnWrap.addEventListener('click', function(){
				if(!modeBtn.checked){
					modeBtn.checked = true
					wrap.className = 'wrap darkmode' 
					modeIcon.className = 'far fa-moon'
					/* ie9 animation 기능 때문에 jquery 사용 */
					modeHandle.stop().animate({
						left : 29
					}, 200)
				}else{
					modeBtn.checked = false
					wrap.className = 'wrap' 
					modeIcon.className = 'far fa-sun'
					modeHandle.stop().animate({
						left : 4
					}, 200)
				}
			})
		},

		/* cont-top arrow */
		arrowMove : function(){
			var arrow = $('.cont-top .arrow')
			arrow.animate({
				bottom : 40
			}, 700).animate({
				bottom : 60
			}, 700, function(){
				mainIndex.arrowMove()
			})
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