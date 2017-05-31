"use strict";

// example();

// function example() {

	var task_name = "1/29/17"; // date
	var restlessness_ratings = [3, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 2, 1, 2, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0];
	// iso8601 Start Time 
	var time = moment("2017-01-29T03:18:29.020000");
	var new_time;

	var taskStatus = {
	    "restful": "bar",
	    "restless": "bar-failed",
	    "arousal": "bar-running",
	    "wake": "bar-killed"
	};
	var states = ["restful", "restless", "arousal", "wake"];
	var taskNames = [ task_name ];

	var tasks1 = [];
	_.each(restlessness_ratings, function(r){
		new_time = moment(time).add(1, 'hours'); // mins
		
		tasks1.push({
			"startDate": time.toDate(),
			"endDate": new_time.toDate(),
			"taskName": task_name,
			"status": states[r]
		});
		time = new_time;
	});

	var format = "%H:%M";

	// d3.gantt().selector("my_gantt_chart");
	var gantt = d3.gantt("#my_gantt_chart").taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
	console.log(tasks1[0]);

	// gantt(tasks);
	gantt(tasks1);
// };