let projects = [];

function createProject() {
  const projectName = document.getElementById('projectName').value.trim();
  if (!projectName) {
    alert('Please enter a project name.');
    return;
  }

  const project = {
    name: projectName,
    tasks: [],
  };

  projects.push(project);
  document.getElementById('projectName').value = '';
  renderProjects();
}

function addTask(projectIndex) {
  const taskName = prompt('Enter task name:');
  const deadline = prompt('Enter task deadline:');
  if (!taskName || !deadline) {
    alert('Task name and deadline are required.');
    return;
  }

  projects[projectIndex].tasks.push({ name: taskName, deadline });
  renderProjects();
}

function renderProjects() {
  const projectList = document.getElementById('projectList');
  projectList.innerHTML = '';

  projects.forEach((project, index) => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    const projectHeader = document.createElement('h3');
    projectHeader.textContent = project.name;
    projectDiv.appendChild(projectHeader);

    const taskList = document.createElement('div');
    project.tasks.forEach((task) => {
      const taskDiv = document.createElement('div');
      taskDiv.className = 'task';
      taskDiv.textContent = `${task.name} (Deadline: ${task.deadline})`;
      taskList.appendChild(taskDiv);
    });

    projectDiv.appendChild(taskList);

    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.onclick = () => addTask(index);
    projectDiv.appendChild(addTaskButton);

    projectList.appendChild(projectDiv);
  });
}
