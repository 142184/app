
QUnit.test("��½�ɹ�", function( assert ) {
	localStorage.zhanghao=111��
	localStorage.mima=111��
	$("#fullname").val()=111��
	$("#pwd").val()=111��
	assert.ok( localStorage.zhanghao == $("#fullname").val() , "Passed!" );
	assert.ok( localStorage.mima == $("#pwd").val() , "Passed!" );
});