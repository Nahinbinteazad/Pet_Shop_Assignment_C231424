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

const sections = ["dog_section", "bird_section", "cat_section", "turtle_section","hamster_section","rabbit_section"];

    function showSection(sectionId) {
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                section.classList.add("hidden");
                section.classList.remove("block");
            }
        });

        const selectedSection = document.getElementById(sectionId);
        if (selectedSection && selectedSection.classList.contains("hidden")) {
            selectedSection.classList.remove("hidden");
            selectedSection.classList.add("block");
        }
    }

    document.getElementById("dog").addEventListener("click", function () {
        showSection("dog_section");
    });

    document.getElementById("bird").addEventListener("click", function () {
        showSection("bird_section");
    });

    document.getElementById("cat").addEventListener("click", function () {
        showSection("cat_section");
    });

    document.getElementById("turtle").addEventListener("click", function () {
        showSection("turtle_section");
    });

    document.getElementById("hamster").addEventListener("click", function () {
        showSection("hamster_section");
    });
    
    document.getElementById("rabbit").addEventListener("click", function () {
        showSection("rabbit_section");
    });
    
