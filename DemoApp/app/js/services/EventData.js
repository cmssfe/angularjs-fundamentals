eventsApp.factory('eventData', function ($http,$log) {
    // return {
    //     event: {
    //         name: "Angular Boot　Camp",
    //         date: "2016/4/16",
    //         time: "11:57 am",
    //         location: {
    //             address: "Google Headquarters",
    //             city: "Moutain View",
    //             province: "CA"
    //         },
    //         imageUrl: "/img/angularjs-logo.png",
    //         sessions: [
    //             {
    //                 name: "Session1",
    //                 creatorName: "Bob Smith",
    //                 duration: 1,
    //                 level: "introductory",
    //                 abstract: "IN this session you will learn the ins and outs of diretive",
    //                 upVouteCount: 1
    //             },
    //             {
    //                 name: "Session1",
    //                 creatorName: "Bob Smith",
    //                 duration: 2,
    //                 level: "introductory",
    //                 abstract: "IN this session you will learn the ins and outs of diretive",
    //                 upVouteCount: 3
    //             },
    //             {
    //                 name: "Session1",
    //                 creatorName: "Bob Smith",
    //                 duration: 3,
    //                 level: "advanced",
    //                 abstract: "IN this session you will learn the ins and outs of diretive",
    //                 upVouteCount: 2
    //             },
    //             {
    //                 name: "Session1",
    //                 creatorName: "Bob Smith",
    //                 duration: 4,
    //                 level: "intermediate",
    //                 abstract: "IN this session you will learn the ins and outs of diretive",
    //                 upVouteCount: 4
    //             }
    //         ]
    //     }
    // };

    return {
        getEvent: function (successcb) {
            $http({
                method: "GET",
                url: "/data/event/1"
            }).success(function (data,status,headers,config) {
                successcb(data);
            }).error(function () {
                $log.warn(data,status,headers(),config)
            });
        }
    }
});