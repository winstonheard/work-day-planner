$(function () {
    // Display the current date in the header of the page.
    const currentDay = dayjs().format('MMMM D, YYYY');
    $('#currentDay').text(currentDay);
  
    // Apply the past, present, or future class to each time block.
    $('.time-block').each(function () {
      const hour = parseInt($(this).attr('id').split('-')[1]);
      const currentHour = dayjs().hour();
  
      if (hour < currentHour) {
        $(this).addClass('past');
      } else if (hour === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  
    // Get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
    $('.time-block').each(function () {
      const hour = $(this).attr('id');
      const savedEvent = localStorage.getItem(hour);
  
      if (savedEvent) {
        $(this).find('textarea').val(savedEvent);
      }
    });
  
    // Add a listener for click events on the save button.
    $('.saveBtn').on('click', function () {
      const timeBlock = $(this).closest('.time-block');
      const hour = timeBlock.attr('id');
      const description = timeBlock.find('textarea').val();
  
      localStorage.setItem(hour, description);
    });
  });