# config/routes.rb — PATCH
# Pridať tieto 2 riadky (existujúce routes NEDOTKNUTÉ):

Rails.application.routes.draw do
  # ... existujúce routes ...

  resource :shop, only: [:show, :edit, :update] do
    collection do
      get  :install
      post :uninstall
      patch :update_new_admin   # ← NOVÉ: nový admin ukladá
    end
  end

  get  'shop/data', to: 'shops#show_json'   # ← NOVÉ: nový admin načíta stav
  get  'place_search', to: 'shops#place_search'  # ← už existuje, len pre info

  # ... ostatné routes ...
end
