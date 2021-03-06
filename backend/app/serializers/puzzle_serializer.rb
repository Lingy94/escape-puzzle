class PuzzleSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :difficulty, :answer, :points, :creator
  has_many :points  
  class PointSerializer < ActiveModel::Serializer

      attributes :id, :xcoordinate, :ycoordinate, :text, :box
    end
end
