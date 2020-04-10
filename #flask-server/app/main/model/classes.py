from .. import db


class Classes(db.Model):
    """ Classes Model for storing classes and their related details """
    __tablename__ = "classes"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    public_id = db.Column(db.String(100), unique=True)
    youtube_id = db.Column(db.String(20), nullable=False)
    name = db.Column(db.String(20), nullable=False)
    time = db.Column(db.String(30), nullable=False)
    price = db.Column(db.String(20), nullable=False, default="3.00")
    preview_image_url = db.Column(db.String)

    def __repr__(self):
        return "<Classes '{}'>".format(self.public_id)
