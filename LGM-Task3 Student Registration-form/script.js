document.getElementById("submit-button").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const url = document.getElementById("url").value;
  const imginput = document.querySelector('#image-input');
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const skills = Array.from(document.querySelectorAll('input[name="skills[]"]:checked')).map(skill => skill.value);
  
  const studentData = {
    name,
    email,
    url,
    gender,
    skills
  };
  alert('Student Enrolled..!✔️')

  const studentList = document.getElementById("student-list");
  const listItem = document.createElement("li");
  listItem.className = "student-info";
  listItem.innerHTML = `
    <img id="selected-image" src="${URL.createObjectURL(imginput.files[0])}" alt="Student Image">
    <div class="info">
    <p><strong>Name:</strong> ${studentData.name}</p>
    <p><strong>Email:</strong> ${studentData.email}</p>
    <p><strong>Website:</strong> <a href='${studentData.url}'>Click Here</a></p>
    <p><strong>Gender:</strong> ${studentData.gender}</p>
    <p><strong>Skills:</strong> ${studentData.skills.join(", ")}</p>
    </div>
    <button class="delete-button">Delete</button>
  `;
  studentList.appendChild(listItem);

  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
      studentList.removeChild(button.parentNode);
    });
  });

  // Clear the form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.querySelector('#image-input').value = ''; // Clear the image input
  document.getElementById('url').value = '';
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.querySelectorAll('input[name="skills[]"]:checked').forEach((checkbox) => {
    checkbox.checked = false;
  }); 
});

document.getElementById("reset-button").addEventListener("click", () =>{
  const studentList = document.getElementById("student-list");
  studentList.innerHTML=" ";
});