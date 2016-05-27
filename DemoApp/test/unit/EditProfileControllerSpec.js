'use strict'
describe('EditProfileControllerSpec',function(){
    
    var $controllerConstructor,scope,mockGravatarUrlBuilder;
    
    beforeEach(module("eventsApp"));
    beforeEach(inject(function($controller,$rootScope){
        $controllerConstructor=$controller;
        scope=$rootScope.$new();
        mockGravatarUrlBuilder=sinon.stub({buildGravatarUrl:function(){
            
        }});
    }));
    
    
    it('should build the gravatar with the give email',function(){
          
        $controllerConstructor("EditProfileController",{
            '$scope':scope,
            gravatarUrlBuilder:mockGravatarUrlBuilder
        });
        var email="v-lee@hotmail.com";
        
        scope.getGravatarUrl(email);
        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
    });
});