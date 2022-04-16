function is_empty(str) {
    return (!str || str.length === 0 );
}

function set_error_for(input, message) {
	const form_control = input.parentElement;
	const error_field = form_control.querySelector("small");

    // Add error class
	form_control.className = "flex-item error";

    // Add error message
	error_field.innerText = message;

    input.focus();
    return false;
}

function set_success_for(input) {
	const form_control = input.parentElement;

    // Add success class
	form_control.className = "flex-item success";
    return true;
}


// Input Validation
function validate_user_name() {
    const user_name_input = document.getElementById("user-name");
    const user_name = user_name_input.value.trim();
    if (is_empty(user_name)) {
        return set_error_for(user_name_input, "Name cannot be left blank");
    } else if (!(/^[a-zA-Z]*[a-zA-Z\s]*[a-zA-Z]$/.test(user_name))) {
        return set_error_for(user_name_input, "Invalid Name");
    } else {
        return set_success_for(user_name_input);
    }
}

// validate club name and event name
function validate_name() {
    const name_input = document.getElementById("name");
    const name = name_input.value.trim();
    if (is_empty(name)) {
        return set_error_for(name_input, "Name cannot be left blank");
    } else {
        return set_success_for(name_input);
    }
}

function validate_tp_number() {
    const tp_number_input = document.getElementById("tp-number");
    const tp_number = tp_number_input.value.trim();
    if (is_empty(tp_number)) {
        return set_error_for(tp_number_input, "TP number cannot be left blank");
    } else if (!/^([Tt][Pp][0-9]{6})$/.test(tp_number)) { 
        return set_error_for(tp_number_input, "Invalid TP number");
    } else {
		return set_success_for(tp_number_input);
	}
}

function validate_gender() {
    const gender_input = document.getElementById("gender");
    const gender = gender_input.value.trim();
    if (is_empty(gender)) {
        return set_error_for(gender_input, "Gender cannot be left blank");
    } else {
        return set_success_for(gender_input);
    }
}

function validate_email() {
    const email_input = document.getElementById("email-address");
    const email = email_input.value.trim();
    if (is_empty(email)) {
        return set_error_for(email_input, "Email address cannot be left blank");
    } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) { 
        return set_error_for(email_input, "Invalid email address");
    } else {
		return set_success_for(email_input);
	}
}

function validate_password() {
    const password_input = document.getElementById("password");
    const password = password_input.value.trim();
    if (!/^(?=.{8,30}$)/.test(password)) {
        return set_error_for(password_input, "Length must be between 8 and 30");
    } else if (!/^[a-zA-Z]+/.test(password)) { 
        return set_error_for(password_input, "First character must be alphabet");
    } else if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(password)) {
        return set_error_for(password_input, "Only alphanumeric and special characters are allowed");
    } else {
		return set_success_for(password_input);
	}
}

function validate_contact_number() {
    const contact_number_input = document.getElementById("contact-number");
    const contact_number = contact_number_input.value.trim();
    if (is_empty(contact_number)) {
        return set_error_for(contact_number_input, "Contact number cannot be left blank");
    } else if (/^011/.test(contact_number)) {
        if (!/^([0-9]{3})-([0-9]{8})$/.test(contact_number)) {
            return set_error_for(contact_number_input, "Numbers starting with 011 must have 8 numbers at the back");
        } else {
            return set_success_for(contact_number_input);
        } 
    } else if (!/^([0-9]{3})-([0-9]{7})$/.test(contact_number)) {
        return set_error_for(contact_number_input, "Invalid contact number");
    } else {
        return set_success_for(contact_number_input);
    }
}

function validate_add_image() {
    const image_input = document.getElementById("image");
    const image = image_input.value.trim();

    // Allowed file types
    var allowed_extensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
    if (is_empty(image)) {
        return set_error_for(image_input, "Image cannot be left blank");
    } else if (!allowed_extensions.exec(image)) {
        return set_error_for(image_input, "Only .jpg, .jpeg, .png and .gif files are allowed");
    } else if (image_input.files[0].size / 1024 / 1024 > 16) {
        return set_error_for(image_input, "Image size should not exceed 16 MiB");
    } else {
        return set_success_for(image_input);
    }
}

function validate_edit_image() {
    const image_input = document.getElementById("image");
    const image = image_input.value.trim();

    // Allowing file type
    var allowed_extensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
    if (!is_empty(image)) {

        // https://www.geeksforgeeks.org/file-type-validation-while-uploading-it-using-javascript/
        if (!allowed_extensions.exec(image)) {
            return set_error_for(image_input, "Only .jpg, .jpeg, .png and .gif files are allowed");
            
        // https://stackoverflow.com/questions/3717793/javascript-file-upload-size-validation
        } else if (image_input.files[0].size / 1024 / 1024 > 5) {
            return set_error_for(image_input, "Image size should not exceed 5 MiB");
        }
    }
    return set_success_for(image_input);
}

function validate_description() {
    const description_input = document.getElementById("description");
    const description = description_input.value.trim();
    if (is_empty(description)) {
        return set_error_for(description_input, "Description cannot be left blank");
    } else {
        return set_success_for(description_input);  
    }
}

function validate_day() {
    const day_input = document.getElementById("day");
    const day = day_input.value.trim();
    if (is_empty(day)) {
        return set_error_for(day_input, "Day cannot be left blank");
    } else {
        return set_success_for(day_input);  
    }
}

function validate_start_time() {
    const start_time_input = document.getElementById("start-time");
    const start_time = start_time_input.value.trim();
    if (is_empty(start_time)) {
        return set_error_for(start_time_input, "Start time cannot be left blank");
    } else if (!/^[0-9]{1,2}:[0-9]{2}/.test(start_time)) {
        return set_error_for(start_time_input, "Invalid start time format");
    } else {
        return set_success_for(start_time_input);
    }
}

function validate_end_time() {
    const end_time_input = document.getElementById("end-time");
    const end_time = end_time_input.value.trim();
    if (is_empty(end_time)) {
        return set_error_for(end_time_input, "End time cannot be left blank");
    } else if (!/^[0-9]{1,2}:[0-9]{2}/.test(end_time)) {
        return set_error_for(end_time_input, "Invalid end time format");
    } else {
        return set_success_for(end_time_input);
    }
}

function validate_venue() {
    const venue_input = document.getElementById("venue");
    const venue = venue_input.value.trim();
    if (is_empty(venue)) {
        return set_error_for(venue_input, "Venue cannot be left blank");
    } else {
        return set_success_for(venue_input);  
    }
}

function validate_date() {
    const date_input = document.getElementById("date");
    const date = date_input.value.trim();
    
    if (is_empty(date)) {
        return set_error_for(date_input, "Date cannot be left blank");
    } else {
        return set_success_for(date_input);  
    }
}

function validate_organizing_club() {
    const organizing_club_input = document.getElementById("organizing-club");
    const organizing_club = organizing_club_input.value.trim();
    if (is_empty(organizing_club)) {
        return set_error_for(organizing_club_input, "Organizing club cannot be left blank");
    } else {
        return set_success_for(organizing_club_input);  
    }
}

function validate_approval_status() {
    const approval_status_input = document.getElementById("approval-status");
    const approval_status = approval_status_input.value.trim();
    if (is_empty(approval_status)) {
        return set_error_for(approval_status_input, "Approval Status cannot be left blank");
    } else {
        return set_success_for(approval_status_input);  
    }
}


// Student Validation
function validate_student() {
    var contact_number = validate_contact_number();
    var password = validate_password();
    var email = validate_email();
    var gender = validate_gender();
    var tp_number = validate_tp_number();
    var student_name = validate_user_name();
    
    const validation = [student_name, tp_number, gender, email, password, contact_number];
    if (validation.includes(false)) {
        return false;
    } else {
        return true;
    }
}

// Club Validation
function validate_add_club() {
    var venue = validate_venue();
    var end_time = validate_end_time();
    var start_time = validate_start_time();
    var day = validate_day();
    var image = validate_add_image();
    var description = validate_description();
    var contact_number = validate_contact_number();
    var club_email = validate_email();
    var club_name = validate_name();

    const validation = [club_name, club_email, contact_number, description, image, day, start_time, end_time, venue];
    if (validation.includes(false)) {
        return false;
    } else {
        return true;
    }
}

function validate_edit_club() {
    var venue = validate_venue();
    var end_time = validate_end_time();
    var start_time = validate_start_time();
    var day = validate_day();
    var image = validate_edit_image();
    var description = validate_description();
    var contact_number = validate_contact_number();
    var club_email = validate_email();
    var club_name = validate_name();

    const validation = [club_name, club_email, contact_number, description, image, day, start_time, end_time, venue];
    if (validation.includes(false)) {
        return false;
    } else {
        return true;
    }
}

// Event Validation
function validate_add_event() {
    var end_time = validate_end_time();
    var start_time = validate_start_time();
    var date = validate_date();
    var description = validate_description();
    var organizing_club = validate_organizing_club();
    var image = validate_add_image();
    var event_name = validate_name();

    const validation = [event_name, image, organizing_club, description, date, start_time, end_time];
    if (validation.includes(false)) {
        return false;
    } else {
        return true;
    }
}

function validate_edit_event() {
    var approval_status = validate_approval_status();
    var end_time = validate_end_time();
    var start_time = validate_start_time();
    var date = validate_date();
    var description = validate_description();
    var organizing_club = validate_organizing_club();
    var image = validate_edit_image();
    var event_name = validate_name();

    const validation = [event_name, image, organizing_club,description, date, start_time, end_time, approval_status];
    if (validation.includes(false)) {
        return false;
    } else {
        return true;
    }
}

// Admin Validation
function validate_admin_profile() {
    var contact_number = validate_contact_number();
    var password = validate_password();
    var email = validate_email();
    var tp_number = validate_tp_number();
    var admin_name = validate_user_name();

    const validation = [admin_name, tp_number, email, password, contact_number];
    if (validation.includes(false)) {
        return false;
    } else {
        return true;
    }
}

function validate_contact_us() {
    var inquiry = validate_inquiry();
    var contact_number = validate_contact_number();
    var email = validate_email();
    var full_name = validate_full_name();
    var validation = [full_name, email, contact_number, inquiry];
    if (validation.includes(false)) {
        return false;
    } else {
        return true;
    }
}