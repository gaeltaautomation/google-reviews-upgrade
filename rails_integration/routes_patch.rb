# config/routes.rb — PATCH (pridať do resource :shop bloku)
#
# resource :shop, only: [:show, :edit, :update] do
#   collection do
#     get :install
#     post :uninstall
#     patch :update_new_admin    # ← NOVÉ
#   end
# end
#
# A mimo resource bloku:
# get 'shop/data', to: 'shops#show_json'   # ← NOVÉ (JSON endpoint pre nový admin)
