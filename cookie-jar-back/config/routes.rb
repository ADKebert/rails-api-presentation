Rails.application.routes.draw do
  scope module: :v1, constraints: ApiConstraint.new(version: 1) do
    resources :cookies, only: :index
  end

  scope module: :v2, constraints: ApiConstraint.new(version: 2) do
    resources :cookies, only: :index
  end
end
