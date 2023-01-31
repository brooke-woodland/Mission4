$('#calculate').click(function () {

    var letterGrade = "A";
    var numericGrade = 100;

    //get the values from the form

    assignment = $('#assignment').val();
    group = $('#group').val();
    quiz = $('#quiz').val();
    midterm = $('#midterm').val();
    final = $('#final').val();
    intex = $('#intex').val();

    //calculate grade

    numericGrade = (parseInt(assignment) * .5) + (parseInt(group) * .1) + (parseInt(quiz) * .1) + (parseInt(midterm) * .1) + (parseInt(final) * .1) + (parseInt(intex) * .1);

    alert(numericGrade);
    //determine the letter grade

    if (numericGrade >= 94) {
        letterGrade = "A";
    } else if (numericGrade >= 90) {
        letterGrade = "A-";
    } else if (numericGrade >= 87) {
        letterGrade = "B+";
    } else if (numericGrade >= 84) {
        letterGrade = "B";
    } else if (numericGrade >= 80) {
        letterGrade = 'B-';
    } else if (numericGrade >= 77) {
        letterGrade = 'C+';
    } else if (numericGrade >= 74) {
        letterGrade = 'C';
    } else if (numericGrade >= 70) {
        letterGrade = 'C-';
    } else if (numericGrade >= 67) {
        letterGrade = 'D+';
    } else if (numericGrade >= 64) {
        letterGrade = 'D';
    } else if (numericGrade >= 60) {
        letterGrade = 'D-';
    } else {
        letterGrade = 'E';
    };

    // write results on the page

    $('#letterGrade').html( "Letter Grade: " + String(letterGrade));
    $('#numericGrade').html("Numeric Grade: " + String(numericGrade));
        });