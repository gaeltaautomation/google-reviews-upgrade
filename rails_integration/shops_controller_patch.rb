# app/controllers/shops_controller.rb — PATCH v2
# Pridať tieto 2 metódy do ShopsController (existujúci kód NEDOTKNUTÝ)
# ─────────────────────────────────────────────────────────────────────

  # GET /shop/data — nový admin načíta stav pri otvorení
  def show_json
    @shop = Current.shop
    render json: {
      active:          @shop.enabled,
      place_id:        @shop.place_id,
      shop_name:       @shop.g_name,
      shop_address:    @shop.g_address,
      rating:          @shop.g_rating,
      ratings_total:   @shop.g_ratings_total,
      widget1:         @shop.widget_config_slot1.present? ? JSON.parse(@shop.widget_config_slot1) : nil,
      widget2:         @shop.widget_config_slot2.present? ? JSON.parse(@shop.widget_config_slot2) : nil,
      logo_url:        @shop.logo.attached? ? url_for(@shop.logo) : nil,
      # Detekcia starých klientov: má widget_style ale nemá nový config
      is_legacy_shop:  !@shop.classic_style? && @shop.widget_config_slot1.blank?
    }
  end

  # PATCH /shop/update_new_admin — nový admin ukladá
  def update_new_admin
    @shop = Current.shop

    # ON/OFF toggle
    @shop.enabled = params[:active] if params.key?(:active)

    # Place ID zmena → refresh Google API cache
    if params[:place_id].present? && params[:place_id] != @shop.place_id
      @shop.place_id = params[:place_id]
      lang = { 'czech' => 'cs', 'slovak' => 'sk', 'english' => 'en',
               'german' => 'de', 'romanian' => 'ro', 'hungarian' => 'hu',
               'italian' => 'it', 'polish' => 'pl' }.fetch(@shop.language.to_s, 'cs')
      @shop.places_api_result = Google.place_details(params[:place_id], lang, @shop.reviews_selection)
    end

    # Widget konfig JSON per slot
    @shop.widget_config_slot1 = params[:widget1].to_json if params.key?(:widget1)
    @shop.widget_config_slot2 = params[:widget2].to_json if params.key?(:widget2)

    # Logo upload cez ActiveStorage
    @shop.logo.attach(params[:shop][:logo]) if params.dig(:shop, :logo).present?

    # Logo odstránenie
    @shop.logo.purge if params[:remove_logo] == true || params[:remove_logo] == 'true'

    if @shop.save
      render json: {
        ok:            true,
        shop_name:     @shop.g_name,
        rating:        @shop.g_rating,
        ratings_total: @shop.g_ratings_total,
        logo_url:      @shop.logo.attached? ? url_for(@shop.logo) : nil
      }
    else
      render json: { ok: false, errors: @shop.errors.full_messages }, status: :unprocessable_entity
    end
  end

# ─────────────────────────────────────────────────────────────────────
# Pridať do private shop_params: NIC — update_new_admin má vlastné params
# Pridať do routes.rb — viď routes_patch.rb
