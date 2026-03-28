# db/migrate/TIMESTAMP_add_new_admin_fields_to_shops.rb
#
# ADITÍVNA migrácia — nedotýka sa žiadnych existujúcich stĺpcov
# Pridáva len 2 nové JSON stĺpce pre nový konfigurátor
#
class AddNewAdminFieldsToShops < ActiveRecord::Migration[8.1]
  def change
    # Full widget configurator state per slot (JSON string)
    # Existujúce polia widget_style, side atď. zostávajú nedotknuté
    add_column :shops, :widget_config_slot1, :text, default: nil
    add_column :shops, :widget_config_slot2, :text, default: nil
  end
end
