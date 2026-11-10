/*
  Module 2 - Assignment 2
  Dynamic Websites & Applications

  Group Members:
   - Daniel Wright          [2401010405]
   - Gabrielle Lawerence    [ID]
   - Aliahh Thompson        [ID]
   - Nathan Chen            [ID]
 */

$(document).ready(function () {
  $('#employeeTable').DataTable({
    ajax: 'MOCK_DATA.json',
    columns: [
      { data: 'id' },
      { data: 'name' },
      { data: 'email' },
      { data: 'department' },
      { data: 'position' },
      { data: 'office' },
      { data: 'start_date' },
      { data: 'status' }
    ]
  });
});