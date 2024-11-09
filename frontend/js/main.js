document.getElementById('taskForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const task = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      deadline: document.getElementById('deadline').value,
      priority: document.getElementById('priority').value,
      userID: '12345' // Replace with authenticated user's ID
    };
  
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
  
    if (response.ok) {
      const newTask = await response.json();
      console.log('Task created:', newTask);
    } else {
      console.error('Failed to create task');
    }
  });
  