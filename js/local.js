//let date = new Date();
//document.getElementById("today").innerHTML = date.toDateString();
$(document).ready(function() {
    let monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let famNames = ["Jun Gumba", "Elsa Gumba", "Jeype Gumba", "Ac Gumba", "Jubi Gumba"];
    let time = ["Super Early","6am - 9am", "10am - 12noon", "1pm - 3pm", "4pm - 6pm", "7pm - 9pm", "Super late"];
      //var qntYears = 4;
      var selectName = $("#family");
      var selectYear = $("#year");
      var selectMonth = $("#month");
      var selectDay = $("#day");
      var currentYear = new Date().getFullYear();
      var selectTime = $("#time");
    
      
      for(var j = 0; j < 5; j++ ){
        var nameCount = j;
        var family = famNames[nameCount];
        var nameElem = document.createElement("option");
        nameElem.value = nameCount;
        nameElem.textContent = family;
        selectName.append(nameElem);
        

      }
      
      for (var y = 0; y < 4; y++){
        //let date = new Date(currentYear);
        
        var yearElem = document.createElement("option");
        
        yearElem.value = currentYear 
        
        yearElem.textContent = currentYear;
       
        selectYear.append(yearElem);
        
       currentYear++;
       
      } 
    
      for (var m = 0; m < 12; m++){
          let monthNum = new Date(2020, m).getMonth()
          
          let month = monthNames[monthNum];
          
          var monthElem = document.createElement("option");
          monthElem.value = monthNum; 
          monthElem.textContent = month;
          selectMonth.append(monthElem);
        }
    
        var d = new Date();
        var month = d.getMonth();
        var year = d.getFullYear();
        var day = d.getDate();
    
        selectYear.val(year); 
        selectYear.on("change", AdjustDays);  
        selectMonth.val(month);    
        selectMonth.on("change", AdjustDays);
    
        AdjustDays();
        selectDay.val(day)
        
        function AdjustDays(){
          var year = selectYear.val();
          var month = parseInt(selectMonth.val()) + 1;
          selectDay.empty();
          
          //get the last day, so the number of days in that month
          var days = new Date(year, month, 0).getDate(); 
          
          //lets create the days of that month
          for (var d = 1; d <= days; d++){
            var dayElem = document.createElement("option");
            dayElem.value = d; 
            dayElem.textContent = d;
            selectDay.append(dayElem);
          }
        }  
        
        for(t = 0; t < 7; t++){
            var timeCount = t;
            var timeSlot = time[timeCount];
            var timeElem = document.createElement("option");
            timeElem.value = timeCount;
            timeElem.textContent = timeSlot;
            selectTime.append(timeElem);
           

        }
    });