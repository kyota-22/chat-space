# Users
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index: true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|
|group_id|integer|null:false, foreign_key: true|

## Associations
- has_many :messages
- has_many :groups, through: :GroupUsers

# Groups
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false,|
|user_id|integer|null:false, foreign_key: true|

## Associations
- has_many :messages
- has_many :users, through: :GroupUsers

# GroupUsers
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## Associations
- belongs_to :user
- belongs_to :group

# Messages
|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|body|text|null: false,|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## Associations
- belongs_to :user
- belongs_to :group