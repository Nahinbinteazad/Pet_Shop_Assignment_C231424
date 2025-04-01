// document.getElementById("dog").addEventListener("click", function () {
//     let dogSection = document.getElementById("dog_section");

//     if (dogSection.classList.contains("hidden")) {
//         dogSection.classList.remove("hidden");
//         dogSection.classList.add("block"); 
//     } else {
//         dogSection.classList.add("hidden"); 
//     }
// });

// document.getElementById("bird").addEventListener("click", function () {
//     let dogSection = document.getElementById("bird_section");

//     if (dogSection.classList.contains("hidden")) {
//         dogSection.classList.remove("hidden");
//         dogSection.classList.add("block"); 
        
//     } else {
//         dogSection.classList.add("hidden"); 
//     }
// });

// document.getElementById("cat").addEventListener("click", function () {
//     let dogSection = document.getElementById("cat_section");

//     if (dogSection.classList.contains("hidden")) {
//         dogSection.classList.remove("hidden");
//         dogSection.classList.add("block"); 
//     } else {
//         dogSection.classList.add("hidden"); 
//     }
// });

const sections = ["dog_section", "bird_section", "cat_section", "turtle_section", "hamster_section", "rabbit_section"];

function toggleSection(sectionId) {
    const selectedSection = document.getElementById(sectionId);

    if (!selectedSection) return; 

    const isAlreadyVisible = !selectedSection.classList.contains("hidden");
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.classList.add("hidden");
            section.classList.remove("block");
        }
    });

    if (!isAlreadyVisible) {
        selectedSection.classList.remove("hidden");
        selectedSection.classList.add("block");
    }
}

sections.forEach(sectionId => {
    const buttonId = sectionId.replace("_section", "");
    const button = document.getElementById(buttonId);
    
    if (button) {
        button.addEventListener("click", function () {
            toggleSection(sectionId);
        });
    }
});
