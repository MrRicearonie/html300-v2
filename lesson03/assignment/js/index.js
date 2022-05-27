// Get the div to push the cards to
const container = document.querySelector('.template-hook');

// Access the data JSON file, and get the data from it
fetch('./data/data.json')
    .then(res => res.json())
    .then(data => {
        // For each entry, create the card and push it to the html file
        data.forEach(el => {
            // Get the languages known and make them into a string
            const languages = el.codeLanguages.join(', ')

            // Create the card element, and add the HTML to it
            const card = document.createElement('div')
            card.setAttribute('class', 'card-outline')
            card.innerHTML = `
            <div class="card">
                    <div class="name-section">
                        <img src="./img/headshot.jpg" alt="A small yellow dog with a black bowtie">
                        <h2>${el.name}</h2>
                        <p>${el.jobTitle}</p>
                    </div>
                    <div class="info-section">
                        <p><strong>Company:</strong> ${el.company}</p>
                        <p><strong>Experience:</strong> ${el.experience}</p>
                        <p><strong>School:</strong> ${el.school}</p>
                        <p><strong>Major:</strong> ${el.major}</p>
                        <p><strong>Email:</strong> <a href = "mailto: ${el.email}">${el.email}</a></p>
                        <p class="languages"><strong>Languages:</strong> ${languages}</p>
                        <div class="linkedin">
                            <img src="./img/linkedin.svg" alt="LinkedIn"> <p><a href="https://${el.linkedInUrl}">${el.linkedInUrl}</a></p>
                        </div>
                    </div>
                </div>
            `
            // Add the card to the page
            container.append(card)
        });
    })
