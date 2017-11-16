class User < ApplicationRecord
  has_many :user_instruments
  has_many :instruments, through: :user_instruments
  has_many :user_ensembles
  has_many :ensembles, through: :user_ensembles
  has_many :followers, :class_name => 'Fan', :foreign_key => 'followed_id'
  has_many :followeds, :class_name => 'Fan', :foreign_key => 'follower_id'
  has_many :senders, :class_name => 'Message', :foreign_key => 'sender_id'
  has_many :recievers, :class_name => 'Message', :foreign_key => 'reciever_id'

  has_secure_password

end
