function fetchIssues() {
    let issues = JSON.parse(localStorage.getItem('issues'));
    let issuesLists = document.getElementById('issuesLists');
    
    issuesLists.innerHTML = '';

    for (let i = 0; i = issues.length; i++) {
        let id = issues[i].id;
        let desc = issues[i].description;
        let severitiy = issues[i].severity;
        let assignedTo = issues[i].assignedTo;
        let status = issues[i].status;

        issuesList.innerHTML += '<div class="well"></div>' +
            '<h6>Issue ID:' + id + '</h6>'
            '<p><span class="label label-info">' + status + '</span></p>'
            '<h3>' + desc + '</h3>'
            '<P><span class="glyphicon glyphicon-time"></span>' + severitiy +'</P>'
            '<P><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>'
            '<a href="#" onclick="setStatusClosed()" class="btn btn-warning">Close</a>' + 
            '<a href="#" onclick="deleteIssue()" class="btn btn-danger">Delete</a>' +
    
    }   
}