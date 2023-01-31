document.getElementById('calculate').addEventListener('click', function () {

    var letterGrade = "A";
    var numericGrade = 100;

    //get the values from the form

    assignment = document.getElementById('assignment').value;
    group = document.getElementById('group').value;
    quiz = document.getElementById('quiz').value;
    midterm = document.getElementById('midterm').value;
    final = document.getElementById('final').value;
    intex = document.getElementById('intex').value;

    //calculate grade

    numericGrade = ((assignment * .5) + (group * .1) + (quiz * .1) + (midterm * .1) + (final * .1) + (intex * .1));

    //determine the letter grade

    if (numericGrade >= 94) {
        letterGrade = "A";
    } else if (numericGrade >= 90) {
        letterGrade = "A-"
    } else if (numericGrade >= 87) {
        letterGrade = "B+"
    } else if (numericGrade >= 84) {
        letterGrade = "B"
    } else if (numericGrade >= 80) {
        letterGrade = 'B-'
    } else if (numericGrade >= 77) {
        letterGrade = 'C+'
    } else if (numericGrade >= 74) {
        letterGrade = 'C'
    } else if (numericGrade >= 70) {
        letterGrade = 'C-'
    } else if (numericGrade >= 67) {
        letterGrade = 'D+'
    } else if (numericGrade >= 64) {
        letterGrade = 'D'
    } else if (numericGrade >= 60) {
        letterGrade = 'D-'
    } else {
        letterGrade = 'E'
    };

    // post results on the page

    document.getElementById('letterGrade').innerHTML = letterGrade;
    document.getElementById('numericGrade').innerHTML = numericGrade;
        });