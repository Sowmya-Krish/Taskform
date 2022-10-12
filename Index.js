var label=createlabels("label","for","Firstname","Firstname");
var br1=createlinebreak("br");
var input=createinput("input","type","Firstname","id","Firstname");
var br2=createlinebreak("br");

var Middlename=createlabels("label","for","Middlename","Middlename");
var br3=createlinebreak("br");
var Midinput=createinput("input","type","Midinput","id","Firstname");
var br4=createlinebreak("br");

var lastname=createlabels("label","for","lastname","lastname");
var br5=createlinebreak("br");
var lastinput=createinput("input","type","lastinput","id","lastname");
var br6=createlinebreak("br");

var Phonenumber=createlabels("label","for","Phonenumber","Phonenumber");
var br7=createlinebreak("br");
var Phoneinput=createinput("input","type","Phoneinput","id","Phonenumber");
var br8=createlinebreak("br");

document.body.append(label,br1,input,br2,Middlename,br3,Midinput,br4,lastname,br5,lastinput,br6,Phonenumber,br7,Phoneinput,br8);


function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}



 