  var currentTab = 0; // Current tab is set to be the first tab (0)
  showTab(currentTab); // Display the current tab

  function showTabByStep(n) {
    // check the finished steps
    if ($('.indicators .step.done').length < n) {
      return false;
    }
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("mtab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    if (!x[currentTab]) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    currentTab = n;
    showTab(currentTab);
  }

  function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("mtab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "סיים"; // Submit
    } else {
      document.getElementById("nextBtn").innerHTML = "הבא"; // Next
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
  }

  function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("mtab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    if (!x[currentTab]) return false;
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
      // ... the form gets submitted:
      // document.getElementById("newQuestionnaireForm").submit();
      window.location.reload();
      return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }

  function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("mtab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[currentTab].className += " done";
    }
    return valid; // return the valid status
  }

  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";

    // when progress is 22th step, init signature
    if(currentTab == 21) {
      initSignaturePad();
    }
  }

function initSignaturePad() {
  resizeSignaturePad();

  $('#signature-pad').signaturePad({
    drawOnly: true,
    defaultAction: 'drawIt',
    validateFields: false,
    lineWidth: 0,
    output: null,
    sigNav: null,
    name: null,
    typed: null,
    clear: '#signature-clear',
    typeIt: null,
    drawIt: null,
    typeItDesc: null,
    drawItDesc: null,
    bgColour :'#f9f9f9',
    penColour :'#145394',
    penWidth : 2,

    onDrawEnd: function() {
      console.log('draw end, signature result: ', $('canvas.pad')[0].toDataURL("image/png"));
    }
  });
}

function resizeSignaturePad() {
  $('canvas.pad').attr({
    height: $('#signature-pad').innerHeight(),
    width: $('#signature-pad').innerWidth()
  });
}

$(document).ready(function() {
  window.addEventListener('orientationchange', initSignaturePad, false);
  window.addEventListener('resize', initSignaturePad, false);
  initSignaturePad();
});


// ******** form-children-dependents-detail *********** //
function duplicateChildrenDependentsDetailRow() {
  var children_dependents_detail_row = '<div class="row children-dependents-detail-row">'+
                                        '<div class="col-xl-2 col-lg-2 col-md-2 col-sm-4">'+
                                          '<div class="form-group">'+
                                            '<input type="text" class="form-control" placeholder="TEXT" />'+
                                          '</div>'+
                                        '</div>'+
                                        '<div class="col-xl-2 col-lg-2 col-md-2 col-sm-4">'+
                                          '<div class="form-group">'+
                                            '<input type="text" class="form-control" placeholder="TEXT" />'+
                                          '</div>'+
                                        '</div>'+
                                        '<div class="col-xl-2 col-lg-2 col-md-2 col-sm-4">'+
                                          '<div class="row">'+
                                            '<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">'+
                                              '<div class="form-group">'+
                                                '<select class="form-control">'+
                                                  '<option>M</option>'+
                                                  '<option>F</option>'+
                                                '</select>'+
                                              '</div>'+
                                            '</div>'+
                                            '<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">'+
                                              '<div class="form-group">'+
                                                '<input type="text" class="form-control" placeholder="NUMBER" />'+
                                              '</div>'+
                                            '</div>'+
                                          '</div>'+
                                        '</div>'+
                                        '<div class="col-xl-2 col-lg-2 col-md-2 col-sm-4">'+
                                          '<div class="form-group">'+
                                            '<select class="form-control">'+
                                              '<option>LIST</option>'+
                                            '</select>'+
                                          '</div>'+
                                        '</div>'+
                                        '<div class="col-xl-2 col-lg-2 col-md-2 col-sm-4">'+
                                          '<div class="form-group">'+
                                            '<input type="text" class="form-control" placeholder="TEXT" />'+
                                          '</div>'+
                                        '</div>'+
                                        '<div class="col-xl-2 col-lg-2 col-md-2 col-sm-4">'+
                                          '<div class="form-group">'+
                                            '<input type="text" class="form-control" placeholder="TEXT" />'+
                                          '</div>'+
                                        '</div>'+
                                        '<a class="cs-btn-icon btn-delete m-0" href="javascript:void(0)"></a>'+
                                      '</div>';

  $('#children-dependents-detail .form-children-dependents-detail').append(children_dependents_detail_row);
}

$(document).on('click', '.children-dependents-detail-row .btn-delete', function() {
  $(this).closest('.children-dependents-detail-row').remove();
});