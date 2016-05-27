eventsApp.factory('calendarHelper',function () {
    var monthNames=["January",'February','March','April','May','June','July',
    'August','September','October','November','December'];

    return {
        getCalendarDays:function (year,month) {
            var monthStartDate=new Date(year,month,1);

            var days=[];
            for(var index=0;index<monthStartDate.getDay();index++){
                days.push('');
            };

            for(var index=1;index<new Date(year,month+1,0).getDate();index++){
                days.push(index);
            }
            return days;
        },
        getMonthName:function (monthNumber) {
            return monthNames[monthNumber];
        }
    }
});