var pageBootWindow = open("http://pagebootchart.com/graph.html" , "graphOutput"),
	msg = JSON.stringify({t: performance.timing, e: performance.getEntries(), loc: window.location.toString()});
window.addEventListener("message", function(evt){
	if (evt.data === "pageBootChart wants data") {
		pageBootWindow.postMessage(msg), "*");
	}
}, false);


open('http://pagebootchart.com/graph.html' , 'pbc');
msg=JSON.stringify(
	{
		t:performance.timing,
		e:performance.getEntries(),
		loc:window.location.toString()
	});
window.addEventListener('message',function(evt){
	if(evt.data==='pageBootChart_wants_data'){
		pageBootWindow.postMessage(msg),'*')
	}
},false);