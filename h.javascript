// script.js

// Function to show the selected category
function showCategory(category) {
    // Hide the loading page
    document.getElementById('loading-page').style.display = 'none';

    // Show the content section
    const contentDiv = document.getElementById('content');
    contentDiv.style.display = 'block';

    // Load the content based on the selected category
    let content = '';
    switch (category) {
        case 'about':
            content = `
                <h2>About Me</h2>
                <img src="profile.jpg" alt="Profile Picture" width="150">
                <p>
                    I am a passionate and driven individual pursuing a B-Tech in Computer Science and Engineering. My goal is to leverage my technical skills and knowledge to contribute to organizational growth while staying updated with the latest technologies.
                </p>
            `;
            break;
        case 'education':
            content = `
                <h2>Education</h2>
                <ul>
                    <li><strong>B-Tech (CSE)</strong> - BV Raju Institute of Technology, Narsapur, Medak (2022-2026) - CGPA: 7.43</li>
                    <li><strong>Intermediate (MPC)</strong> - Narayana Junior College (2020-2022) - Percentage: 93.2%</li>
                    <li><strong>Secondary School (SSC)</strong> - ABHI High School (2020) - GPA: 10.0</li>
                </ul>
            `;
            break;
        case 'skills':
            content = `
                <h2>Skills</h2>
                <h3>Technical Skills</h3>
                <ul>
                    <li>Programming: C, Python, Java</li>
                    <li>Front-end: HTML, CSS, Bootstrap, ReactJS, JavaScript</li>
                    <li>Back-end: MySQL, Oracle, MongoDB</li>
                    <li>Tools: Power BI</li>
                </ul>
                <h3>Personal Skills</h3>
                <ul>
                    <li>Adaptability and Flexibility</li>
                    <li>Communication and Time Management</li>
                    <li>Logical Thinking and Problem Solving</li>
                    <li>Leadership and Teamwork</li>
                </ul>
            `;
            break;
        case 'projects':
            content = `
                <h2>Projects</h2>
                <div class="project">
                    <h3>Diabetic Foot Ulcer Detector</h3>
                    <p>
                        A deep learning-based project that uses Python modules to analyze foot images and detect diabetic foot ulcers. The system checks whether a patient is suffering from a foot ulcer based on the input image.
                    </p>
                </div>
            `;
            break;
        case 'contact':
            content = `
                <h2>Contact</h2>
                <p>Email: <a href="mailto:alakuntasridhar26@gmail.com">alakuntasridhar26@gmail.com</a></p>
                <p>Phone: +91 8897064396</p>
                <p>LinkedIn: <a href="www.linkedin.com/in/alakuntasridhar-2a8015283">LinkedIn Profile</a></p>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            `;
            break;
        default:
            content = `<p>No content available for this category.</p>`;
    }

    // Update the content section
    contentDiv.innerHTML = content;
}
