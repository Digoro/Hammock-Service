class HomeController < ApplicationController
    def index
        if user_signed_in?
            @checked = Answer.where(_date: '2015-09-22', e_mail: current_user.email).take
            @todayQuestion = Question.find_by(_date: '2015-09-22')
        else
            redirect_to "/users/sign_in"
        end
    end
    
    def question
        @todayQuestion = Question.find_by(_date: '2015-09-22')
    end

    def answer
        todayQuestion = Question.find_by(_date: '2015-09-22')
        @email = current_user.email
        @date = todayQuestion._date
        @que = todayQuestion.item
        @ans = params[:content]
        saveAns = Answer.new(_date: @date, e_mail: @email, todayQuestion: @que, usersAnswer: @ans)
        saveAns.save
        
        redirect_to "/"
    end
    
    def myHammock
        @answers = Answer.where(e_mail: current_user.email)
    end
    
    def modify
        @previousAnswer = Answer.where(e_mail: current_user.email, _date: '2015-09-22').take
    end
    
    def updateAnswer
        changedAnswer = Answer.where(e_mail: current_user.email, _date: '2015-09-22').take
        changedAnswer.usersAnswer = params[:changedAnswer]
        changedAnswer.save
        redirect_to "/"
    end
    
end
