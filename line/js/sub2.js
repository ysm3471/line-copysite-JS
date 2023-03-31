const topNav = document.querySelectorAll('.menu > li');
const subNav = document.querySelectorAll('.sub_menu');
const subNav2 = document.querySelectorAll('.secondChildren');

const langBtn = document.querySelector('.langlist');
const langList = document.querySelectorAll('.langlist li');
const familyBtn = document.querySelector('.family_list');
const familyList = document.querySelectorAll('.family_list li');
const aTags = document.querySelectorAll('a');

aTags.forEach(function(item){		// 모든 a태그 기능 초기화
	item.onclick = function(e) {
		e.preventDefault();
	}
})

topNav.forEach(function(item,order) {		// 메뉴의 li에 마우르를 가져가면 서브메뉴가 내려오도록 하는 함수
	let num = order;		
	if (order < 3){		// 채용 부분에서는 발생하지 않도록 범위를 조절
		item.addEventListener('mouseover', function() {		// 서브메뉴의 max-height가 늘어나면서 내려오는 효과를 줌
			let subHieght = subNav2[order].getBoundingClientRect().height;
			subNav[order].style.cssText = `max-height : ${subHieght}px` ;
		})
		item.addEventListener('mouseleave', function() {		// 서브메뉴의 max-height가 줄어들면서 올라오는 효과를 줌
			subNav[num].style.cssText = 'max-height : 0px ';
		})		
	}
})

function langListHide() { 		// langlist를 숨기는 함수
	langList.forEach(function(item){
		item.style.display = 'none';
	})
	langList[0].style.display = 'block';	
	langBtn.classList.remove('active');
}
function familyListHide() { 	// familylist를 숨기는 함수
	familyList.forEach(function(item){
		item.style.display = 'none';
	})
	familyList[0].style.display = 'block';	
	familyBtn.classList.remove('active');		
}

function beStop() { 		// 모든 리스트를 숨기는 함수
	if (langBtn.classList.contains('active')) {
		langListHide();
	}
	else if (familyBtn.classList.contains('active')) {
		familyListHide();	
	}
}




window.addEventListener('click',function(e) {		// 화면 어디를 클릭하든 발생하는 함수
	// target은 자식요소에게 이벤트가 전파되지 않음. langBtn에만 조건을 걸게 되면 langBtn 안에 있는 a 태그를 클릭했을 때 이벤트가 발생하지 않기 때문에 조건을 추가할 필요가 있음
	if(e.target == langBtn || e.target == langList[0].childNodes[0] ) {		// langBtn을 클릭하면 langlist가 나타나고 familylist가 사라짐
		langList.forEach(function(item){
			item.style.display = 'block';
		})
		langList[0].style.display = 'none';
		langBtn.classList.add('active');
		if (familyBtn.classList.contains('active')) {
			familyListHide();
		}
	}
	else if(e.target == familyBtn || e.target == familyList[0].childNodes[0]) {		// familyBtn을 클릭하면 familylist가 나타나고 langlist가 사라짐
		familyList.forEach(function(item){
			item.style.display = 'block';
		})
		familyList[0].style.display = 'none';
		familyBtn.classList.add('active');
		if (langBtn.classList.contains('active')) {
			langListHide();
		}
	}
		else {		// 다른 곳을 클릭하면 모든 리스트가 사라짐
		beStop();		
	}
});
/* 
	이렇게 짜기는 했는데 뭔가 아닌 것 같음. 혹시 다른 방법이 있다면 그걸 쓰고 싶음
*/

