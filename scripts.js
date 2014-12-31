/*Difference of online time to school bell time */
/**/var difference = -45; 
/*Positive# = School time behind of real time */
/*Negative# = School time ahead of real time*/
/*0 = School time is real time*/

var today=new Date();
today.setTime(today.getTime()+(difference*1000))//1000 = 1 second
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var month = today.getMonth();
var date = today.getDate(); //number
var day = today.getDay(); //sunday, monday
var year = today.getFullYear();
var aheadBehind = '';
var homeroom = false;

/*@@@@@@@@@@@@@@@@@@@@GLOBARL VARIABLES END@@@@@@@@@@@@@@@@*/

function isHomeroom()
{
if (day==0||day==6) //weekend
{
	homeroom = false;
}
else //not a weekend
{
	if 	((date==15)||(date==30)||(month==1&&(date==28))) //normal homeroom code
	{
		homeroom = true;
	}
	else
	{
		if 	(((date+1==15)&&(day+1==6))||((date+2==15)&&(day-5==0))||((date+1==30)&&(day+1==6))||((date+2==30)&&(day-5==0))) //15th/30th on weekend
		{
			homeroom=true;
		}
		else
		{
			homeroom=false;
		}
	}
}
}

function refreshTime()
{
today=new Date();
today.setTime(today.getTime()+(difference*1000))//1000 = 1 second
//today.setTime(today.getSeconds()+30); //add 30 sec
h = today.getHours();
m = today.getMinutes();
s = today.getSeconds();
month = today.getMonth();
date = today.getDate();
day = today.getDay();
}

function startTime()
{
var min = m;
var sec = s;
var hr = h;
	if (hr>12) //makes non-military time
	{
	hr = hr-12;
	document.getElementById('ampm').innerHTML="PM";
	}
	else
	{
		if (hr==0)
		{
		hr = hr+12;
		}
		document.getElementById('ampm').innerHTML="AM";
	}
// add a zero in front of numbers<10
min=checkTime(min);
sec=checkTime(sec);
document.getElementById('time').innerHTML=hr+":"+min+":"+sec;
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}

function getPeriod()
{
var min = m;
var sec = s;
var hr = h;

var period = 'CRITICAL ERROR';
var spanning = 'CRITICAL ERROR';
var countdown = '';
isHomeroom();
if (homeroom == true)
{
if (hr*60+min<495)
{
period = 'Period 0 HR';
spanning = 'School starts in '+countDown(8*3600+15*60);
}
if (hr*60+min>=495 && hr*60+min<535)
{
period = 'Period 1 HR';
spanning = '8:15 - 8:55 AM';
}
	if (hr*60+min>=535 && hr*60+min<539)
{
period = 'Period 1 HR -> Homeroom';
spanning = 'Homeroom starts in '+countDown(8*3600+59*60);
}
if (hr*60+min>=539 && hr*60+min<549)
{
period = '*HOMEROOM*';
spanning = '8:59 - 9:09 AM';
}
	if (hr*60+min>=549 && hr*60+min<553)
{
period = 'Homeroom -> Period 2 HR';
spanning = 'Period 2 HR starts in '+countDown(9*3600+13*60);
}
if (hr*60+min>=553 && hr*60+min<593)
{
period = 'Period 2 HR';
spanning = '9:13 - 9:53 AM';
}
	if (hr*60+min>=593 && hr*60+min<597)
{
period = 'Period 2 HR -> 3 HR';
spanning = 'Period 3 HR starts in '+countDown(9*3600+57*60);
}
if (hr*60+min>=597 && hr*60+min<637)
{
period = 'Period 3 HR';
spanning = '9:57 - 10:37 AM';
}
	if (hr*60+min>=637 && hr*60+min<641)
{
period = 'Period 3 HR -> 4 HR';
spanning = 'Period 4 HR starts in '+countDown(10*3600+41*60);
}
if (hr*60+min>=641 && hr*60+min<681)
{
period = 'Period 4 HR';
spanning = '10:41 - 11:21 AM';
}
}
else
{
if (hr*60+min<495)
{
period = 'Period 0';
spanning = 'School starts in '+countDown(8*3600+15*60);
}
if (hr*60+min>=495 && hr*60+min<538) 
{
period = 'Period 1';
spanning = '8:15 - 8:58 AM';
}
	if (hr*60+min>=538 && hr*60+min<541) 
{
period = 'Period 1 -> 2';
spanning = 'Period 2 starts in '+countDown(9*3600+1*60);
}
if (hr*60+min>=541 && hr*60+min<587)
{
period = 'Period 2';
spanning = '9:01 - 9:47 AM';
}
	if (hr*60+min>=587 && hr*60+min<591) 
{
period = 'Period 2 -> 3';
spanning = 'Period 3 starts in '+countDown(9*3600+51*60);
}
if (hr*60+min>=591 && hr*60+min<634)
{
period = 'Period 3';
spanning = '9:51 - 10:34 AM';
}
	if (hr*60+min>=634 && hr*60+min<638) 
{
period = 'Period 3 -> 4';
spanning = 'Period 4 starts in '+countDown(10*3600+38*60);
}
if (hr*60+min>=638 && hr*60+min<681)
{
period = 'Period 4';
spanning = '10:38 - 11:21 AM';
}
}//day is normal starting now

	if (hr*60+min>=681 && hr*60+min<685)
{
period = 'Period 4 -> 5A';
spanning = 'Period 5A starts in '+countDown(11*3600+25*60);
}
if (hr*60+min>=685 && hr*60+min<710)
{
period = 'Period 5A (Lunch)';
spanning = '11:25 - 11:50 AM';
}
	if (hr*60+min>=710 && hr*60+min<712)
{
period = 'Period 5A -> 5B';
spanning = 'Period 5A starts in '+countDown(11*3600+52*60);
}
if (hr*60+min>=712 && hr*60+min<727)
{
period = 'Period 5B';
spanning = '11:52 AM - 12:07 PM';
}
	if (hr*60+min>=727 && hr*60+min<731)
{
period = 'Period 5B -> 6A';
spanning = 'Period 6A starts in '+countDown(12*3600+11*60);
}
if (hr*60+min>=731 && hr*60+min<756)
{
period = 'Period 6A (Lunch)';
spanning = '12:11 - 12:36 PM';
}
	if (hr*60+min>=756 && hr*60+min<759)
{
period = 'Period 6A -> 6B';
spanning = 'Period 6B starts in '+countDown(12*3600+39*60);
}
if (hr*60+min>=759 && hr*60+min<774)
{
period = 'Period 6B';
spanning = '12:39 - 12:54 PM';
}
	if (hr*60+min>=774 && hr*60+min<776)
{
period = 'Period 6B -> 6C';
spanning = 'Period 6C starts in '+countDown(12*3600+56*60);
}
if (hr*60+min>=776 && hr*60+min<801)
{
period = 'Period 6C (Lunch)';
spanning = '12:56 - 1:21 PM';
}
	if (hr*60+min>=801 && hr*60+min<805)
{
period = 'Period 6C -> 7';
spanning = 'Period 7 starts in '+countDown(13*3600+25*60);
}
if (hr*60+min>=805 && hr*60+min<848)
{
period = 'Period 7';
spanning = '1:25 - 2:08 PM';
}
if (hr*60+min>=848 && hr*60+min<852)
{
period = 'Period 7 -> 8';
spanning = 'Period 8 starts in '+countDown(14*3600+12*60);
}
if (hr*60+min>=852 && hr*60+min<895)
{
period = 'Period 8';
spanning = '2:12 - 2:55 PM';
}
if (hr*60+min>=895)
{
period = 'After School';
spanning = 'School starts in '+countDown(8*3600+15*60);
}

document.getElementById('period').innerHTML=period;
document.getElementById('spanning').innerHTML=spanning;
document.getElementById('period2').innerHTML=period;//for the 2 times needed, cant obtain info twice
document.getElementById('spanning2').innerHTML=spanning;
}


function countDown(subFrom) //soo happy about this algorithm
{
var min = m;
var sec = s;
var hr = h;

var timeInSec=(sec) + (min*60) + (hr*3600);
var leftOver = 0;
if (subFrom < timeInSec) //if afterschool
{
leftOver = subFrom + (24*3600-timeInSec);// how long until next day
}
else //if beforeschool
{
leftOver = (subFrom-timeInSec);
}
var hrLeft = Math.floor(leftOver/3600);
leftOver = leftOver-(hrLeft*3600);
var minLeft = Math.floor(leftOver/60);
leftOver = leftOver-(minLeft*60);
var secLeft = leftOver;
return checkTime(hrLeft)+":"+checkTime(minLeft)+":"+checkTime(secLeft);
}

function getBackground() //changes background depending on time of day
{
var min = m;
var sec = s;
var hr = h;

if (hr*60+min<495)//Before School
{
document.getElementById('bg').src="chsmorning.gif";
document.getElementById('bg').setAttribute("style","height:100%; width:100%;position:absolute; z-index:-1;");
}
if (hr*60+min>=495 && hr*60+min<895) //During School Hours
{
document.getElementById('bg').src="chsday.gif";
document.getElementById('bg').setAttribute("style","height:100%; width:100%;position:absolute; z-index:-1;");
}
if (hr*60+min>=895)//After School
{
document.getElementById('bg').src="chsnight.gif";
document.getElementById('bg').setAttribute("style","height:100%; width:100%;position:absolute; z-index:-1;");
}
}

function startDate()
{
var numWeekday = new Array(7);
	numWeekday[0]="Sunday";
	numWeekday[1]="Monday";
	numWeekday[2]="Tuesday";
	numWeekday[3]="Wednesday";
	numWeekday[4]="Thursday";
	numWeekday[5]="Friday";
	numWeekday[6]="Saturday";
	
var numMonth = new Array(12);
	numMonth[0]="January";
	numMonth[1]="February";
	numMonth[2]="March";
	numMonth[3]="April";
	numMonth[4]="May";
	numMonth[5]="June";
	numMonth[6]="July";
	numMonth[7]="August";
	numMonth[8]="September";
	numMonth[9]="October";
	numMonth[10]="November";
	numMonth[11]="December";
	
document.getElementById('date').innerHTML=numWeekday[day]+", "+numMonth[month]+" "+date+" "+year;
}

function noteMaker()
{
if (day==0||day==6)
{
	document.getElementById('note').innerHTML="Weekend";
}
else
{
isHomeroom();
if (homeroom == true)
{
		document.getElementById('note').innerHTML="Homeroom Day";
}
else
{
		document.getElementById('note').innerHTML="On Regular Schedule";
}
}
}


function checkRes() //check when portrait/landscape mode
{
var height = window.innerHeight;
if ((window.innerWidth>window.innerHeight) && height <= 400) //if landscape+small res
{
	closeDiv('calendar');
	closeDiv('chsweb');
	closeDiv('instructions');
	document.getElementById('popUp').setAttribute("style","display: none;");
	document.getElementById('header').setAttribute("style","display: none;");
}
else
{
	document.getElementById('popUp').setAttribute("style","display: block;");
	document.getElementById('header').setAttribute("style","display: block;");
	
var width = screen.width;//following resizes iframes to fit when changed to landscape
var height = screen.height;
document.getElementById('calendar').style.minHeight =  height-50 + "px"; //-50 to compensate for bar
document.getElementById('calendar').style.minWidth =  width + "px";
document.getElementById('iframe').style.minHeight = height + "px";
document.getElementById('iframe').style.minWidth =  width + "px";

document.getElementById('chsweb').style.minHeight =  height-50 + "px"; 
document.getElementById('chsweb').style.minWidth =  width + "px";
document.getElementById('iframe').style.minHeight = height + "px";
document.getElementById('iframe').style.minWidth =  width + "px";

document.getElementById('instructions').style.minHeight =  height-50 + "px"; //-50 to compensate for bar
document.getElementById('instructions').style.minWidth =  width + "px";
document.getElementById('iframe').style.minHeight = height + "px";
document.getElementById('iframe').style.minWidth =  width + "px";
}
}

function sched()
{
isHomeroom();
if (homeroom == true)
{
alert("Homeroom Schedule:\nPeriod 1: 8:15 - 8:55 AM\nHomeroom: 8:59 - 9:09 AM\nPeriod 2: 9:13 - 9:53 AM\nPeriod 3: 9:57 - 10:37 AM\nPeriod 4: 10:41 - 11:21 AM\nPeriod 5A: 11:25 - 11:50 AM\nPeriod 5B: 11:52 AM - 12:07 PM\nPeriod 6A: 12:11 - 12:36 PM\nPeriod 6B: 12:39 - 12:54 PM\nPeriod 6C: 12:56 - 1:21 PM\nPeriod 7: 1:25 - 2:08 PM\nPeriod 8: 2:12 - 2:55 PM");
}
else
{
alert("Regular Schedule:\nPeriod 1: 8:15 - 8:58 AM\nPeriod 2: 9:01 - 9:47 AM\nPeriod 3: 9:51 - 10:34 AM\nPeriod 4: 10:38 - 11:21 AM\nPeriod 5A: 11:25 - 11:50 AM\nPeriod 5B: 11:52 AM - 12:07 PM\nPeriod 6A: 12:11 - 12:36 PM\nPeriod 6B: 12:39 - 12:54 PM\nPeriod 6C: 12:56 - 1:21 PM\nPeriod 7: 1:25 - 2:08 PM\nPeriod 8: 2:12 - 2:55 PM");
}
}

function isSchoolTime()
{
if (difference < 0) //negative
{
aheadBehind = "ahead";
}
else //positive
{
aheadBehind = "behind";
}
}
	
function credits()
{
isSchoolTime();
alert('Developed by:\n Renard Tumbokon (\'13)\n Developed: June 2013\n\n Special thanks to:\n Mr. R.Bell, Ms. N.Campbell\n\n School time: ' + Math.abs(difference) + ' sec ' + aheadBehind);
}

function instructions()
{
	findRes('instructions');
    document.getElementById('instructions').style.display = "block";
}

function openDiv(id) 
{ 
var width = screen.width;
var height = screen.height;

document.getElementById(id).style.minHeight =  height-50 + "px"; //-50 to compensate for bar
document.getElementById(id).style.minWidth =  width + "px";

document.getElementById('iframe').style.Height = height + "px";
document.getElementById('iframe').style.Width =  width + "px";

document.getElementById(id).style.display = "block";
document.getElementById('iframeBar').style.display = "block";
}

function openClose(id) 
{ 
    if (document.getElementById(id).style.display == "none") 
    {
        document.getElementById(id).style.display = "block";
    } 
    else 
    {
       document.getElementById(id).style.display = "none";
    }
}

function loadFrame(url)
{
document.getElementById('iframe').src = url;
}

function findRes(div) //finds screen resolution
{
var width = screen.width;
var height = screen.height;
document.getElementById(div).style.height = height + "px";
document.getElementById(div).style.width =  width + "px";
}

function close() //when top bar is clicked on iframe
{
closeDiv('chsweb');
closeDiv('calendar');
closeDiv('instructions');
}

function closeDiv(id) //makes iframe div disapear
{
     document.getElementById(id).style.display = "none";
	 document.getElementById('iframeBar').style.display = "none";
}

function startup()
{
refreshTime();
checkRes();
startTime();
getPeriod();
getBackground();
startDate();
noteMaker();
}

function init()
{
startup();
window.setInterval(startup, 500); //every 30 sec
}