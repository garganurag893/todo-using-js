var newentry = document.getElementById("new");
var listarr = new Array();
newentry.addEventListener("keypress",function(e) {
    if(e.keyCode == 13)
        {
            var ans= document.getElementById("new").value;
            if(ans != "")
            {
                var obj={caption:ans,iscomp:0};
                listarr.push(obj);
                document.getElementById("new").value="";
                var ul = document.getElementById("list");
                var li = document.createElement("li");
                li.classList.add("d-flex");
                li.classList.add("justify-content-between");
                li.innerHTML=("<div><i class='far fa-circle circle' onclick='func2a(this)'></i><i class='far fa-check-circle font-weight-lighter display circle' style='color:green;' onclick='func2b(this)'></i><span>"+ans+"</span></div><input onkeypress='edit(event,this)' style='display:none;padding:0;margin:0;height:50px;'type='text'><i class='fas fa-times' onclick='func1(this)'></i>");
                 li.addEventListener("dblclick",function(e){
                    e.target.childNodes[0].childNodes[2].innerHTML="";
                    var arr2=e.target.childNodes;
                    arr2[1].style.display = "block";
                });
                ul.appendChild(li);
                var c=document.getElementById("count").innerHTML;
                c=parseInt(c, 10)+1;
                document.getElementById("count").innerHTML=c;
            }
        }
});
function func3()
{
    var arr=document.getElementsByTagName("li");
    var flag=0;
    for(var i=0;i<arr.length;i++)
        {
            if(!arr[i].childNodes[0].classList.contains("line"))
                {
                    flag=1;
                    break;
                }
        }
    if(flag==1)
        {
            for(var i=0;i<arr.length;i++)
            {
                if(!arr[i].childNodes[0].classList.contains("line"))
                {
                    var temp=arr[i].childNodes[0].childNodes[0];
                    func2a(temp);
                    arr[i].childNodes[0].classList.add("line");
                }
            }
        }
    else{
            for(var i=0;i<arr.length;i++)
            {
                    var temp=arr[i].childNodes[0].childNodes[1];
                    func2b(temp);
                    arr[i].childNodes[0].classList.remove("line");
            }
    }
}
function func1(butt)
{
    butt.parentNode.remove();
    dec();
}
function func2a(butt)
{
    butt.classList.toggle("display");
    var temp=butt.parentNode.childNodes;
    temp[1].classList.toggle("display");
    butt.parentNode.classList.toggle("line");
    dec();
}
function func2b(butt)
{
    butt.classList.toggle("display");
    var temp=butt.parentNode.childNodes;
    temp[0].classList.toggle("display");
    butt.parentNode.classList.toggle("line");
    inc();
}
function all()
{
    var arr=document.getElementsByTagName("li");
    for(var i=0;i<arr.length;i++)
        {
             arr[i].classList.remove("display");
        }
}
function active()
{
     var arr=document.getElementsByTagName("li");
    for(var i=0;i<arr.length;i++)
        {
            if(arr[i].classList.contains("line"))
            {
                alert("yes");
                arr[i].classList.add("display");
            }
        }
}
function completed()
{
     var arr=document.getElementsByTagName("li");
    for(var i=0;i<arr.length;i++)
        {
            if(arr[i].classList.contains("line"))
            {
                
            }
        }
}
function myfunc(butt)
{
    alert(butt);
    butt.value="";
    var arr2=butt.childNodes;
    console.log(arr2[1]);
    arr2[1].style.display = "block";
}
function edit(e,butt)
{
    if(e.keyCode == 13)
        {
            var ans=e.target.value;
            e.target.value="";
            if(ans!="")
                {
                    e.target.parentNode.childNodes[0].childNodes[2].innerHTML=ans;
                    e.target.style.display = "none";
                }
        }
}
function inc()
{
    c=document.getElementById("count").innerHTML;
    c=parseInt(c, 10)+1;
    document.getElementById("count").innerHTML=c;
}
function dec()
{
    c=document.getElementById("count").innerHTML;
    c=parseInt(c, 10)-1;
    document.getElementById("count").innerHTML=c;
}
function clearcomp()
{
    var arr=document.getElementsByTagName("li");
    for(var i=0;i<arr.length;i++)
            {
                if(arr[i].childNodes[0].classList.contains("line"))
                {
                    var parent = arr[i].parentNode;
                    parent.removeChild(arr[i]);
                }
            }
}