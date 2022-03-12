 class ReactController < ApplicationController
  def index
    @title = "React App"
    @subtitle = "React Rails app loaded from Reals controller -> Reals view passed on as props to react"
  end
end
