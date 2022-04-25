# Build new Rails app:

  $ rails new learn_band -d postgresql -T
  $ cd learn_band
  $ rails db:create
  $ rails g model BandMember
  $ rails db:migrate


# Adding columns to table

  $ rails g migration add_columns_to_band_members

- Inside our migration file we will update our change method

```ruby
  def change
    # order matters!  Model, column, data type
    add_column :band_members, :name, :string
    add_column :band_members, :instrument, :string
  end
```

  $ rails db:migrate
  Running via Spring preloader in process 71278
== 20220425164016 CreateBandMembers: migrating ================================
-- create_table(:band_members)
   -> 0.0117s
== 20220425164016 CreateBandMembers: migrated (0.0117s) =======================

- My schema is now updated to have these columns: 

        ActiveRecord::Schema.define(version: 2022_04_25_164517) do

          # These are extensions that must be enabled in order to support this database
          enable_extension "plpgsql"

          create_table "band_members", force: :cascade do |t|
            t.datetime "created_at", precision: 6, null: false
            t.datetime "updated_at", precision: 6, null: false
            t.string "name"
            t.string "instrument"
          end

        end


- Check that server runs: $ rails s 


# Adding data to our database:
  $ rails c
  > BandMember.create name:"Elyse", instrument:"Keyboard"
  > BandMember.create name:"Samir", instrument:"Vocalist"
  > BandMember.create name:"Jonathan", instrument:"Pots and pans"
  > BandMember.create name:"Tameka", instrument:"Sax"
  > BandMember.create name:"Jack", instrument:"Harmonica"

- See all members:
  > pp BandMember.all

        [#<BandMember:0x000000012a1394a0
        id: 1,
        created_at: Mon, 25 Apr 2022 17:00:15.749042000 UTC +00:00,
        updated_at: Mon, 25 Apr 2022 17:00:15.749042000 UTC +00:00,
        name: "Elyse",
        instrument: "Keyboard">,
      #<BandMember:0x000000012a139360
        id: 2,
        created_at: Mon, 25 Apr 2022 17:00:59.424012000 UTC +00:00,
        updated_at: Mon, 25 Apr 2022 17:00:59.424012000 UTC +00:00,
        name: "Samir",
        instrument: "Vocalist">,
      #<BandMember:0x000000012a139298
        id: 3,
        created_at: Mon, 25 Apr 2022 17:01:43.657887000 UTC +00:00,
        updated_at: Mon, 25 Apr 2022 17:01:43.657887000 UTC +00:00,
        name: "Jonathan",
        instrument: "Pots and pans">,
      #<BandMember:0x000000012a1391d0
        id: 4,
        created_at: Mon, 25 Apr 2022 17:02:13.281367000 UTC +00:00,
        updated_at: Mon, 25 Apr 2022 17:02:13.281367000 UTC +00:00,
        name: "Tameka",
        instrument: "Sax">,
      #<BandMember:0x000000012a139108
        id: 5,
        created_at: Mon, 25 Apr 2022 17:02:46.090651000 UTC +00:00,
        updated_at: Mon, 25 Apr 2022 17:02:46.090651000 UTC +00:00,
        name: "Jack",
        instrument: "Harmonica">]

  > exit 

# Adding a Column

  $ rails generate migration add_column_pay_to_band_member

  ```ruby
    def change
      add_column :band_members, :pay, :integer
    end
  ```

  $ rails db:migrate

  # Rename a Column

  $ rails g migration change_name_of_pay_to_hourly_pay

  ```ruby
    def change
    rename_column :band_members, :pay, :hourly_pay
  end
  ```

  $ rails db:migrate

  - Schema file now looks like this:

        ActiveRecord::Schema.define(version: 2022_04_25_172332) do

        # These are extensions that must be enabled in order to support this database
        enable_extension "plpgsql"

        create_table "band_members", force: :cascade do |t|
          t.datetime "created_at", precision: 6, null: false
          t.datetime "updated_at", precision: 6, null: false
          t.string "name"
          t.string "instrument"
          t.integer "hourly_pay"
        end

      end

# Important notes:

- Do not modify your schema!  Any updates or changes to your database will be done with active record migrations.  
- Do not modify or delete migration files after they have been migrated into your schema