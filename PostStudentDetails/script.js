document.getElementById('newStudentForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    try {
        const response = await fetch('http://localhost:3000/NewStudentDetails/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)), 
        });
        if (!response.ok) {
            throw new Error('Failed to add student details');
        }
        const responseData = await response.text();
        document.getElementById('responseMessage').textContent = responseData;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').textContent = 'An error occurred: ' + error.message;
    }
});