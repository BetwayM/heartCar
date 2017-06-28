  
// //转换json
// function toJsonK(){
//     var s_name=$("#s_name").val();
//     var s_phone=$("#s_phone").val();
//     var p_name=$("#p_name").val();
//     var p_phone1=$("#p_phone1").val();
//     var p_phone2=$("#p_phone2").val();
//     var s_school=$("#s_school").val();
//     var s_home=$("#s_home").val();
//     var s_testpot=$("#s_testpot").val();
//     var s_time=$("#s_time").val();
//     var s_site=$("#s_site").val();
//     //检测输入数据是否合法
   
//     if(s_name==""||s_phone==""||p_name==""||s_school==""||s_home==""||p_phone1==""||s_testpot==""||s_time==""||s_site==""){
//         alert("*不能留空,请填写完整");
//     }else{
//         //检查电话号码
//     //  if(p_phone2!=""){
  
//         if(!(/^1[34578]\d{9}$/.test(s_phone))||!(/^1[34578]\d{9}$/.test(p_phone1))){
//          alert('请检查电话号码是否有误！');
         
    
//         }else{
//             if(p_phone2!=""){
//       if(!(/^1[34578]\d{9}$/.test(p_phone2))){
//         alert('请检查电话号码是否有误！');
//     }}
//             if(!(/^[\u4e00-\u9fa5]+$/i.test(s_name))||!(/^[\u4e00-\u9fa5]+$/i.test(p_name))){
//     alert('姓名必须是中文名，且不包含空格或特殊字符！');
// }else{
//         if(check()) {
         
//         var jsonString='{"name":"'+s_name+'","phone":"'+s_phone+'","parentName":"'+p_name+'","parentPhone1":"'+p_phone1+'","parentPhone2":"'+p_phone2+'","school":"'+s_school+'","point":"'+s_testpot+'","address":"'+s_home+'","place":"'+s_site+'","time":"'+s_time
//     +'"}';
//     var json=JSON.parse(jsonString);
//     $.ajax({
//         type: 'POST',
//         url:'http://www.pojumbo.cn/baoming/uploap_baoming',
//         data:json,
//         dataType:"json",
//         cache: false,
//         success: function(data){
//                 alert("报名成功！已成功上传资料，请耐心等候!");//发送json之后，服务器的返回
//                 resets();
//         },
//         error: function(e) { 
//         alert("报名失败！请检查输入是否有误或联系相关人员！"); 
// } 
// });
// }else{
// alert("日期格式不正确或时间输入不合法!") 
// }
// }
// }
//     }
  
// }
//new Click
function BtnClick(){
    toJson();
    if(dataSeek()){
       updateData(toJson());
    }
}
//数据监测
function dataSeek(){
    var s_name=$("#s_name").val();
    var s_phone=$("#s_phone").val();
    var p_name=$("#p_name").val();
    var p_phone1=$("#p_phone1").val();
    var p_phone2=$("#p_phone2").val();
    var s_school=$("#s_school").val();
    var s_home=$("#s_home").val();
    var s_testpot=$("#s_testpot").val();
    var s_date=$("#s_date").val();
    var s_time=$("#s_time").val();
    var Time=s_date+" "+s_time;
    var s_site=$("#s_site").val();
        if(s_name==""||s_phone==""||p_name==""||s_school==""||s_home==""||p_phone1==""||s_testpot==""||s_date==""||s_time==""||s_site==""){
         alert("*不能留空,请填写完整");
         return false;
        }
        if(!(/^[\u4e00-\u9fa5]+$/i.test(s_name))||!(/^[\u4e00-\u9fa5]+$/i.test(p_name))){
         alert('姓名必须是中文名，且不包含字母、数字、空格或特殊字符！');
         return false;
        }
        if(p_phone2==""){
         if(!(/^1[34578]\d{9}$/.test(s_phone))||!(/^1[34578]\d{9}$/.test(p_phone1))){
         alert('请检查电话号码是否有误！');
         return false;
         }
        }
        if(p_phone2!=""){
         if(!(/^1[34578]\d{9}$/.test(s_phone))||!(/^1[34578]\d{9}$/.test(p_phone1))||!(/^1[34578]\d{9}$/.test(p_phone2))){
         alert('请检查电话号码是否有误！');
         return false;
         }
        }
        if(!check()){
            alert("日期格式不正确或时间输入不合法!") 
            return false;
        }
        return true;

}
//转换json
function toJson(){
    var s_name=$("#s_name").val();
    var s_phone=$("#s_phone").val();
    var p_name=$("#p_name").val();
    var p_phone1=$("#p_phone1").val();
    var p_phone2=$("#p_phone2").val();
    var s_school=$("#s_school").val();
    var s_home=$("#s_home").val();
    var s_testpot=$("#s_testpot").val();
    var s_date=$("#s_date").val();
    var s_time=$("#s_time").val();
    var Time=s_date+" "+s_time;
    var s_site=$("#s_site").val();
    var jsonString='{"name":"'+s_name+'","phone":"'+s_phone+'","parentName":"'+p_name+'","parentPhone1":"'+p_phone1+'","parentPhone2":"'+p_phone2+'","school":"'+s_school+'","point":"'+s_testpot+'","address":"'+s_home+'","place":"'+s_site+'","time":"'+Time
    +'"}';
    var json=JSON.parse(jsonString);
    return json;
}
//置空数据
function resets()
{
  var controls = document.getElementsByTagName('input');
  for(var i=0; i<controls.length; i++){
    if(controls[i].type=='text'){
      controls[i].value='';
    }
  }
}
function check(){
    var time=$("#s_time").val();
    var year=$("#s_time").val().substring(0,4);
    var month=$("#s_time").val().substring(5,7);
    var day=$("#s_time").val().substring(8,10);
    var hour=$("#s_time").val().substring(11,13);
    var minute=$("#s_time").val().substring(14,16);
    // alert(year+","+month+","+day+","+hour+","+minute);
    var a = /^\d{4}-\d{2}-\d{2}$/;
    var b =/^\d{2}:\d{2}$/;;
    if (!a.test(document.getElementById("s_date").value)||!b.test(document.getElementById("s_time").value)) { 
    return false 
    }else{
    if(startIsZero(month)==2){
        if(IsRunYear(startIsZero(year))){
        if(startIsZero(day)>29){
            return false;
        }else{
            return true;
        }
    }else{
           if(startIsZero(day)>28){
                 return false;  
        }else{
            return true;
        }
            }
}else{
    if(startIsZero(month)==1||startIsZero(month)==3||startIsZero(month)==5||startIsZero(month)==7||startIsZero(month)==8||startIsZero(month)==10||startIsZero(month)==12){
        if(startIsZero(month)>12||startIsZero(day)>31||startIsZero(hour)>=24||startIsZero(minute)>=60){
        return false;
            }else{
                return true;
            }
    }else{
        if(startIsZero(month)>12||startIsZero(day)>30||startIsZero(hour)>=24||startIsZero(minute)>=60){
        return false;
     }else{
         return true;
     } 
    }
}
}
 }
//时间字符转换
function startIsZero(k){
    if(k.substring(0,1)=="0"){
        k=k.substring(1,2);
        return k;
    }else{
        return k;
    }
}
//判断是否闰平年
function IsRunYear(year)//判断是否闰平年
{
    // return(0 == year%4 && (year%100 !=0 || year%400 == 0));
     return(year%100==0&&year%400==0)||(year%100!=0&&year%4==0)?true:false;
      
}
//数据上传
function updateData(json){
        $.ajax({
        type: 'POST',
        url:'http://www.pojumbo.cn/baoming/uploap_baoming',
        data:json,
        dataType:"json",
        cache: false,
        success: function(data){
                alert("报名成功！已成功上传资料，请耐心等候!");//发送json之后，服务器的返回
                resets();
        },
        error: function(e) { 
        alert("报名失败！请检查输入是否有误或联系相关人员！"); 
} 
});
}