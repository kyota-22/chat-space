# Users
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index: true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|

## Associations
- has_many :messages
- has_many :groups, through: :group_users
- has_many :group_users

# Groups
|Column|Type|Options|
|------|----|-------|
|name|string|null: false,|

## Associations
- has_many :messages
- has_many :users, through: :group_users
- has_many :group_users

# group_users
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
|image|string|
|body|text|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

## Associations
- belongs_to :user
- belongs_to :group