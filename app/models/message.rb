class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group
  validates :content, presence: true, unless: :image?
  # unlessはifの逆の役割があります。if: :image?であれば、imageカラムが空でなければという意味になりますので、
  # unless: :image?はimageカラムが空だったらという意味です。
  # つまり、imageカラムが空の場合、contentカラムも空であれば保存しないという意味になります。
  mount_uploader :image, ImageUploader
end
