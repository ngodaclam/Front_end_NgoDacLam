/*Format standard support manager.js*/

var emp = "";


function setStatus(isClick){
	if(isClick){
		document.getElementById("dateTimeId").disabled = false;
	}else{
		document.getElementById("dateTimeId").disabled = true;
	}
}

function checkValidKeyword(fn){
	var key = fn.txtKeyword.value;

	var content = fn.txtContent.value;
	var length = content.length;
	
	
	
	if(key.trim()==emp){
		window.alert("Không được để tiêu đề trống!");
		fn.txtKeyword.focus();
		fn.txtKeyword.value = emp;
	}
	
	if(length<200){
		window.alert("Số lượng ký tự phải lớn hơn 200!");
		fn.txtContent.value = emp;
	}
}

function resetAll(fn){
	fn.txtKeyword.value = emp;
	fn.linkStatic.value = emp;
	fn.txtContent.value = emp;
	fn.dateTime.value = emp;
	fn.txtKeyword.focus();
	
}

function chaeckEmailPhone(fn){
	var email = fn.email.value;
	var formatEmail = /^[A-Za-z]+@[A-Za-z]+.[A-Za-z]{2,20}$/;
	var value = formatEmail.test(email);
	
	if(email.trim()==emp){
		window.alert("Email không được để trống!");
	}
	
	if(!value){
		window.alert("Email không hợp lệ (ví dụ: abc@gmail.com)");
	}		
	
	var phone = fn.phone.value;
	var formatPhone =/^[0-9-+]+$/;
	var value = formatPhone.test(phone);
	if(phone.trim()==emp){
		window.alert("Phone không được để trống!");
	}
	
	if(!value){
		window.alert("Phone không hợp lệ (ví dụ: 0123456789)");
	}		
}