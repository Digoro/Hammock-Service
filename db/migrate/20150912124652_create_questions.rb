class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.text  :item
      t.date  :_date
      t.timestamps null: false
    end
  end
end
