class PageLink < ApplicationRecord
  belongs_to :page
  belongs_to :user
  ROLES = ['USER', 'ADMIN', 'MANAGER']
end
