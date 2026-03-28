# app/controllers/shops_controller.rb — PATCH (len pridať tieto metódy)
#
# Pridať do ShopsController:

  # GET /shop.json — nový admin načíta stav
  def show_json
    @shop = Current.shop
    render json: {
      active: @shop.enabled,
      place_id: @shop.place_id,
      shop_name: @shop.g_name,
      shop_address: @shop.g_address,
      rating: @shop.g_rating,
      ratings_total: @shop.g_ratings_total,
      widget1: @shop.widget_config_slot1.present? ? JSON.parse(@shop.widget_config_slot1) : nil,
      widget2: @shop.widget_config_slot2.present? ? JSON.parse(@shop.widget_config_slot2) : nil,
      logo_url: @shop.logo.attached? ? url_for(@shop.logo) : nil
    }
  end

  # PATCH /shop/update_new_admin — nový admin ukladá
  def update_new_admin
    @shop = Current.shop

    @shop.enabled = params[:active] if params.key?(:active)

    if params[:place_id].present? && params[:place_id] != @shop.place_id
      @shop.place_id = params[:place_id]
      lang = { 'czech' => 'cs', 'slovak' => 'sk', 'english' => 'en',
               'german' => 'de', 'romanian' => 'ro', 'hungarian' => 'hu',
               'italian' => 'it', 'polish' => 'pl' }.fetch(@shop.language.to_s, 'cs')
      @shop.places_api_result = Google.place_details(params[:place_id], lang, @shop.reviews_selection)
    end

    @shop.widget_config_slot1 = params[:widget1].to_json if params.key?(:widget1)
    @shop.widget_config_slot2 = params[:widget2].to_json if params.key?(:widget2)

    if @shop.save
      render json: { ok: true,
                     shop_name: @shop.g_name,
                     rating: @shop.g_rating,
                     ratings_total: @shop.g_ratings_total }
    else
      render json: { ok: false, errors: @shop.errors.full_messages }, status: :unprocessable_entity
    end
  end

# Pridať do private shop_params alebo nechať ako standalone params (odporúčam druhú možnosť)
# Pridať do routes.rb:
#   get  'shop', to: 'shops#show_json', constraints: ->(req){ req.format == :json }
#   patch 'shop/update_new_admin', to: 'shops#update_new_admin'
