function openAbility(evt, AbilityName) {
    var i, tabcontent, tabtitles;

    // Hide all tab contents by default
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the "active" class from all tab titles
    tabtitles = document.getElementsByClassName("tabtitles");
    for (i = 0; i < tabtitles.length; i++) {
        tabtitles[i].className = tabtitles[i].className.replace(" active", "");
    }

    // Display the selected tab content and mark the clicked tab title as active
    document.getElementById(AbilityName).style.display = "block";
    evt.currentTarget.className += " active";
}
