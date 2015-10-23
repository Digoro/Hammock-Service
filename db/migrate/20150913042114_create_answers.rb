class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      
      t.date  :_date
      t.string  :e_mail
      t.text  :todayQuestion
      t.text  :usersAnswer

      t.timestamps null: false
    end
  end
end
