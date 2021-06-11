const loadTasks = (tasks) => {
	tasks = sortTasks(tasks);
	let tasksHtml = tasks.map(function (task, index) {
		return `<li class='task' id=${index} ><input type="checkbox" class="complete" id="chk${index}"><span> ${task}<span></li>`;
	}).join('');

	return tasksHtml;
};

const sortTasks = (sTasks) => {

	sTasks.sort();
	return sTasks;

}

const updateList = () => {
	$('ul.tasklist').empty();
	$('ul.tasklist').append(taskList);
	$('li').on('click', listComplete);
	$('input.complete').on('click', listComplete);
}
const loadChart = (tasks) => {

};


const textChange = (e) => {
	let taskItem = '';

	if (e.keyCode === 'Enter' || e.which === 13) {
		e.preventDefault();
		//taskItem = $('.form-control').value();
		taskItem = e.target.value;
		if (taskItem === '' || taskItem === undefined) {
			$('.form-error').text('Task cannot be Empty');
			$('.form-error').css('color', '#b94a48');
		}
		else {
			$('.form-error').text('');
			$('.form-error').css('color', '#eee');;
			tasks.push(taskItem);
			taskList = loadTasks(tasks);
			updateList();
			$('.form-control').val('');
			$('.form-control').focus();
			loadChart(tasks);
		}
	}

};

const listComplete = (e) => {
	let eTarget = e.target;
	let classList = e.target.classList.value;

	if ((eTarget.nodeName == 'INPUT') && (eTarget.getAttribute('type') == 'checkbox')) {
		let liTarget = eTarget.parentElement;
		if (eTarget.checked) {
			liTarget.classList.add('taskcomplete');
			liTarget.classList.remove('task')
		}
		else {
			liTarget.classList.add('task');
			liTarget.classList.remove('taskcomplete')
		}
	}

	if (eTarget.nodeName == 'LI') {
		let chkTarget = eTarget.firstChild;
		if (classList === 'task') {
			e.target.classList.add('taskcomplete')
			chkTarget.checked = true;
			e.target.classList.remove('task')
		}
		else {
			e.target.classList.add('task')
			chkTarget.checked = false;
			e.target.classList.remove('taskcomplete')
		}
	}


};