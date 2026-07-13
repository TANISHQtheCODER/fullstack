// Chatbot module

function getResponse(question) {

    question = question.toLowerCase();

    if (question.includes("fees")) {
        return "College fees are Rs. 50,000 per year.";
    }

    else if (question.includes("timing")) {
        return "College timing is 9:00 AM to 4:00 PM.";
    }

    else if (question.includes("admission")) {
        return "Admissions start in June every year.";
    }

    else if (question.includes("course")) {
        return "We offer BCA, BSc IT, MCA, and MBA courses.";
    }

    else {
        return "Sorry, I don't understand your question.";
    }

}

module.exports = getResponse;