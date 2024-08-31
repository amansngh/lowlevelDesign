Design and implement an in-memory Rating Service. Using this rating service administrator should be able to create a new survey. Inside this survey, the admin should be able to add, update and delete questions. A question can have multiple options, where options have weights assigned. The average of answers’ weight is the rating of the question, an average of all ratings is the overall survey rating.



//Sharing with registered users.
A survey can be shared with registered users.

Admin Functionalities:
1. Admin should be able to create a survey.
2. Weight for each answer.
3. Survey response should be rated, overall rating should be shown to admin.
4. Should be able to see average rating of each question.

Users:
Users should be able to respond to the provided survey,
Users should not be allowed to re-submit a survey

//Entities/ Models
Ques : a b c d : 1 2 3 4
avg ,
totalav 
S1 (Q1, Q2)
U1, U2 functionalies.


//Models
User<Name, email, responseStatus(SurveryId), respondToSurvey(sid) listOfCompletedSurveys> //resubmit covered.
//whenever survey is completed, notify to survey manager for recalculation averages, observer pattern.

Survey[Sid, Qs, AddQues, getRating, isAdmin, isUser]
-----Question <qid, AddOptions, answer, rating, getAvgRating()> //bad design choice.
Question <qid, AddOptions, answer, rating>
options <optionText, opnWeight>
AvgRatingStategy <getRating>
AvgRatingStategy() interface IRatingStrategy.
Admin(CreateSurvey)

Admin :Create-Shared.
User : Open
Take Survey, Answer
Evaluation S1, RatingStrategy.
