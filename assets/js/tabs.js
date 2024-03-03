// tabs.js

$(document).ready(function() {
    // When a tab label is clicked
    $('.tab-label').click(function() {
        // Remove 'active' class from all tab labels and tab contents
        $('.tab-label').removeClass('active');
        $('.tab-content').removeClass('active');

        // Add 'active' class to the clicked tab label
        $(this).addClass('active');

        // Get the index of the clicked tab label
        var tabIndex = $(this).index();

        // Show the corresponding tab content
        $('.tab-content').eq(tabIndex).addClass('active');
    });
});
