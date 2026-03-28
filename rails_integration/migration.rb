# db/migrate/20260328000000_add_widget_config_to_shops.rb
# Spustiť: rails db:migrate
# ADITÍVNA — existujúce stĺpce sa NEDOTÝKAJÚ

class AddWidgetConfigToShops < ActiveRecord::Migration[8.1]
  def change
    add_column :shops, :widget_config_slot1, :text, default: nil
    add_column :shops, :widget_config_slot2, :text, default: nil
  end
end
