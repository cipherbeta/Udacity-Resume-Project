// Creates a function that checks to see if an element has been defined. Keeps us from
// Having to deal with 'undefined' or extra formatting on the page if we don't have the info available.
var emptyCheck = function(jsonElement) {
  if (typeof jsonElement !== "undefined" && jsonElement.length > 0) {
    return true; // We'll use this to check if certain info is available, hide if undefined. or string length 0.
  }
};

// Streamlines insert process to streamline code
var insertData = function(formattedData, originalData, referencePoint, insertPoint, insertStyle) {
  var formattedData = originalData.replace("%data%", referencePoint);
  $(insertPoint)[insertStyle](formattedData);
};
// proper format is as follows
// insertData("formatted helper var", helper html var, JSON reference, "insert location", "JQuery placement");

// Add .display funtion to bio variable so we can call it later.
bio.display = function() {
  if (emptyCheck(bio.name)) {
    insertData("formattedHeaderName", HTMLheaderName, bio.name, "#header", "prepend");
  };

  if (emptyCheck(bio.role)) {
    insertData("formattedHeaderRole", HTMLheaderRole, bio.role, "#name", "after");
  };

  if (emptyCheck(bio.biopic)) {
    insertData("formattedBioPic", HTMLbioPic, bio.biopic, "#header", "append");
  };

  if (emptyCheck(bio.welcome)) {
    insertData("formattedWelcomeMsg", HTMLwelcomeMsg, bio.welcome, "#header", "append");
  };
  // Append list of skills to header
  if (emptyCheck(bio.skills)) {
    $("#header").append(HTMLskillsStart);
    for (skill = 0; skill < bio.skills.length; skill++) {
      insertData("formattedSkill", HTMLskills, bio.skills[skill], "#skills", "append");
    };
  };
};

// Add .display function to bio.contacts for calling later. One var for appendLocation so we can put it where we want.
bio.contacts.display = function(appendLocation) {

  if (emptyCheck(bio.contacts.mobile)) {
    insertData("formattedHTMLmobile", HTMLmobile, bio.contacts.mobile, appendLocation, "append");
  };

  if (emptyCheck(bio.contacts.email)) {
    insertData("formattedHTMLemail", HTMLemail, bio.contacts.email, appendLocation, "append");
  };

  if (emptyCheck(bio.contacts.twitter)) {
    insertData("formattedHTMLtwitter", HTMLtwitter, bio.contacts.twitter, appendLocation, "append");
  };

  if (emptyCheck(bio.contacts.github)); {
    insertData("formattedHTMLgithub", HTMLgithub, bio.contacts.github, appendLocation, "append");
  };

  if (emptyCheck(bio.contacts.blog)) {
    insertData("formattedHTMLblog", HTMLblog, bio.contacts.blog, appendLocation, "append");
  };

  if (emptyCheck(bio.contacts.mobile)) {
    insertData("formattedHTMLlocation", HTMLlocation, bio.contacts.location, appendLocation, "append");
  };
}

// Add .display function to our job history so we can call it later.
work.display = function() {
  for (job = 0; job < work.jobs.length; job++) {
    $("#workExperience").append(HTMLworkStart);

    if (emptyCheck(work.jobs[job].employer)) {
      insertData("formattedHTMLworkEmployer", HTMLworkEmployer, work.jobs[job].employer, ".work-entry:last", "append");
    };

    if (emptyCheck(work.jobs[job].dates)) {
      insertData("formattedHTMLworkDates", HTMLworkDates, work.jobs[job].dates, ".work-entry:last", "append");
    };

    if (emptyCheck(work.jobs[job].location)) {
      insertData("formattedHTMLworkLocation", HTMLworkLocation, work.jobs[job].location, ".work-entry:last", "append");
    };

    if (emptyCheck(work.jobs[job].title)) {
      insertData("formattedHTMLworkTitle", HTMLworkTitle, work.jobs[job].title, ".work-entry a:last", "append");
    };

    if (emptyCheck(work.jobs[job].description)) {
      insertData("formattedHTMLworkDescription", HTMLworkDescription, work.jobs[job].description, ".work-entry:last", "append")
    };
  };
};

// Add .display function to our projects so we can call it later
projects.display = function() {
  for (project = 0; project < projects.projects.length; project++) {
    $("#projects").append(HTMLprojectStart);

    if (emptyCheck(projects.projects[project].title)) {
      insertData("formattedHTMLprojectTitle", HTMLprojectTitle, projects.projects[project].title, ".project-entry:last", "append");
    };

    if (emptyCheck(projects.projects[project].dates)) {
      insertData("formattedHTMLprojectDates", HTMLprojectDates, projects.projects[project].dates, ".project-entry:last", "append");
    }

    if (emptyCheck(projects.projects[project].title)) {
      insertData("formattedHTMLprojectDescription", HTMLprojectDescription, projects.projects[project].description, ".project-entry:last", "append");
    };

    if (emptyCheck(projects.projects[project].images)) {
      for (image = 0; image < projects.projects[project].images.length; image++) {
        insertData("formattedHTMLprojectImage", HTMLprojectImage, projects.projects[project].images[image], ".project-entry:last", "append");
      };
    };
  };
};

// Add .display function to our edu history for calling later
education.display = function() {
  for (school = 0; school < education.schools.length; school++) {
    // Begin appending school history
    $("#education").append(HTMLschoolStart);

    if (emptyCheck(education.schools[school].name)) {
      insertData("formattedHTMLschoolName", HTMLschoolName, education.schools[school].name, ".education-entry:last", "append");
    };

    // Change href value for name to match url
    if (emptyCheck(education.schools[school].url)) {
      $("a:last").attr("href", education.schools[school].url);
    }

    if (emptyCheck(education.schools[school].degree)) {
      insertData("formattedHTMLschoolDegree", HTMLschoolDegree, education.schools[school].degree, ".education-entry:last a:first-child", "append");
    };

    if (emptyCheck(education.schools[school].dates)) {
      insertData("formattedHTMLschoolDates", HTMLschoolDates, education.schools[school].dates, ".education-entry:last a:first-child", "after");
    };

    if (emptyCheck(education.schools[school].location)) {
      insertData("formattedHTMLschoolLocation", HTMLschoolLocation, education.schools[school].location, ".education-entry:last .date-text", "after");
    };

    if (emptyCheck(education.schools[school].majors)) {
      insertData("formattedHTMLschoolMajor", HTMLschoolMajor, education.schools[school].majors, ".education-entry:last .date-text", "after");
    };
  };

  // Being appending Online Courses
  $("#education").append(HTMLonlineClasses);

  for (course = 0; course < education.onlineCourses.length; course++) {
    $("#education").append(HTMLschoolStart);
    if (emptyCheck(education.onlineCourses[course].title)) {
      insertData("formattedHTMLonlineTitle", HTMLonlineTitle, education.onlineCourses[course].title, ".education-entry:last", "append");
    };
    if (emptyCheck(education.onlineCourses[course].school)) {
      insertData("formattedHTMLonlineSchool", HTMLonlineSchool, education.onlineCourses[course].school, ".education-entry a:last", "append");
    };
    if (emptyCheck(education.onlineCourses[course].dates)) {
      insertData("formattedHTMLonlineDates", HTMLonlineDates, education.onlineCourses[course].dates, ".education-entry:last", "append");
    };
    if (emptyCheck(education.onlineCourses[course].url)) {
      insertData("formattedHTMLonlineURL", HTMLonlineURL, education.onlineCourses[course].url, ".education-entry:last", "append");
    };
  };
};

// Appending google maps div to #mapDiv
var mapDisplay = function() {
  $("#mapDiv").append(googleMap);
}

// Display Bio info
bio.display();

// Display contact information in header
bio.contacts.display("#topContacts");

// Display work information
work.display();

// Display product information
projects.display();

// Display education information
education.display();

// Append map div
mapDisplay();

// Display contact information in footer
bio.contacts.display("#footerContacts");
