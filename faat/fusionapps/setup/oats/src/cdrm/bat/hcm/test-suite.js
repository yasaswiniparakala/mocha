  describe("Inner Suite 1", function(){
      
        before(function(){
            
            // do something before test suite execution
            // no matter if there are failed cases
        
        });
     
        after(function(){
     
            // do something after test suite execution is finished
            // no matter if there are failed cases
     
        });
        
        beforeEach(function(){
            
            // do something before test case execution
            // no matter if there are failed cases
        
        });
     
        afterEach(function(){
     
            // do something after test case execution is finished
            // no matter if there are failed cases
     
        });
      
    //    it("Test-1", function(){
            
            // test Code
            // assertions
     
      //  });
	  
	      it("Test-1", function(done){
     
          
     
    });
     
        it("Test-2", function(){
     
              var webdriver;
			  var chrome;
			  var firefox;
			  var Cdriver;
			  var Fdriver;
			webdriver  = require('selenium-webdriver')
  //   chrome = require('selenium-webdriver/chrome'),
 firefox = require('selenium-webdriver/firefox');
     
//    Cdriver = new webdriver.Builder()
  //      .forBrowser("chrome")
    //  .setFirefoxOptions( /* … */)
     //.setChromeOptions( /* … */)
      //.build();
		
Fdriver = new webdriver.Builder()
 .forBrowser("firefox")
 .setFirefoxOptions( /* … */)
 .setChromeOptions( /* … */)
 .build();
		
Fdriver.get("http://localhost:4444/grid/register");
		
// Cdriver.get("http://www.google.com");
// Cdriver.get("http://www.facebook.com");

var should = require('chai').should() //actually call the function
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);

            

        });
     
        it("Test-3", function(){
     
            // test Code
            // assertions
     
        });
      
    });
