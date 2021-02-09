Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/upwork', to: redirect("https://www.upwork.com/freelancers/~01902ec28d45c0a12b")
  root to: "react#react"
end
