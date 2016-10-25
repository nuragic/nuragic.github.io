function onLinkedInLoad() {
  IN.API.Profile("me").result(displayProfiles);
  //IN.Event.on(IN, "auth", onLinkedInAuth);
}

function onLinkedInAuth() {
  IN.API.Profile("me").result(displayProfiles);
}

function displayProfiles(profiles) {
     var member = profiles.values[0];
     document.getElementById("profiles").innerHTML =
          "<p id=\"" + member.id + "\">Hello " +  member.firstName + " " + member.lastName + "</p>";
}