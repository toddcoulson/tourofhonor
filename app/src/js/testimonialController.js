app.controller('TestimonialController', ['$scope', function($scope) {
    console.log("testimonial log");
    $scope.testimonials = [{"testimonial":"Commendations to the Bucks County Commissioners, Joe Szafran, recorder of deeds and all those who participated and contributed to the Washington, DC Tour of Honor trip for World War II and Korea veterans on Sept. 26. <br>It was a trip of a lifetime and very exciting for all involved, especially seeing the many service monuments and the care and concern of the guardians accompanying us. Very few of us were under 80 and one veteran was celebrating his 99th birthday.<br>   The trip home was especially emotional. We arrived back in Pennsylvania with police, motorcycle and fire trucks escorting the buses. On each bridge passing over I-95 up to the airport there were fire ladder trucks with hanging flags and firemen saluting the vets’ buses.<br>An electronic sign said “Welcome Home Vets.”<br>The welcome back to the Parx Casino and dinner was greeted by Boy and Girl Scouts, Vietnam veterans and so many cheering people. Two bands and Mummers were involved.<br>The spirit shown was unbelievable and so gratifying that so many people appreciated our service to our country.<br>I will be forever grateful for the experience.", "from":"John"},
                           {"testimonial":"Please accept my heartfelt thanks for the wonderful “Bucks County Tour of Honor” trip to the memorials in Washington, DC for the World War II and Korean War Veterans, September 26th. Everything was planned and carried out in the best way possible. It’s hard to say which was the most outstanding.<br>The police escort along with all the motorcycles, the many billboards along I95, mail call, the laying of the wreath at the tomb of the unknown and changing of the guards at Arlington Cemetery and the World War II memorial. Visiting the Air Force memorial, with the drill team performance and lunch.<br>The Welcome Home reception at Parx with school bands playing, mummers strutting their stuff, choirs singing, Boy Scouts with their signs, and flags waving. All the dignitaries and happy people who were there to show their appreciation and welcome us back home.<br>I now carry the star that was once part of a flag in my pocket. The stars that symbolize each state in our great nation.<br>This event will be a day I will long remember and cherish. May this tradition be carried out for the veterans of other war that followed, so they too may know the thrill and pride we experienced.", "from":"Tom"},
                           {"testimonial":"My Dad, Edward, and I were fortunate enough to be part of this year’s Tour of Honor. It’s a day that neither one of us will ever forget. You and your team did an amazing job and I can’t even wrap my head around the effort involved in planning the day. No detail was left undone.<br>Please accept this donation towards future Tours of Honor. It was incredibly inspiring to see these veterans get the thanks they so deserve. As we all know, freedom isn’t fee and these brave men and women served to protect that freedom. It was an honor and a very humbling experience for me to be able to share the day with them.<br>Again, my sincere thanks to you and your team for a job well done!", "from":"Randi"},
                           {"testimonial":"To you and all the other people who helped in any way with the trip to Washington, my hat is off to you. Words cannot show how much it meant to me and I am still dazed by all that you did. This trip was so well organized and carried out with perfection, the timing, amount of effort and enormous planning made it to be a perfect day for all of us, one we will not soon forget. From the time we came at 4am, Breakfast on time and delicious, travel on bus great as they passed out goodies all the way, Lunch was good and ending the day with a wonderful dinner and entertainment. To think that you worked so hard and included so many things, it had me to tears. The escort to home with fire trucks, motorcycles and police cars was tremendous. Each fireman, police and citizen to salute us and give so much of their time and talent to make a day for us. Everyone did so much to honor me. I cannot say thanks enough. This day will stay with me forever. God Bless America and my best to everyone involved. You made a day I’ll never forget.", "from":"Chester"},{"testimonial":"Today I worked a Blood Drive at the West End Fire House in Quakertown. The regular Red Cross Volunteer there is a 96 year old man named Chet. He is a dear man-very sweet-and the public loves him-many people give blood at that drive just to see Chet.<br>Well today-he walked over to the Canteen table at least 4 times to tell people about his Tour of Honor trip.<br>He was one of those 6 buses – with his son as his Escort.<br>He said that it was the “greatest honor of his life”.<br>He talked about the breakfast, - the shirt, jacket & hat, - the snacks on the bus, - the precision of every activity – the way they said “Escorts Up” – the changing of the guards – the monuments – the way they were saluted as they traveled about – the lunch truck – “MAIL CALL” on the bus – the ride home with the motorcycles and police escorts and firetrucks up on the bridges – the Red Carpet – the dinner – the Andrews Sisters – the speakers – Rosie the Riveter.<br>He went on and on and the first 2 times he told it – I cried.<br>He was so proud that he was invited to go. He was so proud that his son was with him. He had fought in the Battle of the Bulge – and he came home from the war – “kind of beat up” and needed many surgeries. <br>I just wanted Jerry to know that it is a WONDERFUL thing that he does each year and that for this great old guy – it was one of the most memorable – HAPPY – days of his life.", "from":"Patty"},{"testimonial":"I want to congratulate you and your staff on a GREAT trip on Sept. 26, 2016. The planning and organization was beyond belief. Our experience on Bus No. 1 with Tom and Jerry (our bus captains) was excellent.<br>The volunteers at the PARX were also a critical part of the operation; to register everyone and provide our “gear” for the trip in a timely fashion.<br>The ESCORTS were an experience that most of us have never experienced. On our bus most enjoyed watching this. In D.C. it was critical to maintain your predetermined schedule. It also allowed us to arrive on schedule as well as our return to the PARX.<br>Had I known what to expect it would have been on the top of my “bucket list”. This was a day I will forever remember. THANK YOU again for a memorable day!!", "from":"Frank"},{"testimonial":"Thank you so much for the DVD as well as a wonderful day on 9/26. I attended as my Dad’s guardian and it was the best day ever for both of us. I couldn’t have been more proud of him! Everyone on our team – especially our “red bus captains” – Michael and Cheryl did a fantastic job! Everyone was so helpful and showed our great veterans such respect that they so deserve. I have received many letters from you and your team thanking me for my service as a guardian that day, but all of us should be thanking all of you! You provided my Dad & all the veterans a day they will never forget. God bless you all!", "from":"Mary Ellen"}];
    $scope.usedTestimonials =[];
    $scope.selectTestimonial = function(){
        
        $scope.randomTestimonial();
    };
    
    $scope.randomTestimonial = function(){
        if($scope.testimonials.length === 0){
            delete $scope.testimonials;
            $scope.testimonials = $scope.usedTestimonials.slice();
            $scope.usedTestimonials = [];
        }
        $scope.current = Math.floor(Math.random() * $scope.testimonials.length);
        $scope.usedTestimonials.push($scope.testimonials.splice($scope.current, 1)[0]);
        
        console.log("called random"+ $scope.current);
        $scope.setTestimonialValue();
    };
    $scope.setTestimonialValue =function(){
        $scope.testimonialValue = $scope.usedTestimonials[$scope.usedTestimonials.length-1];
        console.log($scope.usedTestimonials +"\n"+$scope.testimonials )
    }
    //{"testimonial":"", "from":""}
 }])
.controller('HeaderController', ['$scope', '$state','ShowsService', function($scope, $state, ShowsService) {
    console.log('header is reached');
    
     $scope.stateis = function(curstate) {
       return $state.is(curstate);  
    };
 }])
.controller('ContentController', ['$scope','ShowsService', function($scope, ShowsService) {
    console.log('content is reached');
 }])
.controller('AllController', ['$scope', '$state','ShowsService', function($scope, $state, ShowsService) {
    $scope.$state = $state;
 }])
.controller('FooterController', ['$scope','ShowsService', function($scope, ShowsService) {
    console.log('footer is reached');
 }]);