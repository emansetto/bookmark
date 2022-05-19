var siteName=document.getElementById("siteName");
var siteURL=document.getElementById("siteURL");
var subBTN=document.getElementById("submit");
var alert=document.getElementsByClassName("alert");
var siteList=[];

(function () {

    if (localStorage.getItem("data") == null) {
        siteList = [];
    }
    else {
        siteList = JSON.parse(localStorage.getItem("data"));
        display(siteList);
    }
})();
function search()
{
    siteNameSearch=siteName.value;
    for(var i=0; i<siteList.length;i++)
    {
        if(siteList[i].name===siteNameSearch)
        {
            console.log(siteNameSearch);
            return true;
        }
    }
    return false;
}
function clearAlert()
{
    for(var i=0;i<alert.length;i++)
    {
        alert[i].style.opacity="0%"
    }
}
function showAlert()
{
    for(var i=0;i<alert.length;i++)
    {
        alert[i].style.opacity="100%"
        console.log("available");   
    }
}
subBTN.onclick = function () {
        if(siteName.value!="" || siteURL.value!= "")
    {
        console.log("ok");

        if(search())
    {
           alert[0].innerHTML="this site name is already available"
         
           showAlert();
        }
           else
           {
               clearAlert();
            
               add();
            }
        
    }

    else
    {
        alert[0].innerHTML="Name is Required"
        console.log("okno");
        showAlert();      
    }
   
}
function add() {
    var Obj = {
        name: siteName.value,
        URL: siteURL.value,
    };
    siteList.push(Obj);
    localStorage.setItem("data", JSON.stringify(siteList));
    display(siteList);

    clearfunction();
    
}
// var selectedElements;
function addHttp(url) {
    if (url.search("http://") == -1 && url.search("https://") == -1)
        return "http://" + url;
    return url;
}
function display(siteList) {
    var box = ``;
    for (i = 0; i < siteList.length; i++) {
        box +=
            `<div class="bookmark">
            <h2>${siteList[i].name}</h2>
            <a class="btn btn-primary btn-visit" target="_blank" href="${addHttp(siteList[i].URL)}">Visit</a>
            <button class="btn btn-danger btn-delete" onclick="delFun(${i})">Delete</button>
        </div>`
    }
    document.getElementById("bookmarkList").innerHTML = box;
}
function delFun(index) {
    siteList.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(siteList));
    display(siteList);
}
function visit(index)
{
    window.location.replace("siteList[index].siteURL");
}
function clearfunction()
{
    siteName.value="";
    siteURL.value="";
}

