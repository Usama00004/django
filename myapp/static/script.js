$(document).ready(function() {
    $('#dataForm').submit(function(event) {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/submit/',
            data: {
                name: $('#name').val(),
                phone: $('#phone').val(),
                csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
            },
            success: function(response) {
                alert(response.message);
            }
        });
    });

    // Function to fetch data from the backend and display it
    function fetchData() {
        
        $.ajax({
            type: 'GET',
            url: '/get_data/',
            success: function(response) {
                var users = response.users;
                var output = '<h2>Fetched Data:</h2><ul>';
                for (var i = 0; i < users.length; i++) {
                    output += '<li>Name: ' + users[i].name + ', Phone: ' + users[i].phone + '</li>';
                }
                output += '</ul>';
                $('#output').html(output);
            }
        });
    }
    // Fetch data when the page is loaded
    fetchData();
});
